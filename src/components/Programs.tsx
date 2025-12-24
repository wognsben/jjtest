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
  
  const [isEntering, setIsEntering] = useState(false);
  const sectionObserverRef = useRef<IntersectionObserver | null>(null);
  
  // IntersectionObserver for section entrance
  useEffect(() => {
    if (sectionRef.current) {
      sectionObserverRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsEntering(true);
          }
        },
        { threshold: 0.1 }
      );
      sectionObserverRef.current.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionObserverRef.current && sectionRef.current) {
        sectionObserverRef.current.disconnect();
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className={`relative py-32 md:py-40 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-b from-white via-beige/10 to-white next-section ${isEntering ? 'is-entering' : ''}`}
    >
      {/* Paint afterglow - color memory from hero */}
      <div 
        className="absolute inset-0 pointer-events-none paint-afterglow"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '240px',
          pointerEvents: 'none',
          zIndex: 0,
          background: 'radial-gradient(at 50% -20%, rgba(168, 198, 143, 0.22), rgba(255, 214, 128, 0.18) 30%, transparent 65%)',
          opacity: isEntering ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(.16,1,.3,1)',
        }}
      />
      
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />
      
      <div className="relative max-w-[1600px] mx-auto" style={{ zIndex: 1 }}>
        {/* Header text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto space-y-6 text-center mb-24 md:mb-20 programs-header"
        >
          <h2
            className="text-primary programs-title md:text-center"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1rem, 4.2vw, 1.5rem)', // 모바일에서 조금 줄임
              lineHeight: 1.35,
              wordBreak: 'keep-all',
              whiteSpace: 'normal',
              maxWidth: '100%',
              margin: '0 auto',
            }}
          >
            <span className="inline md:inline-block mr-[0.3em] programs-title-first-line">
              <RebuildText text="크레용숲은" />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: 'rgba(168, 198, 143, 0.9)' }}>
              <RebuildText text="감정과" delay={0.1} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: 'rgba(168, 198, 143, 0.9)' }}>
              <RebuildText text="감각" delay={0.12} />
            </span>
            <br className="md:hidden" />
            <span className="inline md:inline-block mr-[0.3em]">
              <RebuildText text="그리고" delay={0.2} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: 'rgba(168, 198, 143, 0.9)' }}>
              <RebuildText text="창조적" delay={0.23} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: 'rgba(168, 198, 143, 0.9)' }}>
              <RebuildText text="표현을" delay={0.25} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]">
              <RebuildText text="통해" delay={0.3} />
            </span>
            <br className="md:hidden" />
            <br className="hidden md:block" />
            <span className="inline md:inline-block mr-[0.3em]">
              <RebuildText text="모든" delay={0.4} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]">
              <RebuildText text="사람이" delay={0.42} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: '#D4A574' }}>
              <RebuildText text="자기다운" delay={0.45} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: '#D4A574' }}>
              <RebuildText text="세계를" delay={0.47} />
            </span>
            <br className="md:hidden" />
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: '#D4A574' }}>
              <RebuildText text="만들어가는" delay={0.5} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: '#D4A574' }}>
              <RebuildText text="방식을" delay={0.53} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: '#D4A574' }}>
              <RebuildText text="함께" delay={0.55} />
            </span>
            <span className="inline md:inline-block mr-[0.3em]" style={{ color: '#D4A574' }}>
              <RebuildText text="탐구" delay={0.57} />
            </span>
            <span className="inline md:inline-block">
              <RebuildText text="합니다." delay={0.6} />
            </span>
          </h2>

          {/* Mobile-only width constraint to keep exact 2 lines */}
          <style>{`
            @media (max-width: 767px) {
              .programs-title {
                max-width: 21em;
                margin-inline: auto;
              }
            }
          `}</style>
        </motion.div>
        
        {/* 3D Blob Morph Animation + Circle Cards Transition */}
        <div ref={blobRef} className="relative mb-[30px] mt-8 md:mt-0">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 lg:gap-16 px-4 md:px-8 w-full max-w-7xl">
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
                    className="relative rounded-full flex items-center justify-center p-6 md:p-10 lg:p-12 overflow-hidden transition-shadow duration-600 program-circle"
                    style={{ 
                      width: '42vw',
                      height: '42vw',
                      maxWidth: '180px',
                      maxHeight: '180px',
                      backgroundColor: program.color,
                      boxShadow: `0 8px 24px ${program.color}30, 0 4px 12px ${program.color}20`,
                      aspectRatio: '1 / 1'
                    }}
                    onMouseEnter={(e) => {
                      if (window.innerWidth >= 768) {
                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.25)';
                      }
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
                        filter: 'blur(0.35px)'
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
                        opacity="0.6"
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
                        className="circle-content"
                        style={{ 
                          color: program.textColor, 
                          fontWeight: 600,
                          opacity: 0.95,
                          lineHeight: '1.5',
                          wordBreak: 'keep-all',
                          fontSize: 'clamp(9px, 2vw, 14px)',
                          textShadow: '0 0.5px 0 rgba(0,0,0,0.06)'
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

      {/* Enhanced styles */}
      <style>{`
        /* 모바일 전용: 모든 span을 inline으로 강제해서 자연 줄바꿈 허용 */
        @media (max-width: 767px) {
          .programs-title span {
            display: inline !important;
          }

          .programs-title {
            max-width: 24em;
            margin-inline: 0;
            padding: 0 1rem;
            box-sizing: border-box;
            text-align: left;
          }

          /* 첫 번째 줄만 살짝 더 왼쪽으로 이동 (비대칭 효과) */
          .programs-title-first-line {
            margin-left: -0.5rem;
          }

          /* 모바일에서 하단 마진 120px */
          .programs-header {
            margin-bottom: 120px !important;
          }
        }
        
        @media (min-width: 640px) {
          .program-circle {
            width: 224px !important;
            height: 224px !important;
            max-width: none !important;
            max-height: none !important;
          }
        }
        
        @media (min-width: 768px) {
          .program-circle {
            width: 288px !important;
            height: 288px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .program-circle {
            width: 320px !important;
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}
