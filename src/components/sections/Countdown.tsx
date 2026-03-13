import React, { useState, useEffect } from 'react';
import { intervalToDuration, type Duration } from 'date-fns';
import { motion } from 'motion/react';

// Create event date more explicitly for Malaysia timezone
const EVENT_DATE = new Date(2026, 7, 23, 9, 0, 0); // Month is 0-indexed, so 7 = August

export const Countdown: React.FC = () => {
  const [duration, setDuration] = useState<Duration | null>(null);

  useEffect(() => {
    // Initial calculation
    const calculateDuration = () => {
      const now = new Date();
      
      // Calculate milliseconds difference
      const timeDiff = EVENT_DATE.getTime() - now.getTime();
      
      
      if (timeDiff <= 0) {
        setDuration({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return null;
      } else {
        // Manual calculation for verification
        const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const totalMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const totalSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        // Use manual calculation instead of date-fns
        const manualDuration = {
          days: totalDays,
          hours: totalHours,
          minutes: totalMinutes,
          seconds: totalSeconds
        };
        
        
        setDuration(manualDuration);
        return manualDuration;
      }
    };

    // Calculate immediately
    calculateDuration();

    // Then set up interval
    const timer = setInterval(calculateDuration, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!duration) return null;

  const TimeBlock = ({ value, label }: { value: number | undefined, label: string }) => (
    <div className="flex flex-col items-center px-4 py-2">
      <span className="text-4xl md:text-6xl font-black font-display text-blue">
        {value?.toString().padStart(2, '0') || '00'}
      </span>
      <span className="text-xs uppercase tracking-widest text-white/50 mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="py-12">

      <div className="text-center mt-24">
        <h2 className="text-3xl font-bold mb-4">Countdown to <span className="glitch-static" data-text="KINGDOMLYMPICS 2026">KINGDOMLYMPICS 2026</span></h2>
      </div>

      <div className="flex justify-center items-center space-x-2 md:space-x-8">
        <TimeBlock value={duration.days} label="Days" />
        <div className="text-2xl opacity-20 mt-[-20px]">:</div>
        <TimeBlock value={duration.hours} label="Hours" />
        <div className="text-2xl opacity-20 mt-[-20px]">:</div>
        <TimeBlock value={duration.minutes} label="Mins" />
        <div className="text-2xl opacity-20 mt-[-20px]">:</div>
        <TimeBlock value={duration.seconds} label="Secs" />
      </div>
      
    </div>
  );
};
