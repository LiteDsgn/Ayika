## Goal
Align the children of the FAQ banner card to the left, affecting only this selected card.

## Changes
- In `components/sections/FAQ.tsx` banner card container:
  - Update `className` from `p-6 flex flex-col gap-6` to `p-6 flex flex-col items-start gap-6`.
- Button wrapper in the same card:
  - Change from `inline-flex h-14 items-center justify-center ... lg:mx-auto` to `inline-flex h-14 items-center justify-start ...` (remove `lg:mx-auto`).

## Scope
- Only the FAQ banner card is updated; all other buttons and sections remain unchanged.

## Validation
- Verify the heading, subcopy and button align left within the banner card, with no layout shift elsewhere.