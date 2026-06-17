// ─── Color Palette ───────────────────────────────────────────────────────────
// CSS var references — source of truth is src/styles.css :root / .dark.
// Use these when passing a color to a JS context (e.g. Three.js, inline style).
// In Tailwind/CSS always use the semantic utilities directly (bg-background, etc.)

export const colors = {
  background:      "var(--background)",
  surface:         "var(--surface)",
  card:            "var(--card)",
  foreground:      "var(--foreground)",
  secondary:       "var(--secondary)",
  muted:           "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  accent:          "var(--accent)",
  accentDot:       "var(--accent-dot)",
  destructive:     "var(--destructive)",
  border:          "var(--border)",
  input:           "var(--input)",
  ring:            "var(--ring)",

  // Project card tinted backgrounds — defined in styles.css :root
  projectCards: {
    ageras:      "var(--color-project-ageras)",
    cococare:    "var(--color-project-cococare)",
    rokoko:      "var(--color-project-rokoko)",
    rokokoBrand: "var(--color-project-rokoko-brand)",
  },
} as const;

// ─── Typography (gentle.systems fluid scale, Neue Haas Text) ─────────────────

export const typography = {
  fonts: {
    sans: '"Neue Haas Grotesk Text Pro", "NeueHaasText", sans-serif',
    display: '"Neue Haas Grotesk Text Pro", "NeueHaasText", sans-serif',
    text: '"Neue Haas Grotesk Text Pro", "NeueHaasText", sans-serif',
    mono: '"Neue Haas Grotesk Text Pro", "NeueHaasText", sans-serif',
  },

  /** @see styles.css — laptop ~1440px; wide @ 1728px (--breakpoint-wide) */
  scale: {
    h1: "var(--text-h1)",       // 42px laptop → 46px @ 1728+
    h2: "var(--text-h2)",       // 32px laptop → 36px @ 1728+
    h3: "var(--text-h3)",       // 22px laptop → 24px @ 1728+
    h4: "var(--text-h4)",       // 18px (both tiers)
    h5: "var(--text-h5)",       // 16px (both tiers)
    s: "var(--text-body)",         // clamp(12px, 2vw, 14px) — merged: body / body-s / mono
    body: "var(--text-body-prose)", // 16px — prose (class: text-body)
    xs: "var(--text-xs)",          // 12px fixed
  },

  lineHeights: {
    h1: "110%",
    h2: "120%",
    h3: "120%",
    h4: "125%",
    h5: "120%",
    s: "120%",
    xs: "120%",
    base: "120%",
  },

  letterSpacing: {
    h1: "-0.015em",
    h2: "-0.008em",
    h3: "-0.008em",
    h4: "-0.005em",
    s: "-0.005em",
  },

  weight: 400,

  classes: {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
    h5: "text-h5",
    s: "text-s",
    body: "text-body",
    xs: "text-xs",
  },
} as const;

// ─── Spacing (strict 13-step scale) ───────────────────────────────────────────
// Tokens: spacing-01 … spacing-13. Tailwind: gap-05, p-06, mt-12, etc.
// CSS vars: var(--spacing-05). Do not use arbitrary spacing outside this scale.
// Px below assume html { font-size: 16px } — rem must not be tied to fluid --text-body.

export const spacingTokens = {
  "01": { rem: "0.125rem", px: 2 },
  "02": { rem: "0.25rem", px: 4 },
  "03": { rem: "0.5rem", px: 8 },
  "04": { rem: "0.75rem", px: 12 },
  "05": { rem: "1rem", px: 16 },
  "06": { rem: "1.5rem", px: 24 },
  "07": { rem: "2rem", px: 32 },
  "08": { rem: "2.5rem", px: 40 },
  "09": { rem: "3rem", px: 48 },
  "10": { rem: "4rem", px: 64 },
  "11": { rem: "5rem", px: 80 },
  "12": { rem: "6rem", px: 96 },
  "13": { rem: "10rem", px: 160 },
  "14": { rem: "12.5rem", px: 200 },
  "15": { rem: "15rem", px: 240 },
} as const;

export type SpacingToken = keyof typeof spacingTokens;

/** CSS variable for a token, e.g. `var(--spacing-05)` */
export function spacingVar(token: SpacingToken): string {
  return `var(--spacing-${token})`;
}

/** Semantic layout aliases → token (homepage + case study) */
export const spacing = {
  containerMaxWidth: "920px",

  // Page shell
  containerPaddingX: spacingTokens["05"].rem,       // was px-4 (16px)
  containerPaddingXMd: spacingTokens["06"].rem,     // was md:px-6 (24px)
  containerPaddingBottom: spacingTokens["12"].rem,  // was pb-32 (128px → 96)
  containerPaddingBottomMd: spacingTokens["13"].rem, // was md:pb-40 (160px)

  // Section rhythm
  sectionGap: spacingTokens["12"].rem,
  footerPadT: spacingTokens["09"].rem,

  // Nav
  navTopOffset: spacingTokens["05"].rem, // was top-5 (20px → 16)

  /** Page shell — fluid column-based side padding (see --page-pad in styles.css) */
  homeShell: "page-shell",
  caseStudyShell: "page-shell",

  // Component inner spacing
  tagPaddingX: spacingTokens["04"].rem,   // was px-3 (12px)
  tagPaddingY: spacingTokens["02"].rem,
  tagSmPaddingX: spacingTokens["04"].rem, // was px-2.5 (10px → 12)
  tagSmPaddingY: spacingTokens["02"].rem,
  // Gaps
  gridGap: spacingTokens["05"].rem,
  /** Gutter between columns in 12-col case study grids */
  grid12ColumnGap: spacingTokens["03"].rem,
  tagGap: spacingTokens["03"].rem,
  navItemGap: spacingTokens["02"].rem,

  // Case study (CSS custom properties on .case-study)
  caseSectionStack: spacingTokens["13"].rem,      // was 200px between sections
  caseMajorBlock: spacingTokens["13"].rem,        // was gap-[160px]
  caseHeroStack: spacingTokens["11"].rem,         // was gap-[80px]
  caseProseToMediaHalf: spacingTokens["07"].rem,  // was 34px
  caseProseToMediaFull: spacingTokens["10"].rem,  // was 64px
  caseHeadlineToCards: spacingTokens["06"].rem,   // was 24px
} as const;

// ─── Border Radius ────────────────────────────────────────────────────────────

export const radius = {
  sm:   "0.625rem",  // --radius-sm  (10px)
  md:   "0.75rem",   // --radius-md  (12px)
  lg:   "0.875rem",  // --radius-lg  (14px) base --radius
  xl:   "1.125rem",  // --radius-xl  (18px)
  "2xl": "1.625rem", // --radius-2xl (26px)
  full: "9999px",    // rounded-full — nav, tags, pills
  card: "1rem",      // rounded-2xl on project card images
} as const;

// ─── Tag / Badge Styles ───────────────────────────────────────────────────────

export const tagStyles = {
  // Shadcn badge base
  badgeBase: "inline-flex items-center rounded-md border px-04 py-01 text-xs font-semibold transition-colors",

  badgeVariants: {
    default:     "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary:   "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
    outline:     "border-border text-foreground",
  },

  // Custom tag styles used in the homepage
  skill:      "rounded-full border border-border bg-surface px-04 py-02 text-[12px] text-muted-foreground",
  project:    "rounded-full border border-border bg-surface px-04 py-02 text-[12px] text-muted-foreground",
  cardOverlay: "rounded-full bg-background/95 px-04 py-02 text-[11px] text-foreground backdrop-blur",
} as const;


