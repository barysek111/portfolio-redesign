/** Shared SVG primitives — Inter, transparent canvas, fixed dimensions (no scaling). */

export const FONT =
  "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";

export function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function wrapText(text, maxChars = 22) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export function svgOpen(width, height) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
<style>
  text { font-family: ${FONT}; }
  .wf-label { font-size: 14px; font-weight: 600; fill: #1a1a1a; }
  .wf-title { font-size: 13px; font-weight: 600; fill: #1a1a1a; }
  .wf-body { font-size: 11px; font-weight: 400; fill: #4a4a4a; }
  .wf-muted { font-size: 10px; font-weight: 400; fill: #6b6b6b; }
  .wf-tab { font-size: 9px; font-weight: 500; fill: #8a8a8a; }
  .wf-tab-active { font-size: 9px; font-weight: 600; fill: #1a1a1a; }
  .flow-label { font-size: 11px; font-weight: 500; fill: #1a1a1a; }
  .flow-small { font-size: 10px; font-weight: 400; fill: #1a1a1a; }
  .map-label { font-size: 11px; font-weight: 500; fill: #1a1a1a; }
  .map-small { font-size: 10px; font-weight: 400; fill: #1a1a1a; }
  .ia-primary { font-size: 12px; font-weight: 600; fill: #ffffff; }
  .ia-secondary { font-size: 11px; font-weight: 500; fill: #1a1a1a; }
  .module-title { font-size: 12px; font-weight: 600; fill: #1a1a1a; }
  .module-body { font-size: 10px; font-weight: 400; fill: #3d3d3d; }
</style>
`;
}

export function svgClose() {
  return `</svg>`;
}

export function textEl(
  x,
  y,
  content,
  {
    anchor = "middle",
    className = "map-label",
    size,
    weight,
    fill,
  } = {},
) {
  const attrs = [
    `x="${x}"`,
    `y="${y}"`,
    `text-anchor="${anchor}"`,
    className ? `class="${className}"` : "",
    size ? `font-size="${size}"` : "",
    weight ? `font-weight="${weight}"` : "",
    fill ? `fill="${fill}"` : "",
  ]
    .filter(Boolean)
    .join(" ");
  return `<text ${attrs}>${escapeXml(content)}</text>`;
}

export function multilineText(
  x,
  y,
  lines,
  { anchor = "middle", className = "map-label", lineHeight = 14 } = {},
) {
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  return lines
    .map(
      (line, i) =>
        textEl(x, startY + i * lineHeight + 4, line, { anchor, className }),
    )
    .join("\n");
}

export function centeredLabel(x, y, w, h, label, opts = {}) {
  const lines = Array.isArray(label) ? label : wrapText(label, opts.maxChars ?? 16);
  return `${box(x, y, w, h, opts)}
${multilineText(x + w / 2, y + h / 2, lines, {
    className: opts.className ?? "map-label",
    lineHeight: opts.lineHeight ?? 13,
  })}`;
}

export function box(x, y, w, h, { fill = "#fff", stroke = "#1a1a1a", rx = 6, sw = 1.25 } = {}) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}

export function line(x1, y1, x2, y2, { stroke = "#9ca3af", sw = 1.25, dash } = {}) {
  const dashAttr = dash ? ` stroke-dasharray="${dash}"` : "";
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}"${dashAttr}/>`;
}

export function arrowV(x, y1, y2, opts) {
  const yMin = Math.min(y1, y2);
  const yMax = Math.max(y1, y2);
  return `${line(x, yMin, x, yMax, opts)}
<polygon points="${x},${yMax} ${x - 4},${yMax - 7} ${x + 4},${yMax - 7}" fill="${opts?.stroke ?? "#9ca3af"}"/>`;
}

export function arrowH(x1, x2, y, opts) {
  const xMin = Math.min(x1, x2);
  const xMax = Math.max(x1, x2);
  return `${line(xMin, y, xMax, y, opts)}
<polygon points="${xMax},${y} ${xMax - 7},${y - 4} ${xMax - 7},${y + 4}" fill="${opts?.stroke ?? "#9ca3af"}"/>`;
}

export function pillLabel(x, y, text) {
  const padX = 16;
  const w = Math.max(120, text.length * 7 + padX * 2);
  return `${box(x, y, w, 32, { rx: 16, fill: "#fff", stroke: "#d1d5db" })}
${textEl(x + w / 2, y + 21, text, { className: "map-label", weight: 600 })}`;
}

/** Academy Process Flow kit — sage process pills, numbered badges, connector nodes */
const KIT = {
  processFill: "#E4E7D7",
  processStroke: "#E4E7D7",
  badgeFill: "#000000",
  badgeText: "#ffffff",
  connectorYes: "#55D45B",
  connectorNo: "#FD6764",
  label: "#000000",
};

function flowBadge(x, y, num = "1.0") {
  return `${box(x, y, 30, 20, { fill: KIT.badgeFill, stroke: "none", rx: 10 })}
${textEl(x + 15, y + 14, num, { className: "flow-small", fill: KIT.badgeText, size: 12, weight: 600 })}`;
}

function flowConnector(cx, cy, kind = "yes") {
  const fill = kind === "yes" ? KIT.connectorYes : KIT.connectorNo;
  const r = 9.4;
  if (kind === "yes") {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>
<path d="M${cx - 1.3} ${cy + 2.8}L${cx - 3.8} ${cy}C${cx - 3.9} ${cy - 0.2} ${cx - 3.9} ${cy - 0.5} ${cx - 3.8} ${cy - 0.6}L${cx - 3.2} ${cy - 1.2}C${cx - 3.1} ${cy - 1.3} ${cx - 2.9} ${cy - 1.3} ${cx - 2.8} ${cy - 1.2}L${cx - 0.9} ${cy + 0.7}L${cx + 2.7} ${cy - 3.3}C${cx + 2.8} ${cy - 3.4} ${cx + 3.1} ${cy - 3.4} ${cx + 3.2} ${cy - 3.3}L${cx + 3.8} ${cy - 2.7}C${cx + 3.9} ${cy - 2.6} ${cx + 3.9} ${cy - 2.3} ${cx + 3.8} ${cy - 2.2}L${cx - 1.3} ${cy + 2.8}Z" fill="white"/>`;
  }
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>
<path d="M${cx + 1.3} ${cy + 0.6}L${cx + 2.8} ${cy - 1}C${cx + 2.9} ${cy - 1.1} ${cx + 2.9} ${cy - 1.4} ${cx + 2.8} ${cy - 1.5}L${cx + 2.5} ${cy - 1.8}C${cx + 2.4} ${cy - 1.9} ${cx + 2.1} ${cy - 1.9} ${cx + 2} ${cy - 1.8}L${cx + 0.5} ${cy - 0.3}L${cx - 0.9} ${cy - 1.8}C${cx - 1} ${cy - 1.9} ${cx - 1.3} ${cy - 1.9} ${cx - 1.4} ${cy - 1.8}L${cx - 1.7} ${cy - 1.5}C${cx - 1.8} ${cy - 1.4} ${cx - 1.8} ${cy - 1.1} ${cx - 1.7} ${cy - 1}L${cx + 1.3} ${cy + 0.6}Z" fill="white"/>`;
}

/** Process-flow kit shapes */
export function flowAction(x, y, w, h, label, step = "1.0") {
  const lines = wrapText(label, 18);
  return `${box(x, y, w, h, { fill: KIT.processFill, stroke: KIT.processStroke, rx: 10, sw: 0 })}
${flowBadge(x + 20, y + 20, step)}
${multilineText(x + w / 2, y + h / 2 + 6, lines, { className: "flow-label", lineHeight: 12 })}`;
}

export function flowScreen(x, y, w, h, label, step = "1.0") {
  const lines = wrapText(label, 20);
  return `${box(x, y, w, h, { fill: KIT.processFill, stroke: KIT.processStroke, rx: 10, sw: 0 })}
${flowBadge(x + 20, y + 20, step)}
${multilineText(x + w / 2, y + h / 2 + 6, lines, { className: "flow-label", lineHeight: 12 })}`;
}

export function flowOption(x, y, w, h, label) {
  return `${box(x, y, w, h, { fill: "#4a5568", stroke: "#4a5568", rx: 8 })}
${textEl(x + w / 2, y + h / 2 + 4, label, { className: "flow-label", fill: "#fff" })}`;
}

export function flowDecision(x, y, size, label, step = "1.0") {
  const half = size / 2;
  const cx = x + half;
  const cy = y + half;
  const points = `${cx},${y} ${x + size},${cy} ${cx},${y + size} ${x},${cy}`;
  const lines = wrapText(label, 14);
  return `<polygon points="${points}" fill="${KIT.processFill}" stroke="${KIT.processStroke}" stroke-width="2"/>
${flowBadge(x + half - 15, y + 12, step)}
${multilineText(cx, cy + 8, lines, { className: "flow-small", lineHeight: 11 })}`;
}

export function flowTerminal(x, y, w, h, label, step = "1.0") {
  return `${box(x, y, w, h, { fill: KIT.processFill, stroke: KIT.processStroke, rx: h / 2, sw: 2 })}
${flowBadge(x + 39, y + 19, step)}
${textEl(x + w / 2, y + h / 2 + 4, label, { className: "flow-label", size: 11 })}`;
}

export { flowConnector, KIT };

export function flowLegend(x, y) {
  const items = [
    ["Action", KIT.processFill, KIT.processStroke, "rect"],
    ["Option", "#4a5568", "#4a5568", "rect"],
    ["Decision", KIT.processFill, KIT.processStroke, "diamond"],
    ["Screen", KIT.processFill, KIT.processStroke, "rect"],
    ["Start/End", KIT.processFill, KIT.processStroke, "pill"],
  ];
  let out = `${box(x, y, 168, 132, { fill: "#fff", stroke: "#e5e7eb", rx: 8 })}
${textEl(x + 14, y + 20, "Legend", { anchor: "start", className: "flow-label", weight: 600, size: 12 })}`;
  items.forEach(([name, fill, stroke, shape], i) => {
    const iy = y + 28 + i * 17;
    if (shape === "rect") {
      out += box(x + 12, iy, 22, 12, { fill, stroke, rx: 2, sw: 1 });
    } else if (shape === "diamond") {
      out += `<polygon points="${x + 23},${iy} ${x + 34},${iy + 6} ${x + 23},${iy + 12} ${x + 12},${iy + 6}" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`;
    } else if (shape === "pill") {
      out += box(x + 12, iy - 2, 22, 14, { fill, stroke, rx: 7, sw: 1 });
    } else {
      out += `<circle cx="${x + 23}" cy="${iy + 6}" r="6" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`;
    }
    out += textEl(x + 42, iy + 10, name, { anchor: "start", className: "flow-small" });
  });
  return out;
}

export function swimlaneLabel(x, y, text) {
  return `<g transform="translate(${x},${y}) rotate(-90)">
${textEl(0, 0, text, { anchor: "middle", className: "flow-label", weight: 600, size: 11 })}
</g>`;
}

export function flowTitle(x, y, text) {
  return textEl(x, y, text, {
    anchor: "start",
    className: "flow-label",
    weight: 600,
    size: 14,
  });
}

/** Wireframe kit */
export function wfScreenLabel(x, y, label) {
  return textEl(x, y, label, { anchor: "start", className: "wf-label" });
}

export function wfPhone(x, y, w, h, drawContent) {
  const inner = { x: x + 12, y: y + 36, w: w - 24, h: h - 72 };
  return `${box(x, y, w, h, { fill: "#fff", stroke: "#1a1a1a", rx: 20, sw: 1.5 })}
<rect x="${x + 12}" y="${y + 14}" width="${w - 24}" height="14}" rx="7" fill="#f3f4f6"/>
${drawContent(inner)}`;
}

export function wfCard({ x, y, w, h, title, children = "" }) {
  return `${box(x, y, w, h, { fill: "#f9fafb", stroke: "#e5e7eb", rx: 8 })}
${title ? textEl(x + 10, y + 18, title, { anchor: "start", className: "wf-title" }) : ""}
${children}`;
}

export function wfPlaceholder(x, y, size) {
  return `${box(x, y, size, size, { fill: "#fff", stroke: "#d1d5db", rx: 4 })}
<line x1="${x + 8}" y1="${y + 8}" x2="${x + size - 8}" y2="${y + size - 8}" stroke="#cbd5e1" stroke-width="1.5"/>
<line x1="${x + size - 8}" y1="${y + 8}" x2="${x + 8}" y2="${y + size - 8}" stroke="#cbd5e1" stroke-width="1.5"/>`;
}

export function wfButton(x, y, w, h, label, { dark = true } = {}) {
  const fill = dark ? "#2d3748" : "#fff";
  const stroke = dark ? "#2d3748" : "#d1d5db";
  const color = dark ? "#fff" : "#1a1a1a";
  return `${box(x, y, w, h, { fill, stroke, rx: h / 2 })}
${textEl(x + w / 2, y + h / 2 + 4, label, { className: "wf-body", fill: color })}`;
}

export function wfTabBar(x, y, w, active = "Home") {
  const tabs = ["Home", "Exercises", "Chat", "Profile"];
  const tabW = w / 4;
  let out = `<line x1="${x}" y1="${y}" x2="${x + w}" y2="${y}" stroke="#e5e7eb"/>`;
  tabs.forEach((tab, i) => {
    const cx = x + tabW * i + tabW / 2;
    const cls = tab === active ? "wf-tab-active" : "wf-tab";
    out += textEl(cx, y + 18, tab, { className: cls });
  });
  return out;
}

export function wfToggle(x, y, on) {
  const fill = on ? "#2d3748" : "#e5e7eb";
  const knob = on ? x + 18 : x + 2;
  return `${box(x, y, 34, 18, { fill, stroke: "none", rx: 9 })}
<circle cx="${knob + 7}" cy="${y + 9}" r="7" fill="#fff"/>`;
}
