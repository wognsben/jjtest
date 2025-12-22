import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const cursorSize = isHovering ? 80 : 16;
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover (not mobile)
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const updateCursorOnHover = () => {
      const hoverableElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      );

      hoverableElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          const text = el.getAttribute('data-cursor-text');
          if (text) setCursorText(text);
        });
        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorText('');
        });
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Initial setup and observer for dynamic elements
    updateCursorOnHover();
    const observer = new MutationObserver(updateCursorOnHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  // Hide default cursor ONLY on body, not on all elements
  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.innerHTML = `
      @media (hover: hover) and (pointer: fine) {
        html, body {
          cursor: none !important;
        }
        a, button, [role="button"], input, textarea, select, [data-cursor-hover] {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.getElementById('custom-cursor-style');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        zIndex: 999999,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Main cursor dot */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: isHovering ? '#8fbc88' : '#333333',
          }}
          animate={{
            scale: isHovering ? 1 : 0.5,
            opacity: isHovering ? 0.8 : 1,
          }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: '#333333',
          }}
          animate={{
            width: isHovering ? 0 : 6,
            height: isHovering ? 0 : 6,
          }}
        />
        
        {/* Hover text */}
        {cursorText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-center"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#ffffff',
            }}
          >
            {cursorText}
          </motion.div>
        )}
      </motion.div>
      
      {/* Trailing particles */}
      {isHovering && (
        <>
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-pink"
            animate={{
              x: [0, -20, -15],
              y: [0, -10, 5],
              opacity: [0.8, 0, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-green"
            animate={{
              x: [0, 15, 20],
              y: [0, 10, -5],
              opacity: [0.8, 0, 0],
            }}
            transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }}
          />
        </>
      )}
    </motion.div>
  );
}

// Magnetic button wrapper
interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className = '' }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    setPosition({
      x: distanceX * 0.3,
      y: distanceY * 0.3,
    });
  };
  
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: 'spring', damping: 15, stiffness: 150 }}
    >
      {children}
    </motion.div>
  );
}
