import React from 'react';
import { motion } from 'motion/react';

// Floating blob decoration for section transitions
function FloatingBlob({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 1.2, 
        delay,
        ease: "easeOut"
      }}
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.svg
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        width="60"
        height="60"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M 50 10
             C 70 12, 85 25, 90 45
             C 93 60, 90 75, 80 85
             C 68 93, 52 95, 38 90
             C 25 85, 12 72, 10 55
             C 8 40, 15 25, 28 15
             C 38 8, 42 9, 50 10 Z"
          fill="currentColor"
          opacity="0.1"
        />
      </motion.svg>
    </motion.div>
  );
}

export default function SectionDivider() {
  return (
    <div className="relative h-32 md:h-40 overflow-hidden">
      {/* Gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-0 right-0 h-px origin-center"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(45, 80, 22, 0.15) 20%, rgba(45, 80, 22, 0.3) 50%, rgba(45, 80, 22, 0.15) 80%, transparent 100%)'
        }}
      />
      
      {/* Decorative blobs */}
      <FloatingBlob delay={0.3} className="top-1/2 left-[20%] -translate-y-1/2 text-accent-green" />
      <FloatingBlob delay={0.5} className="top-1/2 right-[20%] -translate-y-1/2 text-pink-soft" />
      
      {/* Center ornament */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="3" fill="#2d5016" opacity="0.4" />
          <circle cx="20" cy="20" r="6" stroke="#2d5016" strokeWidth="1" opacity="0.2" fill="none" />
          <circle cx="20" cy="20" r="10" stroke="#2d5016" strokeWidth="0.5" opacity="0.1" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
}
