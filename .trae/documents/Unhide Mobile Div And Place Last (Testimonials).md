## Scope
- Update the “Unreleased” section of `CHANGELOG.md` with concise “Changed” entries summarizing the latest Phase Calculator adjustments.
- Follow existing Changelog style: bullets under category headers, brief phrasing, reference file paths when helpful.

## Proposed Entries (Unreleased → Changed)
- Phase Calculator: centered section content via wrapper alignment (`flex justify-center`) for consistent layout.
- Mobile-only layout: switched the main row to `flex-col md:flex-row` so headline and calculator stack vertically on mobile.
- Background: use `/Calculator/calculator-bg.png` by default with CMS override (`backgroundImageUrl`), rendered with `next/image` (`fill`, `sizes="100vw"`).
- Visual: removed `bg-purple-100` from the section wrapper to surface the background image; gradient overlay retained for legibility.
- Shadow: moved the purple blur shadow inside the calculator wrapper (`absolute inset-0 -z-10 rounded-[16px] opacity-10 blur-[20px]`) so it sits directly behind the card.

## File References
- `components/sections/PhaseCalculator.tsx:8` — background fallback variable
- `components/sections/PhaseCalculator.tsx:12` — section wrapper classes
- `components/sections/PhaseCalculator.tsx:18–19` — main row responsive classes
- `components/sections/PhaseCalculator.tsx:26` — shadow element

## Implementation
- Insert the above bullets under the existing “Unreleased → Changed” heading in `CHANGELOG.md`, preserving formatting and section order.