// app/register/page.tsx
"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import EventDetailsCard from '@/components/registration/EventDetailsCard'
import RegistrationForm from '@/components/registration/RegistrationForm'

export default function RegisterPage() {
  const router = useRouter()
  const [success, setSuccess] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
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
            className="mb-4"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Register for <span className="text-blue-600">Invest Ethiopia 2026</span>
          </h1>
          <p className="text-gray-600">
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
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Card className="border-green-200 shadow-xl">
                    <CardContent className="pt-12 pb-12 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Registration Complete!
                      </h2>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Thank you for registering for Invest Ethiopia 2026. We've sent a confirmation 
                        email with your registration details and next steps.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => setSuccess(false)}>
                          Register Another
                        </Button>
                        <Button variant="outline" onClick={() => router.push('/')}>
                          Return to Home
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <RegistrationForm 
                    onSuccess={() => setSuccess(true)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}