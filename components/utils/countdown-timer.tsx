// components/CountdownTimer.tsx
"use client"
import  { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Event Countdown</CardTitle>
        <CardDescription>Don't miss this opportunity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold bg-[#d7b15a] text-primary-foreground py-3 rounded-lg">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-primary-foreground">DAYS</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold bg-[#d7b15a] text-primary-foreground py-3 rounded-lg">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-pri">HOURS</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold bg-[#d7b15a] text-primary-foreground py-3 rounded-lg">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-pri">MINUTES</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold bg-[#d7b15a] text-primary-foreground py-3 rounded-lg">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-pri">SECONDS</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}