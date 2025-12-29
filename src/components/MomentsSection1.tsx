import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImagePath } from '../utils/imageUtils';

gsap.registerPlugin(ScrollTrigger);

// MOMENTS Section 1: 성장의 순간들
export function MomentsSection1() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndexRef = useRef(0);
  const isJumpingRef = useRef(false); // 마지막→처음 점프 플래그

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

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 화살표 클릭 핸들러
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? reviewImages.length - 1 : prev - 1;
      prevIndexRef.current = prev;
      return newIndex;
    });
  };

  const handleNext = () => {
    const maxIndex = reviewImages.length - 1; // 5 (리뷰6은 인덱스 5)
    const target = !isMobile ? trackRef.current : containerRef.current;
    
    if (!target) return;
    
    // 현재 translateX 위치 확인
    const currentX = gsap.getProperty(target, 'x') as number;
    const cardWidth = !isMobile ? 280 + 16 : 240 + 16;
    const maxTranslateX = -maxIndex * cardWidth; // 마지막 카드가 맨 왼쪽에 올 때의 위치
    
    // 화면 너비 기준으로 보이는 카드 개수 추정 (대략 3-4개)
    const viewportWidth = window.innerWidth;
    const visibleCards = Math.ceil(viewportWidth / cardWidth);
    
    // 마지막 카드가 보이는 조건: 
    // 1. currentIndex가 마지막 카드가 보이기 시작하는 위치 이상
    // 2. 또는 translateX가 마지막 카드가 보이는 범위에 있음
    const lastCardVisibleIndex = maxIndex - visibleCards + 1;
    const isLastCardVisible = currentIndex >= lastCardVisibleIndex || 
                              (currentX <= maxTranslateX + cardWidth * 2 && currentX >= maxTranslateX - cardWidth);
    
    console.log('handleNext - currentIndex:', currentIndex, 'currentX:', currentX, 'maxTranslateX:', maxTranslateX, 'visibleCards:', visibleCards, 'isLastCardVisible:', isLastCardVisible);
    
    // ✅ 핵심: 마지막 카드(리뷰6)가 보이는 상태 → 즉시 첫 번째로
    if (isLastCardVisible || currentIndex >= maxIndex) {
      console.log('마지막 카드 감지 - 즉시 첫 번째로 이동');
      // 진행 중인 모든 애니메이션 중단
      gsap.killTweensOf(target);
      // 애니메이션 없이 즉시 처음으로 이동
      gsap.set(target, { x: 0, clearProps: 'all' });
      prevIndexRef.current = currentIndex;
      isJumpingRef.current = true; // 점프 플래그 설정
      setCurrentIndex(0);
      return;
    }
    
    // 일반 이동
    console.log('일반 이동:', currentIndex, '->', currentIndex + 1);
    prevIndexRef.current = currentIndex;
    setCurrentIndex(currentIndex + 1);
  };

  // 슬라이드 애니메이션
  useEffect(() => {
    if (isMobile || !trackRef.current) return;

    const track = trackRef.current;
    const cardWidth = 280 + 16; // 카드 너비 + gap
    const maxIndex = reviewImages.length - 1;
    
    console.log('useEffect 실행 - currentIndex:', currentIndex, 'isJumping:', isJumpingRef.current);
    
    // 핵심: 마지막에서 처음으로 돌아간 경우는 이미 handleNext에서 처리됨
    // 점프 플래그가 설정되어 있으면 애니메이션 건너뛰기
    if (isJumpingRef.current && currentIndex === 0) {
      console.log('점프 플래그 감지 - 애니메이션 건너뛰기');
      isJumpingRef.current = false; // 플래그 리셋
      prevIndexRef.current = 0;
      return;
    }
    
    // 일반적인 경우: 애니메이션과 함께 이동
    console.log('일반 애니메이션 실행 - x:', -currentIndex * cardWidth);
    prevIndexRef.current = currentIndex;
    
    gsap.to(track, {
      x: -currentIndex * cardWidth,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [currentIndex, isMobile, reviewImages.length]);

  // 모바일 슬라이드 애니메이션
  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const track = containerRef.current;
    const cardWidth = 240 + 16; // 카드 너비 + gap
    const maxIndex = reviewImages.length - 1;
    
    // 핵심: 마지막에서 처음으로 돌아간 경우는 이미 handleNext에서 처리됨
    // 점프 플래그가 설정되어 있으면 애니메이션 건너뛰기
    if (isJumpingRef.current && currentIndex === 0) {
      isJumpingRef.current = false; // 플래그 리셋
      prevIndexRef.current = 0;
      return;
    }
    
    // 일반적인 경우: 애니메이션과 함께 이동
    prevIndexRef.current = currentIndex;
    gsap.to(track, {
      x: -currentIndex * cardWidth,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [currentIndex, isMobile, reviewImages.length]);

  // Noise texture (SVG data URL)
  const noiseTexture = `data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

  return (
    <section className="relative bg-white pt-[90px] pb-24">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
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
                <foreignObject x="30" y="30" width="240" height="240">
                  <div className="flex flex-col items-center justify-center h-full px-8 text-center md:max-w-[280px] md:mx-auto">
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
                    <div className="space-y-2" style={{ width: isMobile ? '300px' : 'auto', maxWidth: isMobile ? 'none' : '280px' }}>
                      {item.category === '정서 안정' ? (
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
                          <br />
                          {item.quote2}
                          {item.quote3}
                        </p>
                      ) : (
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
                            {item.quote2 && (
                              <>
                                <br />
                                {item.quote2}
                              </>
                            )}
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
                              {item.quote4 && (
                                <>
                                  <br />
                                  {item.quote4}
                                </>
                              )}
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
          ref={containerRef}
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

          {/* Desktop: Infinite Scroll */}
          {!isMobile && (
            <>
              {/* Track Wrapper */}
              <div className="overflow-hidden">
                <div
                  ref={trackRef}
                  className="flex gap-4"
                  style={{
                    willChange: 'transform',
                    width: 'fit-content',
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
                className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ border: '1px solid rgba(255,182,193,0.3)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A66A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ border: '1px solid rgba(255,182,193,0.3)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A66A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            </>
          )}

          {/* Mobile: Review Gallery with Arrow Controls */}
          {isMobile && (
            <div className="relative overflow-hidden rounded-2xl" style={{ height: '400px' }}>
              {/* Scrolling Track */}
              <div
                ref={containerRef}
                className="flex items-center absolute top-0 left-0 h-full"
                style={{ gap: '1rem' }}
              >
                {/* Cards */}
                {reviewImages.map((imageSrc, idx) => (
                  <div
                    key={idx}
                    className="mobile-review-card flex-shrink-0"
                    style={{ width: '240px', height: '320px' }}
                  >
                    <div
                      className="rounded-2xl overflow-hidden w-full h-full"
                      style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #fffafa 100%)',
                        border: '1px solid rgba(255,182,193,0.18)',
                        boxShadow: '0 0 0 0.5px rgba(255,182,193,0.06), 0 8px 20px rgba(0,0,0,0.04)',
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img
                          src={imageSrc}
                          alt={`Review ${idx + 1}`}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Left Fade */}
              <div 
                className="absolute inset-y-0 left-0 w-16 pointer-events-none z-20" 
                style={{
                  background: 'linear-gradient(to right, rgba(255,248,248,1) 0%, rgba(255,248,248,0) 100%)',
                }}
              />
              
              {/* Right Fade */}
              <div 
                className="absolute inset-y-0 right-0 w-16 pointer-events-none z-20" 
                style={{
                  background: 'linear-gradient(to left, rgba(255,248,248,1) 0%, rgba(255,248,248,0) 100%)',
                }}
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid rgba(255,182,193,0.3)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A66A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid rgba(255,182,193,0.3)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A66A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}
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
