import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const LeaderboardPreview: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center">
      <div className="pixel-card p-12 border-dashed border-2 border-white/10 opacity-50">
        <div className="inline-flex items-center justify-center w-16 h-16 border-3 border-blue/30 mb-6">
          <Icon icon="pixelarticons:lock" width={24} className="text-blue/40" />
        </div>
        <h2 className="text-xl md:text-2xl font-display mb-4">Leaderboard</h2>
        <p className="text-white/40 text-sm max-w-md mx-auto">
          The arena is being prepared. Team standings and live scores will be available once the games begin.
        </p>

        <div className="mt-12 space-y-4 max-w-sm mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 bg-blue/5 border-2 border-blue/10 animate-pulse" />
          ))}
        </div>
      </div>
      {/* Use this when unlocking the leaderboard to new page*/}
      {/* <div className="pixel-card p-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-pixel-gold border-3 border-yellow-600 mb-6">
          <Icon icon="pixelarticons:trophy" width={24} className="text-black" />
        </div>
        <h2 className="text-xl md:text-2xl font-display mb-4">Leaderboard</h2>
        <p className="text-white/40 text-sm max-w-md mx-auto">
          Check out the live standings and see which team is leading the competition.
        </p>

        <div className="mt-8">
          <Link
            to="/leaderboard"
            className="inline-flex items-center gap-2 px-6 py-3 pixel-btn bg-white text-black font-display uppercase tracking-widest text-[10px]"
          >
            View Full Leaderboard
          </Link>
        </div>
      </div> */}
    </section>
  );
};
