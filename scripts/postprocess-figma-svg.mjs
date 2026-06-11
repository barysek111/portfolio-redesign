#!/usr/bin/env node
/** Post-process Figma SVG exports: transparent bg, Inter for badge labels */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/postprocess-figma-svg.mjs <path.svg>");
  process.exit(1);
}

let svg = readFileSync(file, "utf8");
svg = svg.replace(/<defs>[\s\S]*?<\/defs>/g, "");
svg = svg.replace(/\s*clip-path="[^"]*"/g, "");
svg = svg.replace(/fill="white"/g, 'fill="none"');
svg = svg.replace(/font-family="Neue Haas Grotesk Display Std"/g, 'font-family="Inter"');
writeFileSync(file, svg);
execSync(`npx --yes svgo ${JSON.stringify(file)}`, { stdio: "inherit" });
console.log(`Post-processed ${file}`);
