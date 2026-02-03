"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useScroll, useTransform } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/landing/HeroSection'
import BannerSection from '@/components/landing/BannerSection'
import CountdownSection from '@/components/landing/CountdownSection'
import GallerySection from '@/components/landing/GallerySection'
import ThemeSection from '@/components/landing/ThemeSection'
import VideoModal from '@/components/landing/VideoModal'
import { Button } from '@/components/ui/button'

const SLIDER_IMAGES = [
  { id: 1, src: '/photo_1.jpg', alt: 'Photo 1' },
  { id: 2, src: '/photo_2.jpg', alt: 'Photo 2' },
  { id: 3, src: '/photo_3.jpg', alt: 'Photo 3' },
  { id: 4, src: '/photo_4.jpg', alt: 'Photo 4' },
  { id: 5, src: '/photo_5.jpg', alt: 'Photo 5' },
  { id: 6, src: '/photo_6.jpg', alt: 'Photo 6' },
  { id: 7, src: '/photo_7.jpg', alt: 'Photo 7' },
  { id: 8, src: '/photo_8.jpg', alt: 'Photo 8' },
]



export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)
  const containerRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const isInView1 = true

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length)
  }



  const closeVideo = () => {
    setSelectedVideo(null)
  }

  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }


  return (
    <div className="min-h-screen bg-[#001E67] text-white overflow-x-hidden">
      <Header />
      <HeroSection
        containerRef={containerRef}
        heroY={heroY}
        heroOpacity={heroOpacity}
        posterSrc={SLIDER_IMAGES[0].src}
        videoSrc="https://investethiopia.gov.et/wp-content/uploads/2025/12/INTERVIEW-FINAL-GOBEZ-FINAL.mp4"
      />
      <ThemeSection />
     
 

      {/* <VideoHighlightsSection
        videos={EVENT_VIDEOS}
        isInView={isInView2}
        onOpenVideo={openVideo}
      /> */}
        <BannerSection
          imageSrc="/banner_what_will_the_forum.jpg"
      
        />
       <BannerSection imageSrc="/image-removebg-preview.png" />

            <GallerySection
        images={SLIDER_IMAGES}
        currentSlide={currentSlide}
        isInView={isInView1}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelectSlide={handleSelectSlide}
      />
       <BannerSection imageSrc="/transparent-banner.png" />
           <CountdownSection  />
      {/* <FeaturesSection isInView={isInView3} /> */}
      {/* <CtaSection isInView={isInView4} /> */}
      <VideoModal selectedVideo={selectedVideo} onClose={closeVideo} />
      <Footer />
    </div>
  )
}