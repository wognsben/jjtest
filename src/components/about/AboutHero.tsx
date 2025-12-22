import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FloatingHandDrawn } from './HandDrawnSVG';
import WebGLFluidBackground from './WebGLFluidBackground';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Canvas opacity - 텍스트 등장과 연동
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.4, 0.5, 0.3]);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // 1. 타이틀 letter-spacing 스크롤 반응성 (확대/축소 제외, letter-spacing만 유지)
    // scale 효과는 제거하고 letter-spacing만 유지
    gsap.fromTo(
      titleRef.current,
      { letterSpacing: '0.02em', scale: 1 }, // scale 고정
      {
        letterSpacing: '-0.02em',
        scale: 1, // scale 고정 - 확대/축소 방지
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: 0.5,
        },
      }
    );

    // 2. 장식 요소들 미세한 스크롤 반응성 (0.5~1% 정도)
    const floatingDots = floatingElementsRef.current?.querySelectorAll('.floating-dot');
    const particles = particlesRef.current?.querySelectorAll('div');

    if (floatingDots) {
      floatingDots.forEach((dot, i) => {
        gsap.to(dot, {
          y: -10 - (i % 3) * 3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom top',
            scrub: 0.3,
          },
        });
      });
    }

    if (particles) {
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: -8 - (i % 5) * 2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'bottom top',
            scrub: 0.4,
          },
        });
      });
    }

    // 3. Canvas 호흡 효과 (텍스트 등장 후 활성화)
    if (canvasWrapperRef.current) {
      const canvasEl = canvasWrapperRef.current.querySelector('canvas');
      if (canvasEl) {
        gsap.fromTo(
          canvasEl,
          { opacity: 0.2 },
          {
            opacity: 0.5,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about-hero"
      className="relative flex items-center justify-center overflow-hidden bg-white"
      style={{
        minHeight: 'clamp(100vh, 120vw, 120vh)',
      }}
    >
      {/* WebGL Fluid Gradient Background - 텍스트 등장과 연동 */}
      <div ref={canvasWrapperRef} className="canvas-wrapper">
        <WebGLFluidBackground />
      </div>
      
      {/* Floating Hand-Drawn SVG Elements - 미세한 스크롤 반응성 */}
      <div ref={floatingElementsRef}>
        <FloatingHandDrawn />
      </div>
      
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, rgba(143,188,136,0.08) 0%, rgba(255,255,255,0) 50%)',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 60%, rgba(255,182,193,0.06) 0%, rgba(255,255,255,0) 50%)',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 80%, rgba(166,124,82,0.04) 0%, rgba(255,255,255,0) 40%)',
          }}
        />
      </div>
      
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Particles - 미세한 스크롤 반응성 */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="floating-dot absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#FFE066', '#C5E187', '#FF6B9D', '#FFA3B5', '#8FED8F'][Math.floor(Math.random() * 5)],
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating organic shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-[10%] rounded-full opacity-20 blur-3xl"
        style={{
          width: 'clamp(8rem, 20vw, 16rem)',
          height: 'clamp(8rem, 20vw, 16rem)',
          background: 'radial-gradient(circle, rgba(143,188,136,0.4) 0%, transparent 70%)',
        }}
      />
      
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 right-[15%] rounded-full opacity-15 blur-3xl"
        style={{
          width: 'clamp(12rem, 25vw, 20rem)',
          height: 'clamp(12rem, 25vw, 20rem)',
          background: 'radial-gradient(circle, rgba(255,182,193,0.5) 0%, transparent 70%)',
        }}
      />
      
      {/* 시선의 중심 축 - 중앙 텍스트 영역 focus */}
      <div 
        className="hero-focus relative z-10 max-w-7xl mx-auto text-center"
        style={{
          paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
          paddingTop: 'clamp(6rem, 15vw, 12rem)',
          paddingBottom: 'clamp(6rem, 15vw, 12rem)',
        }}
      >
        {/* Focus 영역 배경 */}
        <div 
          className="hero-focus-bg absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)',
            margin: '-20%',
            zIndex: -1,
          }}
        />
        
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}
        >
          <div className="inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-green/10 rounded-full blur-xl" />
              <div 
                className="relative rounded-full border-2 border-accent-green/30 bg-white/60 backdrop-blur-sm"
                style={{
                  paddingLeft: 'clamp(1.5rem, 4vw, 2rem)',
                  paddingRight: 'clamp(1.5rem, 4vw, 2rem)',
                  paddingTop: 'clamp(0.625rem, 1.5vw, 0.75rem)',
                  paddingBottom: 'clamp(0.625rem, 1.5vw, 0.75rem)',
                }}
              >
                <span 
                  className="tracking-[0.3em] text-accent-green uppercase"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(0.625rem, 1.5vw, 0.8125rem)',
                    fontWeight: 600,
                  }}
                >
                  About Crayon Forest
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Main Title - LARGE */}
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title max-w-6xl mx-auto"
          style={{ 
            fontFamily: "'Noto Serif KR', serif",
            fontSize: 'clamp(2.5rem, 8vw, 8rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '0.02em', // GSAP가 스크롤에 따라 조절
            color: '#1a1a1a',
          }}
        >
          <span className="inline-block">크레용숲</span>
          {' '}
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #8fbc88 0%, #2d5016 70%, #1f3a10 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            색의 이야기
          </span>
        </motion.h1>
      </div>

      {/* 모바일에서 Canvas 약화 */}
      <style>{`
        @media (max-width: 768px) {
          .canvas-wrapper canvas {
            opacity: 0.2 !important;
          }
          .hero-focus-bg {
            background: radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, transparent 70%) !important;
          }
        }
      `}</style>
    </section>
  );
}
