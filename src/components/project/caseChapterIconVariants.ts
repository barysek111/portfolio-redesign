import type { StippleDot, WireEllipse, WireSegment } from "./caseChapterIconArt";

export type IconVariant = 1 | 2 | 3;

export type IconArt =
  | { kind: "wire"; ellipses: WireEllipse[] }
  | { kind: "prototype"; outlines: WireSegment[]; ellipses: WireEllipse[] }
  | { kind: "stipple"; dots: StippleDot[] }
  | { kind: "launch"; dots: StippleDot[]; apex: string };

function wireOpacity(t: number, edgeBoost = 0.22) {
  const rim = Math.sin(t * Math.PI);
  return 0.18 + rim * 0.55 + (t < 0.12 || t > 0.88 ? edgeBoost : 0);
}

function wireStroke(t: number) {
  return t < 0.08 || t > 0.92 ? 0.42 : 0.32;
}

export function buildResearchArt(variant: IconVariant): IconArt {
  const lines: WireEllipse[] = [];
  const presets = {
    1: { n: 28, rx0: 19.5, rx1: 14.5, ry0: 10.8, ry1: 7.8, rot0: -14, rot1: 28, wobble: 0.8 },
    2: { n: 32, rx0: 18.8, rx1: 15.2, ry0: 9.2, ry1: 6.4, rot0: -22, rot1: 44, wobble: 1.1 },
    3: { n: 24, rx0: 20.5, rx1: 13.8, ry0: 8.4, ry1: 5.6, rot0: -8, rot1: 16, wobble: 0.45 },
  }[variant];

  for (let i = 0; i < presets.n; i++) {
    const t = i / (presets.n - 1);
    lines.push({
      cx: 32,
      cy: 31.5 + Math.sin(t * Math.PI) * presets.wobble,
      rx: presets.rx0 - t * presets.rx1,
      ry: presets.ry0 - t * presets.ry1,
      rot: presets.rot0 + t * presets.rot1 + Math.sin(t * Math.PI * 2) * 2.5,
      o: wireOpacity(t, variant === 2 ? 0.26 : 0.22),
      sw: wireStroke(t),
    });
  }
  return { kind: "wire", ellipses: lines };
}

export function buildDefineArt(variant: IconVariant): IconArt {
  const configs = {
    1: {
      spheres: [
        { cx: 22.5, cy: 32, r: 11.5 },
        { cx: 41.5, cy: 32, r: 11.5 },
      ],
      phiStep: 0.11,
      thetaStep: 0.13,
      overlapBoost: 0.35,
    },
    2: {
      spheres: [
        { cx: 24, cy: 32, r: 12 },
        { cx: 40, cy: 32, r: 12 },
      ],
      phiStep: 0.09,
      thetaStep: 0.11,
      overlapBoost: 0.42,
    },
    3: {
      spheres: [
        { cx: 21, cy: 30.5, r: 10.8 },
        { cx: 43, cy: 33.5, r: 10.8 },
      ],
      phiStep: 0.12,
      thetaStep: 0.14,
      overlapBoost: 0.32,
    },
  }[variant];

  const dots: StippleDot[] = [];
  for (const s of configs.spheres) {
    for (let phi = 0.12; phi < Math.PI - 0.12; phi += configs.phiStep) {
      for (let theta = 0; theta < Math.PI * 2; theta += configs.thetaStep) {
        const x3 = s.r * Math.sin(phi) * Math.cos(theta);
        const y3 = s.r * Math.sin(phi) * Math.sin(theta);
        const z3 = s.r * Math.cos(phi);
        dots.push({
          x: s.cx + x3 * 0.95,
          y: s.cy + y3 * 0.88,
          r: 0.16 + ((z3 + s.r) / (2 * s.r)) * 0.15,
          o: 0.08 + ((z3 + s.r) / (2 * s.r)) * 0.55,
        });
      }
    }
  }

  const boosted = dots.map((d) => {
    const inAny = configs.spheres.filter((s) => Math.hypot(d.x - s.cx, d.y - s.cy) < s.r);
    if (inAny.length >= 2) return { ...d, o: Math.min(0.98, d.o + configs.overlapBoost) };
    return d;
  });

  return { kind: "stipple", dots: boosted };
}

export function buildIdeateArt(variant: IconVariant): IconArt {
  const lines: WireEllipse[] = [];
  const presets = {
    1: { coreN: 14, arms: 3, armSteps: 16, localN: 5, radius: [5, 13.5] as const, twist: 1.55 },
    2: { coreN: 12, arms: 4, armSteps: 12, localN: 4, radius: [3, 11] as const, twist: 1.35 },
    3: { coreN: 16, arms: 2, armSteps: 20, localN: 6, radius: [6, 15.5] as const, twist: 1.75 },
  }[variant];

  for (let i = 0; i < presets.coreN; i++) {
    const t = i / (presets.coreN - 1);
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

  for (let a = 0; a < presets.arms; a++) {
    const phase = (a / presets.arms) * Math.PI * 2 - Math.PI / 2;
    for (let i = 0; i < presets.armSteps; i++) {
      const t = i / (presets.armSteps - 1);
      const angle = phase + t * Math.PI * presets.twist;
      const radius = presets.radius[0] + t * presets.radius[1];
      const cx = 32 + Math.cos(angle) * radius;
      const cy = 31 + Math.sin(angle) * radius * 0.76;
      for (let j = 0; j < presets.localN; j++) {
        const u = j / (presets.localN - 1);
        const rim = Math.sin(u * Math.PI);
        lines.push({
          cx,
          cy: cy + Math.sin(u * Math.PI) * 0.35,
          rx: 3.4 - u * 2.2,
          ry: 2.2 - u * 1.4,
          rot: (angle * 180) / Math.PI + 68 + u * 18 + Math.sin(t * Math.PI * 2) * 4,
          o: 0.14 + rim * 0.42 + (1 - t) * 0.12,
          sw: u < 0.15 || u > 0.85 ? 0.38 : 0.3,
        });
      }
    }
  }

  return { kind: "wire", ellipses: lines };
}

export function buildPrototypeArt(variant: IconVariant): IconArt {
  const outlines: WireSegment[] = [];
  const ellipses: WireEllipse[] = [];
  const cx = 32;

  const presets = {
    1: { w: 24, h: 11, layers: [
      { dy: -12, scale: 0.88, o: 0.32, nested: 4, spokes: 12 },
      { dy: -4, scale: 0.94, o: 0.48, nested: 5, spokes: 12 },
      { dy: 4, scale: 1, o: 0.62, nested: 6, spokes: 12 },
      { dy: 12, scale: 0.9, o: 0.38, nested: 4, spokes: 12 },
    ]},
    2: { w: 28, h: 13, layers: [
      { dy: -10, scale: 0.92, o: 0.36, nested: 5, spokes: 8 },
      { dy: 0, scale: 1, o: 0.58, nested: 6, spokes: 8 },
      { dy: 10, scale: 0.9, o: 0.4, nested: 5, spokes: 8 },
    ]},
    3: { w: 22, h: 9, layers: [
      { dy: -14, scale: 0.86, o: 0.28, nested: 3, spokes: 16 },
      { dy: -7, scale: 0.92, o: 0.4, nested: 3, spokes: 16 },
      { dy: 0, scale: 0.98, o: 0.52, nested: 3, spokes: 16 },
      { dy: 7, scale: 0.94, o: 0.44, nested: 3, spokes: 16 },
      { dy: 14, scale: 0.88, o: 0.3, nested: 3, spokes: 16 },
    ]},
  }[variant];

  for (const layer of presets.layers) {
    const cy = 32 + layer.dy;
    for (let n = 0; n < layer.nested; n++) {
      const t = n / (layer.nested - 1);
      const scale = layer.scale * (1 - t * 0.38);
      const hw = (presets.w / 2) * scale;
      const hh = (presets.h / 2) * scale;
      const pts = [
        { x: cx, y: cy - hh },
        { x: cx + hw, y: cy },
        { x: cx, y: cy + hh },
        { x: cx - hw, y: cy },
      ];
      const segO = layer.o * (0.45 + (1 - t) * 0.55);
      const segSw = t < 0.12 || t > 0.88 ? 0.4 : 0.32;

      for (let i = 0; i < 4; i++) {
        outlines.push({
          x1: pts[i].x,
          y1: pts[i].y,
          x2: pts[(i + 1) % 4].x,
          y2: pts[(i + 1) % 4].y,
          o: segO,
          sw: segSw,
        });
      }

      for (let i = 0; i < layer.spokes; i++) {
        const ang = (i / layer.spokes) * Math.PI * 2;
        outlines.push({
          x1: cx,
          y1: cy,
          x2: cx + Math.cos(ang) * (presets.w * scale * 0.48),
          y2: cy + Math.sin(ang) * (presets.h * scale * 0.48),
          o: segO * 0.72,
          sw: 0.28,
        });
      }

      ellipses.push({
        cx,
        cy,
        rx: presets.w * scale * 0.22,
        ry: presets.h * scale * 0.22,
        rot: -8 + layer.dy * 0.4,
        o: segO * 0.55,
        sw: 0.3,
      });
    }
  }

  return { kind: "prototype", outlines, ellipses };
}

export function buildTestArt(variant: IconVariant): IconArt {
  const lines: WireEllipse[] = [];
  const presets = {
    1: { coils: 7, layers: 14, x0: 11, x1: 42, rot0: -22, rot1: 44, ry0: 8.4, ry1: 5.2 },
    2: { coils: 9, layers: 10, x0: 9, x1: 55, rot0: -28, rot1: 56, ry0: 7.2, ry1: 4.4 },
    3: { coils: 5, layers: 18, x0: 13, x1: 51, rot0: -16, rot1: 32, ry0: 9.5, ry1: 6.1 },
  }[variant];

  for (let c = 0; c < presets.coils; c++) {
    const ct = c / (presets.coils - 1);
    const cx = presets.x0 + ct * (presets.x1 - presets.x0);
    const coilRot = presets.rot0 + ct * presets.rot1;

    for (let i = 0; i < presets.layers; i++) {
      const t = i / (presets.layers - 1);
      const centerBoost = Math.sin(ct * Math.PI) * 0.18;
      lines.push({
        cx,
        cy: 32 + Math.sin(t * Math.PI) * 0.65,
        rx: 3.1 - t * 1.85,
        ry: presets.ry0 - t * presets.ry1,
        rot: coilRot + t * 22 + Math.sin(t * Math.PI * 2) * 3,
        o:
          wireOpacity(t) * (0.85 + centerBoost) +
          (Math.abs(ct - 0.5) < 0.2 ? 0.08 : 0),
        sw: wireStroke(t),
      });
    }
  }

  return { kind: "wire", ellipses: lines };
}

export function buildLaunchArt(variant: IconVariant): IconArt {
  const configs = {
    1: { ax: 32, ay: 11, bl: 13, br: 51, by: 54, spacing: 1.35, apex: "M32 9 L34.2 14.5 L29.8 14.5 Z" },
    2: { ax: 32, ay: 12, bl: 18, br: 46, by: 53, spacing: 1.15, apex: "M32 8.5 L33.6 13.8 L30.4 13.8 Z" },
    3: { ax: 32, ay: 10, bl: 10, br: 54, by: 55, spacing: 1.55, apex: "M32 9.5 L35 15.2 L29 15.2 Z" },
  }[variant];

  const dots: StippleDot[] = [];
  const { ax, ay, bl, br, by, spacing } = configs;

  for (let y = ay + 3; y <= by; y += spacing) {
    for (let x = bl - 3; x <= br + 3; x += spacing) {
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
      const power = variant === 2 ? 1.15 : variant === 3 ? 1.45 : 1.25;
      dots.push({
        x,
        y,
        r: Math.max(0.1, 0.38 - relY * 0.22),
        o: Math.max(0.05, 0.98 - relY ** power * 0.9),
      });
    }
  }

  return { kind: "launch", dots, apex: configs.apex };
}

/** Selected variants for chapter intro callouts */
export const chapterIntroIconArt = {
  research: buildResearchArt(1),
  define: buildDefineArt(1),
  ideate: buildIdeateArt(3),
  prototype: buildPrototypeArt(3),
  test: buildTestArt(1),
} as const;

export type ChapterIntroId = keyof typeof chapterIntroIconArt;

export const chapterIconVariantRows = [
  {
    chapter: "Research",
    variants: [buildResearchArt(1), buildResearchArt(2), buildResearchArt(3)] as const,
  },
  {
    chapter: "Define",
    variants: [buildDefineArt(1), buildDefineArt(2), buildDefineArt(3)] as const,
  },
  {
    chapter: "Ideate",
    variants: [buildIdeateArt(1), buildIdeateArt(2), buildIdeateArt(3)] as const,
  },
  {
    chapter: "Prototype",
    variants: [buildPrototypeArt(1), buildPrototypeArt(2), buildPrototypeArt(3)] as const,
  },
  {
    chapter: "Test",
    variants: [buildTestArt(1), buildTestArt(2), buildTestArt(3)] as const,
  },
  {
    chapter: "Launch",
    variants: [buildLaunchArt(1), buildLaunchArt(2), buildLaunchArt(3)] as const,
  },
] as const;

/** Default (variant 1) art for production icons */
export const defaultChapterArt = {
  research: buildResearchArt(1),
  define: buildDefineArt(1),
  ideate: buildIdeateArt(1),
  prototype: buildPrototypeArt(1),
  test: buildTestArt(1),
  launch: buildLaunchArt(1),
} as const;
