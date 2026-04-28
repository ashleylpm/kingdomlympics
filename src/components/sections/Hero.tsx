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
        { top: 5, left: 76, size: 3, color: 'bg-pink', opacity: 40, duration: 2.8 },
        { top: 14, left: 18, size: 5, color: 'bg-blue', opacity: 30, duration: 3.5 },
        { top: 9, left: 48, size: 2, color: 'bg-cyan-300', opacity: 45, duration: 2.1 },
        { top: 28, left: 88, size: 6, color: 'bg-fuchsia-500', opacity: 25, duration: 3.2 },
        { top: 22, left: 6, size: 3, color: 'bg-blue', opacity: 35, duration: 1.7 },
        { top: 38, left: 62, size: 2, color: 'bg-pink', opacity: 50, duration: 3.9 },
        { top: 34, left: 35, size: 5, color: 'bg-violet-400', opacity: 30, duration: 2.3 },
        { top: 48, left: 93, size: 3, color: 'bg-blue', opacity: 40, duration: 1.9 },
        { top: 55, left: 15, size: 6, color: 'bg-pink', opacity: 35, duration: 3.1 },
        { top: 44, left: 52, size: 3, color: 'bg-purple-400', opacity: 25, duration: 2.6 },
        { top: 63, left: 71, size: 4, color: 'bg-cyan-400', opacity: 45, duration: 1.4 },
        { top: 70, left: 27, size: 3, color: 'bg-pink', opacity: 20, duration: 3.7 },
        { top: 77, left: 84, size: 2, color: 'bg-blue', opacity: 40, duration: 2.5 },
        { top: 83, left: 42, size: 5, color: 'bg-fuchsia-400', opacity: 30, duration: 1.6 },
        { top: 90, left: 9, size: 4, color: 'bg-blue', opacity: 35, duration: 3.3 },
        { top: 3, left: 55, size: 3, color: 'bg-pink', opacity: 40, duration: 2.9 },
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
            src="/logo_colour.svg"
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
