import {
  svgOpen,
  svgClose,
  flowLegend,
  flowTitle,
  swimlaneLabel,
  flowTerminal,
  flowAction,
  flowDecision,
  flowScreen,
  flowOption,
  flowConnector,
  arrowH,
  arrowV,
  line,
} from "./shared.mjs";

const W = 1283;
const H = 792;

export function buildFlowTraining() {
  let s = svgOpen(W, H);

  s += `<title>User flow: Training Flow</title>`;
  s += flowTitle(96, 34, "User flow: Training Flow");
  s += flowLegend(24, 56);
  s += swimlaneLabel(36, 200, "Pre-training");
  s += swimlaneLabel(36, 400, "Training");
  s += swimlaneLabel(36, 600, "Post-training");

  // Pre-training
  s += flowTerminal(105, 117, 265, 87, "Start");
  s += arrowH(370, 218, 150);
  s += flowAction(218, 106, 227, 89, "Start training");
  s += arrowH(445, 406, 150);
  s += flowDecision(406, 117, 126, "Pain score pre-training");
  s += flowConnector(496, 98, "yes");
  s += arrowH(524, 556, 150);
  s += flowScreen(556, 106, 227, 89, "Tips");
  s += arrowV(670, 195, 252);
  s += flowOption(536, 180, 227, 89, "Ok");
  s += flowOption(646, 180, 227, 89, "Don't show again");
  s += flowConnector(496, 272, "no");
  s += arrowV(585, 252, 340);
  s += flowAction(516, 252, 227, 89, "Tilt phone (until positive feedback)");
  s += line(629, 341, 629, 380, { stroke: "#9ca3af" });

  // Training
  s += flowScreen(516, 340, 227, 89, "Next exercise");
  s += arrowH(743, 696, 384);
  s += flowScreen(696, 340, 227, 102, "Countdown from 3 (+sound cues)");
  s += arrowH(923, 956, 384);
  s += flowAction(956, 340, 227, 102, "Active exercise (no screen action required)");
  s += arrowH(1183, 1036, 384);
  s += flowScreen(1036, 340, 227, 89, "10 s rest between sets/exercises");
  s += line(1100, 429, 629, 429, { stroke: "#9ca3af", dash: "6 4" });
  s += line(629, 429, 629, 340, { stroke: "#9ca3af", dash: "6 4" });

  // Post-training
  s += flowDecision(514, 560, 126, "Pain score post-training");
  s += flowConnector(604, 562, "yes");
  s += arrowH(632, 656, 600);
  s += flowScreen(656, 568, 227, 89, "Session completed!");
  s += arrowH(883, 856, 600);
  s += flowAction(856, 572, 227, 89, "Confirm");
  s += arrowH(1083, 1016, 600);
  s += flowScreen(1016, 560, 227, 102, "Session overview (compliance for each exercise)");
  s += arrowV(1130, 662, 700);
  s += flowAction(1066, 640, 227, 89, "Confirm");
  s += arrowV(1179, 700, 648);
  s += flowScreen(1076, 648, 227, 89, "Dashboard");
  s += arrowH(1303, 1217, 692);
  s += flowTerminal(1217, 641, 265, 87, "End");

  s += svgClose();
  return s;
}
