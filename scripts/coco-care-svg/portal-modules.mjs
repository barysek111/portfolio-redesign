import {
  svgOpen,
  svgClose,
  box,
  arrowH,
  arrowV,
  textEl,
  multilineText,
  line,
} from "./shared.mjs";

const W = 1920;
const H = 1080;

function moduleBox(x, y, w, h, title, items) {
  const lines = items.map((t, i) => `${i + 1}. ${t}`);
  return `${box(x, y, w, h, { fill: "#e9eef2", stroke: "#c5cdd6", rx: 8 })}
${textEl(x + 12, y + 20, title, { anchor: "start", className: "module-title" })}
${multilineText(x + 12, y + 52, lines, { anchor: "start", className: "module-body", lineHeight: 13 })}`;
}

function flowBox(x, y, w, h, lines, fill = "#e9eef2") {
  return `${box(x, y, w, h, { fill, stroke: "#a9b4c2", rx: 6 })}
${multilineText(x + w / 2, y + h / 2, lines, { className: "module-body", lineHeight: 12 })}`;
}

export function buildPortalModules() {
  let s = svgOpen(W, H);
  s += `<title>Modules and actions for portal pages</title>`;

  // Left — modules grid
  s += box(40, 40, 520, 1000, { fill: "#fff", stroke: "#e0e0e0", rx: 12 });
  s += textEl(300, 68, "Modules and actions for portal pages", {
    className: "module-title",
    weight: 600,
  });

  const mods = [
    ["Tables", ["Clients", "Exercises", "Physios", "Teams", "Programs"]],
    ["Activity feeds", ["Program started", "Exercises", "Goals", "Achievements"]],
    ["Data cards", ["Compliance", "Pain score", "With and without CTA"]],
    ["Chat", ["Chat between patients and physios"]],
    ["Create/edit data", ["Edit actions (depend on the field)"]],
    ["Export data", ["Export / sync actions to journal systems"]],
    ["Single pages", ["Overview of: Client, Physio, Exercise, Team"]],
    ["Side nav", ["Main nav"]],
  ];
  mods.forEach(([title, items], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    s += moduleBox(60 + col * 250, 90 + row * 115, 230, 100, title, items);
  });

  // Top middle — patient onboarding
  s += box(600, 40, 680, 280, { fill: "#fff", stroke: "#e0e0e0", rx: 12 });
  s += textEl(940, 68, "User flow for patient creation/onboarding", {
    className: "module-title",
    weight: 600,
  });
  s += textEl(620, 100, "Physio", { anchor: "start", className: "module-title" });
  s += flowBox(620, 115, 200, 50, ["Create a new user in portal"]);
  s += arrowH(820, 870, 140);
  s += flowBox(870, 115, 220, 50, ["Physio resets password to default"]);
  s += textEl(620, 200, "Patient", { anchor: "start", className: "module-title" });
  s += arrowV(720, 165, 205);
  s += flowBox(620, 205, 260, 50, ["Patient receives activation email and temp password"], "#b5bdc9");
  s += arrowH(880, 900, 230);
  s += flowBox(
    900,
    205,
    300,
    50,
    ["Login with email and temp password, asked to set up new password"],
    "#a9b4c2",
  );
  s += arrowH(1200, 1240, 230);
  s += flowBox(1240, 205, 220, 50, ["Patient can link to MitID from the app"], "#949eb1");

  // Bottom middle
  s += box(600, 340, 680, 360, { fill: "#fff", stroke: "#e0e0e0", rx: 12 });
  s += textEl(700, 368, "Exercise flow", { anchor: "start", className: "module-title", weight: 600 });
  s += flowBox(620, 390, 280, 120, [
    "Types of cards:",
    "1. Exercise intro",
    "2. Break + transition info",
    "3. Exercise card",
  ]);
  s += flowBox(920, 390, 320, 120, [
    "Actions to trigger next card:",
    "1. Fixed time",
    "2. X amount of reps",
    "3. Fixed video length x 3",
  ]);
  s += textEl(700, 540, "User flow notifications", {
    anchor: "start",
    className: "module-title",
    weight: 600,
  });
  s += flowBox(620, 560, 300, 110, [
    "Events that trigger them:",
    "1. New chats",
    "2. Program updates",
    "3. Training reminders",
  ], "#a9b4c2");
  s += flowBox(940, 560, 300, 110, [
    "Types of notifications:",
    "1. In app + push (patient)",
    "2. Web (physio)",
    "3. SMS (patient)",
  ], "#a9b4c2");

  // Right — exercise steps
  s += box(1320, 40, 560, 660, { fill: "#fff", stroke: "#e0e0e0", rx: 12 });
  s += textEl(1600, 68, "Exercise steps", { className: "module-title", weight: 600 });
  const steps = [
    ["Intro:", "1. Title + sets X reps", "2. Video", "3. Trigger: time"],
    ["Exercise card:", "1. Trigger: correct reps"],
    ["Break:", "1. Trigger: time"],
    ["Next exercise"],
  ];
  const fills = ["#e9eef2", "#a9b4c2", "#b5bdc9", "#949eb1"];
  steps.forEach((lines, i) => {
    const y = 100 + i * 120;
    s += flowBox(1360, y, 480, 90, lines, fills[i]);
    if (i < steps.length - 1) s += arrowV(1600, y + 90, y + 110);
  });
  s += `<path d="M1840 520 C1880 520 1880 120 1840 120" stroke="#718096" fill="none" stroke-width="1.25"/>`;
  s += `<polygon points="1840,120 1833,127 1847,127" fill="#718096"/>`;

  s += svgClose();
  return s;
}
