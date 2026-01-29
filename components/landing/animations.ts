import type { Easing, Variants } from 'framer-motion'

export const EASE_OUT: Easing = [0.16, 1, 0.3, 1]
export const EASE_LINEAR: Easing = [0, 0, 1, 1]
export const EASE_BACK_OUT: Easing = [0.34, 1.56, 0.64, 1]

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_OUT,
    },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}
