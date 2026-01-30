// components/registration/EventDetailsCard.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Calendar, Building, Users,  Sparkles, CheckCircle2 } from 'lucide-react'

export default function EventDetailsCard() {
  return (
    <Card className="sticky top-24 border-[#1E2B4D] shadow-lg">
      <CardHeader className="bg-linear-to-r from-[#113625] to-[#1F895A]">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-[#D7B15A]" />
          <span className="text-white">Event Details</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-[#1F8A5B]" />
          <div>
            <p className="font-semibold text-[#D7B15A]">Date</p>
            <p className="text-sm text-[#D7B15A]">26-27 March 2026</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Building className="h-5 w-5 text-[#1F8A5B]" />
          <div>
            <p className="font-semibold text-[#0A1D47]">Venue</p>
            <p className="text-sm text-[#D7B15A]">Ethiopian Skylight Hotel</p>
            <p className="text-xs text-[#D7B15A]">Addis Ababa, Ethiopia</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-[#1F8A5B]" />
          <div>
            <p className="font-semibold text-[#D7B15A]">Attendees</p>
            <p className="text-sm text-[#D7B15A]">500+ Expected</p>
          </div>
        </div>
        
        <Separator />
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="benefits">
            <AccordionTrigger className="text-sm font-medium text-[#0A1D47]">
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
                  <CheckCircle2 className="h-3 w-3 text-[#1F8A5B]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
    
      </CardContent>
    </Card>
  )
}