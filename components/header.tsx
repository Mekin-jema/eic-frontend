'use client'

import * as React from 'react'
import Link from 'next/link'
import { ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'

const navItems = [
  { name: 'Invest in Ethiopia 2026', items: ['Travel Information', 'Invest in Ethiopia 2025 – Event Gallery'] },
  { name: 'Why Ethiopia', items: ['Dynamic Policy', 'Resilient Economy', 'Enabling Infrastructure', 'Connected Market', 'Resource-rich Nation', 'Competitive Workforce'] },
  { name: 'Key Sectors', items: ['Manufacturing', 'Agriculture', 'ICT', 'Mining'] },
  { name: 'Get Started', items: ['Invest in Ethiopia', 'Grow in Ethiopia', 'Live and Work in Ethiopia'] },
  { name: 'About', items: ['Who We Are', 'How We Help Investors', 'Meet Our Team'] },
  { name: 'Resources', items: ['News and Events', 'Investment Laws', 'Publications', 'Vacancies', 'FAQs', 'Useful Links', 'eInvest Portal', 'Project Opportunities'] },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 transition-all duration-300">
      <div className={`mx-auto max-w-7xl shadow-xl rounded-[45px] px-6 lg:px-10 py-5 h-24 flex items-center justify-between border-b-4 border-[#d7b15a] transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-white/95'}`}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/EIC.png" alt="EIC Logo" width={180} height={48} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-[15px] font-bold text-[#0a1d47] hover:text-[#d7b15a] transition-colors">
                    {item.name}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    {/* Fixed visibility: Navy text on white "bubble" container */}
                    <ul className="grid w-max gap-1 p-6 rounded-[2.5rem] bg-white border-none shadow-2xl">
                      {item.items.map((subItem) => (
                        <li key={subItem}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block rounded-lg p-3 text-[17px] font-bold text-[#0a1d47] transition-all hover:bg-slate-50 hover:pl-4 whitespace-nowrap"
                            >
                              {subItem}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="hidden md:flex items-center gap-2 cursor-pointer group">
            <div className="flex flex-col items-center">
              <div className="h-[2px] w-full bg-red-500 mb-1" /> {/* Matches image_6f548f style */}
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-bold text-[#0a1d47]">English</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>

          <Button className="hidden md:flex bg-[#2b4291] hover:bg-[#1a2b61] text-white rounded-xl px-8 py-6 text-base font-bold shadow-md transition-all active:scale-95">
            Contact Us
          </Button>

          {/* Mobile Menu Sidebar */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-[#0a1d47] hover:bg-slate-100">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[#1a1a1a] border-none p-0 text-white">
              <div className="p-6 h-full flex flex-col">
                <div className="text-2xl font-black tracking-tighter mb-8">MENU</div>
                <ScrollArea className="flex-1 pr-4">
                  <div className="flex flex-col gap-8">
                    {navItems.map((item) => (
                      <div key={item.name} className="space-y-4">
                        <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                          {item.name}
                        </div>
                        <div className="flex flex-col gap-3 pl-2">
                          {item.items.map((sub) => (
                            <Link key={sub} href="#" className="text-lg font-bold hover:text-[#d7b15a] transition-colors">
                              {sub}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="pt-6 mt-auto">
                  <Button className="w-full bg-[#2b4291] py-7 text-lg font-bold rounded-xl">
                    Contact Us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}