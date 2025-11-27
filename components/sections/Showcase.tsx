"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/components/ui/motion'
import type { ShowcaseContent } from '@/types/content'

export default function Showcase({ title, subcopy, imageUrl, imageWidth, imageHeight }: ShowcaseContent) {
  return (
    <div className="px-4" id="showcase">
      <div className="rounded-b-[2rem] bg-purple-100 px-6 md:px-[5%] pt-24">
        <div className="mx-auto w-full max-w-[1280px] px-4">
          <motion.div 
            className="flex flex-col items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2 className="text-center font-museo text-3xl md:text-4xl text-neutral-900">
              {title}
            </h2>
            <p className="text-center text-xl leading-7 text-neutral-500">
              {subcopy}
            </p>
          </motion.div>

          <div className="mt-16 flex justify-center">
            <motion.div 
              className="w-full max-w-[72rem] overflow-hidden rounded-t-[1.5rem] bg-purple-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={imageUrl}
                alt="Preview"
                width={imageWidth || 1075}
                height={imageHeight || 591}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 72rem, 100vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
