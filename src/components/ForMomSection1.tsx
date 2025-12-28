import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// FOR MOM Section 1: 엄마를 위한 예술 시간
export function ForMomSection1() {
  const outerRingRef = useRef<SVGCircleElement>(null);
  const innerRingRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (outerRingRef.current) {
              const circumference = 2 * Math.PI * 138;
              outerRingRef.current.style.strokeDasharray = `${circumference}`;
              outerRingRef.current.style.strokeDashoffset = '0';
            }
            if (innerRingRef.current) {
              const circumference = 2 * Math.PI * 126;
              innerRingRef.current.style.strokeDasharray = `${circumference}`;
              innerRingRef.current.style.strokeDashoffset = `${circumference * 0.08}`;
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('.for-mom-hero');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white pt-[90px] pb-24">
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Hero Image with Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-32 rounded-3xl overflow-hidden for-mom-hero"
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
              style={{ 
                transform: 'scaleX(-1)',
                filter: 'sepia(15%) saturate(110%) brightness(98%)',
              }}
              onError={(e) => {
                const src = e.currentTarget.src;
                if (src.endsWith('.jpg')) {
                  e.currentTarget.src = getImagePath('/assets/program/child/child sec.JPG');
                } else if (src.endsWith('.JPG')) {
                  e.currentTarget.src = getImagePath('/assets/program/child/child sec.png');
                }
              }}
            />
            
            {/* Subtle Overlay for Differentiation */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(250, 223, 219, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(250, 223, 219, 0.1) 100%)',
                mixBlendMode: 'multiply',
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
                    <filter id="blobGrainForMom">
                      <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.015" 
                        numOctaves="2" 
                        seed="9"
                        result="noise"
                      />
                      <feDisplacementMap in="SourceGraphic" scale="8" />
                    </filter>
                  </defs>
                  
                  {/* Blob Shape - Different shape for differentiation */}
                  <g transform="translate(150, 150) scale(1.2) translate(-135, -125)">
                    <path
                      d="M60,80 C30,110 25,190 100,210 C175,230 250,180 240,110 C230,50 150,20 90,40 C70,50 60,60 60,80 Z"
                      fill="#FADFDB"
                      filter="url(#blobGrainForMom)"
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
                    FOR MOM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-32" />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
              color: '#333',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            아이 마음을 잘 돌보고 싶은데,
            <br />
            정작 내 마음은 어디쯤 있을까요?
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <p
            className="mb-2"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
              color: '#A66A5A',
              fontWeight: 300,
              lineHeight: 1.5,
            }}
          >
            아이의 마음을 키우기 전에,
          </p>
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
              color: '#A66A5A',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            먼저 자신의 마음을 돌보는 엄마를 위한 예술 시간
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-3xl space-y-4"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.87rem, 1.15vw, 1.05rem)',
              color: '#333',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: 0,
            }}
          >
            엄마는 아이의 감정을 가장 가까이에서 바라보는 사람입니다.<br /><br />
            가장 마지막으로 자기 마음을 돌보는 사람이기도 하지요.<br /><br />
            엄마 자신의 마음에 물을 주고, 숨을 고르고,<br /><br />
            다시 감각을 되찾는 시간입니다.<br /><br />
            색으로 지금의 마음을 살피고, 선으로 쌓인 감정을 천천히 풀어내며,<br /><br />
            그림과 기록을 통해 <span style={{ fontWeight: 500 }}>"나는 지금 어떤 상태일까?"</span>를 스스로 묻습니다.<br /><br />
            가정의 정서는 그렇게, 조용히 다시 순환하기 시작합니다.<br /><br />
            완벽한 엄마가 되기보다는 대신 엄마가 자기 마음과 다시 연결되는 길을 함께 걷습니다.
          </p>
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#2F6B4F',
              marginBottom: '1.5rem',
              display: 'inline-block',
            }}
          >
            우리는 이런 엄마들을 기다립니다
          </span>
          <ul className="space-y-2 mt-4">
            <li
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '0.95rem',
                lineHeight: 1.5,
                letterSpacing: 0,
                color: '#A66A5A',
              }}
            >
              무언가를 더 배우기보다 잠시 내려놓고 싶은 엄마<br /><br />
            </li>
            <li
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '0.95rem',
                lineHeight: 1.5,
                letterSpacing: 0,
                color: '#A66A5A',
              }}
            >
              엄마라는 역할 뒤에 가려진 나를 다시 느끼고 싶은 사람<br /><br />
            </li>
            <li
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '0.95rem',
                lineHeight: 1.5,
                letterSpacing: 0,
                color: '#A66A5A',
              }}
            >
              지금 당장 아웃풋은 없어도 삶이 조금 더 아름다워지길 바라는 사람
            </li>
          </ul>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.8rem, 1.1vw, 0.85rem)',
              color: '#666',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: 0,
            }}
          ><span style={{ fontWeight: 500, color: '#333' }}>『미스 럼피우스』</span>가 그랬듯, 우리는 세상을 바꾸지 않습니다<br />
            다만 각자의 삶에 작은 아름다움이 자라나길 바랄 뿐입니다.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-gray-200"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.35vw, 1.2rem)',
              color: '#2d5016',
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: 0,
            }}
          >
            엄마의 마음이 회복되면, 아이의 마음도 투명해집니다.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}

