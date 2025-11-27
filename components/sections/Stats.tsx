"use client"
import type { StatsContent, StatItem } from '@/types/content'
import { TrendingUp, PiggyBank, Users, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/components/ui/motion'

function Icon({ type }: { type: StatItem['icon'] }) {
  const className = 'w-6 h-6 text-purple-500'
  if (type === 'boost') return <TrendingUp className={className} />
  if (type === 'saved') return <PiggyBank className={className} />
  if (type === 'waitlist') return <Users className={className} />
  return <Star className={className} />
}

function Stat({ item }: { item: StatItem }) {
  return (
    <motion.div className="relative w-full" variants={fadeUp}>
      <div className="flex justify-center items-center">
        <Icon type={item.icon} />
      </div>
      <div className="mt-9 flex justify-center">
        <div className="font-museo text-4xl font-bold leading-10 text-purple-600">{item.value}</div>
      </div>
      <div className="mt-2 flex justify-center">
        <div className="text-center text-lg leading-7 text-neutral-900">{item.title}</div>
      </div>
      <div className="mt-2 flex justify-center">
        <div className="text-center text-sm leading-5 text-neutral-500">{item.subcopy}</div>
      </div>
    </motion.div>
  )
}

export default function Stats({ items }: StatsContent) {
  return (
    <div className="px-4">
      <div className="rounded-t-[2rem] bg-purple-100 px-4 md:px-[5%] py-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <motion.div 
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {items.map((it, idx) => (
              <Stat key={idx} item={it} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}