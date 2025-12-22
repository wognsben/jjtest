import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import PremiumPaintTexture from './PremiumPaintTexture';

interface ChapterCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  targetId: string;
  index: number;
  isOdd: boolean;
}

function HorizontalChapterCard({ number, title, subtitle, description, color, gradient, targetId, index, isOdd }: ChapterCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(percentX);
    mouseY.set(percentY);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };
  
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 100, y: 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToSection}
      className="relative group cursor-pointer w-full h-[320px]"
    >
      {/* Premium paint texture decoration */}
      <PremiumPaintTexture 
        color={color} 
        isHovered={isHovered}
        index={index}
      />
      
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.1 : 0.9,
        }}
        transition={{ duration: 0.6 }}
        className="absolute -inset-8 rounded-[56px] blur-3xl"
        style={{ background: gradient }}
      />
      
      {/* Card container */}
      <div className="relative h-full">
        {/* Glass background */}
        <div 
          className="absolute inset-0 rounded-[48px] border transition-all duration-700"
          style={{
            background: isHovered 
              ? `linear-gradient(135deg, ${gradient.replace(')', ', 0.12)')}, ${gradient.replace(')', ', 0.04)')})`
              : `linear-gradient(135deg, ${gradient.replace(')', ', 0.06)')}, ${gradient.replace(')', ', 0.02)')})`,
            borderColor: isHovered ? color.replace(')', ', 0.6)') : color.replace(')', ', 0.25)'),
            borderWidth: isHovered ? '2.5px' : '1.5px',
            boxShadow: isHovered 
              ? '0 60px 120px rgba(0,0,0,0.18), 0 30px 60px rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.9)' 
              : '0 40px 90px rgba(0,0,0,0.1), 0 20px 45px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)',
          }}
        />
        
        {/* Content */}
        <div 
          className="relative px-6 py-6 md:px-8 md:py-8 h-full flex flex-col gap-8"
          style={{ transform: 'translateZ(30px)' }}
        >
          {/* Top: Number + Title */}
          <div className="flex items-start justify-between gap-8">
            {/* LEFT: Number + Title */}
            <motion.div
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              {/* Huge Number */}
              <motion.span
                animate={{
                  color: isHovered ? color : color.replace(')', ', 0.35)'),
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
                style={{ 
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                }}
              >
                {number}
              </motion.span>
              
              {/* Title next to number */}
              <div>
                <motion.h3
                  animate={{
                    y: isHovered ? -4 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ 
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    color: '#1a1a1a',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {title}
                </motion.h3>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom: Description + CTA */}
          <div className="flex flex-col items-start text-left max-w-[340px] self-start">
            {/* Description - always visible, forced 2 lines */}
            <motion.p
              animate={{
                opacity: 1,
                y: isHovered ? 0 : 8,
              }}
              transition={{ duration: 0.4 }}
              className="mb-6"
              style={{ 
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                fontWeight: 600,
                lineHeight: 1.65,
                color: '#666666',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </motion.p>
            
            {/* Arrow CTA - always visible */}
            <motion.div
              animate={{ 
                opacity: 1,
                x: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: color,
                }}
              >
                Explore
              </span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ color: color }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* SVG filter definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="roughen-divider">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function HorizontalChapterScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const chapters = [
    {
      number: '01',
      title: 'Philosophy',
      subtitle: '우리의 철학',
      description: '흙에서 시작된 색의 이야기. 크레용의 기원부터 엔카우스틱 회화까지, 크레용숲이 믿는 예술의 본질을 만나보세요.',
      color: 'rgba(255, 107, 157, 1)',
      gradient: 'rgba(255, 107, 157, 1)',
      targetId: 'chapter-philosophy',
    },
    {
      number: '02',
      title: 'About Us',
      subtitle: '우리의 이야기',
      description: '감각 기반 정서예술교육부터 파트너 기관까지. 크레용숲이 걸어온 길과 함께하는 사람들의 이야기입니다.',
      color: 'rgba(143, 188, 136, 1)',
      gradient: 'rgba(143, 188, 136, 1)',
      targetId: 'chapter-aboutus',
    },
    {
      number: '03',
      title: 'Founder',
      subtitle: '창립자 이야기',
      description: '크레용숲을 시작한 사람들. 그들의 철학과 여정, 그리고 아이들과 함께 꿈꾸는 미래를 들어보세요.',
      color: 'rgba(166, 124, 82, 1)',
      gradient: 'rgba(166, 124, 82, 1)',
      targetId: 'chapter-founder',
    },
  ];
  
  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto">
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                color: '#1a1a1a',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
              }}
            >
              Three Chapters<br />
              <span style={{ color: '#8fbc88' }}>of Our Story</span>
            </h2>
            <p
              className="max-w-2xl"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                fontWeight: 300,
                color: '#666666',
                lineHeight: 1.85,
              }}
            >
              크레용숲의 이야기를 세 개의 챕터로 펼쳐봅니다.<br />
              가로로 스크롤하며 각 챕터를 탐험해보세요.
            </p>
          </div>
        </motion.div>
        
        {/* Horizontal scroll hint */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12 px-6 md:px-12"
        >
          <div className="flex items-center gap-4 max-w-7xl mx-auto">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#8fbc88',
            }}>
              Explore our chapters
            </span>
          </div>
        </motion.div>
        
        {/* Grid layout container */}
        <div className="relative px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {chapters.map((chapter, index) => (
                <HorizontalChapterCard 
                  key={chapter.number} 
                  {...chapter} 
                  index={index}
                  isOdd={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
