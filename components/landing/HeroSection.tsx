"use client"

import type { MotionValue } from 'framer-motion'
import { motion } from 'framer-motion'

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
  // Animation variants
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
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-[#0D261A] pt-16"
    >
      {/* Background Video Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#0D261A]/20 z-10" />
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
        {/* Top Logo - From image_6fe6b6 */}
        <motion.div variants={fadeInUp} className="mb-8 mt-4">
          <img 
            src="/me_1.jpg" 
            alt="Invest in Ethiopia 2026 Logo" 
            className="h-24 md:h-32 w-auto"
          />
        </motion.div>

        {/* Main Title - Matches image_6fe6b6 Typography */}
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tight mb-4"
        >
          Invest in Ethiopia<br />
          <span className="text-xl md:text-5xl lg:text-6xl font-extrabold opacity-90">
            High-Level Business Forum 2026
          </span>
        </motion.h1>

        {/* Ethiopia is Ready for Business Slogan - From image_79e2aa */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col items-center mt-6 mb-10"
        >
          <span className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">
            Ethiopia is Ready for Business
          </span>
        </motion.div>

        {/* Date and Location - Using exact orange color from image_6fe6b6 */}
        <motion.div variants={fadeInUp} className="space-y-1">
          <p className="text-2xl md:text-4xl font-bold text-[#e29201] uppercase tracking-wider">
            26-27 March 2026
          </p>
          <div className="text-lg md:text-2xl font-light text-[#e29201]/90 tracking-wide">
            <p>Ethiopian Skylight Hotel</p>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </motion.div>
      </motion.div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="absolute bottom-5 left-0 right-0 z-30 flex justify-center"
>
  <div className="flex items-center gap-6 px-24 py-4 mt-5 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
    
    {/* Twitter SVG */}
    <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        aria-label="Twitter"
        className="hover:scale-110 transition-transform duration-300"
      >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    </a>

    {/* LinkedIn SVG */}
    <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        aria-label="LinkedIn"
        className="hover:scale-110 transition-transform duration-300"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>

    {/* Facebook SVG */}
    <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        aria-label="Facebook"
        className="hover:scale-110 transition-transform duration-300"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </a>

    {/* YouTube SVG */}
    <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
      <svg 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        aria-label="YouTube"
        className="hover:scale-110 transition-transform duration-300"
      >
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
  </div>
</motion.div>
    </motion.section>
  )
}