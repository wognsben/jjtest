import React from 'react';
import { motion } from 'motion/react';
import HandDrawnSVG from './HandDrawnSVG';
import WebGLFluidBackground from './WebGLFluidBackground';
import { getImagePath } from '../../utils/imageUtils';

export default function Philosophy() {
  // Removed all parallax scroll effects
  
  return (
    <section 
      id="chapter-philosophy"
      className="relative overflow-hidden"
      style={{
        paddingTop: 'clamp(6rem, 15vw, 18rem)',
        paddingBottom: 'clamp(6rem, 15vw, 18rem)',
      }}
    >
      {/* WebGL Fluid Background */}
      <div className="absolute inset-0">
        <WebGLFluidBackground />
      </div>
      
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 35% 45%, rgba(255,220,225,0.35) 0%, rgba(255,235,238,0.25) 40%, rgba(255,245,247,0.15) 70%, rgba(255,250,251,0.05) 100%)',
          }}
        />
      </div>
      
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Diagonal pink brush - center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          whileInView={{ opacity: 0.15, scale: 1, rotate: -42 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
        >
          {/* Hand-drawn decorative SVG elements */}
          <HandDrawnSVG type="scribble" color="rgba(255, 182, 193, 0.4)" size={300} className="absolute top-[20%] left-[30%]" />
          <HandDrawnSVG type="circle" color="rgba(255, 107, 157, 0.3)" size={400} className="absolute top-[40%] right-[25%]" />
        </motion.div>
      </div>
      
      <div 
        className="relative max-w-[1920px] mx-auto h-full"
        style={{
          paddingLeft: 'clamp(1.5rem, 4vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 4vw, 4rem)',
        }}
      >
        <div 
          className="relative flex items-center"
          style={{
            minHeight: 'clamp(60vh, 80vw, 80vh)',
            height: 'clamp(500px, 75vw, 750px)',
          }}
        >
          
          {/* Left - Floating Glass Card with Text */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[50%] xl:w-[45%] lg:h-full"
              style={{ marginTop: 'clamp(2rem, 5vw, 0px)' }}
            >
            {/* Glass card background */}
            <div className="relative flex flex-col h-full">
              <div 
                className="absolute inset-0 bg-white/80 backdrop-blur-xl border border-white/60"
                style={{
                  borderRadius: 'clamp(1.5rem, 3vw, 2rem)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              />
              
              {/* Content */}
              <div 
                className="relative flex-1 philosophy-content-padding"
                style={{
                  paddingTop: 'clamp(2.5rem, 6vw, 4rem)',
                  paddingBottom: 'clamp(2.5rem, 6vw, 4rem)',
                  paddingLeft: 'clamp(2.5rem, 6vw, 4rem)',
                  paddingRight: 'clamp(2.5rem, 6vw, 4rem)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 2.5rem)' }}>
                
                {/* Title with Divider */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1.75rem, 3.5vw, 1.8rem)',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: '-0.03em',
                      color: '#4A4A4A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span style={{ whiteSpace: 'nowrap' }}>
                      The Origin <span style={{ color: '#8fbc88' }}>of Color</span>
                    </span>
                  </h2>
                  
                  {/* Divider below h2 */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'inline-block',
                      width: 'clamp(4rem, 10vw, 6rem)',
                      height: '1px',
                      background: 'linear-gradient(to right, #8fbc88, transparent)',
                      transformOrigin: 'left',
                      marginTop: '1rem',
                    }}
                  />
                </motion.div>
                
                {/* Text content */}
                <motion.div className="max-w-xl">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    크레용의 역사는 조용한 한 줌의 흙에서 시작됩니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    라틴어 creta, 흰 점토.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    이 작은 점토가 프랑스어 craie가 되어 분필이 되었고,
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
                    className="philosophy-crayon-line"
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    <span className="philosophy-crayon-part1">그 분필이 다시 crayon,</span>
                    <br className="lg:hidden" />
                    <span className="lg:inline lg:ml-1">'작은 분필'이라는 이름으로 태어났습니다.</span>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    흙이 선이 되고, 선이 이야기가 된 오래된 기원입니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    고대의 화가들은 벌꿀 왁스에 안료를 섞어 빛을 기록했고,
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.64, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    르네상스 화가들은 부서지는 파스텔을 길들였습니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.66, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    그리고 1903년,<br className="lg:hidden" />
                    <span className="lg:inline"> </span>"아이들이 쥐어도 안전한 색"이라는 개념이 등장하며
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
                    className="philosophy-crayon-final-line"
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.85rem)',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      color: '#4A4A4A',
                      fontWeight: 400,
                      marginBottom: 0,
                    }}
                  >
                    <span className="philosophy-crayon-final-part1">크레용은 더 이상 도구가 아닌,</span>
                    <br className="lg:hidden" />
                    <span className="lg:inline lg:ml-1"><span style={{ color: '#8fbc88', fontWeight: 600 }}>누구나 한 번은 손에 쥐어보는</span></span>
                    <br className="lg:hidden" />
                    <span className="lg:inline lg:ml-1"><span style={{ color: '#8fbc88', fontWeight: 600 }}><span style={{ fontWeight: 700 }}>첫 번째 예술 언어</span>가</span> 되었습니다.</span>
                  </motion.p>
                </motion.div>
                
                {/* Pull Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-accent-green/20"
                  style={{ paddingTop: 'clamp(1.5rem, 4vw, 1.875rem)' }}
                >
                  <blockquote
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      color: '#4A4A4A',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      그리고 지금,<br className="lg:hidden" />
                      <span className="lg:inline"> </span>그 오래된 이야기는 크레용숲에서 다시 피어납니다.
                    </div>
                    <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      여기서는 <span style={{ color: '#8fbc88', fontWeight: 600 }}>아이뿐 아니라 <span style={{ fontWeight: 700 }}>우리 모두가</span></span>
                      <br className="lg:hidden" />
                      <span className="lg:inline"> </span><span style={{ color: '#8fbc88', fontWeight: 600 }}>잃어버린 <span style={{ fontWeight: 700 }}>순수한 감각을</span> 되찾습니다.</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      낙서 한 줄에도 세상이 열리던<br className="lg:hidden" />
                      <span className="lg:inline"> </span>그 마음을 다시 만나는 장소이기도 합니다.
                    </div>
                    <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      색은 감정을 깨우고, 선은 마음의 결을 드러내며,<br className="lg:hidden" />
                      <span className="lg:inline"> </span>다시 우리 안의 '숲'을 자라게 합니다.
                    </div>
                    <div>
                      흙에서 시작된 색의 이야기가<br className="lg:hidden" />
                      <span className="lg:inline"> </span>이제 우리 각자의 숲에서 새로운 빛으로 이어집니다.
                    </div>
                  </blockquote>
                </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right - Floating Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[48%] xl:w-[50%] lg:h-full"
            style={{
              height: 'clamp(500px, 75vw, 750px)',
            }}
          >
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full overflow-hidden group cursor-pointer"
              style={{
                minHeight: 'clamp(400px, 60vw, 600px)',
                borderRadius: 'clamp(2rem, 4vw, 2.5rem)',
                boxShadow: '0 40px 100px rgba(0, 0, 0, 0.12), 0 20px 50px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Video background */}
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                src={getImagePath("/assets/about/The Origin of Color/The Origin of Color.jpg")}
                alt="The Origin of Color"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brown-900/0 via-brown-900/0 to-brown-900/50 group-hover:to-brown-900/45 transition-opacity duration-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 767px) {
          .philosophy-content-padding {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: clamp(2rem, 5vw, 2.5rem) !important;
          }

          /* 모바일에서 philosophy-crayon-line 줄 띄움 추가 - p 태그 간격과 일치 */
          .philosophy-crayon-line br.lg\\:hidden + span {
            display: block;
            margin-top: clamp(1rem, 2vw, 1.25rem);
          }


          /* 모바일에서 일반 p 태그 내 br 다음 요소 줄 띄움 추가 - p 태그 간격과 일치 */
          #chapter-philosophy p br.lg\\:hidden + span {
            display: block;
            margin-top: clamp(1rem, 2vw, 1.25rem);
          }

          /* 모바일에서 blockquote 내 div 안 br 다음 요소 줄 띄움 추가 - p 태그 간격과 일치 */
          #chapter-philosophy blockquote div br.lg\\:hidden + span {
            display: block;
            margin-top: clamp(1rem, 2vw, 1.25rem);
          }
        }
        
        @media (min-width: 1024px) {
          .philosophy-crayon-line .philosophy-crayon-part1::after {
            content: ' ';
          }
        }

        /* 모바일에서 height clamp 문제 해결 - PC는 영향 없음 */
        @media (max-width: 1023px) {
          #chapter-philosophy > div.relative > div.relative.flex.items-center {
            height: auto !important;
            min-height: auto !important;
            flex-direction: column !important;
            align-items: stretch !important;
          }

          /* 모바일에서 philosophy-crayon-final-line 줄 간격 균일화 */
          .philosophy-crayon-final-line br {
            display: none !important;
          }

          .philosophy-crayon-final-line > span {
            display: block !important;
          }

          /* 모바일에서 이미지 컨테이너를 normal flow로 복구 - 텍스트 하단에 위치 */
          #chapter-philosophy .relative.z-10.mt-12 {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            left: auto !important;
            transform: none !important;
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            margin-top: 3rem !important;
          }

          #chapter-philosophy .relative.z-10.mt-12 > div.relative.h-full {
            min-height: 320px !important; /* 모바일 이미지 최소 높이 */
          }

          #chapter-philosophy p,
          #chapter-philosophy blockquote {
            font-size: 0.75rem !important;
            line-height: 1.5 !important;
          }
        }

        /* PC에서 텍스트 / 이미지 사이 실제 간격 만들기 + 스크롤 없이 모든 텍스트 표시 */
        @media (min-width: 1024px) {
          /* 부모 컨테이너 - 텍스트 높이에 맞춰 유연하게 조정 */
          #chapter-philosophy > div.relative > div.relative.flex.items-center {
            min-height: clamp(500px, 75vw, 750px) !important;
            height: auto !important;
            align-items: stretch !important;
          }

          /* 텍스트 영역 (width 조정으로 간격 확보, 높이 자동) */
          #chapter-philosophy > div.relative > div.relative.flex.items-center > div.relative.z-20 {
            width: 62% !important;
            height: auto !important;
          }

          /* 텍스트 카드 내부 컨테이너 - 높이 자동 조정, overflow 제거 */
          #chapter-philosophy > div.relative > div.relative.flex.items-center > div.relative.z-20 > div.relative.flex.flex-col.h-full {
            height: auto !important;
          }

          /* 이미지 영역 */
          #chapter-philosophy > div.relative > div.relative.flex.items-center > div.relative.z-10 {
            width: 35% !important;
            height: auto !important;
            align-self: flex-start !important;
            top: 1000px !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
