## Goal
Left-align only the selected elements: three section headings, the Features subcopy paragraph, and the Features heading container, while leaving other headings/subcopy unchanged.

## Changes
- Features (`components/sections/Features.tsx`):
  - Container: `items-center` → `items-start` for the h2+p block
  - Heading: `text-center` → `text-left`
  - Subcopy: `text-center` → `text-left`
- Phase Calculator (`components/sections/PhaseCalculator.tsx`):
  - Heading: `text-center` → `text-left`
- FAQ (`components/sections/FAQ.tsx`):
  - Heading: `text-center` → `text-left`

## Scope
Only these specific elements are modified; all other section headings, paragraphs, and containers remain as they are.

## Validation
- Visually verify the specified elements align left while others retain their current alignment.
- Confirm no layout shifts occur beyond the targeted blocks.