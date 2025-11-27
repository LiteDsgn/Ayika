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
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="relative w-4 h-4">
          <Image src={src} alt="Star" fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="w-full max-w-[352px] flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-[280px] rounded-t-lg overflow-hidden group">
        <Image 
          src={item.photoSrc} 
          alt={`${item.authorName} photo`} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
          sizes="(max-width: 767px) 100vw, 352px" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211433]/80 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
          <span className="text-white text-base font-medium font-sans">{item.authorName}</span>
          <span className="text-[#D4D4D4] text-sm font-sans">{item.authorRole}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#F8F6FC] rounded-xl shadow-[0px_0px_2px_rgba(0,0,0,0.05)] p-4 flex flex-col gap-4 -mt-2 relative z-10">
        <div className="flex justify-between items-center">
          <Stars count={item.rating} iconSrc={item.starIconSrc} />
          <span className="inline-flex bg-[#EFE8FD] text-[#4B2E7A] text-xs px-2 py-1 rounded-full font-sans">
            {item.label}
          </span>
        </div>
        <p className="text-[#171717] text-base leading-[26px] font-sans">
          {item.quote}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials({ headline, subcopy, items }: TestimonialsContent) {
  return (
    <Section className="overflow-hidden">
      <div className="px-4 py-4">
        <div className="rounded-[2rem] bg-white py-6 md:py-32 relative">
          <Container>
            <motion.div
              className="flex flex-col items-center gap-4 mb-16 px-6 md:px-20 lg:px-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h2 className="text-center font-museo text-[36px] leading-[40px] text-purple-600 md:text-[40px]">{headline}</h2>
              <p className="text-center text-[20px] leading-7 text-neutral-500">{subcopy}</p>
            </motion.div>
          </Container>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="w-full"
          >
            <div className="w-full md:hidden">
              <div className="flex gap-4 overflow-x-auto px-6 pb-6 snap-x snap-mandatory no-scrollbar -mx-4 md:mx-0">
                {items.map((it, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[85vw] max-w-[352px] snap-center first:pl-2 last:pr-6">
                    <TestimonialCard item={it} />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden w-full md:block">
              {(() => {
                const baseItems = items.length >= 9 ? items.slice(0, 9) : Array.from({ length: 9 }, (_, i) => items[i % items.length])
                const trackItems = [...baseItems, ...baseItems]
                return (
                  <div className="w-screen ml-[calc(50%-50vw)] relative">
                    <div className="flex items-stretch gap-6 animate-marquee pl-6">
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
          </motion.div>
        </div>
      </div>
    </Section>
  )
}