import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavItem {
  id: string;
  number: string;
  color: string;
}

const navItems: NavItem[] = [
  { 
    id: 'about-hero', 
    number: '',
    color: 'rgba(166, 124, 82, 1)',
  },
  { 
    id: 'chapter-cards', 
    number: '',
    color: 'rgba(166, 124, 82, 1)',
  },
  { 
    id: 'chapter-philosophy', 
    number: '01',
    color: 'rgba(255, 182, 193, 1)',
  },
  { 
    id: 'chapter-aboutus', 
    number: '02',
    color: 'rgba(143, 188, 136, 1)',
  },
  { 
    id: 'chapter-founder', 
    number: '03',
    color: 'rgba(217, 119, 87, 1)',
  },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setIsVisible(scrollY > 100);
      
      let currentActive: string | null = null;
      const scrollPosition = scrollY + windowHeight * 0.4;
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = navItems[i].id;
            break;
          }
          
          if (i === navItems.length - 1 && scrollPosition >= sectionTop) {
            currentActive = navItems[i].id;
            break;
          }
        }
      }
      
      if (!currentActive) {
        const firstSection = document.getElementById(navItems[0].id);
        if (firstSection && scrollPosition < firstSection.offsetTop) {
          currentActive = navItems[0].id;
        } else if (firstSection && scrollPosition >= firstSection.offsetTop) {
          currentActive = navItems[0].id;
        }
      }
      
      setActiveSection(currentActive);
    };
    
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
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);
  
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
  
  const getSectionProgress = (index: number): number => {
    if (!activeSection) return 0;
    const activeIndex = navItems.findIndex(item => item.id === activeSection);
    if (activeIndex === -1) return 0;
    
    if (index < activeIndex) return 1;
    if (index === activeIndex) {
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
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="fixed right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:block"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Container */}
          <div className="relative">
            {/* Premium glassmorphism background */}
            <div 
              className="absolute -inset-1 rounded-[28px]"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                boxShadow: '0 4px 24px rgba(166, 124, 82, 0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            />
            
            {/* Main container */}
            <div className="relative px-3 py-5 rounded-[24px]">
              <div className="flex flex-col gap-5 items-center">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  const progress = getSectionProgress(index);
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="relative group flex flex-col items-center"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Chapter number indicator */}
                      {item.number && (
                        <motion.div
                          animate={{
                            opacity: isActive ? 0.6 : 0.2,
                          }}
                          transition={{ duration: 0.3 }}
                          className="mb-1.5"
                          style={{
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: '9px',
                            fontWeight: 400,
                            letterSpacing: '0.1em',
                            color: isActive ? item.color.replace('1)', '0.9)') : '#A69780',
                          }}
                        >
                          {item.number}
                        </motion.div>
                      )}
                      
                      {/* Dot container */}
                      <div className="relative flex items-center justify-center w-6 h-6">
                        {/* Active outer ring */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1 : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            border: `1.5px solid ${item.color.replace('1)', '0.4)')}`,
                          }}
                        />
                        
                        {/* Progress arc */}
                        {isActive && progress > 0 && (
                          <svg 
                            className="absolute inset-0 w-full h-full -rotate-90"
                            viewBox="0 0 24 24"
                          >
                            <motion.circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              stroke={item.color}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: progress }}
                              transition={{ duration: 0.3 }}
                              style={{
                                strokeDasharray: '63',
                                strokeDashoffset: 0,
                              }}
                            />
                          </svg>
                        )}
                        
                        {/* Main dot */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1 : 0.65,
                            backgroundColor: isActive ? item.color : 'rgba(166, 124, 82, 0.3)',
                          }}
                          whileHover={{
                            scale: 0.9,
                            backgroundColor: item.color.replace('1)', '0.5)'),
                          }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="w-2.5 h-2.5 rounded-full relative z-10"
                          style={{
                            boxShadow: isActive 
                              ? `0 0 10px ${item.color.replace('1)', '0.3)')}, 0 2px 4px rgba(0,0,0,0.08)`
                              : '0 1px 3px rgba(0,0,0,0.06)',
                          }}
                        />
                      </div>
                      
                      {/* Connecting line */}
                      {index < navItems.length - 1 && (
                        <motion.div
                          animate={{
                            opacity: isActive ? 0.25 : 0.1,
                            background: isActive 
                              ? `linear-gradient(to bottom, ${item.color.replace('1)', '0.4)')}, transparent)`
                              : 'linear-gradient(to bottom, rgba(166, 124, 82, 0.2), transparent)',
                          }}
                          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
