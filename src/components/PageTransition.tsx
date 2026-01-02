import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
}

export default function PageTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Premium curtain transition effect
export function CurtainTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pageKey} className="relative">
        {/* Curtain reveal */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#8fbc88] via-[#A67C52] to-[#FFB6C1] origin-top"
        />
        
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#8fbc88] via-[#A67C52] to-[#FFB6C1] origin-bottom"
        />
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Slide transition with hand-drawn reveal
export function SlideTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pageKey} className="relative">
        {children}
        
        {/* Slide overlay */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '-100%' }}
          exit={{ x: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] bg-[#8fbc88]"
        />
        
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          exit={{ x: '100%' }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] bg-[#8fbc88]"
        />
      </motion.div>
    </AnimatePresence>
  );
}

// Organic blob morph transition
export function BlobMorphTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pageKey} className="relative">
        {/* Morphing blob overlay */}
        <motion.div
          initial={{ 
            clipPath: 'circle(0% at 50% 50%)',
          }}
          animate={{ 
            clipPath: 'circle(0% at 50% 50%)',
          }}
          exit={{ 
            clipPath: 'circle(150% at 50% 50%)',
          }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#FFB6C1] via-[#8fbc88] to-[#A67C52]"
        />
        
        <motion.div
          initial={{ 
            clipPath: 'circle(150% at 50% 50%)',
          }}
          animate={{ 
            clipPath: 'circle(0% at 50% 50%)',
          }}
          exit={{ 
            clipPath: 'circle(0% at 50% 50%)',
          }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#FFB6C1] via-[#8fbc88] to-[#A67C52]"
        />
        
        {/* Content with fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Staggered reveal transition
export function StaggerRevealTransition({ children, pageKey }: PageTransitionProps) {
  const bars = Array.from({ length: 8 });
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pageKey} className="relative">
        {/* Staggered bar reveal */}
        <div className="fixed inset-0 z-[100] flex pointer-events-none">
          {bars.map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="flex-1 origin-top"
              style={{
                background: i % 2 === 0 ? '#8fbc88' : '#FFB6C1',
              }}
            />
          ))}
        </div>
        
        <div className="fixed inset-0 z-[100] flex pointer-events-none">
          {bars.map((_, i) => (
            <motion.div
              key={`reverse-${i}`}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.05,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="flex-1 origin-bottom"
              style={{
                background: i % 2 === 0 ? '#8fbc88' : '#FFB6C1',
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Silent Cut Transition - Awwwards Premium Style
// 존재감 0에 가까운 전환: opacity 1 → 0.96 → 1
// 사용자는 "전환을 봤다"는 기억 없음, "빠르다/부드럽다"고만 인식
export function PremiumBotanicalTransition({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.96 }}
        transition={{
          duration: 0.24,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Silent Cut Transition - 모바일용 (동일)
// 존재감 0에 가까운 전환: opacity 1 → 0.96 → 1
export function PremiumBotanicalFade({ children, pageKey }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.96 }}
        transition={{
          duration: 0.24,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Loading transition indicator
export function TransitionLoader({ isTransitioning }: { isTransitioning: boolean }) {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[110] h-1"
          style={{
            background: '#1F3D2B',
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-full bg-white/20 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
