import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../../utils/imageUtils';

const stages = [
  {
    id: 1,
    name: '사유의 숲',
    ageRange: '13-19세',
    theme: '사유·정체성·세계관',
    description: (
      <>
        <span style={{ color: '#bb8162' }}>예술을 매개로 '나만의 관점' 구축, </span>
        <span 
          style={{ 
            color: '#8fbc88',
            textDecoration: 'underline',
            textDecorationColor: '#8fbc88',
            textDecorationThickness: '2px',
            textUnderlineOffset: '2px',
          }}
        >
          자기결(Self Texture)
        </span>
        <span style={{ color: '#bb8162' }}>의 본격 형성</span>
      </>
    ),
    color: '#A67C52',
  },
  {
    id: 2,
    name: '상징의 숲',
    ageRange: '8-12세',
    theme: '상징·서사·패턴',
    description: <span style={{ color: '#bb8162' }}>감정–기억–경험이 상징으로 조직되는 단계</span>,
    color: '#E8C8A8',
  },
  {
    id: 3,
    name: '감각의 숲',
    ageRange: '3-7세',
    theme: '감각·감정·첫 표현',
    description: <span style={{ color: '#bb8162' }}>표현=놀이, 놀이는 곧 자기이해</span>,
    color: '#FFB6A3',
  },
  {
    id: 4,
    name: '회복의 숲',
    ageRange: '성인·엄마',
    theme: '감정 회복·순환·재정의',
    description: <span style={{ color: '#bb8162' }}>부모가 회복될 때, 아이의 숲도 함께 자란다</span>,
    color: '#8FBC88',
  },
  {
    id: 5,
    name: 'INTEGRITY CORE',
    ageRange: '',
    theme: '기술보다 먼저, 존재의 중심',
    description: <span style={{ color: '#bb8162' }}>우리는 기술을 가르치기 전에 아이의 내면을 본다</span>,
    color: '#FFD93D',
  },
];

export default function ArtisticGrowth() {
  return (
    <>
      <hr className="section-divider" />
      <section className="relative py-32 md:py-48 lg:py-64 overflow-hidden bg-white">

        {/* Content */}
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 
              className="mb-4"
              style={{ color: '#5a8c4a' }}
            >
              예술 성장 지도
            </h2>
            <p className="text-brown-600 text-sm md:text-base tracking-[0.2em] uppercase">
              Artistic Growth Map
            </p>
          </motion.div>
          
          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* ========== LEFT: TREE IMAGE CARD ========== */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div 
                className="relative rounded-3xl overflow-hidden group"
                style={{
                  aspectRatio: '3/4',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.12), 0 15px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
                }}
              >
                {/* Tree image */}
                <img
                  src={getImagePath("/assets/about/art tree/art tree.jpg")}
                  alt="예술 성장 지도"
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.02]"
                  onError={(e) => {
                    console.error('Image load error:', e.currentTarget.src);
                    const src = e.currentTarget.src;
                    if (src.endsWith('.jpg')) {
                      e.currentTarget.src = getImagePath('/assets/about/art tree/art tree.png');
                    } else if (src.endsWith('.png')) {
                      e.currentTarget.src = getImagePath('/assets/about/art tree/art tree.PNG');
                    } else if (src.endsWith('.PNG')) {
                      e.currentTarget.src = getImagePath('/assets/about/art tree/art tree.JPG');
                    } else {
                      e.currentTarget.src = getImagePath('/assets/about/art tree/art tree.jpg');
                    }
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 via-transparent to-transparent" />
                
                {/* Text overlay - Summary of 5 boxes */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-3"
                  >
                    <p 
                      className="text-brown-900 text-xl md:text-2xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      4개의 숲과 하나의 중심
                    </p>
                    <div className="space-y-2 text-brown-700 text-sm md:text-base leading-relaxed">
                      <p><span className="text-brown-900 font-semibold">사유의 숲</span> · 나만의 관점 구축</p>
                      <p><span className="text-brown-900 font-semibold">상징의 숲</span> · 경험을 상징으로</p>
                      <p><span className="text-brown-900 font-semibold">감각의 숲</span> · 표현=놀이=자기이해</p>
                      <p><span className="text-brown-900 font-semibold">회복의 숲</span> · 부모와 아이 함께</p>
                      <p><span className="text-brown-900 font-semibold">INTEGRITY CORE</span> · 존재의 중심</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ========== RIGHT: VERTICAL STACK CARDS ========== */}
            <div className="relative order-1 lg:order-2 space-y-4">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ 
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative"
                >
                  {/* Premium SVG Multi-layer Card */}
                  <div className="relative">
                    <svg
                      viewBox="0 0 500 85"
                      className="w-full h-auto"
                      style={{
                        filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.06))',
                      }}
                    >
                      {/* Layer 1: Soft background */}
                      <rect
                        x="2"
                        y="2"
                        width="496"
                        height="81"
                        rx="14"
                        fill="#FFFCF9"
                        opacity="0.95"
                      />

                      {/* Layer 2: Main asymmetric stroke with grain */}
                      <motion.path
                        d="M 18 2 
                           L 482 2.5
                           Q 497 3, 497.5 18
                           L 498 67
                           Q 498.2 82, 483 82.5
                           L 18 83
                           Q 3 82.8, 2.5 68
                           L 2 18
                           Q 1.8 3, 17 2
                           Z"
                        stroke={stage.color}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.85 }}
                        transition={{
                          pathLength: { duration: 0.9, delay: 0.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.6, delay: 0.4 + index * 0.15 },
                        }}
                        style={{ filter: 'url(#grain)' }}
                      />

                      {/* Layer 3: Micro offset shadow stroke */}
                      <motion.path
                        d="M 18.5 3 
                           L 482.5 3.5
                           Q 496.5 4, 497 18.5
                           L 497.5 67.5
                           Q 497.7 81.5, 483.5 82
                           L 18.5 82.5
                           Q 3.5 82.3, 3 68.5
                           L 2.5 18.5
                           Q 2.3 3.5, 17.5 2.5
                           Z"
                        stroke={stage.color}
                        strokeWidth="1"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5 + index * 0.15,
                        }}
                      />

                      <defs>
                        <filter id="grain">
                          <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.8"
                            numOctaves="4"
                            seed="3"
                          />
                          <feDisplacementMap in="SourceGraphic" scale="1.4" />
                        </filter>
                      </defs>
                    </svg>

                    {/* Text content overlay */}
                    <div className="absolute inset-0 flex items-center px-4 md:px-5">
                      {/* Number Badge - 더 미니멀하게 */}
                      <motion.div 
                        className="flex-shrink-0 mr-3"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5,
                          delay: 0.6 + index * 0.15,
                          type: "spring",
                          bounce: 0.4
                        }}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: `${stage.color}12`,
                          border: `1px solid ${stage.color}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: stage.color,
                          }}
                        >
                          {stage.id}
                        </span>
                      </motion.div>

                      {/* 텍스트 - 한 줄로 더 컴팩트하게 */}
                      <div className="flex-1 min-w-0 flex items-center gap-2 md:gap-3">
                        <motion.h3 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6,
                            delay: 0.7 + index * 0.15,
                          }}
                          style={{ 
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                            fontWeight: 700,
                            color: '#1a1a1a',
                            letterSpacing: '-0.01em',
                            marginBottom: 0,
                          }}
                        >
                          {stage.name}
                        </motion.h3>
                        
                        <motion.div 
                          className="flex items-center gap-1.5 md:gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6,
                            delay: 0.8 + index * 0.15,
                          }}
                        >
                          {stage.ageRange && (
                            <>
                              <span style={{ color: '#e0e0e0', fontSize: '0.6rem' }}>●</span>
                              <span 
                                className="text-xs whitespace-nowrap"
                                style={{ 
                                  fontFamily: "'Inter', sans-serif",
                                  color: '#888',
                                  fontWeight: 500,
                                }}
                              >
                                {stage.ageRange}
                              </span>
                            </>
                          )}
                          <span style={{ color: '#e8e8e8', fontSize: '0.6rem' }}>●</span>
                          <span 
                            className="text-xs truncate"
                            style={{ 
                              fontFamily: "'Noto Serif KR', serif",
                              color: '#aaa',
                              fontWeight: 400,
                            }}
                          >
                            {stage.theme}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
