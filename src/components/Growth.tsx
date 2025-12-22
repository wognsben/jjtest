import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const steps = [
  {
    id: 1,
    english: 'Sense',
    korean: '감각',
    color: '#a8c68f'
  },
  {
    id: 2,
    english: 'Expression',
    korean: '표현',
    color: '#f4d5d0'
  },
  {
    id: 3,
    english: 'Story',
    korean: '의미',
    color: '#ffe066'
  },
  {
    id: 4,
    english: 'Archive',
    korean: '기록',
    color: '#d4a574'
  },
  {
    id: 5,
    english: 'Integration',
    korean: '세계관',
    color: '#b8e6b8'
  }
];

function PartialBorder({ color, isHovered }: { color: string; isHovered: boolean }) {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none" 
      viewBox="0 0 200 140"
      fill="none"
      style={{ filter: 'blur(0.3px)' }}
    >
      {/* Top arc (12 o'clock to 4 o'clock) */}
      <motion.path
        d="M 30 10 Q 20 8, 25 5 L 100 3 Q 175 4, 178 8 L 190 50"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity={isHovered ? "0.8" : "0.4"}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      {/* Bottom arc (6 o'clock to 9 o'clock) */}
      <motion.path
        d="M 100 137 Q 60 138, 40 132 L 15 120 Q 8 112, 10 100"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity={isHovered ? "0.8" : "0.4"}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </svg>
  );
}

function StepCard({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer group flex-shrink-0"
      >
        <div 
          className="w-48 h-32 md:w-56 md:h-36 relative rounded-lg transition-all duration-500"
          style={{
            backgroundColor: isHovered ? step.color : '#faf8f5',
            boxShadow: isHovered 
              ? `0 8px 32px ${step.color}40, 0 4px 16px ${step.color}30`
              : '0 2px 8px rgba(61, 40, 23, 0.08)'
          }}
        >
          <PartialBorder color={step.color} isHovered={isHovered} />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 space-y-2">
            <motion.h4 
              className="uppercase tracking-widest transition-colors duration-300"
              style={{ color: isHovered ? '#3d2817' : '#8b6f5c' }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {step.english}
            </motion.h4>
            
            <motion.p 
              className="text-2xl md:text-3xl transition-colors duration-300"
              style={{ 
                color: isHovered ? '#3d2817' : '#5c3d2e',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500
              }}
            >
              {step.korean}
            </motion.p>
          </div>
          
          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{ backgroundColor: step.color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
      
      {/* Arrow */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          className="relative flex-shrink-0 hidden md:block"
        >
          <svg 
            width="60" 
            height="40" 
            viewBox="0 0 60 40" 
            fill="none"
            className="transition-all duration-500"
          >
            {/* Arrow line with flow animation */}
            <motion.path
              d="M 5 20 Q 30 18, 45 20"
              stroke="#a08876"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Arrow head */}
            <motion.path
              d="M 45 20 L 40 16 M 45 20 L 40 24"
              stroke="#a08876"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
              animate={{ 
                x: [0, 3, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}

export default function Growth() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-paper to-brown-50"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-brown-900 mb-6">
            크레용숲의 예술적 성장 구조
          </h2>
        </motion.div>
        
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3"
        >
          <p className="text-brown-800">
            크레용숲은 색과 감정의 5단계 구조로 예술적 성장을 만듭니다
          </p>
          <p className="text-brown-700 text-base md:text-lg">
            마음이 먼저 안전해지는 순간,
          </p>
          <p className="text-brown-700 text-base md:text-lg">
            표현력·몰입력·창조성은 자연스럽게 자라납니다
          </p>
        </motion.div>
        
        {/* Steps flow - Horizontal scroll on mobile, grid on desktop */}
        <div className="mb-16 md:mb-20 overflow-visible pb-8 md:pb-0">
          <div className="flex md:grid md:grid-cols-5 gap-6 md:gap-4 lg:gap-6 md:justify-items-center overflow-x-auto md:overflow-visible px-4 md:px-0 -mx-4 md:mx-0">
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
        
        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p 
            className="text-2xl md:text-3xl lg:text-4xl text-brown-900 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            예술로 자기 세계를 만드는 사람들
          </p>
        </motion.div>
        
        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 md:mt-20 w-full h-px bg-gradient-to-r from-transparent via-brown-300 to-transparent"
        />
      </div>
    </section>
  );
}