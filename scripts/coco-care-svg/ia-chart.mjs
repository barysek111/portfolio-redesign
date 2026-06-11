import {
  svgOpen,
  svgClose,
  box,
  line,
  arrowV,
  textEl,
  centeredLabel,
} from "./shared.mjs";

const W = 1920;
const H = 1080;

function iaNode(x, y, w, h, label, primary = false) {
  const fill = primary ? "#4a5568" : "#fff";
  const stroke = primary ? "#4a5568" : "#cbd5e1";
  const cls = primary ? "ia-primary" : "ia-secondary";
  return `${box(x, y, w, h, { fill, stroke, rx: 8 })}
${textEl(x + w / 2, y + h / 2 + 4, label, { className: cls })}`;
}

function iaContainer(x, y, w, h) {
  return box(x, y, w, h, { fill: "none", stroke: "#d1d5db", rx: 12, sw: 1.5 });
}

export function buildIaChart() {
  let s = svgOpen(W, H);
  s += `<title>Coco Care information architecture</title>`;

  const cx = W / 2;
  s += iaNode(cx - 110, 40, 220, 44, "Superadmin (Coco Care)", true);
  s += arrowV(cx, 84, 120);
  s += iaNode(cx - 160, 120, 320, 44, "Organisation (Clinic/Municipality)");
  s += iaContainer(120, 190, W - 240, 820);
  s += arrowV(cx, 164, 220);
  s += iaNode(cx - 60, 220, 120, 40, "Admin", true);
  s += arrowV(cx, 260, 300);

  const teamW = 380;
  const teamGap = 80;
  const team1X = cx - teamW - teamGap / 2;
  const team2X = cx + teamGap / 2;

  for (const [tx, ti] of [
    [team1X, 0],
    [team2X, 1],
  ]) {
    s += iaContainer(tx, 300, teamW, 680);
    s += iaNode(tx + teamW / 2 - 40, 320, 80, 36, "Team");
    s += arrowV(tx + teamW / 2, 356, 390);
    s += iaNode(tx + teamW / 2 - 44, 390, 88, 36, "Physio", true);
    s += arrowV(tx + teamW / 2, 426, 470);

    const patY = [470, 620];
    patY.forEach((py, pi) => {
      const px = tx + (pi === 0 ? 60 : teamW - 140);
      s += iaNode(px, py, 80, 36, "Patient", true);
      s += arrowV(px + 40, py + 36, py + 80);
      const progX = px - 20;
      const progY = py + 80;
      s += iaContainer(progX, progY, 120, 150);
      s += iaNode(progX + 20, progY + 10, 80, 32, "Program");
      s += arrowV(progX + 60, progY + 42, progY + 58);
      const ex = [
        [progX + 8, progY + 58],
        [progX + 62, progY + 58],
        [progX + 8, progY + 100],
        [progX + 62, progY + 100],
      ];
      ex.forEach(([exx, exy]) => {
        s += iaNode(exx, exy, 50, 28, "Exercise", true);
      });
      line(progX + 60, progY + 50, progX + 60, progY + 114);
    });
    line(tx + teamW / 2, 426, tx + teamW / 2, 470);
  }

  line(cx, 300, team1X + teamW / 2, 300);
  line(cx, 300, team2X + teamW / 2, 300);

  s += svgClose();
  return s;
}
