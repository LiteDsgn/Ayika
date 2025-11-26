## Targets
- Feature section image wrappers in `FeatureCard` (`components/sections/Features.tsx`)
- Current: `<div className="hidden lg:block p-[8.57px]">` at `components/sections/Features.tsx:40`
- Applies to both image cards (large 736×415 and small 349×379), since they share the same wrapper.

## Implementation
- Replace `p-[8.57px]` with `px-[3px] pt-[3px] pb-[3px]` on the wrapper `div`
- Do not add padding to the inner image container (`relative overflow-hidden rounded-10 ...`) to avoid double-padding; the `next/image` with `fill` should continue to fit its container.

## Verification
- At `lg` breakpoint and above, confirm padding is exactly 3px on all sides for both image cards.
- Ensure image aspect and rounded corners remain visually correct; no content clipping.
- Check smaller breakpoints (where wrapper is hidden) to ensure no regression.

## Notes
- Change is localized and affects both targeted feature image containers via a single class update.
- If you want different vertical vs horizontal values later, we can adjust `pt/pb` independently.

Please confirm and I’ll apply this update and verify in the running dev server.