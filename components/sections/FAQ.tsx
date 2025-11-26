"use client"
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'
import type { FAQContent, FAQItem } from '@/types/content'
import { useState } from 'react'

function FAQCard({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onToggle()
      }}
      className={`w-full rounded-[12px] ${isOpen ? 'shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10)]' : 'shadow-[0_0_2px_rgba(0,0,0,0.05)]'} bg-purple-50 overflow-hidden cursor-pointer`}
    >
      <div className="p-6">
        <div className="inline-flex w-full items-start justify-between gap-4">
          <div className="flex-1 text-left">
            <h3 className="text-[18px] leading-7 font-semibold text-neutral-900">{item.question}</h3>
          </div>
          <div className="inline-flex items-center justify-center rounded-[8px] bg-white p-0.5 transition-transform duration-200 ease-out">
            <ChevronDown className={`w-6 h-6 text-purple-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
          </div>
        </div>
        <div className={`mt-3 overflow-hidden transition-all duration-300 ease-out ${isOpen && item.answer ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {item.answer ? (
            <p className="text-[16px] leading-[26px] text-neutral-900">{item.answer}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function FAQBanner({ banner, className = "" }: { banner: FAQContent['banner']; className?: string }) {
  return (
    <div className={`w-full rounded-[12px] overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.05)] ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {banner.backgroundImageUrl ? (
            <Image 
              src={banner.backgroundImageUrl} 
              alt="FAQ Banner" 
              fill 
              className="object-cover object-center" 
              sizes="(max-width: 1024px) 100vw, 360px"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent" />
        </div>
        <div className="p-6 flex flex-col items-start gap-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] leading-6 font-medium text-neutral-900">{banner.title}</h3>
            <p className="text-[18px] leading-[27px] text-neutral-500">{banner.subcopy}</p>
          </div>
          <Button className="h-14 px-8 rounded-[10px] text-[16px] font-medium">{banner.ctaText}</Button>
        </div>
      </div>
    </div>
  )
}

export default function FAQ({ headline, banner, items }: FAQContent) {
  const [openIndex, setOpenIndex] = useState(() => {
    const preset = items.findIndex(i => i.open)
    return preset >= 0 ? preset : -1
  })
  return (
    <Section id="faq">
      <div className="px-4 py-4">
        <div className="rounded-[2rem] bg-white px-6 md:px-20 lg:px-32 py-6 md:py-32">
          <Container>
            <div className="grid w-full max-w-[896px] mx-auto items-start gap-16 lg:grid-cols-[360px_minmax(0,1fr)]">
              <div className="w-full max-w-[360px] lg:sticky lg:top-40 flex flex-col gap-8 lg:gap-24">
                <div className="flex flex-col items-start">
                  <h2 className="text-left font-museo text-[36px] leading-[40px] text-purple-600">{headline}</h2>
                </div>
                <FAQBanner banner={banner} className="hidden lg:block" />
              </div>

              <div className="flex-1 flex w-full flex-col gap-4">
                {items.map((it, idx) => (
                  <FAQCard key={idx} item={it} isOpen={openIndex === idx} onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)} />
                ))}
                <FAQBanner banner={banner} className="block lg:hidden mt-8" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  )
}
