import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';

const teams = [
  { rank: 1, name: '10th GEN Saintz', points: 1000, color: 'from-green-600 to-green-800' },
  { rank: 2, name: 'ShrekGEN', points: 800, color: 'from-purple-400 to-purple-600' },
  { rank: 3, name: 'aGENTz', points: 600, color: 'from-yellow-400 to-yellow-600' },
  { rank: 4, name: '7-11', points: 500, color: 'from-blue-800 to-blue-950' },
  { rank: 5, name: 'Gen Prix', points: 400, color: 'from-red-800 to-red-950' },
];

export const LeaderboardPreview: React.FC = () => {
  return (
    <section className="py-6 md:py-8 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="gradient-box inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
          <Icon icon="pixelarticons:trophy" width={16} className="text-white" />
          <span className="font-display text-[10px] uppercase tracking-widest">Leaderboard</span>
        </div>
        <p className="text-white/40 text-sm max-w-md mx-auto">
          Live standings for all competing cell groups.
        </p>
      </div>

      <div className="space-y-4">
        {teams.map((team, index) => (
          <motion.div
            key={team.rank}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="pixel-card p-4 md:p-6 flex items-center gap-4"
          >
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${team.color} flex items-center justify-center font-bold text-white`}>
              {team.rank === 1 ? (
                <Icon icon="pixelarticons:crown" width={24} />
              ) : (
                <span>{team.rank}</span>
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-lg">{team.name}</h3>
            </div>

            <div className="text-right">
              <p className="font-display font-bold text-2xl">{team.points.toLocaleString()}</p>
              <p className="text-white/40 text-sm">points</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
