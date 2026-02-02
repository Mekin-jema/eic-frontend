"use client";

import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { User } from "lucide-react";
import type { FormValues } from "@/schema/registration.schema";

const FormStep1 = () => {
  const { control } = useFormContext<FormValues>();

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 text-[#1F8A5B] font-bold uppercase text-xs tracking-[0.2em]">
        <User className="h-4 w-4" />
        <span>Personal Details</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-2">
          <FormField
            control={control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0A1D47]">First Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Abebe"
                    className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus-visible:ring-[#1F8A5B]/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0A1D47]">Last Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Bikila"
                    className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus-visible:ring-[#1F8A5B]/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0A1D47]">Email Address *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus-visible:ring-[#1F8A5B]/30"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0A1D47]">Phone Number *</FormLabel>
                <FormControl>
                  <PhoneInput
                    country={field.value ? undefined : "ET"}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="+251 --- --- ---"
                    className="bg-white border border-[#1E2B4D]/30 rounded-md px-3 py-2"
                    inputClassName="bg-transparent text-[#0A1D47] placeholder:text-[#94A3B8] outline-none w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default FormStep1;
