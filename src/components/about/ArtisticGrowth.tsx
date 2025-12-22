import React, { useEffect, useRef, useState } from 'react';

const stages = [
  {
    id: 1,
    name: '감각의 숲',
    ageRange: '3–7세',
    bgColor: '#FFEAE5',
    strokeColor: '#FFB6A3',
  },
  {
    id: 2,
    name: '상징의 숲',
    ageRange: '8–12세',
    bgColor: '#FFF1D6',
    strokeColor: '#E8C8A8',
  },
  {
    id: 3,
    name: '사유의 숲',
    ageRange: '13–19세',
    bgColor: '#FFF6EC',
    strokeColor: '#A67C52',
  },
  {
    id: 4,
    name: '회복의 숲',
    ageRange: '성인·엄마',
    bgColor: '#EEF7F0',
    strokeColor: '#8FBC88',
  },
];

// 유기적 blob SVG 경로들
const blobPaths = [
  "M70,85 C40,115 35,195 105,215 C175,235 245,185 235,115 C225,55 155,25 95,45 C75,55 65,65 70,85 Z",
  "M60,90 C30,130 50,210 140,230 C230,250 280,180 270,110 C260,50 190,30 120,50 C90,60 75,70 60,90 Z",
  "M54,78 C20,120 40,200 120,220 C200,240 260,190 250,120 C240,60 170,20 110,40 C80,50 70,60 54,78 Z",
  "M50,95 C15,135 25,215 105,235 C185,255 255,195 245,125 C235,65 165,35 105,55 C75,65 60,75 50,95 Z",
];

export default function ArtisticGrowth() {
  const containerRef = useRef<HTMLElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 초기 상태 설정
    container.setAttribute('data-state', 'idle');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        
        // SCENE 1: 분화 애니메이션
        setTimeout(() => {
          container.setAttribute('data-state', 'split');
        }, 300);
        
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <hr className="section-divider" />
      <section ref={containerRef} className="growth-origin layout-split">
        <div className="origin-wrap">
          
          {/* LEFT : AGE FLOW */}
          <aside className="origin-age-flow">
            <ul>
              {stages.map((stage, index) => (
                <li 
                  key={stage.id}
                  className={`age-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="blob-media">
                    <svg 
                      viewBox="0 0 300 260" 
                      className="blob-svg"
                      style={{
                        fill: stage.bgColor,
                        stroke: stage.strokeColor,
                      }}
                    >
                      <defs>
                        <filter id={`blobGrain${stage.id}`} x="0%" y="0%" width="100%" height="100%">
                          <feTurbulence
                            type="fractalNoise"
                            baseFrequency="3.5"
                            numOctaves="4"
                            seed={stage.id}
                            stitchTiles="stitch"
                          />
                          <feDisplacementMap in="SourceGraphic" scale="1.5" />
                        </filter>
                      </defs>
                      <path
                        d={blobPaths[index]}
                        filter={`url(#blobGrain${stage.id})`}
                        strokeWidth="1.5"
                        strokeOpacity="0.25"
                      />
                    </svg>
                    <div className="blob-text-overlay">
                      <span className="age">{stage.ageRange}</span>
                      <span className="label">{stage.name}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT : CORE AREA */}
          <div className="origin-core-area">
            
            {/* Core ↔ Blob 연결선 */}
            <svg className="core-links" viewBox="0 0 600 400" preserveAspectRatio="none">
              <path d="M120 80 C260 60, 340 120, 420 160" />
              <path d="M120 160 C260 160, 340 180, 420 200" />
              <path d="M120 240 C260 260, 340 240, 420 260" />
              <path d="M120 320 C260 340, 340 300, 420 300" />
            </svg>
            
            {/* TOP IMAGE / TEXTURE - Low-Frequency Organic Field */}
            <div className="core-visual">
              <svg viewBox="0 0 400 400" className="core-field">
                <defs>
                  <filter id="coreField">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.015"
                      numOctaves="3"
                      seed="9"
                    >
                      <animate
                        attributeName="baseFrequency"
                        dur="24s"
                        values="0.014;0.018;0.014"
                        repeatCount="indefinite"
                      />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="26" />
                  </filter>

                  <radialGradient id="coreGradient">
                    <stop offset="0%" stopColor="#EADFCF" stopOpacity="0.28" />
                    <stop offset="60%" stopColor="#E8C8A8" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#8FBC88" stopOpacity="0.1" />
                  </radialGradient>
                </defs>

                <rect
                  width="400"
                  height="400"
                  fill="url(#coreGradient)"
                  filter="url(#coreField)"
                />
              </svg>
            </div>

            {/* CORE */}
            <div 
              id="originCore" 
              ref={coreRef}
              className={`origin-core slab-core ${isHovering ? 'hover-reaction' : ''}`}
            >
              <span className="core-text">
                INTEGRITY
                <br />
                CORE
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 스타일 */}
      <style>{`
        .growth-origin {
          padding: 160px 24px;
          background: #fff;
        }

        .origin-wrap {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(260px, 32%) 1fr;
          align-items: center;
          gap: clamp(32px, 5vw, 72px);
        }

        /* LEFT : AGE FLOW */
        .origin-age-flow ul {
          display: flex;
          flex-direction: column;
          gap: 24px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .age-item {
          opacity: 0.45;
          transition: opacity 0.4s ease;
          cursor: pointer;
          position: relative;
        }

        .age-item:hover {
          opacity: 0.7;
        }

        .age-item.active {
          opacity: 1;
        }

        .blob-media {
          width: 200px;
          height: 120px;
          position: relative;
          overflow: visible;
        }

        .blob-media .blob-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.06));
          transition: transform 0.4s cubic-bezier(.22, 1, .36, 1), filter 0.4s ease;
        }

        .age-item:hover .blob-media .blob-svg {
          transform: translateY(-4px) scale(1.02);
          filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.12));
        }

        .age-item.active .blob-media .blob-svg {
          transform: scale(1.05);
        }

        .blob-text-overlay {
          position: absolute;
          left: calc(100% - 12px);
          top: 50%;
          transform: translateY(-50%);
          padding-left: 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 2;
          pointer-events: none;
          font-family: "Noto Serif KR", serif;
          color: #1a1a1a;
          white-space: nowrap;
        }

        .blob-text-overlay .age {
          font-size: 12px;
          letter-spacing: 0.08em;
          opacity: 0.7;
          color: #9CA3AF;
          font-family: "Inter", sans-serif;
          font-weight: 500;
        }

        .age-item.active .blob-text-overlay .age {
          color: #6B7280;
          opacity: 0.9;
        }

        .blob-text-overlay .label {
          font-family: "Noto Serif KR", serif;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #1a1a1a;
        }

        /* RIGHT : CORE AREA */
        .origin-core-area {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Core ↔ Blob 연결선 */
        .core-links {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .growth-origin[data-state="split"] .core-links {
          opacity: 1;
        }

        .core-links path {
          fill: none;
          stroke: rgba(166, 124, 82, 0.35);
          stroke-width: 1.2;
          stroke-linecap: round;
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: draw-line 1.4s ease-out forwards;
        }

        .core-links path:nth-child(1) {
          animation-delay: 0s;
        }

        .core-links path:nth-child(2) {
          animation-delay: 0.1s;
        }

        .core-links path:nth-child(3) {
          animation-delay: 0.2s;
        }

        .core-links path:nth-child(4) {
          animation-delay: 0.3s;
        }

        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Blob ↔ Core 시선 반응 (중력 효과) */
        .slab-core.hover-reaction {
          transform: scale(1.03) translateY(-4px);
          box-shadow:
            0 60px 120px rgba(0, 0, 0, 0.18),
            0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .core-visual {
          position: absolute;
          inset: -25% -15%;
          z-index: 0;
          pointer-events: none;
        }

        .core-field {
          width: 100%;
          height: 100%;
          opacity: 0.55;
          mix-blend-mode: multiply;
          filter: blur(2px);
        }

        /* CORE (상징적 존재) - Soft-edged Vertical Slab */
        .slab-core {
          position: relative;
          width: clamp(200px, 18vw, 240px);
          height: clamp(320px, 42vh, 380px);
          background: linear-gradient(
            180deg,
            #FFFDF8 0%,
            #FFF9EF 70%,
            #FFF6E6 100%
          );
          border: 1px solid rgba(166, 124, 82, 0.28);
          /* 완벽히 같지 않은 radius - 비대칭 */
          border-radius: 52px 46px 58px 50px;
          box-shadow:
            0 40px 90px rgba(0, 0, 0, 0.12),
            0 12px 30px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition:
            transform 0.8s cubic-bezier(.22, .61, .36, 1),
            box-shadow 0.8s cubic-bezier(.22, .61, .36, 1);
        }

        /* 표면에 미세한 결 추가 */
        .slab-core::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(
              rgba(0, 0, 0, 0.04) 1px,
              transparent 1px
            );
          background-size: 4px 4px;
          opacity: 0.25;
          pointer-events: none;
          border-radius: inherit;
        }

        /* Hover 시 '깨어나는' 반응 */
        .slab-core:hover {
          transform: scale(1.03);
        }

        /* Core ↔ Blob 연결선 (보이지 않게 이어진 축) */
        .slab-core::before {
          content: "";
          position: absolute;
          left: -60px;
          top: 10%;
          bottom: 10%;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(166, 124, 82, 0.35),
            transparent
          );
          opacity: 0.6;
        }

        .slab-core .core-text {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(20px, 2vw, 26px);
          line-height: 1.15;
          letter-spacing: 0.08em;
          text-align: center;
          color: #6B5A3E;
          opacity: 0.85;
          position: relative;
          z-index: 3;
          transform: translateY(-6px);
        }

        /* SCENE 0: Idle - CORE breathing (slab 버전) */
        .growth-origin[data-state="idle"] .slab-core {
          animation: slabBreathing 4s ease-in-out infinite;
        }

        @keyframes slabBreathing {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.01) translateY(-2px);
          }
        }

        /* SCENE 1: Split - 분화 애니메이션 */
        .growth-origin[data-state="split"] .slab-core {
          animation: none;
          transform: scale(1) translateY(0);
        }

        /* 모바일 */
        @media (max-width: 1023px) {
          .growth-origin {
            padding: 80px 24px;
          }

          .origin-wrap {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .origin-age-flow {
            order: 2;
          }

          .origin-core-area {
            order: 1;
          }

          .core-visual {
            inset: -20% -10%;
          }

          .slab-core {
            order: -1;
            margin-bottom: 48px;
            height: 260px;
            width: clamp(180px, 40vw, 220px);
          }

          .origin-age-flow ul {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 16px;
          }

          .age-item {
            flex: 1;
            min-width: 120px;
          }

          .blob-media {
            height: 80px;
          }
        }
      `}</style>
    </>
  );
}

