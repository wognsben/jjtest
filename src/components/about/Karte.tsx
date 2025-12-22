import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Karte() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <>
      <hr className="section-divider" />
      <section 
        ref={sectionRef}
        className="relative py-32 md:py-48 lg:py-64 overflow-hidden bg-white"
      >
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Decorative organic shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-40 h-40 md:w-64 md:h-64 rounded-full opacity-5 bg-accent-pink"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-5 bg-accent-green"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 md:mb-20 lg:mb-24 space-y-4"
          >
            <h2 
              className="text-accent-green"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.4,
              }}
            >
              아이의 마음은 기록될 때 자랍니다.
            </h2>
            <p 
              className="text-brown-600"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                lineHeight: 1.7,
                fontFamily: "'Noto Serif KR', serif",
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              크레용숲은{' '}
              <span style={{ color: '#bb8162' }}>1년의 감정 흐름을 색과</span>
              {' '}패턴으로 기록해{' '}
              <span style={{ color: '#bb8162' }}>자기서사(Self-Narrative)</span>
              를 키웁니다.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-start">
            
            {/* ========== LEFT: 6개월 성장 카르테 ========== */}
            <motion.div
              className="space-y-8 md:space-y-10"
            >
              {/* Rose Brown box - 6개월 성장카르테 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl p-8 md:p-10 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(187, 129, 98, 0.12) 0%, rgba(187, 129, 98, 0.06) 100%)',
                  border: '2px solid rgba(187, 129, 98, 0.2)',
                }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" fill="none">
                    <path d="M0 0 L100 0 L100 100 Z" fill="#bb8162" />
                  </svg>
                </div>

                <h3 
                  className="text-brown-700 mb-6"
                  style={{
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  6개월 성장카르테(스에나가하트앤컬러 메소드)
                </h3>

                <div className="space-y-3 text-brown-600" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)', lineHeight: 1.7 }}>
                  <p>색채표현의 변화 = 마음의 성장 기록</p>
                  <p>싹트기 시작한 능력 = 향후 발달 방향 예측</p>
                </div>

                {/* Small badge at bottom */}
                <div className="mt-6 inline-block px-4 py-2 rounded-full bg-brown-100 text-brown-600 text-xs md:text-sm font-medium tracking-wide">
                  크레용숲만의 독자적 성장 평가 체계
                </div>
              </motion.div>

              {/* 박스 외부 하단 텍스트 블록 */}
              <div className="mt-8 md:mt-10 space-y-6">
                <p className="text-brown-600 leading-relaxed" style={{ 
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                  lineHeight: 1.8,
                  fontFamily: "'Noto Serif KR', serif",
                }}>
                  아이의 성장에는 '마음의 방향성'이 중요합니다<br />
                  그래서 우리는 결과보다 마음의 흐름과 성장의 흔적을 기록합니다.<br />
                  색과 선으로 드러난 감정은 스에나가 메소드 기반의 근거에 따라 섬세하게 해석되고,<br />
                  특히 유아·아동기에 아이가 '정보를 발신하는 경험'을 하는 것은 매우 중요합니다
                </p>

                <p className="text-brown-600 leading-relaxed" style={{ 
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
                  lineHeight: 1.8,
                  fontFamily: "'Noto Serif KR', serif",
                }}>
                  크레용숲은 아이가 감정을 발신하고,<br />
                  어른은 그 신호를 읽고 반응하는 쌍방향 소통을 가장 소중하게 여깁니다
                </p>
              </div>
            </motion.div>

            {/* ========== RIGHT: 카르테 이미지 ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative space-y-6"
            >
              <img 
                src="/assets/about/6months carte/6months carte.png"
                alt="6개월 성장카르테"
                onError={(e) => {
                  const target = e.currentTarget;
                  const src = target.src;
                  console.error('Image load error:', src);
                  // 확장자 자동 처리
                  if (src.endsWith('.png')) {
                    target.src = '/assets/about/6months carte/6months carte.jpg';
                  } else if (src.endsWith('.jpg')) {
                    target.src = '/assets/about/6months carte/6months carte.PNG';
                  } else if (src.endsWith('.PNG')) {
                    target.src = '/assets/about/6months carte/6months carte.JPG';
                  } else {
                    // 확장자가 없는 경우 .png부터 시도
                    target.src = '/assets/about/6months carte/6months carte.png';
                  }
                }}
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
              
              {/* 색상-감정 설명 텍스트 */}
              <div className="space-y-2 text-brown-600" style={{ 
                fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                lineHeight: 1.7,
                fontFamily: "'Noto Serif KR', serif",
              }}>
                <p>노랑: 기쁜 마음</p>
                <p>파랑 + 빨강 혼색: 기쁜 마음</p>
                <p>파랑 + 초록 혼색: 좋은 마음</p>
                <p>노랑 + 보라: 뿌듯해요</p>
                <p>하늘 + 빨강: 열정, 오늘 잘 만들 거예요</p>
                <p>하늘 + 보라: 장난쳐서 방해돼요</p>
                <p>하늘 = 초록 + 보라: 미술해서 너무 좋아요</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
