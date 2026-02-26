import React from 'react';
import { motion } from 'motion/react';

export const Description: React.FC = () => {

  return (
    <section className="py-12 md:py-18 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-pink mb-6">
          <span>WHAT IS KINGDOMLYMPICS?</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black font-display mb-8 bg-gradient-to-r from-pink to-blue bg-clip-text text-transparent">
          More Than Competition
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            <strong className="text-white">Kingdomlympics is more than a competition; it's where friendships are forged.</strong> For 5 thrilling months, teens (13–17 y/o) team up with their Cell Groups (CGs) to tackle monthly challenges from creative video campaigns to massive inflatable obstacle courses.
          </p>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            Whether you've been here for years or are stepping in for the very first time, <strong className="text-pink">your CG needs you</strong>. Every point counts, every newcomer strengthens the team, and everything culminates in our massive Grand Finale on August 30.
          </p>
          
          <div className="glass-card p-6 mb-8">
            <p className="text-base md:text-lg text-white/90">
              🏆 The <strong className="text-blue">2025 Champions, 10th Gen Saintz</strong> proved that teamwork wins the day.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8"
          >
            Are you ready to write the next chapter?
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};