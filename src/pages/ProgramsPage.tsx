import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { ChildArtSection2, ChildArtSection3, ChildArtSection4, ChildArtSection5 } from '../components/ChildArtSections';
import { getImagePath } from '../utils/imageUtils';
import { ChildArtSection6 } from '../components/ChildArtSection6';
import { ChildArtSection7 } from '../components/ChildArtSection7';
import { YouthArtSection1, YouthArtSection2, YouthArtSection3 } from '../components/YouthArtSections';
import { AdultArtSection1, AdultArtSection2 } from '../components/AdultArtSections';
import { AdultArtSection3 } from '../components/AdultArtSection3';
import { MomentsSection1 } from '../components/MomentsSection1';
import { MomentsSection2 } from '../components/MomentsSection2';
import { MomentsSection3 } from '../components/MomentsSection3';
import { MomentsSection4 } from '../components/MomentsSection4';
import { ForMomSection1 } from '../components/ForMomSection1';
import { ForMomSection2 } from '../components/ForMomSection2';
import ProgramMethodSection from '../components/ProgramMethodSection';

// RebuildText component for word-by-word animation
function RebuildText({ 
  text, 
  delay = 0, 
  className = '',
  style = {}
}: { 
  text: string; 
  delay?: number; 
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = text.split(' ');
  
  return (
    <span className={`inline-block ${className}`} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: (delay / 1000) + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// CHILD ART Section
function ChildArtSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const outerRingRef = React.useRef<SVGCircleElement>(null);
  const innerRingRef = React.useRef<SVGCircleElement>(null);

  React.useEffect(() => {
    const section = sectionRef.current;
    const outerRing = outerRingRef.current;
    const innerRing = innerRingRef.current;
    if (!section || !outerRing || !innerRing) return;

    const outerRadius = 138;
    const innerRadius = 126;

    const outerCircumference = 2 * Math.PI * outerRadius;
    const innerCircumference = 2 * Math.PI * innerRadius;

    outerRing.style.strokeDasharray = outerCircumference.toString();
    innerRing.style.strokeDasharray = innerCircumference.toString();

    // 초기 상태: 비활성 (안 보이게)
    outerRing.style.strokeDashoffset = outerCircumference.toString();
    innerRing.style.strokeDashoffset = innerCircumference.toString();

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          // GSAP을 사용한 프리미엄 애니메이션
          // 바깥 링: 1.2초에 걸쳐 채워짐
          gsap.to(outerRing, {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: 'power2.out',
          });

          // 안쪽 링: 1.5초에 걸쳐 채워짐 (92% 속도로 약간 느리게)
          gsap.to(innerRing, {
            strokeDashoffset: innerCircumference * 0.08, // 92% 채워짐
            duration: 1.5,
            ease: 'power2.out',
          });
        }
      },
      {
        threshold: 0.2, // 섹션 20% 보이면 활성화
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="child-art-section"
      className="relative bg-white pt-[90px] pb-24 lg:py-40"
    >
      <div className="max-w-[1180px] mx-auto px-10">
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
              src={getImagePath("/assets/program/child/child2.png")}
              alt="크레용숲 어린이색채학교"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Image load error:', e.currentTarget.src);
                const src = e.currentTarget.src;
                if (src.endsWith('.png')) {
                  e.currentTarget.src = getImagePath('/assets/program/child/child2.PNG');
                } else if (src.endsWith('.PNG')) {
                  e.currentTarget.src = getImagePath('/assets/program/child/child2.jpg');
                } else if (src.endsWith('.jpg')) {
                  e.currentTarget.src = getImagePath('/assets/program/child/child2.JPG');
                } else {
                  e.currentTarget.src = getImagePath('/assets/program/child/child2.png');
                }
              }}
            />
            
            {/* Centered Text with Progress Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* SVG RINGS + BLOB */}
                <svg
                  viewBox="0 0 300 300"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity: 0.95,
                  }}
                >
                  <defs>
                    {/* Blob distortion - 애니메이션 제거 */}
                    <filter id="blobGrain1">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.012"
                        numOctaves={2}
                        seed={3}
                        result="noise"
                      />
                      <feDisplacementMap
                        in="SourceGraphic"
                        scale="10"
                      />
                    </filter>
                  </defs>

                  {/* BLOB BACKGROUND - 중심(150, 150)에 배치, 크기 확대 */}
                  <g transform="translate(150, 150) scale(1.15) translate(-140, -130)">
                    <path
                      d="M70,85 C40,115 35,195 105,215 C175,235 245,185 235,115 C225,55 155,25 95,45 C75,55 65,65 70,85 Z"
                      fill="#FADFDB"
                      filter="url(#blobGrain1)"
                      stroke="#A66A5A"
                      strokeWidth="1.5"
                      strokeOpacity="0.25"
                    />
                  </g>

                  {/* OUTER RING */}
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

                  {/* INNER RING */}
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

                {/* TEXT CONTENT */}
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
                    예술로 자기 세계를 만드는 아이들
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
                    크레용숲 어린이색채학교
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
                    CHILD ART
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

// Program Card Component
function ProgramCard({ 
  title, 
  subtitle, 
  index,
  isOpen,
  onClick
}: { 
  title: string; 
  subtitle: string; 
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative group mb-16 md:mb-24"
    >
      <div className="border-t border-gray-200 pt-12 md:pt-16 pb-20 md:pb-24 hover:border-[#8fbc88] transition-all duration-600 group-hover:shadow-[0_8px_30px_rgb(143,188,136,0.08)]">
        <div className="max-w-4xl">
          <h2 
            className="mb-6 md:mb-8"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              color: '#2d5016',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>
          
          <p 
            className="mb-12 max-w-3xl text-gray-700"
            style={{ 
              fontSize: 'clamp(18px, 2vw, 22px)',
              lineHeight: 1.8,
              letterSpacing: '-0.01em',
            }}
          >
            {subtitle}
          </p>
          
          <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`group/btn px-10 py-4 border-2 rounded-full overflow-hidden relative transition-all duration-600 ${
              isOpen 
                ? 'bg-[#8fbc88] text-white border-[#8fbc88] shadow-lg' 
                : 'border-[#8fbc88] text-[#8fbc88] hover:bg-[#8fbc88] hover:text-white hover:shadow-xl'
            }`}
            style={{
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontWeight: 500,
              fontSize: '15px',
              letterSpacing: '0.02em',
            }}
          >
            <span className="relative z-10">{isOpen ? '접기' : '자세히 보기'}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProgramsPage({ initialOpenSection }: { initialOpenSection?: string | null } = {}) {
  const [openProgram, setOpenProgram] = React.useState<string | null>(initialOpenSection || null);

  // initialOpenSection이 변경되면 해당 섹션을 엽니다
  React.useEffect(() => {
    if (initialOpenSection) {
      setOpenProgram(initialOpenSection);
    }
  }, [initialOpenSection]);

  const toggleProgram = (programId: string) => {
    const isClosing = openProgram === programId;
    const wasOtherOpen = openProgram !== null && openProgram !== programId;
    
    setOpenProgram(isClosing ? null : programId);
    
    // 섹션을 열 때 해당 섹션 상단으로 스크롤
    if (!isClosing) {
      // 다른 섹션이 열려있었으면 닫히는 애니메이션(600ms) 후에 스크롤
      // 아니면 바로 스크롤
      const scrollDelay = wasOtherOpen ? 650 : 100;
      
      setTimeout(() => {
        const element = document.querySelector(`[data-section="${programId}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, scrollDelay);
    }
  };


  return (
    <div className="min-h-screen bg-white">
      {/* 스에나 메소드 섹션 (최상단) */}
      <ProgramMethodSection />

      {/* Programs List */}
      <section className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 pt-[90px] pb-24">
        {/* CHILD ART Card */}
        <div data-section="childart">
          <ProgramCard
            title="CHILD ART"
            subtitle="감정, 감각, 표현이 처음 만나는 어린이 예술숲"
            index={0}
            isOpen={openProgram === 'childart'}
            onClick={() => toggleProgram('childart')}
          />
        </div>

        {/* CHILD ART Sections (Accordion) */}
        <AnimatePresence>
          {openProgram === 'childart' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <ChildArtSection />
              <ChildArtSection2 />
              <ChildArtSection3 />
              <ChildArtSection4 />
              <ChildArtSection5 />
              <ChildArtSection6 />
              <ChildArtSection7 />
            </motion.div>
          )}
        </AnimatePresence>

        {/* YOUTH ART Card */}
        <div data-section="youthart">
          <ProgramCard
            title="YOUTH ART"
            subtitle="나만의 철학 미술관을 완성하는 청소년 사유의 숲"
            index={1}
            isOpen={openProgram === 'youthart'}
            onClick={() => toggleProgram('youthart')}
          />
        </div>

        {/* YOUTH ART Sections (Accordion) */}
        <AnimatePresence>
          {openProgram === 'youthart' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <YouthArtSection1 />
              <YouthArtSection2 />
              <YouthArtSection3 />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ADULT ART Card */}
        <div data-section="adultart">
          <ProgramCard
            title="ADULT ART"
            subtitle="감각을 회복하고, 삶의 결을 다시 짓는 어른의 감정의 숲"
            index={2}
            isOpen={openProgram === 'adultart'}
            onClick={() => toggleProgram('adultart')}
          />
        </div>

        {/* ADULT ART Sections (Accordion) */}
        <AnimatePresence>
          {openProgram === 'adultart' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <AdultArtSection1 />
              <AdultArtSection2 />
              <AdultArtSection3 />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOR MOM Card */}
        <div data-section="formom">
          <ProgramCard
            title="FOR MOM"
            subtitle="엄마의 마음까지 함께 살피는 창조의 숲"
            index={3}
            isOpen={openProgram === 'formom'}
            onClick={() => toggleProgram('formom')}
          />
        </div>

        {/* FOR MOM Sections (Accordion) */}
        <AnimatePresence>
          {openProgram === 'formom' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <ForMomSection1 />
              <ForMomSection2 />
            </motion.div>
          )}
        </AnimatePresence>

        {/* MOMENTS Card */}
        <div data-section="moments">
          <ProgramCard
            number="04. MOMENTS )"
            title="MOMENTS"
            subtitle="엄마의 마음까지 함께 살피는 창조의 숲"
            index={4}
            isOpen={openProgram === 'moments'}
            onClick={() => toggleProgram('moments')}
          />
        </div>

        {/* MOMENTS Sections (Placeholder) */}
        <AnimatePresence>
          {openProgram === 'moments' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="py-24 text-center"
            >
              <MomentsSection1 />
              <MomentsSection2 />
              <MomentsSection3 />
              <MomentsSection4 />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Bottom spacing */}
      <div className="h-32" />
    </div>
  );
}