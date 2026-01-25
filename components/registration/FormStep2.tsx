// components/registration/FormStep2.tsx
"use client"

import { motion } from 'framer-motion'
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Users, Info } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

const INTEREST_CATEGORIES = [
     'Digital Infrastructure', 'Power Infrastructure', 'Smart City Solutions',
    'Transport Infrastructure', 'Waste and Environmental Management and Infrastructure',
    'Water Management and Infrastructure'
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

export default function FormStep2() {
  const form = useFormContext()
  
  return (
    <motion.div
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
                                      (value: string) => value !== interest
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

      <FormField
        control={form.control}
        name="hearAboutUs"
        rules={{ required: "Please tell us how you heard about us" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>How did you hear about us? <span className="text-red-500">*</span></FormLabel>
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
  )
}