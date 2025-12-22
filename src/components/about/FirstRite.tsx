import React from 'react';
import { motion } from 'motion/react';

export default function FirstRite() {
  // Removed all parallax scroll effects

  return (
    <>
      <hr className="section-divider" />
      <section 
        className="relative min-h-screen py-32 md:py-40 lg:py-56 overflow-hidden"
      >
        {/* Soft beige gradient background */}
        <div 
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 65% 50%, rgba(245,230,220,0.4) 0%, rgba(250,240,230,0.3) 40%, rgba(255,250,245,0.2) 70%, rgba(255,255,255,0.1) 100%)',
            }}
          />
        </div>
        
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Section label - top left */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-16 md:top-20 left-8 md:left-16 lg:left-24 z-30"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-50/40 rounded-full blur-sm" />
            <div className="relative px-8 py-3 rounded-full border border-amber-200/50 bg-gradient-to-r from-amber-50 to-orange-50/80 backdrop-blur-sm">
              <span 
                className="text-xs tracking-[0.2em] text-brown-700 italic"
                style={{ fontFamily: "'Noto Serif KR', 'Noto Serif', serif" }}
              >
                ENCAUSTIC PAINTING
              </span>
            </div>
          </div>
        </motion.div>
        
        <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-start">
            
            {/* Left - Text content with floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative">
                {/* Glass card background */}
                <div 
                  className="absolute inset-0 bg-white/70 backdrop-blur-lg rounded-[32px] border border-white/50"
                  style={{
                    boxShadow: '0 24px 60px rgba(0,0,0,0.06), 0 10px 30px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.6)'
                  }}
                />
                
                {/* Content */}
                <div className="relative p-10 md:p-12 lg:p-16">
                  
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ marginBottom: '20px' }}
                  >
                    <h2 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                        lineHeight: 1.3,
                        fontWeight: 600,
                        color: '#4A4A4A',
                      }}
                    >
                      The First Rite <span style={{ color: '#8B6F47' }}>of Crayon Forest</span>
                    </h2>
                  </motion.div>
                  
                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-20 h-px bg-gradient-to-r from-accent-green/40 to-transparent origin-left"
                    style={{ marginBottom: '20px' }}
                  />
                  
                  {/* First paragraph group */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
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
                      크레용숲은 엔카우스틱 회화 —<br />
                      이 오래된 예술을 아이들이 가장 처음 만나는 재료로 다시 불러옵니다.
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
                      이 기법은 재료·감각·변화를 한 번에 경험하게 하는 가장 원초적인 예술입니다.
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
                      아이에게 "예술은 느끼는 것"이라는 첫 메시지를 건네기 때문입니다.
                    </p>
                  </motion.div>
                  
                  {/* Second paragraph group */}
                  <motion.div 
                    className="border-t border-brown-200/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
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
                      흙, 밀랍, 불, 자연의 색—<br />
                      익숙한 것들이 전혀 새로운 세계가 됩니다.
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
                      우리는 깨닫습니다.<br />
                      "세상도 나의 재료가 될 수 있구나."
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
                      질감은 감정을 닮아 있습니다.<br />
                      엔카우스틱의 표면은 거칠고 매끄럽고, 때로는 겹쳐집니다.<br />
                      아이의 마음처럼 여러 결을 가진 그대로.<br />
                      그래서 이 작업은 감정의 언어를 찾는 첫 연습이 됩니다.
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
                      녹고, 흐르고, 다시 굳는 밀랍을 보며<br />
                      아이는 변화의 순간을 두려움 없이 바라봅니다.<br />
                      예술의 시작은 용기와 발견이라는 사실을 배우게 됩니다.
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                        lineHeight: 1.8,
                        fontWeight: 600,
                        color: '#5a8c4a',
                        marginBottom: '0',
                      }}
                    >
                      그래서 크레용숲의 첫 의식은 엔카우스틱 회화로 시작됩니다.<br />
                      이 첫 의식은 아이에게 말합니다.<br />
                      "너의 감각을 믿어도 돼.<br />
                      너의 세계를 만들어도 돼."
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Right - Encaustic Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              
              {/* Card 1: What is Encaustic? */}
              <div className="relative group">
                {/* SVG FRAME (카드 외부 프레임) - Shadow Layer */}
                <motion.svg
                  className="pointer-events-none absolute -inset-4"
                  viewBox="0 0 520 300"
                  preserveAspectRatio="none"
                  style={{ zIndex: 19, filter: 'blur(2px)', opacity: 0.3 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* 상단 + 우측 선 그림자 */}
                  <path
                    d="M40 40 H460 Q500 40 500 90 V210"
                    stroke="#8B4A2B"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* 하단 + 좌측 선 그림자 */}
                  <path
                    d="M450 265 H120 H60 Q30 265 30 245"
                    stroke="#8B4A2B"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
                
                {/* SVG FRAME (카드 외부 프레임) - Main Layer */}
                <motion.svg
                  className="pointer-events-none absolute -inset-4"
                  viewBox="0 0 520 300"
                  preserveAspectRatio="none"
                  style={{ zIndex: 20 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <defs>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D97757" stopOpacity="1" />
                      <stop offset="50%" stopColor="#C76A3A" stopOpacity="1" />
                      <stop offset="100%" stopColor="#B85A2A" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {/* 상단 + 우측 선 */}
                  <motion.path
                    d="M40 40 H460 Q500 40 500 90 V210"
                    stroke="url(#borderGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  />
                  {/* 하단 + 좌측 선 */}
                  <motion.path
                    d="M450 265 H120 H60 Q30 265 30 245"
                    stroke="url(#borderGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  />
                </motion.svg>
                
                {/* CARD (SVG 프레임 안에 위치) */}
                <motion.div 
                  className="relative backdrop-blur-lg rounded-[24px] border border-white/40 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{
                    backgroundColor: '#FADFDE',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)',
                    zIndex: 10
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 30px 70px rgba(0,0,0,0.12), 0 12px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative p-8 md:p-10 space-y-4">
                    <div className="relative z-10 mb-4 flex items-center justify-between">
                      <h3 
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                          fontWeight: 600,
                          color: '#8B5A3C',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        엔카우스틱 회화
                      </h3>
                      <h3 
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: 'clamp(1rem, 2vw, 1rem)',
                          fontWeight: 600,
                          color: '#5A8B5A',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        Encaustic Painting
                      </h3>
                    </div>
                  
                  <p 
                    className="relative z-10"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                      lineHeight: 1.7,
                      color: '#555',
                    }}
                  >
                    고대 그리스와 이집트에서 시작된 <span style={{ color: '#D97757', fontWeight: 600 }}>'불로 밀랍을 녹여 색을 입히는 회화 기법'</span>
                  </p>
                  <p 
                    className="relative z-10"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                      lineHeight: 1.7,
                      color: '#555',
                    }}
                  >
                    밀랍(wax), 자연 안료, 열, 표면의 질감이 함께 어우러져 시간이 지나도 변하지 않는 깊은 층을 만들어냅니다.
                  </p>
                  </div>
                </motion.div>
                
                {/* 이미지 영역 (카드 하단 분리) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mt-16 md:mt-20 lg:mt-24"
                >
                  <div 
                    className="relative w-full aspect-[16/9] rounded-lg overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(250, 223, 222, 0.6) 0%, rgba(245, 230, 220, 0.4) 100%)',
                      border: '2px dashed rgba(199, 106, 58, 0.3)',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span 
                        className="text-sm text-[#C76A3A]/50"
                        style={{ fontFamily: "'Noto Serif KR', serif" }}
                      >
                        이미지 영역
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}







