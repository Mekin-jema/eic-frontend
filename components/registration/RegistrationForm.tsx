// components/registration/RegistrationForm.tsx
"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Loader2 } from 'lucide-react'
import type { MessageResponse } from '@/redux/features/Auth/authTypes'
import { registrationSchema, type RegistrationFormValues, registrationDefaultValues } from './registration.schema'
import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'

import { useAttendeeRegistrationMutation } from '@/redux/features/Auth/authApiSlice'
import { Form } from '../ui/form'
import { Button } from '../ui/button'
import FormStep3 from './FromStep3'

interface RegistrationFormProps {
  onSuccess?: () => void
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [attendeeRegistration, { isLoading }] = useAttendeeRegistrationMutation()
  const [currentStep, setCurrentStep] = useState(1)
  const router = useRouter()

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: registrationDefaultValues,
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<RegistrationFormValues> = async (data) => {
    try {
      const formData = new FormData()
      formData.append('firstName', data.firstName)
      formData.append('lastName', data.lastName)
      formData.append('email', data.email)
      formData.append('phoneNumber', data.phoneNumber)
      formData.append('occupation', data.occupation)
      formData.append('organization', data.organization || '')
      formData.append('country', data.country)
      formData.append('registrationType', 'individual')
      formData.append('needsVisa', String(data.needsVisa ?? false))
      formData.append('specialNeeds', data.specialNeeds || '')
      ;(data.interests ?? []).forEach((i) => formData.append('interests[]', i))
      const file = (data as any).proofDocument as File
      formData.append('proofDocument', file)
      
      const res = await attendeeRegistration(formData as any)
      
      if ('data' in res) {
        const { data: responseData } = res as { data: MessageResponse }
        toast.success('Registration Successful!', {
          description: responseData.message,
        })
        onSuccess?.()
        router.push('/register/success')
      } else {
        const { error } = res as { error: any }
        toast.error('Registration Failed', {
          description: error?.data?.message || 'Please try again',
        })
      }
    } catch (error) {
      toast.error('Error', {
        description: 'An unexpected error occurred',
      })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const step1Fields: (keyof RegistrationFormValues)[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'country',
    'occupation',

  ]

  const handleContinue = async () => {
    let valid = false
    
    if (currentStep === 1) {
      valid = await form.trigger(step1Fields, { shouldFocus: true })
    } else if (currentStep === 2) {
      valid = await form.trigger(['interests'] as (keyof RegistrationFormValues)[], { shouldFocus: true })
    } else if (currentStep === 3) {
      valid = await form.trigger(['proofDocument'] as (keyof RegistrationFormValues)[], { shouldFocus: true })
    }
    
    if (valid && currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const steps = [
    { number: 1, title: 'Personal Info', icon: '👤' },
    { number: 2, title: 'Interests', icon: '🎯' },
    { number: 3, title: 'Additional', icon: '📄' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
    

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <Progress
            value={((currentStep - 1) / (steps.length - 1)) * 100}
            className="absolute top-5 left-0 right-0 h-1.5 z-0 bg-[#1E2B4D]/40 **:data-[slot=progress-indicator]:bg-[#D7B15A]"
          />
          
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center relative z-10">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-semibold text-sm transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-[#1F8A5B] border-[#1F8A5B] text-white'
                    : 'bg-white border-[#94A3B8] text-[#94A3B8]'
                }`}
              >
                {step.number}
              </div>
              <span className="mt-2 text-sm font-medium text-[#D7B15A]">{step.title}</span>
              {currentStep === step.number && (
                <span className="absolute -bottom-6 text-[#D7B15A]">{step.icon}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="border-[#1E2B4D] shadow-lg">
        <CardHeader className="bg-linear-to-r  from-[#0D261A] via-[#1F8A5B] to-[#0D261A] ">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-white">Step {currentStep}: {steps[currentStep - 1]?.title}</CardTitle>
              <CardDescription className="text-[#D7B15A]">
                {currentStep === 1 && 'Enter your personal and contact information'}
                {currentStep === 2 && 'Select your areas of interest for the conference'}
                {currentStep === 3 && 'Provide additional details and upload required documents'}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-sm bg-[#F7F1E1] text-[#0A1D47]">
              {currentStep} of {steps.length}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <AnimatePresence mode="wait">
                {currentStep === 1 && <FormStep1 key="step1" />}
                {currentStep === 2 && <FormStep2 key="step2" />}
                {currentStep === 3 && <FormStep3 key="step3" />}
              </AnimatePresence>
              
              <div className="flex justify-between pt-6 border-t">
                <div>
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                      className="min-w-25 border-[#94A3B8] text-[#0A1D47] hover:bg-[#F7F1E1]"
                    >
                      ← Previous
                    </Button>
                  )}
                </div>
                
                <div>
                  {currentStep < steps.length ? (
                    <Button 
                      type="button" 
                      onClick={handleContinue}
                      className="min-w-25 bg-[#1F8A5B] hover:bg-[#18704A]"
                    >
                      Continue →
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="min-w-37.5 bg-[#2B4291] hover:bg-[#243977]"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Complete Registration'
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        
         <CardFooter className="bg-[#F7F1E1] border-t text-sm text-[#0A1D47] text-center">
   Email: info@eic.gov.et | Phone: (+251) 11 551 0033 | 
</CardFooter>

      </Card>
    </div>
  )
}