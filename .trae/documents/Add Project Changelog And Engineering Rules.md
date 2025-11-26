## Document Goals
- Create a single `CHANGELOG.md` at the repository root to track what’s been added, changed, fixed, and removed.
- Include a “Guidelines Snapshot” section in the same file that captures the engineering rules we’re actively following, so anyone adding code can reference them.
- Use a well-known format (Keep a Changelog + Semantic Versioning) so future updates stay consistent.

## File To Add
- `CHANGELOG.md` (root)

## Proposed Structure
### Header
- Project name
- Short description
- Links to “Keep a Changelog” and “SemVer” conventions

### Guidelines Snapshot (Current Rules)
- Tech stack: Next.js App Router + Tailwind; `next/font` for Inter/Museo; `next/image` for all images.
- Routing & data: Server components where possible, `lib/cms/client.ts` as CMS-agnostic layer, typed models in `types/content.ts`.
- SEO: `generateMetadata` per page; defaults in `app/layout.tsx`.
- ISR: Per-page `export const revalidate` for marketing pages.
- Styling: Tailwind tokens mapped to CSS variables; semantic palette (`purple.50–900`, `neutral.0–900`), prefer `rem` and fluid layouts (responsive grids, `max-w`, `sizes` in `next/image`).
- Assets: Use `public/` with `/path` references; allow remote via `next.config.js` `images.remotePatterns` when needed.
- Components: Composable sections in `components/sections/*` and primitives in `components/ui/*`; typed props; decoupled from CMS.
- Security: No secrets committed; envs via process env; never log sensitive data.
- Accessibility: Alt text for images, semantic headings, visible focus on interactive elements.
- Code style: Strong typing; clear naming; no inline comments unless explicitly requested; small, focused components.

### Unreleased
- Placeholder for pending changes; maintain as tasks are completed.

### Releases
- `v0.1.0 – 2025-11-18`
  - Added: Next.js + Tailwind scaffold (App Router), font setup, image domains.
  - Added: CMS-ready data layer stubs (`lib/cms/client.ts`) and content types (`types/content.ts`).
  - Added: Hero section wired to public assets; fluid background spanning full hero.
  - Added: Stats section with responsive grid and iconography; tokens applied.
  - Added: Showcase section with fluid sizing (`object-contain`, `sizes`) and purple theming.
  - Added: SEO via `generateMetadata` on Home; ISR (`revalidate=60`).
  - Added: Tailwind theme mapping to CSS variables for `purple`/`neutral` scales.
  - Changed: Adopt `rem`/responsive sizing in Hero, Stats, Showcase.

## Update Workflow
- Keep a running list under “Unreleased”. When changes ship, move entries under a new version heading with date.
- Categorize entries: Added, Changed, Fixed, Removed, Security.
- Reference relevant files/paths when useful (e.g., `components/sections/Hero.tsx:20`).
- Use Semantic Versioning:
  - Patch: fixes/chores (e.g., style adjustments, dependency bumps)
  - Minor: new non-breaking features/sections
  - Major: breaking changes (API, routes, data shapes)

## Maintenance Conventions
- For every completed task, add a bullet to “Unreleased” immediately.
- On release/tag, rename “Unreleased” changes into a dated version and create a fresh “Unreleased” section.
- Keep language concise and action-oriented; avoid implementation detail unless it aids future work.

## Implementation Steps
1. Add `CHANGELOG.md` with the structure above and the initial `v0.1.0` entries.
2. Link rules and conventions inside the changelog under “Guidelines Snapshot”.
3. Share the updating workflow with your backend team so they can append entries as they merge.

## Optional Follow-ups (If You Want)
- Add `CONTRIBUTING.md` with deeper rules (lint, formatting, commit style).
- Configure ESLint/Prettier to codify style.
- Add CI check to ensure “Unreleased” exists and is non-empty before merging feature branches.

Confirm, and I’ll add the `CHANGELOG.md` with the content above and wire any optional follow-ups you choose.