"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BellRing,
  FileText,
  FileUp,
  Mail,
  MailCheck,
  Phone,
  Inbox,
} from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import type { FormValues } from "@/schema/registration.schema";

const FormStep3 = () => {
  const { control, formState } = useFormContext<FormValues>();
  const needsVisa = useWatch({ control, name: "needsVisa" });

  const items = [
    {
      id: "day1" as const,
      label: "Day 1 - March 26, 2026",
      description: "Opening Ceremony, Keynote Speeches, Investment Opportunities Panel",
    },
    {
      id: "day2" as const,
      label: "Day 2 - March 27, 2026",
      description: "Sector-Specific Forums, Networking Sessions, Business Matchmaking",
    },
    {
      id: "both" as const,
      label: "Both Days",
      description: "Full forum experience with all sessions and events",
    },
  ];

  const handleFileChange = (
    _fieldName: keyof FormValues,
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: File | undefined) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <section className="space-y-12">
      <section className="bg-[#F7F1E1] p-8 rounded-lg border border-[#1E2B4D]/20">
        <h2 className="text-xl font-semibold mb-4 text-[#0A1D47]">Attendance Details</h2>
        <hr className="border-[#1E2B4D]/20 mb-6" />

        <FormField
          control={control}
          name="attendance"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormLabel className="text-[#0A1D47]">Which day will you attend? *</FormLabel>
              <RadioGroup
                value={field.value ?? ""}
                onValueChange={field.onChange}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {items.map((item) => {
                  const isActive = field.value === item.id;
                  return (
                    <FormItem key={item.id}>
                      <FormLabel
                        className={`
                          flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition-all
                          ${
                            isActive
                              ? "border-[#1F8A5B] bg-[#1F8A5B]/10"
                              : "border-[#1E2B4D]/20 hover:bg-[#F7F1E1]"
                          }
                        `}
                      >
                        <FormControl>
                          <RadioGroupItem value={item.id} className="mt-1 border-[#1E2B4D]/40" />
                        </FormControl>
                        <div className="space-y-1">
                          <p className="text-base font-medium text-[#0A1D47]">{item.label}</p>
                          <p className="text-xs text-[#94A3B8]">{item.description}</p>
                        </div>
                      </FormLabel>
                    </FormItem>
                  );
                })}
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator className="bg-[#1E2B4D]/20 my-8" />

        <div className="space-y-4">
          <FormField
            control={control}
            name="siteVisit"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-[#0A1D47] italic">
                  Do you require assistance with the visa process? *
                </FormLabel>
                <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6">
                  {[
                    "yes",
                    "no",
                  ].map((val) => (
                    <FormItem key={val} className="flex items-center space-x-2">
                      <FormControl>
                        <FormLabel
                          htmlFor={`s-${val}`}
                          className={`
                            flex cursor-pointer items-center gap-3 rounded-lg border px-6 py-3 transition
                            ${
                              field.value === val
                                ? "border-[#1F8A5B] bg-[#1F8A5B]/10"
                                : "border-[#1E2B4D]/20 hover:bg-[#F7F1E1]"
                            }
                          `}
                        >
                          <RadioGroupItem id={`s-${val}`} value={val} />
                          <span className="capitalize">{val}</span>
                        </FormLabel>
                      </FormControl>
                    </FormItem>
                  ))}
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2 text-[#1F8A5B] font-bold uppercase text-xs tracking-[0.2em]">
          <FileText className="h-4 w-4" />
          <span>Visa Assistance</span>
        </div>
        <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#1E2B4D]/20">
          <FormField
            control={control}
            name="needsVisa"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-[#0A1D47] italic">
                  Do you require an entry visa support letter? *
                </FormLabel>
                <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-10 pt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="v-yes" />
                    <FormLabel htmlFor="v-yes" className="text-[#0A1D47]">Yes</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="v-no" />
                    <FormLabel htmlFor="v-no" className="text-[#0A1D47]">No</FormLabel>
                  </div>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />

          {needsVisa === "yes" && (
            <div className="space-y-6 mt-6 animate-in fade-in slide-in-from-top-4">
              <div className="space-y-2 md:col-span-2">
                <FormField
                  control={control}
                  name="passportCopy"
                  render={({ field: { onChange, value, ...field } }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A1D47]">
                        Passport Copy (PDF/JPG, Max 5MB)
                      </FormLabel>
                      <div className="flex items-center justify-center border-2 border-dashed border-[#1E2B4D]/30 rounded-xl p-4 hover:border-[#1F8A5B]/40 transition-all relative bg-white">
                        <FileUp className="w-5 h-5 mr-2 text-[#1F8A5B]" />
                        <span className="text-sm text-[#94A3B8]">
                          {value ? value.name : "Click to upload passport copy"}
                        </span>
                        <Input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange("passportCopy", e, onChange)}
                          {...field}
                        />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-[#1F8A5B]/5 border border-[#1F8A5B]/20">
                <MailCheck className="w-6 h-6 text-[#1F8A5B] shrink-0" />
                <div>
                  <h5 className="text-sm font-bold text-[#1F8A5B]">Official Invitation Letter</h5>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    An official letter will be sent to your email after registration approval for your visa application process.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="space-y-4">
        <h1 className="text-xl font-bold text-[#0A1D47]">Additional Information</h1>
        <div className="space-y-2">
          <FormField
            control={control}
            name="specialRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-[#0A1D47]">Special Requirements (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please specify any special requirements (e.g., dietary restrictions, accessibility needs, language interpretation, etc.)"
                    className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] min-h-25 focus-visible:ring-[#1F8A5B]/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p className="text-sm text-[#94A3B8]">Let us know if you have any specific needs to ensure a comfortable experience at the forum</p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-[#1F8A5B] font-bold uppercase text-xs tracking-[0.2em]">
          <BellRing className="h-4 w-4" />
          <span>Communication Preference</span>
        </div>

        <h5 className="text-[#0A1D47]">How would you like to receive event updates and communication? *</h5>

        <FormField
          control={control}
          name="communicationPreference"
          render={({ field }) => (
            <FormItem>
              <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-1 gap-4">
                <FormItem>
                  <FormControl>
                    <FormLabel
                      htmlFor="c-email"
                      className="flex flex-col cursor-pointer gap-2 p-4 border border-[#1E2B4D]/20 rounded-xl hover:bg-[#F7F1E1] transition-all items-start"
                    >
                      <div className="flex items-start gap-4">
                        <RadioGroupItem value="email" id="c-email" className="mt-1" />
                        <Mail className="h-4 w-4 text-[#94A3B8] mt-1" />
                        <span className="text-[#0A1D47] font-medium">Email</span>
                      </div>
                      <span className="text-[#94A3B8] text-sm ml-7">
                        Receive all updates and communication via email
                      </span>
                    </FormLabel>
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormControl>
                    <FormLabel
                      htmlFor="c-phone"
                      className="flex flex-col cursor-pointer gap-2 p-4 border border-[#1E2B4D]/20 rounded-xl hover:bg-[#F7F1E1] transition-all items-start"
                    >
                      <div className="flex items-start gap-4">
                        <RadioGroupItem value="phone" id="c-phone" className="mt-1" />
                        <Phone className="h-4 w-4 text-[#94A3B8] mt-1" />
                        <span className="text-[#0A1D47] font-medium">Phone / SMS</span>
                      </div>
                      <span className="text-[#94A3B8] text-sm ml-7">
                        Receive important updates via phone call or messages
                      </span>
                    </FormLabel>
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormControl>
                    <FormLabel
                      htmlFor="c-both"
                      className="flex flex-col cursor-pointer gap-2 p-4 border border-[#1F8A5B]/30 bg-[#1F8A5B]/5 rounded-xl transition-all items-start"
                    >
                      <div className="flex items-start gap-4">
                        <RadioGroupItem value="both" id="c-both" className="mt-1" />
                        <Inbox className="h-4 w-4 text-[#1F8A5B] mt-1" />
                        <span className="text-[#1F8A5B] font-medium">Both Email and Phone</span>
                      </div>
                      <span className="text-[#1F8A5B] text-sm ml-7">
                        Receive updates via both email and phone/SMS
                      </span>
                    </FormLabel>
                  </FormControl>
                </FormItem>
              </RadioGroup>
              <FormMessage />
            </FormItem>
          )}
        />
      </section>
      <FormField
        control={control}
        name="specialRequirements"
        render={({ field }) => (
          <FormItem>
            <div className="mb-4">
              <FormLabel
                htmlFor="comments"
                className="block mb-2 text-[#0A1D47] font-medium"
              >
                Additional Comments or Questions (Optional)
              </FormLabel>
              <FormControl>
                <Textarea
                  id="comments"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Feel free to share any additional comments, questions, or information you'd like us to know..."
                  className="w-full p-3 rounded-md bg-white border border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1F8A5B]/30 resize-none"
                  rows={6}
                />
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />


      <section className="pt-10">
        <Card className="bg-white border-[#1E2B4D]/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#0A1D47]">Registration Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg bg-[#F7F1E1] border border-[#1E2B4D]/20 p-6">
              <div className="flex flex-col items-start gap-2 mb-4 text-[#1F8A5B]">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <h3 className="font-semibold text-[#1F8A5B]">Review Your Information</h3>
                </div>
                <p className="text-[#94A3B8] text-sm">
                  Please review all the information you've provided before submitting. You can scroll up to make any necessary changes.
                </p>
              </div>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <dt className="text-[#94A3B8]"> Registration Status:</dt>
                  <dd>
                    <Badge className="bg-[#1F8A5B]/10 text-[#1F8A5B] border-[#1F8A5B]/20">
                      {formState.isValid ? "Ready to Submit" : "Needs Attention"}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#94A3B8]">Event:</dt>
                  <dd className="font-medium text-right text-[#0A1D47]">Invest in Ethiopia 2026</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#94A3B8]">Venue:</dt>
                  <dd className="font-medium text-[#0A1D47]">Skylight Hotel, Addis Ababa</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#94A3B8]">Form Status:</dt>
                  <dd className="font-medium text-[#0A1D47]">
                    {formState.isValid ? "✓ All fields valid" : "✗ Some fields need attention"}
                  </dd>
                </div>
              </dl>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full h-14 text-lg font-bold bg-linear-to-r from-[#1F8A5B] to-[#D7B15A] hover:from-[#18704A] hover:to-[#C9A548] text-white border-none transition-all active:scale-95"
              disabled={!formState.isValid || formState.isSubmitting}
            >
              {formState.isSubmitting ? "Submitting..." : "Complete Registration"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-xs text-center text-[#94A3B8]">
              By submitting, you confirm all provided data is accurate.
            </p>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
};

export default FormStep3;
