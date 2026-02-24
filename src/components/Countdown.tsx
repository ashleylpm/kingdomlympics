import React, { useState, useEffect } from 'react';
import { intervalToDuration, type Duration } from 'date-fns';
import { motion } from 'motion/react';

const EVENT_DATE = new Date('2026-08-30T09:00:00');

export const Countdown: React.FC = () => {
  const [duration, setDuration] = useState<Duration | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now >= EVENT_DATE) {
        setDuration({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        setDuration(intervalToDuration({ start: now, end: EVENT_DATE }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!duration) return null;

  const TimeBlock = ({ value, label }: { value: number | undefined, label: string }) => (
    <div className="flex flex-col items-center px-4 py-2">
      <motion.span 
        key={value}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-6xl font-black font-display text-blue"
      >
        {value?.toString().padStart(2, '0') || '00'}
      </motion.span>
      <span className="text-xs uppercase tracking-widest text-white/50 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-center items-center space-x-2 md:space-x-8 py-12">
      <TimeBlock value={duration.days} label="Days" />
      <div className="text-2xl opacity-20 mt-[-20px]">:</div>
      <TimeBlock value={duration.hours} label="Hours" />
      <div className="text-2xl opacity-20 mt-[-20px]">:</div>
      <TimeBlock value={duration.minutes} label="Mins" />
      <div className="text-2xl opacity-20 mt-[-20px]">:</div>
      <TimeBlock value={duration.seconds} label="Secs" />
    </div>
  );
};
