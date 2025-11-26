## Breakpoints & Strategy
- Use Tailwind’s breakpoints: `md` (≥768px), `lg` (≥1024px). Add fine-grain CSS media queries in `app/globals.css` for motion control and any non-utility cases.
- Ensure layouts collapse at mobile (≤767px) and adapt at tablet (768–1024px) without horizontal scroll.

## Layout Adjustments
- Hero (`components/sections/Hero.tsx:33–60`): keep existing responsive paddings and font sizes, add small-screen tuning if needed for tighter spacing.
- Features grid (`components/sections/Features.tsx:74–95`): change to `md:grid-cols-2 lg:grid-cols-3` so tablets show two columns, mobile keeps one column; ensure each `FeatureCard` is `h-full` (already updated) for consistent row heights.
- Testimonials marquee (`components/sections/Testimonials.tsx:66–82`):
  - Mobile: show a static vertical stack (`md:hidden`) for readability; disable marquee.
  - Tablet/desktop: keep marquee (`hidden md:block`) with reduced gap.

## Adaptive Components
- Typography: verify and refine headings and body copy using responsive classes (`text-sm`, `md:text-base`, `lg:text-lg`), prioritizing readability on mobile.
- Spacing: adjust `px`/`py`/`gap` with responsive utilities (e.g., `gap-2 md:gap-4`) across sections (Hero, Features, Testimonials, FAQ, Community, Resources).
- Touch targets: ensure interactive controls meet ~44px min touch size (Hero input/button already compliant; review any additional clickable elements).

## Images & Media
- Next/Image sizes:
  - Features previews (`components/sections/Features.tsx:41–48`): expand `sizes` to include tablet/mobile rules: `sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 736px"` for large image; similarly tailored for the 349px image.
  - Testimonials photos (`components/sections/Testimonials.tsx:25`): add `sizes="(max-width: 767px) 100vw, 352px"` and `loading="lazy"`.
- Conditional loading: lazy-load non-critical imagery; reserve `priority` only for above-the-fold hero background (`app/sections/Hero.tsx:21–30`).

## Motion & Performance
- Reduce marquee motion on small screens:
  - In `app/globals.css`: add media queries to slow/disable `.animate-marquee` on mobile and honor `prefers-reduced-motion`:
  - `@media (max-width: 767px) { .animate-marquee { animation: marquee 60s linear infinite; } }`
  - `@media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none; } }`
- Audit large assets and ensure images serve viewport-appropriate resolutions (already supported via Next/Image + `sizes`).

## Testing Plan
- Emulators: Chrome DevTools device emulation for iPhone SE/12/14, Pixel 5/7, iPad and iPad Mini.
- Real devices: iOS Safari (remote debug via macOS), Android Chrome.
- Orientations: verify portrait and landscape in all key sections.
- Interactions: test scroll, tap targets, form input in Hero, card layouts, marquee behavior.
- Run Lighthouse mobile performance checks; target solid scores and minimal CLS.

## Success Criteria
- No horizontal scrolling at mobile/tablet; content wraps/flows naturally.
- All CTA and interactive elements are accessible and usable via touch.
- Images render crisp and sized correctly per viewport; load times meet mobile standards (lazy loading in place).
- UI spacing and proportions remain consistent; marquee toned down on mobile.

If you approve, I will implement these changes across the referenced files, update styles in `app/globals.css`, and validate in the running dev server with device emulation and Lighthouse checks.