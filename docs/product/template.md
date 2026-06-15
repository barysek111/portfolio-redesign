# Change Documentation Template

Use this template when documenting any significant update, feature, refactor, or content change. Copy the file, fill in all sections, and save it in the appropriate `docs/` subdirectory or alongside the relevant handoff.

---

# [Change Title]

**Date:** YYYY-MM-DD  
**Author:** Barbora / Claude  
**Status:** Draft | In Progress | Complete  
**Type:** Feature | Refactor | Content | Design System | Bug Fix | Architecture

---

## Overview

One paragraph. What changed and why. Written for someone who wasn't in the room.

---

## Goals

What this change needs to accomplish. Written as outcomes, not tasks.

- [ ] Goal 1
- [ ] Goal 2
- [ ] Goal 3

---

## Audience

Who experiences this change? Which pages, which users?

- Primary: (e.g. visitors landing on the homepage)
- Secondary: (e.g. returning visitors checking updated work)

---

## Pages Impacted

| Page | Route | How it's affected |
|------|-------|------------------|
| | | |

---

## Components Impacted

| Component | File | Change |
|-----------|------|--------|
| | | |

---

## Content Impacted

| Content file | Change |
|-------------|--------|
| | |

---

## Design System Impacted

List any token additions, changes, or removals. Include both the CSS variable name and the `designSystem.ts` constant.

- Token: `--` → changed from _ to _
- Typography: none
- Spacing: none
- Radius: none

---

## Technical Changes

Summary of code changes. Link to the relevant files.

- `src/` — what changed
- `src/` — what changed

---

## Risks

What could go wrong? What are the edge cases?

- Risk 1: mitigated by…
- Risk 2: not yet mitigated

---

## Dependencies

Is anything else blocked on this? Does this block anything?

- Depends on: (e.g. Figma export for Powermatch)
- Blocks: (e.g. visual QA for launch checklist)

---

## Acceptance Criteria

How do we know this is done? Specific, observable.

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

---

## Documentation Updates

Which docs need to be updated after this change?

- [ ] `docs/product/routing-map.md` — if route added/changed
- [ ] `docs/product/component-inventory.md` — if component added/changed
- [ ] `docs/product/case-study-inventory.md` — if case study status changed
- [ ] `docs/decisions/README.md` — if a decision was made
- [ ] `context/current.md` — always update at end of session
- [ ] `AGENTS.md` — if component map changed significantly

---

## Open Questions

Things that aren't decided yet.

1. Question 1
2. Question 2

---

## Next Actions

Ordered by priority.

- [ ] Action 1 (owner: _)
- [ ] Action 2 (owner: _)
- [ ] Action 3 (owner: _)
