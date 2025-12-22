import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Premium3DGrid from './Premium3DGrid';

export default function EmotionalFoundation() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const cardY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <>
      <hr className="section-divider" />
      <section 
        ref={sectionRef}
        className="relative min-h-screen py-32 md:py-40 lg:py-56 overflow-hidden bg-white"
      >
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Section label - top right */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-16 md:top-20 right-8 md:right-16 lg:right-24 z-30"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-pink-50/40 rounded-full blur-sm" />
            <div className="relative px-8 py-3 rounded-full border border-pink-200/50 bg-gradient-to-r from-pink-50 to-rose-50/80 backdrop-blur-sm">
              <span 
                className="text-xs tracking-[0.2em] text-brown-700 italic"
                style={{ fontFamily: "'Noto Serif KR', 'Noto Serif', serif" }}
              >
                ABOUT US
              </span>
            </div>
          </div>
        </motion.div>
        
        <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            {/* Left - Text content with floating glass card */}
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
                  className="absolute inset-0 bg-white/75 backdrop-blur-xl rounded-[32px] border border-white/60"
                  style={{
                    boxShadow: '0 24px 60px rgba(0,0,0,0.05), 0 10px 30px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.7)'
                  }}
                />
                
                {/* Content */}
                <div className="relative p-10 md:p-12 lg:p-16">
                  
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{ marginBottom: '20px' }}
                  >
                    <h2 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '2rem',
                        lineHeight: 1.3,
                        fontWeight: 600,
                        color: '#8fbc88',
                      }}
                    >
                      정서적 토대 없이 성장하는 시대,
                      <br />
                      아이들은 더 많이 흔들립니다
                    </h2>
                  </motion.div>
                  
                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-20 h-px bg-gradient-to-r from-accent-green/40 to-transparent origin-left"
                    style={{ marginBottom: '20px' }}
                  />
                  
                  {/* First paragraph group */}
                  <motion.div 
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
                        marginBottom: '20px',
                      }}
                    >
                      어른이든 청소년이든 어린아이든,
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                        lineHeight: 1.8,
                        fontWeight: 400,
                        marginBottom: '20px',
                      }}
                    >
                      <span 
                        className="text-accent-green font-semibold"
                        style={{
                          WebkitTextStroke: '1px rgba(255, 182, 193, 0.6)',
                          paintOrder: 'stroke fill'
                        }}
                      >
                        감정이 말해지지 않을 때 마음은 서서히 닫히기
                      </span>
                      <span style={{ color: '#4A4A4A' }}> 시작합니다.</span>
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                        lineHeight: 1.8,
                        fontWeight: 400,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      표현은 줄어들고, 관계는 어려워지고,
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                        lineHeight: 1.8,
                        fontWeight: 400,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      내면의 소리는 설명되지 못한 채 쌓여갑니다.
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                        lineHeight: 1.8,
                        fontWeight: 500,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      그리고 이 현상은 연령이 내려갈수록 더 뚜렷해집니다.
                    </p>
                  </motion.div>
                  
                  {/* Second paragraph group */}
                  <motion.div 
                    className="border-t border-brown-200/30"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ paddingTop: '20px' }}
                  >
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                        lineHeight: 1.8,
                        fontWeight: 400,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      정서가 다루어지지 않는 교육 환경에서는
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                        lineHeight: 1.8,
                        fontWeight: 400,
                        marginBottom: '20px',
                      }}
                    >
                      <span 
                        className="text-accent-green font-semibold"
                        style={{
                          WebkitTextStroke: '1px rgba(255, 182, 193, 0.6)',
                          paintOrder: 'stroke fill'
                        }}
                      >
                        집중력, 관계감, 자존감, 창조성이 모두 약해질 수밖에
                      </span>
                      <span className="text-brown-900 font-semibold"> 없습니다.</span>
                    </p>
                    <p 
                      className="text-base md:text-lg text-brown-700 leading-relaxed"
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        marginBottom: '20px',
                      }}
                    >
                      이는 특정 연령의 문제가 아니라 모든 세대가 동시에 경험하는 변화입니다.
                    </p>
                    <p 
                      className="text-base md:text-lg leading-relaxed"
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        marginBottom: '0',
                      }}
                    >
                      <span className="text-brown-800">다만, </span>
                      <span 
                        className="text-accent-green font-semibold"
                        style={{
                          WebkitTextStroke: '1px rgba(255, 182, 193, 0.6)',
                          paintOrder: 'stroke fill'
                        }}
                      >
                        가장 어린 존재
                      </span>
                      <span className="text-brown-900 font-semibold">가 가장 먼저, 그리고 가장 크게 영향을 받습니다.</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Right - Premium 3D Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
              style={{ y: cardY }}
            >
              <Premium3DGrid />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
