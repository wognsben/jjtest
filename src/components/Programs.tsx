import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import BlobMorph from './BlobMorph';
import { getImagePath } from '../utils/imageUtils';

const programs = [
  {
    id: 1,
    title: 'CHILD ART',
    subtitle: ['감정·감각·표현이 처음 만나는', '어린이 마음숲'],
    color: '#ffcd40',
    darkColor: '#e6b83a',
    textColor: '#ffffff',
    sectionId: 'childart'
  },
  {
    id: 2,
    title: 'YOUTH ART',
    subtitle: ['\'나만의 철학 미술관\'을 완성하는', '청소년 사유의 숲'],
    color: '#ecbec5',
    darkColor: '#d4a8b0',
    textColor: '#ffffff',
    sectionId: 'youthart'
  },
  {
    id: 3,
    title: 'ADULT ART',
    subtitle: ['감각을 회복하고, 삶의 결을', '다시 짓는 어른의 감정의 숲'],
    color: '#bb8162',
    darkColor: '#a6704f',
    textColor: '#ffffff',
    sectionId: 'adultart'
  },
  {
    id: 4,
    title: 'FOR MOM',
    subtitle: ['엄마의 마음까지 함께 살피는', '창조의 숲'],
    color: '#a8d09c',
    darkColor: '#96ba8a',
    textColor: '#ffffff',
    sectionId: 'moments'
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

function ProgramCircle({ program, index, onNavigate }: { program: typeof programs[0]; index: number; onNavigate: (sectionId: string) => void }) {
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
  
  const handleClick = () => {
    // Navigate to programs page with section
    onNavigate(program.sectionId);
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
      onClick={handleClick}
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

export default function Programs({ onNavigateToProgram }: { onNavigateToProgram?: (sectionId: string) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const animationStarted = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const isBlobInView = useInView(blobRef, { once: false, amount: 0.5 });
  const [morphValue, setMorphValue] = useState(0);
  
  const handleNavigate = (sectionId: string) => {
    if (onNavigateToProgram) {
      onNavigateToProgram(sectionId);
    }
  };
  
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
  const [isMobile, setIsMobile] = useState(false);
  const sectionObserverRef = useRef<IntersectionObserver | null>(null);
  
  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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

  // Intersection Observer for premium scroll animation (circle → label sequence)
  // Only activate after morph animation completes
  useEffect(() => {
    if (morphValue < 0.9) return; // Wait for morph to complete
    
    const items = document.querySelectorAll('.program-item');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // One-time execution
          }
        });
      },
      {
        threshold: 0.35
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [morphValue]); // Re-run when morph completes
  
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
          {/* 모바일: 이미지, PC: 텍스트 */}
          {isMobile ? (
            <img
              src={getImagePath('/assets/main/the meaning of crayon.png')}
              alt="크레용숲은 감정과 감각 그리고 창조적 표현을 통해 모든 사람이 자기다운 세계를 만들어가는 방식을 함께 탐구합니다."
              className="w-full h-auto block mx-auto"
            />
          ) : (
            <h2
              className="text-primary programs-title md:text-center"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 4.2vw, 1.5rem)', // Slightly reduced on mobile
                lineHeight: 1.3,
                letterSpacing: 0,
                wordBreak: 'keep-all',
                whiteSpace: 'normal',
                maxWidth: '100%',
                margin: '0 auto',
              } as React.CSSProperties}
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
          )}
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
            style={{ pointerEvents: morphValue >= 0.9 ? 'auto' : 'none' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-24 lg:gap-32 px-4 md:px-8 w-full max-w-7xl">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="program-item flex flex-col items-center"
                  onClick={() => handleNavigate(program.sectionId)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Circle with content inside - CONSISTENT SIZE for all circles */}
                  <div 
                    className="program-circle relative rounded-full flex items-center justify-center p-6 md:p-10 lg:p-12 overflow-hidden transition-shadow duration-600"
                    style={{ 
                      width: '38vw',
                      height: '38vw',
                      maxWidth: '160px',
                      maxHeight: '160px',
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
                          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
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
                  <div className="program-label mt-4 relative">
                    <div 
                      className="relative px-8 py-2.5 inline-block program-label-box cursor-pointer transition-transform hover:scale-105"
                      style={{
                        backgroundColor: program.color,
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent double trigger from parent click
                        handleNavigate(program.sectionId);
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
                        className="relative z-10 text-xs md:text-sm program-label-text"
                        style={{
                          color: program.textColor,
                          fontWeight: 700,
                          textTransform: 'uppercase'
                        }}
                      >
                        {program.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Bottom text paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16 md:mt-20"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.8rem, 1.6vw, 0.85rem)',
              lineHeight: 1.5,
              letterSpacing: 0,
              fontWeight: 400,
              color: '#333',
              maxWidth: '34em',
              margin: '0 auto',
              wordBreak: 'keep-all'
            } as React.CSSProperties}
          >
            <span style={{ color: '#A66A5A' }}>아이들은 예술의 씨앗을 심고,</span>{' '}
            <span style={{ color: '#2F6B4F' }}>어른들은 감정의 숲을 거니는 곳</span>
          </p>
        </motion.div>
      </div>

      {/* Enhanced styles */}
      <style>{`
        /* Premium Scroll Animation - Circle first, then label */
        /* Initial state - hidden until intersection */
        .program-item .program-circle {
          opacity: 0;
          transform: scale(0.96);
          transition:
            opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .program-item .program-label {
          opacity: 0;
          transform: translateY(4px);
          transition:
            opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Active state when visible (after intersection) */
        .program-item.is-visible .program-circle {
          opacity: 1 !important;
          transform: scale(1);
        }

        .program-item.is-visible .program-label {
          opacity: 1 !important;
          transform: translateY(0);
        }

        /* Label delay - Professional rhythm */
        @media (min-width: 1024px) {
          .program-item.is-visible .program-label {
            transition-delay: 160ms;
          }
        }

        @media (max-width: 1023px) {
          .program-item.is-visible .program-label {
            transition-delay: 120ms;
          }
        }

        /* Mobile Label Box - Fixed Size (Critical) */
        @media (max-width: 768px) {
          .program-label-box {
            width: 144px !important;
            height: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            white-space: nowrap !important;
            padding: 0 !important;
          }
        }

        /* Typography Refinement - Optical Centering */
        .program-label-text {
          letter-spacing: 0.18em;
          text-indent: 0.18em;
        }

        /* Component-Level Styling - Premium Finish */
        .program-label-box {
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.25),
            0 4px 12px rgba(0, 0, 0, 0.08);
          border-radius: 6px;
        }

        /* Consistent vertical spacing on mobile */
        @media (max-width: 768px) {
          .program-item {
            gap: 16px;
          }
          
          .program-label {
            margin-top: 16px !important;
          }
        }

        /* Mobile Typography - iPhone 14 Pro (393px) 기준 가독성 최적화 */
        @media (max-width: 767px) {
          .programs-title span {
            display: inline !important;
          }

          .programs-title {
            max-width: 100% !important;
            width: 100% !important;
            margin-inline: 0;
            padding: 0 1.5rem !important;
            box-sizing: border-box;
            text-align: left;
            font-size: clamp(0.85rem, 4.5vw, 1.9rem) !important;
            line-height: 1.3 !important;
            letter-spacing: 0 !important;
          }

          /* Move first line slightly left (asymmetric effect) */
          .programs-title-first-line {
            margin-left: -0.5rem;
          }

          /* Bottom margin 120px on mobile */
          .programs-header {
            margin-bottom: 120px !important;
          }

          /* Circle content text - 가독성 최적화 */
          .circle-content {
            font-size: clamp(0.75rem, 2.8vw, 0.9rem) !important;
            line-height: 1.5 !important;
            letter-spacing: 0 !important;
          }
        }
        
        @media (min-width: 640px) {
          .program-circle {
            width: 200px !important;
            height: 200px !important;
            max-width: none !important;
            max-height: none !important;
          }
        }
        
        @media (min-width: 768px) {
          .program-circle {
            width: 240px !important;
            height: 240px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .program-circle {
            width: 260px !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}
