# Maintenance Checklist

Recurring audits organized by cadence. Use this to keep the site clean, consistent, and launch-ready as work progresses.

---

## After Every Working Session

- [ ] Update `context/current.md` with what was done and what's next
- [ ] If route changed: update `docs/product/routing-map.md`
- [ ] If component added/changed significantly: update `docs/product/component-inventory.md`
- [ ] If a decision was made: add to `docs/decisions/README.md`
- [ ] If a case study section was completed: update `docs/product/case-study-inventory.md`
- [ ] Commit staged changes with a clear message

---

## Before Starting Any Significant Change

- [ ] Read `context/current.md` to understand the current state
- [ ] Read `docs/decisions/README.md` to avoid re-litigating settled decisions
- [ ] Read `docs/product/product.md` if touching architecture, routing, or design system
- [ ] Check `docs/product/component-inventory.md` before creating a new component
- [ ] Fill out `docs/product/template.md` for any change that touches multiple files

---

## Weekly (or Before Each New Work Sprint)

### Dead code scan

- [ ] Run `grep -r "TODO\|FIXME\|HACK\|TEMP\|PLACEHOLDER" src/` and address or document each hit
- [ ] Check for unused imports: look for TypeScript warnings in IDE
- [ ] Check for orphaned images in `public/`: cross-reference against `src/lib/*Content.ts` files
- [ ] Check for components that are imported but not used

### Broken imports

- [ ] Run `bun run build` and verify no import errors
- [ ] Check that all image paths in `*Content.ts` files exist in `public/`

### Content consistency

- [ ] Spot-check copy in `*Content.ts` files against voice and tone rules (`docs/product/content-standards.md`)
- [ ] Confirm no em dashes (—) or hyphen-dashes (-) in copy fields
- [ ] Confirm no AI-sounding phrases in any content file
- [ ] Check that all alt text is descriptive (not file names)

---

## Pre-release (Before Every Deployment)

### Accessibility

- [ ] Keyboard navigation works on all pages: tab through nav, project rows, links, footer
- [ ] Focus states visible for all interactive elements
- [ ] All case study images have meaningful alt text
- [ ] `prefers-reduced-motion` verified: animations suppressed when preference is on
- [ ] Color contrast: check muted text (`#66615a`) against background (`#f6f6f6`) at small sizes

### Responsiveness

- [ ] Homepage: 375px (mobile), 768px (tablet), 1440px (desktop), 1728px (wide)
- [ ] About page: same breakpoints
- [ ] Work With Me: same breakpoints
- [ ] All case study pages: same breakpoints
- [ ] Nav: 3-pill mobile layout at 375px; asymmetric desktop layout at 1024px+
- [ ] Project showcase: image grids reflow correctly at all breakpoints

### Route validation

- [ ] All 10 routes return the correct page: `/`, `/about`, `/work-with-me`, `/powermatch`, `/ageras`, `/cococare`, `/rokokoweb`, `/rokokobrand`, `/weld`, `/eatgrim`
- [ ] 404 page renders for non-existent routes
- [ ] Error page renders on deliberate error
- [ ] All project showcase links navigate to correct case studies
- [ ] Back links on case studies navigate to homepage

### Metadata review

- [ ] `<title>` is set correctly in `__root.tsx`
- [ ] `description` meta tag is set
- [ ] OG tags are set (note: OG image is currently missing — address before launch)
- [ ] Font preload is in place for NHaasGroteskTXPro-55Rg.otf
- [ ] Favicon is set (currently inline SVG "B" letter)

### Design token validation

- [ ] No hardcoded hex colors in components — run: `grep -r "#[0-9a-fA-F]\{3,6\}" src/components/`
- [ ] No arbitrary spacing in components — run: `grep -r "\[.*px\]" src/components/` and review hits
- [ ] No hardcoded font sizes — run: `grep -r "font-size:" src/components/`

---

## Post-change (After Any Code Change)

### If design tokens changed

- [ ] Change applied to both `src/styles.css` AND `src/lib/designSystem.ts`
- [ ] Dark mode still works (toggle `.dark` class on `<html>`)
- [ ] Work With Me page (forced dark) still correct
- [ ] No visual regression on homepage, about, and at least one case study

### If a component was refactored

- [ ] Visual appearance unchanged — screenshot before and after
- [ ] All pages that use the component reviewed
- [ ] TypeScript compiles without errors: `bun run build`
- [ ] No console errors or warnings in browser

### If content was updated

- [ ] Content file updated (not component)
- [ ] Image paths verified against `public/`
- [ ] Prose is within voice and tone guidelines
- [ ] No trailing spaces or line breaks in string constants

### If a route was added

- [ ] Route file created in `src/routes/`
- [ ] Route entry added to `docs/product/routing-map.md`
- [ ] Nav item added to `topNavConfig.ts` if it's a primary nav destination
- [ ] Showcase entry added to `projectShowcaseEntries.ts` if it's a case study

---

## Design System Audit (Run When Touching Tokens)

- [ ] CSS vars in `src/styles.css :root` match exports in `src/lib/designSystem.ts`
- [ ] Tailwind `@theme inline` block maps all custom vars correctly
- [ ] Spacing scale has exactly 13 steps — no added or removed tokens
- [ ] Type scale uses `clamp()` — no fixed px values on h1–h5
- [ ] Color tokens are semantic — no raw hex in `--background`, `--foreground`, etc.
- [ ] Project card tint tokens defined for all active case studies
- [ ] Dark mode tokens defined for all overridden semantic tokens
- [ ] Known inconsistencies (see `docs/product/design-system.md`) still documented; fix or document if changed

---

## Launch Readiness Audit

See `docs/product/release-readiness.md` for the complete pre-launch checklist.

---

## Documentation Freshness Audit (Run Quarterly or Before Handing Off)

- [ ] `docs/product/product.md` reflects actual site state
- [ ] `docs/product/routing-map.md` has all current routes
- [ ] `docs/product/component-inventory.md` has all current components
- [ ] `docs/product/case-study-inventory.md` reflects actual build status
- [ ] `docs/decisions/README.md` has all settled decisions
- [ ] `context/current.md` is up to date
- [ ] `AGENTS.md` is updated or archived (currently outdated — superseded by component-inventory.md)
