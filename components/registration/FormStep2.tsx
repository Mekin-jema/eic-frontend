// components/registration/FormStep2.tsx
"use client"

import { motion } from 'framer-motion'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Users } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

const INTEREST_CATEGORIES = [
     'Digital Infrastructure', 'Power Infrastructure', 'Smart City Solutions',
    'Transport Infrastructure', 'Waste and Environmental Management and Infrastructure',
    'Water Management and Infrastructure'
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

      {/* Step 2 only handles interests; other fields moved to Step 3 */}
    </motion.div>
  )
}