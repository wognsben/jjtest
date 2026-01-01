import React, { useEffect, useRef } from 'react';
import { getImagePath } from '../utils/imageUtils';

// Program Page Method Section
export default function ProgramMethodSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animation observer
    const animationObserver = new IntersectionObserver(
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
      animationObserver.observe(el);
    });


    // Program pill click handlers - reveal section in stage
    // Wait for DOM to be ready
    const initPillNavigation = () => {
      const pills = document.querySelectorAll('.program-pill[data-pill]');
      const stage = document.getElementById('program-reveal-stage');
      const source = document.getElementById('program-source-container');

      if (!pills.length || !stage || !source) {
        // Retry if not ready
        setTimeout(initPillNavigation, 100);
        return;
      }

      // Build sections map from source container - target data-program-detail
      const sections: { [key: string]: HTMLElement } = {};
      source.querySelectorAll('[data-program-detail]').forEach((sec) => {
        const sectionId = (sec as HTMLElement).dataset.programDetail;
        if (sectionId) {
          sections[sectionId] = sec as HTMLElement;
        }
      });

      let currentKey: string | null = null;
      let animating = false;

      const setActive = (key: string) => {
        pills.forEach((p) => {
          const pill = p as HTMLElement;
          pill.classList.toggle('is-active', pill.dataset.pill === key);
        });
      };

      const reveal = (key: string) => {
        if (animating || key === currentKey) return;
        const target = sections[key];
        if (!target) return;

        animating = true;
        setActive(key);

        // Fade out old content
        if (stage.firstChild) {
          const oldChild = stage.firstChild as HTMLElement;
          oldChild.style.transition = 'opacity 200ms cubic-bezier(0.25, 0.8, 0.25, 1), transform 200ms cubic-bezier(0.25, 0.8, 0.25, 1)';
          oldChild.style.opacity = '0';
          oldChild.style.transform = 'translateY(-24px)';
        }

        setTimeout(() => {
          // Clear stage completely
          stage.innerHTML = '';

          // Move actual node from source to stage (not clone)
          stage.appendChild(target);

          // Reset initial state
          target.style.opacity = '0';
          target.style.transform = 'translateY(24px)';
          target.style.transition = '';

          requestAnimationFrame(() => {
            target.style.transition = 'opacity 0.85s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.85s cubic-bezier(0.25, 0.8, 0.25, 1)';
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          });

          currentKey = key;
          setTimeout(() => {
            animating = false;
          }, 400);
        }, 200);
      };

      // Attach click handlers
      pills.forEach((btn) => {
        const handler = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          const pill = btn as HTMLElement;
          const sectionId = pill.dataset.pill;
          if (sectionId) {
            reveal(sectionId);
          }
        };
        btn.addEventListener('click', handler);
      });

      // Auto-reveal first program on initial load (prevent empty stage)
      const firstPill = pills[0] as HTMLElement;
      if (firstPill) {
        const firstSectionId = firstPill.dataset.pill;
        if (firstSectionId) {
          // Set first pill as active
          setActive(firstSectionId);
          // Reveal first section without animation delay
          const firstSection = sections[firstSectionId];
          if (firstSection && stage) {
            stage.innerHTML = '';
            stage.appendChild(firstSection);
            firstSection.style.opacity = '1';
            firstSection.style.transform = 'translateY(0)';
            currentKey = firstSectionId;
          }
        }
      }
    };

    // Initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initPillNavigation, 100);

    return () => {
      clearTimeout(timeoutId);
      animatedElements?.forEach(el => {
        animationObserver.unobserve(el);
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
          position: relative;
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
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
          transition:
            background 0.4s ease,
            transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1),
            box-shadow 0.45s cubic-bezier(0.25, 0.8, 0.25, 1),
            border 0.35s ease;
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

        .program-pill.is-active {
          background: #FADFDB;
          border-width: 2.5px;
          transform: scale(1.03);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14);
        }

        .program-pill.is-active::after {
          content: "";
          position: absolute;
          inset: 4px;
          border-radius: 9999px;
          border: 1px solid rgba(47, 107, 79, 0.35);
          pointer-events: none;
        }

        /* PC 레이아웃 강제 적용 */
        @media (min-width: 768px) {
          .program-nav-container {
            order: 1 !important;
          }
          .program-healing-color-container {
            order: 2 !important;
          }
        }
      `}</style>

      <section 
        ref={sectionRef}
        className="relative bg-white pt-[90px] pb-24 overflow-hidden"
      >
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col gap-20 lg:gap-28 lg:items-center">
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
              className="max-w-[22rem] lg:max-w-[32rem] ml-auto lg:mx-auto text-center"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
                lineHeight: 1.5,
                letterSpacing: 0,
                color: '#444',
                fontWeight: 300,
              }}
            >
              <p>
                <span style={{ color: '#A66A5A', fontWeight: 500 }}>
                  스에나가메소드 색채심리
                </span>
                는 일본의 스에나가타미오 박사에 의해 체계화되고 검증된 멘탈케어 시스템으로,<br /><br />
                색채를 매개로 무의식의 심리적 에너지를 밖으로{' '}
                <span style={{ color: '#2F6B4F', fontWeight: 500 }}>
                  자유롭게 표출하며 마음의 건강을 유지
                </span>
                하도록 돕는 방법입니다.
              </p>
              <p style={{ marginTop: '1.5rem', color: '#2F6B4F', fontWeight: 500 }}>
                스에나가 메소드는 크레용숲이 지향하는 예술 기반 정서교육의 핵심 토대입니다.
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
              className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-6"
              data-animate="fade-up"
              data-delay="360"
            >
              {/* LEFT NAVIGATION - PC에서 왼쪽 */}
              <div className="program-nav-container flex flex-col gap-4 order-2 md:order-1">
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
                    type="button"
                    data-pill="childart"
                    className="program-pill"
                  >
                    CHILD ART
                  </button>
                  <button
                    type="button"
                    data-pill="youthart"
                    className="program-pill"
                  >
                    YOUTH ART
                  </button>
                  <button
                    type="button"
                    data-pill="adultart"
                    className="program-pill"
                  >
                    ADULT ART
                  </button>
                  <button
                    type="button"
                    data-pill="formom"
                    className="program-pill"
                  >
                    FOR MOM
                  </button>
                  <button
                    type="button"
                    data-pill="moments"
                    className="program-pill"
                  >
                    MOMENTS
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE AND BUTTON - PC에서 오른쪽 */}
              <div className="program-healing-color-container flex flex-wrap items-center gap-4 justify-center order-1 md:order-2">
                <img
                  src={getImagePath("/assets/program/method/co.png")}
                  alt="색채심리연구소"
                  className="h-auto"
                  style={{ maxHeight: '45px' }}
                />
                <a
                  href="https://www.healingcolor.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full method-button whitespace-nowrap"
                  style={{
                    background: '#FADFDB',
                    border: '2px solid #A66A5A',
                    color: '#2F6B4F',
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  색채심리연구소 바로가기 →
                </a>
              </div>
            </div>

            {/* REVEAL STAGE - Program sections appear here */}
            <div 
              id="program-reveal-stage"
              className="w-full mt-16"
              style={{ minHeight: '200px' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}