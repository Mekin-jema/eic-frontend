// app/page.tsx
"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, X, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CountdownTimer from '@/components/utils/countdown-timer'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

// Sample data
const SLIDER_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&auto=format&fit=crop', alt: 'Event networking' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&auto=format&fit=crop', alt: 'Conference keynote' },
  { id: 3, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&auto=format&fit=crop', alt: 'Panel discussion' },
  { id: 4, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&auto=format&fit=crop', alt: 'Workshop floor' },
]

const EVENT_VIDEOS = [
  { id: 1, title: 'Highlights Reel', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop', videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4' },
  { id: 2, title: 'Keynote Speech', thumbnail: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&auto=format&fit=crop', videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Night_City.mp4' },
  { id: 3, title: 'Workshop Session', thumbnail: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b5d4c?w=1200&auto=format&fit=crop', videoUrl: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4' },
]



export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef(null)

  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  
  // Check if sections are in view
  const isInView1 = useInView(sectionRefs[0], { once: true, amount: 0.3 })
  const isInView2 = useInView(sectionRefs[1], { once: true, amount: 0.3 })
  const isInView3 = useInView(sectionRefs[2], { once: true, amount: 0.3 })
  const isInView4 = useInView(sectionRefs[3], { once: true, amount: 0.3 })

  // Image slider auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length)
  }

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  // Event date (example: 7 days from now)
  const eventDate = new Date()
  eventDate.setDate(eventDate.getDate() + 7)

  return (
    <div className="min-h-screen bg-[#0b1f53] text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={containerRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1f53] via-[#0a1a44] to-[#0b1f53] pt-36"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f53]/90 via-[#0b1f53]/60 to-transparent z-10" />
          <img 
            src={SLIDER_IMAGES[currentSlide].src}
            alt={SLIDER_IMAGES[currentSlide].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4 max-w-6xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">December 15-17, 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Tech Summit
            </span>
            <br />
            <span className="text-white">Where Innovation Meets Opportunity</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join global leaders, innovators, and investors at the premier technology conference of the year
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 border-2 border-white text-white bg-white/10">
              View Schedule
            </Button>
          </div>
        </motion.div>

  
      </section>

      {/* Countdown & Event Details */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0b1f53] to-[#0a1a44]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 rounded-2xl shadow-xl p-8 md:p-12 border border-white/10 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Countdown to the Event
                </h2>
                <p className="text-blue-100 mb-8 text-lg">
                  Join us in <span className="font-semibold text-white">7 days</span> for an unforgettable experience with industry pioneers and cutting-edge technology demonstrations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-100">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">December 15-17, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-100">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">San Francisco Convention Center</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <CountdownTimer targetDate={eventDate} />
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Button asChild className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                    <Link href="/register">Secure Your Spot</Link>
                  </Button>
                  <p className="text-center text-blue-200 text-sm mt-4">
                    Limited availability • Early bird pricing ends soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={sectionRefs[0]} className="py-20 px-4 bg-[#0a1a44]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Event Gallery</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              A glimpse into past events and what to expect
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {SLIDER_IMAGES.map((image) => (
                <div key={image.id} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-900/70 hover:bg-blue-800 p-3 rounded-full transition-all shadow-lg hover:scale-110 border border-white/20"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-900/70 hover:bg-blue-800 p-3 rounded-full transition-all shadow-lg hover:scale-110 border border-white/20"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {SLIDER_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                    setTimeout(() => setIsAutoPlaying(true), 3000)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white w-8' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section ref={sectionRefs[1]} className="py-20 px-4 bg-[#0b1f53]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Event Highlights</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Watch recordings from our previous events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENT_VIDEOS.map((video) => (
              <Card key={video.id} className="bg-white/5 border-white/10 text-white overflow-hidden hover:shadow-xl transition-shadow group">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div 
                      onClick={() => openVideo(video.videoUrl)}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <Play size={32} className="ml-1 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-blue-100">Watch highlights from this session</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={sectionRefs[2]} className="py-20 px-4 bg-[#0a1a44]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Attend Tech Summit?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Experience the future of technology through multiple engaging formats
            </p>
          </div>
          
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Expert Keynotes",
      desc: "Learn from industry pioneers and thought leaders",
      color: "bg-blue-100 text-blue-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M12 1v22" />
          <path d="M5 6h14" />
          <path d="M5 18h14" />
          <rect x="3" y="6" width="18" height="12" rx="2" />
        </svg>
      ),
    },
    {
      title: "Hands-on Workshops",
      desc: "Practical sessions to enhance your skills",
      color: "bg-green-100 text-green-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M14.7 6.3a1 1 0 0 0-1.4 0L6 13.6V18h4.4l7.3-7.3a1 1 0 0 0 0-1.4z" />
          <path d="M6 18l-2 2" />
        </svg>
      ),
    },
    {
      title: "Networking Opportunities",
      desc: "Connect with peers and potential partners",
      color: "bg-purple-100 text-purple-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <circle cx="9" cy="7" r="4" />
          <circle cx="17" cy="7" r="4" />
          <path d="M2 21c0-4 3-7 7-7" />
          <path d="M22 21c0-4-3-7-7-7" />
        </svg>
      ),
    },
    {
      title: "Innovation Showcase",
      desc: "See the latest technological breakthroughs",
      color: "bg-amber-100 text-amber-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5a7 7 0 0 0-4-12z" />
        </svg>
      ),
    },
    {
      title: "Panel Discussions",
      desc: "Engaging conversations on current trends",
      color: "bg-cyan-100 text-cyan-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      ),
    },
    {
      title: "Career Development",
      desc: "Opportunities for professional growth",
      color: "bg-pink-100 text-pink-600",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 3 3 5-5" />
        </svg>
      ),
    },
  ].map((item, index) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView3 ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-300/50 hover:shadow-lg transition-all group text-white"
    >
      <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
        {item.icon}
      </div>

      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
      <p className="text-blue-100">{item.desc}</p>
    </motion.div>
  ))}
</div>

        </motion.div>
      </section>

      {/* CTA Section */}
      <section ref={sectionRefs[3]} className="py-20 px-4 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't miss your chance to be part of the most anticipated tech event of the year
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-10 py-7 bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button size="lg"  className="text-lg px-10 py-7 border-2 border-white text-white bg-white/10">
              Download Brochure
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Early bird pricing ends in <span className="font-bold">3 days</span>
          </p>
        </motion.div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X size={24} />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}