import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// ADULT ART Section 1: Hero - Premium Blob + Ring Style
export function AdultArtSection1() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const outerRingRef = React.useRef<SVGCircleElement>(null);
  const innerRingRef = React.useRef<SVGCircleElement>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const outerRing = outerRingRef.current;
    const innerRing = innerRingRef.current;
    
    if (!section || !outerRing || !innerRing) return;

    const outerCircumference = 2 * Math.PI * 138;
    const innerCircumference = 2 * Math.PI * 126;

    outerRing.style.strokeDasharray = `${outerCircumference}`;
    innerRing.style.strokeDasharray = `${innerCircumference}`;
    outerRing.style.strokeDashoffset = `${outerCircumference}`;
    innerRing.style.strokeDashoffset = `${innerCircumference}`;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          
          // Animate rings filling
          outerRing.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
          innerRing.style.transition = 'stroke-dashoffset 2.2s cubic-bezier(0.4, 0, 0.2, 1)';
          
          setTimeout(() => {
            outerRing.style.strokeDashoffset = '0';
          }, 200);
          
          setTimeout(() => {
            innerRing.style.strokeDashoffset = `${innerCircumference * 0.08}`;
          }, 400);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white pt-24 pb-24" style={{ paddingTop: '96px' }}>
      <div className="max-w-[1180px] mx-auto px-0">
        {/* 시각용 상단 스페이서 - absolute overlay 구조로 인한 시각적 여백 보장 */}
        <div aria-hidden="true" className="h-24" />

        {/* Hero Image with Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-32 rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 30px 80px rgba(0,0,0,0.12), 0 15px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)'
          }}
        >
          {/* Main Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <img 
              src={getImagePath("/assets/program/child/child sec.jpg")}
              alt="크레용숲 예술리추얼"
              className="w-full h-full object-cover"
              style={{ transform: 'scaleX(-1)' }}
              onError={(e) => {
                const src = e.currentTarget.src;
                if (src.endsWith('.jpg')) {
                  e.currentTarget.src = getImagePath('/assets/program/child/child sec.JPG');
                } else if (src.endsWith('.JPG')) {
                  e.currentTarget.src = getImagePath('/assets/program/child/child sec.png');
                }
              }}
            />
            
            {/* Blob + Ring Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* SVG Rings + Blob */}
                <svg 
                  viewBox="0 0 300 300" 
                  className="absolute inset-0 w-full h-full"
                  style={{ opacity: 0.95 }}
                >
                  <defs>
                    <filter id="blobGrainAdult">
                      <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.012" 
                        numOctaves="2" 
                        seed="7"
                        result="noise"
                      />
                      <feDisplacementMap in="SourceGraphic" scale="10" />
                    </filter>
                  </defs>
                  
                  {/* Blob Shape */}
                  <g transform="translate(150, 150) scale(1.15) translate(-140, -130)">
                    <path
                      d="M70,85 C40,115 35,195 105,215 C175,235 245,185 235,115 C225,55 155,25 95,45 C75,55 65,65 70,85 Z"
                      fill="#FADFDB"
                      filter="url(#blobGrainAdult)"
                      stroke="#A66A5A"
                      strokeWidth="1.5"
                      strokeOpacity="0.25"
                    />
                  </g>
                  
                  {/* Outer Ring */}
                  <circle
                    ref={outerRingRef}
                    cx="150"
                    cy="150"
                    r="138"
                    fill="none"
                    stroke="#A66A5A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    style={{
                      transform: 'rotate(180deg)',
                      transformOrigin: '50% 50%',
                    }}
                  />
                  
                  {/* Inner Ring */}
                  <circle
                    ref={innerRingRef}
                    cx="150"
                    cy="150"
                    r="126"
                    fill="none"
                    stroke="#A66A5A"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    style={{
                      transform: 'rotate(180deg)',
                      transformOrigin: '50% 50%',
                    }}
                  />
                </svg>
                
                {/* Center Text */}
                <div className="relative z-10 text-center px-8">
                  <p 
                    className="mb-2"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 300,
                      lineHeight: 1.5,
                      letterSpacing: '0.05em',
                    }}
                  >
                    감각을 회복하고, 삶의 결을 다시 잇는
                    <br />
                    어른의 감정의 숲
                  </p>
                  <h2 
                    className="mb-2"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.8vw, 1.3rem)',
                      color: '#A66A5A',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    크레용숲 예술리추얼
                  </h2>
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                      color: '#A66A5A',
                      fontWeight: 300,
                      letterSpacing: '0.15em',
                      fontStyle: 'italic',
                    }}
                  >
                    ADULT ART
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-32" />
      </div>
    </section>
  );
}

// ADULT ART Section 2: Program Description - Editorial Style
export function AdultArtSection2() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const blogCtaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const blogCta = blogCtaRef.current;
    if (!blogCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          blogCta.classList.add('is-visible');
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(blogCta);
    return () => observer.disconnect();
  }, []);

  const targetList = [
    "오랜만에 '나를 위한 시간'을 갖고 싶은 분",
    '색과 드로잉을 통해 감정 언어를 배우고 싶은 분',
    '해온 역할을 잠시 내려놓고, 자기감각을 회복하고 싶은 여성',
    '하나의 작업이 아니라 자기서사·패턴·결을 탐색해보고 싶은 분',
    '"예술은 어려울까?" 걱정하지만, 마음으로 그리는 경험을 원하시는 분'
  ];

  return (
    <>
      <style>{`
        /* 기본: 모바일 유지 (단일 컬럼) */
        .content-split {
          display: block;
        }

        /* PC 전용 줄바꿈 - 모바일에서 숨김 */
        .adult-key-message-br {
          display: none;
        }

        .adult-last-item-br {
          display: none;
        }

        .adult-last-item-spacer {
          display: none;
        }

        /* 초기 상태 (안 보임) */
        .blog-cta {
          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity 0.6s ease,
            transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        /* 스크롤 도달 시 활성화 */
        .blog-cta.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* 위아래로 미세하게 움직이는 애니메이션 */
        @keyframes floatY {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }

        .blog-cta.is-visible a {
          animation: floatY 3.5s ease-in-out infinite;
        }

        /* PC 이상에서만 분리 (2컬럼) */
        @media (min-width: 1024px) {
          .content-split {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            column-gap: 6rem;
            align-items: start;
          }

          .content-left {
            padding-right: 1rem;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .content-right {
            position: relative;
            display: flex;
            flex-direction: column;
            min-height: 100%;
          }

          .content-right .blog-cta {
            position: sticky;
            bottom: 32px;
            display: flex;
            justify-content: flex-end;
            margin-top: auto;
            pointer-events: none;
          }

          .content-right .blog-cta a {
            pointer-events: auto;
          }

          /* PC에서 설명 텍스트 폰트 크기 */
          .adult-description-paragraphs p {
            font-size: 1rem !important;
          }

          /* PC에서 키 메시지 줄바꿈 표시 */
          .adult-key-message-br {
            display: block;
          }

          /* PC에서 마지막 리스트 항목 줄바꿈 표시 */
          .adult-last-item-br {
            display: block;
          }

          /* PC에서 마지막 리스트 항목 간격 조정 */
          .adult-last-item-spacer {
            display: inline-block;
            margin-bottom: 14.4px;
          }
        }
      `}</style>
      <section ref={sectionRef} className="relative bg-white pt-24 pb-24" style={{ paddingTop: '96px' }}>
        <div className="max-w-[1180px] mx-auto px-0">
          <div className="content-split">
            {/* Left Column */}
            <div className="content-left">
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h2
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1.3rem, 2.8vw, 2.2rem)',
                    color: '#333',
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  감정은 생각보다 훨씬 예술적입니다.
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="adult-description-paragraphs"
                style={{ marginBottom: '48px' }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                    color: '#666',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: '0.9em',
                    maxWidth: '34em',
                    textAlign: 'left',
                    wordBreak: 'keep-all',
                  }}
                >
                  어른은 감정을 설명하기보다 적당히 덮어두는 기술이 먼저 늘죠.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                    color: '#666',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: '0.9em',
                    maxWidth: '34em',
                    textAlign: 'left',
                    wordBreak: 'keep-all',
                  }}
                >
                  그러다 어느 날, 삶이 톡 건드리기만 해도 결이 우둘투둘 튀어 오릅니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                    color: '#666',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: '0.9em',
                    maxWidth: '34em',
                    textAlign: 'left',
                    wordBreak: 'keep-all',
                  }}
                >
                  그때 필요한 건 '참아라'가 아니라
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                    color: '#666',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: '0.9em',
                    maxWidth: '34em',
                    textAlign: 'left',
                    wordBreak: 'keep-all',
                  }}
                >
                  내 마음의 결을 스케치해보는 용기입니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
                    color: '#666',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: '0',
                    maxWidth: '34em',
                    textAlign: 'left',
                    wordBreak: 'keep-all',
                  }}
                >
                  그림은 때로 마음보다 먼저 진실을 말하니까요.
                </p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="content-right">
              {/* Key Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="key-message"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  color: '#2F6B4F',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  marginBottom: '3rem',
                  maxWidth: '34em',
                  textAlign: 'left',
                  wordBreak: 'keep-all',
                }}
              >
                "내 삶의 결을 다시 읽고,<br className="adult-key-message-br" /> 나의 세계를 잇는 예술 리추얼입니다"
              </motion.p>

              {/* Blob Capsule */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="target-friends-box"
                style={{
                  background: '#FADFDB',
                  borderRadius: '24px',
                  padding: '2rem 2.5rem',
                  marginBottom: '3rem',
                  minWidth: '200px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#2F6B4F',
                    marginBottom: '1rem',
                  }}
                >
                  이런 분에게 맞아요
                </span>
                <ul
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    color: '#2F6B4F',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {targetList.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: i < targetList.length - 1 ? '0.9em' : 0,
                      }}
                    >
                      {i === targetList.length - 1 ? (
                        <>
                          "예술은 어려울까?" 걱정하지만,<span className="adult-last-item-spacer" /><br className="adult-last-item-br" /> 마음으로 그리는 경험을 원하시는 분
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Blog Button - Sticky on PC */}
              <div ref={blogCtaRef} className="blog-cta flex justify-end">
                <a
                  href="https://blog.naver.com/dreaming_art_play"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={0}
                  style={{
                    padding: '0.9rem 2.4rem',
                    border: '2px solid #A66A5A',
                    borderRadius: '9999px',
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: '0.95rem',
                    color: '#2d5016',
                    background: '#FADFDE',
                    textDecoration: 'none',
                    transition: '0.3s',
                  }}
                >
                  BLOG 바로가기
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
        </div>
      </section>

      <style>{`
        /* 모바일에서 좌우 패딩 변경 */
        @media (max-width: 767px) {
          .target-friends-box {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </>
  );
}