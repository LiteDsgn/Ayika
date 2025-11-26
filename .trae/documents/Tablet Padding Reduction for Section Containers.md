## Scope
Adjust horizontal padding for tablet viewports (768–1024px) on the main section wrappers to maximize content width while preserving spacing. Update Tailwind classes to set smaller tablet paddings and restore larger paddings for desktop.

## Targeted Files & Changes
- Testimonials: `components/sections/Testimonials.tsx:59`
  - Change `px-6 md:px-32` → `px-6 md:px-20 lg:px-32`
- Features: `components/sections/Features.tsx:62`
  - Change `px-6 md:px-32` → `px-6 md:px-20 lg:px-32`
- Resources: `components/sections/Resources.tsx:35`
  - Change `px-6 md:px-32` → `px-6 md:px-20 lg:px-32`
- PhaseCalculator: `components/sections/PhaseCalculator.tsx:11`
  - Change `px-6 md:px-32` → `px-6 md:px-20 lg:px-32`
- Showcase: `components/sections/Showcase.tsx:7`
  - Change `px-6 md:px-32` → `px-6 md:px-20 lg:px-32`
- Community: `components/sections/Community.tsx:33`
  - Change `px-6 md:px-32` → `px-6 md:px-20 lg:px-32`
- LaunchSteps: `components/sections/LaunchSteps.tsx:25`
  - Change `px-6 md:px-32` → `px-6 md:px-20 lg:px-32`
- FAQ: `components/sections/FAQ.tsx:49`
  - Change `px-6 md:px-32` → `px-6 md:px-20 lg:px-32`
- Footer: `components/sections/Footer.tsx:9`
  - Change `px-6 md:px-36` → `px-6 md:px-20 lg:px-36`
- Stats: `components/sections/Stats.tsx:34`
  - Change `px-4 md:px-36` → `px-4 md:px-20 lg:px-36`
- Hero: already uses `md:px-20`; no change needed (`components/sections/Hero.tsx:33`).

## Rationale
- `md:px-20` reduces tablet side paddings compared to `md:px-32/36`, increasing usable content width.
- `lg:px-32/36` preserves existing desktop paddings for visual balance.

## Verification
- Use Chrome DevTools to emulate widths at 768, 820, 912, and 1024px; confirm no horizontal scroll and improved content utilization.
- Test variable content lengths in headings and paragraphs to ensure wrapping remains clean.
- Re-check mobile (<767px) and desktop (>1024px) to verify unchanged behavior.

## Performance & Accessibility
- No runtime impact; purely class updates.
- Maintains readable line lengths on tablet while providing additional space for grids and media.

If approved, I will apply these class updates across the listed files and verify on tablet and other breakpoints.