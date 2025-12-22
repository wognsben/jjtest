import React, { useEffect, useRef } from 'react';

const stages = [
  {
    id: 1,
    name: '사유의 숲',
    ageRange: '13–19세',
    theme: '사유·정체성·세계관',
    description: (
      <>
        예술을 매개로 <strong>'나만의 관점'</strong> 구축, 자기결(Self Texture)의 본격 형성
      </>
    ),
    color: '#A67C52',
    bgColor: '#FFF6EC',
    strokeColor: '#A67C52',
    position: 'left',
  },
  {
    id: 2,
    name: '상징의 숲',
    ageRange: '8–12세',
    theme: '상징·서사·패턴',
    description: (
      <>
        감정–기억–경험이 <strong>상징</strong>으로 조직되는 단계
      </>
    ),
    color: '#E8C8A8',
    bgColor: '#FFF1D6',
    strokeColor: '#E8C8A8',
    position: 'right',
  },
  {
    id: 3,
    name: '감각의 숲',
    ageRange: '3–7세',
    theme: '감각·감정·첫 표현',
    description: (
      <>
        표현은 놀이, 놀이는 곧 <strong>자기이해</strong>
      </>
    ),
    color: '#FFB6A3',
    bgColor: '#FFEAE5',
    strokeColor: '#FFB6A3',
    position: 'left',
  },
  {
    id: 4,
    name: '회복의 숲',
    ageRange: '성인·엄마',
    theme: '감정 회복·순환·재정의',
    description: (
      <>
        부모가 <strong>회복</strong>될 때, 아이의 숲도 함께 자란다
      </>
    ),
    color: '#8FBC88',
    bgColor: '#EEF7F0',
    strokeColor: '#8FBC88',
    position: 'center-bottom',
  },
];

// SVG Blob Paths (각각 다른 유기적 형태)
const blobPaths = {
  thinking: "M54,78 C20,120 40,200 120,220 C200,240 260,190 250,120 C240,60 170,20 110,40 C80,50 70,60 54,78 Z",
  symbol: "M60,90 C30,130 50,210 140,230 C230,250 280,180 270,110 C260,50 190,30 120,50 C90,60 75,70 60,90 Z",
  sense: "M70,85 C40,115 35,195 105,215 C175,235 245,185 235,115 C225,55 155,25 95,45 C75,55 65,65 70,85 Z",
  recovery: "M50,95 C15,135 25,215 105,235 C185,255 255,195 245,125 C235,65 165,35 105,55 C75,65 60,75 50,95 Z",
};

export default function ArtisticGrowth() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 초기 상태 설정
    container.setAttribute('data-state', 'idle');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        
        // SCENE 1: 균열 애니메이션
        setTimeout(() => {
          container.setAttribute('data-state', 'crack');
          
          // 균열 라인들 그리기
          const cracks = container.querySelectorAll<SVGPathElement>('.crack-line');
          cracks.forEach((crack, index) => {
            const length = crack.getTotalLength();
            crack.style.strokeDasharray = `${length}`;
            crack.style.strokeDashoffset = `${length}`;
            
            setTimeout(() => {
              crack.style.transition = 'stroke-dashoffset 0.8s ease, opacity 0.8s ease';
              crack.style.strokeDashoffset = '0';
              crack.style.opacity = '0.6';
            }, index * 150);
          });

          // SCENE 2: 분화 애니메이션 (균열 후)
          setTimeout(() => {
            container.setAttribute('data-state', 'split');
          }, 1200);
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

  const topForests = stages.filter((stage) => stage.position !== 'center-bottom');
  const bottomForest = stages.find((stage) => stage.position === 'center-bottom');

  return (
    <>
      <hr className="section-divider" />
      <section ref={containerRef} className="growth-origin">
        <div className="origin-stage">
          {/* TOP ROW: 3개 blob 카드 */}
          <div className="forest-row top-row">
            {topForests.map((stage, index) => {
              const blobKey = ['thinking', 'symbol', 'sense'][index] as keyof typeof blobPaths;
              return (
                <article
                  key={stage.id}
                  className={`forest-blob ${blobKey}`}
                  style={{ 
                    '--delay': `${0.4 + index * 0.2}s`,
                    '--blob-bg': stage.bgColor,
                    '--blob-stroke': stage.strokeColor,
                  } as React.CSSProperties}
                >
                  {/* Blob SVG */}
                  <svg 
                    viewBox="0 0 300 260" 
                    className="blob-svg"
                      style={{
                      fill: stage.bgColor,
                      stroke: stage.strokeColor,
                    }}
                  >
                    <defs>
                      <filter id={`blobGrain${blobKey}${stage.id}`} x="0%" y="0%" width="100%" height="100%">
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="3.5"
                          numOctaves="4"
                          seed={blobKey === 'thinking' ? 1 : blobKey === 'symbol' ? 2 : 3}
                          stitchTiles="stitch"
                        />
                        <feDisplacementMap in="SourceGraphic" scale="1.5" />
                      </filter>
                    </defs>
                    <path
                      d={blobPaths[blobKey]}
                      filter={`url(#blobGrain${blobKey}${stage.id})`}
                      strokeWidth="1.5"
                      strokeOpacity="0.25"
                    />
                  </svg>

                  {/* Blob Content */}
                  <div className="blob-content">
                    <div className="blob-number">{stage.id}</div>
                    <h3>
                      {stage.name} <span>{stage.ageRange}</span>
                    </h3>
                    <p>{stage.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CORE (상징적 존재) */}
          <div id="originCore" className="origin-core">
            <svg className="core-cracks" viewBox="0 0 240 240" width="100%" height="100%">
              <path
                d="M 120 80 L 80 120"
                stroke="#FFD93D"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                className="crack-line crack-1"
              />
              <path
                d="M 120 100 L 70 130"
                stroke="#FFD93D"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                className="crack-line crack-2"
              />
              <path
                d="M 160 120 L 120 160"
                stroke="#FFD93D"
                strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                className="crack-line crack-3"
              />
              <path
                d="M 140 120 L 170 150"
                stroke="#FFD93D"
                strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                className="crack-line crack-4"
              />
            </svg>
            <span className="core-text">
              INTEGRITY
              <br />
              CORE
            </span>
          </div>

          {/* BOTTOM: 회복의 숲 */}
          {bottomForest && (
            <div className="forest-row bottom-row">
              <article
                className="forest-blob recovery"
                style={{ 
                  '--delay': '0.8s',
                  '--blob-bg': bottomForest.bgColor,
                  '--blob-stroke': bottomForest.strokeColor,
                } as React.CSSProperties}
              >
                  <svg 
                    viewBox="0 0 300 260" 
                    className="blob-svg"
                    style={{ 
                      fill: bottomForest.bgColor,
                      stroke: bottomForest.strokeColor,
                    }}
                  >
                      <defs>
                      <filter id="blobGrainRecovery" x="0%" y="0%" width="100%" height="100%">
                          <feTurbulence
                            type="fractalNoise"
                          baseFrequency="3.5"
                            numOctaves="4"
                          seed="4"
                          stitchTiles="stitch"
                          />
                        <feDisplacementMap in="SourceGraphic" scale="1.5" />
                        </filter>
                      </defs>
                    <path
                      d={blobPaths.recovery}
                      filter="url(#blobGrainRecovery)"
                      strokeWidth="1.5"
                      strokeOpacity="0.25"
                    />
                    </svg>

                <div className="blob-content">
                  <div className="blob-number">{bottomForest.id}</div>
                  <h3>
                    {bottomForest.name} <span>{bottomForest.ageRange}</span>
                  </h3>
                  <p>{bottomForest.description}</p>
                      </div>
              </article>
            </div>
          )}
        </div>
      </section>

      {/* 스타일 */}
      <style>{`
        .growth-origin {
          padding: 160px 24px;
          background: #fff;
        }

        .origin-stage {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
          position: relative;
        }

        /* Forest Row */
        .forest-row {
          display: flex;
          gap: 40px;
          justify-content: center;
          align-items: center;
        }

        .bottom-row {
          margin-top: 40px;
        }

        /* Blob 카드 */
        .forest-blob {
          position: relative;
          width: 320px;
          aspect-ratio: 4 / 3;
          opacity: 0;
          transform: scale(0.85);
        }

        .blob-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.08));
          transition: transform 0.6s cubic-bezier(.22, 1, .36, 1);
        }

        /* Hero와 통일된 미세 노이즈 오버레이 */
        .forest-blob::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.015;
          mix-blend-mode: multiply;
          pointer-events: none;
          z-index: 1;
        }

        .blob-content {
          position: absolute;
          inset: 0;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          pointer-events: none;
          z-index: 2;
        }

        .blob-number {
          position: absolute;
          top: 20px;
          right: 24px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
          border: 1.5px solid currentColor;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Cormorant Garamond", serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--blob-stroke);
          pointer-events: auto;
        }

        .blob-content h3 {
          font-family: "Noto Serif KR", serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }

        .blob-content h3 span {
          font-size: 0.85rem;
          font-weight: 500;
          color: #888;
          font-family: "Inter", sans-serif;
          margin-left: 8px;
          letter-spacing: 0;
        }

        .blob-content p {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.75;
          font-family: "Noto Serif KR", serif;
        }

        .blob-content p strong {
          color: #2D5016;
          font-weight: 600;
        }

        /* CORE (상징적 존재) */
        .origin-core {
          width: 240px;
          aspect-ratio: 1;
          border-radius: 50%;
          border: 2px solid #FFD93D;
          background: #FFFCF9;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 10;
          box-shadow: 0 8px 32px rgba(255, 217, 61, 0.15);
          overflow: visible;
        }

        .core-text {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #2D5016;
          position: relative;
          z-index: 3;
        }

        .core-cracks {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .crack-line {
          opacity: 0;
        }

        /* SCENE 0: Idle - CORE breathing */
        .growth-origin[data-state="idle"] .forest-blob {
          opacity: 0;
          transform: scale(0.85);
        }

        .growth-origin[data-state="idle"] #originCore {
          animation: coreBreathing 3s ease-in-out infinite;
        }

        @keyframes coreBreathing {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        /* SCENE 1: Crack - 균열 라인 그리기 */
        .growth-origin[data-state="crack"] .forest-blob {
          opacity: 0;
          transform: scale(0.85);
        }

        .growth-origin[data-state="crack"] .crack-line {
          opacity: 0.6;
        }

        /* SCENE 2: Split - 분화 애니메이션 */
        .growth-origin[data-state="split"] .forest-blob {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.8s ease, transform 0.9s cubic-bezier(.22, 1.4, .36, 1);
          transition-delay: var(--delay, 0s);
        }

        .growth-origin[data-state="split"] #originCore {
          animation: none;
          transform: scale(1);
        }

        /* SCENE 3: Settle - Hover 활성 */
        .growth-origin[data-state="split"] .forest-blob:hover .blob-svg {
          transform: translateY(-6px) scale(1.03);
        }

        /* 모바일 */
        @media (max-width: 1023px) {
          .growth-origin {
            padding: 80px 24px;
          }

          .origin-stage {
            gap: 48px;
          }

          .forest-row {
            flex-direction: column;
            gap: 32px;
            width: 100%;
          }

          .forest-blob {
            width: 100%;
            max-width: 360px;
            opacity: 1 !important;
            transform: none !important;
          }

          .blob-svg {
            transform: none !important;
          }

          .origin-core {
            width: 180px;
            font-size: 1.25rem;
            order: 1;
          }

          .top-row {
            order: 2;
          }

          .bottom-row {
            order: 3;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}
