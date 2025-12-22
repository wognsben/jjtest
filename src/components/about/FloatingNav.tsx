import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavItem {
  id: string;
  label: string;
  chapter: string;
}

const navItems: NavItem[] = [
  { id: 'chapter-philosophy', label: 'Philosophy', chapter: '01' },
  { id: 'chapter-aboutus', label: 'About Us', chapter: '02' },
  { id: 'chapter-founder', label: 'Founder', chapter: '03' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('chapter-philosophy');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight * 0.5);
      
      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
        >
          {/* Glass container */}
          <div className="relative">
            <div 
              className="absolute inset-0 bg-white/60 backdrop-blur-2xl rounded-full blur-sm"
            />
            <div 
              className="relative px-6 py-8 rounded-full border border-white/40 bg-white/40 backdrop-blur-xl"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)'
              }}
            >
              <div className="space-y-8">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="relative group flex items-center gap-4"
                      whileHover={{ x: -8 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Label - appears on hover */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="absolute right-full mr-6 whitespace-nowrap"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-brown-900/80 backdrop-blur-md rounded-lg blur-sm" />
                          <div className="relative px-4 py-2 rounded-lg bg-brown-900/90 backdrop-blur-md">
                            <span 
                              className="text-xs tracking-[0.15em] text-white font-medium"
                              style={{ fontFamily: "'Noto Serif KR', serif" }}
                            >
                              {item.label}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Dot indicator */}
                      <div className="relative flex items-center justify-center">
                        {/* Active ring */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="absolute w-8 h-8 rounded-full border-2 border-accent-green"
                            />
                          )}
                        </AnimatePresence>
                        
                        {/* Dot */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1 : 0.6,
                            backgroundColor: isActive ? '#8fbc88' : '#A67C52',
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-3 h-3 rounded-full"
                          style={{
                            boxShadow: isActive 
                              ? '0 4px 12px rgba(143,188,136,0.4)' 
                              : '0 2px 8px rgba(166,124,82,0.2)'
                          }}
                        />
                      </div>
                      
                      {/* Chapter number - subtle */}
                      <motion.span
                        animate={{
                          opacity: isActive ? 1 : 0.3,
                          scale: isActive ? 1 : 0.9,
                        }}
                        className="text-xs tracking-wider text-brown-700 font-medium absolute left-full ml-4"
                        style={{ fontFamily: "'Noto Serif KR', serif" }}
                      >
                        {item.chapter}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Progress indicator - vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(143,188,136,0.3), rgba(143,188,136,0) 100%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
