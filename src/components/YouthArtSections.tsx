import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// YOUTH ART Section 1: Hero - Premium Blob + Ring Style
export function YouthArtSection1() {
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
    <section ref={sectionRef} className="relative bg-white pt-[90px] pb-24">
      <div className="max-w-[1180px] mx-auto px-0">
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
              alt="크레용숲 철학미술관"
              className="w-full h-full object-cover"
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
                    <filter id="blobGrainYouth">
                      <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.012" 
                        numOctaves="2" 
                        seed="5" 
                        result="noise"
                      />
                      <feDisplacementMap in="SourceGraphic" scale="10" />
                    </filter>
                  </defs>
                  
                  {/* Blob Background */}
                  <g transform="translate(150, 150) scale(1.15) translate(-140, -130)">
                    <path 
                      d="M70,85 C40,115 35,195 105,215 C175,235 245,185 235,115 C225,55 155,25 95,45 C75,55 65,65 70,85 Z"
                      fill="#FADFDB"
                      filter="url(#blobGrainYouth)"
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
                
                {/* Text Content */}
                <div className="relative z-10 text-center px-8">
                  <p 
                    className="mb-2"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 300,
                      lineHeight: 1.65,
                      letterSpacing: 0,
                      letterSpacing: '0.05em',
                    }}
                  >
                    '나만의 철학 미술관'을 완성하는<br />
                    청소년 사유의 숲
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
                    크레용숲 철학미술관
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
                    YOUTH ART
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

// YOUTH ART Section 2: Program Description - Premium Editorial Style
export function YouthArtSection2() {
  const questions = [
    '"나는 누구일까?"',
    '"나는 어떤 세계를 만들고 싶은 사람일까?"',
    '"왜 내 감정은 이렇게 복잡하고 말로 설명하기 어려울까?"'
  ];

  const targetList = [
    '감정의 결이 깊고, 마음을 오래 바라보는 성향의 아이',
    '정답보다 자기 생각을 갖고 싶은 아이',
    '색·단어·이미지로 자기 언어와 자기 세계관을 만들고 싶은 아이',
    '입시보다 서사·정체성·내적 성장을 중요하게 여기는 부모님',
    '예술을 통해 마음을 정리하고, 방향을 찾고 싶은 중·고등 학생',
    '조용하지만 내면이 풍부하고, 혼자 생각 많은 아이',
    '말보다 창작으로 자신을 표현할 때 더 편안한 아이',
  ];

  return (
    <section className="relative bg-white pt-[90px] pb-24">
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Top: Three Big Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 space-y-4"
        >
          {questions.map((question, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 2.2vw, 1.6rem)',
                color: '#333',
                fontWeight: 400,
                lineHeight: 1.65,
                letterSpacing: 0,
              }}
            >
              {question}
            </motion.p>
          ))}
        </motion.div>

        {/* Description Text */}
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
              fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)',
              color: '#666',
              fontWeight: 300,
              lineHeight: 1.65,
              letterSpacing: 0,
            }}
          >
            이 시기에는 감정을 '왜 그런지' 묻기 시작하는 시기이며, 자기 생각과 세계관을 만들기 시작합니다.<br /><br />
            하지만 학교와 입시는 여전히 기술·결과만 요구하죠.<br /><br />
            정작 중요한 정체성·사유력·자기서사는 자리를 잃기 쉽습니다.
          </p>
        </motion.div>

        {/* Key Message - Green */}
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
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              color: '#2F6B4F',
              fontWeight: 500,
              lineHeight: 1.65,
              letterSpacing: 0,
            }}
          >
            "청소년의 세계관이 자라는 시간, 자기다움이 언어가 되는 수업입니다"
          </p>
        </motion.div>

        {/* Target Info - Rounded Card Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mb-16"
          style={{
            background: '#FADFDB',
            borderRadius: '32px',
            padding: '2.5rem 3rem',
            minWidth: '200px',
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
            이런 친구에게 맞아요
          </span>
          <ul className="space-y-2 mt-4">
            {targetList.map((item, i) => (
              <React.Fragment key={i}>
                <li 
                  style={{ 
                    fontFamily: "'Noto Serif KR', serif", 
                    fontSize: '0.95rem', 
                    lineHeight: 1.65,
                    letterSpacing: 0, 
                    color: '#A66A5A' 
                  }}
                >
                  {item}
                </li>
                {i < targetList.length - 1 && <><br /><br /></>}
              </React.Fragment>
            ))}
          </ul>
          
          {/* Blog Button - Inside Block, Right Bottom */}
          <div className="flex justify-end mt-8">
            <a
              href="https://blog.naver.com/dreaming_art_play"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 rounded-full transition-all duration-300 hover:bg-[#F6D2CC]"
              style={{
                background: '#FADFDE',
                borderColor: '#A66A5A',
                color: '#2d5016',
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

// YOUTH ART Section 3: Philosophy Room - Hand-drawn SVG Style
export function YouthArtSection3() {
  const sectionRef = React.useRef<HTMLElement>(null);
  
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('animate-in');
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const rooms = [
    {
      num: '1st',
      name: 'Origin Room',
      subtitle: '감각의 시작',
      quote: '"색의 기원 → 나의 기원"',
      items: ['자연안료 탐구', '동굴벽화 분석', '엔카우스틱 감정 온도 실험', "나의 '첫 색' 프로젝트"],
    },
    {
      num: '2nd',
      name: 'Surface Room',
      subtitle: '감정의 표면',
      quote: '"내면의 물결을 보다"',
      items: ['감정의 층과 색', '심리 텍스처 표현', '표면과 깊이의 시각화'],
    },
    {
      num: '3rd',
      name: 'Memory Room',
      subtitle: '상징의 기억',
      quote: '"의미를 새기다"',
      items: ['기억의 색 아카이브', '상징 언어 만들기', '개인 신화 디자인'],
    },
    {
      num: '4th',
      name: 'Self Room',
      subtitle: '나의 세계',
      quote: '"철학을 완성하다"',
      items: ['자기 철학 선언문', '나만의 미술관 설계', '최종 포트폴리오'],
    },
  ];

  return (
    <>
      <style>{`
        .philo-section .center-circle {
          stroke-dasharray: 942;
          stroke-dashoffset: 942;
          transition: stroke-dashoffset 2s ease-out;
        }
        .philo-section.animate-in .center-circle {
          stroke-dashoffset: 0;
        }
        .philo-section .connect-line {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          transition: stroke-dashoffset 1.5s ease-out;
        }
        .philo-section.animate-in .connect-line {
          stroke-dashoffset: 0;
        }
        .philo-section .connect-line:nth-child(2) { transition-delay: 0.8s; }
        .philo-section .connect-line:nth-child(3) { transition-delay: 1s; }
        .philo-section .connect-line:nth-child(4) { transition-delay: 1.2s; }
        .philo-section .connect-line:nth-child(5) { transition-delay: 1.4s; }
      `}</style>
      
      <section ref={sectionRef} className="philo-section relative bg-white pt-[90px] pb-24 overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-0 relative">

          {/* Title Banner with Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-20 rounded-3xl overflow-hidden"
            style={{ 
              minHeight: '280px',
              boxShadow: '0 20px 60px rgba(47, 107, 79, 0.1)',
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${getImagePath('/assets/program/child/child sec.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'scale(1.1)',
              }}
            />
            {/* Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(250,223,219,0.85) 50%, rgba(255,255,255,0.75) 100%)',
              }}
            />
            {/* Content - Title on top, rest at bottom */}
            <div className="relative z-10 flex flex-col justify-between h-full py-10 px-8 md:px-12" style={{ minHeight: '280px' }}>
              {/* Top: Title (full width, single line) */}
              <div>
                <h2 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                    color: '#2F6B4F',
                    fontWeight: 500,
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    marginBottom: '1rem',
                  }}
                >
                  철학미술관 : 나를 이해하는 색채의 방
                </h2>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.1rem)',
                    color: '#A66A5A',
                    fontWeight: 400,
                  }}
                >
                  청소년 사유예술 프로그램
                </p>
              </div>
              
              {/* Bottom: Description (two column) */}
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-end mt-auto">
                
                {/* Right: Description */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                      color: '#444',
                      lineHeight: 1.65,
                      letterSpacing: 0,
                      fontWeight: 300,
                      marginBottom: '0.5rem',
                    }}
                  >
                    색·기억·상징·언어를 모아 나만의 철학과 세계관을 만드는 과정입니다.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                      color: '#444',
                      lineHeight: 1.65,
                      letterSpacing: 0,
                      fontWeight: 300,
                    }}
                  >
                    "생각하는 법, {' '}
                    <span 
                      style={{ 
                        textDecoration: 'underline',
                        textDecorationColor: '#8FBC88',
                        textDecorationThickness: '2px',
                        textUnderlineOffset: '3px',
                        boxDecorationBreak: 'clone',
                      }}
                    >
                      해석하는 법, 나를 설명하는 법
                    </span>
                    "을 배우는 수업입니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Section: Text Card + Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Left: Text Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] p-8 md:p-10"
              style={{ background: '#FFFFFF' }}
            >
              <h3
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.4vw, 1.2rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                }}
              >
                어떻게 진행되나요?
              </h3>
              <ul className="space-y-2">
                <li
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                    color: '#666',
                    lineHeight: 1.65,
                    letterSpacing: 0,
                  }}
                >
                  • 4ROOM 사유 구조 (감각 → 감정 → 상징 → 해석)
                </li>
                <li
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                    color: '#666',
                    lineHeight: 1.65,
                    letterSpacing: 0,
                  }}
                >
                  • 1년간 누적 작업으로 《나만의 철학미술관》 완성
                </li>
                <li
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                    color: '#666',
                    lineHeight: 1.65,
                    letterSpacing: 0,
                  }}
                >
                  • 색·서사·기억을 조합한 개인 아카이브 제작
                </li>
                <li
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                    color: '#666',
                    lineHeight: 1.65,
                    letterSpacing: 0,
                  }}
                >
                  • 주 1회 100분 / 그룹수업 (최대 6명)
                </li>
              </ul>
            </motion.div>

            {/* Right: Organic Visual Area with Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden min-h-[280px]"
              style={{ background: '#FFFFFF' }}
            >
              {/* Organic Background Effect */}
              <svg 
                viewBox="0 0 400 400" 
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <filter id="coreFieldYouth">
                    <feTurbulence 
                      type="fractalNoise" 
                      baseFrequency="0.02" 
                      numOctaves="4" 
                      seed="9"
                    >
                      <animate 
                        attributeName="baseFrequency" 
                        dur="20s" 
                        values="0.018;0.025;0.018" 
                        repeatCount="indefinite"
                      />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="35" />
                  </filter>
                  <radialGradient id="coreGradientYouth">
                    <stop offset="0%" stopColor="#FADFDB" stopOpacity="0.6" />
                    <stop offset="30%" stopColor="#E8C8A8" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#8FBC88" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2F6B4F" stopOpacity="0.15" />
                  </radialGradient>
                </defs>
                <rect 
                  width="400" 
                  height="400" 
                  fill="url(#coreGradientYouth)" 
                  filter="url(#coreFieldYouth)"
                />
              </svg>
              
              {/* Centered Image (smaller, with organic border) */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div 
                  className="relative w-4/5 h-4/5 rounded-[40px] overflow-hidden"
                  style={{
                    boxShadow: '0 8px 32px rgba(166, 106, 90, 0.2)',
                  }}
                >
                  <img
                    src={getImagePath('/assets/program/child/youth art.png')}
                    alt="청소년 사유예술"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const src = e.currentTarget.src;
                      if (src.endsWith('.png')) {
                        e.currentTarget.src = getImagePath('/assets/program/child/youth art.PNG');
                      } else if (src.endsWith('.PNG')) {
                        e.currentTarget.src = getImagePath('/assets/program/child/youth art.jpg');
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Diagram Area - PC Only */}
          <div className="hidden md:block relative min-h-[1000px] lg:min-h-[950px]">
            
            {/* Center Philosophy Art Circle - PC */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center"
                style={{ 
                  background: '#FADFDB',
                  border: '3px solid #b98463'
                }}
              >
                <div className="text-center px-4">
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 400,
                      lineHeight: 1.65,
              letterSpacing: 0,
                      marginBottom: '0.25rem',
                    }}
                  >
                    나는 누구인가 — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>정체성</span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 400,
                      lineHeight: 1.65,
              letterSpacing: 0,
                      marginBottom: '0.25rem',
                    }}
                  >
                    어떻게 바라볼 것인가 — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>사유력</span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 400,
                      lineHeight: 1.65,
              letterSpacing: 0,
                      marginBottom: '1rem',
                    }}
                  >
                    무엇을 만들며 살아갈까 — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>세계관</span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 300,
                      letterSpacing: '0.1em',
                      fontStyle: 'italic',
                    }}
                  >
                    Philosophy
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(0.85rem, 1.6vw, 1.3rem)',
                      color: '#A66A5A',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                    }}
                  >
                    ART
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* 4 Room Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 relative z-0">
              {rooms.map((room, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
                  className={`relative ${idx >= 2 ? 'md:mt-80' : ''}`}
                >
                  <div 
                    className="room-card rounded-[40px] p-8 min-h-[200px] relative overflow-hidden"
                    style={{ background: '#FADFDB' }}
                  >
                    {/* Animated Border SVG - Top Right + Bottom Left */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 400 300"
                      preserveAspectRatio="none"
                    >
                      {/* Top Right Corner */}
                      <motion.path
                        d="M 320 20 H 380 Q 390 20 390 30 V 80"
                        fill="none"
                        stroke="#b98463"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.4 + idx * 0.15, ease: "easeInOut" }}
                      />
                      {/* Bottom Left Corner */}
                      <motion.path
                        d="M 10 240 V 270 Q 10 280 20 280 H 80"
                        fill="none"
                        stroke="#b98463"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.6 + idx * 0.15, ease: "easeInOut" }}
                      />
                    </motion.svg>
                    
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ background: '#A66A5A', color: '#FFF' }}
                      >
                        {room.num} ROOM
                      </span>
                      <span className="text-xs" style={{ color: '#888' }}>• 3개월</span>
                    </div>
                    
                    <h4 
                      className="mb-2"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                        color: '#2F6B4F',
                        fontWeight: 600,
                      }}
                    >
                      {room.name}
                    </h4>
                    <p 
                      className="mb-3"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '0.95rem',
                        color: '#A66A5A',
                        fontWeight: 400,
                      }}
                    >
                      {room.subtitle} — {room.quote}
                    </p>
                    
                    <ul className="space-y-1.5 mt-4">
                      {room.items.map((item, i) => (
                        <li 
                          key={i}
                          style={{
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: '0.9rem',
                            color: '#666',
                            lineHeight: 1.65,
              letterSpacing: 0,
                          }}
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="md:hidden space-y-12">
            {/* Philosophy ART - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#A66A5A',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  fontStyle: 'italic',
                  marginBottom: '0.25rem',
                }}
              >
                Philosophy
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.1rem',
                  color: '#A66A5A',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                }}
              >
                ART
              </p>
            </motion.div>

            {/* Center Circle - Mobile */}
            <motion.div
              className="flex justify-center relative"
            >
              <div className="relative w-64 h-64">
                {/* Animated Circle Border */}
                <motion.svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="98"
                    fill="none"
                    stroke="#b98463"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                  />
                </motion.svg>
                
                {/* Circle Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="absolute inset-0 rounded-full flex items-center justify-center"
                  style={{ 
                    background: '#FADFDB',
                    boxShadow: '0 10px 40px rgba(166, 106, 90, 0.2)'
                  }}
                >
                <div className="text-center px-6">
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: 0,
                      marginBottom: '0.3rem',
                    }}
                  >
                    나는 누구인가 — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>정체성</span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: 0,
                      marginBottom: '0.3rem',
                    }}
                  >
                    어떻게 바라볼 것인가 — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>사유력</span>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#A66A5A',
                      fontWeight: 400,
                      lineHeight: 1.65,
                      letterSpacing: 0,
                    }}
                  >
                    무엇을 만들며 살아갈까 — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>세계관</span>
                  </p>
                </div>
              </motion.div>
              </div>
            </motion.div>

            {/* 4 Room Cards - Mobile */}
            <div className="space-y-8">
              {rooms.map((room, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div 
                    className="rounded-[32px] p-6 relative overflow-hidden"
                    style={{ background: '#FADFDB' }}
                  >
                    {/* Animated Border SVG - Mobile Cards */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 300 250"
                      preserveAspectRatio="none"
                    >
                      {/* Top Right Corner */}
                      <motion.path
                        d="M 240 10 H 290 Q 295 10 295 15 V 50"
                        fill="none"
                        stroke="#b98463"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + idx * 0.1, ease: "easeInOut" }}
                      />
                      {/* Bottom Left Corner */}
                      <motion.path
                        d="M 5 200 V 235 Q 5 240 10 240 H 60"
                        fill="none"
                        stroke="#b98463"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + idx * 0.1, ease: "easeInOut" }}
                      />
                    </motion.svg>
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ 
                          background: '#A66A5A', 
                          color: '#FFF',
                        }}
                      >
                        {room.num} ROOM
                      </span>
                      <span className="text-xs" style={{ color: '#888' }}>• 3개월</span>
                    </div>
                    
                    <h4 
                      className="mb-2"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '1.3rem',
                        color: '#2F6B4F',
                        fontWeight: 600,
                      }}
                    >
                      {room.name}
                    </h4>
                    
                    <p 
                      className="mb-4"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '0.85rem',
                        color: '#888',
                        fontWeight: 300,
                        lineHeight: 1.65,
              letterSpacing: 0,
                      }}
                    >
                      {room.subtitle}
                    </p>
                    
                    <ul className="space-y-1.5">
                      {room.items.map((item, i) => (
                        <li 
                          key={i}
                          style={{
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: '0.8rem',
                            color: '#666',
                            lineHeight: 1.65,
              letterSpacing: 0,
                          }}
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Bottom Note - PC & Mobile 모두 표시 */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
              color: '#888',
              fontWeight: 300,
              lineHeight: 1.65,
              letterSpacing: 0,
            }}
          >
            * 각 ROOM은 3개월 과정으로 진행되며,<br />
            감각 → 감정 → 상징 → 세계의 단계를 거쳐 청소년의 철학적 사유를 확장합니다.
          </motion.p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
        </div>
      </section>
    </>
  );
}