import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

function RebuildText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  
  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function HighlightText({ children, showUnderline = true }: { children: React.ReactNode; showUnderline?: boolean }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10" style={{ color: '#2e7d32' }}>{children}</span>
      {showUnderline && (
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-[0.35em] origin-left -z-0"
          style={{ 
            transform: 'translateY(0.15em)',
            backgroundColor: 'rgba(124, 179, 66, 0.6)'
          }}
        />
      )}
    </span>
  );
}

// 네온 붓질 효과가 있는 하이라이트 텍스트
function NeonBrushText({ children }: { children: React.ReactNode }) {
  return (
    <span 
      style={{ 
        color: '#2e7d32',
        textDecoration: 'underline',
        textDecorationColor: '#2e7d32',
        textDecorationThickness: '2px',
        textUnderlineOffset: '3px',
        boxDecorationBreak: 'clone',
      }}
    >
      {children}
    </span>
  );
}

// Floating blob decoration
function FloatingBlob({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.9, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`absolute pointer-events-none floating-blob ${className}`}
      style={{
        margin: '-20px',
      }}
    >
      <motion.svg
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        width="80"
        height="80"
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
          opacity="0.15"
        />
      </motion.svg>
    </motion.div>
  );
}

export default function MethodNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    
    setMousePos({ x: deltaX * 12, y: deltaY * 12 });
  };
  
  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };
  
  return (
    <>
      {/* Hero section - Image background */}
      <section 
        ref={sectionRef}
        className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
        style={{
          backgroundImage: `url(${getImagePath('/assets/main/Group 4 (1).png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        {/* Floating blobs */}
        <FloatingBlob delay={0.5} className="top-12 left-4 md:left-12 text-white" />
        <FloatingBlob delay={0.7} className="bottom-24 right-4 md:right-24 text-accent-green" />
      </section>
      
      {/* Detail section - Image */}
      <section 
        ref={detailRef}
        className="relative overflow-hidden"
      >
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={getImagePath('/assets/main/method-main (1).png')}
          alt="크레용숲 메소드"
          className="w-full h-auto block"
        />
      </section>

      {/* FloatingBlob overflow fix styles */}
      <style>{`
        .floating-blob {
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .floating-blob {
            margin: -15px !important;
          }
        }
      `}</style>
    </>
  );
}
