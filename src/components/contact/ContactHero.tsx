import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !underlineRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        delay: 0.15,
      });

      // Brush underline draw animation
      const path = underlineRef.current?.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.9,
          ease: 'power2.out',
          delay: 0.6,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[80vh] flex items-center justify-center px-6 md:px-12 lg:px-24 py-32 md:py-40 overflow-hidden"
    >
      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          ref={titleRef}
          className="text-[clamp(1.3rem,4vw,2rem)] lg:text-[3.5rem] leading-[1.2] tracking-tight px-4"
          style={{
            fontFamily: "'Pretendard Variable', sans-serif",
          }}
        >
          <span className="relative inline-block">
            우리 아이의 다음 이야기를 시작해보세요
            
            {/* Hand-drawn green brush underline */}
            <svg
              ref={underlineRef}
              className="absolute left-0 right-0 -bottom-4 md:-bottom-6 lg:-bottom-8 w-full h-auto pointer-events-none"
              viewBox="0 0 800 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ maxWidth: '100%', minWidth: '100%' }}
            >
              <path
                d="M10,15 Q100,8 200,12 T400,15 Q500,18 600,12 T790,15"
                stroke="#7CB342"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                style={{
                  filter: 'url(#roughen)',
                }}
              />
              <defs>
                <filter id="roughen">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.05"
                    numOctaves="2"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="3"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
              </defs>
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle - Premium addition */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-[clamp(1rem,2vw,1.5rem)] text-[#6B4423]/70 max-w-2xl mx-auto px-4"
          style={{
            lineHeight: 1.8,
            letterSpacing: '-0.01em',
            fontFamily: "'Pretendard Variable', sans-serif",
          }}
        >
          크레용숲과 함께 새로운 예술의 여정을 시작하세요.
          <br />
          언제든지 문의 주시면 성심껏 안내해드리겠습니다.
        </motion.p>
      </div>
    </section>
  );
}