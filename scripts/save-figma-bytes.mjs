#!/usr/bin/env node
/** Read JSON { bytes: number[] } from stdin → write SVG with transparent bg */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const { out, bytes } = JSON.parse(readFileSync(0, "utf8"));
let svg = Buffer.from(bytes).toString("utf8");
svg = svg.replace(/<defs>[\s\S]*?<\/defs>/g, "");
svg = svg.replace(/\s*clip-path="[^"]*"/g, "");
svg = svg.replace(/fill="white"/g, 'fill="none"');
writeFileSync(out, svg);
execSync(`npx --yes svgo ${JSON.stringify(out)}`, { stdio: "inherit" });
console.log(`Wrote ${out}`);
