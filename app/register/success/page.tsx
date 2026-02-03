"use client"

import { motion } from 'framer-motion'
import { CheckCircle2, Home, PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export default function RegistrationSuccessPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001E67] via-[#002A88] to-[#0033A0] flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-br from-[#c0be2b] to-[#d9d75a] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <CheckCircle2 className="h-14 w-14 text-[#001E67]" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-white mb-3">
            Registration Complete
          </h1>
          <p className="text-[#c0be2b]/80">
            You're registered for Invest Ethiopia 2026
          </p>
        </motion.div>

        <Card className="border-0 bg-gradient-to-br from-[#001E67] to-[#003A8C] shadow-2xl">
          <div className="h-1.5 bg-gradient-to-r from-[#c0be2b] via-[#0052CC] to-[#c0be2b]"></div>
          
          <CardContent className="p-8">
          

            <div className="space-y-4">
              <Button 
                onClick={() => router.push('/')}
                className="w-full bg-gradient-to-r from-[#c0be2b] to-[#d9d75a] text-[#001E67] hover:from-[#d9d75a] hover:to-[#c0be2b] font-semibold h-12"
              >
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => router.push('/register')}
                className="w-full border-[#c0be2b] text-[#c0be2b] hover:bg-[#c0be2b]/10 hover:border-[#d9d75a] h-12"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Register Another
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-[#c0be2b]/30 text-center">
              <p className="text-[#c0be2b]/60 text-sm">
                March 26, 2026 • Addis Ababa
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}