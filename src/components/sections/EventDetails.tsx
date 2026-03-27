import React from 'react';
import { Icon } from '@iconify/react';

export const EventDetails: React.FC = () => {
  const details = [
    {
      icon: "pixelarticons:calendar",
      label: "Date",
      value: "23rd August 2026"
    },
    {
      icon: "pixelarticons:clock",
      label: "Time",
      value: "3:00 PM - 8:00 PM"
    },
    {
      icon: "pixelarticons:pin",
      label: "Location",
      value: "DUMC Dream Centre"
    },
    {
      icon: "pixelarticons:users",
      label: "Who",
      value: "13-17 years old"
    }
  ];

  return (
    <section className="py-4 md:py-8 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {details.map((item, index) => (
          <div key={index} className="pixel-card p-6 flex flex-col items-center text-center">
            <div className="mb-4 p-3 rounded-2xl bg-white/5">
              <Icon icon={item.icon} className="text-pink" width={24} />
            </div>
            <span className="text-[8px] uppercase tracking-widest text-white/40 mb-2 font-display">{item.label}</span>
            <p className="text-sm font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
