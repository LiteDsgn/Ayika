"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, hoverLift, staggerContainer } from '@/components/ui/motion'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { Check } from 'lucide-react'
import type { FeaturesContent, FeatureCardContent } from '@/types/content'

function Bullet({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-purple-400">
        <Check className="h-3 w-3 text-purple-400" />
      </span>
      <span className="text-neutral-500 text-sm">{text}</span>
    </div>
  )
}

function FeatureCard({ item }: { item: FeatureCardContent }) {
  const isAlert = item.imageSrc?.includes('intelligent-alert')
  
  return (
    <motion.div className="flex flex-col lg:flex-row h-full w-full items-start justify-start overflow-hidden rounded-[12px] bg-neutral-0 p-[3px] shadow-[0_0_2px_rgba(0,0,0,0.05)]" variants={fadeUp} {...hoverLift}>
      <div className="flex-1 p-6 md:p-8">
        <div className="inline-flex items-center justify-center rounded-[16px] p-2">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image src={item.iconSrc} alt={`${item.title} icon`} fill className="object-contain" />
          </div>
        </div>
        <div>
          <h3 className="font-museo text-[26px] leading-[36px] text-neutral-900">{item.title}</h3>
        </div>
        <div className="mt-2">
          <p className="text-[18px] leading-[27px] text-neutral-900">{item.subcopy}</p>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {item.bullets.map((b, i) => (
            <Bullet key={i} text={b} />
          ))}
        </div>
      </div>
      {item.imageSrc ? (
        <div className="w-full lg:w-auto px-[3px] pt-[3px] pb-[3px]">
          <div className={`relative overflow-hidden rounded-10 w-full ${isAlert ? 'aspect-[349/379] lg:w-[349px] lg:h-[379px]' : 'aspect-[736/415] lg:w-[736px] lg:h-[415px]'}`}>
            <Image
              src={item.imageSrc}
              alt={`${item.title} preview`}
              fill
              className="object-cover"
              sizes={isAlert ? '(max-width: 767px) 100vw, (max-width: 1024px) 349px, 349px' : '(max-width: 767px) 100vw, (max-width: 1024px) 100vw, 736px'}
            />
          </div>
        </div>
      ) : null}
    </motion.div>
  )
}

export default function Features(props: FeaturesContent) {
  const data = props
  const [smart, energy, cycle, quick, alerts, privacy] = data.cards
  return (
    <Section id="features">
      <div className="px-4 py-4">
        <div className="rounded-[2rem] bg-purple-50 px-6 md:px-20 lg:px-32 py-6 md:py-32">
          <Container>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-left font-museo text-[36px] leading-[40px] text-purple-600 md:text-[40px]">
                  {data.headline}
                </h2>
                <p className="max-w-[768px] text-left text-[20px] leading-7 text-neutral-500">
                  {data.subcopy}
                </p>
              </div>

              <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="lg:col-span-3">
                  <FeatureCard item={smart} />
                </div>

                <div className="lg:col-span-1">
                  <FeatureCard item={energy} />
                </div>
                <div className="lg:col-span-1">
                  <FeatureCard item={cycle} />
                </div>
                <div className="lg:col-span-1">
                  <FeatureCard item={quick} />
                </div>

                <div className="lg:col-span-2 h-full">
                  <FeatureCard item={alerts} />
                </div>
                <div className="lg:col-span-1 h-full">
                  <FeatureCard item={privacy} />
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  )
}
