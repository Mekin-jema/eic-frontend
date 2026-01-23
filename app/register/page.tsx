// app/register/page.tsx
// 'use client'
"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'
import { useAttendeeRegistrationMutation } from '@/redux/features/Auth/authApiSlice'
import type { attendeeRegistration, MessageResponse } from '@/redux/features/Auth/authTypes'

// Shadcn Components`
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// Icons
import { 
  CheckCircle2, 
  ArrowLeft, 
  Calendar, 
  Users, 
  Building, 

  User,

  Info,
  Sparkles,
  Loader2
} from 'lucide-react'

const INTEREST_CATEGORIES = [
  'Renewable Energy',
  'Solar Technology',
  'Wind Energy',
  'Energy Storage',
  'Smart Grid Technology',
  'Energy Efficiency',
  'Green Building',
  'Electric Vehicles',
  'Climate Change',
  'Sustainability',
  'Networking',
  'Investment Opportunities',
  'Technology Innovation',
  'Policy & Regulation',
  'Other',
]

const HEAR_ABOUT_OPTIONS = [
  'Website',
  'Social Media',
  'Email Newsletter',
  'Industry Publication',
  'Referral',
  'Previous Event',
  'University',
  'Other'
]

export default function RegisterPage() {
  const router = useRouter()
  const [attendeeRegistration, { isLoading }] = useAttendeeRegistrationMutation()
  const [success, setSuccess] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const form = useForm<attendeeRegistration>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      occupation: '',
      organization: '',
      country: '',
      registrationType: 'individual',
      groupSize: undefined,
      interests: [],
      hearAboutUs: '',
      specialNeeds: '',
    },
  })

  const registrationType = form.watch('registrationType')

  const onSubmit = async (data: attendeeRegistration) => {
    try {
      const processedData = {
        ...data,
        groupSize: data.groupSize ? Number(data.groupSize) : undefined,
      }
      
      const res = await attendeeRegistration(processedData)
      
      if ('data' in res) {
        const { data: responseData } = res as { data: MessageResponse }
        toast.success('Registration Successful!', {
          description: responseData.message,
        })
        setSuccess(true)
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

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

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
            <Card className="sticky top-24 border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Date</p>
                    <p className="text-sm text-gray-600">26-27 March 2026</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Venue</p>
                    <p className="text-sm text-gray-600">Ethiopian Skylight Hotel</p>
                    <p className="text-xs text-gray-500">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Attendees</p>
                    <p className="text-sm text-gray-600">500+ Expected</p>
                  </div>
                </div>
                
                <Separator />
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="benefits">
                    <AccordionTrigger className="text-sm font-medium">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Registration Benefits
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      {[
                        'Access to all conference sessions',
                        'Networking with global investors',
                        'Exhibition hall access',
                        'Catering included',
                        'Digital event materials',
                        'Investment matchmaking',
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-3 w-3 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <Alert className="bg-amber-50 border-amber-200">
                  <Info className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">Early Bird Discount</AlertTitle>
                  <AlertDescription className="text-amber-700 text-sm">
                    Register before February 28, 2026 to receive 20% off.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
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
                  <Card className="border-blue-200 shadow-xl">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-2xl">
                            Attendee Registration
                          </CardTitle>
                          <CardDescription>
                            Please complete all sections below
                          </CardDescription>
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
                              <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                              >
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                  <User className="h-5 w-5 text-blue-600" />
                                  Personal Information
                                </h3>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <FormField
                                    control={form.control}
                                    name="firstName"
                                    rules={{ required: "First name is required" }}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                          <Input placeholder="John" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  
                                  <FormField
                                    control={form.control}
                                    name="lastName"
                                    rules={{ required: "Last name is required" }}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                          <Input placeholder="Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                
                                <FormField
                                  control={form.control}
                                  name="email"
                                  rules={{ 
                                    required: "Email is required",
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address"
                                    }
                                  }}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Email Address</FormLabel>
                                      <FormControl>
                                        <Input placeholder="john@example.com" type="email" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    rules={{ required: "Phone number is required" }}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                          <Input placeholder="+251 XXX XXX XXX" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  
                                  <FormField
                                    control={form.control}
                                    name="country"
                                    rules={{ required: "Country is required" }}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Country</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Select country" />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                            <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                                            <SelectItem value="Kenya">Kenya</SelectItem>
                                            <SelectItem value="United States">United States</SelectItem>
                                            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                            <SelectItem value="China">China</SelectItem>
                                            <SelectItem value="UAE">UAE</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                          </SelectContent>
                                        </Select>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <FormField
                                    control={form.control}
                                    name="occupation"
                                    rules={{ required: "Occupation is required" }}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Occupation</FormLabel>
                                        <FormControl>
                                          <Input placeholder="Investor / Analyst / etc." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  
                                  <FormField
                                    control={form.control}
                                    name="organization"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Organization (Optional)</FormLabel>
                                        <FormControl>
                                          <Input placeholder="Company name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                              </motion.div>
                            )}
                            
                            {currentStep === 2 && (
                              <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                              >
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                  <Users className="h-5 w-5 text-blue-600" />
                                  Registration Details
                                </h3>
                                
                                <FormField
                                  control={form.control}
                                  name="registrationType"
                                  rules={{ required: "Please select registration type" }}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Registration Type</FormLabel>
                                      <FormControl>
                                        <RadioGroup
                                          onValueChange={field.onChange}
                                          defaultValue={field.value}
                                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        >
                                          <FormItem>
                                            <FormControl>
                                              <RadioGroupItem value="individual" id="individual" className="peer sr-only" />
                                            </FormControl>
                                            <Label
                                              htmlFor="individual"
                                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            >
                                              <User className="mb-3 h-6 w-6" />
                                              <span className="font-medium">Individual</span>
                                              <span className="text-sm text-muted-foreground">Registering for yourself</span>
                                            </Label>
                                          </FormItem>
                                          
                                          <FormItem>
                                            <FormControl>
                                              <RadioGroupItem value="group" id="group" className="peer sr-only" />
                                            </FormControl>
                                            <Label
                                              htmlFor="group"
                                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            >
                                              <Users className="mb-3 h-6 w-6" />
                                              <span className="font-medium">Group</span>
                                              <span className="text-sm text-muted-foreground">Registering a team</span>
                                            </Label>
                                          </FormItem>
                                        </RadioGroup>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                
                                {registrationType === 'group' && (
                                  <FormField
                                    control={form.control}
                                    name="groupSize"
                                    rules={{ 
                                      required: "Group size is required",
                                      min: { value: 2, message: "Minimum 2 people" },
                                      max: { value: 50, message: "Maximum 50 people" }
                                    }}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Group Size</FormLabel>
                                        <FormControl>
                                          <Input type="number" min="2" max="50" placeholder="Number of people" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                          Bulk discounts available for groups of 10+
                                        </FormDescription>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                )}
                                
                                <FormField
                                  control={form.control}
                                  name="interests"
                                  render={() => (
                                    <FormItem>
                                      <FormLabel>Areas of Interest</FormLabel>
                                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {INTEREST_CATEGORIES.map((interest) => (
                                          <FormField
                                            key={interest}
                                            control={form.control}
                                            name="interests"
                                            render={({ field }) => {
                                              return (
                                                <FormItem
                                                  key={interest}
                                                  className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                  <FormControl>
                                                    <Checkbox
                                                      checked={field.value?.includes(interest)}
                                                      onCheckedChange={(checked) => {
                                                        return checked
                                                          ? field.onChange([...field.value, interest])
                                                          : field.onChange(
                                                              field.value?.filter(
                                                                (value) => value !== interest
                                                              )
                                                            )
                                                      }}
                                                    />
                                                  </FormControl>
                                                  <FormLabel className="text-sm font-normal">
                                                    {interest}
                                                  </FormLabel>
                                                </FormItem>
                                              )
                                            }}
                                          />
                                        ))}
                                      </div>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </motion.div>
                            )}
                            
                            {currentStep === 3 && (
                              <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                              >
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                  <Info className="h-5 w-5 text-blue-600" />
                                  Additional Information
                                </h3>
                                
                                <FormField
                                  control={form.control}
                                  name="hearAboutUs"
                                  rules={{ required: "Please tell us how you heard about us" }}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>How did you hear about us?</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select an option" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {HEAR_ABOUT_OPTIONS.map((option) => (
                                            <SelectItem key={option} value={option}>
                                              {option}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                
                                <FormField
                                  control={form.control}
                                  name="specialNeeds"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Special Requirements (Optional)</FormLabel>
                                      <FormControl>
                                        <Textarea 
                                          placeholder="Accessibility requirements, dietary restrictions, or other needs"
                                          className="resize-none"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormDescription>
                                        We strive to accommodate all attendees
                                      </FormDescription>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                
                                <Alert>
                                  <Info className="h-4 w-4" />
                                  <AlertTitle>Privacy Notice</AlertTitle>
                                  <AlertDescription className="text-sm">
                                    Your information will only be used for event coordination and will not be shared with third parties without your consent.
                                  </AlertDescription>
                                </Alert>
                              </motion.div>
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
                              <Button type="button" onClick={nextStep}>
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
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}