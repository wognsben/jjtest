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
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
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
                      fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
                      color: '#A66A5A',
                      fontWeight: 300,
                      lineHeight: 1.8,
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
                      fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
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
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 space-y-4"
        >
          {[
            '"언제부터 내 감정을 설명하는 게 이렇게 어려워졌을까?"',
            '"내가 좋아하는 색, 좋아하는 감각이 뭐였더라?"',
            '"삶에 쫓기다 보니 나를 돌보는 일이 사치처럼 느껴진다."'
          ].map((question, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                color: '#333',
                fontWeight: 400,
                lineHeight: 1.75,
              }}
            >
              {question}
            </motion.p>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 max-w-3xl space-y-4"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
              color: '#666',
              fontWeight: 300,
              lineHeight: 1.9,
            }}
          >
            어른은 감정을 설명하기보다 적당히 묻어두는 기술이 먼저 늘죠.
            <br />
            그러다 어느 날, 삶의 결이 무뎌졌음을 문득 깨닫게 됩니다.
            <br />
            그때 필요한 건 "덜어냄"이 아니라,
            <br />
            내 마음의 결을 스케치해보는 용기입니다.
          </p>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              color: '#2F6B4F',
              fontWeight: 500,
              lineHeight: 1.7,
            }}
          >
            "내 삶의 결을 다시 읽고, 나의 세계를 잇는 예술 리추얼입니다"
          </p>
        </motion.div>

        {/* Blob Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative mb-16"
          style={{
            background: '#FADFDB',
            borderRadius: '32px',
            padding: '2.5rem 3rem',
          }}
        >
          <span
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: '1rem',
              fontWeight: 600,
              color: '#2F6B4F',
              marginBottom: '1.5rem',
              display: 'inline-block',
            }}
          >
            이런 분에게 맞아요
          </span>
          <ul className="space-y-2 mt-4">
            {[
              '오랜만에 나를 위한 시간을 찾고 싶은 분',
              '색과 드로잉을 통해 감정 언어를 배우고 싶은 분',
              '완성된 작품보다 자기감각을 회복하고 싶은 분',
              '화려한 작업이 아니라 자기서사를 탐색해보고 싶은 분',
              '예술은 어려울까? 걱정보다 편안하게 그리는 경험을 원하시는 분',
              '삶의 템포를 잠시 늦추고, 감각을 다시 깨우고 싶은 분',
              '나만의 리추얼을 만들고 싶은 분'
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: '0.95rem',
                  lineHeight: 2,
                  color: '#A66A5A',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-8">
            <a
              href="#"
              className="px-8 py-3 border-2 rounded-full transition-all duration-300"
              style={{
                background: '#FADFDE',
                borderColor: '#A66A5A',
                color: '#2F6B4F',
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '0.95rem',
                fontWeight: 500,
              }}
            >
              BLOG 바로가기
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}