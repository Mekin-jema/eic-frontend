// components/registration/FormStep1.tsx
"use client"

import { motion } from 'framer-motion'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { User } from 'lucide-react'
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
              <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
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
              <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
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
            <FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
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
              <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
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
              <FormLabel>Country <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <div>
                  <ReactSelect
                    instanceId="country-select"
                    options={countryOptions}
                    placeholder="Select country"
                    isClearable
                    isSearchable
                    value={countryOptions.find((o: any) => o.label === field.value) ?? null}
                    onChange={(option: any) => field.onChange(option?.label ?? "")}
                  />
                </div>
              </FormControl>
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
              <FormLabel>Occupation <span className="text-red-500">*</span></FormLabel>
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
              <FormLabel>Organization <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  )
}