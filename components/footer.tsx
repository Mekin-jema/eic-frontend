'use client'

import { Mail, Phone, MapPin, Globe, ChevronRight } from 'lucide-react'
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Packages', href: '/packages' },
    { label: 'Institutes', href: '/university' },
    { label: 'Agenda', href: '/agenda' },
    { label: 'Sponsors', href: '/sponsors' },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://et.linkedin.com/company/power-ethiopia',
      color: 'hover:text-blue-600',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://web.facebook.com/p/Power-Ethiopia-technology-group-100067020143602/',
      color: 'hover:text-blue-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/powerethiopia/',
      color: 'hover:text-pink-600',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://www.youtube.com/@Powerethiopia',
      color: 'hover:text-red-600',
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: 'powerethiopiaco@gmail.com',
      href: 'mailto:powerethiopiaco@gmail.com',
    },
    {
      icon: Phone,
      text: '+251 988 577 712',
      href: 'tel:+251988577712',
    },
    {
      icon: Phone,
      text: '+251 911 866 977',
      href: 'tel:+251911866977',
    },
    {
      icon: Globe,
      text: 'www.powerethiopia.com',
      href: 'https://www.powerethiopia.com',
    },
    {
      icon: MapPin,
      text: 'Bole, Addis Ababa, Ethiopia',
      href: '#',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log({ email })
    setEmail('')
  }

  return (
    <footer className="relative bg-gradient-to-b from-background to-slate-900 border-t">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="container relative mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Contact & Social */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/logo.png"
                  alt="Power Ethiopia Logo"
                  className="h-12 w-auto transition-transform hover:scale-105"
                />
                <div className="h-8 w-px bg-border" />
                <img
                  src="/egyg-no-bg.png"
                  alt="EGYG Logo"
                  className="h-10 w-auto transition-transform hover:scale-105 dark:invert"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Power Ethiopia Solar Technology Institute and Ethiopian Global Youth Group (EGYG) 
                present the Green Energy Technology Expo 2025—a transformative national initiative 
                for Ethiopia&apos;s renewable energy revolution.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 text-sm text-muted-foreground transition-colors",
                      item.href !== '#' && "hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "rounded-full p-2.5 transition-all duration-300",
                      "bg-muted text-muted-foreground",
                      social.color,
                      "hover:bg-accent hover:scale-110"
                    )}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links & Newsletter */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest updates about the Green Energy Technology Expo.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50 backdrop-blur-sm"
                />
                <Textarea
                  placeholder="Your message (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px] bg-background/50 backdrop-blur-sm resize-none"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <Card className="mt-12 bg-background/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-center text-foreground mb-6">
              In Partnership With
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {[
                { src: '/mols.png', alt: 'Ministry of Labor and Skills', className: 'h-10' },
                { src: '/waterenergy.png', alt: 'Water and Energy Logo', className: 'h-10' },
                { src: '/egyg-no-bg.png', alt: 'EGYG Logo', className: 'h-10 dark:invert' },
              ].map((partner, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className={cn("w-auto object-contain transition-all hover:scale-105", partner.className)}
                  />
                  <span className="mt-2 text-xs text-muted-foreground">
                    {partner.alt}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Power Ethiopia Solar Technology Institute & 
              Ethiopian Global Youth Group (EGYG). All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="/privacy" className="transition-colors hover:text-foreground">
                Privacy Policy
              </a>
              <span className="text-border">•</span>
              <a href="/terms" className="transition-colors hover:text-foreground">
                Terms of Service
              </a>
              <span className="text-border">•</span>
              <a href="/contact" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer