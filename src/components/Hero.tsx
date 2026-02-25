import React from 'react';
import { motion } from 'motion/react';
import { Play, Trophy } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-pink mb-6">
          <Trophy size={14} />
          <span>DUMC NEXTGEN PRESENTS</span>
        </div>
        
        <div className="max-w-2xl mx-auto mb-8">
          <img 
            src="/logo (1).png" 
            alt="KINGDOMLYMPICS" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/800x300/0A0A0A/FFFFFF?text=KINGDOMLYMPICS';
            }}
          />
        </div>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light">
          Come have fun and invite your friends.
        </p>

        {/* Recap Video Placeholder */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative group cursor-pointer max-w-4xl mx-auto w-full aspect-video rounded-3xl overflow-hidden glass-card"
        >
          <img 
            src="https://picsum.photos/seed/kingdom/1280/720" 
            alt="Recap Placeholder" 
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-pink group-hover:text-black transition-all">
              <Play fill="currentColor" size={32} className="ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Last Year's Highlights</p>
            <h3 className="text-xl font-bold">Watch the Recap</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
