"use client"

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SliderImage {
  id: number
  src: string
  alt: string
}

interface GallerySectionProps {
  images: SliderImage[]
  currentSlide: number
  isInView: boolean
  onPrev: () => void
  onNext: () => void
  onSelectSlide: (index: number) => void
}

export default function GallerySection({
  images,
  currentSlide,
  isInView,
  onPrev,
  onNext,
  onSelectSlide,
}: GallerySectionProps) {
  return (
    <section className="py-20 px-0 bg-[#0d261a] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 pointer-events-none"
    
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full relative z-10"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden rounded-2xl bg-linear-to-br from-white/5 to-white/10 border border-white/20 shadow-2xl"
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                className="w-full shrink-0 relative group"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-125 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[#18412e] p-3 rounded-full transition-all shadow-lg hover:scale-110 border border-[#d7b15a]/30 backdrop-blur-sm"
          >
            <ChevronLeft size={24} className="text-white" />
          </motion.button>

          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[#18412e] p-3 rounded-full transition-all shadow-lg hover:scale-110 border border-[#d7b15a]/30 backdrop-blur-sm"
          >
            <ChevronRight size={24} className="text-white" />
          </motion.button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2"
          >
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => onSelectSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#d7b15a] w-8' : 'bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
