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
      className={`absolute pointer-events-none floating-blob ${className}`}
      data-margin="-25px"
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

// Premium Arrow Component - Professional separation
function ArrowConnector({ index, delay = 0, isMobile = false }: { index: number; delay?: number; isMobile?: boolean }) {
  return (
    <div
      className={`relative flex-shrink-0 flex items-center arrow-flow-container ${isMobile ? 'lg:hidden' : 'hidden lg:flex'}`}
      style={{ 
        animation: `arrowFadeIn 0.6s ease-out ${delay}s forwards`
      }}
    >
      <svg 
        viewBox="0 0 44 24" 
        fill="none"
        className="arrow-flow arrow-svg-responsive"
      >
            {/* Dashed line with flow animation */}
            <motion.path
              d="M 2 12 H 36"
              stroke="#c99a8f"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="0.25 0.15"
              initial={{ strokeDashoffset: 0, opacity: 0.5 }}
              animate={{ 
                strokeDashoffset: [0, -0.8],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{ 
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Arrow head with subtle pulse */}
            <motion.g
              initial={{ opacity: 0.6 }}
              animate={{ 
                opacity: [0.6, 0.95, 0.6],
                x: [0, 1, 0]
              }}
              transition={{ 
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path
                d="M 36 6 L 42 12 L 36 18"
                stroke="#c99a8f"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>
      </svg>
    </div>
  );
}

function StepCard({ step, index, isMobile = false }: { step: typeof steps[0]; index: number; isMobile?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 카드 리듬: Sense, Expression, Story만 강조
  const getCardTransform = () => {
    if (isMobile) return { y: 0, scale: 1 };
    if (index === 0) return { y: -2, scale: 1 }; // Sense
    if (index === 1) return { y: -6, scale: 1.02 }; // Expression
    if (index === 2) return { y: -2, scale: 1 }; // Story
    return { y: 0, scale: 1 }; // Archive, Integration
  };
  
  const baseTransform = getCardTransform();
  
  return (
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
          className={isMobile ? "growth-card-mobile relative rounded-3xl transition-all duration-500" : "relative rounded-3xl transition-all duration-500 growth-card-desktop"}
          style={{
            transform: `translateY(${baseTransform.y}px) scale(${baseTransform.scale})`,
            '--bg-color': step.color,
            '--box-shadow': isHovered 
              ? `0 12px 40px ${step.color}60, 0 6px 20px ${step.color}40`
              : `0 4px 16px ${step.color}30, 0 2px 8px ${step.color}20`,
            backgroundColor: step.color,
            boxShadow: isHovered 
              ? `0 12px 40px ${step.color}60, 0 6px 20px ${step.color}40`
              : `0 4px 16px ${step.color}30, 0 2px 8px ${step.color}20`
          } as React.CSSProperties}
          animate={{
            scale: isHovered ? (baseTransform.scale * 1.02) : baseTransform.scale,
            y: isHovered ? (baseTransform.y - 4) : baseTransform.y
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <OrganicBorder color={step.darkColor} isHovered={isHovered} />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-3">
            <motion.h4 
              className="uppercase tracking-[0.2em] text-xs md:text-sm transition-all duration-300"
              style={{ 
                fontWeight: 600,
                letterSpacing: '0.15em',
                '--text-color': step.darkColor,
                color: step.darkColor
              } as React.CSSProperties}
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
              style={{
                '--text-color': step.darkColor,
                color: step.darkColor
              } as React.CSSProperties}
              animate={{
                scaleX: isHovered ? 1.3 : 1,
                opacity: isHovered ? 0.5 : 0.3
              }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.p 
              className="text-2xl md:text-3xl lg:text-3xl transition-all duration-300"
              style={{ 
                fontFamily: "'Noto Serif KR', serif",
                fontWeight: 600,
                '--text-color': step.darkColor,
                color: step.darkColor
              } as React.CSSProperties}
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
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating blobs with parallax */}
      <motion.div style={{ y: y1 }}>
        <FloatingBlob delay={0.4} className="top-24 left-4 md:left-[8%] text-pink-soft" />
      </motion.div>
      <motion.div style={{ y: y2 }}>
        <FloatingBlob delay={0.6} className="bottom-32 right-4 md:right-[12%] text-accent-green" />
      </motion.div>
      <FloatingBlob delay={0.8} className="top-1/3 right-4 md:right-[8%] text-pink-soft/60" />
      
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
            style={{ 
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}
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
            className="text-sm md:text-xl text-brown-800 leading-relaxed"
            style={{ 
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 3.4vw, 1.05rem)',
lineHeight: 1.5,
                letterSpacing: 0,
              maxWidth: '32em',
              textAlign: 'left'
            } as React.CSSProperties}
          >
            <span style={{ color: '#8B6F47' }}>크레용숲은</span>
            <br className="md:hidden" />
            <span style={{ color: '#8B6F47' }}> 색과 감정의 5단계 구조로</span> <span style={{ color: '#2e7d32', fontWeight: 600 }}>예술적 성장을 만듭니다</span>
          </p>
          
          <div className="pt-4 space-y-2">
            <p 
              className="text-sm md:text-lg leading-relaxed" 
              style={{ 
                color: '#8B6F47',
                fontSize: 'clamp(0.85rem, 3.4vw, 1.05rem)',
                lineHeight: 1.5,
                letterSpacing: 0,
                maxWidth: '34em',
                textAlign: 'left'
              } as React.CSSProperties}
            >
              마음이 먼저 안전해지는 순간,
            </p>
            <p 
              className="text-sm md:text-lg leading-relaxed"
              style={{
                fontSize: 'clamp(0.85rem, 3.4vw, 1.05rem)',
                lineHeight: 1.5,
                letterSpacing: 0,
                maxWidth: '34em',
                textAlign: 'left'
              } as React.CSSProperties}
            >
              <span style={{ color: '#1b5e20', fontWeight: 600 }}>표현력·몰입력·창조성</span>
              <span className="text-brown-700">은 자연스럽게 자라납니다</span>
            </p>
          </div>
        </motion.div>
        
        {/* Steps flow */}
        <div className="mb-24 md:mb-32">
          {/* Desktop view - no scroll, fits in one screen */}
          <div className="hidden lg:flex items-center justify-center growth-cards-container">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <StepCard 
                  step={step} 
                  index={index}
                />
                {/* Arrow between cards - Professional pattern */}
                {index < steps.length - 1 && (
                  <ArrowConnector 
                    index={index} 
                    delay={index * 0.12 + 0.4}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Tablet/Mobile view - scrollable */}
          <div className="lg:hidden horizontal-scroll pb-8 -mx-6 px-6">
            <div className="flex items-center gap-4 min-w-max growth-cards-mobile-container">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <StepCard 
                    step={step} 
                    index={index}
                    isMobile={true}
                  />
                  {/* Arrow between cards - Mobile */}
                  {index < steps.length - 1 && (
                    <ArrowConnector 
                      index={index} 
                      delay={index * 0.1 + 0.3}
                      isMobile={true}
                    />
                  )}
                </React.Fragment>
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
            className="text-xl md:text-3xl lg:text-4xl leading-relaxed italic growth-art-title"
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
          style={{ maxWidth: '600px' } as React.CSSProperties}
        >
          <div 
            className="h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #a8c68f 20%, #f9d5db 50%, #a8c68f 80%, transparent 100%)'
            }}
          />
        </motion.div>
      </div>

      {/* FloatingBlob overflow fix styles + Mobile card styles + Horizontal scrollbar hide + Premium Arrow animations */}
      <style>{`
        .floating-blob {
          z-index: 1;
        }
        
        .floating-blob[data-margin] {
          margin: -25px;
        }
        
        /* Card background colors */
        [data-bg-color] {
          background-color: var(--bg-color);
        }
        
        /* Text colors */
        [data-text-color] {
          color: var(--text-color);
        }
        
        /* Max width */
        [data-max-width] {
          max-width: 600px;
        }
        
        /* Horizontal scrollbar hide - 프리미엄 모바일 UX */
        .horizontal-scroll {
          overflow-x: auto;
          scrollbar-width: none;        /* Firefox */
          -ms-overflow-style: none;     /* IE 10+ */
          position: relative;
        }
        
        .horizontal-scroll::-webkit-scrollbar {
          display: none;                /* Chrome, Safari */
        }
        
        /* Premium Arrow Flow Animation - Desktop */
        @keyframes arrowFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 0.65;
            transform: scale(1);
          }
        }
        
        .arrow-flow-container {
          opacity: 0.65 !important;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* Card hover - adjacent arrow reacts */
        .group:hover ~ .arrow-flow-container,
        .group:hover + .arrow-flow-container,
        .arrow-flow-container:hover {
          opacity: 1 !important;
          transform: translateX(4px) scale(1.05);
        }
        
        /* Subtle glow on hover */
        .group:hover ~ .arrow-flow-container .arrow-flow,
        .group:hover + .arrow-flow-container .arrow-flow,
        .arrow-flow-container:hover .arrow-flow {
          filter: drop-shadow(0 2px 4px rgba(212, 168, 159, 0.3));
        }
        
        .arrow-flow {
          filter: drop-shadow(0 1px 2px rgba(212, 168, 159, 0.15));
        }
        
        /* Responsive cards and arrows - Professional scaling */
        .growth-cards-container {
          gap: clamp(1rem, 2vw, 3.5rem);
          padding: 0 clamp(1rem, 3vw, 2rem);
        }
        
        .growth-card-desktop {
          width: clamp(140px, 12vw, 224px);
          height: clamp(100px, 9vw, 144px);
        }
        
        .arrow-svg-responsive {
          width: clamp(28px, 2.5vw, 44px);
          height: clamp(16px, 1.5vw, 24px);
        }
        
        /* Mobile cards container with arrows */
        .growth-cards-mobile-container {
          gap: clamp(0.75rem, 3vw, 1.5rem);
        }
        
        /* Mobile arrow sizing - slightly larger for better visibility */
        @media (max-width: 1023px) {
          .arrow-flow-container.lg\\:hidden .arrow-svg-responsive {
            width: clamp(24px, 4.5vw, 36px);
            height: clamp(14px, 2.8vw, 20px);
          }
          
          .arrow-flow-container.lg\\:hidden {
            opacity: 0.6 !important;
          }
        }
        
               @media (max-width: 768px) {
                 .floating-blob {
                   margin: -20px !important;
                 }
                 
                 .growth-card-mobile {
                   width: 220px;
                   height: 130px;
                   flex: 0 0 auto;
                 }
                 
                 .growth-art-title {
                   font-size: clamp(1.1rem, 3.5vw, 1.3rem) !important;
                   line-height: 1.6 !important;
                   letter-spacing: 0 !important;
                 }

                 /* iPhone 14 Pro (393px) 기준 본문 텍스트 가독성 최적화 */
                 .text-sm {
                   font-size: clamp(0.95rem, 3.4vw, 1.05rem) !important;
                   line-height: 1.6 !important;
                   letter-spacing: 0 !important;
                 }
               }
      `}</style>
    </section>
  );
}
