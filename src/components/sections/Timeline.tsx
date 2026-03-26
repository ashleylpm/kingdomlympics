import React from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';
import { Badge } from '../ui/Badge';

export const Timeline: React.FC = () => {
  const keyEvents = [
    {
      date: "25",
      month: "APR",
      title: "Battle Game 1",
      isFinale: false
    },
    {
      date: "30",
      month: "MAY",
      title: "Battle Game 2",
      isFinale: false
    },
    {
      date: "27",
      month: "JUN",
      title: "Battle Game 3",
      isFinale: false
    },
    {
      date: "25",
      month: "JUL",
      title: "Battle Game 4",
      isFinale: false
    },
    {
      date: "23",
      month: "AUG",
      title: "GRAND FINALE",
      isFinale: true
    }
  ];

  return (
    <section className="py-12 md:py-18 px-4 max-w-6xl mx-auto relative overflow-hidden">
      {/* Pixel squares */}
      <div className="absolute top-[10%] right-[4%] w-3 h-3 bg-pink opacity-18 animate-pulse" style={{ animationDuration: '2.8s' }} />
      <div className="absolute top-[35%] left-[3%] w-2 h-2 bg-blue opacity-20 animate-pulse" style={{ animationDuration: '3.4s', animationDelay: '0.5s' }} />
      <div className="absolute top-[60%] right-[5%] w-3 h-3 bg-cyan-300 opacity-15 animate-pulse" style={{ animationDuration: '3.9s', animationDelay: '1.1s' }} />
      <div className="absolute top-[85%] left-[4%] w-2 h-2 bg-pink opacity-20 animate-pulse" style={{ animationDuration: '2.6s', animationDelay: '0.7s' }} />
      <div className="absolute top-[50%] right-[3%] w-2 h-2 bg-violet-400 opacity-15 animate-pulse" style={{ animationDuration: '4.1s', animationDelay: '1.4s' }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Badge icon={<Icon icon="pixelarticons:calendar" width={14} />} className="mb-6">
          TIMELINE
        </Badge>

        <h2 className="text-2xl md:text-4xl mb-8 leading-relaxed">
          <span className="pixel-text">Mark Your Calendar</span>
        </h2>

        <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
          Four epic battle games, one grand finale. Don't miss a single moment! Come join the fun and bring your squad along!
        </p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line - pixelated dashed */}
        <div className="absolute left-[calc(2.375rem-2px)] md:left-1/2 top-0 bottom-0 w-0 border-l-4 border-dashed border-blue/30 transform md:-translate-x-[2px]"></div>

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
            {/* Timeline Dot - pixel square */}
            {event.isFinale ? (
              <div className="absolute left-[calc(2.375rem-20px)] md:left-1/2 transform md:-translate-x-1/2 z-10 bg-dark p-1">
                <Icon icon="pixelarticons:crown" width={32} className="text-pixel-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
              </div>
            ) : (
              <div className="absolute left-6 md:left-1/2 w-7 h-7 border-2 bg-blue border-blue transform md:-translate-x-1/2 z-10" />
            )}

            {/* Content */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
              index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
            }`}>
              <div className={`p-6 transition-all ${
                event.isFinale
                  ? 'pixel-card gradient-box pink-corners'
                  : 'pixel-card'
              }`}>
                <div className={`flex items-center gap-4 mb-3 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-display text-white">
                      {event.date}
                    </div>
                    <div className="text-[8px] font-display text-white/60 uppercase tracking-widest">
                      {event.month}
                    </div>
                  </div>
                </div>

                <h3 className={`text-sm md:text-base font-display uppercase tracking-wide ${
                  event.isFinale
                    ? 'text-pink'
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
