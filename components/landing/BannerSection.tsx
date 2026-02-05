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
      className="px-4 bg-[#001E67]"
    >
      <div className="w-full">
        <div className="relative overflow-hidden rounded-xl">

          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: EASE_OUT }}
            viewport={{ once: true }}
            src={imageSrc}
            alt="Invest in Ethiopia 2026 banner"
            className="
              w-full object-cover
              h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px]
            "
          />

          {overlay && (
            <div
              className="
                absolute inset-0
                flex items-end justify-center
                pb-6 sm:pb-8
                px-4 sm:px-8 md:px-10
              "
            >
              {overlay}
            </div>
          )}

        </div>
      </div>
    </motion.section>
  )
}

