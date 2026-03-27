import { Hero } from './components/sections/Hero';
import { Countdown } from './components/sections/Countdown';
import { Description } from './components/sections/Description';
import { Timeline } from './components/sections/Timeline';
import { EventDetails } from './components/sections/EventDetails';
import { LeaderboardPreview } from './components/sections/LeaderboardPreview';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-pink selection:text-black relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink to-blue z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-dark/90 backdrop-blur-md border-b-2 border-blue/20 shadow-[0_2px_10px_rgba(0,255,255,0.1)]">
        <div className="font-display font-bold text-xl tracking-widest">
          <a href="#home" className="block">
            <span className="pixel-text-sm text-[10px] md:text-sm">KINGDOMLYMPICS</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-white/60">
          <a href="#home" className="hover:text-blue transition-none hover:underline decoration-4 underline-offset-4">Home</a>
          <a href="#countdown" className="hover:text-blue transition-none hover:underline decoration-4 underline-offset-4">Countdown</a>
          <a href="#about" className="hover:text-blue transition-none hover:underline decoration-4 underline-offset-4">About</a>
          <a href="#timeline" className="hover:text-blue transition-none hover:underline decoration-4 underline-offset-4">Timeline</a>
        </div>
      </nav>

      <main>
        <Hero />

        <div className="relative overflow-hidden">
          {/* Scattered pixel squares */}
          <div className="absolute top-[5%] left-[6%] w-2 h-2 bg-blue opacity-18 animate-pulse" style={{ animationDuration: '3.6s' }} />
          <div className="absolute top-[18%] right-[7%] w-3 h-3 bg-pink opacity-15 animate-pulse" style={{ animationDuration: '2.3s', animationDelay: '1.1s' }} />
          <div className="absolute top-[38%] left-[2%] w-3 h-3 bg-cyan-400 opacity-14 animate-pulse" style={{ animationDuration: '4.2s', animationDelay: '0.6s' }} />
          <div className="absolute top-[55%] right-[6%] w-2 h-2 bg-violet-400 opacity-16 animate-pulse" style={{ animationDuration: '2.7s', animationDelay: '1.4s' }} />
          <div className="absolute top-[72%] left-[5%] w-3 h-3 bg-pink opacity-12 animate-pulse" style={{ animationDuration: '3.1s', animationDelay: '0.3s' }} />
          <div className="absolute top-[88%] right-[4%] w-2 h-2 bg-blue opacity-20 animate-pulse" style={{ animationDuration: '3.8s', animationDelay: '0.9s' }} />

          <section id="about">
            <Description />
          </section>
          <section id="timeline">
            <Timeline />
          </section>
          <section id="details">
            <EventDetails />
          </section>
          <section id="countdown">
            <Countdown />
          </section>
          <section id="leaderboard">
            <LeaderboardPreview />
          </section>
        </div>
      </main>

      <footer className="py-12 px-4 border-t border-white/5 text-center">
        <p className="text-white/40 text-[10px] font-display mb-8">
          &copy; 2026 NextGen DUMC. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 text-white/40">
          <a href="https://www.instagram.com/nextgen.dumc/" className="hover:text-pink text-xs">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
