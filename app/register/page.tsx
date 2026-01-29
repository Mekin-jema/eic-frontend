// app/register/page.tsx
"use client"

import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import EventDetailsCard from '@/components/registration/EventDetailsCard'
import RegistrationForm from '@/components/registration/RegistrationForm'

export default function RegisterPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0D261A] via-[#1F8A5B] to-[#0D261A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Button
            variant="ghost"
            className="mb-4 text-[#F7F1E1] hover:text-[#D7B15A] hover:bg-white/10"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl font-bold text-white mb-2">
            Register for <span className="text-[#D7B15A]">Invest Ethiopia 2026</span>
          </h1>
          <p className="text-[#94A3B8]">
            Join Africa's premier investment forum. 26-27 March 2026 • Ethiopian Skylight Hotel
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Event Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <EventDetailsCard />
          </motion.div>

          {/* Right Panel - Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <RegistrationForm
                  />
                </motion.div>
          
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}