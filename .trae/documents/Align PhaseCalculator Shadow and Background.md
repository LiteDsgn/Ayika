## Goals
- Position the purple blur shadow directly behind the calculator card on all screens.
- Use `/Calculator/calculator-bg.png` as the background for the calculator section container.

## Implementation
### Move Shadow Behind Card
- In `components/sections/PhaseCalculator.tsx`, remove the global shadow element at `PhaseCalculator.tsx:18`.
- Wrap the calculator card container at `PhaseCalculator.tsx:27` with a `div` having `className="relative"` to create a positioning context.
- Add an absolutely positioned shadow inside that wrapper, before the card:
  - `className="absolute inset-0 -z-10 rounded-[16px] bg-purple-800 opacity-10 blur-[20px]"`
  - Matches the card’s dimensions and radius, so it sits directly behind and looks like a container shadow across breakpoints.

### Set Calculator Background Image
- In the section container at `PhaseCalculator.tsx:11–17`, compute a background source:
  - `const bgSrc = backgroundImageUrl || '/Calculator/calculator-bg.png'`
- Render the background block unconditionally with Next Image:
  - `<Image src={bgSrc} alt="Background" fill className="object-cover" sizes="100vw" />`
  - Keep the gradient overlay `from-white to-transparent` for legibility.

## Verification
- Start dev server and inspect the Phase Calculator at mobile (375–767px), tablet (768–1024px), and desktop (>1024px):
  - Confirm the shadow div aligns directly behind the card with no offset and stays within its rounded bounds.
  - Confirm the background switches to `calculator-bg.png` and fills the section cleanly.
  - Check z-index: shadow is behind card content, above the section’s background.
  - Validate no horizontal scrolling introduced and spacing remains correct.

## Notes
- Public asset path is referenced as `/Calculator/calculator-bg.png` (served from `public/Calculator/calculator-bg.png`).
- No changes to data model; if CMS provides `backgroundImageUrl`, it will still work as an override by preference.