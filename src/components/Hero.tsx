import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaintVisible, setIsPaintVisible] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  
  // Paint layer scroll fade - starts from 0.65 after reveal
  const scrollPaintOpacity = useTransform(
    scrollYProgress, 
    [0, 0.5, 0.8], 
    [0.65, 0.25, 0.08]
  );
  const scrollPaintBlurValue = useTransform(
    scrollYProgress, 
    [0, 0.5, 0.8], 
    [0, 4, 10]
  );
  
  // Title remains slightly visible when paint fades
  const titleOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0.95]);
  const titleLetterSpacing = useTransform(scrollYProgress, [0.6, 0.9], ['-0.025em', '-0.015em']);
  
  // Track blur value for animation
  const [currentBlur, setCurrentBlur] = useState(6);
  
  // Update blur on scroll
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isPaintVisible) {
      if (latest < 0.5) {
        setCurrentBlur(latest * 8); // 0 to 4
      } else if (latest < 0.8) {
        setCurrentBlur(4 + (latest - 0.5) * 20); // 4 to 10
      } else {
        setCurrentBlur(10);
      }
    }
  });
  
  // Paint reveal on page load
  useEffect(() => {
    const handleLoad = () => {
      requestAnimationFrame(() => {
        setIsPaintVisible(true);
        setCurrentBlur(0);
      });
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
  return (
    <section 
      id="hero-section"
      ref={sectionRef}
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
      <motion.div 
        className={`absolute inset-0 pointer-events-none paint-layer ${isPaintVisible ? 'is-visible' : ''}`}
        style={{
          zIndex: 2,
          opacity: isPaintVisible ? scrollPaintOpacity : 0.18,
        }}
        transition={{
          opacity: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
      >
        <motion.img 
          src={getImagePath("/assets/main/hero.jpg")}
          alt="Paint texture"
          className="paint-image"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            minWidth: '100vw',
            minHeight: '100vh',
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'multiply',
            opacity: 1,
            objectFit: 'cover',
            objectPosition: '46% 58%',
          }}
          animate={{
            filter: `blur(${currentBlur}px)`,
          }}
          transition={{
            filter: {
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
        />
        
        {/* Paint light overlay - thickness feeling, not digital light */}
        <div 
          className="absolute inset-0 paint-light"
          style={{
            background: 'radial-gradient(at 40% 35%, rgba(255,255,255,0.22), rgba(255,255,255,0.05) 45%, transparent 65%)',
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Paint layer depth gradient - brightness variation */}
        <div 
          className="absolute inset-0 paint-depth"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.25) 100%)',
            mixBlendMode: 'overlay',
            pointerEvents: 'none',
          }}
        />
      </motion.div>

      {/* Content Container */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          paddingLeft: 'clamp(1.25rem, 4vw, 2.5rem)',
          paddingRight: 'clamp(1.25rem, 4vw, 2.5rem)',
          paddingTop: 'clamp(2.5rem, 8vw, 7rem)', // 모바일에서 상단 여백 축소해 배경 위로 올림
          paddingBottom: 'clamp(3rem, 9vw, 7rem)',
          zIndex: 3,
        }}
      >
        <div className="w-full max-w-[1800px] mx-auto relative">
          
          {/* Top tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.2, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="flex items-center justify-center mb-12 md:mb-16 relative z-30"
          >
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
                className="relative inline-block title-with-mask"
                style={{ 
                  fontFamily: "'IM Fell English', 'Noto Serif KR', serif",
                  fontSize: 'clamp(2rem, 6vw, 4.8rem)', // iPhone 14 Pro 기준 한 줄 및 좌우 여백 확보
                  fontWeight: 400,
                  letterSpacing: titleLetterSpacing ?? '-0.02em',
                  fontStyle: 'italic',
                  color: '#2D5016',
                  lineHeight: 1.05,
                  textShadow: '0 0.5px 0 rgba(0,0,0,0.03)',
                  opacity: titleOpacity,
                  position: 'relative',
                  zIndex: 5,
                  whiteSpace: 'nowrap',
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
            className="flex flex-nowrap items-center justify-center gap-8 md:gap-12 mt-12 md:mt-24 relative z-30 overflow-hidden"
            style={{
              gap: 'clamp(0.5rem, 2.5vw, 1.25rem)', // 모바일에서 한 줄 유지 및 좌우 여백 확보
              paddingInline: 'clamp(0.5rem, 3vw, 1rem)',
            }}
          >
            {['Emotional Art', 'Color Psychology + Child Art', 'Forêt des Crayons'].map((tag, i) => (
              <span 
                key={i}
                className="tracking-wide whitespace-nowrap"
                style={{
                  fontSize: 'clamp(0.7rem, 1.3vw, 0.92rem)', // iPhone 14 Pro 기준 한 줄
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

      {/* Enhanced styles */}
      <style>{`
        /* Title mask for clearer relationship with paint */
        .title-with-mask::after {
          content: '';
          position: absolute;
          inset: -0.2em;
          background: white;
          mix-blend-mode: lighten;
          opacity: 0.05;
          pointer-events: none;
          z-index: -1;
        }

        @media (max-width: 768px) {
          .paint-layer {
            transform: translateY(-8%);
          }
          .paint-layer .paint-image {
            opacity: 0.45 !important;
          }
        }
      `}</style>
    </section>
  );
}

