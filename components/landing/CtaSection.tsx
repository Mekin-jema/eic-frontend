"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CtaSectionProps {
  isInView: boolean
}

export default function CtaSection({ isInView }: CtaSectionProps) {
  return (
    <section className="relative py-24 px-4 bg-[#0d261a] overflow-hidden">

      {/* Soft glowing background accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 85%, rgba(215,177,90,0.12) 0%, transparent 55%),
            radial-gradient(circle at 85% 15%, rgba(31,138,91,0.12) 0%, transparent 55%)
          `,
        }}
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <div className="bg-white/5 border border-white/15 rounded-3xl px-8 py-14 md:px-14 backdrop-blur-md shadow-2xl">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Be Part of  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1f8a5b] to-[#d7b15a]">
              Ethiopia’s Premier Innovation Event
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10"
          >
            Secure your place among industry leaders, investors, and innovators.
            Limited seats available for early registrations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-[#1f8a5b] to-[#d7b15a] text-white shadow-xl hover:shadow-2xl"
            >
              <Link href="/register">Register Now</Link>
            </Button>
          </motion.div>

    

        </div>
      </motion.div>
    </section>
  )
}
