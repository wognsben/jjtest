import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { getImagePath } from '../../utils/imageUtils';

export default function CrayonForestClass() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <>
      <hr className="section-divider" />
      <section 
        ref={sectionRef}
        className="relative py-32 md:py-48 lg:py-64 overflow-hidden"
        style={{
          backgroundColor: '#FFFFFF', // White background
        }}
      >
        {/* Parallax decorative circles (SVG) */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ y }}
        >
          <svg
            viewBox="0 0 1200 800"
            className="w-full h-full"
            style={{ opacity: 0.06 }}
          >
            {/* Organic circles - left side */}
            <circle cx="100" cy="200" r="180" fill="#A67C52" />
            <circle cx="150" cy="600" r="120" fill="#8FBC88" />
            
            {/* Organic circles - right side */}
            <circle cx="1100" cy="300" r="150" fill="#FFB6C1" />
            <circle cx="1050" cy="650" r="100" fill="#A67C52" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Header with Premium SVG Border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20 md:mb-28 flex justify-center"
          >
            <div className="relative inline-block">
              {/* Premium SVG Border Container */}
              <svg
                viewBox="0 0 1400 260"
                className="w-full"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.08))',
                  width: '650px',
                  maxWidth: '100%',
                }}
              >
                {/* Layer 1: Soft background */}
                <rect
                  x="3"
                  y="3"
                  width="1394"
                  height="254"
                  rx="24"
                  fill="#FFFCF9"
                  opacity="0.95"
                />

                {/* Layer 2: Main asymmetric stroke with grain */}
                <motion.path
                  d="M 24 3 
                     L 1376 3.5
                     Q 1394 4, 1396.5 22
                     L 1397 238
                     Q 1397.2 256, 1378 256.5
                     L 24 257
                     Q 6 256.8, 3.5 239
                     L 3 22
                     Q 2.8 4, 23 3
                     Z"
                  stroke="#A67C52"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{
                    pathLength: { duration: 1.5, delay: 0.5 },
                    opacity: { duration: 0.6, delay: 0.5 },
                  }}
                  style={{ filter: 'url(#grainBorder)' }}
                />

                {/* Layer 3: Micro offset shadow stroke */}
                <motion.path
                  d="M 24.5 4 
                     L 1376.5 4.5
                     Q 1393.5 5, 1396 22.5
                     L 1396.5 238.5
                     Q 1396.7 255.5, 1378.5 256
                     L 24.5 256.5
                     Q 6.5 256.3, 4 239.5
                     L 3.5 22.5
                     Q 3.3 4.5, 23.5 3.5
                     Z"
                  stroke="#8B6F47"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.6,
                  }}
                />

                {/* Decorative accent lines (top-left and bottom-right) */}
                <motion.line
                  x1="40"
                  y1="20"
                  x2="120"
                  y2="20"
                  stroke="#8FBC88"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.8,
                  }}
                />

                <motion.line
                  x1="1280"
                  y1="240"
                  x2="1360"
                  y2="240"
                  stroke="#FFB6A3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.9,
                  }}
                />

                {/* Grain filter definition */}
                <defs>
                  <filter id="grainBorder">
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
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center px-8 py-6"
                style={{ pointerEvents: 'none' }}
              >
                <h2 
                  className="text-brown-900 mb-3"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    letterSpacing: '-0.03em',
                  }}
                >
                  크래용 숲 클래스
                </h2>
                
                <p 
                  className="text-brown-600 max-w-xl mx-auto leading-relaxed"
                  style={{
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                  }}
                >
                  자기결(Self Texture)을 깨우는 예술적 감각훈련
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image container with decorative frame */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Decorative corner SVG elements */}
            <svg 
              className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 text-green-soft opacity-30"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M 10 10 Q 10 50, 50 50 Q 10 50, 10 90" />
              <path d="M 10 10 Q 50 10, 50 50 Q 50 10, 90 10" />
            </svg>

            <svg 
              className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 text-pink-soft opacity-30"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M 90 10 Q 90 50, 50 50 Q 90 50, 90 90" />
              <path d="M 90 10 Q 50 10, 50 50 Q 50 10, 10 10" />
            </svg>

            <svg 
              className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 text-accent-green opacity-30"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M 10 90 Q 10 50, 50 50 Q 10 50, 10 10" />
              <path d="M 10 90 Q 50 90, 50 50 Q 50 90, 90 90" />
            </svg>

            <svg 
              className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 text-brown-400 opacity-30"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M 90 90 Q 90 50, 50 50 Q 90 50, 90 10" />
              <path d="M 90 90 Q 50 90, 50 50 Q 50 90, 10 90" />
            </svg>

            {/* Main image */}
            <div 
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)',
              }}
            >
              <img 
                src={getImagePath("/assets/about/crayon forest/crayon forest.PNG")}
                alt="크레용숲 클래스"
                className="w-full h-auto"
                onError={(e) => {
                  console.error('Image load error:', e.currentTarget.src);
                  const src = e.currentTarget.src;
                  if (src.endsWith('.PNG')) {
                    e.currentTarget.src = getImagePath('/assets/about/crayon forest/crayon forest.jpg');
                  } else if (src.endsWith('.jpg')) {
                    e.currentTarget.src = getImagePath('/assets/about/crayon forest/crayon forest.png');
                  } else {
                    e.currentTarget.src = getImagePath('/assets/about/crayon forest/crayon forest.PNG');
                  }
                }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
