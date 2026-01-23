'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Host', path: '/about' },
    { name: 'Packages', path: '/packages' },
    { name: 'Institutes', path: '/university' },
  ]

  const handleNavigation = (path: string) => {
    router.push(path)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Group */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-medium text-muted-foreground hidden md:block">
                Host
              </span>
              <img
                src="/logo.png"
                alt="Host Logo"
                className="h-10 w-auto object-contain transition-all hover:scale-105"
              />
            </div>
            
            <Separator />
            
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-medium text-muted-foreground hidden md:block">
                Co-host
              </span>
              <img
                src="/mols.png"
                alt="Co-host Logo"
                className="h-10 w-auto object-contain transition-all hover:scale-105"
              />
            </div>
            
            <Separator />
            
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-medium text-muted-foreground hidden md:block">
                Co-host
              </span>
              <img
                src="/waterenergy.png"
                alt="Sponsor Logo"
                className="h-10 w-auto object-contain transition-all hover:scale-105"
              />
            </div>
            
            <Separator />
            
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-medium text-muted-foreground hidden md:block">
                Co-host
              </span>
              <img
                src="/egyg-no-bg.png"
                alt="EGYG Logo"
                className="h-10 w-auto object-contain transition-all hover:scale-105 dark:invert"
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuLink
                  href={item.path}
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    pathname === item.path
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.name}
                  <ChevronRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md">
            <SheetHeader className="mb-8">
              <SheetTitle className="text-left">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-medium text-muted-foreground">
                      Host
                    </span>
                    <img
                      src="/logo.png"
                      alt="Host Logo"
                      className="h-10 w-auto"
                    />
                  </div>
                  <Separator />
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-medium text-muted-foreground">
                      Co-host
                    </span>
                    <img
                      src="/mols.png"
                      alt="Co-host Logo"
                      className="h-10 w-auto"
                    />
                  </div>
                  <Separator />
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-medium text-muted-foreground">
                      Co-host
                    </span>
                    <img
                      src="/waterenergy.png"
                      alt="Sponsor Logo"
                      className="h-10 w-auto"
                    />
                  </div>
                  <Separator />
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-medium text-muted-foreground">
                      Co-host
                    </span>
                    <img
                      src="/egyg-no-bg.png"
                      alt="EGYG Logo"
                      className="h-10 w-auto dark:invert"
                    />
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start h-12 px-4 text-base font-medium",
                    pathname === item.path
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/60"
                  )}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function Separator() {
  return (
    <div className="h-8 w-px bg-border hidden sm:block" />
  )
}