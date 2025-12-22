import React from 'react';
import { motion } from 'motion/react';
import { FloatingHandDrawn } from './HandDrawnSVG';
import WebGLFluidBackground from './WebGLFluidBackground';

export default function AboutHero() {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden bg-white"
      style={{
        minHeight: 'clamp(100vh, 120vw, 120vh)',
      }}
    >
      {/* WebGL Fluid Gradient Background */}
      <WebGLFluidBackground />
      
      {/* Floating Hand-Drawn SVG Elements */}
      <FloatingHandDrawn />
      
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
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
      
      <div 
        className="relative z-10 max-w-7xl mx-auto text-center"
        style={{
          paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
          paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
          paddingTop: 'clamp(6rem, 15vw, 12rem)',
          paddingBottom: 'clamp(6rem, 15vw, 12rem)',
        }}
      >
        
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
          style={{ 
            fontFamily: "'Noto Serif KR', serif",
            fontSize: 'clamp(2.5rem, 8vw, 8rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: 'clamp(-0.02em, -0.04vw, -0.04em)',
            color: '#1a1a1a',
          }}
        >
          <span className="inline-block">크레용숲</span>
          {' '}
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #8fbc88 0%, #2d5016 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            색의 이야기
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
