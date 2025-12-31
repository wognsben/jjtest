import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// Review image paths (6 images: review11~review16)
const reviewImagePaths = [
  getImagePath('/assets/program/review/review11.png'),
  getImagePath('/assets/program/review/review12.png'),
  getImagePath('/assets/program/review/review13.png'),
  getImagePath('/assets/program/review/review14.png'),
  getImagePath('/assets/program/review/review15.png'),
  getImagePath('/assets/program/review/review16.png'),
];

// Review Card Component
function ReviewCard({ imageSrc, index }: { imageSrc: string; index: number }) {
  return (
    <div
      className="flex-shrink-0 rounded-xl overflow-hidden"
      style={{
        width: '240px',
        height: '320px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
      }}
    >
      <img
        src={imageSrc}
        alt={`크레용숲 후기 ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

// MOMENTS Section 3: Premium Review Gallery (Awwwards Style)
export function MomentsSection3() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const CARDS_DESKTOP = 3;
  const CARDS_MOBILE = 1;

  // 반응형 계산
  const cardsPerPage = isMobile ? CARDS_MOBILE : CARDS_DESKTOP;
  const totalCards = reviewImagePaths.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // 모바일 감지 (md 기준: 768px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    if (!viewportRef.current || !trackRef.current) return;

    const viewportWidth = viewportRef.current.clientWidth;

    setCurrentPage((prev) => {
      const next = prev + 1 >= totalPages ? 0 : prev + 1;
      trackRef.current!.style.transform = `translateX(-${next * viewportWidth}px)`;
      return next;
    });
  };

  const handlePrev = () => {
    if (!viewportRef.current || !trackRef.current) return;

    const viewportWidth = viewportRef.current.clientWidth;

    setCurrentPage((prev) => {
      const next = prev - 1 < 0 ? totalPages - 1 : prev - 1;
      trackRef.current!.style.transform = `translateX(-${next * viewportWidth}px)`;
      return next;
    });
  };

  // 초기 transform 설정 (모바일/데스크탑 공용)
  useEffect(() => {
    if (!viewportRef.current || !trackRef.current) return;
    
    const viewportWidth = viewportRef.current.clientWidth;
    trackRef.current.style.transform = `translateX(-${currentPage * viewportWidth}px)`;
  }, [currentPage, isMobile]);

  return (
    <section className="relative bg-white pt-24 pb-24" style={{ paddingTop: '96px' }}>
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Header - Minimal typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p
            className="mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
              color: '#9ca3af',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Voices & Moments
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
              color: '#2d5016',
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            작은 변화가 큰 성장을 만든 장면들
          </h2>
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
              color: '#A66A5A',
              fontWeight: 300,
              lineHeight: 1.5,
            }}
          >
            1000명의 아이들을 만나며
          </p>
        </motion.div>

        {/* Review Cards Carousel (모바일/데스크탑 공용) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(180deg, #f9fafb 0%, #f3f4f6 50%, #f9fafb 100%)',
            height: '400px',
          }}
        >
          {/* Viewport (보이는 영역) */}
          <div
            ref={viewportRef}
            className="relative overflow-hidden mx-auto h-full"
            style={{
              width: isMobile ? '100%' : '752px', // 모바일: 100%, 데스크탑: 752px (240*3 + 16*2)
            }}
          >
            {/* Track */}
            <div
              ref={trackRef}
              className="flex items-center h-full"
              style={{
                gap: '1rem',
                willChange: 'transform',
                transition: 'transform 0.5s ease-out',
              }}
            >
              {/* Cards */}
              {reviewImagePaths.map((imagePath, index) => (
                <ReviewCard key={index} imageSrc={imagePath} index={index} />
              ))}
            </div>
          </div>

          {/* Left Fade */}
          <div 
            className="absolute inset-y-0 left-0 w-16 pointer-events-none z-20" 
            style={{
              background: 'linear-gradient(to right, rgba(249,250,251,1) 0%, rgba(249,250,251,0) 100%)',
            }}
          />
          
          {/* Right Fade */}
          <div 
            className="absolute inset-y-0 right-0 w-16 pointer-events-none z-20" 
            style={{
              background: 'linear-gradient(to left, rgba(249,250,251,1) 0%, rgba(249,250,251,0) 100%)',
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-50 ${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${!isMobile ? 'hover:scale-110' : ''}`}
            style={{ border: '1px solid rgba(255,182,193,0.3)' }}
          >
            <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="none" stroke="#A66A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-50 ${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${!isMobile ? 'hover:scale-110' : ''}`}
            style={{ border: '1px solid rgba(255,182,193,0.3)' }}
          >
            <svg width={isMobile ? "20" : "24"} height={isMobile ? "20" : "24"} viewBox="0 0 24 24" fill="none" stroke="#A66A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </motion.div>

        {/* Bottom Text - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.1vw, 0.85rem)',
              color: '#9ca3af',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: '0.02em',
            }}
          >
            예술이 마음을 움직일 때 일어나는 변화의 기록
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}
