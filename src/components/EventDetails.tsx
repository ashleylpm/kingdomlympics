import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

export const EventDetails: React.FC = () => {
  const details = [
    {
      icon: <Calendar className="text-pink" />,
      label: "Date",
      value: "30th August 2026"
    },
    {
      icon: <Clock className="text-pink" />,
      label: "Time",
      value: "3:00 PM - 8:00 PM"
    },
    {
      icon: <MapPin className="text-pink" />,
      label: "Location",
      value: "DUMC Dream Centre"
    },
    {
      icon: <Users className="text-pink" />,
      label: "Who",
      value: "13-17 years old"
    }
  ];

  return (
    <section className="py-6 md:py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {details.map((item, index) => (
          <div key={index} className="glass-card p-8 flex flex-col items-center text-center group hover:border-white/20 transition-colors">
            <div className="mb-4 p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-xs uppercase tracking-widest text-white/40 mb-2">{item.label}</span>
            <p className="text-lg font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
