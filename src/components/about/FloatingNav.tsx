import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

interface NavItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  color: string;
}

const navItems: NavItem[] = [
  { 
    id: 'chapter-philosophy', 
    number: '01',
    title: 'Philosophy',
    subtitle: '우리의 철학',
    color: 'rgba(255, 182, 193, 1)'
  },
  { 
    id: 'chapter-aboutus', 
    number: '02',
    title: 'About Us',
    subtitle: '우리의 이야기',
    color: 'rgba(143, 188, 136, 1)'
  },
  { 
    id: 'chapter-founder', 
    number: '03',
    title: 'Founder',
    subtitle: '설립자',
    color: 'rgba(217, 119, 87, 1)'
  },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show nav after scrolling past initial hero section
      setIsVisible(scrollY > windowHeight * 0.3);
      
      // Detect active section with improved logic
      let currentActive: string | null = null;
      const scrollPosition = scrollY + windowHeight * 0.4; // Trigger point at 40% of viewport
      
      // Check sections in reverse order to get the topmost visible one
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          // Section is active if scroll position is within its bounds
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = navItems[i].id;
            break;
          }
          
          // If we're past the last section, it's active
          if (i === navItems.length - 1 && scrollPosition >= sectionTop) {
            currentActive = navItems[i].id;
            break;
          }
        }
      }
      
      // Fallback: if no section found, check if we're before first section
      if (!currentActive) {
        const firstSection = document.getElementById(navItems[0].id);
        if (firstSection && scrollPosition < firstSection.offsetTop) {
          currentActive = navItems[0].id;
        } else if (firstSection && scrollPosition >= firstSection.offsetTop) {
          // Default to first section if we're past it but haven't found another
          currentActive = navItems[0].id;
        }
      }
      
      setActiveSection(currentActive);
    };
    
    // Throttle scroll events for better performance
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
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Calculate progress for each section
  const getSectionProgress = (index: number): number => {
    if (!activeSection) return 0;
    const activeIndex = navItems.findIndex(item => item.id === activeSection);
    if (activeIndex === -1) return 0;
    
    if (index < activeIndex) return 1;
    if (index === activeIndex) {
      // Calculate progress within current section
      const section = document.getElementById(navItems[activeIndex].id);
      if (!section) return 0;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPosition = scrollY + windowHeight * 0.4;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (sectionHeight === 0) return 0;
      const progress = Math.min(1, Math.max(0, (scrollPosition - sectionTop) / sectionHeight));
      return progress;
    }
    return 0;
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Container */}
          <div className="relative">
            {/* Subtle background blur */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
              }}
            />
            
            {/* Main container */}
            <div 
              className="relative px-4 py-6 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(166, 124, 82, 0.08)',
              }}
            >
              <div className="flex flex-col gap-6 items-center">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  const progress = getSectionProgress(index);
                  const isHovered = hoveredIndex === index;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative group flex flex-col items-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Label tooltip - appears on hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, x: 10, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute right-full mr-4 whitespace-nowrap pointer-events-none"
                            style={{ zIndex: 10 }}
                          >
                            <div 
                              className="px-4 py-2 rounded-lg"
                              style={{
                                background: 'rgba(42, 42, 42, 0.85)',
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                              }}
                            >
                              <div 
                                className="text-xs tracking-[0.08em] text-white font-medium"
                                style={{ fontFamily: "'Noto Serif KR', serif" }}
                              >
                                {item.title}
                              </div>
                              <div 
                                className="text-[10px] tracking-[0.05em] text-white/70 mt-0.5"
                                style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
                              >
                                {item.subtitle}
                              </div>
                            </div>
                            {/* Arrow */}
                            <div 
                              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0"
                              style={{
                                borderTop: '4px solid transparent',
                                borderBottom: '4px solid transparent',
                                borderLeft: `6px solid rgba(42, 42, 42, 0.85)`,
                              }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Chapter number - subtle */}
                      <motion.div
                        animate={{
                          opacity: isActive ? 0.4 : 0.15,
                          scale: isActive ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-2"
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: '10px',
                          fontWeight: 300,
                          letterSpacing: '0.15em',
                          color: '#6B5C4F',
                        }}
                      >
                        {item.number}
                      </motion.div>
                      
                      {/* Dot indicator */}
                      <div className="relative flex items-center justify-center">
                        {/* Progress ring - only for active section */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute w-8 h-8 rounded-full"
                            style={{
                              border: `1.5px solid ${item.color}`,
                              opacity: 0.3,
                            }}
                          />
                        )}
                        
                        {/* Active indicator line */}
                        {isActive && (
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: progress }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 origin-top"
                            style={{
                              height: '24px',
                              background: `linear-gradient(to bottom, ${item.color}, transparent)`,
                            }}
                          />
                        )}
                        
                        {/* Dot */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1.2 : isHovered ? 1.1 : 0.8,
                            backgroundColor: isActive ? item.color : 'rgba(166, 124, 82, 0.4)',
                          }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="w-2 h-2 rounded-full relative z-10"
                          style={{
                            boxShadow: isActive 
                              ? `0 0 12px ${item.color}40, 0 2px 8px rgba(0,0,0,0.1)`
                              : '0 1px 4px rgba(0,0,0,0.08)',
                          }}
                        />
                      </div>
                      
                      {/* Connecting line to next item */}
                      {index < navItems.length - 1 && (
                        <motion.div
                          animate={{
                            opacity: isActive ? 0.2 : 0.08,
                          }}
                          className="absolute top-8 left-1/2 -translate-x-1/2 w-px"
                          style={{
                            height: '20px',
                            background: `linear-gradient(to bottom, ${item.color}, transparent)`,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
            
            {/* Vertical progress line - subtle */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-px origin-top pointer-events-none"
              style={{
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(166, 124, 82, 0.1), transparent)',
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
