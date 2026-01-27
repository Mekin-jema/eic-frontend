'use client'
import Link from 'next/link'
import { ChevronDown, Menu } from 'lucide-react'

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
import Image from 'next/image'

const navItems = [
  { name: 'Invest in Ethiopia 2026', items: ['Opportunity 1', 'Opportunity 2'] },
  { name: 'Why Ethiopia', items: ['Strategic Location', 'Incentives', 'Labor'] },
  { name: 'Key Sectors', items: ['Manufacturing', 'Agriculture', 'ICT', 'Mining'] },
  { name: 'Get Started', items: ['Registration', 'Licensing'] },
  { name: 'About', items: ['EIC Mission', 'Our Team'] },
  { name: 'Resources', items: ['Laws', 'Publications', 'News'] },
]

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-0">
      {/* The "Pill" Container */}
      <div className="mx-auto max-w-7xl bg-white text-slate-900 shadow-lg rounded-b-[45px] px-6 lg:px-10 py-5  h-24 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
           <div className="flex flex-col">
             <Image
               src="/EIC.png"
               alt="EIC Logo"
               width={180}
               height={48}
             />
           </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-[14px] font-bold text-slate-900 hover:text-blue-700 data-[state=open]:text-blue-700">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {item.items.map((subItem) => (
                        <li key={subItem}>
                          <NavigationMenuLink asChild>
                            <a className="block select-none rounded-md p-2 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-slate-100">
                              {subItem}
                            </a>
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

        {/* Right Side Tools */}
        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer group">
            <div className="flex flex-col items-center">
                <img 
                  src="https://flagcdn.com/us.svg" 
                  alt="English" 
                  className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                />
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-[11px] font-bold text-slate-600 group-hover:text-blue-700">English</span>
                    <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-blue-700" />
                </div>
            </div>
          </div>

          {/* Contact Button */}
          <Button className="hidden md:flex bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-full px-8 py-5 text-sm font-semibold shadow-md transition-transform active:scale-95">
            Contact Us
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-slate-700">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
               <nav className="flex flex-col gap-4 mt-8">
                 {navItems.map((item) => (
                   <Link key={item.name} href="#" className="text-lg font-bold border-b pb-2">
                     {item.name}
                   </Link>
                 ))}
                 <Button className="mt-4 bg-[#3b5998]">Contact Us</Button>
               </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}