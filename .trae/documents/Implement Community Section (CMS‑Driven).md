## Goal
Add a responsive “Community” section that matches `.ref/Community.md`, using images/icons from `public/Community`, and keep all content CMS-driven.

## Types
Extend `types/content.ts`:
- `CommunityCardItem: { title: string; subcopy: string; iconSrc: string; variant?: 'brand' | 'light'; backgroundImageUrl?: string }`
- `CommunityStat: { value: string; title: string }`
- `CommunityCallout: { backgroundImageUrl: string; stats: CommunityStat[]; ctaText: string }`
- `CommunityContent: { headline: string; subcopy: string; cards: CommunityCardItem[]; callout: CommunityCallout }`
- Add `community: CommunityContent` to `HomePageContent`

## CMS Data
Update `lib/cms/client.ts` to provide `community` values:
- Headline: “Join Our Growing Community”
- Subcopy: “Connect with 2,847+ professional women…” (exact copy from reference)
- Cards: 4 items
  - Share Stories (brand variant) with `stories.svg` and optional small background
  - Find Support (light) with `support.svg`
  - Get Tips (light) with `tips.svg`
  - Access Resources (light) with `resources.svg`
- Callout:
  - Background image: `/Community/waitlist.png`
  - Stats: `40% Productivity Boost`, `3 hrs Saved Weekly`, `2,847+ On Waitlist`
  - CTA: “Join Waitlist”

## Component
Create `components/sections/Community.tsx`:
- Outer: `Section` → `px-4 py-4`; inner banner: `rounded-[2rem] bg-purple-100 px-6 md:px-32 py-6 md:py-32`
- Heading/subcopy: centered text per reference
- Layout grid: `grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_461.71px] gap-8`
- Left column: render the 4 cards stacked with `gap-8`
  - Card base:
    - Brand variant: `bg-purple-500 text-white`, optional `bg-image` layering, `rounded-[12px] overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.05)]`
    - Light variant: `bg-white text-neutral-900`, same dimensions
  - Icon box using `next/image` from `/Community/*.svg`
  - Title/subcopy typography per reference
- Right callout:
  - `relative` box with `waitlist.png` background (`next/image fill object-cover`) and gradient overlay
  - Stats list with large values and labels in white
  - CTA button emulating reference styles

## Integration
- Import and render `<Community {...data.community} />` after `<Resources />` and before `<Showcase />` in `app/page.tsx`

## Validation
- Visual check: confirm card styling and callout layering align with reference, desktop two-column layout, and responsive stacking.

If approved, I’ll add types, CMS data, the component, and integrate it in the homepage.