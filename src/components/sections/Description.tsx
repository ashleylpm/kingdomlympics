import React from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';
import { Badge } from '../ui/Badge';

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
        <Badge icon={<Icon icon="pixelarticons:question" width={14} />} className="mb-6">
          WHAT IS KINGDOMLYMPICS?
        </Badge>

        <h2 className="text-2xl md:text-4xl mb-8 leading-relaxed">
          <span className="pixel-text">More Than Competition</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
            <strong className="text-white">Kingdomlympics is more than a competition; it's where friendships are forged.</strong> For 5 thrilling months, teens (13-17 y/o) team up with their Cell Groups (CGs) to tackle monthly challenges from creative video campaigns to massive inflatable obstacle courses.
          </p>

          <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
            Whether you've been here for years or are stepping in for the very first time, <strong className="text-pink">your CG needs you</strong>. Every point counts, every newcomer strengthens the team, and everything culminates in our massive Grand Finale on August 23.
          </p>

          <div className="pixel-card p-6 mb-8 text-blue/60 inline-block">
            <p className="text-sm md:text-base text-white/90">
              <Icon icon="pixelarticons:trophy" width={18} className="text-yellow-400 inline mr-2 align-text-bottom" />The <strong className="text-blue">2025 Champions, 10th Gen Saintz</strong> proved that teamwork wins the day.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-display text-white mb-8 leading-relaxed md:whitespace-nowrap"
          >
            Are you ready to write the next chapter?
            <span className="pixel-blink text-pink">_</span>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};
