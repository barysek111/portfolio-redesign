#!/usr/bin/env node
/** Stitch base64 chunks from stdin JSON: { chunks: string[], out: string } */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const { chunks, out } = JSON.parse(readFileSync(0, "utf8"));
const b64 = chunks.join("");
let svg = Buffer.from(b64, "base64").toString("utf8");
svg = svg.replace(/<defs>[\s\S]*?<\/defs>/g, "");
svg = svg.replace(/\s*clip-path="[^"]*"/g, "");
svg = svg.replace(/fill="white"/g, 'fill="none"');
svg = svg.replace(/font-family="Neue Haas Grotesk Display Std"/g, 'font-family="Inter"');
writeFileSync(out, svg);
execSync(`npx --yes svgo ${JSON.stringify(out)}`, { stdio: "inherit" });
console.log(`Wrote ${out} (${svg.length} chars)`);
