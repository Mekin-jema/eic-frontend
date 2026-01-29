// components/registration/FormStep3.tsx
"use client"

import { motion } from 'framer-motion'
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription 
} from '@/components/ui/form'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { 
  Upload, 
  FileText, 
  Shield 
} from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { Button } from '../ui/button'

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

export default function FormStep3() {
  const form = useFormContext()
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#1F8A5B]">Additional Information</h3>
        <p className="text-[#6B7280] mt-1">
          Help us improve future events and verify your registration
        </p>
      </div>
      
      {/* How did you hear about us */}
      <FormField
        control={form.control}
        name="hearAboutUs"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">
              How did you hear about Invest Ethiopia 2026?
              <span className="text-[#E11D2D] ml-1">*</span>
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-11 border-[#D7B15A] focus:ring-[#1F8A5B]/30">
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
          </FormItem>
        )}
      />

      {/* Visa Requirement */}
      <FormField
        control={form.control}
        name="needsVisa"
        render={({ field }) => (
          <FormItem>
            <div className="flex items-start gap-3">
              <FormControl>
                <Checkbox
                  checked={!!field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                  className="mt-1 h-5 w-5 border-2 border-[#D7B15A] data-[state=checked]:bg-[#1F8A5B] data-[state=checked]:text-white"
                />
              </FormControl>
              <div className="space-y-1">
                <FormLabel className="text-base font-medium">
                  I need a visa to attend
                </FormLabel>
                <FormDescription className="text-[#94A3B8]">
                  This helps us plan visa support for international attendees.
                </FormDescription>
              </div>
            </div>
          </FormItem>
        )}
      />
      
      {/* Special Needs */}
      <FormField
        control={form.control}
        name="specialNeeds"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">
              Special Requirements (Optional)
            </FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Please let us know if you have any accessibility requirements, dietary restrictions, or other special needs..."
                className="resize-none min-h-24 border-[#D7B15A] focus-visible:border-[#1F8A5B] focus-visible:ring-[#1F8A5B]/30"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      
      {/* Document Upload */}
      <FormField
        control={form.control}
        name="proofDocument"
        render={({ field }) => (
          <FormItem>
            <div className="space-y-4">
              <div>
                <FormLabel className="text-base font-medium">
                  Verification Document
                  <span className="text-[#E11D2D] ml-1">*</span>
                </FormLabel>
                <FormDescription>
   Please upload your official business license or company registration certificate. 
    This 
                </FormDescription>
              </div>
              
              <div 
                className={`
                  border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200
                  ${field.value 
                    ? 'border-[#1F8A5B] bg-[#F7F1E1]' 
                    : 'border-[#D7B15A] hover:border-[#1F8A5B] hover:bg-[#F7F1E1]/70'
                  }
                `}
                onClick={() => document.getElementById('file-upload')?.click()}
                onDragOver={(e) => {
                  e.preventDefault()
                  e.currentTarget.classList.add('border-[#1F8A5B]', 'bg-[#F7F1E1]')
                }}
                onDragLeave={(e) => {
                  e.preventDefault()
                  if (!field.value) {
                    e.currentTarget.classList.remove('border-[#1F8A5B]', 'bg-[#F7F1E1]')
                  }
                }}
                onDrop={(e) => {
                  e.preventDefault()
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    field.onChange(e.dataTransfer.files[0])
                  }
                }}
              >
                <Input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.webp"
                  className="hidden"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
                
                {field.value ? (
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F7F1E1] rounded-full">
                      <FileText className="h-8 w-8 text-[#1F8A5B]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#222222]">{field.value.name}</p>
                      <p className="text-sm text-[#6B7280] mt-1">
                        {(field.value.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        field.onChange(undefined)
                      }}
                      className="border-[#D7B15A] text-[#B26A00] hover:bg-[#F7F1E1]"
                    >
                      Remove File
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F7F1E1] rounded-full mb-4">
                      <Upload className="h-8 w-8 text-[#1F8A5B]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#222222] mb-2">
                        Drag & drop or click to upload
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        PDF, JPG, PNG, WEBP • Max 5MB
                      </p>
                    </div>
                  </>
                )}
              </div>
              
          <div className="space-y-2">
  <p className="text-sm text-[#6B7280]">
    Please upload your official business license or company registration certificate. 
    This document will be used to verify that your company is a legally registered and legitimate organization.
  </p>
</div>
            </div>
          </FormItem>
        )}
      />
      
      {/* Privacy Notice */}
      <Alert className="bg-[#0D261A] border-[#D7B15A]">
        <Shield className="h-5 w-5 text-[#D7B15A]" />
        <AlertTitle className="text-[#F7F1E1]">Privacy & Data Protection</AlertTitle>
        <AlertDescription className="text-[#F7F1E1]/80">
          <p className="text-sm">
            Your information is securely stored and will only be used for event coordination purposes. 
            We do not share your data with third parties without your explicit consent.
          </p>
          <p className="text-sm mt-2 font-medium">
            By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
          </p>
        </AlertDescription>
      </Alert>
    </motion.div>
  )
}