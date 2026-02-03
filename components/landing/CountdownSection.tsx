"use client"

import  { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"

export default function ForumCountdown() {
  // The specific date you requested
  const eventDate = new Date('2026-03-26T00:00:00')

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-[#00163F] via-[#001E67] to-[#003A8C]">
      <Card className="relative w-full max-w-4xl border-0 bg-gradient-to-br from-[#003A8C]/80 to-[#001E67]/90 backdrop-blur-sm px-10 py-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c0be2b]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0052CC]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#c0be2b]/20 to-transparent"></div>
        </div>

        {/* Header with better alignment and hierarchy */}
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-4 uppercase">
            Countdown to the Forum
          </h2>
          <p className="text-lg text-white/70 font-light tracking-wider">
            March 26, 2026 • 00:00 GMT
          </p>
        </div>

        {/* Time units with improved spacing and alignment */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-2xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Days" color="from-[#0052CC] to-[#1C6BFF]" />
          <TimeUnit value={timeLeft.hours} label="Hours" color="from-[#c0be2b] to-[#d9d75a]" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" color="from-[#0052CC] to-[#1C6BFF]" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" color="from-[#c0be2b] to-[#d9d75a]" />
        </div>

        {/* Progress indicator */}
        <div className="relative mt-16">
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#0052CC] to-[#c0be2b] rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${100 - ((parseInt(timeLeft.days) / 365) * 100)}%` 
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-3 text-sm text-white/60">
            <span>Today</span>
            <span className="font-medium text-white/80">Event Day</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

function TimeUnit({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className={`relative rounded-2xl bg-gradient-to-br ${color} p-1 w-full max-w-[180px] mx-auto shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
        {/* Inner shadow effect */}
        <div className="absolute inset-1 rounded-xl bg-black/10 pointer-events-none"></div>
        
        {/* Main time value with better typography */}
        <div className="relative bg-gradient-to-b from-[#001E67] to-[#003A8C] rounded-xl py-8 px-4">
          <span className="text-6xl md:text-7xl font-extralight tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
            {value}
          </span>
        </div>
      </div>
      
      {/* Label with improved styling */}
      <span className="mt-4 text-base font-medium tracking-wider text-white/90 uppercase">
        {label}
      </span>
      
      {/* Decorative dot */}
      <div className="mt-2 w-1 h-1 rounded-full bg-gradient-to-r from-[#0052CC] to-[#c0be2b] opacity-70"></div>
    </div>
  )
}