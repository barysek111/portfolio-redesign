# Design & Tech Decisions

Log of resolved decisions. Claude reads this to avoid re-litigating things that are already settled.

---

## Stack decisions

**Tailwind v4 over v3**
Using `@import "tailwindcss"` syntax, not `@tailwind base/components/utilities`. Don't suggest downgrading.

**TanStack Router over React Router**
File-based routing in `src/routes/`. Don't suggest switching.

**Bun over npm/yarn**
Runtime and package manager. Use `bun` commands, not `npm`, unless a script is already written with npm.

**Cloudflare Pages + Wrangler**
Deploy target. Don't suggest Vercel or Netlify.

**No Tokens Studio / Style Dictionary**
Tokens are CSS-first in `src/styles.css`. No external token pipeline. Don't suggest adding one.

**No serif typeface (yet)**
Direction C (soft lifestyle aesthetic) with a serif accent was considered and deferred. Don't introduce serif unless explicitly asked.

**No CMS**
Content lives in `src/lib/*Content.ts` files. No Contentful, Sanity, etc. Don't suggest adding one.

---

## Design decisions

**Direction A (Quiet Editorial) is the default**
Direction B (Studio Archive) and Direction C (Soft Lifestyle) were considered and deferred. Don't suggest switching direction unless asked.

**Floating pill nav stays**
The nav pattern is fixed. Accessibility improvements (real `<a>` links) are in progress but the visual pattern is settled.

**Coco Care is the canonical project template**
All new project pages should follow its structure. Don't invent a new layout pattern.

**Play nav item is a placeholder**
Keep until experimental/play work exists. Replace with Contact if no play content materialises.
