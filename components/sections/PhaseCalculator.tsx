"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/components/ui/motion'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import type { PhaseCalculatorContent } from '@/types/content'

export default function PhaseCalculator({ chipLabel, headline, subcopy, form, backgroundImageUrl }: PhaseCalculatorContent) {
  const bgSrc = backgroundImageUrl || '/Calculator/calculator-bg.png'
  return (
    <Section id="calculator">
      <div className="px-4 py-4">
        <div className="relative rounded-[2rem] px-6 md:px-20 lg:px-32 py-6 md:py-32 flex justify-center">
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
            <Image src={bgSrc} alt="Background" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent" />
          </div>
          <Container>
            <div className="relative z-10 flex w-full max-w-[896px] flex-col items-center gap-12 md:flex-row">
              <motion.div 
                className="flex-1 flex w-full flex-col items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <span className="inline-flex rounded-full bg-[#EFE8FD] px-4 py-1.5 outline outline-1 outline-white text-[14px] text-purple-600">{chipLabel}</span>
                <h2 className="text-left font-museo text-[36px] leading-[40px] md:text-[40px] text-purple-600">{headline}</h2>
                <p className="text-left text-[20px] leading-7 text-neutral-500">{subcopy}</p>
              </motion.div>

              <motion.div 
                className="flex-1 relative w-full"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute inset-0 -z-10 rounded-[16px] bg-purple-800 opacity-10 blur-[20px]" />
                <div className="flex w-full flex-col items-start rounded-[16px] bg-white p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10)] outline outline-1 outline-[rgba(166,112,219,0.05)]">
                  <div className="flex w-full flex-col gap-8">
                    <div className="flex w-full flex-col gap-[9.5px]">
                      <label className="text-[14px] leading-5 font-medium text-neutral-900">{form.lastPeriodLabel}</label>
                      <Input
                        type="date"
                        className="h-12 bg-purple-50 outline outline-1 outline-purple-50 focus:outline-none"
                      />
                    </div>

                    <div className="flex w-full flex-col gap-[9.5px]">
                      <label className="text-[14px] leading-5 font-medium text-neutral-900">{form.cycleLengthLabel}</label>
                      <Input
                        type="number"
                        placeholder={form.cycleLengthPlaceholder}
                        className="h-12 bg-purple-50 outline outline-1 outline-purple-50 focus:outline-none"
                      />
                    </div>

                    <Button className="h-14 w-full rounded-[12px] text-[18px] font-medium">{form.ctaText}</Button>

                    <p className="text-center text-[14px] leading-5 text-neutral-500">{form.footerNote}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  )
}
