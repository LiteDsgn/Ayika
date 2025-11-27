"use client"
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/components/ui/motion'
import type { LaunchStepsContent } from '@/types/content'

function StepCard({ index, title, subcopy }: { index: number; title: string; subcopy: string }) {
  return (
    <motion.div variants={fadeUp} className="w-full max-w-[352px] inline-flex flex-col items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-[12px] bg-purple-500">
        <span className="text-center font-museo text-[24px] leading-[32px] font-black text-white">{index}</span>
      </div>
      <div className="w-full">
        <div className="text-center justify-center flex flex-col text-neutral-900 text-[20px] leading-[28px] font-semibold">{title}</div>
      </div>
      <div className="w-full">
        <div className="text-center justify-center flex flex-col text-neutral-500 text-[16px] leading-[24px]">{subcopy}</div>
      </div>
    </motion.div>
  )
}

export default function LaunchSteps({ headline, subcopy, steps }: LaunchStepsContent) {
  return (
    <Section>
      <div className="px-4 py-4">
        <div className="rounded-[2rem] bg-white px-6 md:px-20 lg:px-32 py-6 md:py-32">
          <Container>
            <div className="flex flex-col gap-16">
              <motion.div 
                className="flex flex-col items-center gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <h2 className="text-center font-museo text-[36px] leading-[40px] text-purple-600 md:text-[40px]">{headline}</h2>
                <p className="text-center text-[20px] leading-7 text-neutral-500">{subcopy}</p>
              </motion.div>
              <div className="flex justify-center">
                <motion.div 
                  className="grid grid-cols-1 gap-8 md:grid-cols-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {steps.map((s, i) => (
                    <div key={i} className="flex justify-center">
                      <StepCard index={i + 1} title={s.title} subcopy={s.subcopy} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  )
}