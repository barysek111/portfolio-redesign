#!/usr/bin/env node
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildSitemap } from "./sitemap.mjs";
import { buildIaChart } from "./ia-chart.mjs";
import { buildPortalModules } from "./portal-modules.mjs";
import { buildFlowTraining } from "./flow-training.mjs";
import { buildFlowOnboarding } from "./flow-onboarding.mjs";
import { buildWireframes1 } from "./wireframes-1.mjs";
import { buildWireframes2 } from "./wireframes-2.mjs";

const outDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../public/coco-care",
);

const outputs = [
  ["sitemapsdesktopapp-scaled.svg", buildSitemap],
  ["3454.svg", buildIaChart],
  ["3453.svg", buildPortalModules],
  ["Group-427323036.svg", buildFlowTraining],
  ["Group-427323035.svg", buildFlowOnboarding],
  ["Wireframesmobileapp1-scaled.svg", buildWireframes1],
  ["Wireframesmobileapp2-scaled.svg", buildWireframes2],
];

for (const [name, build] of outputs) {
  const filePath = path.join(outDir, name);
  writeFileSync(filePath, build(), "utf8");
  console.log(`Wrote ${name}`);
}

const files = outputs.map(([name]) => path.join(outDir, name));
console.log("Running SVGO…");
execSync(`npx --yes svgo ${files.map((f) => JSON.stringify(f)).join(" ")}`, {
  stdio: "inherit",
});
console.log("Done.");
