'use client'
import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  ChevronRightCircle, 

} from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

// Custom X (Twitter) icon since Lucide's default can vary
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const Footer = () => {
  const mainSections = [
    { label: 'Why Ethiopia', href: '#' },
    { label: 'Incentives', href: '#' },
    { label: 'Grow in Ethiopia', href: '#' },
    { label: 'News and Events', href: '#' },
    { label: 'Publications', href: '#' },
    { label: 'Key Sectors', href: '#' },
    { label: 'Invest in Ethiopia', href: '#' },
    { label: 'About EIC', href: '#' },
    { label: 'Investment Laws', href: '#' },
  ]

  const socialLinks = [
    { label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: '#' },
    { label: 'X (Twitter)', icon: <XIcon />, href: '#' },
    { label: 'Facebook', icon: <Facebook className="w-4 h-4" />, href: '#' },
    { label: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: '#' },
  ]

  return (
    <footer className="bg-[#0b215e] text-white py-12 px-6 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Section 1: Logo & Contact */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-2">
              {/* Replace with actual EIC Logo path */}
             <Link href="/">
             <Image src="/footer-logo.png" alt="EIC Logo" width={200} height={100} />
             </Link>
            </div>

            <div className="space-y-3 text-sm font-light text-slate-200">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Email:</span>
                <a href="mailto:info@eic.gov.et" className="hover:text-white transition-colors">
                  info@eic.gov.et
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">Phone:</span>
                <a href="tel:+251115510033" className="hover:text-white transition-colors">
                  (+251) 11 551 0033
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Main Sections (2-column grid inside) */}
          <div className="md:col-span-5">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Main Sections</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {mainSections.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 text-sm text-slate-200 hover:text-white transition-colors"
                >
                  <ChevronRightCircle className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Section 3: Social Media */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-8">Social Media</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={cn(
                    "flex items-center gap-4 px-6 py-2.5 rounded-full border border-white/20",
                    "bg-white/5 hover:bg-white/10 transition-all text-sm text-slate-300 hover:text-white"
                  )}
                >
                  <span className="opacity-70">{social.icon}</span>
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-slate-400 font-light tracking-wide">
            Copyright © {new Date().getFullYear()} Ethiopian Investment Commission. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer