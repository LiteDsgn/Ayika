## Goal
Create a responsive “Testimonials” section that matches `.ref/testimonials.md`, using images in `public/Testimonials/*` and keeping content CMS-driven like other sections.

## Codebase Conventions
- Use `Section` and `Container` wrappers for layout consistency
- Tailwind-first styling; reuse design tokens from `tailwind.config.ts` and `app/globals.css`
- Assets via `next/image` using absolute paths from `public/Testimonials/*`
- TypeScript props for strong typing and CMS decoupling

## Types
Add `TestimonialsContent` to `types/content.ts` and extend `HomePageContent`:
- `headline: string`, `subcopy: string`
- `items: Array<{ photoSrc: string; quote: string; rating: number; label: string; authorName: string; authorRole: string; starIconSrc?: string; quoteIconSrc?: string }>`

## CMS Data
Update `lib/cms/client.ts` to include `testimonials` with three items referencing:
- Photos: `/Testimonials/Ifeoma-Okoro.png`, `/Testimonials/Aisha-Bello.png`, `/Testimonials/Ngozi-Eze.png`
- Icons: `/Testimonials/star.svg` (repeat x5) and `/Testimonials/Quote Left.svg`
- Copy: match the quotes, labels (“Beta Tester”, “Early Adopter”) and roles from `.ref`

## Component
Create `components/sections/Testimonials.tsx`:
- Outer wrapper: `Section` → `div` `px-4 py-4`
- Banner: `rounded-[2rem] bg-white px-6 md:px-32 py-6 md:py-32`
- Heading: `font-museo text-[36px] leading-[40px] md:text-[40px] text-neutral-900`
- Subcopy: `text-[20px] leading-7 text-neutral-500`
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-8`
- Card layout (per item):
  - Top image: `relative` box with `p-4` and `rounded-[8.57px]`, image `fill object-cover`
  - Quote box: `p-6 bg-purple-50 rounded-[12px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10)]`
  - Stars: render `rating` count of star icons (`next/image` using `/Testimonials/star.svg`), sized ~`w-7 h-7`
  - Label pill: `bg-[#EFE8FD] rounded-full px-2 py-1 text-[12px] text-purple-600`
  - Author strip: `bg-purple-300 px-4 py-[12px] md:py-[18px] rounded-b-[12px] inline-flex gap-3`
    - Quote icon: `next/image` `/Testimonials/Quote Left.svg` `w-12 h-12`
    - Name: `font-museo text-[16px] leading-[24px] font-medium`
    - Role: `text-[14px] leading-[20px] text-neutral-900`

## Integration
- Import and render `<Testimonials {...data.testimonials} />` after `<LaunchSteps />` and before `<Showcase />` in `app/page.tsx`

## Responsiveness
- Mobile: stacked cards, centered grid
- Tablet/desktop: `md:grid-cols-3`, consistent spacing and paddings; banners mirror left/right paddings on top/bottom

## Assets
- Photos and icons sourced from `public/Testimonials/*`
- Use alt text for accessibility

## Validation
- Run dev server and visually verify the layout across breakpoints
- Ensure CMS content renders without hardcoded strings

If approved, I’ll implement the types, CMS data, component, and integration, then verify in the preview.