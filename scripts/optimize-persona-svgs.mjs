#!/usr/bin/env node
/**
 * Normalizes nested corner radii in persona SVGs, then runs SVGO.
 * Re-run after replacing files in public/coco-care/.
 *
 * Radius tiers (card-in-card): outer panels 16px, nested cards 12px, pills h/2.
 */
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../public/coco-care");
const files = ["persona-jonas.svg", "persona-alice.svg"];

function normalizeNestedRadii(svg) {
  return svg.replace(/<rect[^>]*\/?>/g, (tag) => {
    const rxMatch = tag.match(/rx="([^"]+)"/);
    if (!rxMatch) return tag;
    const wMatch = tag.match(/width="([^"]+)"/);
    const hMatch = tag.match(/height="([^"]+)"/);
    const w = wMatch ? Number(wMatch[1]) : 0;
    const h = hMatch ? Number(hMatch[1]) : 0;

    let newRx;
    if (h > 0 && h <= 40 && w < 200) {
      newRx = Math.round((h / 2) * 1000) / 1000;
    } else if (w >= 800) {
      newRx = 16;
    } else if (w >= 200) {
      newRx = 12;
    } else if (w > 0) {
      newRx = 8;
    } else {
      return tag;
    }

    let next = tag.replace(/rx="[^"]+"/, `rx="${newRx}"`);
    if (/ry="/.test(next)) {
      next = next.replace(/ry="[^"]+"/, `ry="${newRx}"`);
    } else {
      next = next.replace(/rx="[^"]+"/, `rx="${newRx}" ry="${newRx}"`);
    }
    return next;
  });
}

for (const name of files) {
  const filePath = path.join(dir, name);
  const raw = readFileSync(filePath, "utf8");
  writeFileSync(filePath, normalizeNestedRadii(raw));
  console.log(`Normalized nested radii: ${name}`);
}

console.log("Optimizing persona SVGs with SVGO…");
execSync(
  `npx --yes svgo ${files.map((f) => JSON.stringify(path.join(dir, f))).join(" ")}`,
  { stdio: "inherit" },
);
console.log("Done.");
