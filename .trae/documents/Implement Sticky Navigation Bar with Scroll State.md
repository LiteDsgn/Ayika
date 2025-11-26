## Targets

* Community section (`components/sections/Community.tsx`)

  * Cards: lines 42–51, 81–90

  * Callout block: lines 53–79 (CTA at 71–75; stats at 60–69)

* Features section (`components/sections/Features.tsx`)

* Testimonials section (`components/sections/Testimonials.tsx`)

## Animations

* Scroll reveal: fade + upward translate for cards and callout; stagger children

* Hover/tap on cards: subtle scale (1.02) and shadow lift; tap compress (0.98)

* CTA button: hover highlight + scale; tap compress

* Stats NumberTicker: count up from 0 to target when in view

* Parallax: slight background parallax on callout image for depth (limited on mobile)

## Technical Implementation

* Add `framer-motion` as a dependency

* Create shared motion variants (e.g., `fadeUp`, `staggerContainer`) and reuse across sections

* Community.tsx

  * Wrap grid at `components/sections/Community.tsx:41` in a `motion.div` with `variants={staggerContainer}` and `viewport={{ once: true, amount: 0.2 }}`

  * Wrap each card container (42–51, 81–90) with `motion.div variants={fadeUp}` and hover/tap props

  * Callout block (53–79): `motion.div variants={fadeUp}`; parallax via `motion.div` on the image using `useScroll`/`useTransform`

  * Stats (60–69): replace value node with `<NumberTicker target={s.value}/>` using motion values

  * CTA (71–75): wrap in `motion.button` with `whileHover`/`whileTap`

* Features.tsx & Testimonials.tsx

  * Apply the same scroll reveal and hover/tap interactions to feature items/testimonial cards

  * If a slider exists, add `drag="x"` with constraints for gentle manual swiping on mobile

## Performance & A11y

* Respect `prefers-reduced-motion`; disable non-essential animations when enabled

* Keep initial states SSR-friendly to avoid hydration warnings (`initial` values match server output)

* Use minimal transforms (`opacity`, `translateY`, `scale`) and avoid layout thrash; set `will-change: transform`

* Limit parallax to small ranges and disable on low-end or mobile if needed

## Rollout

1. Install `framer-motion`
2. Add `motion/variants` utility module with shared tokens (duration/easing)
3. Implement Community animations (grid reveal, cards, callout, CTA, stats ticker)
4. Extend to Features and Testimonials with shared variants
5. Add reduced-motion guard and test across breakpoints
6. QA in dev and adjust intensity/timing to match brand feel

## Risks & Mitigation

* Hydration mismatches: align initial styles with SSR output; use `initial={false}` sparingly

* Over-animation: keep subtle; provide a configuration flag to disable per section if needed

* Performance: profile on mobile; turn off parallax on small screens if necessary

