export type VoxelGridOptions = {
  gridCols: number;
  depthLayers: number;
  spacing: number;
  depthSpacing: number;
  threshold: number;
  erosionPasses: number;
};

export const VOXEL_GRID_DEFAULTS: VoxelGridOptions = {
  gridCols: 36,
  depthLayers: 4,
  spacing: 0.108,
  depthSpacing: 0.078,
  threshold: 0.34,
  erosionPasses: 1,
};

function erodeGrid(grid: boolean[][], passes: number) {
  let current = grid;

  for (let pass = 0; pass < passes; pass++) {
    const rows = current.length;
    const cols = current[0]?.length ?? 0;
    const next = current.map((row) => row.slice());

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (!current[row][col]) continue;

        const neighbors = [
          current[row - 1]?.[col],
          current[row + 1]?.[col],
          current[row][col - 1],
          current[row][col + 1],
        ];

        if (neighbors.some((neighbor) => !neighbor)) {
          next[row][col] = false;
        }
      }
    }

    current = next;
  }

  return current;
}

export function buildVoxelGrid(letter: string, options: Partial<VoxelGridOptions> = {}) {
  const { gridCols, depthLayers, spacing, depthSpacing, threshold, erosionPasses } = {
    ...VOXEL_GRID_DEFAULTS,
    ...options,
  };

  const canvasSize = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvasSize;
  canvas.height = canvasSize;

  const ctx = canvas.getContext("2d");
  if (!ctx) return [] as [number, number, number][];

  ctx.clearRect(0, 0, canvasSize, canvasSize);
  ctx.fillStyle = "#000000";
  ctx.font = `700 ${canvasSize * 0.72}px "Neue Haas Grotesk Text Pro", "NeueHaasText", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(letter, canvasSize / 2, canvasSize * 0.54);

  const data = ctx.getImageData(0, 0, canvasSize, canvasSize).data;
  const cell = canvasSize / gridCols;
  const occupied = Array.from({ length: gridCols }, () => Array<boolean>(gridCols).fill(false));

  for (let row = 0; row < gridCols; row++) {
    for (let col = 0; col < gridCols; col++) {
      let hits = 0;
      let samples = 0;

      for (let py = 0; py < cell; py += 2) {
        for (let px = 0; px < cell; px += 2) {
          const x = Math.floor(col * cell + px);
          const y = Math.floor(row * cell + py);
          const idx = (y * canvasSize + x) * 4;
          const alpha = data[idx + 3];
          const luminance = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
          if (alpha > 20 && luminance < 128) hits += 1;
          samples += 1;
        }
      }

      occupied[row][col] = hits / samples >= threshold;
    }
  }

  const thinned = erodeGrid(occupied, erosionPasses);
  const positions: [number, number, number][] = [];
  const depthOffset = (depthLayers - 1) / 2;

  for (let row = 0; row < gridCols; row++) {
    for (let col = 0; col < gridCols; col++) {
      if (!thinned[row][col]) continue;

      for (let depth = 0; depth < depthLayers; depth++) {
        positions.push([
          (col - gridCols / 2 + 0.5) * spacing,
          (gridCols / 2 - row - 0.5) * spacing,
          (depth - depthOffset) * depthSpacing,
        ]);
      }
    }
  }

  if (positions.length === 0) return positions;

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;

  for (const [x, y, z] of positions) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
    minZ = Math.min(minZ, z);
    maxZ = Math.max(maxZ, z);
  }

  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  const centerZ = (minZ + maxZ) / 2;

  return positions.map(([x, y, z]) => [x - centerX, y - centerY, z - centerZ] as [number, number, number]);
}
