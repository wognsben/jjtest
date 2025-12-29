import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../../utils/imageUtils';

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
                        fontSize: 'clamp(1.75rem, 3.5vw, 1.8rem)',
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
                        fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                        lineHeight: 1.5,
                        letterSpacing: 0,
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
                        fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        fontWeight: 400,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      이 기법은 재료·감각·변화를 한 번에 경험하게 하는 가장 원초적인 예술입니다.
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        fontWeight: 400,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      아이에게 <span style={{ color: '#A66A5A' }}>"예술은 느끼는 것"이라는 첫 메시지</span>를 건네기 때문입니다.
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
                        fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                        lineHeight: 1.5,
                        letterSpacing: 0,
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
                        fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        fontWeight: 400,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      우리는 깨닫습니다.<br />
                      <span style={{ color: '#A66A5A' }}>"세상도 나의 재료가 될 수 있구나."</span>
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        fontWeight: 400,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      질감은 감정을 닮아 있습니다.<br /><br />
                      엔카우스틱의 표면은 거칠고 매끄럽고, 때로는 겹쳐집니다.<br /><br />
                      아이의 마음처럼 여러 결을 가진 그대로.<br /><br />
                      그래서 이 작업은 감정의 언어를 찾는 첫 연습이 됩니다.
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        fontWeight: 400,
                        color: '#4A4A4A',
                        marginBottom: '20px',
                      }}
                    >
                      녹고, 흐르고, 다시 굳는 밀랍을 보며<br /><br />
                      아이는 변화의 순간을 두려움 없이 바라봅니다.<br /><br />
                      예술의 시작은 용기와 발견이라는 사실을 배우게 됩니다.
                    </p>
                    <p 
                      style={{ 
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        fontWeight: 600,
                        color: '#4A4A4A',
                        marginBottom: '0',
                      }}
                    >
                      그래서 크레용숲의 첫 의식은 엔카우스틱 회화로 시작됩니다.<br /><br />
                      이 첫 의식은 아이에게 말합니다.<br /><br />
                      <span style={{ color: '#A66A5A' }}>"너의 감각을 믿어도 돼.<br />
                      너의 세계를 만들어도 돼."</span>
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
              <div>
                {/* SVG BORDER가 감싸는 영역 - Info Card만 포함 */}
                <div className="relative group encaustic-card-wrapper">
                  {/* SVG BORDER - Info Card만 감싸는 흔적(trace) */}
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none border-svg"
                    viewBox="0 0 520 300"
                    preserveAspectRatio="none"
                    style={{ 
                      zIndex: 1,
                    }}
                  >
                    <defs>
                      <linearGradient id="encausticBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D97757" stopOpacity="1" />
                        <stop offset="50%" stopColor="#C76A3A" stopOpacity="1" />
                        <stop offset="100%" stopColor="#B85A2A" stopOpacity="1" />
                      </linearGradient>
                      <filter id="encausticGlow">
                        <feGaussianBlur stdDeviation="0.7" result="blur"/>
                        <feMerge>
                          <feMergeNode in="blur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    {/* 손으로 그린 듯한 비정형 테두리 */}
                    <motion.path
                      d="M35 38 H458 Q498 38 498 88 V208 Q498 248 458 248 H122 H62 Q28 248 28 228"
                      stroke="url(#encausticBorderGradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      filter="url(#encausticGlow)"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      className="group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    />
                  </svg>
                  
                  {/* CONTENT - Info Card만 */}
                  <div className="relative z-10 encaustic-card-content">
                    {/* Info Card */}
                    <motion.div 
                      className="backdrop-blur-lg rounded-[24px] border border-white/40 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                      style={{
                        backgroundColor: '#FADFDE',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 8px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)',
                        position: 'relative',
                        zIndex: 10,
                      }}
                      whileHover={{
                        boxShadow: '0 24px 60px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="py-8 md:py-10 px-10 space-y-4">
                        <div className="mb-4 flex items-center justify-between">
                          <h3
                            style={{
                              fontFamily: "'Noto Serif KR', serif",
                              fontSize: 'clamp(0.8rem, 2vw, 1.5rem)',
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
                              fontSize: 'clamp(0.85rem, 2vw, 0.85rem)',
                              fontWeight: 600,
                              color: '#5A8B5A',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            Encaustic Painting
                          </h3>
                        </div>
                      
                        <p 
                          style={{
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: 'clamp(0.7rem, 1.5vw, 0.75rem)',
                            lineHeight: 1.5,
                            letterSpacing: 0,
                            color: '#555',
                          }}
                        >
                          고대 그리스와 이집트에서 시작된 <span style={{ color: '#D97757', fontWeight: 600 }}>'불로 밀랍을 녹여 색을 입히는 회화 기법'</span>
                        </p>
                        <p 
                          className="md:text-[clamp(0.9rem,1.5vw,0.85rem)]"
                          style={{
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: '0.75rem',
                            lineHeight: 1.5,
                            letterSpacing: 0,
                            color: '#555',
                          }}
                        >
                          밀랍(wax), 자연 안료, 열, 표면의 질감이 함께 어우러져 시간이 지나도 변하지 않는 깊은 층을 만들어냅니다.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* 이미지 영역 - SVG 테두리 밖에 위치 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-16 md:mt-20 lg:mt-24"
                >
                  <div 
                    className="relative w-full aspect-[16/9] rounded-lg overflow-hidden"
                    style={{
                      backgroundImage: `url(${getImagePath('/assets/about/wax/wax.jpg')})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '2px dashed rgba(199, 106, 58, 0.3)',
                    }}
                  >
                    {/* Gradient overlay - optional, can be removed if not needed */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(250, 223, 222, 0.3) 0%, rgba(245, 230, 220, 0.2) 100%)',
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 모바일 대응 스타일 */}
      <style>{`
        .encaustic-card-wrapper {
          padding: 2rem 1.5rem;
        }

        @media (min-width: 768px) {
          .encaustic-card-wrapper {
            padding: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .encaustic-card-wrapper {
            padding: 3rem;
          }
        }

        .border-svg {
          z-index: 1 !important;
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .encaustic-card-content {
          position: relative;
          z-index: 10 !important;
        }
      `}</style>
    </>
  );
}







