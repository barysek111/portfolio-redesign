# Dev Workflow

## Starting the dev server

```bash
cd ~/portfolio-projects/portfolio-redesign
npm run dev          # starts on http://localhost:5173
npm run open:home    # opens / in browser
npm run open:coco    # opens /project/cococare
```

After each change: **Cmd+Shift+R** in browser.

## Cursor mode guide

| Task | Mode |
|------|------|
| Click element, tweak spacing | Design mode + short prompt |
| One file, clear change | Composer (`Cmd+I`) |
| Many files / refactor | Agent (slower) |

## Which file to edit

See `AGENTS.md` for line numbers. Quick reference:

- Homepage layout → `src/components/home/AiDesignHomepage.tsx`
- Case study layout → `src/components/project/CocoCarePage.tsx`
- Case study text/images → `src/lib/cocoCareContent.ts`
- Global look → `src/styles.css` (last resort)

Always `@` the file in your prompt.

## Cursor settings

- Network → HTTP/1.1 (`disableHttp2` already on)
- Optional: turn off Enhanced Context if edits feel slow
