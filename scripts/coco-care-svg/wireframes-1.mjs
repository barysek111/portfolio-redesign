import {
  svgOpen,
  svgClose,
  wfScreenLabel,
  wfPhone,
  wfCard,
  wfPlaceholder,
  wfButton,
  wfTabBar,
  wfToggle,
  textEl,
  box,
  line,
  multilineText,
  wrapText,
} from "./shared.mjs";

const W = 2560;
const H = 1138;
const PHONE_W = 460;
const PHONE_H = 980;
const GAP = 56;
const START_X = 80;

function phoneX(index) {
  return START_X + index * (PHONE_W + GAP);
}

export function buildWireframes1() {
  let s = svgOpen(W, H);

  // 1 Dashboard V1
  s += wfScreenLabel(phoneX(0), 24, "Dashboard V1");
  s += wfPhone(phoneX(0), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    let c = "";
    c += wfCard({
      x,
      y,
      w,
      h: 120,
      title: "Your current goal",
      children: `${wfPlaceholder(x + 10, y + 28, 48)}
${textEl(x + 68, y + 58, "Patient's current goal", { anchor: "start", className: "wf-body" })}`,
    });
    c += wfCard({
      x,
      y: y + 130,
      w,
      h: 130,
      title: "This week",
      children: `${wfButton(x + w - 110, y + 8, 100, 28, "Start training")}
${[0, 1, 2, 3, 4, 5, 6].map((i) => {
  const filled = i < 3;
  return `<circle cx="${x + 20 + i * 28}" cy="${y + 70}" r="10" fill="${filled ? "#2d3748" : "none"}" stroke="#2d3748"/>`;
}).join("")}
${textEl(x + 10, y + 100, "3 of 7 sessions completed", { anchor: "start", className: "wf-muted" })}`,
    });
    c += wfCard({
      x,
      y: y + 270,
      w,
      h: 140,
      title: "Pain level",
      children: `${line(x + 20, y + 100, x + w - 20, y + 50, { stroke: "#2d3748", sw: 2 })}
${textEl(x + 10, y + 40, "Max", { anchor: "start", className: "wf-muted" })}
${textEl(x + 10, y + 110, "Min", { anchor: "start", className: "wf-muted" })}
${["1W", "2W", "3W", "All"].map((t, i) => textEl(x + 40 + i * 40, y + 125, t, { className: "wf-muted" })).join("")}`,
    });
    c += wfCard({
      x,
      y: y + 420,
      w,
      h: 100,
      title: "Knee flexibility",
      children: `${textEl(x + 10, y + 40, "Max. flexion", { anchor: "start", className: "wf-body" })}
${box(x + w - 100, y + 32, 88, 24, { fill: "#f3f4f6", stroke: "#e5e7eb", rx: 12 })}
${textEl(x + w - 56, y + 48, "80° ↓ 3°", { className: "wf-body" })}
${textEl(x + 10, y + 68, "Max. extension", { anchor: "start", className: "wf-body" })}
${box(x + w - 100, y + 60, 88, 24, { fill: "#f3f4f6", stroke: "#e5e7eb", rx: 12 })}
${textEl(x + w - 56, y + 76, "178° ↑ 5°", { className: "wf-body" })}`,
    });
    c += wfTabBar(x, y + h - 36, w, "Home");
    return c;
  });

  // 2 Dashboard V2
  s += wfScreenLabel(phoneX(1), 24, "Dashboard V2");
  s += wfPhone(phoneX(1), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    let c = wfPlaceholder(x + w / 2 - 30, y, 60);
    c += wfCard({
      x,
      y: y + 80,
      w,
      h: 90,
      title: "Your overview",
      children: `${wfButton(x + 10, y + 30, 110, 30, "Start training")}
<circle cx="${x + w - 50}" cy="${y + 45}" r="28" fill="none" stroke="#2d3748" stroke-width="8" stroke-dasharray="120 40"/>`,
    });
    const grid = [
      ["Goal", "Patient's current goal", ""],
      ["Active Time", "Goal: x Min.", "40 Min."],
      ["Pain Level", "-15% since last week", "6/10"],
      ["Steps", "Goal: 10K", "6K Steps"],
    ];
    grid.forEach(([title, sub, big], i) => {
      const gx = x + (i % 2) * (w / 2 + 4);
      const gy = y + 190 + Math.floor(i / 2) * 110;
      c += wfCard({
        x: gx,
        y: gy,
        w: w / 2 - 8,
        h: 100,
        title,
        children: `${textEl(gx + 10, gy + 40, sub, { anchor: "start", className: "wf-muted" })}
${big ? textEl(gx + 10, gy + 72, big, { anchor: "start", className: "wf-title", size: 16 }) : `<rect x="${gx + 10}" y="${gy + 55}" width="${w / 2 - 30}" height="6" rx="3" fill="#2d3748"/>`}`,
      });
    });
    c += wfTabBar(x, y + h - 36, w, "Home");
    return c;
  });

  // 3 Settings
  s += wfScreenLabel(phoneX(2), 24, "Settings");
  s += wfPhone(phoneX(2), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    let c = `${textEl(x + 20, y + 8, "‹", { className: "wf-title", anchor: "start" })}
${textEl(x + w / 2, y + 12, "Settings", { className: "wf-title" })}
${wfPlaceholder(x + w / 2 - 28, y + 30, 56)}
${textEl(x + w / 2, y + 100, "User's Name", { className: "wf-body" })}`;
    const rows = [
      ["Profile", ["Change login code", "Link profile with MitID", "Log in with Face ID"], [null, false, true]],
      ["Preferences", ["Language", "Sound", "Notifications"], [null, true, true]],
      ["Other settings", ["Privacy policy", "Contact support"], [null, null]],
    ];
    let yy = y + 120;
    rows.forEach(([section, items, toggles]) => {
      c += textEl(x + 4, yy, section, { anchor: "start", className: "wf-muted" });
      yy += 18;
      c += wfCard({
        x,
        y: yy,
        w,
        h: 24 + items.length * 32,
        title: "",
        children: items
          .map((item, i) => {
            const ty = yy + 16 + i * 32;
            let row = textEl(x + 12, ty, item, { anchor: "start", className: "wf-body" });
            if (toggles[i] !== null && toggles[i] !== undefined)
              row += wfToggle(x + w - 48, ty - 12, toggles[i]);
            return row;
          })
          .join(""),
      });
      yy += 24 + items.length * 32 + 16;
    });
    c += wfTabBar(x, y + h - 36, w, "Profile");
    return c;
  });

  // 4 Exercises
  s += wfScreenLabel(phoneX(3), 24, "Exercises");
  s += wfPhone(phoneX(3), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    let c = textEl(x + w / 2, y + 12, "Exercises", { className: "wf-title" });
    for (let i = 0; i < 5; i++) {
      const cy = y + 40 + i * 88;
      c += wfCard({
        x,
        y: cy,
        w,
        h: 76,
        title: "",
        children: `${wfPlaceholder(x + 10, cy + 12, 52)}
${textEl(x + 76, cy + 28, "Squat", { anchor: "start", className: "wf-title" })}
${textEl(x + 76, cy + 44, "15 reps", { anchor: "start", className: "wf-muted" })}
${textEl(x + 76, cy + 58, "2 sets", { anchor: "start", className: "wf-muted" })}`,
      });
    }
    c += wfTabBar(x, y + h - 36, w, "Exercises");
    return c;
  });

  // 5 Pain Score
  s += wfScreenLabel(phoneX(4), 24, "Pain Score");
  s += wfPhone(phoneX(4), 52, PHONE_W, PHONE_H, ({ x, y, w, h }) => {
    let c = textEl(x + w / 2, y + 12, "Pain Score", { className: "wf-title" });
    c += multilineText(
      x + w / 2,
      y + 80,
      wrapText("How much pain do you feel right now in relation to your current problem?", 28),
      { className: "wf-body", lineHeight: 14 },
    );
    c += box(x + w / 2 - 40, y + 160, 80, 80, { fill: "#f9fafb", stroke: "#d1d5db", rx: 8 });
    c += textEl(x + w / 2, y + 210, "5", { className: "wf-title", size: 28 });
    c += line(x + 20, y + 280, x + w - 20, y + 280, { stroke: "#d1d5db", sw: 4 });
    c += `<circle cx="${x + w / 2}" cy="${y + 280}" r="10" fill="#2d3748"/>`;
    c += textEl(x + 24, y + 300, "Min", { anchor: "start", className: "wf-muted" });
    c += textEl(x + w - 24, y + 300, "Max", { className: "wf-muted" });
    c += wfButton(x + w / 2 - 60, y + h - 80, 120, 36, "Confirm");
    return c;
  });

  s += svgClose();
  return s;
}
