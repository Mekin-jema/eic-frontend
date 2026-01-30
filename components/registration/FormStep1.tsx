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
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
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
        <h3 className="text-xl font-semibold ">Personal Information</h3>
        <p className="text-[#94A3B8] mt-1">Enter your contact details and professional information</p>
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
                <span className="text-[#E11D2D]">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="John" 
                  {...field} 
                  className="h-11 border-[#94A3B8] focus-visible:border-[#1F8A5B] focus-visible:ring-[#1F8A5B]/30"
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
                <span className="text-[#E11D2D]">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Doe" 
                  {...field} 
                  className="h-11 border-[#94A3B8] focus-visible:border-[#1F8A5B] focus-visible:ring-[#1F8A5B]/30"
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
              <span className="text-[#E11D2D]">*</span>
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="john.doe@company.com" 
                type="email" 
                {...field} 
                className="h-11 border-[#94A3B8] focus-visible:border-[#1F8A5B] focus-visible:ring-[#1F8A5B]/30"
              />
            </FormControl>
            <FormDescription className="text-[#94A3B8]">
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
                <span className="text-[#E11D2D]">*</span>
              </FormLabel>
              <FormControl>
                <div className="h-11">
                  <PhoneInput
                    placeholder="የስልክ ቁጥር ያስገቡ"
                    defaultCountry="ET"
                    value={field.value}
                    onChange={(value) => field.onChange(value ?? '')}
                    className="react-phone-input"
                    numberInputProps={{
                      className:
                        'h-11 w-full rounded-md border border-[#94A3B8] bg-background px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1F8A5B]/30 focus-visible:border-[#1F8A5B] disabled:cursor-not-allowed disabled:opacity-50',
                    }}
                  />
                </div>
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
                <span className="text-[#E11D2D]">*</span>
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
                        borderColor: '#94A3B8',
                        boxShadow: 'none',
                        '&:hover': {
                          borderColor: '#1F8A5B',
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
                <span className="text-[#E11D2D]">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="e.g., Investor, Analyst, Director" 
                  {...field} 
                  className="h-11 border-[#94A3B8] focus-visible:border-[#1F8A5B] focus-visible:ring-[#1F8A5B]/30"
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
                  className="h-11 border-[#94A3B8] focus-visible:border-[#1F8A5B] focus-visible:ring-[#1F8A5B]/30"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  )
}