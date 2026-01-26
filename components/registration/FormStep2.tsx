// components/registration/FormStep2.tsx
"use client"

import { motion } from 'framer-motion'
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription 
} from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
import { Target } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

const INTEREST_CATEGORIES = [
  'Digital Infrastructure', 
  'Power Infrastructure', 
  'Smart City Solutions',
  'Transport Infrastructure', 
  'Waste and Environmental Management and Infrastructure',
  'Water Management and Infrastructure'
]

export default function FormStep2() {
  const form = useFormContext()
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Areas of Interest</h3>
        <p className="text-gray-600 mt-1">
          Select the sectors you're interested in. This helps us tailor your conference experience.
        </p>
      </div>
      
      <FormField
        control={form.control}
        name="interests"
        render={() => (
          <FormItem>
            <FormLabel className="text-base font-medium">
              Conference Tracks
              <span className="text-red-500 ml-1">*</span>
            </FormLabel>
            <FormDescription className="mb-4">
              Select at least one area of interest. Choose multiple if applicable.
            </FormDescription>
            
            <div className="space-y-4">
              {INTEREST_CATEGORIES.map((interest) => (
                <FormField
                  key={interest}
                  control={form.control}
                  name="interests"
                  render={({ field }) => {
                    return (
                      <div 
                        key={interest}
                        className={`
                          flex items-start space-x-3 p-4 rounded-lg border transition-all duration-200
                          ${field.value?.includes(interest) 
                            ? 'border-blue-300 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }
                        `}
                      >
                        <FormControl>
                          <Checkbox
                            className="mt-1 h-5 w-5 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
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
                        <div className="flex-1">
                          <FormLabel className="font-medium text-gray-900 cursor-pointer">
                            {interest}
                          </FormLabel>
                          {interest === 'Digital Infrastructure' && (
                            <p className="text-sm text-gray-500 mt-1">
                              Broadband, data centers, telecom infrastructure
                            </p>
                          )}
                          {interest === 'Power Infrastructure' && (
                            <p className="text-sm text-gray-500 mt-1">
                              Renewable energy, grid modernization, power plants
                            </p>
                          )}
                          {interest === 'Smart City Solutions' && (
                            <p className="text-sm text-gray-500 mt-1">
                              IoT, smart mobility, urban digital transformation
                            </p>
                          )}
                          {interest === 'Transport Infrastructure' && (
                            <p className="text-sm text-gray-500 mt-1">
                              Roads, railways, airports, ports
                            </p>
                          )}
                        </div>
                        {field.value?.includes(interest) && (
                          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                        )}
                      </div>
                    )
                  }}
                />
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-amber-600" />
                <p className="text-sm font-medium text-amber-800">Tip</p>
              </div>
              <p className="text-sm text-amber-700 mt-1">
                Your selections will help us match you with relevant sessions and networking opportunities.
              </p>
            </div>
          </FormItem>
        )}
      />
    </motion.div>
  )
}