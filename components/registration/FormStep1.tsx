// components/registration/FormStep1.tsx
"use client"

import { motion } from 'framer-motion'
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription 
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { useMemo } from 'react'
import ReactSelect from 'react-select'
import countryList from 'react-select-country-list'

export default function FormStep1() {
  const form = useFormContext()
  const countryOptions = useMemo(() => countryList().getData(), [])
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
        <p className="text-gray-600 mt-1">Enter your contact details and professional information</p>
      </div>
      
      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                First Name 
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="John" 
                  {...field} 
                  className="h-11"
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                Last Name 
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Doe" 
                  {...field} 
                  className="h-11"
                />
              </FormControl>
     
            </FormItem>
          )}
        />
      </div>
      
      {/* Email */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Email Address 
              <span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="john.doe@company.com" 
                type="email" 
                {...field} 
                className="h-11"
              />
            </FormControl>
            <FormDescription>
              We'll send your confirmation and tickets to this email
            </FormDescription>
          </FormItem>
        )}
      />
      
      {/* Phone & Country */}
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                Phone Number 
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="+251 911 234 567" 
                  {...field} 
                  className="h-11"
                />
              </FormControl>
           
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                Country 
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="react-select-wrapper">
                  <ReactSelect
                    instanceId="country-select"
                    options={countryOptions}
                    placeholder="Select your country"
                    isClearable
                    isSearchable
                    value={countryOptions.find((o: any) => o.label === field.value) ?? null}
                    onChange={(option: any) => field.onChange(option?.label ?? "")}
                    classNamePrefix="react-select"
                    className="h-11"
                    styles={{
                      control: (base) => ({
                        ...base,
                        minHeight: '44px',
                        borderRadius: '8px',
                        borderColor: '#d1d5db',
                        '&:hover': {
                          borderColor: '#3b82f6',
                        },
                      }),
                    }}
                  />
                </div>
                  </FormControl>
            </FormItem>
          )}
        />
      </div>
      
      {/* Occupation & Organization */}
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                Occupation 
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="e.g., Investor, Analyst, Director" 
                  {...field} 
                  className="h-11"
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-1">
                Organization
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Your company or institution" 
                  {...field} 
                  className="h-11"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  )
}