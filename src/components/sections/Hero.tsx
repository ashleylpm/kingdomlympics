import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';
import { Badge } from '../ui/Badge';
import recapVid from "/recap.mp4";


export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.2;
    }
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
      {/* Pixel Background Elements */}
      {[
        { top: 7, left: 83, size: 3, color: 'bg-blue', opacity: 45, duration: 2.4 },
        { top: 19, left: 11, size: 4, color: 'bg-pink', opacity: 35, duration: 1.8 },
        { top: 12, left: 57, size: 2, color: 'bg-cyan-300', opacity: 50, duration: 3.1 },
        { top: 31, left: 74, size: 3, color: 'bg-fuchsia-500', opacity: 30, duration: 2.7 },
        { top: 26, left: 3, size: 5, color: 'bg-blue', opacity: 25, duration: 1.3 },
        { top: 41, left: 91, size: 2, color: 'bg-pink', opacity: 55, duration: 3.6 },
        { top: 37, left: 29, size: 4, color: 'bg-violet-400', opacity: 40, duration: 2.0 },
        { top: 52, left: 67, size: 3, color: 'bg-blue', opacity: 35, duration: 1.6 },
        { top: 59, left: 8, size: 2, color: 'bg-pink', opacity: 45, duration: 3.3 },
        { top: 47, left: 44, size: 4, color: 'bg-purple-400', opacity: 30, duration: 2.9 },
        { top: 66, left: 82, size: 3, color: 'bg-cyan-400', opacity: 40, duration: 1.5 },
        { top: 72, left: 19, size: 5, color: 'bg-pink', opacity: 20, duration: 3.8 },
        { top: 79, left: 53, size: 2, color: 'bg-blue', opacity: 50, duration: 2.2 },
        { top: 85, left: 36, size: 3, color: 'bg-fuchsia-400', opacity: 35, duration: 1.9 },
        { top: 91, left: 71, size: 4, color: 'bg-blue', opacity: 30, duration: 3.4 },
        { top: 4, left: 39, size: 2, color: 'bg-pink', opacity: 45, duration: 2.6 },
      ].map((p, i) => (
        <div
          key={i}
          className={`absolute ${p.color}`}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size * 4}px`,
            height: `${p.size * 4}px`,
            opacity: p.opacity / 100,
            animation: `pulse ${p.duration}s ease-in-out ${(i * 0.3) % 2.5}s infinite`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <Badge icon={<Icon icon="pixelarticons:trophy" width={14} />} className="mb-6">
          NextGen DUMC PRESENTS
        </Badge>

        <div className="max-w-2xl mx-auto mb-8">
          <img
            src="/logo.png"
            alt="KINGDOMLYMPICS"
            className="w-full h-auto object-contain"
            style={{ imageRendering: 'auto' }}
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/800x300/0A0A0A/FFFFFF?text=KINGDOMLYMPICS';
            }}
          />
        </div>

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
