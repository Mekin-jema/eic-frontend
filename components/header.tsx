'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Invest in Ethiopia 2026', items: ['Travel Information', 'Invest in Ethiopia 2025 – Event Gallery'] },
  { name: 'Why Ethiopia', items: ['Dynamic Policy', 'Resilient Economy', 'Enabling Infrastructure', 'Connected Market', 'Resource-rich Nation', 'Competitive Workforce'] },
  { name: 'Key Sectors', items: ['Manufacturing', 'Agriculture', 'ICT', 'Mining'] },
  { name: 'Get Started', items: ['Invest in Ethiopia', 'Grow in Ethiopia', 'Live and Work in Ethiopia'] },
  { name: 'About', items: ['Who We Are', 'How We Help Investors', 'Meet Our Team'] },
  { name: 'Resources', items: ['News and Events', 'Investment Laws', 'Publications', 'Vacancies', 'FAQs'] },
]

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null)
  const [activeLanguage, setActiveLanguage] = useState('en')
  const [languageOpen, setLanguageOpen] = useState(false)
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLanguageOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName)
  }

  const handleLanguageSelect = (code: string) => {
    setActiveLanguage(code)
    setLanguageOpen(false)
  }

  const handleMobileMenuToggle = (menuName: string) => {
    setMobileActiveMenu((prev) => (prev === menuName ? null : menuName))
  }

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
        <nav ref={navRef} className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="px-3 py-2 text-[15px] font-bold text-[#0a1d47] hover:text-[#d7b15a] flex items-center gap-1"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNavClick(item.name)
                }}
              >
                {item.name}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.name ? 'rotate-180' : ''}`} />
              </button>

              {activeMenu === item.name && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <div className="pt-3">
                    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[12px] border-l-transparent border-r-transparent border-b-white absolute -top-2 left-6" />
                    <ul className="bg-white shadow-2xl p-6 min-w-max border">
                      {item.items.map((sub) => (
                        <li key={sub}>
                          <Link
                            href="#"
                            className="block px-4 py-3 text-[16px] font-bold text-[#0a1d47] hover:bg-slate-50 rounded-lg transition whitespace-nowrap"
                            onClick={() => setActiveMenu(null)}
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Language Selector - Desktop */}
          <div ref={langRef} className="hidden lg:block relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-2 px-3 py-2 text-[14px] font-bold text-[#0a1d47] hover:text-[#d7b15a] transition-colors"
            >
              <span>{languages.find(lang => lang.code === activeLanguage)?.flag} {languages.find(lang => lang.code === activeLanguage)?.name}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-2xl p-3 min-w-[180px] z-50 border">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-[14px] font-bold rounded-lg transition ${
                      activeLanguage === lang.code
                        ? 'bg-slate-100 text-[#0a1d47]'
                        : 'text-[#0a1d47] hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Selector - Mobile */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-2 px-3 py-2 text-[14px] font-bold text-[#0a1d47]"
            >
              <span>
                {languages.find((lang) => lang.code === activeLanguage)?.flag}{' '}
                {languages.find((lang) => lang.code === activeLanguage)?.name}
              </span>
              <ChevronDown className={`w-3 h-3 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-2xl p-2 min-w-[200px] z-50 border">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-[14px] font-semibold transition ${
                      activeLanguage === lang.code
                        ? 'bg-[#0052CC] text-white'
                        : 'text-[#001E67] hover:bg-[#d7b15a]/10'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.code === 'am' ? 'አማርኛ' : lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/register"
            className="hidden md:flex bg-[#B07000] hover:bg-[#ad7c27] text-white rounded-xl px-8 py-4 font-bold shadow-md transition active:scale-95"
          >
            Register
          </Link>

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

            {/* Language Section - Mobile */}
            <div className="px-6 py-4 border-b">
              <div className="text-xs font-bold text-[#001E67] mb-3">Language</div>
              <button
                onClick={() => setMobileLanguageOpen(!mobileLanguageOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-semibold border border-[#0052CC] text-[#001E67] bg-white"
              >
                <span>
                  {languages.find((lang) => lang.code === activeLanguage)?.flag}{' '}
                  {languages.find((lang) => lang.code === activeLanguage)?.name}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileLanguageOpen && (
                <div className="mt-2 border border-[#0052CC] bg-[#0052CC]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageSelect(lang.code)
                        setMobileLanguageOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-[14px] font-semibold transition ${
                        activeLanguage === lang.code
                          ? 'bg-[#001E67] text-white'
                          : 'bg-transparent text-white hover:bg-[#001E67]/20'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.code === 'am' ? 'አማርኛ' : lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name} className="border-b">
                  <button
                    onClick={() => handleMobileMenuToggle(item.name)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-black uppercase text-[#0a1d47]">
                      {item.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileActiveMenu === item.name ? 'rotate-180 text-[#d7b15a]' : 'text-slate-500'
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 pb-4 space-y-3 transition-all bg-[#0052CC] ${
                      mobileActiveMenu === item.name ? 'block' : 'hidden'
                    }`}
                  >
                    {item.items.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block text-[14px] font-semibold text-white/90 hover:text-white transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}