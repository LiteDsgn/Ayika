## Goal
Adjust the Resources section to ensure card images fill their parent containers with clipped overflow, and render items in a 3-column grid on desktop.

## Changes
- Image fill:
  - Replace inner image wrapper with a single `relative overflow-hidden` container (`h-[150px] bg-purple-100 rounded-10`), render `next/image` with `fill object-cover`.
- Grid layout:
  - Change list container from `flex flex-wrap` to `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.

## Files
- `components/sections/Resources.tsx`:
  - Update `ResourceCard` image block to `relative overflow-hidden` and `object-cover`.
  - Update items container to `grid ... lg:grid-cols-3`.

## Validation
- Visual check: images fill and clip within the purple rounded block, desktop displays 3 columns; mobile stacks; tablet shows 2 columns.