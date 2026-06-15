# Release Readiness

Pre-launch and post-launch checklists for the portfolio site. Work through these before removing the password gate and going public.

**Current status as of 2026-06-15:** In progress. See "Known gaps" section in `docs/product/product.md`.

---

## Pre-Launch Checklist

### UX

- [ ] Homepage hero communicates who Barbora is and what she does within the first viewport
- [ ] Project showcase allows scanning all 7 projects without opening any
- [ ] All project showcase entries have role lines, summary copy, and accurate years
- [ ] Navigation is clear — three options, no ambiguity
- [ ] Back links on all case studies work and navigate to homepage
- [ ] Footer CTA on all case studies links to the next relevant page
- [ ] 404 page is in place and human-worded
- [ ] Error page is in place
- [ ] No broken links anywhere on the site
- [ ] Work With Me page contact info is accurate

### Accessibility

- [ ] Tab through homepage: all interactive elements reachable and labeled
- [ ] Tab through all case study pages
- [ ] Focus states visible on nav, project rows, case study links, footer links
- [ ] All content images have meaningful alt text (not filenames)
- [ ] Color contrast passes WCAG AA for `text-muted-foreground` (#66615a) on `--background` (#f6f6f6)
- [ ] `prefers-reduced-motion` honored: disable animations and test
- [ ] Screen reader test on homepage nav (VoiceOver or NVDA)
- [ ] Login page (auth gate) is keyboard accessible
- [ ] No ARIA roles used incorrectly (review any `role=` attributes)

### SEO

- [ ] `<title>` is set: "Barbora Gadlinova UX/UI"
- [ ] `description` meta tag is set and under 160 chars
- [ ] `og:title`, `og:description`, `og:type` are set
- [ ] **OG image** is set — currently missing; required before launch
- [ ] `twitter:card` is set
- [ ] `lang="en"` on `<html>` — already done
- [ ] Favicon is in place (currently inline SVG "B" — acceptable)
- [ ] No `noindex` tags accidentally applied
- [ ] Sitemap considered (not required but helpful)

### Performance

- [ ] Homepage loads under 3s on a 3G connection (Lighthouse)
- [ ] Spline 3D scene doesn't block LCP — it's lazy-loaded with Suspense, verify
- [ ] Font files are preloaded (NHaasGroteskTXPro-55Rg.otf) — already in `__root.tsx`
- [ ] `font-display: swap` on all `@font-face` declarations — already done
- [ ] Case study images are appropriately sized (not over-delivering resolution)
- [ ] Run Lighthouse on: `/`, `/powermatch`, `/cococare`
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms

### Content

- [ ] All 7 case studies have: title, summary, metadata, hero image, at least 2 chapters of content
- [ ] Powermatch DefineSection: `userNeeds.items` populated or section removed
- [ ] Powermatch IdeateSection: `userFlows.images` populated or section layout adjusted
- [ ] Powermatch PrototypeSection designSystem: `images` populated or section adjusted
- [ ] No placeholder text or empty arrays visible to visitors
- [ ] No "TODO" or development-era comments in content files
- [ ] About page: experience, education, services, and personal line all up to date
- [ ] Contact email (`barboragadlinova@gmail.com`) is correct
- [ ] All alt text is descriptive and human-written
- [ ] Copy passes voice and tone check — no AI phrases, no em dashes

### Responsiveness

- [ ] Homepage: 375px, 768px, 1280px, 1440px, 1728px
- [ ] About: same breakpoints
- [ ] Work With Me: same breakpoints
- [ ] Powermatch: all breakpoints — visual QA not yet done
- [ ] Ageras: all breakpoints
- [ ] Coco Care: all breakpoints
- [ ] Rokoko Web: all breakpoints
- [ ] Rokoko Brand: all breakpoints
- [ ] Weld: all breakpoints
- [ ] Eat Grim: all breakpoints
- [ ] Nav: mobile 3-pill, desktop asymmetric
- [ ] Project showcase image grids at narrow widths

### Documentation

- [ ] `docs/product/product.md` is up to date
- [ ] `docs/product/case-study-inventory.md` shows all studies as complete
- [ ] `context/current.md` reflects the current state (no "in progress" items)
- [ ] `docs/decisions/README.md` is up to date

### Auth Gate Removal

- [ ] Password gate tested one final time (can log in, can access site)
- [ ] Decision made: remove auth gate OR replace with permanent protection
- [ ] If removing: delete or disable `src/lib/auth.ts` references in `__root.tsx`
- [ ] After removal: verify all routes are publicly accessible

### Analytics

- [ ] Analytics tool selected (not yet integrated)
- [ ] Analytics snippet added to `__root.tsx` if used
- [ ] Privacy policy considered if analytics collects user data

### Error States

- [ ] 404 page renders at `/any-unknown-path`
- [ ] Error component renders on deliberate error (test by throwing in a component)
- [ ] No unhandled promise rejections in console on any page
- [ ] Spline fallback renders gracefully if Spline fails to load (Suspense `fallback={null}` — acceptable)

### Navigation / Routing

- [ ] All 10 routes load without errors
- [ ] Browser back/forward work correctly on case studies
- [ ] Scroll position resets on route navigation (or is intentional)
- [ ] `scroll-padding-top: 70px` on `html` accounts for fixed nav height

### Final Sign-Off

- [ ] Full site reviewed on physical mobile device (iOS Safari)
- [ ] Full site reviewed on desktop Chrome
- [ ] Full site reviewed on desktop Firefox or Safari
- [ ] Cloudflare Pages deployment tested on preview URL before promoting to production
- [ ] All checklist items above are checked

---

## Post-Launch Checklist

Complete within the first week after launch.

- [ ] Verify production URL is accessible (no auth gate if removed)
- [ ] Test all routes on production (not just preview)
- [ ] Verify OG cards render correctly (use Twitter Card Validator or OG debugger)
- [ ] Submit to Google Search Console if desired
- [ ] Share with hiring contacts or post to LinkedIn
- [ ] Set up uptime monitoring (optional)
- [ ] Note launch date in `docs/product/decision-log.md`
- [ ] Archive or update pre-launch notes in `context/current.md`

---

## Ongoing Post-Launch

- [ ] Review `docs/product/maintenance-checklist.md` on a cadence
- [ ] When adding a new case study: follow the Coco Care template and update all inventory docs
- [ ] When updating copy: follow `docs/product/content-standards.md`
- [ ] When changing tokens: follow `docs/product/design-system.md` and test both light and dark mode
