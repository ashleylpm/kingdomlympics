import React from 'react';
import { Lock } from 'lucide-react';

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
    </section>
  );
};
