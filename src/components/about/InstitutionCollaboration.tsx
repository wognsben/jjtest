import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../../utils/imageUtils';

interface InstitutionCollaborationProps {
  onShowPartners?: () => void;
}

export default function InstitutionCollaboration({ onShowPartners }: InstitutionCollaborationProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowPartners = () => {
    if (onShowPartners) {
      onShowPartners();
      // 스크롤 to section
      setTimeout(() => {
        const element = document.getElementById('section-education-partners');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const images = [
    'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
  ];

  return (
    <section id="section-collaboration" className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-white">
      {/* Paper texture noise */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div className="relative z-10 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
              style={{ 
                color: '#8FBC88',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                lineHeight: 1.6
              }}
            >
              COLLABORATION & 기관 협업 프로그램 (Forêt des Crayons )
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
              style={{ 
                color: '#D97757',
                fontSize: '1.75rem',
                fontWeight: 400,
                lineHeight: 1.4
              }}
            >
              함께 자라는 예술 생태계
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
              style={{ 
                color: '#333333',
                fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                lineHeight: 1.9,
                fontWeight: 400,
                maxWidth: '580px'
              }}
            >
              정서·감각·창조성을 키워드로 한 예술 커리큘럼 개발<br />
              학교·기관·도서관·센터와 함께 아동·청소년·성인<br />
              대상의 색채심리 기반 예술 프로그램을 맞춤 설계.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={handleShowPartners}
              className="group relative px-8 py-3.5 rounded-full overflow-hidden transition-all duration-600 self-start"
              style={{
                backgroundColor: 'transparent',
                color: '#D97757',
                border: '2px solid #D97757'
              }}
            >
              <div 
                className="absolute inset-0 transition-transform duration-600 ease-out group-hover:translate-x-0"
                style={{ 
                  background: '#D97757',
                  transform: 'translateX(-100%)'
                }}
              />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-600 group-hover:text-white" style={{ fontSize: '1rem' }}>
                함께해온 기관 더보기
              </span>
            </motion.button>
          </div>

          {/* Right: Image Grid */}
          <div className="relative">
            {/* Header Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <img 
                src={getImagePath("/assets/about/cooperation/cooperation-1.png")}
                alt="기관 협업 프로그램"
                onError={(e) => {
                  console.error('Image load error:', e.currentTarget.src);
                  const src = e.currentTarget.src;
                  if (src.endsWith('.png')) {
                    e.currentTarget.src = getImagePath('/assets/about/cooperation/cooperation-1.jpg');
                  } else if (src.endsWith('.jpg')) {
                    e.currentTarget.src = getImagePath('/assets/about/cooperation/cooperation-1.PNG');
                  } else if (src.endsWith('.PNG')) {
                    e.currentTarget.src = getImagePath('/assets/about/cooperation/cooperation-1.JPG');
                  } else {
                    e.currentTarget.src = getImagePath('/assets/about/cooperation/cooperation-1.png');
                  }
                }}
                className="w-full rounded-lg"
                style={{ 
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
              />
            </motion.div>

            <div className="grid grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: 'minmax(120px, auto)' }}>
              {images.map((image, index) => {
                // 세로 사선 형식: 각 이미지에 다른 회전 각도와 위치 오프셋
                const rotations = [-2, 1.5, -1, 2.5]; // 각 이미지별 회전 각도
                const offsets = [
                  { x: 0, y: 0 },
                  { x: 8, y: -5 },
                  { x: -6, y: 8 },
                  { x: 5, y: -10 }
                ]; // 각 이미지별 위치 오프셋
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`
                      group relative rounded-lg overflow-hidden cursor-pointer
                      ${index === 0 || index === 3 ? 'row-span-2' : ''}
                    `}
                    style={{ 
                      aspectRatio: (index === 0 || index === 3) ? '1/1.2' : '1/1',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                      transform: `translate(${offsets[index].x}px, ${offsets[index].y}px)`,
                    }}
                  >
                    <img 
                      src={image}
                      alt={`협업 프로젝트 ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.02]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative organic shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-20 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-5 bg-accent-green"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-40 h-40 md:w-56 md:h-56 rounded-full opacity-5 bg-accent-pink"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
