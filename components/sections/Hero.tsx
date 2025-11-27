"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, floating } from '@/components/ui/motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import type { HeroContent } from '@/types/content'

import Typewriter from '@/components/ui/Typewriter'

export default function Hero(props: HeroContent) {
  const {
    chipText,
    headlinePrimary,
    headlineAccent,
    subcopy,
    emailPlaceholder,
    ctaText,
    avatars,
    waitlistCount,
    waitlistSubcopy,
    backgroundImageUrl
  } = props

  return (
    <div id="hero" className="relative isolate w-full min-h-[38rem] md:min-h-[47rem] overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="px-6 md:px-20 py-16 md:py-24">
        <Container>
          <div className="mx-auto grid items-center gap-12 lg:grid-cols-2">
            <motion.div 
              className="mx-auto justify-self-center flex max-w-[33.5rem] flex-col gap-5"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp} className="inline-flex w-fit items-center rounded-full border border-neutral-0 bg-purple-100 px-4 py-1.5">
                <span className="text-sm text-purple-600">{chipText}</span>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h1 className="font-museo text-[40px] leading-[44px] md:text-[60px] md:leading-[60px]">
                  <span className="text-neutral-900">{headlinePrimary}</span>
                  <span className="text-purple-400"> 
                    <Typewriter 
                      words={[
                        headlineAccent.trim(),
                        "in flow with it",
                        "for peak energy"
                      ]} 
                      delay={1000}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={fadeUp} className="text-lg leading-8 text-neutral-900 md:text-xl">
                {subcopy}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <Input
                    type="email"
                    placeholder={emailPlaceholder}
                    className="h-14 sm:max-w-[369px] border border-neutral-200 bg-purple-50"
                  />
                  <Button className="h-14 w-full sm:w-auto px-8 text-base font-medium">{ctaText}</Button>
                </div>
                <p className="text-sm text-neutral-500">Early waitlist members get priority access • No spam, ever</p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-2 inline-flex items-center gap-6">
                <div className="flex -space-x-3">
                  {avatars.slice(0, 4).map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-2xl ring-2 ring-white"
                      priority
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-neutral-900">{waitlistCount} waiting</span>
                  <span className="text-sm text-neutral-500">{waitlistSubcopy}</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative mx-auto justify-self-center w-full max-w-[536px] aspect-[536/556] h-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] -z-10">
                <Image src="/Hero/main/Icon Purple.svg" alt="" fill className="object-contain" />
              </div>
              <div className="absolute left-[1.5%] top-[1.4%] h-[87%] w-[76%] rounded-3xl bg-purple-800 opacity-10 blur-[48px]" />
              <div className="absolute left-[2.6%] top-[1.4%] h-[87%] w-[76%] rounded-[204px] bg-purple-800 opacity-10 blur-[48px]" />

              <motion.div 
                className="absolute left-[52.6%] top-[12.6%] inline-flex w-[46%] flex-col gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div className="flex flex-col gap-2 w-full" variants={floating} animate="animate">
                  <div className="relative w-full overflow-hidden rounded-xl border border-[#E5E5E5] bg-white aspect-[247/257]">
                    <Image src="/Hero/main/tasks-img.svg" alt="Tasks" fill className="object-cover" priority />
                  </div>

                  <div className="relative w-[82%] overflow-hidden rounded-xl border border-[#E5E5E5] bg-white aspect-[203/225]">
                    <Image src="/Hero/main/chart-img.svg" alt="Chart" fill className="object-cover" priority />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="absolute left-0 top-0 inline-flex w-[51%] flex-col gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <motion.div
                  className="flex flex-col gap-2 w-full"
                  animate={{
                    y: [0, -15, 0],
                    transition: {
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }
                  }}
                >
                  <div className="relative w-full overflow-hidden rounded-xl aspect-[275/393]">
                    <Image src="/Hero/main/user-img.svg" alt="User" fill className="object-cover" priority />
                  </div>
                  <div className="relative w-full overflow-hidden rounded-xl aspect-[275/70]">
                    <Image src="/Hero/main/ayikaScore.svg" alt="Score" fill className="object-contain" priority />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  )
}
