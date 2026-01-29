"use client"

import { Card } from "@/components/ui/card"

export default function ThemeSection() {
  return (
    <section className="bg-[#0D261A] py-20 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">

        {/* Left Image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <img
            src="/ethiopian_is_ready_for.jpg"
            alt="Ethiopia Flag Graphic"
            className="w-64 md:w-80 object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="relative w-full md:w-1/2">

          {/* Floating Title */}
          <div className="absolute -top-6 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 
                          bg-[#b07000] px-6 py-3 shadow-lg">
            <h2 className="text-sm md:text-base font-bold tracking-wider text-white uppercase">
              This Year's Theme
            </h2>
          </div>

          {/* Card */}
          <Card className="border-none bg-[#0D261A] p-8 pt-14 shadow-2xl rounded-sm">
            <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-gray-300 text-center md:text-left">
              <p>
                This year's Invest in Ethiopia Forum theme is titled
                <span className="text-white font-normal"> “Ethiopia Ready for Business” </span>
                which reflects the country’s commitment to building a competitive, predictable,
                and welcoming environment for investors.
              </p>
              <p>
                It signals Ethiopia’s shift toward targeted investment attraction,
                robust regulatory reforms, and a more integrated approach to facilitating
                investments that drive exports, create jobs, and advance economic transformation.
              </p>
            </div>
          </Card>
        </div>

      </div>
    </section>
  )
}
