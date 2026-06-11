import {
  svgOpen,
  svgClose,
  flowLegend,
  flowTitle,
  flowTerminal,
  flowConnector,
  flowAction,
  flowDecision,
  flowScreen,
  flowOption,
  arrowH,
  arrowV,
  line,
  textEl,
} from "./shared.mjs";

const W = 1283;
const H = 792;

export function buildFlowOnboarding() {
  let s = svgOpen(W, H);
  s += `<title>User flow: App Onboarding</title>`;
  s += flowTitle(96, 34, "User flow: App Onboarding");
  s += flowLegend(24, 56);

  // Row 1
  s += flowTerminal(80, 90, 200, 72, "Start");
  s += arrowH(132, 180, 116);
  s += flowAction(180, 92, 170, 48, "Download and open the app");
  s += arrowH(350, 400, 116);
  s += flowDecision(400, 84, 80, "Log in");
  s += flowOption(500, 60, 120, 32, "Log in with code");
  s += flowOption(500, 110, 140, 32, "Log in with NemID");
  s += arrowH(620, 700, 76);
  s += arrowH(640, 720, 126);
  s += flowAction(700, 68, 150, 36, "Input code from email");
  s += flowAction(720, 118, 150, 36, "NemID verification");
  s += arrowV(775, 104, 170);
  s += arrowV(795, 154, 170);
  s += flowScreen(680, 170, 140, 40, "Onboarding intro");
  s += arrowH(820, 880, 190);
  s += flowAction(880, 176, 100, 36, "Set a goal");
  s += arrowH(980, 1040, 190);
  s += flowScreen(1040, 170, 140, 40, "Onboarding carousel");
  s += arrowH(1180, 1240, 190);

  // Curved connector to row 2
  s += `<path d="M1240 210 C1240 260 200 260 200 300" stroke="#718096" fill="none" stroke-width="1.25"/>`;

  // Row 2
  s += flowDecision(180, 296, 88, "Enable notifications & camera access");
  s += flowOption(300, 270, 80, 30, "Enable");
  s += flowOption(300, 320, 100, 30, "Skip for now");
  s += arrowH(400, 480, 340);
  s += flowScreen(480, 308, 130, 44, "PSFS Score intro");
  s += arrowH(610, 680, 330);
  s += flowOption(680, 300, 110, 36, "Add activity");
  s += arrowH(790, 860, 318);
  s += flowAction(860, 304, 130, 40, "Add activity name");
  s += arrowH(990, 1060, 324);
  s += flowDecision(1060, 296, 90, "Set difficulty on a slider");
  s += flowConnector(1156, 340, "yes");
  s += arrowH(1150, 1200, 340);
  s += flowAction(1200, 312, 60, 32, "Add");
  s += line(1230, 344, 730, 420, { stroke: "#718096", dash: "5 4" });
  s += textEl(900, 400, "max 5 activities", { className: "flow-small", anchor: "middle" });
  s += line(730, 420, 730, 360, { stroke: "#718096", dash: "5 4" });
  s += arrowH(1260, 1080, 360);
  s += flowAction(1080, 352, 90, 32, "Continue");
  s += flowOption(680, 400, 100, 32, "Skip for now");
  s += arrowV(1125, 392, 460);
  s += arrowV(730, 432, 460);
  s += flowScreen(1020, 448, 110, 40, "Dashboard");
  s += arrowH(1130, 1180, 468);
  s += flowTerminal(1080, 432, 200, 72, "End");

  s += svgClose();
  return s;
}
