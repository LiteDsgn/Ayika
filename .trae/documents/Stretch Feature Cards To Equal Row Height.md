## Goal
Make the "Privacy First" card fill its grid area height so it matches the height of the adjacent card in the same row.

## Implementation
- Add `h-full` to the grid item wrappers for both cards in that row:
  - Alerts wrapper: `lg:col-span-2 h-full`
  - Privacy wrapper: `lg:col-span-1 h-full`
- Update `FeatureCard` root container to stretch to its parent height:
  - Change from `inline-flex w-full ...` to `flex h-full w-full ...` to ensure the card itself fills the grid area and participates in stretching fully.
- Keep internal layout intact (`flex-1` content area, optional image preview) so spacing and visuals remain unchanged.

## Verification
- At `lg` and above, confirm both cards in the row have equal height.
- Verify no overflow/clipping; rounded corners and shadows remain correct.
- Ensure compilation is clean and other feature cards still render properly across breakpoints.

If confirmed, I will apply these targeted class edits and validate in the running dev server.