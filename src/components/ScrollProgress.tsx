import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // State for percentage display
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Listen to scrollYProgress changes
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-accent-pink to-brown-700 origin-left z-[200]"
        style={{ scaleX }}
      />
      
      {/* Circular progress indicator - bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed bottom-8 right-8 z-[200] hidden md:block"
      >
        <div className="relative w-16 h-16">
          {/* Background circle */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="3"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress
              }}
              strokeDasharray="283"
              strokeDashoffset="0"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8fbc88" />
                <stop offset="50%" stopColor="#FFB6C1" />
                <stop offset="100%" stopColor="#A67C52" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center percentage */}
          <div 
            className="absolute inset-0 flex items-center justify-center text-xs font-bold text-brown-800"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span>{scrollPercentage}%</span>
          </div>
        </div>
      </motion.div>
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

  useEffect(() => {
    const observers = sections.map((section, index) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-[200] hidden lg:flex flex-col gap-4"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Dot */}
          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            activeSection === index
              ? 'bg-accent-green border-accent-green scale-125'
              : 'bg-transparent border-brown-300 hover:border-accent-green'
          }`} />
          
          {/* Label tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 px-4 py-2 bg-brown-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {section.label}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-brown-800" />
          </motion.div>
        </motion.button>
      ))}
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