// components/registration/EventDetailsCard.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Calendar, Building, Users, Info, Sparkles, CheckCircle2 } from 'lucide-react'

export default function EventDetailsCard() {
  return (
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
  )
}