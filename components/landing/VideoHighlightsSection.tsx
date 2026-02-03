"use client"

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { staggerContainer } from './animations'

interface EventVideo {
  id: number
  title: string
  thumbnail: string
  videoUrl: string
}

interface VideoHighlightsSectionProps {
  videos: EventVideo[]
  isInView: boolean
  onOpenVideo: (videoUrl: string) => void
}

export default function VideoHighlightsSection({
  videos,
  isInView,
  onOpenVideo,
}: VideoHighlightsSectionProps) {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-[#001E67] to-[#002A88] relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Event Highlights</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Watch recordings from our previous events
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                },
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              <Card className="bg-linear-to-br from-[#001E67]/70 to-[#002A88]/60 border-[#d7b15a]/30 text-white overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <CardContent className="p-0 relative">
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <motion.div
                      onClick={() => onOpenVideo(video.videoUrl)}
                      className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center cursor-pointer"
                      whileHover={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-20 h-20 bg-linear-to-br from-[#0052CC] to-[#d7b15a] rounded-full flex items-center justify-center shadow-2xl ring-2 ring-[#d7b15a]/50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(0, 82, 204, 0.4)',
                            '0 0 40px rgba(215, 177, 90, 0.7)',
                            '0 0 20px rgba(0, 82, 204, 0.4)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: [0, 0, 1, 1],
                        }}
                      >
                        <Play size={36} className="ml-1 text-white" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-semibold text-white mb-2"
                      whileHover={{ color: '#d7b15a' }}
                      transition={{ duration: 0.3 }}
                    >
                      {video.title}
                    </motion.h3>
                    <p className="text-blue-200">Watch highlights from this session</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
