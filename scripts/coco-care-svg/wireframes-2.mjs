import {
  svgOpen,
  svgClose,
  wfScreenLabel,
  wfPhone,
  wfCard,
  wfPlaceholder,
  wfButton,
  textEl,
  box,
  line,
  multilineText,
} from "./shared.mjs";

const W = 2560;
const H = 1042;
const PHONE_W = 460;
const PHONE_H = 900;
const GAP = 56;
const START_X = 80;

function phoneX(index) {
  return START_X + index * (PHONE_W + GAP);
}

export function buildWireframes2() {
  let s = svgOpen(W, H);

  // 1 Equipment
  s += wfScreenLabel(phoneX(0), 24, "Equipment instructions");
  s += wfPhone(phoneX(0), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    let c = `${textEl(x + 16, y + 8, "‹", { anchor: "start", className: "wf-title" })}
${textEl(x + w / 2, y + 12, "Equipment", { className: "wf-title" })}
${textEl(x + 12, y + 36, "For this exercise session you will need:", { anchor: "start", className: "wf-body" })}`;
    const items = ["Dumbbell", "Mat", "Kettlebell", "Elastic band"];
    items.forEach((label, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const cx = x + col * (w / 2 + 4);
      const cy = y + 70 + row * 150;
      c += wfCard({
        x: cx,
        y: cy,
        w: w / 2 - 8,
        h: 130,
        title: label,
        children: wfPlaceholder(cx + 20, cy + 40, 80),
      });
    });
    c += wfButton(x + w / 2 - 60, y + h - 50, 120, 36, "Confirm");
    return c;
  });

  // 2 Tilt phone
  s += wfScreenLabel(phoneX(1), 24, "Phone gyro setup");
  s += wfPhone(phoneX(1), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    return `${textEl(x + 16, y + 8, "‹", { anchor: "start", className: "wf-title" })}
${textEl(x + w / 2, y + 12, "Tilt your phone", { className: "wf-title" })}
${multilineText(x + w / 2, y + 50, ["Put the phone down, tilt it and", "move in front of the screen."], { className: "wf-body", lineHeight: 13 })}
${wfPlaceholder(x + w / 2 - 80, y + 120, 160)}
${textEl(x + w / 2, y + h - 40, "Tilt down / up", { className: "wf-title", size: 18, weight: 600 })}`;
  });

  // 3 Next exercise
  s += wfScreenLabel(phoneX(2), 24, "Next exercise");
  s += wfPhone(phoneX(2), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    return `${textEl(x + w / 2, y + 20, "Next exercise:", { className: "wf-body" })}
${textEl(x + w / 2, y + 50, "Squat", { className: "wf-title", size: 22, weight: 600 })}
${wfPlaceholder(x + w / 2 - 90, y + 90, 180)}
${textEl(x + w / 2 - 60, y + h - 70, "2", { className: "wf-title", size: 28 })}
${textEl(x + w / 2 - 60, y + h - 40, "Sets", { className: "wf-muted" })}
${textEl(x + w / 2 + 60, y + h - 70, "15", { className: "wf-title", size: 28 })}
${textEl(x + w / 2 + 60, y + h - 40, "Reps", { className: "wf-muted" })}`;
  });

  // 4 Rest
  s += wfScreenLabel(phoneX(3), 24, "Rest screen");
  s += wfPhone(phoneX(3), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    const cx = x + w / 2;
    const cy = y + h / 2 - 20;
    return `${textEl(cx, y + 40, "10s rest", { className: "wf-title", size: 22 })}
<circle cx="${cx}" cy="${cy}" r="70" fill="none" stroke="#e5e7eb" stroke-width="14"/>
<path d="M ${cx} ${cy - 70} A 70 70 0 0 1 ${cx + 70} ${cy}" fill="none" stroke="#2d3748" stroke-width="14" stroke-linecap="round"/>
${textEl(cx, cy + 6, "3", { className: "wf-title", size: 32 })}
${textEl(cx, y + h - 50, "Set 2/2 >", { className: "wf-title" })}`;
  });

  // 5 Session summary
  s += wfScreenLabel(phoneX(4), 24, "Pain score");
  s += wfPhone(phoneX(4), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    let c = wfPlaceholder(x + w / 2 - 24, y, 48);
    c += textEl(x + w / 2, y + 70, "Good job!", { className: "wf-title", size: 18 });
    c += textEl(x + w / 2, y + 92, "Feedback text", { className: "wf-muted" });
    const exercises = [
      ["Squat", 90],
      ["Sit to stand", 50],
      ["Lunge", 100],
      ["Hip abduction left", 90],
      ["Hip abduction right", 90],
    ];
    c += wfCard({ x, y: y + 110, w, h: 280, title: "" });
    exercises.forEach(([name, pct], i) => {
      const ry = y + 130 + i * 48;
      c += textEl(x + 14, ry, name, { anchor: "start", className: "wf-body" });
      c += box(x + 14, ry + 14, w - 80, 8, { fill: "#e5e7eb", stroke: "none", rx: 4 });
      c += box(x + 14, ry + 14, ((w - 80) * pct) / 100, 8, {
        fill: "#2d3748",
        stroke: "none",
        rx: 4,
      });
      c += textEl(x + w - 20, ry + 8, `${pct}%`, { className: "wf-muted" });
    });
    c += wfButton(x + w / 2 - 60, y + h - 50, 120, 36, "Confirm");
    return c;
  });

  s += svgClose();
  return s;
}
