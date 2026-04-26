import { Link } from 'react-router-dom';
import { Trophy, Medal, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

const teams = [
  { rank: 1, name: 'Tangentz', points: 735.5, color: 'from-yellow-400 to-amber-500' },
  { rank: 2, name: 'Shrekgen', points: 620.5, color: 'from-gray-300 to-gray-400' },
  { rank: 3, name: 'Agentz', points: 525, color: 'from-amber-600 to-amber-700' },
  { rank: 4, name: '7-11', points: 245, color: 'from-blue/50 to-blue' },
  { rank: 5, name: 'Genprix', points: 210, color: 'from-pink/50 to-pink' },
];

export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-dark selection:bg-pink selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-dark/80 backdrop-blur-md border-b border-white/5">
        <Link to="/" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span className="font-display font-bold text-xl tracking-widest">
            <span className="glitch-static text-sm md:text-xl" data-text="KINGDOMLYMPICS">KINGDOMLYMPICS</span>
          </span>
        </Link>
      </nav>

      <main className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mb-6">
              <Trophy size={32} className="text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Leaderboard</h1>
            <p className="text-white/60 max-w-md mx-auto">
              Live standings for all competing teams. Updated in real-time as events conclude.
            </p>
          </div>

          <div className="space-y-4">
            {teams.map((team, index) => (
              <motion.div
                key={team.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-4 md:p-6 flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${team.color} flex items-center justify-center font-bold text-black`}>
                  {team.rank <= 3 ? (
                    <Medal size={24} />
                  ) : (
                    <span>{team.rank}</span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg">{team.name}</h3>
                  <p className="text-white/40 text-sm">
                    {team.rank === 1 && 'Leading the pack'}
                    {team.rank === 2 && 'Close behind'}
                    {team.rank === 3 && 'Fighting for podium'}
                    {team.rank > 3 && 'In the competition'}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-display font-bold text-2xl">{team.points.toLocaleString()}</p>
                  <p className="text-white/40 text-sm">points</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>a
          </div>
        </motion.div>
      </main>
    </div>
  );
}
