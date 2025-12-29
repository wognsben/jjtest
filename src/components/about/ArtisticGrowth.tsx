import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const forests = [
  {
    id: 'sense',
    name: '감각의 숲',
    age: '3–7세',
    color: '#FADFDE',
  },
  {
    id: 'symbol',
    name: '상징의 숲',
    age: '8–12세',
    color: '#FFE066',
  },
  {
    id: 'thought',
    name: '사유의 숲',
    age: '13–19세',
    color: '#C8A882',
  },
];

export default function ArtisticGrowth() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timers = [
      setTimeout(() => setPhase(1), 0),        // 숲 등장
      setTimeout(() => setPhase(2), 1000),     // 숲 fade out
      setTimeout(() => setPhase(3), 1800),     // 코어 등장
    ];

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <>
      <hr className="section-divider" />
      
      <section ref={sectionRef} className="artistic-growth">
        
        {/* 왼쪽: 비주얼 영역 */}
        <div className="growth-visual">
          
          {/* 시각적 스택 컨테이너 */}
          <div className="growth-stack">
            
          {/* 상단 숲 블롭들 - 연령 단계별 타이밍 */}
          <div className="forest-row">
            {forests.map((forest, index) => (
              <motion.div
                key={forest.id}
                className={`forest-blob ${forest.id}`}
                style={{ backgroundColor: forest.color }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: phase >= 2 ? 0 : phase >= 1 ? 1 : 0,
                  y: phase >= 1 ? 0 : 20,
                  scale: phase >= 2 ? 0.95 : 1,
                }}
                transition={{
                  duration: phase === 1 ? 0.6 : 0.8,
                  delay: phase === 1 ? index * 0.15 : 0,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <span className="forest-age">{forest.age}</span>
                <strong className="forest-name">{forest.name}</strong>
              </motion.div>
            ))}
          </div>

          {/* 회복의 숲 */}
          <motion.div
            className="forest-blob recovery"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: phase >= 2 ? 0 : phase >= 1 ? 1 : 0,
              y: phase >= 1 ? 0 : 20,
              scale: phase >= 2 ? 0.95 : 1,
            }}
            transition={{
              duration: phase === 1 ? 0.6 : 0.8,
              delay: phase === 1 ? 0.3 : 0,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="forest-age">성인 · 엄마</span>
            <strong className="forest-name">회복의 숲</strong>
          </motion.div>

          {/* INTEGRITY CORE - 계단식 레이어 */}
          {phase >= 3 && (
            <div className="integrity-core-container">
              
              {/* Layer 4 (맨 뒤): 회복의 숲 (초록) */}
              <motion.div
                className="core-layer-stair layer-4"
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 0.55, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <svg viewBox="0 0 200 150" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="grad4">
                      <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#2E7D32" stopOpacity="0.3"/>
                    </radialGradient>
                    <filter id="noise4">
                      <feTurbulence baseFrequency="0.012" numOctaves="3" seed="40"/>
                      <feDisplacementMap in="SourceGraphic" scale="2"/>
                    </filter>
                  </defs>
                  <ellipse cx="100" cy="68" rx="90" ry="62" fill="url(#grad4)" filter="url(#noise4)"/>
                </svg>
              </motion.div>

              {/* Layer 3: 사유의 숲 (브라운) */}
              <motion.div
                className="core-layer-stair layer-3"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 0.7, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <svg viewBox="0 0 200 150" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="grad3">
                      <stop offset="0%" stopColor="#C8A882" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#C8A882" stopOpacity="0.3"/>
                    </radialGradient>
                    <filter id="noise3">
                      <feTurbulence baseFrequency="0.015" numOctaves="3" seed="30"/>
                      <feDisplacementMap in="SourceGraphic" scale="2"/>
                    </filter>
                  </defs>
                  <ellipse cx="100" cy="68" rx="88" ry="61" fill="url(#grad3)" filter="url(#noise3)"/>
                </svg>
              </motion.div>

              {/* Layer 2: 상징의 숲 (노랑) */}
              <motion.div
                className="core-layer-stair layer-2"
                initial={{ opacity: 0, x: -10, y: 10 }}
                animate={{ opacity: 0.85, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                >
                <svg viewBox="0 0 200 150" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="grad2">
                      <stop offset="0%" stopColor="#FFE066" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#FFE066" stopOpacity="0.3"/>
                    </radialGradient>
                    <filter id="noise2">
                      <feTurbulence baseFrequency="0.018" numOctaves="3" seed="20"/>
                      <feDisplacementMap in="SourceGraphic" scale="2"/>
                    </filter>
                  </defs>
                  <ellipse cx="100" cy="68" rx="86" ry="60" fill="url(#grad2)" filter="url(#noise2)"/>
                </svg>
              </motion.div>
                
              {/* Layer 1 (맨 앞): 감각의 숲 (핑크) */}
                <motion.div 
                className="core-layer-stair layer-1"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                >
                <svg viewBox="0 0 200 150" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="grad1">
                      <stop offset="0%" stopColor="#FADFDE" stopOpacity="0.95"/>
                      <stop offset="100%" stopColor="#FADFDE" stopOpacity="0.3"/>
                    </radialGradient>
                    <filter id="noise1">
                      <feTurbulence baseFrequency="0.02" numOctaves="3" seed="10"/>
                      <feDisplacementMap in="SourceGraphic" scale="2"/>
                    </filter>
                  </defs>
                  <ellipse cx="100" cy="68" rx="84" ry="59" fill="url(#grad1)" filter="url(#noise1)"/>
                </svg>
                </motion.div>

              {/* 하이라이트 - 숨처럼 */}
              <div className="core-highlight">
                <svg viewBox="0 0 200 150" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="highlight">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  <ellipse cx="85" cy="60" rx="50" ry="30" fill="url(#highlight)"/>
                </svg>
              </div>

              {/* 텍스트 - shape보다 200ms 늦게 */}
              <motion.div
                className="core-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                <span className="core-title">INTEGRITY</span>
                <span className="core-subtitle">CORE</span>
              </motion.div>
            </div>
          )}

          </div>

        </div>

        {/* 오른쪽: 설명 영역 */}
        <div className="growth-description">
          
          {/* 사유의 숲 */}
          <motion.div
            className="desc-item"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <svg className="desc-line" width="12" height="100" preserveAspectRatio="none">
              <circle cx="6" cy="6" r="4" fill="rgba(200,168,130,0.6)" />
              <line x1="6" y1="12" x2="6" y2="100" stroke="rgba(200,168,130,0.3)" strokeWidth="1.5" />
            </svg>
            <div className="desc-text">
              <h4>사유의 숲 <span className="desc-age">(13–19세)</span></h4>
              <p>
                예술을 매개로 '나만의 관점' 구축,<br />
                <span className="self-texture">자기결(Self Texture)</span>
                <span className="neon-underline">의 본격 형성</span>
              </p>
            </div>
          </motion.div>
                
          {/* 상징의 숲 */}
          <motion.div
            className="desc-item"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <svg className="desc-line" width="12" height="100" preserveAspectRatio="none">
              <circle cx="6" cy="6" r="4" fill="rgba(200,168,130,0.6)" />
              <line x1="6" y1="12" x2="6" y2="100" stroke="rgba(200,168,130,0.3)" strokeWidth="1.5" />
            </svg>
            <div className="desc-text">
              <h4>상징의 숲 <span className="desc-age">(8–12세)</span></h4>
              <p>감정·기억·경험이 상징으로 조직되는 단계</p>
            </div>
          </motion.div>

          {/* 감각의 숲 */}
          <motion.div
            className="desc-item"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <svg className="desc-line" width="12" height="100" preserveAspectRatio="none">
              <circle cx="6" cy="6" r="4" fill="rgba(200,168,130,0.6)" />
              <line x1="6" y1="12" x2="6" y2="100" stroke="rgba(200,168,130,0.3)" strokeWidth="1.5" />
            </svg>
            <div className="desc-text">
              <h4>감각의 숲 <span className="desc-age">(3–7세)</span></h4>
              <p>표현 = 놀이, 놀이는 곧 자기이해</p>
            </div>
          </motion.div>
              
          {/* 회복의 숲 */}
          <motion.div
            className="desc-item"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <svg className="desc-line" width="12" height="100" preserveAspectRatio="none">
              <circle cx="6" cy="6" r="4" fill="rgba(200,168,130,0.6)" />
              <line x1="6" y1="12" x2="6" y2="100" stroke="rgba(200,168,130,0.3)" strokeWidth="1.5" />
            </svg>
            <div className="desc-text">
              <h4>회복의 숲 <span className="desc-age">(성인·엄마)</span></h4>
              <p>부모가 회복될 때, 아이의 숲도 함께 자란다</p>
            </div>
          </motion.div>

          {/* INTEGRITY CORE */}
          <motion.div
            className="desc-item core-desc"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <svg className="desc-line" width="12" height="100" preserveAspectRatio="none">
              <circle cx="6" cy="6" r="4" fill="rgba(212,168,159,0.7)" />
              <line x1="6" y1="12" x2="6" y2="100" stroke="rgba(212,168,159,0.4)" strokeWidth="1.5" />
            </svg>
            <div className="desc-text">
              <h4>INTEGRITY CORE</h4>
              <p>기술보다 먼저, 존재의 중심</p>
            </div>
          </motion.div>

        </div>

      </section>

      {/* 스타일 */}
      <style>{`
        .artistic-growth {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(60px, 8vw, 100px);
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(100px, 12vw, 160px) clamp(24px, 4vw, 60px);
          background: #fff;
        }

        /* ================= 왼쪽: 비주얼 ================= */

        .growth-visual {
          position: relative;
          min-height: 650px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 768px) {
          .growth-visual {
            min-height: 520px;
          }
        }

        /* 시각적 스택 컨테이너 */
        .growth-stack {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .forest-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: clamp(20px, 3vw, 40px);
          position: relative;
          z-index: 3;
          margin-bottom: clamp(40px, 5vw, 60px);
        }

        /* 블롭 공통 - 시각적 무게 조정 */
        .forest-blob {
          width: clamp(140px, 16vw, 200px);
          height: clamp(110px, 13vw, 150px);
          border-radius: 58% 42% 53% 47% / 52% 58% 42% 48%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          color: #2b2b2b;
          box-shadow:
            inset 0 -4px 12px rgba(0,0,0,0.08),
            inset 0 4px 16px rgba(255,255,255,0.5),
            0 12px 40px rgba(0,0,0,0.12),
            0 4px 12px rgba(0,0,0,0.08);
          filter: saturate(1.08);
          position: relative;
          opacity: 0.95;
        }

        .forest-blob::before {
          content: '';
          position: absolute;
          top: 8%;
          left: 15%;
          width: 50%;
          height: 35%;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.4), transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .forest-age {
          font-size: clamp(11px, 1.1vw, 13px);
          opacity: 0.7;
          font-weight: 500;
          letter-spacing: 0.08em;
          font-family: 'Inter', sans-serif;
          position: relative;
          z-index: 5;
        }

        .forest-name {
          font-size: clamp(14px, 1.5vw, 18px);
          font-weight: 600;
          letter-spacing: -0.01em;
          font-family: 'Noto Serif KR', serif;
          position: relative;
          z-index: 5;
        }

        /* 각 숲 색상 */
        .sense { background: #FADFDE; }
        .symbol { background: #FFE066; }
        .thought { background: #C8A882; }

        /* 회복의 숲 */
        .recovery {
          width: clamp(240px, 30vw, 320px);
          height: clamp(60px, 7vw, 75px);
          border-radius: 999px;
          background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);
          color: #fff;
          box-shadow:
            inset 0 -2px 8px rgba(0,0,0,0.15),
            inset 0 2px 10px rgba(255,255,255,0.15),
            0 10px 30px rgba(46,125,50,0.18),
            0 4px 12px rgba(0,0,0,0.08);
        }

        .recovery .forest-age {
          color: rgba(255,255,255,0.8);
        }

        .recovery .forest-name {
          color: #fff;
        }

        /* INTEGRITY CORE 컨테이너 - 중앙 레이어로 겹쳐 표시 */
        .integrity-core-container {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: clamp(280px, 32vw, 360px);
          height: clamp(200px, 23vw, 250px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        .core-layer-stair {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transform: translateY(-6px);
        }

        /* 계단식 배치 (오른쪽에서 왼쪽으로) */
        .layer-4 {
          right: -15%;
          top: 15%;
          z-index: 1;
        }

        .layer-3 {
          right: -10%;
          top: 10%;
          z-index: 2;
        }

        .layer-2 {
          right: -5%;
          top: 5%;
          z-index: 3;
        }

        .layer-1 {
          right: 0;
          top: 0;
          z-index: 4;
        }

        .core-layer-stair svg {
          width: 100%;
          height: 100%;
        }

        .core-highlight {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        .core-highlight svg {
          width: 100%;
          height: 100%;
        }

        .core-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #fff;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }

        .core-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 700;
          letter-spacing: 0.1em;
          line-height: 1.1;
        }

        .core-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2.2vw, 24px);
          font-weight: 600;
          letter-spacing: 0.12em;
          opacity: 0.95;
        }

        /* ================= 오른쪽: 설명 ================= */

        .growth-description {
          display: flex;
          flex-direction: column;
          gap: clamp(28px, 3.5vw, 40px);
          padding-top: clamp(20px, 3vw, 40px);
        }

        .desc-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .desc-line {
          flex-shrink: 0;
          height: 100%;
          min-height: 80px;
        }

        .desc-text {
          flex: 1;
        }

        .desc-text h4 {
          font-family: 'Noto Serif KR', serif;
          font-size: clamp(15px, 1.6vw, 18px);
          font-weight: 600;
          margin-bottom: 8px;
          color: #6B5B4F;
        }

        .desc-age {
          font-size: clamp(12px, 1.3vw, 14px);
          font-weight: 400;
          opacity: 0.65;
          font-family: 'Inter', sans-serif;
        }

        .desc-item p {
          font-family: 'Noto Serif KR', serif;
          font-size: clamp(13px, 1.4vw, 15px);
          line-height: 1.7;
          opacity: 0.85;
          color: #4A4A4A;
          word-break: keep-all;
        }

        /* 사유의 숲 강조 */
        .self-texture {
          background: #FADFDE;
          padding: 0.15em 0.45em;
          border-radius: 6px;
          font-weight: 500;
          position: relative;
          display: inline-block;
        }

        .self-texture::after {
          content: '';
          position: absolute;
          left: -2px;
          right: -2px;
          bottom: -5px;
          height: 8px;
          background: linear-gradient(90deg, 
            rgba(155, 255, 206, 0.7) 0%, 
            rgba(155, 255, 206, 0.9) 50%, 
            rgba(155, 255, 206, 0.7) 100%
          );
          border-radius: 4px;
          filter: blur(1.5px);
        }

        .neon-underline {
          position: relative;
          display: inline-block;
        }

        .neon-underline::after {
          content: '';
          position: absolute;
          left: -2px;
          right: -2px;
          bottom: -5px;
          height: 8px;
          background: linear-gradient(90deg, 
            rgba(155, 255, 206, 0.7) 0%, 
            rgba(155, 255, 206, 0.9) 50%, 
            rgba(155, 255, 206, 0.7) 100%
          );
          border-radius: 4px;
          filter: blur(1.5px);
        }

        .core-desc {
          background: rgba(250, 223, 222, 0.08);
          border-radius: 8px;
        }

        .core-desc .desc-text {
          padding: 16px 0;
        }

        .core-desc .desc-line circle {
          fill: rgba(212,168,159,0.7);
        }

        .core-desc .desc-line line {
          stroke: rgba(212,168,159,0.4);
        }

        /* 모바일 */
        @media (max-width: 1024px) {
          .artistic-growth {
            grid-template-columns: 1fr;
            gap: 60px;
            padding: 80px 20px;
          }

          .growth-visual {
            min-height: 450px;
          }

          .growth-stack {
            justify-content: center;
          }

          .forest-row {
            flex-direction: column;
            align-items: center;
            gap: 30px;
            margin-bottom: 40px;
          }

          .forest-blob {
            width: clamp(180px, 55vw, 240px);
            height: clamp(140px, 42vw, 180px);
          }

          .integrity-core-container {
            width: 280px;
            height: 200px;
          }

          .recovery {
            width: 260px;
            height: 70px;
          }
        }

        /* 모바일: 겹침 제거, 자연스러운 세로 흐름 */
        @media (max-width: 640px) {
          .growth-stack {
            justify-content: center;
            align-items: center;
          }

          /* integrity-core-container는 growth-visual 기준으로 절대 중앙 고정 */
          .integrity-core-container {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            margin: 0;
          }
        }

        /* 태블릿 */
        @media (min-width: 1025px) and (max-width: 1280px) {
          .artistic-growth {
            grid-template-columns: 1fr 0.85fr;
            gap: 60px;
          }

          .growth-visual {
            min-height: 550px;
          }
        }
      `}</style>
    </>
  );
}
