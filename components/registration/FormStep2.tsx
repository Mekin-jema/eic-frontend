"use client";

import { useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ReactSelect from "react-select";
import countryList from "react-select-country-list";
import { Briefcase, FileUp } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import type { FormValues } from "@/schema/registration.schema";

const FormStep2 = () => {
  const { control } = useFormContext<FormValues>();
  const category = useWatch({ control, name: "category" });
  const hasExistingCompany = useWatch({ control, name: "hasExistingCompany" });
  const isInvestor = category === "inv";
  const isOtherCategory = category === "oth";
  const countryOptions = useMemo(() => countryList().getData(), []);

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
    <section className="space-y-6">
      <div className="flex items-center gap-2 text-[#1F8A5B] font-bold uppercase text-xs tracking-[0.2em]">
        <Briefcase className="h-4 w-4" />
        <span>Professional Background</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="space-y-2 md:col-span-2">
          <FormField
            control={control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0A1D47]">Organization / Company Name *</FormLabel>
                <FormControl>
                  <Input className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus-visible:ring-[#1F8A5B]/30" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <FormField
            control={control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0A1D47]">Job Title / Position *</FormLabel>
                <FormControl>
                  <Input className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus-visible:ring-[#1F8A5B]/30" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2">
          <FormField
            control={control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0A1D47]">Country *</FormLabel>
                <FormControl>
                  <ReactSelect
                    options={countryOptions}
                    value={countryOptions.find((item) => item.value === field.value) || null}
                    onChange={(option) => field.onChange(option?.value ?? "")}
                    placeholder="-- Select Country --"
                    isSearchable
                    classNamePrefix="react-select"
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(30, 43, 77, 0.3)",
                        color: "#0A1D47",
                        minHeight: "42px",
                        boxShadow: "none",
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(30, 43, 77, 0.2)",
                        zIndex: 50,
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected
                          ? "rgba(31, 138, 91, 0.15)"
                          : state.isFocused
                            ? "rgba(215, 177, 90, 0.2)"
                            : "transparent",
                        color: "#0A1D47",
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "#0A1D47",
                      }),
                      input: (base) => ({
                        ...base,
                        color: "#0A1D47",
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "#94A3B8",
                      }),
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <section className="w-full space-y-4">
        <div className="flex items-center gap-2 text-[#1F8A5B] font-bold uppercase text-xs tracking-[0.2em]">
          <Briefcase className="h-4 w-4" />
          <span>Registrant Category</span>
        </div>

        <div className="space-y-2 w-full">
          <FormField
            control={control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0A1D47]" />
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full bg-white border-[#1E2B4D]/30 text-[#0A1D47]">
                      <SelectValue placeholder="-- Select Your Category --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="w-full bg-white border-[#1E2B4D]/20 text-[#0A1D47]">
                    <SelectItem value="inv">Investor</SelectItem>
                    <SelectItem value="gov">Government Official</SelectItem>
                    <SelectItem value="dip">Diplomat / Development Partner</SelectItem>
                    <SelectItem value="med">Media</SelectItem>
                    <SelectItem value="aca">Academia/Research Institution</SelectItem>
                    <SelectItem value="con">Business Consultant</SelectItem>
                    <SelectItem value="oth">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {isOtherCategory && (
          <div className="space-y-2 w-full md:col-span-2 animate-in fade-in slide-in-from-top-2">
            <FormField
              control={control}
              name="otherCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#0A1D47]">Please specify *</FormLabel>
                  <FormControl>
                    <Input className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus-visible:ring-[#1F8A5B]/30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {isInvestor && (
          <div className="space-y-2 w-full md:col-span-2 animate-in fade-in slide-in-from-top-2 mt-4">
            <FormField
              control={control}
              name="sectorInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#0A1D47]">
                    Institution Sector Interest *
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-white border-[#1E2B4D]/30 text-[#0A1D47]">
                        <SelectValue placeholder="-- Select Sector --" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full bg-white border-[#1E2B4D]/20 text-[#0A1D47]">
                      <SelectItem value="agri">Agriculture and Agribusiness</SelectItem>
                      <SelectItem value="manu">Manufacturing and Industry</SelectItem>
                      <SelectItem value="tech">Technology and Innovation</SelectItem>
                      <SelectItem value="energy">Energy and Renewable Resources</SelectItem>
                      <SelectItem value="infra">Infrastructure and Construction</SelectItem>
                      <SelectItem value="tour">Tourism and Hospitality</SelectItem>
                      <SelectItem value="health">Healthcare and Pharmaceuticals</SelectItem>
                      <SelectItem value="edu">Education and Training</SelectItem>
                      <SelectItem value="fin">Finance and Banking</SelectItem>
                      <SelectItem value="mine">Mining and Natural Resources</SelectItem>
                      <SelectItem value="prop">Real Estate and Property Development</SelectItem>
                      <SelectItem value="logi">Transportation and Logistics</SelectItem>
                      <SelectItem value="tele">Telecommunications</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <FormField
            control={control}
            name="hasExistingCompany"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-3">
                <FormLabel className="text-[#0A1D47]">
                  Do you have an existing company registered in Ethiopia?
                </FormLabel>
                <FormControl>
                  <label
                    htmlFor="existing-yes"
                    className="flex items-center gap-3 rounded-lg border border-[#1E2B4D]/30 bg-white px-4 py-3 text-[#0A1D47] shadow-sm hover:border-[#1F8A5B]/60"
                  >
                    <Checkbox
                      id="existing-yes"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-5 w-5 border-[#1E2B4D]/60 data-[state=checked]:bg-[#1F8A5B] data-[state=checked]:border-[#1F8A5B]"
                    />
                    <span className="text-sm font-medium">Yes</span>
                  </label>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {hasExistingCompany && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-[#F7F1E1] border border-[#1E2B4D]/20 animate-in zoom-in-95">
            <div className="space-y-2">
              <FormField
                control={control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0A1D47]">Company Name *</FormLabel>
                    <FormControl>
                      <Input className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus-visible:ring-[#1F8A5B]/30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={control}
                name="companySector"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0A1D47]">Company Sector *</FormLabel>
                    <FormControl>
                      <Input className="bg-white border-[#1E2B4D]/30 text-[#0A1D47] placeholder:text-[#94A3B8] focus-visible:ring-[#1F8A5B]/30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <FormField
                control={control}
                name="businessLicense"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel className="text-[#0A1D47]">
                      Business License or TIN Certificate (PDF/JPG, Max 5MB)
                    </FormLabel>
                    <div className="flex items-center justify-center border-2 border-dashed border-[#1E2B4D]/30 rounded-xl p-4 hover:border-[#1F8A5B]/40 transition-all relative bg-white">
                      <FileUp className="w-5 h-5 mr-2 text-[#1F8A5B]" />
                      <span className="text-sm text-[#94A3B8]">
                        {value ? value.name : "Click to upload document"}
                      </span>
                      <Input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("businessLicense", e, onChange)}
                        {...field}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default FormStep2;
