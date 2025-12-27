import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ChapterCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  targetId: string;
  index: number;
}

function ChapterCard({ number, title, subtitle, description, color, gradient, targetId, index }: ChapterCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });
  
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
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToSection}
      className="relative group cursor-pointer"
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.4 : 0,
          scale: isHovered ? 1.05 : 0.9,
        }}
        transition={{ duration: 0.6 }}
        className="absolute -inset-6 rounded-[56px] blur-3xl"
        style={{ background: gradient }}
      />
      
      {/* Card container */}
      <div className="relative">
        {/* Glass background */}
        <div 
          className="absolute inset-0 rounded-[48px] border transition-all duration-700"
          style={{
            background: isHovered 
              ? `linear-gradient(135deg, ${gradient.replace(')', ', 0.08)')}, ${gradient.replace(')', ', 0.03)')})`
              : `linear-gradient(135deg, ${gradient.replace(')', ', 0.04)')}, ${gradient.replace(')', ', 0.02)')})`,
            borderColor: isHovered ? color.replace(')', ', 0.5)') : color.replace(')', ', 0.2)'),
            borderWidth: isHovered ? '2px' : '1px',
            boxShadow: isHovered 
              ? '0 60px 120px rgba(0,0,0,0.15), 0 30px 60px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.9)' 
              : '0 30px 80px rgba(0,0,0,0.08), 0 15px 40px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.7)',
          }}
        />
        
        {/* Content */}
        <div 
          className="relative px-12 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24"
          style={{ transform: 'translateZ(30px)' }}
        >
          {/* Number + Title - BASELINE ALIGNED */}
          <motion.div
            animate={{ x: isHovered ? 6 : 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-baseline gap-6 mb-12"
          >
            {/* Huge Number */}
            <motion.span
              animate={{
                color: isHovered ? color : color.replace(')', ', 0.3)'),
              }}
              transition={{ duration: 0.4 }}
              style={{ 
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(6rem, 12vw, 12rem)',
                fontWeight: 300,
                lineHeight: 0.85,
                letterSpacing: '-0.05em',
              }}
            >
              {number}
            </motion.span>
            
            {/* Title next to number */}
            <div className="flex-1">
              <motion.h3
                animate={{
                  y: isHovered ? -4 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{ 
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#1a1a1a',
                }}
              >
                {title}
              </motion.h3>
            </div>
          </motion.div>
          
          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.6 }}
            className="h-px mb-8 origin-left"
            style={{
              background: `linear-gradient(to right, ${color}, transparent)`,
            }}
          />
          
          {/* Subtitle */}
          <motion.p
            animate={{
              x: isHovered ? 6 : 0,
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mb-6"
            style={{ 
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: color,
            }}
          >
            {subtitle}
          </motion.p>
          
          {/* Description */}
          <motion.p
            animate={{
              x: isHovered ? 6 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-md leading-relaxed mb-10"
            style={{ 
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
              fontWeight: 300,
              lineHeight: 1.65,
              letterSpacing: 0,
              color: '#666666',
            }}
          >
            {description}
          </motion.p>
          
          {/* Arrow CTA */}
          <motion.div
            animate={{ 
              x: isHovered ? 12 : 0,
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-4"
          >
            <span 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: color,
              }}
            >
              Explore Chapter
            </span>
            <motion.div
              animate={{
                x: isHovered ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <svg 
                className="w-8 h-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{ color: color }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ChapterCards() {
  const chapters = [
    {
      number: '01',
      title: 'Philosophy',
      subtitle: '우리의 철학',
      description: '흙에서 시작된 색의 이야기. 크레용의 기원부터 엔카우스틱 회화까지, 크레용숲이 믿는 예술의 본질을 만나보세요.',
      color: 'rgba(255, 182, 193, 1)',
      gradient: 'rgba(255, 182, 193, 1)',
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
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-40 md:pb-56 lg:pb-64 px-6 md:px-12 bg-white overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative max-w-[2000px] mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 md:mb-32 lg:mb-40"
        >
          <h2 
            className="text-center"
            style={{ 
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 600,
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
            }}
          >
            Three Chapters of Our Story
          </h2>
          <p
            className="text-center mt-6 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontWeight: 300,
              color: '#666666',
              lineHeight: 1.65,
              letterSpacing: 0,
            }}
          >
            크레용숲의 이야기를 세 개의 챕터로 펼쳐봅니다
          </p>
        </motion.div>
        
        {/* Cards grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16"
          style={{ perspective: '2500px' }}
        >
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.number} {...chapter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
