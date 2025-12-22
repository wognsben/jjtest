import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { getImagePath } from '../../utils/imageUtils';

export default function WhatIsEmotionalArt() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const images = [
    getImagePath('/assets/about/meaning of emotional art/meaning of emotional art-1.jpg'),
    getImagePath('/assets/about/meaning of emotional art/meaning of emotional art-2.jpg'),
    getImagePath('/assets/about/meaning of emotional art/meaning of emotional art-3.jpg'),
  ];

  return (
    <>
      <hr className="section-divider" />
      <section 
        ref={sectionRef}
        className="relative py-32 md:py-48 lg:py-64 overflow-hidden"
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* Parallax decorative circles */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ y }}
        >
          <svg
            viewBox="0 0 1200 800"
            className="w-full h-full"
            style={{ opacity: 0.06 }}
          >
            <circle cx="100" cy="200" r="180" fill="#A67C52" />
            <circle cx="150" cy="600" r="120" fill="#8FBC88" />
            <circle cx="1100" cy="300" r="150" fill="#FFB6C1" />
            <circle cx="1050" cy="650" r="100" fill="#A67C52" />
          </svg>
        </motion.div>

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            
            {/* Left - Text Content */}
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
                    style={{ marginBottom: '24px' }}
                  >
                    <h2 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '2rem',
                        lineHeight: 1.3,
                        fontWeight: 600,
                        color: '#8FBC88',
                      }}
                    >
                      감정예술(Emotional Art)이란
                    </h2>
                  </motion.div>
                  
                  {/* Definition */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ marginBottom: '32px' }}
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
                      <span style={{ color: '#bb8162' }}>감정을 표현의 재료</span>로 삼아{' '}
                      <span style={{ color: '#bb8162' }}>색·선·결·사물</span>의 과정을 통해{' '}
                      <span 
                        style={{
                          textDecoration: 'underline',
                          textDecorationColor: '#8FBC88',
                          textDecorationThickness: '2px',
                          textUnderlineOffset: '4px',
                        }}
                      >
                        자기이해와 정서지능을 키우는 예술 교육 방식입니다
                      </span>
                    </p>
                  </motion.div>

                  {/* Sub-title */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ marginBottom: '24px' }}
                  >
                    <h3 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.25rem, 2vw, 1.2rem)',
                        lineHeight: 1.4,
                        fontWeight: 500,
                        color: '#4A4A4A',
                      }}
                    >
                      크레용숲은 표현의 취향을 평가하지 않습니다.
                    </h3>
                  </motion.div>

                  {/* Conditional statements */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <div 
                      style={{
                        backgroundColor: 'rgba(255, 182, 193, 0.15)',
                        padding: '16px 20px',
                        borderRadius: '12px',
                        borderLeft: '3px solid rgba(255, 182, 193, 0.5)',
                      }}
                    >
                      <p 
                        style={{ 
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                          lineHeight: 1.7,
                          fontWeight: 400,
                          color: '#4A4A4A',
                          marginBottom: '12px',
                        }}
                      >
                        대신, 표현 이전에 반드시 작동해야 할 감정의 기능을 기준으로 삼습니다.
                      </p>
                      <div className="space-y-2">
                        <p 
                          style={{ 
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                            lineHeight: 1.6,
                            color: '#666',
                          }}
                        >
                          <span style={{ color: '#8FBC88' }}>감정을 느끼지 못하면</span> → 표현은 막힙니다
                        </p>
                        <p 
                          style={{ 
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                            lineHeight: 1.6,
                            color: '#666',
                          }}
                        >
                          <span style={{ color: '#8FBC88' }}>감정을 인식하지 못하면</span> → 설명할 수 없습니다
                        </p>
                        <p 
                          style={{ 
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                            lineHeight: 1.6,
                            color: '#666',
                          }}
                        >
                          <span style={{ color: '#8FBC88' }}>감정을 조절하지 못하면</span> → 반복이 불안정해집니다
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Right - Editorial Layout (편집 디자인, 카드 UI 아님) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl min-h-[500px] md:min-h-[700px]"
            >
              {/* 부드러운 배경 오브젝트 (프레임 아래, 아이의 살결/종이/온기) */}
              <div 
                className="absolute right-[-120px] top-[-80px] w-[520px] h-[520px] bg-[#FBE6E2] rounded-full"
                style={{
                  opacity: 0.7,
                  filter: 'blur(2px)',
                }}
              />

              {/* SVG 편집 프레임 (배경 오브젝트, 열린 구조, 프리미엄) */}
              <svg
                className="absolute inset-0 pointer-events-none editorial-frame"
                viewBox="0 0 1200 700"
                preserveAspectRatio="none"
                style={{ width: '100%', height: '100%' }}
              >
                <defs>
                  {/* 프리미엄 그라데이션 */}
                  <linearGradient id="frameGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A67C52" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#C76A3A" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#8B5A3C" stopOpacity="0.85" />
                  </linearGradient>
                  
                  <linearGradient id="frameGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5A3C" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#C76A3A" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#A67C52" stopOpacity="0.9" />
                  </linearGradient>
                  
                  {/* Grain 필터 (CrayonForestClass 스타일) */}
                  <filter id="grainFrame">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.8"
                      numOctaves="4"
                      seed="3"
                    />
                    <feDisplacementMap in="SourceGraphic" scale="1.2" />
                  </filter>
                </defs>

                {/* 오른쪽 상단 프레임 - 메인 라인 (프리미엄, 섬세한 곡률) */}
                <motion.path
                  d="
                    M 720 40
                    L 1100 40
                    Q 1160 40 1170 90
                    Q 1180 140 1175 200
                    Q 1170 260 1150 280
                  "
                  stroke="url(#frameGradientTop)"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="editorial-frame-path"
                  style={{
                    filter: 'url(#grainFrame)',
                  }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{
                    pathLength: { duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.6, delay: 0.3 },
                  }}
                />

                {/* 오른쪽 상단 프레임 - 마이크로 오프셋 섀도우 */}
                <motion.path
                  d="
                    M 721 41
                    L 1101 41
                    Q 1161 41 1171 91
                    Q 1181 141 1176 201
                    Q 1171 261 1151 281
                  "
                  stroke="#8B6F47"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.4,
                  }}
                />

                {/* 왼쪽 하단 프레임 - 메인 라인 (프리미엄, 섬세한 곡률) */}
                <motion.path
                  d="
                    M 40 400
                    L 380 400
                    Q 460 400 480 460
                    Q 500 520 495 580
                    Q 490 640 470 660
                  "
                  stroke="url(#frameGradientBottom)"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="editorial-frame-path"
                  style={{
                    filter: 'url(#grainFrame)',
                  }}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{
                    pathLength: { duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.6, delay: 0.5 },
                  }}
                />

                {/* 왼쪽 하단 프레임 - 마이크로 오프셋 섀도우 */}
                <motion.path
                  d="
                    M 41 401
                    L 381 401
                    Q 461 401 481 461
                    Q 501 521 496 581
                    Q 491 641 471 661
                  "
                  stroke="#8B6F47"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.6,
                  }}
                />
              </svg>

              {/* 이미지 그룹 (프레임 위에 떠 있는 전시물, 아이 작품 기록) */}
              <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6">
                {images.map((imageSrc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`relative ${
                      index === 2 ? 'col-span-2' : ''
                    }`}
                    style={{
                      borderRadius: '80px',
                      aspectRatio: index === 2 ? '16/9' : '16/9',
                      overflow: 'hidden',
                      background: 'transparent',
                      boxShadow: `
                        inset 8px 8px 20px rgba(0, 0, 0, 0.25),
                        inset -8px -8px 20px rgba(0, 0, 0, 0.25),
                        inset 8px -8px 20px rgba(0, 0, 0, 0.2),
                        inset -8px 8px 20px rgba(0, 0, 0, 0.2),
                        0 20px 48px rgba(0, 0, 0, 0.2),
                        0 8px 16px rgba(0, 0, 0, 0.15)
                      `,
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '80px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={imageSrc}
                        alt={`감정 예술 ${index + 1}`}
                        className="w-full h-full"
                        style={{
                          objectFit: 'cover',
                          borderRadius: '80px',
                          display: 'block',
                          width: '100%',
                          height: '100%',
                        }}
                        onError={(e) => {
                          console.error('Image load error:', imageSrc);
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
