import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

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
          transition={{ duration: 0.5, delay: delay + i * 0.05 }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function HighlightText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 h-[0.3em] bg-accent-green/30 origin-left -z-0"
        style={{ transform: 'translateY(0.1em)' }}
      />
    </span>
  );
}

export default function Method() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isDetailInView = useInView(detailRef, { once: true, amount: 0.2 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    
    setMousePos({ x: deltaX * 15, y: deltaY * 15 });
  };
  
  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };
  
  return (
    <>
      {/* Introduction section - Brown background */}
      <section 
        ref={sectionRef}
        className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-brown-800 text-beige overflow-hidden"
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="w-full h-full grain-texture" />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl leading-relaxed"
          >
            <RebuildText 
              text="크레용숲은 스에나가 Heart&Color 메소드에서 영감을 받아" 
            />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed"
          >
            <RebuildText 
              text="아동·청소년·성인의 정서 세계관을 잇는 예술 교육을 제공합니다."
              delay={0.2}
            />
          </motion.p>
        </div>
      </section>
      
      {/* Detail section - White background */}
      <section 
        ref={detailRef}
        className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-paper"
      >
        <div className="max-w-[1800px] mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-brown-900">
              스에나가 Heart&Color 메소드는<br />무엇인가요?
            </h2>
          </motion.div>
          
          {/* Three column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="space-y-4">
                <p className="text-brown-800 leading-relaxed">
                  '색은 마음의 언어'라는 철학을 바탕으로 색을 통해 마음을 읽고, 
                  감정을 안전하게 표현하도록 돕는 정서예술 교육법입니다.
                </p>
                
                <p className="text-brown-700 leading-relaxed">
                  우리가 선택하는 색, 선의 흐름, 채도의 변화 속에 담긴 
                  마음의 신호를 섬세하게 해석합니다.
                </p>
                
                <p className="text-brown-700 leading-relaxed">
                  색은 감정을 안정시키고 회복시키는 힘이 있어, 
                  자연스럽게 정서 건강과 자기이해가 자랍니다.
                </p>
              </div>
            </motion.div>
            
            {/* Center - Image */}
            <motion.div 
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="lg:col-span-4 relative"
            >
              <div 
                className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-2xl"
                style={{
                  transform: `perspective(1000px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
                  transition: 'transform 0.3s ease-out',
                  boxShadow: `
                    0 2px 8px rgba(61, 40, 23, 0.05),
                    0 8px 24px rgba(61, 40, 23, 0.08),
                    0 16px 48px rgba(61, 40, 23, 0.12),
                    ${mousePos.x * 2}px ${mousePos.y * 2}px 32px rgba(61, 40, 23, 0.15)
                  `
                }}
              >
                {/* Soft irregular border */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                  viewBox="0 0 300 400"
                  fill="none"
                  style={{ filter: 'blur(0.5px)' }}
                >
                  <path
                    d="M 25 35 Q 18 18, 35 15 L 265 10 Q 283 12, 285 30 L 290 365 Q 288 385, 270 388 L 40 395 Q 22 392, 20 375 Z"
                    stroke="#a08876"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                  />
                </svg>
                
                <div className="absolute inset-0 bg-gradient-to-br from-brown-100 via-beige to-pink-soft" />
                
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-brown-400">
                  <div className="text-center space-y-2 p-8">
                    <div className="text-7xl">🎨</div>
                    <p className="text-sm opacity-60">Heart & Color Method</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="space-y-4">
                <p className="text-brown-800 leading-relaxed">
                  크레용숲은 자신의 마음을 섬세하게 느끼고, 
                  자유롭게 표현하며,
                </p>
                
                <p className="text-brown-800 leading-relaxed">
                  생생하게 성장할 수 있는 안전하고 열린 
                  배움의 숲을 만들어갑니다.
                </p>
              </div>
              
              {/* Decorative element */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-24 h-px bg-gradient-to-r from-brown-300 to-transparent origin-left"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}