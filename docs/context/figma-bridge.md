# Figma ↔ Code Bridge

Reference for keeping Figma and code in sync.

**Figma file:** [New-portfolio-website](https://www.figma.com/design/rHULRmqazpCUuOjWFZs7uC/New-portfolio-website?node-id=0-1)

## Figma File Structure

| Page | Purpose |
|------|---------|
| Cover | DS title card |
| Getting Started | Usage + code paths |
| Foundations | Color swatches, type specimens, spacing bars |
| Components | Component library |

## Variable Collections

1. **Primitives** — raw neutrals + accent (hidden scopes)
2. **Color** — Light / Dark semantic aliases (maps 1:1 to `--*` CSS vars)
3. **Spacing** — gap/size scale `spacing/1` … `spacing/32`
4. **Radius** — corner tokens

## Figma Component → Code Map

| Figma name | Code equivalent |
|------------|-----------------|
| `Nav Item` | `.nav-item` (State=Default / Hover) |
| `Nav Pill` | Fixed header nav shell |
| `Tag` | Case study tag pills |
| `Divider / Horizontal` | `border-foreground/35` |
| `Capability Row` | Focus / Tools list rows |
| `Hero / Intro` | Hero paragraph (52px) |
| `Case Study Card` | Selected work article |
| `Footer / Contact` | Site footer |

## MCP Workflow

1. Read tokens from Figma variables → map to `var(--*)` in `styles.css`.
2. Prefer existing **Components** instances over redrawing.
3. Match layout: **1180px** content width.
4. Apply `.intro-blur-text` to display headings in code (not 1:1 reproducible in Figma).
5. Validate with `get_metadata` + `get_screenshot` after `use_figma` writes.
