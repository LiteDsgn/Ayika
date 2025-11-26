## Goal
Create a new responsive "Features" section that faithfully translates `.ref/features.md` using existing UI conventions, assets in `public/Features`, Tailwind utilities, and Next.js Image. Ensure tablet and mobile layouts are first-class.

## Codebase Conventions to Follow
- Use `Section` and `Container` wrappers for page blocks (`components/ui/Section.tsx`, `components/ui/Container.tsx`).
- Tailwind-first styling with tokens from `tailwind.config.ts` and `app/globals.css`.
- TypeScript React components in `components/sections/*` with typed props (static for now).
- Assets loaded via `next/image` from `public` (absolute paths).

## Implementation Steps
1. Types
- Add an optional `FeaturesContent` interface to `types/content.ts` for future CMS decoupling:
  - `headline`, `subcopy` (top banner)
  - Cards: `title`, `subcopy`, `iconSrc`, `bullets: string[]`, `imageSrc?`
- Initial render uses embedded content to match `.ref/features.md` exactly; props remain optional for future data wiring.

2. Component
- Create `components/sections/Features.tsx`:
  - Top banner:
    - Wrapper: `Section` → `Container`
    - Background: `bg-purple-50`, rounding `rounded-[2rem]`, padding `px-4 md:px-32 py-16`
    - Headline: `font-museo text-[36px] leading-[40px] md:text-[40px]` with `text-neutral-900`
    - Subcopy: `text-[20px] leading-7 text-neutral-500`, max width `max-w-[768px]`
  - Grid blocks (translate each card from reference):
    - Card base: `bg-neutral-0 rounded-10 shadow-[0_0_2px_rgba(0,0,0,0.05)]`
    - Icon: `next/image` using `/Features/*.svg`, size 48
    - Title: `font-museo text-[26px] leading-[36px] text-neutral-900`
    - Subcopy: `text-[18px] leading-[27px] text-neutral-900`
    - Bullets: `lucide-react` `Check` icon + `text-neutral-500` 16px
  - Layout specifics:
    - Smart Scheduling (with right image `/Features/smart-scheduling-img.png`):
      - Responsive: `grid grid-cols-1 lg:grid-cols-2`, gap-4
      - Image container: `relative w-full min-h-[20rem] lg:min-h-[415px]`, `rounded-10`, `Image fill object-cover`
    - Row 2: Two equal cards — Energy Forecasting and Cycle Tracking:
      - `grid grid-cols-1 md:grid-cols-2 gap-8`
    - Row 3: One wide card (Intelligent Alerts) with right image `/Features/intelligent-alert-img.png` and one equal card (Quick Insights):
      - Left wide card: `grid grid-cols-1 lg:grid-cols-[1fr_349px] gap-4`, image column fixed width on desktop
      - Right card: same card base and content
    - Right-side vertical card: Privacy First — standalone column on desktop, stacks on mobile (`grid grid-cols-1 lg:grid-cols-[1fr_352px]` overall container to match reference visual balance)

3. Assets
- Use `public/Features`:
  - Icons: `smart-scheduling.svg`, `energy-forecasting.svg`, `cycle-tracking.svg`, `intelligent-alerts.svg`, `quick-insights.svg`, `privacy-first.svg`
  - Images: `smart-scheduling-img.png`, `intelligent-alert-img.png`
- Load via `next/image` with absolute `src` (e.g., `/Features/smart-scheduling.svg`).

4. Responsiveness
- Mobile (≤640px): stack all blocks; full-width cards; comfortable `px-4` paddings.
- Tablet (≥768px): 2-column grids for multi-card rows; maintain readable text sizes (`md:text-xl` headings where applicable).
- Desktop (≥1024px): multi-column layout as in `.ref`, fixed image columns for wide cards; use `sizes` attribute for images (e.g., `(min-width:1024px) 736px, 100vw`).

5. Integration
- Import and render `<Features />` in `app/page.tsx` after `<Stats />` and before `<Showcase />` for a natural flow.

## Exact Translation Notes
- Colors: map `var(--web-color-purple---purple-50|400|600)` and neutral text tokens to Tailwind theme values.
- Spacing and radii: replicate 32px banner radius (`rounded-[2rem]`) and card radius (`rounded-10`).
- Shadows: use `shadow-[0_0_2px_rgba(0,0,0,0.05)]` to match subtle reference shadows.
- Typography: use `font-museo` for headings, `Inter` (`font-inter`) otherwise; align sizes to reference.

## References
- Page composition: `app/page.tsx:12-16`
- Tailwind tokens: `tailwind.config.ts:10-47`, `app/globals.css:15-43`
- Section patterns: `components/sections/Hero.tsx:33-35`, `components/sections/Stats.tsx:34-41`, `components/sections/Showcase.tsx:7-20`
- UI primitives: `components/ui/Container.tsx:3-4`, `components/ui/Section.tsx:3-4`

## Validation
- Visual check in dev: run the app, verify stacking on mobile/tablet, and image sizing. Test public asset paths resolve and no layout shifts occur. Ensure lighthouse accessibility basics (alt text, proper heading order).

If this plan looks good, I’ll implement the `Features` section, wire it into the homepage, and verify responsiveness end-to-end.