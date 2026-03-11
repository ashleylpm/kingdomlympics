import React from 'react';
import { Lock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LeaderboardPreview: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center">
      <div className="glass-card p-12 border-dashed border-2 border-white/10 opacity-50">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6">
          <Lock size={24} className="text-blue/40" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>
        <p className="text-white/40 max-w-md mx-auto">
          The arena is being prepared. Team standings and live scores will be available once the games begin.
        </p>

        <div className="mt-12 space-y-4 max-w-sm mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 bg-blue/5 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
      {/* Use this when unlocking the leaderboard to new page*/}
      {/* <div className="glass-card p-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mb-6">
          <Trophy size={24} className="text-black" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>
        <p className="text-white/40 max-w-md mx-auto">
          Check out the live standings and see which team is leading the competition.
        </p>

        <div className="mt-8">
          <Link
            to="/leaderboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-pink transition-colors"
          >
            View Full Leaderboard
          </Link>
        </div>
      </div> */}
    </section>

      

  );
};
