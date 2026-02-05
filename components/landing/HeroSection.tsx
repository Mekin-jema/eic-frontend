"use client"

import type { MotionValue } from 'framer-motion'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeroSectionProps {
  containerRef: React.RefObject<HTMLElement | null>
  heroY: MotionValue<number>
  heroOpacity: MotionValue<number>
  posterSrc: string
  videoSrc: string
}

export default function HeroSection({
  containerRef,
  heroY,
  heroOpacity,
  posterSrc,
  videoSrc,
}: HeroSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
  }

  return (
    <motion.section
      ref={containerRef}
      style={{ y: heroY, opacity: heroOpacity }}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-[#001E67] pt-16"
    >
      {/* Background Video Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#001E67]/20 z-10" />
        <video
          className="w-full h-[120vh] object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          style={{ opacity: 0.35 }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-6xl mx-auto"
      >
        {/* Logo */}
        <motion.div variants={fadeInUp} className="mb-8 mt-4">
          <img 
            src="/me_1.jpg" 
            alt="Invest in Ethiopia 2026 Logo" 
            className="h-24 md:h-32 w-auto"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tight mb-4"
        >
          Invest in Ethiopia<br />
          <span className="text-xl md:text-5xl lg:text-6xl font-extrabold opacity-90">
            High-Level Business Forum 2026
          </span>
        </motion.h1>
  

        {/* Date, Location, and Register Button */}
        <motion.div variants={fadeInUp} className="space-y-4">


          {/* Register Now Button */}
          <Link href="/register" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block px-10 py-4 text-xl md:text-2xl font-bold text-white bg-[#e29201] hover:bg-[#f4a900] rounded-full shadow-lg transition-colors duration-300 uppercase tracking-wider mb-2"
            >
              Register Now
            </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
