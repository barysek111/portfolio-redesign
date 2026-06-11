# Fast editing workflow

## Before you start

1. Open folder: `~/portfolio-projects/portfolio-redesign`
2. **Cmd+Shift+P** → **Tasks: Run Task** → **Portfolio: dev server** (leave running)
3. Keep **Safari or Chrome** on:
   - Home: http://localhost:5173/
   - Coco Care: http://localhost:5173/project/cococare

Or: `npm run dev` then `npm run open:home` / `npm run open:coco`

After each change: **Cmd+Shift+R** in the browser.

## Which mode in Cursor

| Task | Use |
|------|-----|
| Click element, tweak spacing | **Design mode** + short prompt |
| One file, clear change | **Composer** (`Cmd+I`) |
| Many files / refactor | **Agent** (slower) |

## Which file to edit

See **AGENTS.md** for line numbers. Rule of thumb:

- Homepage layout → `src/components/home/AiDesignHomepage.tsx`
- Case study layout → `src/components/project/CocoCarePage.tsx`
- Case study text/images → `src/lib/cocoCareContent.ts`
- Global look → `src/styles.css` (last resort)

Always `@` the file in your prompt.

## Prompt examples

See `.cursor/rules/design-mode-prompts.mdc`.

## Cursor settings (you)

- Network → **HTTP/1.1** (already set if `disableHttp2` is on)
- Optional: turn off **Enhanced Context** if edits still feel slow
