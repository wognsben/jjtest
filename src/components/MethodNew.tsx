import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
// TODO: 이미지 파일 추가 후 아래 주석 해제 및 경로 수정
// import methodImage from '/assets/mainpage/main2sec/method.PNG';

function RebuildText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ');
  
  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function HighlightText({ children, showUnderline = true }: { children: React.ReactNode; showUnderline?: boolean }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10" style={{ color: '#2e7d32' }}>{children}</span>
      {showUnderline && (
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-[0.35em] origin-left -z-0"
          style={{ 
            transform: 'translateY(0.15em)',
            backgroundColor: 'rgba(124, 179, 66, 0.6)'
          }}
        />
      )}
    </span>
  );
}

// Floating blob decoration
function FloatingBlob({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.9, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.svg
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M 50 10
             C 70 12, 85 25, 90 45
             C 93 60, 90 75, 80 85
             C 68 93, 52 95, 38 90
             C 25 85, 12 72, 10 55
             C 8 40, 15 25, 28 15
             C 38 8, 42 9, 50 10 Z"
          fill="currentColor"
          opacity="0.15"
        />
      </motion.svg>
    </motion.div>
  );
}

export default function MethodNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    
    setMousePos({ x: deltaX * 12, y: deltaY * 12 });
  };
  
  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };
  
  return (
    <>
      {/* Hero section - Brown background with highlight */}
      <section 
        ref={sectionRef}
        className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #B88860 0%, #A67856 100%)'
        }}
      >
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Floating blobs */}
        <FloatingBlob delay={0.5} className="top-12 left-12 text-white" />
        <FloatingBlob delay={0.7} className="bottom-24 right-24 text-accent-green" />
        <FloatingBlob delay={0.9} className="top-1/3 right-12 text-pink-soft" />
        
        <div className="relative max-w-5xl mx-auto text-center space-y-10 md:space-y-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/95"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            <RebuildText text="크레용숲은" />
            {' '}
            <HighlightText showUnderline={false}>
              <RebuildText text="스에나가 하트앤컬러 메소드" delay={0.15} />
            </HighlightText>
            {' '}
            <RebuildText text="에서 영감을 받아" delay={0.3} />
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/95"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            <RebuildText text="아동·청소년·성인의" delay={0.5} />
            {' '}
            <HighlightText>
              <RebuildText text="정서 세계관을 잇는 예술 교육" delay={0.65} />
            </HighlightText>
            <RebuildText text="을 제공합니다." delay={0.95} />
          </motion.p>
        </div>
      </section>
      
      {/* Detail section - Light background */}
      <section 
        ref={detailRef}
        className="relative py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-beige/30 to-white overflow-hidden"
      >
        {/* Subtle texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Decorative blobs */}
        <FloatingBlob delay={0.3} className="top-20 right-[10%] text-accent-green" />
        <FloatingBlob delay={0.6} className="bottom-32 left-[15%] text-pink-soft" />
        
        <div className="relative max-w-[1600px] mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20 md:mb-28"
          >
            <h2 
              className="text-brown-900 mb-4"
              style={{ 
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              }}
            >
              <span style={{ color: '#2e7d32' }}>스에나가 하트앤컬러 메소드</span>는 무엇인가요?
            </h2>
          </motion.div>
          
          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <div className="space-y-5">
                <p className="text-lg md:text-xl text-brown-800 leading-relaxed">
                  <span style={{ color: '#8B6F47', fontWeight: 600 }}>'색은 마음의 언어'</span>라는 철학을 바탕으로 색을 통해 마음을 읽고, 감정을 안전하게 표현하도록 돕는 정서예술 교육법입니다.
                </p>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-16 h-1 bg-accent-green/40 origin-left"
                />
                
                <p className="text-base md:text-lg text-brown-700 leading-relaxed">
                  우리가 선택하는 색, 선의 흐름, 채도의 변화 속에 담긴 <span style={{ color: '#8B6F47', fontWeight: 600 }}>마음의 신호를 섬세하게 해석</span>합니다.
                </p>
                
                <p className="text-base md:text-lg text-brown-700 leading-relaxed">
                  색은 감정을 안정시키고 회복시키는 힘이 있어, 자연스럽게 <span style={{ color: '#8B6F47', fontWeight: 600 }}>정서 건강과 자기이해</span>가 자랍니다.
                </p>
              </div>
              
              {/* Key points - Clean aligned grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                {[
                  { title: '정서 색채관', desc: '마음을 색으로', transform: 'rotate(-1deg)' },
                  { title: '감각 활성화', desc: '자연스럽게', transform: 'rotate(1.5deg)' },
                  { title: '자연스러움', desc: '강요하지 않는', transform: 'rotate(1deg)' },
                  { title: '자유로운 표현', desc: '있는 그대로', transform: 'rotate(-1.5deg)' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="relative p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-brown-200/20 shadow-sm text-center"
                    style={{ transform: item.transform }}
                  >
                    <p className="text-sm tracking-wide text-brown-900 mb-1" style={{ fontWeight: 600 }}>
                      {item.title}
                    </p>
                    <p className="text-xs text-brown-600">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right - Image */}
            <motion.div 
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <motion.div
                style={{ y }}
                className="relative"
              >
                <div 
                  className="aspect-[5/3] relative overflow-hidden shadow-2xl rounded-3xl"
                  style={{
                    minHeight: '350px',
                    maxHeight: '400px',
                    transform: `perspective(1200px) rotateX(${-mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.4}deg)`,
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: `
                      0 4px 12px rgba(45, 80, 22, 0.08),
                      0 12px 32px rgba(45, 80, 22, 0.12),
                      0 24px 64px rgba(45, 80, 22, 0.16),
                      ${mousePos.x * 2}px ${mousePos.y * 2}px 40px rgba(45, 80, 22, 0.2)
                    `
                  }}
                >
                  {/* TODO: 이미지 파일 추가 후 아래 주석 해제하고 placeholder div 제거 */}
                  {/* <img 
                    src={methodImage}
                    alt="Heart & Color Method"
                    className="absolute inset-0 w-full h-full object-cover"
                  /> */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-200 via-green-100 to-green-50 flex items-center justify-center">
                    <p className="text-brown-600 text-lg">Heart & Color Method</p>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-center mt-20 md:mt-28"
          >
            <p 
              className="text-lg md:text-xl text-brown-800 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              크레용숲은 자신의 마음을 <HighlightText>섬세하게 느끼고, 자유롭게 표현하며</HighlightText>, 생생하게 성장할 수 있는 안전하고 열린 배움의 숲을 만들어갑니다.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
