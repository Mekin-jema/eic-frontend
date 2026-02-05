'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Theme', href: '#why-ethiopia' },
  { name: 'Forum Highlights', href: '#resources' },
  { name: 'Gallery', href: '#key-sectors' },
  { name: 'Countdown', href: '#get-started' },
  { name: 'Our Partners', href: '#about' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-5">
      <div
        className={`mx-auto max-w-8xl h-24 px-6 lg:px-10 flex items-center justify-between rounded-[45px] border-b-4 border-[#d7b15a] shadow-xl transition-all ${
          isScrolled ? 'bg-white' : 'bg-white/95'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/EIC.png" alt="EIC Logo" width={180} height={48} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-[15px] font-bold text-[#0a1d47] hover:text-[#d7b15a] transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-[#0a1d47]"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#f8f9fb] text-[#0a1d47] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pt-6 pb-4 border-b bg-white text-[#0a1d47]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src="/EIC.png" alt="EIC Logo" width={120} height={32} />
                  <span className="text-xs font-bold tracking-[0.2em]">MENU</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/90 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-4">
                <Link
                  href="/register"
                  className="block text-center bg-[#B07000] hover:bg-[#ad7c27] text-white py-3 text-sm font-bold shadow-md transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 border-b text-sm font-black uppercase text-[#0a1d47] hover:bg-white transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}