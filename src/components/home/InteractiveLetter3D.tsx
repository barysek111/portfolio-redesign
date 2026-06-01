import { Center } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import { Group, InstancedMesh, Matrix4 } from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { buildVoxelGrid, VOXEL_GRID_DEFAULTS } from "@/components/home/voxelLetter";

type Pointer = { x: number; y: number };

const VOXEL_XY = VOXEL_GRID_DEFAULTS.spacing * 0.86;
const VOXEL_DEPTH = 0.28;
const VOXEL_RADIUS = Math.min(VOXEL_XY, VOXEL_DEPTH) * 0.42;
const VOXEL_SEGMENTS = 4;
const LETTER_SCALE = 0.78;

function VoxelLetter({
  letter,
  pointer,
  reducedMotion,
}: {
  letter: string;
  pointer: Pointer;
  reducedMotion: boolean;
}) {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<InstancedMesh>(null);
  const rotation = useRef({ x: 0, y: 0, z: 0 });
  const tempMatrix = useMemo(() => new Matrix4(), []);
  const voxels = useMemo(() => buildVoxelGrid(letter), [letter]);

  const geometry = useMemo(
    () => new RoundedBoxGeometry(VOXEL_XY, VOXEL_XY, VOXEL_DEPTH, VOXEL_SEGMENTS, VOXEL_RADIUS),
    [],
  );

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh || voxels.length === 0) return;

    voxels.forEach(([x, y, z], index) => {
      tempMatrix.makeTranslation(x, y, z);
      mesh.setMatrixAt(index, tempMatrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }, [tempMatrix, voxels]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const targetX = reducedMotion ? 0 : pointer.y * 0.42;
    const targetY = reducedMotion ? 0 : pointer.x * 0.52;
    const targetZ = reducedMotion ? 0 : pointer.x * pointer.y * 0.08;
    const lerp = 1 - Math.pow(0.001, delta);

    rotation.current.x += (targetX - rotation.current.x) * lerp;
    rotation.current.y += (targetY - rotation.current.y) * lerp;
    rotation.current.z += (targetZ - rotation.current.z) * lerp;

    group.rotation.set(rotation.current.x, rotation.current.y, rotation.current.z);
  });

  if (voxels.length === 0) return null;

  return (
    <Center>
      <group ref={groupRef} scale={LETTER_SCALE}>
        <instancedMesh ref={meshRef} args={[geometry, undefined, voxels.length]} frustumCulled={false}>
          <meshPhysicalMaterial
            color="#080707"
            roughness={0.52}
            metalness={0.05}
            clearcoat={0.35}
            clearcoatRoughness={0.24}
          />
        </instancedMesh>
      </group>
    </Center>
  );
}

function Scene({
  letter,
  pointer,
  reducedMotion,
}: {
  letter: string;
  pointer: Pointer;
  reducedMotion: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.92} />
      <directionalLight position={[5, 7, 9]} intensity={1.4} />
      <directionalLight position={[-6, -1, 5]} intensity={0.34} color="#ffffff" />
      <directionalLight position={[0, -4, 2]} intensity={0.16} color="#f5f5f5" />
      <Suspense fallback={null}>
        <VoxelLetter letter={letter} pointer={pointer} reducedMotion={reducedMotion} />
      </Suspense>
    </>
  );
}

function usePointerTracking(containerRef: RefObject<HTMLElement | null>) {
  const [pointer, setPointer] = useState<Pointer>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePointer = (clientX: number, clientY: number) => {
      const element = containerRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);
      setPointer({ x, y });
    };

    const onMouseMove = (event: MouseEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [containerRef]);

  return pointer;
}

export default function InteractiveLetter3D({ letter = "B" }: { letter?: string }) {
  const containerRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointer = usePointerTracking(containerRef);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  return (
    <section
      ref={containerRef}
      aria-hidden
      className="interactive-letter-3d relative flex h-[100dvh] min-h-[100svh] w-full items-center justify-center"
    >
      <div className="absolute inset-0">
        {mounted ? (
          <Canvas
            className="h-full w-full touch-none"
            dpr={[1, 2]}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            camera={{ position: [0, 0, 8.4], fov: 26 }}
          >
            <Scene letter={letter} pointer={pointer} reducedMotion={reducedMotion} />
          </Canvas>
        ) : null}
      </div>
    </section>
  );
}
