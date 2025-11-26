## Target
- FeatureCard image container for the "Intelligent Alerts" preview in `components/sections/Features.tsx`.

## Implementation
- Update the container class for the `intelligent-alert` case to include `max-w-[349px]` alongside the existing `w-[349px] h-[379px]`.
- Keep the `next/image` `fill` usage unchanged; constraints apply at the container level for `fill` images.
- No changes to the larger "Smart Scheduling" image (remains at 736px).

## Verification
- At `lg` and above, confirm the alert preview never exceeds 349px width.
- Check that rounded corners and aspect remain correct; no layout shifts.
- Ensure compilation and runtime are clean.

Please confirm and I will apply this update and validate in the running dev server.