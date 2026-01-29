"use client"

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  selectedVideo: string | null
  onClose: () => void
}

export default function VideoModal({ selectedVideo, onClose }: VideoModalProps) {
  if (!selectedVideo) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-6xl"
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute -top-12 right-0 p-3 hover:bg-white/20 rounded-full transition-colors text-white"
        >
          <X size={28} />
        </motion.button>
        <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/20">
          <video src={selectedVideo} controls autoPlay className="w-full h-full" playsInline>
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </motion.div>
  )
}
