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
        <h3 className="text-xl font-semibold text-gray-900">Additional Information</h3>
        <p className="text-gray-600 mt-1">
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
              <span className="text-red-500 ml-1">*</span>
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-11">
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
                className="resize-none min-h-24"
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
                  <span className="text-red-500 ml-1">*</span>
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
                    ? 'border-green-300 bg-green-50' 
                    : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                  }
                `}
                onClick={() => document.getElementById('file-upload')?.click()}
                onDragOver={(e) => {
                  e.preventDefault()
                  e.currentTarget.classList.add('border-blue-400', 'bg-blue-50')
                }}
                onDragLeave={(e) => {
                  e.preventDefault()
                  if (!field.value) {
                    e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50')
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                      <FileText className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{field.value.name}</p>
                      <p className="text-sm text-gray-600 mt-1">
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
                    >
                      Remove File
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <Upload className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-2">
                        Drag & drop or click to upload
                      </p>
                      <p className="text-sm text-gray-600">
                        PDF, JPG, PNG, WEBP • Max 5MB
                      </p>
                    </div>
                  </>
                )}
              </div>
              
          <div className="space-y-2">
  <p className="text-sm text-gray-600">
    Please upload your official business license or company registration certificate. 
    This document will be used to verify that your company is a legally registered and legitimate organization.
  </p>
</div>
            </div>
          </FormItem>
        )}
      />
      
      {/* Privacy Notice */}
      <Alert className="bg-blue-50 border-blue-200">
        <Shield className="h-5 w-5 text-blue-600" />
        <AlertTitle className="text-blue-800">Privacy & Data Protection</AlertTitle>
        <AlertDescription className="text-blue-700">
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