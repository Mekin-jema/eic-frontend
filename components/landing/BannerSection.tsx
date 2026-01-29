"use client"

import { motion } from 'framer-motion'
import { EASE_OUT } from './animations'

interface BannerSectionProps {
  imageSrc: string
  overlay?: React.ReactNode
}

export default function BannerSection({ imageSrc, overlay }: BannerSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      viewport={{ once: true, amount: 0.3 }}
      className=" px-4 bg-[#0d261a]"
    >
      <div className="max-w-full w-full">
        <div className="relative overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: EASE_OUT }}
            viewport={{ once: true }}
            src={imageSrc}
            alt="Invest in Ethiopia 2026 banner"
            className="w-full h-auto object-cover"
          />
          {overlay ? (
            <div className="absolute inset-0 flex items-end justify-center mr-72 pb-8 px-8 md:px-10 cursor-pointer">
              {overlay}
            </div>
          ) : null}
        </div>
      </div>
    </motion.section>
  )
}
