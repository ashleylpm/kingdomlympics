import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Crown } from 'lucide-react';

export const Timeline: React.FC = () => {
  const keyEvents = [
    {
      date: "25",
      month: "APR",
      title: "Challenge 1",
      isFinale: false
    },
    {
      date: "30",
      month: "MAY",
      title: "Challenge 2",
      isFinale: false
    },
    {
      date: "27",
      month: "JUN",
      title: "Challenge 3",
      isFinale: false
    },
    {
      date: "25",
      month: "JUL",
      title: "Challenge 4",
      isFinale: false
    },
    {
      date: "30",
      month: "AUG",
      title: "GRAND FINALE",
      isFinale: true
    }
  ];

  return (
    <section className="py-12 md:py-18 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue mb-6">
          <Calendar size={14} />
          <span>TIMELINE</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black font-display mb-8 bg-gradient-to-r from-blue to-pink bg-clip-text text-transparent">
          Mark Your Calendar
        </h2>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Four epic challenges, one grand finale. Don't miss a single moment! Come join the fun and bring your squad along!
        </p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-[2.375rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue via-pink to-blue opacity-30 transform md:-translate-x-px"></div>

        {keyEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className={`absolute left-6 md:left-1/2 w-7 h-7 rounded-full border-2 transform md:-translate-x-1/2 z-10 ${
              event.isFinale
                ? 'bg-gradient-to-r from-pink to-blue border-white shadow-lg shadow-pink/50'
                : 'bg-blue border-blue'
            }`}>
              {event.isFinale && (
                <Crown size={18} className="text-white drop-shadow-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </div>

            {/* Content */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
              index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
            }`}>
              <div className={`backdrop-blur-sm rounded-2xl p-6 border transition-all ${
                event.isFinale
                  ? 'bg-gradient-to-br from-pink/15 to-blue/15 border-pink/40 hover:border-pink/60 shadow-lg shadow-pink/20'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}>
                <div className={`flex items-center gap-4 mb-3 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <div className="text-center">
                    <div className={`text-3xl font-black text-white`}>
                      {event.date}
                    </div>
                    <div className="text-xs font-bold text-white/60 uppercase tracking-widest">
                      {event.month}
                    </div>
                  </div>
                </div>

                <h3 className={`text-xl font-bold uppercase tracking-wide ${
                  event.isFinale
                    ? 'text-transparent bg-gradient-to-r from-pink to-blue bg-clip-text'
                    : 'text-white'
                }`}>
                  {event.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
