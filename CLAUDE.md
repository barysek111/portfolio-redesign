# Portfolio Redesign

Barba's UX design portfolio. Built with Vite + React + TypeScript + TailwindCSS v4 + TanStack Router + Framer Motion. Bun runtime. Deploys to Cloudflare Pages.

## Key conventions
- Colors: always `var(--)` or Tailwind semantic utility — never hardcode
- Content: lives in `src/lib/*Content.ts`, never inline in components
- Components: reuse from `src/components/` before creating new ones
- Decisions: check `docs/decisions/README.md` before architectural changes

## Five important files
| File | Purpose |
|------|---------|
| `src/lib/designSystem.ts` + `src/styles.css` | Design tokens (source of truth) |
| `src/styles.css` | Global styles + CSS variables |
| `docs/decisions/README.md` | Resolved decisions — read before architectural changes |
| `AGENTS.md` | Component map |
| `context/current.md` | Live working state — read first |

## Resuming work
1. Read `context/current.md` to find the active case study and its handoff file.
2. Read the handoff file listed there — that has what's done and what's next.
3. Check `docs/decisions/README.md` before proposing any architectural changes.
4. Keep context short — do not scan unrelated files.

> Keep this file short. Never pad it.
