import React from 'react';
import { motion } from 'motion/react';

interface HandDrawnSVGProps {
  type: 'circle' | 'line' | 'scribble' | 'star' | 'heart';
  color?: string;
  size?: number;
  className?: string;
}

export default function HandDrawnSVG({ type, color = '#8fbc88', size = 100, className = '' }: HandDrawnSVGProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  };

  const renderSVG = () => {
    switch (type) {
      case 'circle':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <motion.path
              d="M 50,10 C 70,10 90,30 90,50 C 90,70 70,90 50,90 C 30,90 10,70 10,50 C 10,30 30,12 48,10"
              fill="none"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              style={{
                filter: 'url(#roughen)',
              }}
            />
            <defs>
              <filter id="roughen">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
              </filter>
            </defs>
          </svg>
        );
      
      case 'line':
        return (
          <svg width={size * 1.5} height={size * 0.3} viewBox="0 0 150 30" className={className}>
            <motion.path
              d="M 5,15 Q 40,12 75,15 T 145,15"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              style={{
                filter: 'url(#roughen2)',
              }}
            />
            <defs>
              <filter id="roughen2">
                <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
              </filter>
            </defs>
          </svg>
        );
      
      case 'scribble':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <motion.path
              d="M 20,30 Q 30,20 40,30 T 60,30 Q 70,35 65,45 T 50,60 Q 40,65 35,55 T 30,40"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              style={{
                filter: 'url(#roughen3)',
              }}
            />
            <defs>
              <filter id="roughen3">
                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
              </filter>
            </defs>
          </svg>
        );
      
      case 'star':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <motion.path
              d="M 50,15 L 58,40 L 85,40 L 65,56 L 72,82 L 50,66 L 28,82 L 35,56 L 15,40 L 42,40 Z"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              style={{
                filter: 'url(#roughen4)',
              }}
            />
            <defs>
              <filter id="roughen4">
                <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
              </filter>
            </defs>
          </svg>
        );
      
      case 'heart':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            <motion.path
              d="M 50,85 C 45,80 15,55 15,35 C 15,20 25,12 35,15 C 42,17 47,23 50,30 C 53,23 58,17 65,15 C 75,12 85,20 85,35 C 85,55 55,80 50,85 Z"
              fill="none"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              style={{
                filter: 'url(#roughen5)',
              }}
            />
            <defs>
              <filter id="roughen5">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" />
              </filter>
            </defs>
          </svg>
        );
      
      default:
        return null;
    }
  };

  return renderSVG();
}

// Animated decorative element with multiple SVGs
export function HandDrawnDecoration({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HandDrawnSVG type="circle" color="rgba(143, 188, 136, 0.4)" size={150} />
      </motion.div>
    </div>
  );
}

// Floating hand-drawn elements
export function FloatingHandDrawn() {
  const elements = [
    { type: 'circle' as const, color: 'rgba(255, 182, 193, 0.3)', size: 120, top: '10%', left: '5%', delay: 0 },
    { type: 'star' as const, color: 'rgba(143, 188, 136, 0.3)', size: 80, top: '60%', right: '8%', delay: 1 },
    { type: 'scribble' as const, color: 'rgba(166, 124, 82, 0.25)', size: 100, bottom: '15%', left: '10%', delay: 2 },
  ];

  return (
    <>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="floating-dot absolute pointer-events-none"
          style={{
            top: el.top,
            bottom: el.bottom,
            left: el.left,
            right: el.right,
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.95, 1.05, 0.95],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HandDrawnSVG type={el.type} color={el.color} size={el.size} />
        </motion.div>
      ))}
    </>
  );
}
