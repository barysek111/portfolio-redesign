/** Reference-traced art for chapter icons (64×64). Matches scripts/generate-chapter-icons.mjs */

export type StippleDot = { x: number; y: number; r: number; o: number };

export type WireEllipse = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  rot: number;
  o: number;
  sw: number;
};

export type WireSegment = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  o: number;
  sw: number;
};

function wireOpacity(t: number, edgeBoost = 0.22) {
  const rim = Math.sin(t * Math.PI);
  return 0.18 + rim * 0.55 + (t < 0.12 || t > 0.88 ? edgeBoost : 0);
}

function wireStroke(t: number) {
  return t < 0.08 || t > 0.92 ? 0.42 : 0.32;
}

export function buildResearchTorus(): WireEllipse[] {
  const lines: WireEllipse[] = [];
  const n = 28;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    lines.push({
      cx: 32,
      cy: 31.5 + Math.sin(t * Math.PI) * 0.8,
      rx: 19.5 - t * 14.5,
      ry: 10.8 - t * 7.8,
      rot: -14 + t * 28 + Math.sin(t * Math.PI * 2) * 2.5,
      o: wireOpacity(t),
      sw: wireStroke(t),
    });
  }
  return lines;
}

/** Wireframe spiral — concentric core + arm ellipses (Research-style depth) */
export function buildIdeateWireframe(): WireEllipse[] {
  const lines: WireEllipse[] = [];
  const coreN = 14;

  for (let i = 0; i < coreN; i++) {
    const t = i / (coreN - 1);
    lines.push({
      cx: 32,
      cy: 31 + Math.sin(t * Math.PI) * 0.55,
      rx: 9.5 - t * 7.2,
      ry: 6.2 - t * 4.6,
      rot: -12 + t * 24 + Math.sin(t * Math.PI * 3) * 2,
      o: wireOpacity(t, 0.28),
      sw: wireStroke(t),
    });
  }

  const arms = 3;
  const armEllipses = 16;
  for (let a = 0; a < arms; a++) {
    const phase = (a / arms) * Math.PI * 2 - Math.PI / 2;
    for (let i = 0; i < armEllipses; i++) {
      const t = i / (armEllipses - 1);
      const angle = phase + t * Math.PI * 1.55;
      const radius = 5 + t * 13.5;
      const cx = 32 + Math.cos(angle) * radius;
      const cy = 31 + Math.sin(angle) * radius * 0.76;
      const localN = 5;
      for (let j = 0; j < localN; j++) {
        const u = j / (localN - 1);
        const rx = 3.4 - u * 2.2;
        const ry = 2.2 - u * 1.4;
        const rot =
          (angle * 180) / Math.PI + 68 + u * 18 + Math.sin(t * Math.PI * 2) * 4;
        const rim = Math.sin(u * Math.PI);
        lines.push({
          cx,
          cy: cy + Math.sin(u * Math.PI) * 0.35,
          rx,
          ry,
          rot,
          o: 0.14 + rim * 0.42 + (1 - t) * 0.12,
          sw: u < 0.15 || u > 0.85 ? 0.38 : 0.3,
        });
      }
    }
  }

  return lines;
}

export type PrototypeWireLayer = {
  dy: number;
  scale: number;
  o: number;
  nested: number;
};

export function buildPrototypeWireframe(): {
  outlines: WireSegment[];
  ellipses: WireEllipse[];
} {
  const outlines: WireSegment[] = [];
  const ellipses: WireEllipse[] = [];
  const cx = 32;
  const w = 24;
  const h = 11;

  const layers: PrototypeWireLayer[] = [
    { dy: -12, scale: 0.88, o: 0.32, nested: 4 },
    { dy: -4, scale: 0.94, o: 0.48, nested: 5 },
    { dy: 4, scale: 1, o: 0.62, nested: 6 },
    { dy: 12, scale: 0.9, o: 0.38, nested: 4 },
  ];

  const rhombusPoints = (cy: number, scale: number) => {
    const hw = (w / 2) * scale;
    const hh = (h / 2) * scale;
    return {
      top: { x: cx, y: cy - hh },
      right: { x: cx + hw, y: cy },
      bottom: { x: cx, y: cy + hh },
      left: { x: cx - hw, y: cy },
      cx,
      cy,
    };
  };

  for (const layer of layers) {
    const cy = 32 + layer.dy;

    for (let n = 0; n < layer.nested; n++) {
      const t = n / (layer.nested - 1);
      const scale = layer.scale * (1 - t * 0.38);
      const p = rhombusPoints(cy, scale);
      const pts = [p.top, p.right, p.bottom, p.left];
      const segO = layer.o * (0.45 + (1 - t) * 0.55);
      const segSw = t < 0.12 || t > 0.88 ? 0.4 : 0.32;

      for (let i = 0; i < 4; i++) {
        const a = pts[i];
        const b = pts[(i + 1) % 4];
        outlines.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, o: segO, sw: segSw });
      }

      const spokes = 12;
      for (let i = 0; i < spokes; i++) {
        const ang = (i / spokes) * Math.PI * 2;
        const ex = p.cx + Math.cos(ang) * (w * scale * 0.48);
        const ey = p.cy + Math.sin(ang) * (h * scale * 0.48);
        outlines.push({
          x1: p.cx,
          y1: p.cy,
          x2: ex,
          y2: ey,
          o: segO * 0.72,
          sw: 0.28,
        });
      }

      ellipses.push({
        cx: p.cx,
        cy: p.cy,
        rx: w * scale * 0.22,
        ry: h * scale * 0.22,
        rot: -8 + layer.dy * 0.4,
        o: segO * 0.55,
        sw: 0.3,
      });
    }
  }

  return { outlines, ellipses };
}

/** Wireframe spring — mini torus ellipses at each coil position */
export function buildTestWireframe(): WireEllipse[] {
  const lines: WireEllipse[] = [];
  const coils = 7;
  const layersPerCoil = 14;

  for (let c = 0; c < coils; c++) {
    const ct = c / (coils - 1);
    const cx = 11 + ct * 42;
    const coilRot = -22 + ct * 44;

    for (let i = 0; i < layersPerCoil; i++) {
      const t = i / (layersPerCoil - 1);
      const rx = 3.1 - t * 1.85;
      const ry = 8.4 - t * 5.2;
      const rot = coilRot + t * 22 + Math.sin(t * Math.PI * 2) * 3;
      const cy = 32 + Math.sin(t * Math.PI) * 0.65;
      const centerBoost = Math.sin(ct * Math.PI) * 0.18;
      lines.push({
        cx,
        cy,
        rx,
        ry,
        rot,
        o: wireOpacity(t) * (0.85 + centerBoost) + (Math.abs(ct - 0.5) < 0.2 ? 0.08 : 0),
        sw: wireStroke(t),
      });
    }
  }

  return lines;
}

export function buildDefineDots(): StippleDot[] {
  const dots: StippleDot[] = [];
  const spheres = [
    { cx: 22.5, cy: 32, r: 11.5 },
    { cx: 41.5, cy: 32, r: 11.5 },
  ];

  for (const s of spheres) {
    for (let phi = 0.12; phi < Math.PI - 0.12; phi += 0.11) {
      for (let theta = 0; theta < Math.PI * 2; theta += 0.13) {
        const x3 = s.r * Math.sin(phi) * Math.cos(theta);
        const y3 = s.r * Math.sin(phi) * Math.sin(theta);
        const z3 = s.r * Math.cos(phi);
        dots.push({
          x: s.cx + x3 * 0.95,
          y: s.cy + y3 * 0.88,
          r: 0.18 + ((z3 + s.r) / (2 * s.r)) * 0.14,
          o: 0.08 + ((z3 + s.r) / (2 * s.r)) * 0.55,
        });
      }
    }
  }

  return dots.map((d) => {
    const inL = Math.hypot(d.x - 22.5, d.y - 32) < 11.5;
    const inR = Math.hypot(d.x - 41.5, d.y - 32) < 11.5;
    if (inL && inR) return { ...d, o: Math.min(0.98, d.o + 0.35) };
    return d;
  });
}

export function buildLaunchDots(): StippleDot[] {
  const ax = 32;
  const ay = 11;
  const bl = 13;
  const br = 51;
  const by = 54;
  const spacing = 1.35;
  const dots: StippleDot[] = [];

  for (let y = 14; y <= by; y += spacing) {
    for (let x = 10; x <= 54; x += spacing) {
      const v0x = br - ax;
      const v0y = by - ay;
      const v1x = bl - ax;
      const v1y = by - ay;
      const v2x = x - ax;
      const v2y = y - ay;
      const d00 = v0x * v0x + v0y * v0y;
      const d01 = v0x * v1x + v0y * v1y;
      const d11 = v1x * v1x + v1y * v1y;
      const d20 = v2x * v0x + v2y * v0y;
      const d21 = v2x * v1x + v2y * v1y;
      const denom = d00 * d11 - d01 * d01;
      if (denom === 0) continue;
      const u = (d11 * d20 - d01 * d21) / denom;
      const v = (d00 * d21 - d01 * d20) / denom;
      if (u < 0 || v < 0 || u + v > 1) continue;

      const relY = (y - ay) / (by - ay);
      dots.push({
        x,
        y,
        r: Math.max(0.1, 0.38 - relY * 0.22),
        o: Math.max(0.05, 0.98 - relY ** 1.25 * 0.9),
      });
    }
  }
  return dots;
}

export const researchTorus = buildResearchTorus();
export const ideateWireframe = buildIdeateWireframe();
export const prototypeWireframe = buildPrototypeWireframe();
export const testWireframe = buildTestWireframe();
export const defineDots = buildDefineDots();
export const launchDots = buildLaunchDots();

function ellipsesToSvg(ellipses: WireEllipse[]) {
  return ellipses
    .map(
      (e) =>
        `  <ellipse cx="${e.cx.toFixed(2)}" cy="${e.cy.toFixed(2)}" rx="${e.rx.toFixed(2)}" ry="${e.ry.toFixed(2)}" transform="rotate(${e.rot.toFixed(2)} ${e.cx.toFixed(2)} ${e.cy.toFixed(2)})" stroke="currentColor" stroke-width="${e.sw.toFixed(2)}" opacity="${e.o.toFixed(3)}"/>`,
    )
    .join("\n");
}

function segmentsToSvg(segments: WireSegment[]) {
  return segments
    .map(
      (s) =>
        `  <line x1="${s.x1.toFixed(2)}" y1="${s.y1.toFixed(2)}" x2="${s.x2.toFixed(2)}" y2="${s.y2.toFixed(2)}" stroke="currentColor" stroke-width="${s.sw.toFixed(2)}" opacity="${s.o.toFixed(3)}"/>`,
    )
    .join("\n");
}

export function svgIcon3Ideate() {
  return `<g>\n${ellipsesToSvg(ideateWireframe)}\n</g>`;
}

export function svgIcon4Prototype() {
  const { outlines, ellipses } = prototypeWireframe;
  return `<g>\n${segmentsToSvg(outlines)}\n${ellipsesToSvg(ellipses)}\n</g>`;
}

export function svgIcon5Test() {
  return `<g>\n${ellipsesToSvg(testWireframe)}\n</g>`;
}
