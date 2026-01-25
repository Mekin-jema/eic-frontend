// components/registration/RegistrationForm.tsx
"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

import { Loader2 } from 'lucide-react'
import type { attendeeRegistration, MessageResponse } from '@/redux/features/Auth/authTypes'
import { registrationSchema, type RegistrationFormValues, registrationDefaultValues } from './registration.schema'

import FormStep1 from './FormStep1'
import FormStep2 from './FormStep2'

import { useAttendeeRegistrationMutation } from '@/redux/features/Auth/authApiSlice'
import { Form } from '../ui/form'
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
      const hasFile = !!(data as any).proofDocument
      let res
      if (hasFile) {
        const formData = new FormData()
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('email', data.email)
        formData.append('phoneNumber', data.phoneNumber)
        formData.append('occupation', data.occupation)
        formData.append('organization', data.organization || '')
        formData.append('country', data.country)
        formData.append('hearAboutUs', data.hearAboutUs)
        formData.append('registrationType', 'individual')
        formData.append('specialNeeds', data.specialNeeds || '')
        ;(data.interests ?? []).forEach((i) => formData.append('interests[]', i))
        const file = (data as any).proofDocument as File | undefined
        if (file) formData.append('proofDocument', file)
        res = await attendeeRegistration(formData as any)
      } else {
        const payload: attendeeRegistration = {
          ...data,
          registrationType: 'individual',
          organization: data.organization || undefined,
          specialNeeds: data.specialNeeds || undefined,
          interests: data.interests ?? [],
        }
        res = await attendeeRegistration(payload as any)
      }
      
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
    if (currentStep === 1) {
      const valid = await form.trigger(step1Fields, { shouldFocus: true })
      if (!valid) return
    } else if (currentStep === 2) {
      // Validate only Step 2 fields before proceeding
      const valid = await form.trigger(['interests'] as (keyof RegistrationFormValues)[], { shouldFocus: true })
      if (!valid) return
    }
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <Card className="border-blue-200 shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Attendee Registration</h2>
            <p className="text-gray-600">Please complete all sections below</p>
          </div>
          <Badge variant="outline" className="bg-blue-50">
            Step {currentStep} of 3
          </Badge>
        </div>
        <Progress value={(currentStep / 3) * 100} className="mt-4" />
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <FormStep1 key="step1" />
              )}
              
              {currentStep === 2 && (
                <FormStep2 
                  key="step2" 
                />
              )}
              
              {currentStep === 3 && (
                <FormStep3 key="step3" />
              )}
            </AnimatePresence>
            
            <div className="flex justify-between pt-4 border-t">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              
              {currentStep < 3 ? (
                <Button type="button" onClick={handleContinue}>
                  Continue
                </Button>
              ) : (
                <Button type="submit" disabled={isLoading}>
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
          </form>
        </Form>
      </CardContent>
      
      <CardFooter className="bg-gray-50 border-t">
        <div className="text-sm text-gray-600 space-y-1">
          <p>📧 Confirmation email will be sent within 24 hours</p>
          <p>🔄 Need to make changes? Contact registration@investethiopia2026.org</p>
        </div>
      </CardFooter>
    </Card>
  )
}