export {
  body,
  blockTitle,
  calloutColumns,
  contentBlockLabel,
  editorialSplit,
  figureRow12,
  figureRow12Cell,
  figureRow12Cell4,
  h1,
  h2,
  h3,
  halfColumns,
  halfColumnsContent,
  halfColumnsLabel,
  heroIntroBody,
  heroIntroSplit,
  heroLead,
  introH4,
  metaItemLabel,
  metaLabel,
  scenarioColumns,
  screenTitle,
  subsectionStack,
  subsectionStack64,
  subsectionTitle,
} from "@/components/project/constants";

export const caseStudyToc = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "ideate", label: "Ideate" },
  { id: "prototype", label: "Prototype" },
  { id: "test", label: "Test" },
] as const;

/** Intrinsic alt text by persona filename — Coco Care specific. */
export const personaAltBySrc: Record<string, string> = {
  "persona-jonas.svg": "User persona: Jonas, physiotherapist",
  "persona-alice.svg": "User persona: Alice, patient",
};

/** Intrinsic SVG dimensions — locks aspect ratio like a raster image. Coco Care specific. */
export const personaSizeBySrc: Record<string, { width: number; height: number }> = {
  "persona-jonas.svg": { width: 975, height: 1234 },
  "persona-alice.svg": { width: 975, height: 1234 },
};
