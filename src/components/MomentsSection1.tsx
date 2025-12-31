import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImagePath } from '../utils/imageUtils';

gsap.registerPlugin(ScrollTrigger);

// MOMENTS Section 1: 성장의 순간들
export function MomentsSection1() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // 4개 원형 카드 데이터
  const testimonials = [
    {
      category: '감정 표현',
      quote1: '"말로 표현 못 했던 감정이',
      quote2: '그림으로 전달되더라고요."',
      quote3: '"아이 표정이 더 부드러워졌어요."',
    },
    {
      category: '집중력 향상',
      quote1: '"그림에 30분 이상 몰입하는 걸',
      quote2: '처음 봤어요."',
      quote3: '"집에서도 스스로 색을 고르고',
      quote4: '마음을 펼칩니다."',
    },
    {
      category: '정서 안정',
      quote1: '"아이와의 대화가 더 편안해졌어요."',
      quote2: '"화가 나도 스스로',
      quote3: '그림으로 풀어요."',
    },
    {
      category: '자기 표현',
      quote1: '"자기만의 세계가 생기기 시작했어요."',
      quote2: '"자기표현이 또렷해졌어요."',
    },
  ];

  // 리뷰 카드 이미지 경로 (6개)
  const reviewImages = Array.from({ length: 6 }, (_, i) => 
    getImagePath(`/assets/program/review/review${i + 1}.png`)
  );
  
  // 카드 설정값 (디자인 고정값)
  const CARDS_DESKTOP = 3;
  const CARDS_MOBILE = 1;
  
  // 반응형 계산
  const cardsPerPage = isMobile ? CARDS_MOBILE : CARDS_DESKTOP;
  const totalCards = reviewImages.length;
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

  // 화살표 클릭 핸들러 (모바일/데스크탑 공용)
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

  // Noise texture (SVG data URL)
  const noiseTexture = `data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

  return (
    <section className="relative bg-white pt-24 pb-24" style={{ paddingTop: '96px' }}>
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#2d5016',
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            아이와 부모가 함께 발견한 성장의 순간들입니다.
          </h2>
          <div className="space-y-1">
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.94rem, 1.2vw, 0.85rem)',
                color: '#8B7355',
                fontWeight: 300,
                lineHeight: 1.5,
                letterSpacing: 0,
              }}
            >
              예술이 마음을 움직일 때 일어나는 변화의 기록이자,
            </p>
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 1.2vw, 0.85rem)',
                color: '#8B7355',
                fontWeight: 300,
                lineHeight: 1.5,
                letterSpacing: 0,
              }}
            >
              크레용숲이 만든 고유의 증거입니다.
            </p>
          </div>
        </motion.div>

        {/* 4 Circle Cards - Asymmetric Borders */}
        <style>{`
          @media (min-width: 1024px) {
            .focus-quote-pc {
              font-size: clamp(0.8rem, 0.85vw, 0.85rem) !important;
            }
          }
        `}</style>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              {/* Asymmetric Circle Border (SVG) */}
              <svg
                viewBox="0 0 300 300"
                className="w-full h-auto"
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.06))',
                }}
              >
                {/* Imperfect circle path */}
                <path
                  d="M 150,10 
                     C 220,15 285,75 290,150 
                     C 288,220 225,288 150,290 
                     C 78,287 12,223 10,150 
                     C 13,80 75,12 150,10 Z"
                  fill="white"
                  stroke="#9DC88D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    paintOrder: 'stroke fill',
                  }}
                />

                {/* Text inside circle */}
                <foreignObject x="10" y="10" width="280" height="280">
                  <div 
                    style={{
                      paddingLeft: '5px',
                      paddingRight: '5px',
                      minWidth: '270px',
                      maxWidth: '270px',
                      width: '270px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      margin: '0 auto',
                    }}
                  >
                    {/* Category */}
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        color: '#2d5016',
                        fontWeight: 500,
                      }}
                    >
                      {item.category}
                    </p>

                    {/* Quotes */}
                    <div className="space-y-2" style={{ width: '100%' }}>
                      {item.category === '정서 안정' ? (
                        <>
                          <p
                            style={{
                              fontFamily: "'Noto Serif KR', serif",
                              fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                              color: '#555',
                              fontWeight: 300,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.quote1}
                          </p>
                          <p
                            style={{
                              fontFamily: "'Noto Serif KR', serif",
                              fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                              color: '#555',
                              fontWeight: 300,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.quote2} {item.quote3}
                          </p>
                        </>
                      ) : item.category === '자기 표현' ? (
                        <>
                          <p
                            style={{
                              fontFamily: "'Noto Serif KR', serif",
                              fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                              color: '#555',
                              fontWeight: 300,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.quote1}
                          </p>
                          {item.quote2 && (
                            <p
                              style={{
                                fontFamily: "'Noto Serif KR', serif",
                                fontSize: 'clamp(0.77rem, 1vw, 0.95rem)',
                                color: '#555',
                                fontWeight: 300,
                                lineHeight: 1.5,
                              }}
                            >
                              {item.quote2}
                            </p>
                          )}
                        </>
                      ) : item.category === '감정 표현' ? (
                        <>
                          <p
                            style={{
                              fontFamily: "'Noto Serif KR', serif",
                              fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                              color: '#555',
                              fontWeight: 300,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.quote1}{item.quote2 && ` ${item.quote2}`}
                          </p>
                          {item.quote3 && (
                            <p
                              style={{
                                fontFamily: "'Noto Serif KR', serif",
                                fontSize: 'clamp(0.77rem, 1vw, 0.95rem)',
                                color: '#555',
                                fontWeight: 300,
                                lineHeight: 1.5,
                              }}
                            >
                              {item.quote3}
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          <p
                            className={item.category === '집중력 향상' ? 'focus-quote-pc' : ''}
                            style={{
                              fontFamily: "'Noto Serif KR', serif",
                              fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                              color: '#555',
                              fontWeight: 300,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.quote1}{item.quote2 && ` ${item.quote2}`}
                          </p>
                          {item.quote3 && (
                            <p
                              style={{
                                fontFamily: "'Noto Serif KR', serif",
                                fontSize: 'clamp(0.77rem, 1vw, 0.95rem)',
                                color: '#555',
                                fontWeight: 300,
                                lineHeight: 1.5,
                              }}
                            >
                              {item.quote3}{item.quote4 && ` ${item.quote4}`}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Review Cards Section - Premium Infinite Scroll Archive */}
        <div
          className="relative bg-pink-50/60 rounded-3xl px-0 py-12 md:p-16 overflow-hidden"
        >
          {/* Noise/Grain Layer */}
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              backgroundImage: `url("${noiseTexture}")`,
              opacity: 0.015,
              mixBlendMode: 'multiply',
            }}
          />

          {/* Review Cards Carousel (모바일/데스크탑 공용) */}
          {/* Viewport (보이는 영역) */}
          <div
            ref={viewportRef}
            className="relative overflow-hidden mx-auto"
            style={{
              width: isMobile ? '100%' : '872px', // 모바일: 100%, 데스크탑: 872px (280*3 + 16*2)
            }}
          >
            {/* Track */}
            <div
              ref={trackRef}
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                willChange: 'transform',
              }}
            >
              {/* Cards */}
              {reviewImages.map((imageSrc, index) => (
                <ReviewCard key={index} imageSrc={imageSrc} index={index} />
              ))}
            </div>
          </div>

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

          {/* Archive Label */}
          <div
            className="absolute left-12 bottom-6 pointer-events-none z-40"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
              letterSpacing: '0.3em',
              color: 'rgba(139, 115, 85, 0.6)',
              fontWeight: 400,
            }}
          >
            ARCHIVE / VOICES
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}

// Desktop Review Card Component (Premium Frame/Media structure)
function ReviewCard({ imageSrc, index }: { imageSrc: string; index: number }) {
  // Padding variance for organic feel
  const paddings = ['p-3', 'p-4', 'p-5'];
  const paddingClass = paddings[index % 3];

  return (
    <div
      className="review-card flex-shrink-0"
      style={{
        width: '280px',
        opacity: 0.82,
        filter: 'saturate(0.95)',
        transition: 'opacity 0.4s ease, filter 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.filter = 'saturate(1) contrast(1.04)';
        // 이미지 scale
        const img = e.currentTarget.querySelector('img');
        if (img) {
          img.style.transform = 'scale(1.015)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0.82';
        e.currentTarget.style.filter = 'saturate(0.95)';
        // 이미지 scale 초기화
        const img = e.currentTarget.querySelector('img');
        if (img) {
          img.style.transform = 'scale(1)';
        }
      }}
    >
      {/* Frame */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          aspectRatio: '3 / 4',
          background: 'linear-gradient(180deg, #ffffff 0%, #fffafa 100%)',
          border: '1px solid rgba(255,182,193,0.18)',
          boxShadow: `
            0 0 0 0.5px rgba(255,182,193,0.06),
            0 8px 20px rgba(0,0,0,0.04)
          `,
        }}
      >
        {/* Media Container */}
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            backgroundColor: 'transparent',
          }}
        >
          {/* Image - Premium Display (natural sizing with padding variance) */}
          <div className={`w-full h-full flex items-center justify-center ${paddingClass}`}>
            <img
              src={imageSrc}
              alt={`Review ${index + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
              }}
              onError={(e) => {
                // Fallback: 이미지 로드 실패 시 placeholder 표시
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-full rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center';
                  placeholder.innerHTML = `<span style="font-family: 'Noto Serif KR', serif; font-size: 0.85rem; color: #ccc;">Image ${index + 1}</span>`;
                  target.parentElement.appendChild(placeholder);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Review Card Component (Static, scroll-triggered with premium styling)
function MobileReviewCard({ imageSrc, index }: { imageSrc: string; index: number }) {
  // Padding variance for organic feel
  const paddings = ['p-3', 'p-4', 'p-5'];
  const paddingClass = paddings[index % 3];

  return (
    <div
      className="mobile-review-card aspect-[3/4] rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fffafa 100%)',
        border: '1px solid rgba(255,182,193,0.18)',
        boxShadow: `
          0 0 0 0.5px rgba(255,182,193,0.06),
          0 8px 20px rgba(0,0,0,0.04)
        `,
      }}
    >
      <div className={`w-full h-full flex items-center justify-center ${paddingClass}`}>
        <img
          src={imageSrc}
          alt={`Review ${index + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
          onError={(e) => {
            // Fallback: 이미지 로드 실패 시 placeholder 표시
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              const placeholder = document.createElement('div');
              placeholder.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100';
              placeholder.innerHTML = `<span style="font-family: 'Noto Serif KR', serif; font-size: 0.85rem; color: #ccc;">Image ${index + 1}</span>`;
              target.parentElement.appendChild(placeholder);
            }
          }}
        />
      </div>
    </div>
  );
}
