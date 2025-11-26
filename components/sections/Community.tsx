"use client"
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, hoverLift, staggerContainer } from '@/components/ui/motion'
import NumberTicker from '@/components/ui/NumberTicker'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import type { CommunityContent, CommunityCardItem } from '@/types/content'

function Card({ item }: { item: CommunityCardItem }) {
  const isBrand = item.variant === 'brand'
  return (
    <div className={`w-full h-[362px] rounded-[12px] overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.05)] ${isBrand ? 'bg-purple-500' : 'bg-white'}`}>
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="flex items-center">
          <div className={`inline-flex items-center justify-center p-2 rounded-[14px] ${isBrand ? '' : ''}`}>
            <div className="relative h-12 w-12 overflow-hidden">
              <Image src={item.iconSrc} alt={`${item.title} icon`} fill className="object-contain" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className={`text-[20px] leading-6 font-semibold ${isBrand ? 'text-white' : 'text-neutral-900'}`}>{item.title}</h3>
          </div>
          <p className={`${isBrand ? 'text-neutral-50' : 'text-neutral-500'} text-[18px] leading-[27px]`}>{item.subcopy}</p>
        </div>
      </div>
    </div>
  )
}

export default function Community({ headline, subcopy, cards, callout }: CommunityContent) {
  const prefersReduced = useReducedMotion()
  const calloutRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: calloutRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])
  return (
    <Section id="community">
      <div className="px-4 py-4">
        <div className="rounded-[2rem] bg-purple-100 px-6 md:px-20 lg:px-32 py-6 md:py-32">
          <Container>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-center font-museo text-[36px] leading-[40px] md:text-[40px] text-purple-600">{headline}</h2>
                <p className="text-center text-[20px] leading-7 text-neutral-500">{subcopy}</p>
              </div>

              <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 lg:auto-rows-fr gap-8"
                variants={staggerContainer}
                initial={prefersReduced ? undefined : 'hidden'}
                whileInView={prefersReduced ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.2 }}
              >
                {cards[2] ? (
                  <motion.div className="lg:col-start-1 lg:row-start-1" variants={fadeUp} {...hoverLift}>
                    <Card item={cards[2]} />
                  </motion.div>
                ) : null}
                {cards[3] ? (
                  <motion.div className="lg:col-start-1 lg:row-start-2" variants={fadeUp} {...hoverLift}>
                    <Card item={cards[3]} />
                  </motion.div>
                ) : null}

                <motion.div ref={calloutRef} className="order-last lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2" variants={fadeUp}>
                  <div className="w-full h-full min-h-[500px] lg:min-h-0 rounded-[12px] bg-white overflow-hidden">
                    <div className="relative h-full w-full">
                      <motion.div className="absolute inset-0" style={{ y: prefersReduced ? 0 : y }}>
                        <Image src={callout.backgroundImageUrl} alt="Community" fill className="object-cover" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(47,28,74,0.80)]" />
                      <div className="absolute inset-0 p-4 flex flex-col justify-end gap-12">
                        <div className="flex flex-col gap-8">
                          {callout.stats.map((s, idx) => (
                            <div key={idx} className="w-[256px]">
                              <div>
                                <NumberTicker value={s.value} className="text-white font-museo text-[36px] leading-[36px] font-bold" />
                              </div>
                              <div>
                                <div className="text-white text-[16px] leading-6 font-semibold">{s.title}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="w-full inline-flex items-center justify-center">
                          <motion.div className="w-full" {...hoverLift}>
                            <Button variant="white" className="h-14 w-full text-[16px] leading-6 font-medium">
                              {callout.ctaText}
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {cards[0] ? (
                  <motion.div className="lg:col-start-3 lg:row-start-1" variants={fadeUp} {...hoverLift}>
                    <Card item={cards[0]} />
                  </motion.div>
                ) : null}
                {cards[1] ? (
                  <motion.div className="lg:col-start-3 lg:row-start-2" variants={fadeUp} {...hoverLift}>
                    <Card item={cards[1]} />
                  </motion.div>
                ) : null}
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  )
}
