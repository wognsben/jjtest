import React, { useEffect, useRef } from 'react';
import { getImagePath } from '../utils/imageUtils';

// Program Page Method Section
export default function ProgramMethodSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
          }
        });
      },
      { threshold: 0.25 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('[data-animate]');
    animatedElements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      animatedElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* CSS for animations */}
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1),
            transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        [data-animate].is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .method-button {
          transition: all 0.5s ease;
        }

        .method-button:hover {
          background: #F6D2CC !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .program-pill {
          padding: 0.65rem 1.5rem;
          border-radius: 9999px;
          background: #FADFDB;
          border: 1.5px solid #A66A5A;
          font-family: 'Inter', -apple-system, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #2F6B4F;
          letter-spacing: 0.01em;
          cursor: pointer;
          width: 140px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition:
            background 0.4s ease,
            transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
            box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .program-pill:hover {
          background: #F6D2CC;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
        }

        .program-pill:active {
          transform: translateY(0);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-white py-28 md:py-36 lg:py-44 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col gap-20 lg:gap-28">
            {/* METHOD 1 IMAGE - TOP */}
            <div data-animate="fade-up">
              <img
                src={getImagePath("/assets/program/method/method 1.png")}
                alt="스에나가 메소드 색채심리 상단"
                className="w-full h-auto rounded-[24px]"
              />
            </div>

            {/* TEXT SECTION - MIDDLE */}
            <div
              data-animate="fade-up"
              data-delay="120"
              className="max-w-[22rem] ml-auto"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '1.05rem',
                lineHeight: 1.95,
                color: '#444',
                fontWeight: 300,
              }}
            >
              <p>
                <span style={{ color: '#A66A5A', fontWeight: 500 }}>
                  스에나가메소드 색채심리
                </span>
                는 일본의 스에나가타미오 박사에 의해 체계화되고 검증된 멘탈케어 시스템으로,
                색채를 매개로 무의식의 심리적 에너지를 밖으로
                <span style={{ color: '#2F6B4F', fontWeight: 500 }}>
                  자유롭게 표출하며 마음의 건강을 유지
                </span>
                하도록 돕는 방법입니다.
              </p>
              <p style={{ marginTop: '1.5rem', color: '#2F6B4F', fontWeight: 500 }}>
                스에나가 메소드는<br />
                크레용숲이 지향하는 예술 기반 정서교육의 핵심 토대입니다.
              </p>
            </div>

            {/* METHOD 2 IMAGE - BOTTOM */}
            <div data-animate="fade-up" data-delay="280">
              <img
                src={getImagePath("/assets/program/method/method 2.png")}
                alt="스에나가 메소드 색채심리 하단"
                className="w-full h-auto rounded-[36px]"
              />
            </div>

            {/* NAVIGATION AND BUTTON - BELOW METHOD 2 */}
            <div 
              className="flex items-center justify-between w-full"
              data-animate="fade-up"
              data-delay="360"
            >
              {/* LEFT NAVIGATION */}
              <div className="flex flex-col gap-4">
                {/* PROGRAM LABEL */}
                <p
                  style={{
                    fontFamily: "'Inter', -apple-system, sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: '#2F6B4F',
                    textTransform: 'uppercase',
                  }}
                >
                  Program
                </p>

                {/* PROGRAM BUTTONS */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      // 스크롤만 수행 (섹션 열기는 사용자가 "자세히 보기" 클릭)
                      const element = document.querySelector('[data-section="childart"]');
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="program-pill"
                  >
                    CHILD ART
                  </button>
                  <button
                    onClick={() => {
                      const element = document.querySelector('[data-section="youthart"]');
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="program-pill"
                  >
                    YOUTH ART
                  </button>
                  <button
                    onClick={() => {
                      const element = document.querySelector('[data-section="adultart"]');
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="program-pill"
                  >
                    ADULT ART
                  </button>
                  <button
                    onClick={() => {
                      const element = document.querySelector('[data-section="moments"]');
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="program-pill"
                  >
                    MOMENTS
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE AND BUTTON */}
              <div className="flex items-center gap-6">
                <img
                  src={getImagePath("/assets/program/method/co.png")}
                  alt="색채심리연구소"
                  className="h-auto"
                  style={{ maxHeight: '60px' }}
                />
                <a
                  href="https://www.healingcolor.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-9 py-3 rounded-full method-button"
                  style={{
                    background: '#FADFDB',
                    border: '2px solid #A66A5A',
                    color: '#2F6B4F',
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  색채심리연구소 바로가기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}