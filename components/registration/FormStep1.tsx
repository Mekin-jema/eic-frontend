import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileUp, ChevronRight, Globe, Building, Briefcase, User } from "lucide-react";

const InvestEthiopiaRegistration = () => {
  return (
    <div className="min-h-screen bg-zinc-950 p-4 md:p-12 text-zinc-100">
      <Card className="max-w-4xl mx-auto bg-zinc-900 border-zinc-800 shadow-2xl">
        <CardHeader className="text-center space-y-2 pb-8 border-b border-zinc-800">
          <CardTitle className="text-3xl font-bold tracking-tight text-white">
            Invest in Ethiopia 2026
          </CardTitle>
          <CardDescription className="text-zinc-400 text-lg">
            High-Level Business Forum Registration
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-8 space-y-10">
          {/* Section: Personal Details (Photo 3/4) */}
          <div className="space-y-6">
            <h3 className="text-emerald-500 font-semibold uppercase text-xs tracking-widest flex items-center gap-2">
              <User className="w-4 h-4" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name *</Label>
                <Input id="first-name" placeholder="Enter your first name" className="bg-zinc-800 border-zinc-700 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name *</Label>
                <Input id="last-name" placeholder="Enter your last name" className="bg-zinc-800 border-zinc-700 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="email@example.com" className="bg-zinc-800 border-zinc-700 focus:ring-emerald-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+251 --- --- ---" className="bg-zinc-800 border-zinc-700 focus:ring-emerald-500" />
              </div>
            </div>
          </div>

          {/* Section: Professional Details (Photo 2) */}
          <div className="space-y-6">
            <h3 className="text-emerald-500 font-semibold uppercase text-xs tracking-widest flex items-center gap-2">
              <Building className="w-4 h-4" /> Professional Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="org">Organization / Company *</Label>
                <Input id="org" placeholder="Company Name" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job">Job Title *</Label>
                <Input id="job" placeholder="Your Designation" className="bg-zinc-800 border-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label>Registrant Category *</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="investor">International Investor</SelectItem>
                    <SelectItem value="domestic">Domestic Investor</SelectItem>
                    <SelectItem value="govt">Government Representative</SelectItem>
                    <SelectItem value="partner">Development Partner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Country of Residence *</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="ethiopia">Ethiopia</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Section: Interests (Photo 5/6) */}
          <div className="space-y-6">
            <h3 className="text-emerald-500 font-semibold uppercase text-xs tracking-widest flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Investment Sector of Interest
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Manufacturing",
                "Agriculture & Agro-processing",
                "ICT & Digital Economy",
                "Mining & Energy",
                "Tourism & Hospitality",
                "Healthcare & Pharma"
              ].map((sector) => (
                <div key={sector} className="flex items-center space-x-3 p-4 rounded-xl border border-zinc-800 bg-zinc-800/30">
                  <Checkbox id={sector} />
                  <label htmlFor={sector} className="text-sm font-medium leading-none cursor-pointer">
                    {sector}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Attendance & Visa (Photo 7/8/10) */}
          <div className="space-y-8 bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800">
            <div className="space-y-4">
              <Label className="text-base font-semibold">Which day(s) will you attend? *</Label>
              <RadioGroup defaultValue="both" className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 p-3 border border-zinc-800 rounded-lg">
                  <RadioGroupItem value="day1" id="d1" />
                  <Label htmlFor="d1">Day 1 - March 15, 2026</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border border-zinc-800 rounded-lg">
                  <RadioGroupItem value="day2" id="d2" />
                  <Label htmlFor="d2">Day 2 - March 16, 2026</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border border-emerald-500/30 bg-emerald-500/5 rounded-lg">
                  <RadioGroupItem value="both" id="dboth" />
                  <Label htmlFor="dboth" className="font-bold text-emerald-400">Both Days (Full Forum)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-base font-semibold">Do you require Visa Assistance? *</Label>
              <RadioGroup defaultValue="no" className="flex gap-8">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="v-yes" />
                  <Label htmlFor="v-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="v-no" />
                  <Label htmlFor="v-no">No</Label>
                </div>
              </RadioGroup>
              
              <div className="mt-4 p-8 border-2 border-dashed border-zinc-700 rounded-2xl bg-zinc-900 flex flex-col items-center gap-3 hover:border-emerald-500/50 transition-colors cursor-pointer">
                <div className="p-3 bg-zinc-800 rounded-full">
                  <FileUp className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Upload Passport Bio-page</p>
                  <p className="text-xs text-zinc-500 mt-1">Maximum file size: 5MB (PDF, JPG, PNG)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Summary (Photo 9) */}
          <div className="bg-zinc-950 border border-emerald-900/20 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest">
              <Globe className="w-4 h-4" /> Forum Logistics
            </div>
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <span className="text-zinc-500">Venue:</span>
              <span className="text-right font-medium text-zinc-200">Ethiopian Skylight Hotel, Addis Ababa</span>
              <span className="text-zinc-500">Dates:</span>
              <span className="text-right font-medium text-zinc-200">March 15 - 16, 2026</span>
              <span className="text-zinc-500">Official Theme:</span>
              <span className="text-right font-medium text-emerald-400 italic">"Invest in Ethiopia: The Land of Origins"</span>
            </div>
          </div>

          {/* Action Area (Photo 1) */}
          <div className="space-y-6 pt-4">
            <div className="flex items-start space-x-3">
              <Checkbox id="consent" className="mt-1" />
              <Label htmlFor="consent" className="text-xs text-zinc-500 leading-normal">
                I agree to the terms and conditions and consent to the processing of my data for the purposes of this forum.
              </Label>
            </div>

            <Button className="w-full py-8 text-xl font-black bg-gradient-to-r from-[#059669] via-[#10b981] to-[#eab308] hover:opacity-90 transition-all text-zinc-950 rounded-2xl shadow-lg shadow-emerald-900/20">
              COMPLETE REGISTRATION
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>

            <p className="text-center text-[10px] text-zinc-700 font-bold tracking-widest uppercase">
              Ethiopian Investment Commission © 2026
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestEthiopiaRegistration;