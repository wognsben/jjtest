import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useParallaxScroll } from '../hooks/useGSAPScrollTrigger';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // GSAP parallax refs
  const titleRef = useRef<HTMLHeadingElement>(null);
  const brushRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  // Apply parallax effects
  useParallaxScroll(titleRef, { speed: 0.3 });
  useParallaxScroll(brushRef, { speed: 0.6 });
  useParallaxScroll(subtitleRef, { speed: 0.2 });
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const opacity = Math.min(scrollY / (window.innerHeight * 0.3), 1);
  const opacityValue = isNaN(opacity) ? 1 : 1 - opacity;
  const translateY = -scrollY * 0.3;
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Brush stroke image - positioned on the right, full height */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 bottom-0 w-[45vw] lg:w-[40vw] pointer-events-none"
        style={{ 
          zIndex: 1,
          opacity: opacityValue * 0.9,
          transform: `translateY(${translateY}px)`
        }}
        ref={brushRef}
      >
        {/* TODO: 이미지 파일 추가 후 아래 주석 해제하고 placeholder div 제거 */}
        {/* <img 
          src={brushStroke} 
          alt="Brush stroke" 
          className="w-full h-full object-cover object-right"
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.05))'
          }}
        /> */}
        <div className="w-full h-full bg-gradient-to-l from-transparent via-brown-100/20 to-brown-200/30" />
      </motion.div>

      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{ 
          opacity: opacityValue,
          transform: `translateY(${translateY}px)`,
          zIndex: 10
        }}
      >
        <div className="w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24 py-32">
          {/* Top tagline with palette icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mb-12 md:mb-16"
          >
            {/* TODO: 이미지 파일 추가 후 아래 주석 해제하고 SVG 제거 */}
            {/* <img 
              src={heartIcon} 
              alt="Heart" 
              className="w-8 h-8 md:w-10 md:h-10"
              style={{ opacity: 0.7 }}
            /> */}
            <svg 
              className="w-8 h-8 md:w-10 md:h-10" 
              viewBox="0 0 24 24" 
              fill="none" 
              style={{ opacity: 0.7 }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
            </svg>
            <p className="text-sm md:text-base text-secondary">
              감정은 예술이 되고, 예술은 세계관이 됩니다.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Main title - centered */}
            <div className="text-center mb-16 md:mb-24 relative z-20">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative inline-block"
                style={{ 
                  fontFamily: "'Cormorant Garamond', 'Noto Serif KR', serif",
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  fontStyle: 'italic',
                  color: '#2d5016'
                }}
                ref={titleRef}
              >
                <span style={{ fontFamily: "'Sloop Script Pro', cursive" }}>F</span>ORÊT DES C<span style={{ fontFamily: "'Sloop Script Pro', cursive" }}>R</span>AYONS
              </motion.h1>
            </div>
          </div>
          
          {/* Bottom tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 md:mt-24"
          >
            {['Emotional Art', 'Color Psychology + Child Art', 'Forêt des Crayons'].map((tag, i) => (
              <span 
                key={i}
                className="text-sm md:text-base text-tertiary tracking-wide"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
