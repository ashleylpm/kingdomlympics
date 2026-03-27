import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// Create event date more explicitly for Malaysia timezone
const EVENT_DATE = new Date(2026, 7, 23, 9, 0, 0); // Month is 0-indexed, so 7 = August

export const Countdown: React.FC = () => {
  const [duration, setDuration] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const calculateDuration = () => {
      const now = new Date();
      const timeDiff = EVENT_DATE.getTime() - now.getTime();

      if (timeDiff <= 0) {
        setDuration({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setDuration({
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      });
    };

    calculateDuration();
    const timer = setInterval(calculateDuration, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!duration) return null;

  const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-5xl font-display text-blue block text-center min-w-[70px] md:min-w-[100px]">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/50 mt-3 font-display">
        {label}
      </span>
    </div>
  );

  return (
    <div className="py-4 md:py-8 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-4">
        <h2 className="text-lg md:text-2xl font-bold mb-4 leading-relaxed">
          Countdown to{' '}
          <span className="pixel-text text-lg md:text-2xl">KINGDOMLYMPICS 2026</span>
        </h2>
      </div>

      <div className="flex justify-center items-start space-x-1 md:space-x-3">
        <TimeBlock value={duration.days} label="Days" />
        <div className="text-2xl text-blue/40 mt-4 md:mt-6 font-display pixel-blink">:</div>
        <TimeBlock value={duration.hours} label="Hours" />
        <div className="text-2xl text-blue/40 mt-4 md:mt-6 font-display pixel-blink">:</div>
        <TimeBlock value={duration.minutes} label="Mins" />
        <div className="text-2xl text-blue/40 mt-4 md:mt-6 font-display pixel-blink">:</div>
        <TimeBlock value={duration.seconds} label="Secs" />
      </div>
    </div>
  );
};
