import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-white"
      style={{
        minHeight: '100vh',
      }}
    >
      {/* Grain texture - subtle */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          zIndex: 1,
        }}
      />

      {/* PAINT LAYER - Full viewport, behind all content */}
      <div 
        className="absolute inset-0 pointer-events-none paint-layer"
        style={{
          zIndex: 2,
        }}
      >
        <img 
          src="/assets/main/hero.jpg"
          alt="Paint texture"
          className="paint-image"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'multiply',
            opacity: 0.65,
            objectFit: 'cover',
          }}
        />
        
        {/* Paint light overlay */}
        <div 
          className="absolute inset-0 paint-light"
          style={{
            background: 'radial-gradient(at 35% 30%, rgba(255,255,255,0.35), transparent 60%)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* Content Container */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
          paddingTop: 'clamp(4rem, 10vw, 8rem)',
          paddingBottom: 'clamp(4rem, 10vw, 8rem)',
          zIndex: 3,
        }}
      >
        <div className="w-full max-w-[1800px] mx-auto relative">
          
          {/* Top tagline with heart icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="flex items-center justify-center gap-4 mb-12 md:mb-16 relative z-30"
          >
            <svg 
              className="w-8 h-8 md:w-10 md:h-10" 
              viewBox="0 0 24 24" 
              fill="none" 
              style={{ opacity: 0.7 }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
            </svg>
            <p 
              className="text-secondary"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              감정은 예술이 되고, 예술은 세계관이 됩니다.
            </p>
          </motion.div>
          
          {/* Hero Title Container */}
          <div className="relative">
            
            {/* HERO TITLE */}
            <div 
              className="text-center mb-16 md:mb-24 relative"
              style={{
                zIndex: 20,
              }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.4, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="relative inline-block"
                style={{ 
                  fontFamily: "'IM Fell English', 'Noto Serif KR', serif",
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  fontStyle: 'italic',
                  color: '#2D5016',
                  lineHeight: 1.1,
                }}
              >
                FORÊT DES CRAYONS
              </motion.h1>
            </div>
          </div>
          
          {/* Bottom tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 md:mt-24 relative z-30"
            style={{
              gap: 'clamp(2rem, 5vw, 3rem)',
            }}
          >
            {['Emotional Art', 'Color Psychology + Child Art', 'Forêt des Crayons'].map((tag, i) => (
              <span 
                key={i}
                className="tracking-wide"
                style={{
                  fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                  color: '#666',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style>{`
        @media (max-width: 768px) {
          .paint-layer .paint-image {
            opacity: 0.45 !important;
          }
        }
      `}</style>
    </section>
  );
}
