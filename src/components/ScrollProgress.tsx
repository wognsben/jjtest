import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // State for scroll-to-top button visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-pink to-brown-700 origin-left z-[200]"
        style={{ scaleX }}
      />
      
      {/* Scroll to top button - Premium Awwwards/Behance Style */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileHover={{ 
            scale: 1.02,
            y: -2,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
          }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[200] hidden md:flex items-center justify-center group"
          style={{
            cursor: 'pointer',
          }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(166, 124, 82, 0.15), transparent 70%)',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Main button container */}
          <div
            className="relative px-5 py-3 rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)',
              border: '1px solid rgba(166, 124, 82, 0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
              transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {/* Grain overlay - subtle texture */}
            <div
              className="absolute inset-0 rounded-full opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                mixBlendMode: 'multiply',
              }}
            />
            
            {/* Inner highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 rounded-t-full pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)',
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex items-center gap-2.5">
              {/* Arrow icon */}
              <motion.svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  color: '#8B6F47',
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <path d="M18 15l-6-6-6 6" />
              </motion.svg>
              
              {/* Text */}
              <span
                className="text-xs tracking-[0.08em] font-medium uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#8B6F47',
                  letterSpacing: '0.1em',
                }}
              >
                Top
              </span>
            </div>
            
            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%)',
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
                x: ['-100%', '200%'],
              }}
              transition={{
                x: { duration: 0.6 },
                opacity: { duration: 0.3 },
              }}
            />
          </div>
        </motion.button>
      )}
    </>
  );
}

// Section navigation dots
interface Section {
  id: string;
  label: string;
}

export function SectionNav({ sections }: { sections: Section[] }) {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show nav after scrolling past initial view
      setIsVisible(scrollY > windowHeight * 0.3);
      
      // Find active section based on scroll position
      const scrollPosition = scrollY + windowHeight * 0.4;
      
      let currentActive = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const sectionTop = element.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentActive = i;
            break;
          }
        }
      }
      
      setActiveSection(currentActive);
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[200] hidden lg:block"
    >
      {/* Container with subtle background */}
      <div 
        className="relative px-3 py-4 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(166, 124, 82, 0.1)',
        }}
      >
        <div className="flex flex-col gap-5 items-center">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active ring */}
              {activeSection === index && (
                <motion.div
                  layoutId="activeRing"
                  className="absolute w-5 h-5 rounded-full"
                  style={{
                    border: '1.5px solid #8fbc88',
                    opacity: 0.5,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              
              {/* Dot */}
              <motion.div 
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                animate={{
                  scale: activeSection === index ? 1.2 : 1,
                  backgroundColor: activeSection === index ? '#8fbc88' : 'rgba(166, 124, 82, 0.4)',
                }}
                style={{
                  boxShadow: activeSection === index 
                    ? '0 0 8px rgba(143, 188, 136, 0.4)' 
                    : 'none',
                }}
              />
              
              {/* Label tooltip */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-8 top-1/2 -translate-y-1/2 px-4 py-2 bg-brown-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {section.label}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-brown-800" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Scroll hint indicator
export function ScrollHint() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3"
      style={{ pointerEvents: 'none' }}
    >
      <span 
        className="text-sm text-brown-600 tracking-widest"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        SCROLL
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-6 h-10" viewBox="0 0 24 40" fill="none">
          <rect x="8" y="2" width="8" height="14" rx="4" stroke="#A67C52" strokeWidth="2" />
          <motion.circle
            cx="12"
            cy="6"
            r="2"
            fill="#A67C52"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}