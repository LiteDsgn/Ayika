import { Variants } from 'framer-motion'

export const transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

export const hoverLift = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
}

export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}