# Routing Map

All routes in the portfolio. Updated as of 2026-06-15.

TanStack Router — file-based routing in `src/routes/`. Root layout: `src/routes/__root.tsx`.

---

## Route Table

| Route | Page | Route file | Page component | Nav entry | Status |
|-------|------|-----------|----------------|-----------|--------|
| `/` | Homepage | `src/routes/index.tsx` | `src/components/home/Homepage.tsx` | "Work" (brand pill) | Live |
| `/about` | About | `src/routes/about.tsx` | `src/components/about/AboutPage.tsx` | "About" | Live |
| `/work-with-me` | Work With Me | `src/routes/work-with-me.tsx` | `src/components/shared/ContactGrid.tsx` | "Work with me" | Live |
| `/powermatch` | Powermatch | `src/routes/powermatch.tsx` | `src/components/project/PowermatchPage.tsx` | Project showcase #1 | Live — visual QA pending |
| `/ageras` | Ageras | `src/routes/ageras.tsx` | `src/components/project/AgerasPage.tsx` | Project showcase #2 | Live |
| `/cococare` | Coco Care | `src/routes/cococare.tsx` | `src/components/project/CocoCarePage.tsx` | Project showcase #3 | Live |
| `/rokokoweb` | Rokoko Web | `src/routes/rokokoweb.tsx` | `src/components/project/RokokoPage.tsx` | Project showcase #4 | Live |
| `/rokokobrand` | Rokoko Brand | `src/routes/rokokobrand.tsx` | `src/components/project/RokokoBrandPage.tsx` | Project showcase #5 | Live |
| `/weld` | Weld | `src/routes/weld.tsx` | `src/components/project/WeldPage.tsx` | Project showcase #6 | Live |
| `/eatgrim` | Eat Grim | `src/routes/eatgrim.tsx` | `src/components/project/EatGrimPage.tsx` | Project showcase #7 | Live |

---

## Root Layout (`src/routes/__root.tsx`)

Wraps all routes. Provides:
- `<html lang="en">` + `<head>` with global meta and font preload
- React Query provider
- Auth gate (password protection — `src/lib/auth.ts`)
- `<SiteFooter />` — rendered on all routes **except** `/work-with-me`
- 404 component: `NotFoundComponent`
- Error component: `ErrorComponent`

### Global meta tags (set in `__root.tsx`)

| Tag | Value |
|-----|-------|
| `<title>` | "Barbora Gadlinova UX/UI" |
| `description` | "Portfolio of Barbora Gadlinova — designer crafting intuitive digital interfaces." |
| `author` | "Barbora Gadlinova" |
| `og:title` | "Barbora Gadlinova — Portfolio" |
| `og:description` | "Designing for the future of tech and lifestyle." |
| `og:type` | "website" |
| `twitter:card` | "summary" |

Note: No OG image is currently set. This is a gap before public launch.

---

## Navigation Configuration (`src/components/nav/topNavConfig.ts`)

### Brand pill (links to homepage)

| Label | Route | Behavior | Desktop span | Mobile span |
|-------|-------|----------|--------------|-------------|
| Work | `/` | Router link | 7 cols | 4 cols |

### Nav items

| Label | Route | Behavior | Desktop span | Mobile span |
|-------|-------|----------|--------------|-------------|
| About | `/about` | Router link | 3 cols | 4 cols |
| Work with me | `/work-with-me` | Router link | 2 cols | 4 cols |

Nav uses a 12-column grid. Mobile: 3 equal pills (4+4+4). Desktop: asymmetric (7+3+2).

---

## Project Showcase → Route Mapping

Projects appear in the homepage showcase and link to their case study pages via TanStack Router links.

| Showcase entry | Route | Image layout |
|---------------|-------|-------------|
| Powermatch Invoice Reconciliation | `/powermatch` | `2 6` (2-col left + 6-col right) |
| Ageras Website UI/UX Consolidation | `/ageras` | `2 3 3` (3 images) |
| Coco Care Interface Design | `/cococare` | `2 3 3` (3 images) |
| Rokoko Website Revamp | `/rokokoweb` | `2 6` (2 images) |
| Rokoko Brand Identity | `/rokokobrand` | `2 3 3` (3 images) |
| Weld Website Revamp | `/weld` | `2 6` (2 images) |
| Eat Grim Brand Identity | `/eatgrim` | `2 3 3` (3 images) |

Image layout values are defined in `src/components/home/projectShowcaseEntries.ts`. Type: `"2 3 3" | "3 3 2" | "2 6" | "2 4 2" | "4 4"`.

---

## Special Route Behaviors

- `/work-with-me` — forces `.dark` class on its container; `<SiteFooter />` is suppressed
- All case study routes — render `<SiteTopNav />` as part of their page component (not injected by root)
- Auth gate intercepts all routes when unauthenticated; renders `<LoginPage />` instead of `<Outlet />`

---

## No-footer Routes

```ts
const NO_FOOTER_ROUTES = ["/work-with-me"];
```

Defined in `src/routes/__root.tsx`. Add new routes here if they should suppress the footer.
