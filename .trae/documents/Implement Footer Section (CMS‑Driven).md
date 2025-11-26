## Goal
Add a responsive Footer section that matches the provided reference, using assets from `public/Footer/` and keeping all content CMS-driven.

## Types
- Extend `types/content.ts` with:
  - `FooterLinkItem: { label: string; href?: string }`
  - `FooterColumn: { title: string; items: FooterLinkItem[] }`
  - `FooterCTA: { title: string; subcopy: string; emailPlaceholder: string; ctaText: string; note: string }`
  - `FooterContent: { backgroundImageUrl?: string; logoSrc?: string; wordmarkSrc?: string; columns: FooterColumn[]; cta: FooterCTA; copyright: string }`
  - Add `footer: FooterContent` to `HomePageContent`.

## CMS Data
- Update `lib/cms/client.ts` to provide `footer`:
  - `logoSrc: '/Footer/Icon White 1.png'`, `wordmarkSrc: '/Footer/wordmark.svg'`
  - `backgroundImageUrl: '/Hero/main/hero-pattern-img.jpg'` (optional)
  - Columns:
    - Links: Features, See It In Action, Calculator, FAQ
    - Company: About, Contact, Community, Privacy, Terms
  - CTA: title “Transform Your Productivity”, subcopy, placeholder `youremail@example.com`, `ctaText: 'Join Waitlist'`, note “Early members get priority access…”
  - Copyright: “© 2025 Ayika. Built with care for professional women everywhere.”

## Component
- Create `components/sections/Footer.tsx`:
  - Outer: `Section` with `bg-purple-900 rounded-t-[32px] pt-24 px-6 md:px-36` and optional background image (fill) with gradient overlay
  - Inner container: `Container max-w-screen-xl`
  - Columns row: three columns (256px, 256px, flex-1) with gaps; each using provided CMS data
  - CTA: input shell + button + note text
  - Divider + centered copyright text

## Integration
- Import and render `<Footer {...data.footer} />` at the bottom of `app/page.tsx` (after FAQ/Showcase).
- Ensure `FAQ` is rendered (if missing) before Footer.

## Validation
- Visual review to confirm layout, colors, paddings, and background layering match the reference; verify assets load from `public/Footer`.

If approved, I’ll implement the types, CMS data, component, and integrate it into the homepage.