import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { getImagePath } from '../../utils/imageUtils';

export default function SelfTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Subtle mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Ultra-subtle noise shader effect
    let animationFrame: number;
    let time = 0;
    
    const drawNoise = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      
      // Very subtle noise
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 3;
        data[i] = 168 + noise;     // R (green-ish)
        data[i + 1] = 198 + noise; // G
        data[i + 2] = 143 + noise; // B
        data[i + 3] = 2;           // A (거의 투명)
      }
      
      ctx.putImageData(imageData, 0, 0);
      time += 0.01;
      animationFrame = requestAnimationFrame(drawNoise);
    };
    
    drawNoise();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Mouse move handler for ultra-subtle parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Only 1-2px movement
    const deltaX = (e.clientX - centerX) / rect.width * 2;
    const deltaY = (e.clientY - centerY) / rect.height * 2;
    
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 2 Column Layout: Text LEFT, Illustration RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* LEFT: Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-accent-green"
                style={{ 
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                자기결(自己結)
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-brown-600 text-sm md:text-base tracking-wider"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                Self Texture · The Core of One's Being
              </motion.p>
            </div>
            
            {/* Body Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <p 
                className="text-brown-800 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                크레용숲은 아이들이 단지 실력이 좋은 사람이 아니라,
              </p>
              
              <p 
                className="text-brown-800 text-xl md:text-2xl leading-relaxed"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                <span 
                  className="px-2 py-1 rounded"
                  style={{ 
                    backgroundColor: '#fadfde',
                    color: '#5a8c4a',
                    textDecoration: 'underline',
                    textDecorationColor: '#8fbc88',
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '3px',
                    boxDecorationBreak: 'clone',
                    WebkitBoxDecorationBreak: 'clone'
                  }}
                >
                  자기가 원하는 삶을 선택할 수 있는 아이입니다.
                </span>
              </p>
              
              <div className="pt-4">
                <p 
                  className="text-brown-700 text-base md:text-lg leading-relaxed mb-4"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  아이들은 이곳에서…
                </p>
              </div>
              
              <div className="space-y-4">
                <p 
                  className="text-brown-800 text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  친구에게 다정할 수 있는{' '}
                  <span className="text-accent-green font-semibold">감정 이해력</span>,
                </p>
                
                <p 
                  className="text-brown-800 text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  자연과 타인을 배려하는{' '}
                  <span className="text-accent-green font-semibold">감각 인권감</span>,
                </p>
                
                <p 
                  className="text-brown-800 text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  스스로 선택하고 행동할 수 있는
                </p>
                
                <p 
                  className="text-brown-800 text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  <span className="text-accent-green font-semibold">자기결(自己結)</span>을 기릅니다.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* RIGHT: Illustration Layer System */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden">
              
              {/* Layer 1: Canvas depth/noise (프리미엄 효과) */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10 rounded-3xl"
                style={{ mixBlendMode: 'multiply' }}
              />
              
              {/* Layer 2: Main Illustration (주역 - Raster Image) */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ x, y }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden bg-[#FAF7F3]">
                  <img
                    src={getImagePath("/assets/about/selftexture/selftexture.jpg")}
                    alt="자기결"
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                      filter: 'contrast(0.98) saturate(1.05)',
                    }}
                  onError={(e) => {
                    console.error('Image load error:', e.currentTarget.src);
                    const src = e.currentTarget.src;
                    if (src.endsWith('.jpg')) {
                      e.currentTarget.src = getImagePath('/assets/about/selftexture/selftexture.png');
                    } else if (src.endsWith('.png')) {
                      e.currentTarget.src = getImagePath('/assets/about/selftexture/selftexture.PNG');
                    } else {
                      e.currentTarget.src = getImagePath('/assets/about/selftexture/selftexture.jpg');
                    }
                  }}
                  />
                </div>
                
                {/* Placeholder: Watercolor-style background until image is provided */}
                <div 
                  className="absolute inset-0 -z-10 rounded-3xl"
                  style={{
                    background: `
                      radial-gradient(ellipse at 40% 30%, rgba(255, 182, 163, 0.15) 0%, transparent 50%),
                      radial-gradient(ellipse at 60% 70%, rgba(168, 198, 143, 0.12) 0%, transparent 50%),
                      radial-gradient(ellipse at 50% 50%, rgba(250, 235, 225, 0.08) 0%, transparent 70%)
                    `,
                  }}
                />
              </motion.div>
              
              {/* Layer 3: SVG UI Layer (조연 - Text/Labels only) */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Subtle hand-drawn accent circles (minimal, flat) */}
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                  cx="80"
                  cy="120"
                  r="18"
                  fill="none"
                  stroke="rgba(168, 198, 143, 0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="2 3"
                />
                
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  cx="320"
                  cy="180"
                  r="22"
                  fill="none"
                  stroke="rgba(255, 182, 163, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="2 3"
                />
                
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  cx="110"
                  cy="360"
                  r="16"
                  fill="none"
                  stroke="rgba(168, 198, 143, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="2 3"
                />
                
                {/* Optional: Small text labels (조연 역할) */}
                <motion.text
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  x="200"
                  y="480"
                  textAnchor="middle"
                  fontSize="12"
                  fill="rgba(90, 140, 74, 0.6)"
                  fontFamily="'Noto Serif KR', serif"
                >
                  자기결을 키우는 예술 교육
                </motion.text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
