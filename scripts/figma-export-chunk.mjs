#!/usr/bin/env node
/**
 * Merge chunked byte arrays from use_figma export into an SVG file.
 * Usage: node scripts/figma-export-chunk.mjs <out.svg> < chunks.json
 */
import { readFileSync, writeFileSync } from "node:fs";

const outPath = process.argv[2];
if (!outPath) {
  console.error("Usage: node scripts/figma-export-chunk.mjs <output.svg>");
  process.exit(1);
}

const payload = JSON.parse(readFileSync(0, "utf8"));
const { chunks } = payload;
const bytes = new Uint8Array(chunks.flat());
writeFileSync(outPath, bytes);
console.log(`Wrote ${outPath} (${bytes.length} bytes)`);
