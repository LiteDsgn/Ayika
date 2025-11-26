import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Showcase from '@/components/sections/Showcase'
import Features from '@/components/sections/Features'
import LaunchSteps from '@/components/sections/LaunchSteps'
import Testimonials from '@/components/sections/Testimonials'
import { getHomePage } from '@/lib/cms/client'
import PhaseCalculator from '@/components/sections/PhaseCalculator'
import Resources from '@/components/sections/Resources'
import Community from '@/components/sections/Community'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export const revalidate = 60

export default async function Page() {
  const data = await getHomePage()
  return (
    <main className="min-h-screen">
      <Hero {...data.hero} />
      <Stats {...data.stats} />
      <Showcase {...data.showcase} />
      <Features {...data.features} />
      <LaunchSteps {...data.launchSteps} />
      <Testimonials {...data.testimonials} />
      <PhaseCalculator {...data.phaseCalculator} />
      <Resources {...data.resources} />
      <Community {...data.community} />
      <FAQ {...data.faq} />
      <Footer {...data.footer} />
      
    </main>
  )
}

export async function generateMetadata() {
  const data = await getHomePage()
  return {
    title: `${data.hero.headlinePrimary} ${data.hero.headlineAccent}`.trim(),
    description: data.hero.subcopy,
    openGraph: {
      title: `${data.hero.headlinePrimary} ${data.hero.headlineAccent}`.trim(),
      description: data.hero.subcopy,
      images: data.hero.backgroundImageUrl ? [{ url: data.hero.backgroundImageUrl }]: undefined
    }
  }
}
