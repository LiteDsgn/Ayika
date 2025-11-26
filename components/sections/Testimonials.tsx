"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/components/ui/motion'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import type { TestimonialsContent, TestimonialItem } from '@/types/content'

function Stars({ count, iconSrc }: { count: number; iconSrc?: string }) {
  const src = iconSrc || '/Testimonials/star.svg'
  return (
    <div className="inline-flex items-center gap-[6.97px]">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="relative w-[27.87px] h-[27.87px]">
          <Image src={src} alt="Star" fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="w-full max-w-[352px] flex flex-col items-center">
      <div className="w-full h-[263px] px-3">
        <div className="relative h-full w-full px-4 pt-4 pb-0">
          <div className="relative h-full w-full overflow-hidden rounded-t-[8.57px]">
            <Image src={item.photoSrc} alt={`${item.authorName} photo`} fill className="object-cover" sizes="(max-width: 767px) 100vw, 352px" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="mt-0 rounded-[12px] bg-purple-50 p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10)]">
          <p className="text-[16px] leading-[26px] text-neutral-900">{item.quote}</p>
          <div className="mt-6 flex flex-col gap-4">
            <Stars count={item.rating} iconSrc={item.starIconSrc} />
            <span className="inline-flex w-fit rounded-full bg-[#EFE8FD] px-2 py-1 text-[12px] leading-4 text-purple-600">{item.label}</span>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="mt-0 inline-flex w-full items-center gap-3 rounded-b-[12px] bg-purple-300 px-4 pt-[0.75rem] pb-[1rem]">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image src={item.quoteIconSrc || '/Testimonials/Quote Left.svg'} alt="Quote" fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-museo text-[16px] leading-[24px] font-medium text-neutral-900">{item.authorName}</span>
            <span className="text-[14px] leading-[20px] text-neutral-900">{item.authorRole}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials({ headline, subcopy, items }: TestimonialsContent) {
  return (
    <Section>
      <div className="px-4 py-4">
        <div className="rounded-[2rem] bg-white px-6 md:px-20 lg:px-32 py-6 md:py-32">
          <Container>
            <motion.div
              className="flex flex-col gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-center font-museo text-[36px] leading-[40px] text-purple-600 md:text-[40px]">{headline}</h2>
                <p className="text-center text-[20px] leading-7 text-neutral-500">{subcopy}</p>
              </div>
              <div className="flex justify-center">
                <div className="w-full md:hidden">
                  <div className="flex flex-col items-center gap-3">
                    {items.map((it, idx) => (
                      <TestimonialCard key={idx} item={it} />
                    ))}
                  </div>
                </div>
                <div className="hidden w-full md:block">
                  {(() => {
                    const baseItems = items.length >= 9 ? items.slice(0, 9) : Array.from({ length: 9 }, (_, i) => items[i % items.length])
                    const trackItems = [...baseItems, ...baseItems]
                    return (
                      <div className="overflow-hidden w-full relative marquee-fade-mask">
                        <div className="flex items-stretch gap-2 animate-marquee">
                          {trackItems.map((it, idx) => (
                            <div key={idx} className="flex justify-center flex-shrink-0">
                              <TestimonialCard item={it} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })()}
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </Section>
  )
}