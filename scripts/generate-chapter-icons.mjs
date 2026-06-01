#!/usr/bin/env node
/**
 * Generates icon-1.svg … icon-6.svg from reference sheet geometry.
 * Keep in sync with src/components/project/caseChapterIconArt.ts
 * Run: node scripts/generate-chapter-icons.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/coco-care/chapter-icons");
mkdirSync(outDir, { recursive: true });

const VB = "0 0 64 64";

function svgWrap(body, extraDefs = "") {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VB}" fill="none" color="currentColor">
${extraDefs}
${body}
</svg>
`;
}

function dotsToSvg(dots) {
  return dots
    .map(
      (d) =>
        `  <circle cx="${d.x.toFixed(2)}" cy="${d.y.toFixed(2)}" r="${d.r.toFixed(2)}" fill="currentColor" opacity="${d.o.toFixed(3)}"/>`,
    )
    .join("\n");
}

function wireOpacity(t, edgeBoost = 0.22) {
  const rim = Math.sin(t * Math.PI);
  return 0.18 + rim * 0.55 + (t < 0.12 || t > 0.88 ? edgeBoost : 0);
}

function wireStroke(t) {
  return t < 0.08 || t > 0.92 ? 0.42 : 0.32;
}

function ellipsesToSvg(ellipses) {
  return ellipses
    .map(
      (e) =>
        `  <ellipse cx="${e.cx.toFixed(2)}" cy="${e.cy.toFixed(2)}" rx="${e.rx.toFixed(2)}" ry="${e.ry.toFixed(2)}" transform="rotate(${e.rot.toFixed(2)} ${e.cx.toFixed(2)} ${e.cy.toFixed(2)})" stroke="currentColor" stroke-width="${e.sw.toFixed(2)}" opacity="${e.o.toFixed(3)}"/>`,
    )
    .join("\n");
}

function segmentsToSvg(segments) {
  return segments
    .map(
      (s) =>
        `  <line x1="${s.x1.toFixed(2)}" y1="${s.y1.toFixed(2)}" x2="${s.x2.toFixed(2)}" y2="${s.y2.toFixed(2)}" stroke="currentColor" stroke-width="${s.sw.toFixed(2)}" opacity="${s.o.toFixed(3)}"/>`,
    )
    .join("\n");
}

function buildResearchTorus() {
  const lines = [];
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

function buildIdeateWireframe() {
  const lines = [];
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
  return lines;
}

function buildPrototypeWireframe() {
  const outlines = [];
  const ellipses = [];
  const cx = 32;
  const w = 24;
  const h = 11;
  const layers = [
    { dy: -12, scale: 0.88, o: 0.32, nested: 4 },
    { dy: -4, scale: 0.94, o: 0.48, nested: 5 },
    { dy: 4, scale: 1, o: 0.62, nested: 6 },
    { dy: 12, scale: 0.9, o: 0.38, nested: 4 },
  ];

  for (const layer of layers) {
    const cy = 32 + layer.dy;
    for (let n = 0; n < layer.nested; n++) {
      const t = n / (layer.nested - 1);
      const scale = layer.scale * (1 - t * 0.38);
      const hw = (w / 2) * scale;
      const hh = (h / 2) * scale;
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
      const spokes = 12;
      for (let i = 0; i < spokes; i++) {
        const ang = (i / spokes) * Math.PI * 2;
        outlines.push({
          x1: cx,
          y1: cy,
          x2: cx + Math.cos(ang) * (w * scale * 0.48),
          y2: cy + Math.sin(ang) * (h * scale * 0.48),
          o: segO * 0.72,
          sw: 0.28,
        });
      }
      ellipses.push({
        cx,
        cy,
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

function buildTestWireframe() {
  const lines = [];
  const coils = 7;
  const layersPerCoil = 14;
  for (let c = 0; c < coils; c++) {
    const ct = c / (coils - 1);
    const cx = 11 + ct * 42;
    const coilRot = -22 + ct * 44;
    for (let i = 0; i < layersPerCoil; i++) {
      const t = i / (layersPerCoil - 1);
      const centerBoost = Math.sin(ct * Math.PI) * 0.18;
      lines.push({
        cx,
        cy: 32 + Math.sin(t * Math.PI) * 0.65,
        rx: 3.1 - t * 1.85,
        ry: 8.4 - t * 5.2,
        rot: coilRot + t * 22 + Math.sin(t * Math.PI * 2) * 3,
        o: wireOpacity(t) * (0.85 + centerBoost) + (Math.abs(ct - 0.5) < 0.2 ? 0.08 : 0),
        sw: wireStroke(t),
      });
    }
  }
  return lines;
}

function icon1() {
  return svgWrap(`<g>\n${ellipsesToSvg(buildResearchTorus())}\n</g>`);
}

function icon2() {
  const dots = [];
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
        const x = s.cx + x3 * 0.95;
        const y = s.cy + y3 * 0.88;
        const depth = (z3 + s.r) / (2 * s.r);
        let o = 0.08 + depth * 0.55;
        if (
          Math.hypot(x - 22.5, y - 32) < 11.5 &&
          Math.hypot(x - 41.5, y - 32) < 11.5
        ) {
          o = Math.min(0.98, o + 0.35);
        }
        dots.push({ x, y, r: 0.18 + depth * 0.14, o });
      }
    }
  }
  return svgWrap(`<g>\n${dotsToSvg(dots)}\n</g>`);
}

function icon3() {
  return svgWrap(`<g>\n${ellipsesToSvg(buildIdeateWireframe())}\n</g>`);
}

function icon4() {
  const { outlines, ellipses } = buildPrototypeWireframe();
  return svgWrap(`<g>\n${segmentsToSvg(outlines)}\n${ellipsesToSvg(ellipses)}\n</g>`);
}

function icon5() {
  return svgWrap(`<g>\n${ellipsesToSvg(buildTestWireframe())}\n</g>`);
}

function icon6() {
  const ax = 32;
  const ay = 11;
  const bl = 13;
  const br = 51;
  const by = 54;
  const dots = [];
  const spacing = 1.35;
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
  const apex = `  <path d="M32 9 L34.2 14.5 L29.8 14.5 Z" fill="currentColor"/>`;
  return svgWrap(`<g>\n${apex}\n${dotsToSvg(dots)}\n</g>`);
}

const icons = [
  ["icon-1.svg", icon1],
  ["icon-2.svg", icon2],
  ["icon-3.svg", icon3],
  ["icon-4.svg", icon4],
  ["icon-5.svg", icon5],
  ["icon-6.svg", icon6],
];

for (const [name, fn] of icons) {
  writeFileSync(join(outDir, name), fn());
  console.log("wrote", join(outDir, name));
}
