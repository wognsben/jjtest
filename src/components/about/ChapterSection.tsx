import React from 'react';
import { motion } from 'motion/react';

interface ChapterSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  color: string;
  children: React.ReactNode;
}

export default function ChapterSection({ id, number, title, subtitle, color, children }: ChapterSectionProps) {
  return (
    <div id={id} className="relative">
      {/* Chapter divider with label */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${color.replace(')', ', 0.08)')}, transparent 70%)`,
          }}
        />
        
        {/* Grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-8 md:gap-12">
            {/* Left: Chapter number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0"
            >
              <span 
                className="text-9xl md:text-[12rem] lg:text-[16rem] font-light opacity-[0.08] leading-none block"
                style={{ 
                  fontFamily: "'Noto Serif KR', serif",
                  color: color.replace(')', '').replace('rgba(', '').split(',').slice(0, 3).join(','),
                }}
              >
                {number}
              </span>
            </motion.div>
            
            {/* Right: Title and subtitle */}
            <div className="flex-1 flex flex-col justify-center">
              {/* English title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 
                  className="text-5xl md:text-7xl lg:text-8xl text-brown-900 leading-tight tracking-tight"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  {title}
                </h2>
              </motion.div>
              
              {/* Korean subtitle at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-auto pt-8"
              >
                <p 
                  className="text-2xl md:text-3xl tracking-wide"
                  style={{ 
                    fontFamily: "'Noto Serif KR', serif",
                    color: color.replace(')', '').replace('rgba(', '').split(',').slice(0, 3).join(','),
                  }}
                >
                  {subtitle}
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 w-32 h-px origin-left"
            style={{
              background: `linear-gradient(to right, transparent, ${color}, transparent)`,
            }}
          />
        </div>
      </div>
      
      {/* Chapter content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
