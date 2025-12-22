import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  {
    id: 1,
    english: 'Sense',
    korean: '감각',
    color: '#f9d5db',
    darkColor: '#b8868f'
  },
  {
    id: 2,
    english: 'Expression',
    korean: '표현',
    color: '#f9d5db',
    darkColor: '#b8868f'
  },
  {
    id: 3,
    english: 'Story',
    korean: '의미',
    color: '#f9d5db',
    darkColor: '#b8868f'
  },
  {
    id: 4,
    english: 'Archive',
    korean: '기록',
    color: '#f9d5db',
    darkColor: '#b8868f'
  },
  {
    id: 5,
    english: 'Integration',
    korean: '세계관',
    color: '#d4e8d4',
    darkColor: '#6b9b6b'
  }
];

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

// Organic blob border
function OrganicBorder({ color, isHovered }: { color: string; isHovered: boolean }) {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox="0 0 240 160"
      fill="none"
      style={{ 
        transform: 'scale(1.02)',
        filter: 'blur(0.4px)'
      }}
    >
      <motion.path
        d="M 30 20 
           C 25 15, 30 12, 50 10 
           L 190 8 
           C 210 9, 215 12, 220 25 
           L 225 135 
           C 224 148, 218 152, 200 153 
           L 40 155 
           C 25 154, 18 150, 17 135 
           L 15 30 
           C 16 22, 22 21, 30 20 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity={isHovered ? "0.6" : "0.35"}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
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
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.svg
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M 50 8
             C 72 10, 88 22, 92 42
             C 95 58, 92 72, 82 84
             C 70 93, 54 96, 40 92
             C 26 88, 14 76, 10 58
             C 7 42, 12 26, 26 14
             C 36 6, 43 7, 50 8 Z"
          fill="currentColor"
          opacity="0.12"
        />
      </motion.svg>
    </motion.div>
  );
}

function StepCard({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="flex items-center gap-4 md:gap-6 lg:gap-7">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer group flex-shrink-0"
      >
        <motion.div 
          className="w-44 h-32 md:w-52 md:h-36 lg:w-56 lg:h-36 relative rounded-3xl transition-all duration-500"
          style={{
            backgroundColor: step.color,
            boxShadow: isHovered 
              ? `0 12px 40px ${step.color}60, 0 6px 20px ${step.color}40`
              : `0 4px 16px ${step.color}30, 0 2px 8px ${step.color}20`
          }}
          animate={{
            scale: isHovered ? 1.02 : 1,
            y: isHovered ? -4 : 0
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <OrganicBorder color={step.darkColor} isHovered={isHovered} />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-3">
            <motion.h4 
              className="uppercase tracking-[0.2em] text-xs md:text-sm transition-all duration-300"
              style={{ 
                color: step.darkColor,
                fontWeight: 600,
                letterSpacing: '0.15em'
              }}
              animate={{ 
                scale: isHovered ? 1.02 : 1,
                y: isHovered ? -2 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {step.english}
            </motion.h4>
            
            <motion.div
              className="w-8 h-px bg-current opacity-30"
              style={{ color: step.darkColor }}
              animate={{
                scaleX: isHovered ? 1.3 : 1,
                opacity: isHovered ? 0.5 : 0.3
              }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.p 
              className="text-2xl md:text-3xl lg:text-3xl transition-all duration-300"
              style={{ 
                color: step.darkColor,
                fontFamily: "'Noto Serif KR', serif",
                fontWeight: 600
              }}
              animate={{ 
                scale: isHovered ? 1.02 : 1,
                y: isHovered ? 2 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {step.korean}
            </motion.p>
          </div>
          
          {/* Glossy overlay */}
          <div 
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)'
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Arrow connector */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
          className="relative flex-shrink-0 hidden md:block"
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 40 40" 
            fill="none"
          >
            {/* Organic arrow line */}
            <motion.path
              d="M 6 20 Q 20 18, 30 20"
              stroke="#d4a89f"
              strokeWidth="2.5"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Arrow head */}
            <motion.g
              animate={{ 
                x: [0, 3, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path
                d="M 30 20 L 25 16 M 30 20 L 25 24"
                stroke="#d4a89f"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>
          </svg>
        </motion.div>
      )}
    </div>
  );
}

export default function GrowthNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 lg:py-48 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-beige/20 to-white"
    >
      {/* Section label */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-12 left-8 md:left-12 lg:left-24 z-20"
      >
        <p className="text-xs tracking-[0.15em] text-tertiary uppercase opacity-60">
          04. GROWTH STRUCTURE
        </p>
      </motion.div>
      
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating blobs with parallax */}
      <motion.div style={{ y: y1 }}>
        <FloatingBlob delay={0.4} className="top-24 left-[8%] text-pink-soft" />
      </motion.div>
      <motion.div style={{ y: y2 }}>
        <FloatingBlob delay={0.6} className="bottom-32 right-[12%] text-accent-green" />
      </motion.div>
      <FloatingBlob delay={0.8} className="top-1/3 right-[8%] text-pink-soft/60" />
      
      <div className="relative mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 
            className="mb-8"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            <span style={{ color: '#8B6F47', fontWeight: 600 }}>크레용숲의</span>{' '}
            <span style={{ color: '#2e7d32', fontWeight: 600 }}>예술적 성장 구조</span>
          </h2>
        </motion.div>
        
        {/* Introduction text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-20 md:mb-28 space-y-4"
        >
          <p 
            className="text-lg md:text-xl text-brown-800 leading-relaxed"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            <span style={{ color: '#8B6F47' }}>크레용숲은 색과 감정의 5단계 구조로</span> <span style={{ color: '#2e7d32', fontWeight: 600 }}>예술적 성장을 만듭니다</span>
          </p>
          
          <div className="pt-4 space-y-2">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#8B6F47' }}>
              마음이 먼저 안전해지는 순간,
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              <span style={{ color: '#2e7d32', fontWeight: 600 }}>표현력·몰입력·창조성</span>
              <span className="text-brown-700">은 자연스럽게 자라납니다</span>
            </p>
          </div>
        </motion.div>
        
        {/* Steps flow */}
        <div className="mb-24 md:mb-32">
          {/* Desktop view - no scroll, fits in one screen */}
          <div className="hidden lg:flex items-center justify-center">
            {steps.map((step, index) => (
              <StepCard 
                key={step.id} 
                step={step} 
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
          
          {/* Tablet/Mobile view - scrollable */}
          <div className="lg:hidden overflow-x-auto pb-8 -mx-6 px-6">
            <div className="flex items-center gap-6 min-w-max">
              {steps.map((step, index) => (
                <StepCard 
                  key={step.id} 
                  step={step} 
                  index={index}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-center"
        >
          <p 
            className="text-2xl md:text-3xl lg:text-4xl leading-relaxed italic"
            style={{ 
              fontFamily: "'Noto Serif KR', serif",
              background: 'linear-gradient(135deg, #B88860 0%, #d4a89f 50%, #B88860 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <RebuildText text="예술로 자기 세계를 만드는 사람들" />
          </p>
        </motion.div>
        
        {/* Decorative bottom accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-28 mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <div 
            className="h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #a8c68f 20%, #f9d5db 50%, #a8c68f 80%, transparent 100%)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
