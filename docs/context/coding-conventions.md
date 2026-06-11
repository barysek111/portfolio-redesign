# Coding Conventions

## Stack

| Concern | Choice |
|---------|--------|
| UI | React 19 |
| Routing | `@tanstack/react-router` (file routes) |
| Styling | Tailwind CSS v4 + CSS variables |
| Components | shadcn/ui pattern (`src/components/ui/`) |
| Animation | `motion/react` (Framer Motion) |
| Icons | `lucide-react` |
| Build | Vite 7 |
| Deploy | Cloudflare (Wrangler artifacts in `dist/server`) |
| Runtime | Bun |

## File Conventions

- `src/styles.css` — CSS custom properties and Tailwind theme config
- `src/lib/designSystem.ts` — single source of truth for all design tokens
- `src/lib/utils.ts` — `cn()` helper
- `src/components/ui/` — shadcn primitives only (button, badge, navigation-menu, etc.)
- `src/routes/` — TanStack file routes (one file per page)
- Routes use layout: `__root.tsx` wraps all pages

## Component Rules

- **Reuse before creating.** Check `src/components/` before writing a new component.
- **Content separate from presentation.** Copy and data live in `src/lib/*Content.ts`, not in components.
- **Tokens via designSystem.ts.** Import from `@/lib/designSystem` — don't hardcode values in components.
- **Variants via CVA.** Use class-variance-authority for any component with multiple visual states.
- shadcn primitives in `ui/` only — no custom layout logic inside `ui/`.

## Styling Rules

- Global tokens in `:root` / `.dark` in `styles.css` — edit here first.
- Tailwind utilities for layout; CSS variables for color/radius/spacing tokens.
- Max-width pattern: `max-w-[1180px] mx-auto px-4 md:px-6`
- Dark mode via `.dark` class on `<html>` — CSS variables auto-swap.
- Never hardcode a color hex. Use `var(--*)` or a Tailwind semantic utility.

## Naming

- Components: PascalCase (`ProjectHero.tsx`)
- Utilities/hooks: camelCase (`useScrollPosition.ts`)
- Content files: camelCase with `Content` suffix (`cocoCareContent.ts`)
- Route files: lowercase (`cococare.tsx`, `ageras.tsx`)
