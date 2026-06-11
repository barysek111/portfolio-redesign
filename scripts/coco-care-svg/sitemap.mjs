import {
  svgOpen,
  svgClose,
  pillLabel,
  centeredLabel,
  arrowV,
  line,
} from "./shared.mjs";

const W = 2560;
const H = 1727;

function layoutTree(nodes, rootId, startX, startY, levelGap = 70, nodeW = 120, nodeH = 34) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, { ...n, children: [] }]));
  nodes.forEach((n) => {
    if (n.parent && byId[n.parent]) byId[n.parent].children.push(byId[n.id]);
  });
  const positions = {};
  let leaf = 0;
  function assign(id, depth) {
    const n = byId[id];
    if (!n.children.length) {
      positions[id] = { x: leaf++ * (nodeW + 24), depth };
      return positions[id].x;
    }
    const childXs = n.children.map((c) => assign(c.id, depth + 1));
    const x = (Math.min(...childXs) + Math.max(...childXs)) / 2;
    positions[id] = { x, depth };
    return x;
  }
  assign(rootId, 0);
  const maxX = Math.max(...Object.values(positions).map((p) => p.x));
  const scale = maxX > 0 ? 1 : 1;
  let svg = "";
  nodes.forEach((n) => {
    const p = positions[n.id];
    if (!p) return;
    const x = startX + p.x * (nodeW + 24) * scale;
    const y = startY + p.depth * levelGap;
    svg += centeredLabel(x, y, nodeW, nodeH, n.label, {
      fill: n.primary ? "#4a5568" : "#fff",
      stroke: n.primary ? "#4a5568" : "#1a1a1a",
      className: "map-small",
      maxChars: 14,
    });
    if (n.parent && positions[n.parent]) {
      const pp = positions[n.parent];
      const px = startX + pp.x * (nodeW + 24) * scale + nodeW / 2;
      const py = startY + pp.depth * levelGap + nodeH;
      const cx = x + nodeW / 2;
      const cy = y;
      svg += line(px, py, cx, cy);
    }
  });
  return svg;
}

const fysioNodes = [
  { id: "froot", label: "Fysio login", parent: null, primary: true },
  { id: "fhome", label: "Patients (homepage)", parent: "froot" },
  { id: "fprog", label: "Programs", parent: "fhome" },
  { id: "fex", label: "Exercises", parent: "fhome" },
  { id: "fpat", label: "Patients", parent: "fhome" },
  { id: "fcp", label: "Create new program", parent: "fprog" },
  { id: "fgf", label: "Go to folder", parent: "fprog" },
  { id: "fep", label: "Edit program", parent: "fprog" },
  { id: "fdp", label: "Delete program", parent: "fprog" },
  { id: "fpe", label: "Program editor", parent: "fcp" },
  { id: "fnf", label: "Name folder", parent: "fgf" },
  { id: "fpe2", label: "Program editor", parent: "fep" },
  { id: "fve", label: "View exercise", parent: "fex" },
  { id: "fen", label: "Edit exercise note", parent: "fve" },
  { id: "fan", label: "Add new patient", parent: "fpat" },
  { id: "fdel", label: "Delete patient/s", parent: "fpat" },
  { id: "fpage", label: "Patient page", parent: "fpat" },
  { id: "fadd", label: "Add", parent: "fan" },
  { id: "fassign", label: "Assign program to patient", parent: "fadd" },
  { id: "fdp2", label: "Delete patient", parent: "fpage" },
  { id: "fasign", label: "Asign program", parent: "fpage" },
  { id: "fpsfs", label: "Request PSFS data", parent: "fpage" },
  { id: "fknee", label: "Knee flexibiloty", parent: "fpage" },
  { id: "fpain", label: "Pain score", parent: "fpage" },
  { id: "fsmart", label: "Set SMART goal", parent: "fpage" },
  { id: "fmod", label: "Modify program", parent: "fpage" },
  { id: "fdet", label: "See details of exercises", parent: "fpage" },
  { id: "fchat", label: "Chat with patient", parent: "fpage" },
  { id: "fgoal", label: "Set goal", parent: "fsmart" },
  { id: "fbuilder", label: "Program builder", parent: "fasign" },
  { id: "fbuilder2", label: "Program builder", parent: "fmod" },
];

const adminNodes = [
  { id: "aroot", label: "Admin login", parent: null, primary: true },
  { id: "ausers", label: "users", parent: "aroot" },
  { id: "ateams", label: "Teams", parent: "aroot" },
  { id: "aex", label: "Exercises", parent: "aroot" },
  { id: "aprog", label: "Programs", parent: "aroot" },
  { id: "apat", label: "Patient page", parent: "ausers" },
  { id: "afys", label: "Fysio page", parent: "ausers" },
  { id: "adelu", label: "Delete users", parent: "ausers" },
  { id: "aeditor", label: "Program editor", parent: "apat" },
  { id: "ant", label: "Add new team", parent: "ateams" },
  { id: "asel", label: "Select / delete", parent: "ateams" },
  { id: "avt", label: "View team", parent: "ateams" },
  { id: "ave", label: "View exercise", parent: "aex" },
  { id: "aen", label: "Edit note", parent: "ave" },
  { id: "acp", label: "Create new program", parent: "aprog" },
  { id: "agf", label: "Go to folder", parent: "aprog" },
  { id: "aep", label: "Edit program", parent: "aprog" },
  { id: "adp", label: "Delete program", parent: "aprog" },
];

export function buildSitemap() {
  let s = svgOpen(W, H);
  s += `<title>Coco Care portal sitemaps</title>`;
  s += pillLabel(80, 40, "Appmap - Fysio view");
  s += layoutTree(fysioNodes, "froot", 100, 100, 58, 118, 32);
  s += pillLabel(80, 880, "Appmap - Admin view");
  s += layoutTree(adminNodes, "aroot", 100, 940, 58, 118, 32);
  s += svgClose();
  return s;
}
