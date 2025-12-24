import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const stages = [
  {
    id: 1,
    name: '감각의 숲',
    ageRange: '3–7세',
    bgColor: '#FADFDE',
    strokeColor: '#E9B5B3',
  },
  {
    id: 2,
    name: '상징의 숲',
    ageRange: '8–12세',
    bgColor: '#FFE066',
    strokeColor: '#E6C850',
  },
  {
    id: 3,
    name: '사유의 숲',
    ageRange: '13–19세',
    bgColor: '#C8A882',
    strokeColor: '#A67C52',
  },
  {
    id: 4,
    name: '회복의 숲',
    ageRange: '성인·엄마',
    bgColor: '#2E7D32',
    strokeColor: '#1B5E20',
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
  const [animState, setAnimState] = useState<'idle' | 'merging' | 'merged'>('idle');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        
        // Merge 애니메이션 시작
        setTimeout(() => {
          setAnimState('merging');
        }, 400);

        // Merge 완료 → Core 나타남
        setTimeout(() => {
          setAnimState('merged');
        }, 2000);
        
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 2x2 그리드 초기 위치
  const getInitialPosition = (index: number) => {
    const spacing = 180;
    const positions = [
      { x: -spacing, y: -spacing }, // 좌상 (핑크)
      { x: spacing, y: -spacing },  // 우상 (노랑)
      { x: -spacing, y: spacing },  // 좌하 (브라운)
      { x: spacing, y: spacing },   // 우하 (초록)
    ];
    return positions[index];
  };

  return (
    <>
      <hr className="section-divider" />
      <section ref={containerRef} className="growth-origin" data-state={animState}>
        <div className="merge-container">
          
          {/* 4개의 Blob 카드 - 2x2에서 중앙으로 합쳐짐 */}
          {stages.map((stage, index) => {
            const initialPos = getInitialPosition(index);
            
            return (
              <motion.div
                key={stage.id}
                className="merge-blob"
                initial={{ 
                  x: initialPos.x, 
                  y: initialPos.y,
                  scale: 1,
                  opacity: 1,
                  filter: 'blur(0px)'
                }}
                animate={
                  animState === 'merging'
                    ? {
                        x: 0,
                        y: 0,
                        scale: 0.8,
                        opacity: 0.85,
                        filter: 'blur(2px)'
                      }
                    : animState === 'merged'
                    ? {
                        x: 0,
                        y: 0,
                        scale: 0,
                        opacity: 0,
                        filter: 'blur(8px)'
                      }
                    : {}
                }
                transition={{
                  duration: 1.4,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  position: 'absolute',
                  mixBlendMode: animState === 'merging' ? 'multiply' : 'normal'
                }}
              >
                <svg 
                  viewBox="0 0 300 260" 
                  className="blob-svg"
                  style={{
                    fill: stage.bgColor,
                    stroke: stage.strokeColor,
                    width: 'clamp(140px, 20vw, 200px)',
                    height: 'clamp(100px, 14vw, 140px)',
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
                
                <motion.div 
                  className="blob-label"
                  animate={{
                    opacity: animState === 'idle' ? 1 : 0
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="age">{stage.ageRange}</span>
                  <span className="name">{stage.name}</span>
                </motion.div>
              </motion.div>
            );
          })}

          {/* 통합된 Core - 4색 Fusion */}
          <motion.div
            className="fusion-core"
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={
              animState === 'merged'
                ? { scale: 1, opacity: 1, rotate: 0 }
                : {}
            }
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {/* 4색 혼합 Blob */}
            <svg viewBox="0 0 300 300" className="core-svg">
              <defs>
                {/* 4색 혼합 그라데이션 */}
                <radialGradient id="fusionGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#FFE066" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="#FADFDE" stopOpacity="0.9" />
                  <stop offset="65%" stopColor="#C8A882" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2E7D32" stopOpacity="0.85" />
                </radialGradient>
                
                {/* 글로우 효과 */}
                <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="12" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Organic 텍스처 */}
                <filter id="organicTexture">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="3"
                    numOctaves="4"
                    seed="99"
                    stitchTiles="stitch"
                  />
                  <feDisplacementMap in="SourceGraphic" scale="2" />
                </filter>
              </defs>
              
              {/* 배경 글로우 */}
              <circle
                cx="150"
                cy="150"
                r="130"
                fill="url(#fusionGradient)"
                opacity="0.3"
                filter="url(#coreGlow)"
              />
              
              {/* 메인 Blob */}
              <path
                d="M150,30 C190,35 240,70 255,120 C270,170 250,230 195,250 C140,270 85,250 55,200 C25,150 40,80 90,50 C115,35 135,28 150,30 Z"
                fill="url(#fusionGradient)"
                filter="url(#organicTexture)"
                opacity="0.95"
              />
            </svg>
            
            {/* Core 텍스트 */}
            <div className="core-content">
              <span className="core-title">INTEGRITY</span>
              <span className="core-subtitle">CORE</span>
              <span className="core-desc">4개의 숲이 하나로</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 스타일 */}
      <style>{`
        .growth-origin {
          padding: clamp(100px, 15vw, 180px) clamp(24px, 4vw, 48px);
          background: #fff;
          position: relative;
          overflow: hidden;
        }

        .merge-container {
          max-width: 1200px;
          margin: 0 auto;
          min-height: clamp(500px, 60vh, 700px);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .merge-blob {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          pointer-events: none;
        }

        .blob-svg {
          filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.12));
          transition: filter 0.6s ease;
        }

        .blob-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-family: "Noto Serif KR", serif;
        }

        .blob-label .age {
          font-size: clamp(11px, 1.2vw, 13px);
          color: #9CA3AF;
          font-weight: 500;
          letter-spacing: 0.08em;
          font-family: "Inter", sans-serif;
        }

        .blob-label .name {
          font-size: clamp(14px, 1.5vw, 17px);
          color: #1a1a1a;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        /* Fusion Core */
        .fusion-core {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(280px, 35vw, 380px);
          height: clamp(280px, 35vw, 380px);
        }

        .core-svg {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: coreRotate 30s linear infinite;
        }

        @keyframes coreRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .core-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
        }

        .core-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(28px, 3.5vw, 38px);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #fff;
          text-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.3),
            0 4px 16px rgba(0, 0, 0, 0.2);
          line-height: 1.1;
        }

        .core-subtitle {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 600;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 
            0 2px 6px rgba(0, 0, 0, 0.25);
        }

        .core-desc {
          margin-top: 8px;
          font-family: "Noto Serif KR", serif;
          font-size: clamp(12px, 1.3vw, 15px);
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        /* 모바일 */
        @media (max-width: 768px) {
          .growth-origin {
            padding: 80px 20px;
          }

          .merge-container {
            min-height: 600px;
          }

          .merge-blob {
            gap: 12px;
          }

          .blob-svg {
            width: clamp(110px, 25vw, 140px) !important;
            height: clamp(80px, 18vw, 100px) !important;
          }

          .fusion-core {
            width: clamp(240px, 70vw, 300px);
            height: clamp(240px, 70vw, 300px);
          }

          .core-title {
            font-size: clamp(24px, 6vw, 32px);
          }

          .core-subtitle {
            font-size: clamp(16px, 4vw, 20px);
          }

          .core-desc {
            font-size: clamp(11px, 3vw, 13px);
          }
        }

        /* 태블릿 */
        @media (min-width: 769px) and (max-width: 1023px) {
          .growth-origin {
            padding: 100px 32px;
          }

          .merge-container {
            min-height: 650px;
          }

          .fusion-core {
            width: clamp(300px, 40vw, 350px);
            height: clamp(300px, 40vw, 350px);
          }
        }
      `}</style>
    </>
  );
}
