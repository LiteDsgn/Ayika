## Goal
Add a responsive “Phase Calculator” section after Testimonials, matching the provided reference, using Tailwind and Next/Image, and keeping content fully CMS-driven.

## Conventions
- Use `Section` + `Container` wrappers
- Tailwind-first styling with tokens from `tailwind.config.ts` and `app/globals.css`
- Assets via `next/image`; background image is optional (no external placeholders)
- Types in `types/content.ts`, data in `lib/cms/client.ts`

## Types
Add `PhaseCalculatorContent` and extend `HomePageContent`:
- `chipLabel: string`
- `headline: string`
- `subcopy: string`
- `form: { lastPeriodLabel: string; lastPeriodPlaceholder: string; cycleLengthLabel: string; cycleLengthPlaceholder: string; ctaText: string; footerNote: string }`
- `backgroundImageUrl?: string` (optional)

## CMS Data
Populate `lib/cms/client.ts` with realistic copy matching the reference, and leave `backgroundImageUrl` undefined by default (use gradient/purple-100 fallback).

## Component
Create `components/sections/PhaseCalculator.tsx`:
- Outer: `Section` with `px-4 py-4`
- Banner: `rounded-[2rem] bg-gradient-to-br from-white to-transparent` layered over `bg-purple-100`; optional `next/image` background when `backgroundImageUrl` present
- Inner: `Container max-w-[896px] relative inline-flex gap-12 md:gap-12` with a subtle purple blur box positioned absolutely to mimic the reference glow
- Left column:
  - Pill: `bg-[#EFE8FD] rounded-full px-4 py-1.5 outline outline-1 outline-white text-purple-600 text-[14px]`
  - Headline: `font-museo text-[36px] leading-[40px] md:text-[40px]`
  - Subcopy: `text-[20px] leading-7 text-neutral-500`
- Right card:
  - Card shell: `bg-white rounded-[16px] p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10)] outline outline-1 outline-[rgba(166,112,219,0.05)]`
  - Field group spacing: `gap-8`
  - Last Period field:
    - Label: `text-[14px] font-medium`
    - Input container: `h-12 bg-purple-50 rounded-[12px] outline outline-1 outline-purple-50 px-3 py-2.5 flex items-center justify-between`
    - Placeholder segments `dd/mm/yyyy` rendered as text (non-interactive for now), right-align a small date icon (vector box placeholder)
  - Cycle Length field:
    - Label: `text-[14px] font-medium`
    - Input container: `h-12 bg-purple-50 rounded-[12px] outline outline-1 outline-purple-50 px-3 py-[15.5px]`
    - Placeholder `28` rendered in neutral-500
  - CTA button: reuse `Button` with `h-14 rounded-[12px] text-[18px] font-medium`, variant `bg-purple-600 text-white`
  - Footer note: centered `text-[14px] text-neutral-500`

## Responsiveness
- Mobile: stacked columns, full-width card
- Tablet/desktop: two-column layout (`md:grid-cols-2` or `inline-flex` with `flex-1`), spacing matches reference
- Paddings mirror left/right with top/bottom values (consistent with earlier sections)

## Integration
- Import and render `<PhaseCalculator {...data.phaseCalculator} />` after `<Testimonials />` and before `<Showcase />` in `app/page.tsx`

## Accessibility
- Provide descriptive `alt` text for background images if used; button has clear label

## Validation
- Run dev server and visually confirm alignment and spacing; verify no reliance on external placeholders

If approved, I’ll add the types, CMS data, a new section component, integrate it into the homepage, and verify responsiveness end-to-end.