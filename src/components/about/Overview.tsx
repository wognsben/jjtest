import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface OverviewItemProps {
  number: string;
  title: string;
  targetId: string;
  index: number;
}

function OverviewItem({ number, title, targetId, index }: OverviewItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const x = useSpring(useTransform(mouseX, [-100, 100], [-12, 12]), { stiffness: 200, damping: 20 });
  const y = useSpring(useTransform(mouseY, [-100, 100], [-8, 8]), { stiffness: 200, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
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
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToSection}
      className="relative group cursor-pointer"
    >
      {/* Background glow on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-8 bg-accent-green rounded-full blur-3xl"
      />
      
      {/* Content */}
      <div className="relative flex items-baseline gap-6 group">
        {/* Number */}
        <motion.span
          animate={{
            x: isHovered ? 4 : 0,
            color: isHovered ? '#8fbc88' : '#A67C52',
          }}
          transition={{ duration: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light opacity-30"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          {number}
        </motion.span>
        
        {/* Title */}
        <div className="flex-1">
          <motion.h3
            animate={{
              x: isHovered ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl text-accent-green leading-tight"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            {title}
          </motion.h3>
          
          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-0.5 bg-accent-green mt-3 origin-left"
          />
        </div>
        
        {/* Arrow */}
        <motion.div
          animate={{
            x: isHovered ? 8 : 0,
            opacity: isHovered ? 1 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-accent-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Overview() {
  const items = [
    {
      number: '01',
      title: '예술기반 정서교육',
      targetId: 'section-emotional-foundation',
    },
    {
      number: '02',
      title: '크레용숲 클래스',
      targetId: 'section-crayon-class',
    },
    {
      number: '03',
      title: '크레용숲 콜라보',
      targetId: 'section-collaboration',
    },
  ];
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(255,182,193,0.04) 0%, rgba(143,188,136,0.03) 50%, rgba(255,255,255,0) 80%)',
        }}
      />
      
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Large "overview" text */}
            <div className="relative">
              {/* Shadow text */}
              <div 
                className="absolute inset-0 text-[12rem] md:text-[14rem] lg:text-[18rem] leading-none opacity-[0.03] select-none pointer-events-none"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                over
                <br />
                view
              </div>
              
              {/* Main text */}
              <h2 
                className="relative text-7xl md:text-8xl lg:text-9xl text-brown-700 leading-[0.9] tracking-tight"
                style={{ fontFamily: "'Noto Serif KR', serif" }}
              >
                over
                <br />
                <span className="text-brown-900">view</span>
              </h2>
              
              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 w-32 h-1 bg-gradient-to-r from-brown-700 to-accent-green origin-left"
              />
            </div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 text-xl md:text-2xl text-brown-600 leading-relaxed max-w-md"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              크레용숲이 걸어온 길과
              <br />
              함께하는 이야기
            </motion.p>
          </motion.div>
          
          {/* Right: Navigation Items */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {items.map((item, index) => (
              <OverviewItem
                key={item.number}
                {...item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
