export interface HeroContent {
  chipText: string
  headlinePrimary: string
  headlineAccent: string
  subcopy: string
  emailPlaceholder: string
  ctaText: string
  avatars: string[]
  waitlistCount: string
  waitlistSubcopy: string
  backgroundImageUrl?: string
}

export interface HomePageContent {
  hero: HeroContent
  stats: StatsContent
  showcase: ShowcaseContent
  features: FeaturesContent
  launchSteps: LaunchStepsContent
  testimonials: TestimonialsContent
  resources: ResourcesContent
  community: CommunityContent
  phaseCalculator: PhaseCalculatorContent
}

export interface StatItem {
  icon: 'boost' | 'saved' | 'waitlist' | 'rating'
  value: string
  title: string
  subcopy: string
}

export interface StatsContent {
  items: StatItem[]
}

export interface ShowcaseContent {
  title: string
  subcopy: string
  imageUrl: string
  imageWidth?: number
  imageHeight?: number
}

export interface FeatureCardContent {
  title: string
  subcopy: string
  iconSrc: string
  bullets: string[]
  imageSrc?: string
}

export interface FeaturesContent {
  headline: string
  subcopy: string
  cards: FeatureCardContent[]
}

export interface LaunchStepItem {
  title: string
  subcopy: string
}

export interface LaunchStepsContent {
  headline: string
  subcopy: string
  steps: LaunchStepItem[]
}

export interface TestimonialItem {
  photoSrc: string
  quote: string
  rating: number
  label: string
  authorName: string
  authorRole: string
  starIconSrc?: string
  quoteIconSrc?: string
}

export interface TestimonialsContent {
  headline: string
  subcopy: string
  items: TestimonialItem[]
}

export interface PhaseCalculatorForm {
  lastPeriodLabel: string
  lastPeriodPlaceholder: string
  cycleLengthLabel: string
  cycleLengthPlaceholder: string
  ctaText: string
  footerNote: string
}

export interface PhaseCalculatorContent {
  chipLabel: string
  headline: string
  subcopy: string
  form: PhaseCalculatorForm
  backgroundImageUrl?: string
}

export interface ResourceItem {
  imageSrc: string
  title: string
  description: string
  linkText: string
}

export interface ResourcesContent {
  headline: string
  subcopy: string
  items: ResourceItem[]
}

export interface CommunityCardItem {
  title: string
  subcopy: string
  iconSrc: string
  variant?: 'brand' | 'light'
  backgroundImageUrl?: string
}

export interface CommunityStat {
  value: string
  title: string
}

export interface CommunityCallout {
  backgroundImageUrl: string
  stats: CommunityStat[]
  ctaText: string
}

export interface CommunityContent {
  headline: string
  subcopy: string
  cards: CommunityCardItem[]
  callout: CommunityCallout
}

export interface FAQItem {
  question: string
  answer?: string
  open?: boolean
}

export interface FAQBanner {
  title: string
  subcopy: string
  ctaText: string
  backgroundImageUrl?: string
}

export interface FAQContent {
  headline: string
  banner: FAQBanner
  items: FAQItem[]
}

declare module '@/types/content' {
  interface HomePageContent {
    faq: FAQContent
    footer: FooterContent
  }
}

export interface FooterLinkItem {
  label: string
  href?: string
}

export interface FooterColumn {
  title: string
  items: FooterLinkItem[]
}

export interface FooterCTA {
  title: string
  subcopy: string
  emailPlaceholder: string
  ctaText: string
  note: string
}

export interface FooterContent {
  backgroundImageUrl?: string
  logoSrc?: string
  wordmarkSrc?: string
  columns: FooterColumn[]
  cta: FooterCTA
  copyright: string
}
