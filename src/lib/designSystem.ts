// ─── Color Palette ───────────────────────────────────────────────────────────
// All values extracted from styles.css @theme / :root / .dark

export const colors = {
  // Semantic alias tokens — light mode
  background:      "#F6F6F6",
  surface:         "oklch(0.955 0.003 90)",
  card:            "oklch(0.99 0.002 90)",
  foreground:      "oklch(0.22 0.008 260)",
  secondary:       "oklch(0.93 0.004 90)",
  muted:           "oklch(0.94 0.004 90)",
  mutedForeground: "oklch(0.52 0.008 260)",
  accent:          "oklch(0.62 0.18 25)",
  accentDot:       "oklch(0.66 0.2 25)",
  destructive:     "oklch(0.55 0.22 25)",
  border:          "oklch(0.22 0.008 260 / 0.08)",
  input:           "oklch(0.22 0.008 260 / 0.1)",
  ring:            "oklch(0.62 0.18 25 / 0.4)",

  // Dark mode overrides
  dark: {
    background: "oklch(0.16 0.008 260)",
    surface:    "oklch(0.2 0.008 260)",
    foreground: "oklch(0.96 0.002 90)",
  },

  // Project card tinted backgrounds
  projectCards: {
    ageras:      "oklch(0.94 0.04 145)",
    cococare:    "oklch(0.93 0.05 60)",
    rokoko:      "oklch(0.92 0.04 30)",
    rokokoBrand: "oklch(0.93 0.03 280)",
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
    body: "var(--text-body)",   // clamp(12px, 2vw, 14px) — cards / UI
    bodyProse: "var(--text-body-prose)", // 16px — case study prose outside cards
    bodyL: "var(--text-body-l)", // = h4 (18px laptop)
    bodyS: "var(--text-body-s)",
    xs: "var(--text-xs)",       // 12px fixed
    mono: "var(--text-mono)",
  },

  lineHeights: {
    h1: "110%",
    h2: "120%",
    h3: "120%",
    h4: "125%",
    h5: "120%",
    body: "120%",
    bodyL: "125%",
    bodyS: "120%",
    xs: "120%",
    base: "120%",
  },

  letterSpacing: {
    h1: "-0.015em",
    h2: "-0.008em",
    h3: "-0.008em",
    h4: "-0.005em",
    body: "-0.005em",
    bodyL: "-0.005em",
    bodyS: "-0.005em",
  },

  weight: 400,

  classes: {
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
    h5: "text-h5",
    body: "text-body",
    bodyL: "text-body-l",
    bodyS: "text-body-s",
    xs: "text-xs",
    mono: "text-mono",
  },
} as const;

// ─── Spacing & Sizing ─────────────────────────────────────────────────────────

export const spacing = {
  // Page layout
  containerMaxWidth:       "920px",
  containerPaddingX:       "1.5rem",    // px-6
  containerPaddingTopMd:   "7rem",      // pt-28
  containerPaddingTopLg:   "9rem",      // md:pt-36
  containerPaddingBottom:  "8rem",      // pb-32

  // Section rhythm
  sectionGap:  "6rem",    // mb-24
  footerPadT:  "3rem",    // pt-12

  // Nav
  navTopOffset: "1.25rem", // top-5

  // Component inner spacing
  tagPaddingX:     "0.75rem",   // px-3  — skill tags
  tagPaddingY:     "0.25rem",   // py-1
  tagSmPaddingX:   "0.625rem",  // px-2.5 — card overlay tags
  tagSmPaddingY:   "0.25rem",   // py-1
  pillPaddingX:    "1rem",      // px-4  — "View archive" button
  pillPaddingY:    "0.5rem",    // py-2
  pillSmPaddingX:  "0.75rem",   // px-3  — social link pills
  pillSmPaddingY:  "0.375rem",  // py-1.5

  // Gaps
  gridGap:    "1rem",    // gap-4 — project grid
  tagGap:     "0.5rem",  // gap-2 — skill tags row
  navItemGap: "0.25rem", // gap-1 — nav pills
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

// ─── Button Variants ──────────────────────────────────────────────────────────
// Tailwind class strings — use with cn() or directly in className

export const buttonStyles = {
  base: [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md",
    "text-sm font-medium cursor-pointer transition-colors",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" "),

  variants: {
    default:     "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
    outline:     "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    secondary:   "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    ghost:       "hover:bg-accent hover:text-accent-foreground",
    link:        "text-primary underline-offset-4 hover:underline",
    // Custom pill variant — used on "View archive" and social link buttons
    pill:        "rounded-full border border-border bg-surface transition-all hover:bg-foreground hover:text-background hover:border-foreground",
  },

  sizes: {
    default: "h-9 px-4 py-2",
    sm:      "h-8 px-3 text-xs",
    lg:      "h-10 px-8",
    icon:    "h-9 w-9",
    pillMd:  "px-4 py-2 text-[13px]",    // "View archive"
    pillSm:  "px-3 py-1.5 text-[12px]",  // social links
  },
} as const;

// ─── Tag / Badge Styles ───────────────────────────────────────────────────────

export const tagStyles = {
  // Shadcn badge base
  badgeBase: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",

  badgeVariants: {
    default:     "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
    secondary:   "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
    outline:     "border-border text-foreground",
  },

  // Custom tag styles used in the homepage
  skill:      "rounded-full border border-border bg-surface px-3 py-1 text-[12px] text-muted-foreground",
  project:    "rounded-full border border-border bg-surface px-3 py-1 text-[12px] text-muted-foreground",
  // Frosted overlay tags inside project card (visible on hover)
  cardOverlay: "rounded-full bg-background/95 px-2.5 py-1 text-[11px] text-foreground backdrop-blur",
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navStyles = {
  // Floating pill nav — structural classes
  wrapper:   "fixed inset-x-0 top-5 z-50 flex justify-center px-4",
  container: "flex items-center gap-1 rounded-full border border-border bg-background/80 p-1 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
  item:      "relative rounded-full px-4 py-1.5 text-[13px] transition-colors cursor-pointer",

  // Active / inactive text
  activeText:   "relative z-10 text-background",
  inactiveText: "relative z-10 text-muted-foreground hover:text-foreground",

  // The framer-motion layoutId pill that slides between items
  activePill: "absolute inset-0 rounded-full bg-foreground",

  // Framer-motion spring config for the sliding pill
  pillTransition: { type: "spring" as const, stiffness: 400, damping: 32 },
} as const;

// ─── Animation ────────────────────────────────────────────────────────────────

export const animation = {
  spring: {
    default:  { type: "spring" as const, stiffness: 300, damping: 22 },
    snappy:   { type: "spring" as const, stiffness: 400, damping: 32 },
    soft:     { type: "spring" as const, stiffness: 200, damping: 25 },
    tilt:     { type: "spring" as const, stiffness: 200, damping: 20 },
    slideUp:  { type: "spring" as const, stiffness: 280, damping: 30 },
    badge:    { type: "spring" as const, stiffness: 300, damping: 22 },
  },
  blink: "blink 1.2s step-end infinite",
} as const;
