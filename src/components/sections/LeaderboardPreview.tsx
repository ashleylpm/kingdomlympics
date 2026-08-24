import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';

const teams = [
  { name: 'Gen Prix', color: 'from-red-800 to-red-950', games: [400, 500, 600, 800, 4850] },
  { name: 'aGENTz', color: 'from-yellow-400 to-yellow-600', games: [600, 1000, 500, 400, 4550] },
  { name: '7-11', color: 'from-blue-800 to-blue-950', games: [500, 400, 1000, 1000, 5550] },
  { name: '10th GEN Saintz', color: 'from-green-600 to-green-800', games: [1000, 1000, 850, 500, 5300] },
  { name: 'ShrekGEN', color: 'from-purple-400 to-purple-600', games: [800, 600, 500, 600, 4250] },
];

const gameNames = ['Catapult Conflict', 'Time Heist', 'Mega Mind', 'Ultimate Reel', 'Grand Finale'];

const rankedTeams = (() => {
  const sorted = [...teams]
    .map((t) => ({ ...t, total: t.games.reduce((a, b) => (a ?? 0) + (b ?? 0), 0) as number }))
    .sort((a, b) => b.total - a.total);
  const result: Array<{ name: string; color: string; games: (number | null)[]; total: number; rank: number }> = [];
  for (let i = 0; i < sorted.length; i++) {
    result.push({ ...sorted[i], rank: i > 0 && sorted[i].total === sorted[i - 1].total ? result[i - 1].rank : i + 1 });
  }
  return result;
})();

export const LeaderboardPreview: React.FC = () => {
  return (
    <section className="py-6 md:py-8 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="gradient-box inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
          <Icon icon="pixelarticons:trophy" width={16} className="text-white" />
          <span className="font-display text-[10px] uppercase tracking-widest">Leaderboard</span>
        </div>
        <p className="text-white/40 text-sm max-w-md mx-auto">
          Live standings for all competing cell groups.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pixel-card"
      >
        <div className="overflow-x-auto md:overflow-x-visible overflow-y-hidden">
        <table className="w-full text-left min-w-[640px] md:min-w-0">
          <thead>
            <tr className="border-b-2 border-blue/20">
              <th className="px-4 py-3 text-[10px] font-display uppercase tracking-widest text-white/60">#</th>
              <th className="px-4 py-3 text-[10px] font-display uppercase tracking-widest text-white/60">Team</th>
              <th className="px-4 py-3 text-[10px] font-display uppercase tracking-widest text-pink text-center md:hidden">Total</th>
              {gameNames.map((name) => (
                <th key={name} className="px-4 py-3 text-[10px] font-display uppercase tracking-widest text-white/60 text-center">{name}</th>
              ))}
              <th className="px-4 py-3 text-[10px] font-display uppercase tracking-widest text-pink text-center hidden md:table-cell">Total</th>
            </tr>
          </thead>
          <tbody>
            {rankedTeams.map((team, index) => (
              <tr
                key={team.name}
                className={`border-b border-white/5 ${team.rank === 1 ? 'bg-white/5' : 'hover:bg-white/5'} transition-colors`}
              >
                <td className="px-4 py-4">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${team.color} flex items-center justify-center font-bold text-white text-sm`}>
                    {team.rank === 1 ? (
                      <Icon icon="pixelarticons:crown" width={18} />
                    ) : (
                      <span>{team.rank}</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 font-bold text-sm md:text-base whitespace-nowrap">{team.name}</td>
                <td className="px-4 py-4 text-center font-display font-bold text-lg text-pink md:hidden">{team.total.toLocaleString()}</td>
                {team.games.map((score, i) => (
                  <td key={i} className="px-4 py-4 text-center text-white font-accent font-semibold">
                    {score !== null ? score.toLocaleString() : '—'}
                  </td>
                ))}
                <td className="px-4 py-4 text-center font-display font-bold text-lg text-pink hidden md:table-cell">{team.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </motion.div>
    </section>
  );
};
