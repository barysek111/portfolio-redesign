# Portfolio Redesign — Claude Context

## Stack
Vite + React + TypeScript + TailwindCSS v4 + shadcn/ui + TanStack Router + Framer Motion (motion/react). Lovable-generated project.

## Design Token File
All design tokens live in **`src/lib/designSystem.ts`** — this is the single source of truth for:
- `colors` — oklch palette, dark mode overrides, project card backgrounds
- `typography` — font families, size scale, weights, leading, tracking, `.text-meta` composite
- `spacing` — container sizing, section rhythm, component padding, gaps
- `radius` — border radius scale
- `buttonStyles` — shadcn CVA variants + custom `pill` variant
- `tagStyles` — shadcn badge variants + `skill`, `project`, `cardOverlay` custom tags
- `navStyles` — floating pill nav classes + framer-motion spring config
- `animation` — all spring transition configs used in the project

When modifying visual styles, update `designSystem.ts` first, then reference it in components via `import { ... } from "@/lib/designSystem"`.

## Key Files
- `src/styles.css` — CSS custom properties and Tailwind theme config
- `src/routes/index.tsx` — homepage (Nav, Intro, Work, ProjectCard, Footer)
- `src/lib/utils.ts` — `cn()` helper
- `src/components/ui/` — shadcn primitives (button, badge, navigation-menu, etc.)
