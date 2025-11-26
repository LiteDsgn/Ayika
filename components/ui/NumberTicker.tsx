"use client"
import { useEffect, useRef } from 'react'
import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'

function splitNumeric(text: string) {
  const match = text.match(/(^[^\d]*)([\d,.]+)([^\d]*$)/)
  if (!match) return { prefix: '', number: 0, suffix: text }
  const [, prefix, numStr, suffix] = match
  const number = parseFloat(numStr.replace(/,/g, ''))
  return { prefix, number, suffix }
}

export default function NumberTicker({ value, className }: { value: string; className?: string }) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  const { prefix, number, suffix } = splitNumeric(value)
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (latest) => Math.round(latest))

  useEffect(() => {
    if (!inView) return
    if (prefersReduced) {
      mv.set(number)
      return
    }
    const controls = animate(mv, number, { duration: 1.2, ease: [0.22, 1, 0.36, 1] })
    return () => controls.stop()
  }, [inView, prefersReduced, number])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rounded.get()}
      {suffix}
    </span>
  )
}