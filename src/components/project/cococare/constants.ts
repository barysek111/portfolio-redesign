export const caseStudyToc = [
  { id: "research", label: "Research" },
  { id: "define", label: "Define" },
  { id: "ideate", label: "Ideate" },
  { id: "prototype", label: "Prototype" },
  { id: "test", label: "Test" },
] as const;

export const metaLabel = "case-meta";
export const metaItemLabel = "case-meta-item-label";
export const body = "case-body";
export const heroLead = "case-lead";
export const heroIntroBody = "case-hero-intro-body";
/** Editorial / split-column intro copy at h4 scale (18px laptop). */
export const introH4 = "case-intro-h4";
/** Case study h1 — chapter section titles (42px). */
export const h1 = "h1";
/** Case study h2 — content block labels, footer CTA (32px laptop). */
export const h2 = "h2";
/** Case study h3 utility class — rarely used; prefer blockTitle / subsectionTitle on elements. */
export const h3 = "h3";
export const editorialSplit = "case-editorial-split";
export const heroIntroSplit = "case-editorial-split";
/** Under-h2 block heading (h3, 22px laptop) — e.g. Interview Questions */
export const personaAltBySrc: Record<string, string> = {
  "persona-jonas.svg": "User persona: Jonas, physiotherapist",
  "persona-alice.svg": "User persona: Alice, patient",
};

/** Intrinsic SVG dimensions — locks aspect ratio like a raster image. */
export const personaSizeBySrc: Record<string, { width: number; height: number }> = {
  "persona-jonas.svg": { width: 975, height: 1234 },
  "persona-alice.svg": { width: 975, height: 1234 },
};

export const blockTitle = "case-block-title";
export const subsectionTitle = "case-subsection-title";
export const screenTitle = "case-screen-title";
export const contentBlockLabel = "content-block-label";

const grid12ColumnGap = "gap-03";
const pairedColumnGap = grid12ColumnGap;
export const calloutColumns = `case-split-columns case-split-columns--1-2 grid ${pairedColumnGap} md:items-start`;
/** 12-col grid: label cols 1–6, content cols 7–12 (matches editorial + figure-split) */
export const halfColumns = "case-split-columns md:items-start";
export const halfColumnsLabel = "case-split-columns__label";
export const halfColumnsContent = "case-split-columns__content min-w-0 w-full";
export const figureRow12 = `case-figure-row case-figure-row--12 grid w-full items-stretch ${grid12ColumnGap} md:grid-cols-12`;
export const figureRow12Cell = "case-figure-row__cell md:col-span-6 max-md:col-span-12 min-w-0";
/** Three equal columns on the 12-col grid (4 cols each) */
export const figureRow12Cell4 = "case-figure-row__cell md:col-span-4 max-md:col-span-12 min-w-0";
export const scenarioColumns = `case-split-columns grid ${pairedColumnGap} md:grid-cols-[3fr_7fr] md:items-start`;
/** Stacked h3+content blocks — gap matches headline → cards (24px) */
export const subsectionStack = "case-subsection-stack w-full";
/** Stakeholder interviews: 64px between intro, questions, findings */
export const subsectionStack64 = "case-subsection-stack case-subsection-stack--64 w-full";
