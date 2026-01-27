"use client"

import { motion } from 'framer-motion'
import { CheckCircle2, Home, PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function RegistrationSuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Thank You for Registering!
          </h1>
          <p className="mt-2 text-gray-600">
            Your submission was successful. A confirmation email is on its way.
          </p>
        </motion.div>

        <Card className="border-green-200 shadow-xl">
          <CardHeader className="pt-10 pb-0 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 12 }}
              className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto"
            >
              <CheckCircle2 className="h-14 w-14 text-green-600" />
            </motion.div>
          </CardHeader>
          <CardContent className="pt-8 pb-10 text-center">
            <h2 className="text-2xl font-semibold mb-2">Registration Complete</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              We&apos;re excited to have you at Invest Ethiopia 2026. Keep an eye on your inbox for event updates and your admission details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gap-2" onClick={() => router.push('/')}> 
                <Home className="h-4 w-4" />
                Go to Home
              </Button>
              <Button variant="outline" className="gap-2" onClick={() => router.push('/register')}> 
                <PlusCircle className="h-4 w-4" />
                Register Another Attendee
              </Button>
            </div>
          </CardContent>
        </Card>

   
      </div>
    </div>
  )
}
