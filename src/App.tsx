import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { LeaderboardPreview } from './components/LeaderboardPreview';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-pink selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink to-blue z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="font-display font-bold text-xl tracking-widest">
          <a href="#home" className="block">
            <span className="glitch-static text-sm md:text-xl" data-text="KINGDOMLYMPICS">KINGDOMLYMPICS</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest text-white/60">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#countdown" className="hover:text-white transition-colors">Countdown</a>
          <a href="#details" className="hover:text-white transition-colors">Details</a>
          <a href="#leaderboard" className="hover:text-white transition-colors">Leaderboard</a>
        </div>
        <button 
          onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-pink transition-colors"
        >
          Join Now
        </button>
      </nav>

      <main>
        <Hero />
        
        <div className="relative">
          {/* Section Divider */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>
          
          <section id="countdown">
            <Countdown />
          </section>
          <section id="details">
            <EventDetails />
          </section>
          <section id="leaderboard">
            <LeaderboardPreview />
          </section>
        </div>
      </main>

      <footer className="py-12 px-4 border-t border-white/5 text-center">
        <p className="text-white/40 text-sm mb-8">
          © 2026 DUMC NextGen. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 text-white/40">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
