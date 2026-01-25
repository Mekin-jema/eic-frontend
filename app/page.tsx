// app/page.tsx (or components/HomePage.tsx)
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Building, ChevronRight, Target, ArrowRight } from 'lucide-react';
import CountdownTimer from '@/components/utils/countdown-timer';

import { useRouter } from 'next/navigation';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();
  const eventDate = new Date('2026-03-26');
  
  const handleRegisterClick = () => {
    router.push('/register');
  };
  
  const handleViewAgenda = () => {
    // Navigate to agenda page or open modal
    router.push('/agenda');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Imported Header */}
      <Header />
      
      {/* Hero Section - Matching Official Design */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-blue-100/[0.02] bg-[size:20px_20px]" />
        
        <div className="container relative mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Event Badge */}
            <Badge 
              variant="outline" 
              className="px-4 py-2 text-sm font-semibold bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              High-Level Business Forum
            </Badge>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Invest in <span className="text-blue-600">Ethiopia</span>
              <div className="text-4xl md:text-5xl lg:text-6xl mt-2">2026</div>
            </h1>
            
            {/* Date and Location */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-gray-700">
                <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                <span>26-27 March 2026</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-gray-600">
                <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                <span>Ethiopian Skylight Hotel, Addis Ababa, Ethiopia</span>
              </div>
            </div>
            
            {/* Theme Section */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6 md:p-8 mt-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  Forum Theme: &ldquo;Ethiopia Ready for Business&rdquo;
                </h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                This year&apos;s Invest in Ethiopia Forum theme reflects the country&apos;s commitment to building a 
                competitive, predictable, and welcoming environment for investors. It signals Ethiopia&apos;s shift 
                toward targeted investment attraction, robust regulatory reforms, and a more integrated approach 
                to facilitating investments that drive exports, create jobs, and advance economic transformation.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 px-8"
                 
              > <Link href="/register">
                Register Now
              </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-300"
                onClick={handleViewAgenda}
              >
                View Agenda
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              COUNTDOWN TO THE FORUM
            </h2>
            <p className="text-gray-600">Join us for this transformative investment event</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <CountdownTimer targetDate={eventDate} />
          </div>
          
          {/* Additional Register Button */}
          <div className="text-center mt-10">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-10"
              onClick={handleRegisterClick}
            >
              Secure Your Spot
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-600 mt-3">
              Limited seats available. Register before February 28, 2026 for early bird discount.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Network with Leaders</h3>
                <p className="text-gray-600">
                  Connect with 500+ investors, policymakers, and business leaders
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Premium Venue</h3>
                <p className="text-gray-600">
                  World-class facilities at Ethiopian Skylight Hotel, Addis Ababa
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Days of Insights</h3>
                <p className="text-gray-600">
                  Intensive sessions on investment opportunities in Ethiopia
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Invest in Ethiopia?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the premier investment forum shaping Ethiopia&apos;s economic future. 
              Your registration gives you access to exclusive networking, insights, and opportunities.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-10 py-6 text-lg"
              onClick={handleRegisterClick}
            >
              Complete Registration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}