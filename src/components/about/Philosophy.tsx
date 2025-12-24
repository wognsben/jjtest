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
      
      {/* Section label - top right */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-30"
        style={{
          top: 'clamp(4rem, 10vw, 5rem)',
          right: 'clamp(2rem, 6vw, 6rem)',
        }}
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-100/40 rounded-full blur-sm" />
          <div 
            className="relative rounded-full border border-pink-300/50 bg-gradient-to-r from-pink-50 to-pink-100/80 backdrop-blur-sm"
            style={{
              paddingLeft: 'clamp(1.5rem, 4vw, 2rem)',
              paddingRight: 'clamp(1.5rem, 4vw, 2rem)',
              paddingTop: 'clamp(0.625rem, 1.5vw, 0.75rem)',
              paddingBottom: 'clamp(0.625rem, 1.5vw, 0.75rem)',
            }}
          >
            <span 
              className="tracking-[0.2em] text-brown-700 italic"
              style={{ 
                fontFamily: "'Noto Serif KR', 'Noto Serif', serif",
                fontSize: 'clamp(0.625rem, 1.2vw, 0.75rem)',
              }}
            >
              PHILOSOPHY
            </span>
          </div>
        </div>
      </motion.div>
      
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
          }}
        >
          
          {/* Left - Floating Glass Card with Text */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[50%] xl:w-[45%]"
            >
            {/* Glass card background */}
            <div className="relative flex flex-col" style={{ minHeight: '100%' }}>
              <div 
                className="absolute inset-0 bg-white/80 backdrop-blur-xl border border-white/60"
                style={{
                  borderRadius: 'clamp(1.5rem, 3vw, 2rem)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              />
              
              {/* Content */}
              <div 
                className="relative flex-1"
                style={{
                  padding: 'clamp(2.5rem, 6vw, 4rem)',
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
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: '-0.03em',
                      color: '#4A4A4A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span style={{ whiteSpace: 'nowrap' }}>
                      The Origin <span style={{ color: '#8fbc88' }}>of Color</span>
                    </span>
                    
                    {/* Divider next to "of Color" */}
                    <motion.span
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
                      }}
                    />
                  </h2>
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
                      fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                      lineHeight: 1.85,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    크레용(Crayon)이라는 단어는 프랑스어 'craie(분필)'와 라틴어 'creta(흙)'에서 유래되었습니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                      lineHeight: 1.85,
                      color: '#666666',
                      fontWeight: 300,
                      marginBottom: 'clamp(1rem, 2vw, 1.25rem)',
                    }}
                  >
                    고대의 화가들은 <span style={{ color: '#666666', fontWeight: 700 }}>벌꿀 왁스</span>에 안료를 섞어 빛을 기록했고, 르네상스 화가들은 부서지는 <span style={{ color: '#666666', fontWeight: 700 }}>파스텔</span>을 길들였습니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ 
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                      lineHeight: 1.85,
                      color: '#333333',
                      fontWeight: 400,
                      marginBottom: 0,
                    }}
                  >
                    그리고 1903년, <span style={{ color: '#333333', fontWeight: 700 }}>"아이들이 쥐어도 안전한 색"</span>이라는 개념이 등장하며 크레용은 더 이상 도구가 아닌, <span style={{ backgroundColor: 'rgba(255, 182, 193, 0.3)', padding: '2px 6px', borderRadius: '4px' }}>누구나 한 번은 손에 쥐어보는 <span style={{ color: '#8fbc88', fontWeight: 700 }}>첫 번째 예술 언어</span>가</span> 되었습니다.
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
                      fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                      lineHeight: 1.5,
                      color: '#333333',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      그리고 지금, 그 오래된 이야기는 크레용숲에서 다시 피어납니다.
                    </div>
                    <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      여기서는 <span style={{ backgroundColor: 'rgba(255, 182, 193, 0.3)', padding: '2px 6px', borderRadius: '4px' }}>아이뿐 아니라 <span style={{ color: '#8fbc88', fontWeight: 700 }}>우리 모두가</span> 잃어버린 <span style={{ color: '#8fbc88', fontWeight: 700 }}>순수한 감각을</span> 되찾습니다.</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      낙서 한 줄에도 세상이 열리던 그 마음을 다시 만나는 장소이기도 합니다.
                    </div>
                    <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.25rem)' }}>
                      색은 감정을 깨우고, 선은 마음의 결을 드러내며, 다시 우리 안의 '숲'을 자라게 합니다.
                    </div>
                    <div>
                      흙에서 시작된 색의 이야기가 이제 우리 각자의 숲에서 새로운 빛으로 이어집니다.
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
            className="relative z-10 mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[48%] xl:w-[50%]"
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
    </section>
  );
}
