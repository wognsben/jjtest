import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle } from 'lucide-react';
import { useMagneticHover } from '../../hooks/useMagneticHover';

gsap.registerPlugin(ScrollTrigger);

export default function KakaoTalkCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useMagneticHover<HTMLAnchorElement>({ strength: 0.4, speed: 0.5 });

  useEffect(() => {
    if (!sectionRef.current || !boxRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in and scale animation on scroll
      gsap.from(boxRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        scale: 0.97,
        y: 20,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={boxRef}
          className="relative group"
          data-cursor-hover
          data-cursor-text="채널 추가"
        >
          {/* Main CTA Box */}
          <div className="relative bg-white border-2 border-[#6B4423] rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden">
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7CB342]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-600" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F48FB1]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-600" />
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-[#7CB342] rounded-2xl"
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <MessageCircle className="w-10 h-10 text-white" strokeWidth={2} />
              </motion.div>

              {/* Title */}
              <h2 
                className="mb-6"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                }}
              >
                크레용숲의 새로운 소식을
                <br />
                <span className="text-[#7CB342]">가장 먼저 받는 방법!</span>
              </h2>

              {/* Description */}
              <div 
                className="mt-10 space-y-6 max-w-2xl mx-auto"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: 1.9,
                  color: 'rgba(107, 68, 35, 0.75)',
                }}
              >
                <p>
                  카카오톡 채널에서 <span className="text-[#6B4423] font-medium">'크레용숲'</span>을 검색하고
                  <br />
                  채널 추가를 하시면
                </p>
                <p>
                  프로젝트 오픈 소식을 가장 먼저 받을 수 있어요.
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                ref={buttonRef}
                href="http://pf.kakao.com/_xjPCxjG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-14 px-8 md:px-12 py-4 md:py-5 bg-[#6B4423] text-white rounded-full transition-all duration-600 hover:bg-[#543318]"
                style={{
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  boxShadow: '0 8px 24px rgba(107, 68, 35, 0.15), 0 4px 12px rgba(107, 68, 35, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(107, 68, 35, 0.2), 0 6px 16px rgba(107, 68, 35, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(107, 68, 35, 0.15), 0 4px 12px rgba(107, 68, 35, 0.1)';
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="hidden md:inline">카톡에서 Crayonforestart 채널 추가 → 상담</span>
                <span className="md:hidden">채널 추가하고 상담하기</span>
              </motion.a>

              {/* Small note */}
              <p 
                className="mt-8 text-[#6B4423]/50"
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                }}
              >
                또는 카카오톡에서 직접 검색해보세요
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}