# docs/product — Documentation System

This directory is the single source of truth for the portfolio site. It captures architecture, design system, content standards, component inventory, and launch state in one place.

## Which file to read first

| Goal | Read |
|------|------|
| Orient to the whole site | `product.md` |
| Write or edit content | `content-standards.md` |
| Work on the design system | `design-system.md` |
| Understand routing | `routing-map.md` |
| Find a component | `component-inventory.md` |
| Check case study status | `case-study-inventory.md` |
| Pre-launch audit | `release-readiness.md` |
| Recurring maintenance | `maintenance-checklist.md` |
| Understand architecture | `site-architecture.md` |
| Check past decisions | `decision-log.md` + `docs/decisions/README.md` |
| Document a change | `template.md` |

## Authority hierarchy

1. `docs/product/product.md` — canonical product state
2. `docs/decisions/README.md` — authoritative for settled technical/design decisions
3. `context/current.md` — live session state (overrides product.md for in-flight work)
4. `CLAUDE.md` — Claude Code behavior rules (separate concern)

## How future updates should work

1. When a route is added or changed → update `routing-map.md`
2. When a component is added → update `component-inventory.md`
3. When a case study is completed → update `case-study-inventory.md`
4. When a technical or design decision is made → add to `docs/decisions/README.md` and `decision-log.md`
5. When starting a significant change → copy `template.md` and fill it out
6. After each work session → update `context/current.md`
7. After launch → fill in post-launch sections in `release-readiness.md`

## Files in this directory

| File | Purpose |
|------|---------|
| `product.md` | Master product overview — goals, structure, principles, architecture |
| `template.md` | Standard template for documenting any future change |
| `content-standards.md` | Voice, tone, writing rules, case study story structure |
| `design-system.md` | Tokens, typography, spacing, color, component rules |
| `site-architecture.md` | Folder structure, data flow, content flow |
| `routing-map.md` | Every route with source file, nav entry, and status |
| `component-inventory.md` | Every component with location, purpose, reusability |
| `case-study-inventory.md` | Every case study with status and documentation state |
| `maintenance-checklist.md` | Recurring audit tasks by cadence |
| `release-readiness.md` | Pre-launch and post-launch checklists |
| `decision-log.md` | Summary of key decisions (detailed record in docs/decisions/README.md) |
