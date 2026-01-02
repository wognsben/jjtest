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
                  
                  {/* Encaustic copy */}
                  <motion.div 
                    className="encaustic-copy"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {/* 1: 크레용숲은 엔카우스틱 회화 — */}
                    <p className="encaustic-line">크레용숲은 엔카우스틱 회화 —</p>
                    
                    {/* 2-3 모바일 / 2 PC: 이 오래된 예술을 아이들이 가장 처음 만나는 재료로 다시 불러옵니다. */}
                    <p className="encaustic-line">
                      이 오래된 예술을 아이들이<br className="lg:hidden" />
                      <span className="lg:inline"> </span>가장 처음 만나는 재료로 다시 불러옵니다.
                    </p>
                    
                    {/* 4-5 모바일 / 3 PC: 이 기법은 재료·감각·변화를 한 번에 경험하게 하는 가장 원초적인 예술입니다. */}
                    <p className="encaustic-line">
                      이 기법은 재료·감각·변화를<br className="lg:hidden" />
                      <span className="lg:inline"> </span>한 번에 경험하게 하는 가장 원초적인 예술입니다.
                    </p>
                    
                    {/* 6-7 모바일 / 4 PC: 아이에게 "예술은 느끼는 것"이라는 첫 메시지를 건네기 때문입니다. */}
                    <p className="encaustic-line">
                      아이에게 <span style={{ color: '#A66A5A' }}>"예술은 느끼는 것"이라는<br className="lg:hidden" />
                      <span className="lg:inline"> </span>첫 메시지</span>를 건네기 때문입니다.
                    </p>
                    
                    {/* Divider */}
                    <div className="encaustic-divider"></div>
                    
                    {/* 8 모바일 / 5 PC: 흙, 밀랍, 불, 자연의 색— */}
                    <p className="encaustic-line">흙, 밀랍, 불, 자연의 색—</p>
                    
                    {/* 9 모바일 / 6 PC: 익숙한 것들이 전혀 새로운 세계가 됩니다. */}
                    <p className="encaustic-line">익숙한 것들이 전혀 새로운 세계가 됩니다.</p>
                    
                    {/* 10 모바일 / 7-8 PC: 우리는 깨닫습니다. "세상도 나의 재료가 될 수 있구나." */}
                    <p className="encaustic-line">
                      우리는 깨닫습니다.<br className="lg:inline" />
                      <span className="lg:hidden"> </span><span style={{ color: '#A66A5A' }}>"세상도 나의 재료가 될 수 있구나."</span>
                    </p>
                    
                    {/* 11 모바일 / 9 PC: 질감은 감정을 닮아 있습니다. */}
                    <p className="encaustic-line">질감은 감정을 닮아 있습니다.</p>
                    
                    {/* 12 모바일 / 10 PC: 엔카우스틱의 표면은 거칠고 매끄럽고, 때로는 겹쳐집니다. */}
                    <p className="encaustic-line">
                      엔카우스틱의 표면은 거칠고 매끄럽고,<span className="mobile-br-hidden"><br className="lg:hidden" /></span>
                      <span className="lg:inline"> </span>때로는 겹쳐집니다.
                    </p>
                    
                    {/* 13 모바일 / 11 PC: 아이의 마음처럼 여러 결을 가진 그대로. */}
                    <p className="encaustic-line">아이의 마음처럼 여러 결을 가진 그대로.</p>
                    
                    {/* 14 모바일 / 12 PC: 그래서 이 작업은 감정의 언어를 찾는 첫 연습이 됩니다. */}
                    <p className="encaustic-line">
                      그래서 이 작업은<span className="mobile-br-hidden"><br className="lg:hidden" /></span>
                      <span className="lg:inline"> </span>감정의 언어를 찾는 첫 연습이 됩니다.
                    </p>
                    
                    {/* 15-16 모바일 / 13 PC: 녹고, 흐르고, 다시 굳는 밀랍을 보며 아이는 변화의 순간을 두려움 없이 바라봅니다. */}
                    <p className="encaustic-line">
                      녹고, 흐르고, 다시 굳는 밀랍을 보며<br className="lg:hidden" />
                      <span className="lg:inline"> </span>아이는 변화의 순간을 두려움 없이 바라봅니다.
                    </p>
                    
                    {/* 17 모바일 / 15 PC: 예술의 시작은 용기와 발견이라는 사실을 배우게 됩니다. */}
                    <p className="encaustic-line">
                      예술의 시작은<span className="mobile-br-hidden"><br className="lg:hidden" /></span>
                      <span className="lg:inline"> </span>용기와 발견이라는 사실을 배우게 됩니다.
                    </p>
                    
                    {/* 18-19 모바일 / 16 PC: 그래서 크레용숲의 첫 의식은 엔카우스틱 회화로 시작됩니다. */}
                    <p className="encaustic-line">
                      그래서 크레용숲의 첫 의식은<span className="mobile-br-hidden"><br className="lg:hidden" /></span>
                      <span className="lg:inline"> </span>엔카우스틱 회화로 시작됩니다.
                    </p>
                    
                    {/* 20 모바일 / 17 PC: 이 첫 의식은 아이에게 말합니다. */}
                    <p className="encaustic-line">이 첫 의식은 아이에게 말합니다.</p>
                    
                    {/* 21-22 모바일 / 18-19 PC: "너의 감각을 믿어도 돼. 너의 세계를 만들어도 돼." */}
                    <p className="encaustic-line encaustic-line-last">
                      <span style={{ color: '#A66A5A' }}>"너의 감각을 믿어도 돼.<br className="encaustic-br" />
                      <span className="encaustic-br-next">너의 세계를 만들어도 돼."</span></span>
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
                <div className="relative group encaustic-card-wrapper">
                  {/* 모바일 이미지 */}
                  <div className="relative z-10 block md:hidden">
                    <img
                      src={getImagePath('/assets/about/Encaustic Painting (1).png')}
                      alt="Encaustic Painting"
                      className="w-full h-auto rounded-[24px]"
                    />
                        </div>
                      
                  {/* PC 이미지 */}
                  <div className="relative z-10 hidden md:block">
                    <img
                      src={getImagePath('/assets/about/Encaustic Painting pc.png')}
                      alt="Encaustic Painting"
                      className="w-full h-auto rounded-[24px]"
                    />
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
                    className="relative w-full aspect-[16/9] md:aspect-[8/9] rounded-lg overflow-hidden"
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
        /* 모바일에서 좌우 패딩 10px */
        @media (max-width: 767px) {
          .relative.p-10 {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
        }

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

        /* Encaustic copy 스타일 */
        .encaustic-copy {
          font-family: 'Noto Serif KR', serif;
          font-size: clamp(0.85rem, 1.6vw, 0.85rem);
          line-height: 1.5;
          letter-spacing: 0;
          font-weight: 400;
          color: #4A4A4A;
        }

        .encaustic-line {
          display: block;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          font-family: 'Noto Serif KR', serif;
          font-size: clamp(0.85rem, 1.6vw, 0.85rem);
          letter-spacing: 0;
          font-weight: 400;
          color: #4A4A4A;
        }

        .encaustic-line-last {
          margin-bottom: 0;
          font-weight: 600;
        }

        /* 모바일: br 다음 span에 줄 간격 적용 */
        @media (max-width: 1023px) {
          .encaustic-line {
            font-size: 0.75rem !important;
            line-height: 1.5 !important;
          }

          .encaustic-copy .encaustic-line br.lg\\:hidden + span,
          .encaustic-copy .encaustic-line br.lg\\:inline + span {
            display: block;
            margin-top: 1.25rem;
          }

          .encaustic-line br.lg\\:inline {
            display: inline;
          }

          /* span 내부의 br 다음 요소에 줄 간격 적용 */
          .encaustic-line span br.encaustic-br + span.encaustic-br-next {
            display: block;
            margin-top: 1.25rem;
          }

          /* 일반 p 태그 내 br 다음 span에 줄 간격 적용 */
          .encaustic-card-content p br.lg\\:hidden + span {
            display: block;
            margin-top: 1.25rem;
          }

          /* encaustic-wax-text 줄 간격 조정 */
          .encaustic-wax-text br.lg\\:hidden + span.lg\\:inline {
            display: block;
            margin-top: 1.25rem;
          }

          /* 특정 줄의 br 모바일에서 숨김 */
          .encaustic-line .mobile-br-hidden br.lg\\:hidden {
            display: none !important;
          }
        }

        /* PC: 줄을 합치기 위해 br 숨김/표시 및 줄 간격 */
        @media (min-width: 1024px) {
          .encaustic-line br.lg\\:hidden {
            display: none;
          }

          .encaustic-line br.lg\\:inline {
            display: inline;
          }

          .encaustic-line span.lg\\:hidden + span {
            display: block;
            margin-top: 1.25rem;
          }

          /* span 내부의 br 다음 요소에 줄 간격 적용 */
          .encaustic-line span br.encaustic-br + span.encaustic-br-next {
            display: block;
            margin-top: 1.25rem;
          }

          /* 일반 p 태그 내 br 숨김 */
          .encaustic-card-content p br.lg\\:hidden {
            display: none;
          }

          /* encaustic-wax-text PC에서 br 숨김 */
          .encaustic-wax-text br.lg\\:hidden {
            display: none;
          }
        }

        .encaustic-divider {
          border-top: 1px solid rgba(139, 106, 71, 0.3);
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
          padding-top: 1.25rem;
        }
      `}</style>
    </>
  );
}







