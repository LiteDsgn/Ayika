# Ayika Changelog

All notable changes to this project are documented in this file.

This changelog adheres to:
- Keep a Changelog: https://keepachangelog.com/en/1.1.0/
- Semantic Versioning: https://semver.org/

## Guidelines Snapshot
- Tech stack: Next.js App Router + Tailwind; `next/font` for Inter/Museo; `next/image` for images.
- Routing & data: Prefer server components; use `lib/cms/client.ts` as CMS-agnostic layer; types in `types/content.ts`.
- SEO: Set per-page metadata via `generateMetadata`; defaults live in `app/layout.tsx`.
- ISR: Use `export const revalidate` on pages meant to refresh content periodically.
- Styling: Tailwind tokens map to CSS variables; use semantic palette (`purple.50–900`, `neutral.0–900`). Favor `rem` sizing and fluid layouts (`grid`, `max-w`, `sizes` for images).
- Assets: Place files under `public/` and reference via `/path`. Remote images allowed via `next.config.js` `images.remotePatterns` when needed.
- Components: Build UI primitives under `components/ui/*` and sections under `components/sections/*`. Components accept typed props and are decoupled from any CMS SDK.
- Security: Do not commit secrets; read configuration from environment variables only; avoid logging sensitive data.
- Accessibility: Provide descriptive `alt` text; use semantic headings; ensure visible focus styles.
- Code style: Strong typing; clear naming; minimal inline comments unless explicitly requested; small, focused components.

## Unreleased
-
### Added
- Mobile navigation menu in `components/ui/Nav.tsx` with hamburger toggle, dropdown links, and responsive CTAs.
- Scroll-aware navigation bar with fixed positioning and dynamic background opacity.
- Features section in `components/sections/Features.tsx` with CMS-driven content and assets from `public/Features/`.
- Launch Steps section in `components/sections/LaunchSteps.tsx` ("When We Launch") driven by CMS.
- Testimonials section in `components/sections/Testimonials.tsx` with stars and author strip, assets from `public/Testimonials/`.
- Phase Calculator section in `components/sections/PhaseCalculator.tsx` with gradient + optional background image and CTA.
- Insights & Resources section in `components/sections/Resources.tsx` using images from `public/Resources/`.
- Community section in `components/sections/Community.tsx` with 3-column desktop layout and center callout panel; assets from `public/Community/`.
- FAQ section in `components/sections/FAQ.tsx` with banner card and accordion-style items, CMS-driven.
- Footer section in `components/sections/Footer.tsx` with 4-column layout, CTA spanning two columns, and decorative wordmark fill from `public/Footer/wordmark.svg`.
- Extended content models in `types/content.ts` for Features, LaunchSteps, Testimonials, PhaseCalculator, Resources, Community, FAQ, Footer.
- Populated CMS data in `lib/cms/client.ts` to return all new sections; integrated into `app/page.tsx`.

### Changed
- **Responsiveness Overhaul:**
  - **Hero:** Stacked email input and CTA on mobile; enabled proportional scaling for floating UI elements.
  - **Features:** Made feature preview images visible on mobile; optimized card layouts for small screens.
  - **Community:** Added minimum height to callout card to prevent collapse on mobile.
  - **Footer:** Stacked subscription input and button on mobile; reduced text opacity to `text-neutral-400` for better hierarchy.
  - **General:** Replaced rigid `inline-flex` with fluid `flex` layouts in Testimonials, Resources, FAQ, and PhaseCalculator.
  - **FAQ Banner:** Extracted banner into `FAQBanner` component and repositioned it after accordions on mobile (1-col breakpoints) for better logical flow.
  - **Footer Input:** Fixed styling issues by replacing outline with focus-within ring, adding transparent background, and adjusting padding/placeholder styles.
- **Showcase:** Eliminated empty space under image by using intrinsic sizing and removing fixed height constraints.
- **FAQ:** Adjusted sticky sidebar offset (`lg:top-40`) to prevent overlap with fixed navigation.
- **Navigation:** Updated to use `fixed` positioning with `z-50` layering; added anchor link support via `id` props on all major sections.
- Features: matched reference paddings (top/bottom mirror left/right), corrected wide card image sizes for Smart Scheduling and Intelligent Alerts.
- Testimonials: tightened vertical spacing between image, quote pill, and author strip; applied top-only rounding to image; adjusted author strip paddings.
- Hero visuals: converted fixed dimensions to percentage-based offsets with `aspect-[w/h]` containers to maintain proportions.
- Resources: image containers now `object-cover` with clipped overflow; list renders as `grid` with 3 columns on desktop.
- Community: switched to 3-column grid with center callout spanning rows; reordered cards (Tips & Resources left, Stories & Support right); CTA button spans full width.
- Headings: applied `text-purple-600` to selected `h2` elements across Features, Phase Calculator, FAQ, Resources, Testimonials, LaunchSteps, and Community.
- FAQ: improved interactions and layout — sticky left column (`lg:top-24`), centered two-column container (`mx-auto`), full-card click toggles with keyboard support, banner button left-aligned and not hugging container on web, and banner card items aligned left.
- Footer: refined to a 4-column grid with the join waitlist CTA spanning two columns; filled decorative lower area with `/Footer/wordmark.svg`.
 - Phase Calculator: centered section content via wrapper alignment (`flex justify-center`) for consistent layout.
 - Phase Calculator (mobile-only): switched the main row to `flex-col md:flex-row` so headline and calculator stack vertically on mobile.
 - Phase Calculator background: use `/Calculator/calculator-bg.png` by default with CMS override (`backgroundImageUrl`), rendered with `next/image` (`fill`, `sizes="100vw"`).
 - Phase Calculator visual: removed `bg-purple-100` from the section wrapper to surface the background image; gradient overlay retained for legibility.
 - Phase Calculator shadow: moved blur shadow inside the calculator wrapper (`absolute inset-0 -z-10 rounded-[16px] opacity-10 blur-[20px]`) so it sits directly behind the card.

## v0.1.0 – 2025-11-18
### Added
- Next.js 14 App Router scaffold with Tailwind CSS and fonts in `app/layout.tsx`, global styles in `app/globals.css`.
- Image domain config in `next.config.js` and `public/` folder for local assets.
- CMS-ready data layer stubs in `lib/cms/client.ts` with normalized content models in `types/content.ts`.
- Hero section in `components/sections/Hero.tsx` wired to public assets; background spans full hero.
- Stats section in `components/sections/Stats.tsx` with responsive grid and iconography; palette tokens applied.
- Showcase section in `components/sections/Showcase.tsx` with fluid sizing (`object-contain`, `sizes`) and purple theming.
- SEO via `generateMetadata` on `app/page.tsx`; incremental static regeneration (`revalidate = 60`).
- Tailwind theme mapping to CSS variables for `purple` and `neutral` scales in `tailwind.config.ts`.

### Changed
- Adopted `rem` and responsive sizing across Hero, Stats, and Showcase to reduce rigid layout dimensions.

### Security
- Ensured no secrets are committed; kept environment-driven configuration placeholders.

## How To Update This Changelog
- Add entries to the “Unreleased” section as soon as a change is implemented.
- When releasing, move the “Unreleased” entries under a new version heading (`vX.Y.Z – YYYY-MM-DD`) and start a fresh “Unreleased” section.
- Categorize your changes under: Added, Changed, Fixed, Removed, Security.
- Reference relevant files or paths in entries when it adds clarity.
- Use Semantic Versioning for releases:
  - Patch: fixes and non-breaking chores
  - Minor: new features/sections without breaking changes
  - Major: breaking changes to APIs, routes, or data shapes