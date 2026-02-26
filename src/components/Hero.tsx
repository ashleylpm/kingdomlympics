import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Trophy } from 'lucide-react';
import recapVid from "/recap.mp4";


export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.2; // 50%
    }
  }, []);

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
          <span>NextGen DUMC PRESENTS</span>
        </div>
        
        <div className="max-w-2xl mx-auto mb-8">
          <img 
            src="/logo.png" 
            alt="KINGDOMLYMPICS" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/800x300/0A0A0A/FFFFFF?text=KINGDOMLYMPICS';
            }}
          />
        </div>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light">
          Come join the fun and bring your squad along!
        </p>

        {/* Recap Video */}
        <motion.div 
          whileHover={!isPlaying ? { scale: 1.02 } : {}}
          className={`relative group max-w-4xl mx-auto w-full aspect-video rounded-3xl overflow-hidden glass-card ${!isPlaying ? 'cursor-pointer' : ''}`}
          onClick={() => !isPlaying && setIsPlaying(true)}
        >
          <video
            ref={videoRef}
            className="w-full h-auto rounded-xl shadow-lg"
            controls
            loop
          >
            <source src={recapVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </section>
  );
};
