## Goal
Add a responsive “Insights & Resources” section after Phase Calculator, matching the reference with six resource cards (we’ll render five based on available images in `public/Resources`). Keep all content CMS-driven.

## Types
Extend `types/content.ts`:
- `ResourceItem: { imageSrc: string; title: string; description: string; linkText: string }`
- `ResourcesContent: { headline: string; subcopy: string; items: ResourceItem[] }`
- Add `resources: ResourcesContent` to `HomePageContent`

## CMS Data
Update `lib/cms/client.ts` to provide `resources`:
- Headline: “Insights & Resources”
- Subcopy: “Learn more about cycle awareness and productivity optimization”
- Items (5) using images:
  - `/Resources/Understanding Your Cycle Phases.png`
  - `/Resources/The Science Behind Ghost Cycle.png`
  - `/Resources/Professional Women & Cycle Awareness.png`
  - `/Resources/Scheduling Tips for Each Phase.png`
  - `/Resources/Privacy & Data Security Guide.png`
- Descriptions and linkText: “Read more”

## Component
Create `components/sections/Resources.tsx`:
- Wrapper: `Section` → `px-4 py-4`
- Banner: `rounded-[2rem] bg-white px-6 md:px-32 py-6 md:py-32`
- Heading: `font-museo text-[36px] leading-[40px] md:text-[40px]`
- Subcopy: `text-[20px] leading-7 text-neutral-500`
- Grid/wrap: `flex flex-wrap gap-8` centered; card width `max-w-[352px]`
- Card:
  - Shell: `bg-purple-50 rounded-[12px] p-[3px] shadow-[0_0_2px_rgba(0,0,0,0.05)]`
  - Image area: `h-[150px] p-[8.57px] bg-purple-100 rounded-10` with `next/image` `object-contain`
  - Content area: `px-5 py-6 flex flex-col gap-4`
  - Title: `text-[18px] leading-[28px] font-semibold text-neutral-900`
  - Description: `text-[14px] leading-5 text-neutral-500`
  - Link row: "Read more" + chevron icon (lucide-react `ChevronRight`) in purple

## Integration
- Import and render `<Resources {...data.resources} />` after `<PhaseCalculator />` and before `<Showcase />` in `app/page.tsx`

## Responsiveness
- Mobile: stacked cards, full-width within container
- Tablet/desktop: wrapped cards in 2–3 columns depending on width; consistent spacing

## Validation
- Visual dev review to ensure paddings mirror left/right to top/bottom; confirm images load from `public/Resources` and no external placeholders.

If approved, I’ll implement the types, CMS data, component, and page integration accordingly.