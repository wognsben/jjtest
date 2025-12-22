import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import BlobMorph from './BlobMorph';

const programs = [
  {
    id: 1,
    title: 'CHILD ART',
    subtitle: ['감정·감각·표현이 처음 만나는', '어린이 마음숲'],
    color: '#FFE066',
    darkColor: '#E6C850',
    textColor: '#ffffff' // White text
  },
  {
    id: 2,
    title: 'YOUTH ART',
    subtitle: ['\'나만의 철학 미술관\'을 완성하는', '청소년 사유의 숲'],
    color: '#FFB3BA',
    darkColor: '#E69BA1',
    textColor: '#ffffff' // White text
  },
  {
    id: 3,
    title: 'ADULT ART',
    subtitle: ['감각을 회복하고, 삶의 결을', '다시 짓는 어른의 감정의 숲'],
    color: '#D4A574',
    darkColor: '#BB8E5E',
    textColor: '#ffffff' // White text
  },
  {
    id: 4,
    title: 'FOR MOM',
    subtitle: ['엄마의 마음까지 함께 살피는', '창조의 숲'],
    color: '#B8E6B8',
    darkColor: '#9FCC9F',
    textColor: '#ffffff' // White text
  }
];

function RebuildText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  
  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
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

function ProgramCircle({ program, index }: { program: typeof programs[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!circleRef.current) return;
    
    const rect = circleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / 15;
    const deltaY = (e.clientY - centerY) / 15;
    
    setMousePos({ x: deltaX, y: deltaY });
  };
  
  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  return (
    <motion.div
      ref={circleRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
      style={{
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div 
        className="aspect-square rounded-full relative overflow-visible p-8 md:p-12"
        style={{ backgroundColor: program.color }}
      >
        {/* Hand-drawn irregular border */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 200 200"
          fill="none"
          style={{ 
            transform: 'scale(1.02)',
            filter: 'blur(0.3px)'
          }}
        >
          <path
            d="M 100 5 
               C 140 7, 168 25, 185 55
               C 195 75, 198 95, 195 120
               C 193 145, 180 170, 155 185
               C 130 198, 105 200, 80 195
               C 55 190, 30 175, 15 150
               C 5 130, 2 105, 8 80
               C 15 55, 35 20, 65 8
               C 80 3, 90 4, 100 5 Z"
            stroke={program.darkColor}
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        
        <div className="relative h-full flex flex-col justify-center items-center text-center space-y-3 md:space-y-4">
          <motion.h3 
            className="tracking-wider"
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {program.title}
          </motion.h3>
          
          <div className="space-y-1">
            <p className="text-sm md:text-base opacity-80">
              {program.subtitle}
            </p>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ 
            backgroundColor: program.darkColor,
            opacity: 0
          }}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const animationStarted = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const isBlobInView = useInView(blobRef, { once: false, amount: 0.5 });
  const [morphValue, setMorphValue] = useState(0);
  
  // Auto-animate morph when blob comes into view
  useEffect(() => {
    if (isBlobInView && !animationStarted.current) {
      // Reset morphValue to 0 when entering view
      setMorphValue(0);
      animationStarted.current = true;
      
      // Animate from 0 to 1 over 2.5 seconds
      const duration = 2500;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out curve for smoother end
        const eased = 1 - Math.pow(1 - progress, 3);
        setMorphValue(eased);
        
        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          animationFrameRef.current = null;
        }
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
    } else if (!isBlobInView) {
      // Reset when blob leaves view
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      setMorphValue(0);
      animationStarted.current = false;
    }
    
    // Cleanup function
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isBlobInView]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-32 md:py-40 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-b from-white via-beige/10 to-white"
    >
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative max-w-[1600px] mx-auto">
        {/* Header text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto space-y-6 text-center"
          style={{ marginBottom: '50px' }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary leading-tight" style={{ fontFamily: "'Noto Serif KR', serif" }}>
            <RebuildText text="크레용숲은" />
            {' '}
            <span style={{ color: '#a8c68f' }}>
              <RebuildText text="감정과 감각," delay={0.1} />
            </span>
            {' '}
            <RebuildText text="그리고" delay={0.2} />
            {' '}
            <span style={{ color: '#a8c68f' }}>
              <RebuildText text="창조적 표현을" delay={0.25} />
            </span>
            {' '}
            <RebuildText text="통해" delay={0.3} />
            <br />
            <RebuildText text="모든 사람이" delay={0.4} />
            {' '}
            <span style={{ color: '#D4A574' }}>
              <RebuildText text="자기다운 세계를 만들어가는 방식을 함께 탐구" delay={0.45} />
            </span>
            <RebuildText text="합니다." delay={0.6} />
          </h2>
        </motion.div>
        
        {/* 3D Blob Morph Animation + Circle Cards Transition */}
        <div ref={blobRef} className="relative mb-[30px]">
          {/* 3D Blobs Container - fades out as morph completes */}
          <motion.div 
            className="relative h-[400px] md:h-[480px] lg:h-[560px]"
            animate={{ opacity: morphValue >= 0.9 ? 0 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <BlobMorph morphProgress={morphValue} />
          </motion.div>
          
          {/* 2D Circle Cards - fade in as blobs complete morph */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-[400px] md:h-[480px] lg:h-[560px] flex items-center justify-center"
            animate={{ opacity: morphValue >= 0.9 ? 1 : 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 px-4 md:px-8 w-full max-w-7xl">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: morphValue >= 0.9 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Circle with content inside - CONSISTENT SIZE for all circles */}
                  <div 
                    className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center p-6 md:p-10 lg:p-12 overflow-hidden transition-shadow duration-600"
                    style={{ 
                      backgroundColor: program.color,
                      boxShadow: `0 8px 24px ${program.color}30, 0 4px 12px ${program.color}20`,
                      aspectRatio: '1 / 1'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 12px 32px ${program.color}40, 0 6px 16px ${program.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 8px 24px ${program.color}30, 0 4px 12px ${program.color}20`;
                    }}
                  >
                    {/* Hand-drawn border - premium style */}
                    <svg 
                      className="absolute inset-0 w-full h-full pointer-events-none" 
                      viewBox="0 0 200 200"
                      fill="none"
                      style={{ 
                        transform: 'scale(1.03)',
                        filter: 'blur(0.25px)'
                      }}
                    >
                      <path
                        d="M 100 5 
                           C 140 7, 168 25, 185 55
                           C 195 75, 198 95, 195 120
                           C 193 145, 180 170, 155 185
                           C 130 198, 105 200, 80 195
                           C 55 190, 30 175, 15 150
                           C 5 130, 2 105, 8 80
                           C 15 55, 35 20, 65 8
                           C 80 3, 90 4, 100 5 Z"
                        stroke={program.darkColor}
                        strokeWidth="2.8"
                        fill="none"
                        opacity="0.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    
                    {/* Korean text content - slides up from bottom into card - ALWAYS 2 lines */}
                    <motion.div
                      initial={{ y: 120, opacity: 0 }}
                      animate={{ 
                        y: morphValue >= 0.9 ? 0 : 120,
                        opacity: morphValue >= 0.9 ? 1 : 0
                      }}
                      transition={{ 
                        duration: 0.7, 
                        delay: 0.9 + index * 0.12,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="text-center z-10"
                      style={{ width: '90%', minWidth: '180px' }}
                    >
                      <div
                        style={{ 
                          color: program.textColor, 
                          fontWeight: 600,
                          opacity: 0.95,
                          lineHeight: '1.5',
                          wordBreak: 'keep-all',
                          fontSize: 'clamp(9px, 2vw, 14px)'
                        }}
                      >
                        <div style={{ marginBottom: '2px' }}>
                          {program.subtitle[0]}
                        </div>
                        <div>
                          {program.subtitle[1]}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* English label box below circle - hand-drawn style */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: morphValue >= 0.9 ? 1 : 0,
                      y: morphValue >= 0.9 ? 0 : 10
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + index * 0.12,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="mt-4 relative"
                  >
                    <div 
                      className="relative px-8 py-2.5 inline-block"
                      style={{
                        backgroundColor: program.color,
                      }}
                    >
                      {/* Irregular border */}
                      <svg 
                        className="absolute inset-0 w-full h-full pointer-events-none" 
                        viewBox="0 0 200 80"
                        fill="none"
                        preserveAspectRatio="none"
                        style={{ 
                          transform: 'scale(1.05)',
                          filter: 'blur(0.2px)'
                        }}
                      >
                        <path
                          d="M 15 10 
                             L 185 8 
                             C 192 9, 195 12, 195 20 
                             L 193 60 
                             C 192 68, 188 72, 180 72 
                             L 20 74 
                             C 12 73, 8 69, 8 60 
                             L 10 20 
                             C 11 12, 14 11, 15 10 Z"
                          stroke={program.darkColor}
                          strokeWidth="1.5"
                          fill="none"
                          opacity="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      
                      <span
                        className="relative z-10 tracking-[0.15em] text-xs md:text-sm"
                        style={{
                          color: program.textColor,
                          fontWeight: 700,
                          textTransform: 'uppercase'
                        }}
                      >
                        {program.title}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
