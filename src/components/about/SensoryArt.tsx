import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import PremiumIntegrityOrbit from './PremiumIntegrityOrbit';

const integrityPillars = [
  {
    id: 1,
    number: '1',
    english: 'Affective Literacy',
    korean: '감정 이해력',
    description: 'CASEL(2020): 감정 인식능력은 전두엽 발달과 직접적으로 연결됨.',
    position: 'top-left' // 위 왼쪽
  },
  {
    id: 2,
    number: '2',
    english: 'Sensory Self-Regulation',
    korean: '감각 기반 자기조절',
    description: 'Art Therapy Outcomes Study(2019): 촉감 기반 드로잉은 스트레스 호르몬을 감소시킴.',
    position: 'top-right' // 위 오른쪽
  },
  {
    id: 3,
    number: '3',
    english: 'Expressive Agency',
    korean: '표현력 확장',
    description: 'Lowenfeld의 창의성 발달 단계 이론: 자유로운 표현 경험이 자기주도성을 강화함.',
    position: 'middle-right' // 오른쪽 중간
  },
  {
    id: 4,
    number: '4',
    english: 'Relational Sensitivity',
    korean: '관계 감각',
    description: 'Mirror Neuron Theory: 타인의 표현을 보며 감정 모방·이해가 촉진됨.',
    position: 'bottom' // 아래
  },
  {
    id: 5,
    number: '5',
    english: 'Narrative Identity',
    korean: '세계관·자기서사 형성',
    description: 'H. Gardner(다중지능): 예술·서사 경험은 \'자기이해지능\'을 강화함.',
    position: 'middle-left' // 왼쪽 중간
  }
];

export default function SensoryArt() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const cardY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <>
      <hr className="section-divider" />
      <section 
        ref={sectionRef}
        className="relative min-h-screen py-32 md:py-40 lg:py-56 bg-white"
      >
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Section label - top left */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-16 md:top-20 left-8 md:left-16 lg:left-24 z-30"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-50/40 rounded-full blur-sm" />
            <div className="relative px-8 py-3 rounded-full border border-amber-200/50 bg-gradient-to-r from-amber-50 to-beige/80 backdrop-blur-sm">
              <span 
                className="text-xs tracking-[0.2em] text-brown-700 italic"
                style={{ fontFamily: "'Noto Serif KR', 'Noto Serif', serif" }}
              >
                SENSORY ART
              </span>
            </div>
          </div>
        </motion.div>
        
        <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
            
            {/* Left - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative">
                {/* Glass card background */}
                <div 
                  className="absolute inset-0 bg-white/70 backdrop-blur-lg rounded-[32px] border border-white/50"
                  style={{
                    boxShadow: '0 24px 60px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.6)'
                  }}
                />
                
                {/* Content */}
                <div className="relative p-8 md:p-10 lg:p-12 xl:p-14 space-y-4">
                  
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                        lineHeight: 1.3,
                        fontWeight: 600,
                        color: '#5a8c4a',
                      }}
                    >
                      왜 <span style={{ color: '#8B6F47' }}>예술기반 정서교육</span>이 지금 필요한가
                    </h2>
                  </motion.div>
                  
                  {/* Divider */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-32 h-px bg-gradient-to-r from-accent-green/40 to-transparent origin-left"
                    />
                  
                  {/* First paragraph group */}
                  <motion.div 
                    className="space-y-1"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                        lineHeight: 1.8,
                        fontWeight: 400,
                        color: '#4A4A4A',
                      }}
                    >
                      한 사람의 성장은 <span style={{ color: '#5a8c4a', fontWeight: 600 }}>하나의 능력이 아니라</span>
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                        lineHeight: 1.8,
                        fontWeight: 500,
                        color: '#4A4A4A',
                      }}
                    >
                      감정·감각·표현·관계·세계관으로 이어진
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                        lineHeight: 1.8,
                        fontWeight: 600,
                        color: '#5a8c4a',
                      }}
                    >
                      5개의 내적 기반이 함께 만들어냅니다.
                    </p>
                  </motion.div>
                  
                  {/* Emphasized section with underline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="pt-4 border-t border-brown-200/30"
                  >
                    <p 
                      className="text-lg md:text-xl leading-relaxed"
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        color: '#5a8c4a',
                        fontWeight: 600
                      }}
                    >
                      예술을 기반으로{' '}
                      <span 
                        className="inline-block relative"
                        style={{
                          borderBottom: '2px solid #5a8c4a',
                          paddingBottom: '2px'
                        }}
                      >
                        내적 구조(INTEGRITY)가 단단한 사람
                      </span>
                      은 어떤 시대에도 '자기 방식으로 살아가는 힘'을 갖습니다.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Right - Premium Integrity Orbit */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
              style={{ y: cardY }}
            >
              <PremiumIntegrityOrbit />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
