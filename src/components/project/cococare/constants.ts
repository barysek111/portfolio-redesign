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
/** Case study h1 — chapter section titles (42px). */
export const h1 = "h1";
/** Case study h2 — content block labels, footer CTA (32px laptop). */
export const h2 = "h2";
/** Case study h3 — hero block labels, nested block labels under h2 (22px laptop). */
export const h3 = "h3";
export const editorialSplit = "case-editorial-split";
export const heroIntroSplit = "case-editorial-split";
/** Under-h2 block heading (h3, 22px laptop) — e.g. Interview Questions */
export const blockTitle = "case-block-title";
export const subsectionTitle = "case-subsection-title";
export const screenTitle = "case-screen-title";
export const contentBlockLabel = "content-block-label";

const pairedColumnGap = "gap-4 md:gap-10";
export const calloutColumns = `case-split-columns grid ${pairedColumnGap} md:grid-cols-[1fr_2fr] md:items-start`;
export const halfColumns = `case-split-columns grid ${pairedColumnGap} md:grid-cols-2 md:items-start`;
export const scenarioColumns = `case-split-columns grid ${pairedColumnGap} md:grid-cols-[3fr_7fr] md:items-start`;
