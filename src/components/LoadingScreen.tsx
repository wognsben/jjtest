import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Fallback: ensure loading finishes
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete?.();
      }, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 50%, rgba(143, 188, 136, 0.15) 0%, rgba(255, 182, 193, 0.1) 50%, transparent 100%)',
                'radial-gradient(circle at 70% 50%, rgba(255, 182, 193, 0.15) 0%, rgba(143, 188, 136, 0.1) 50%, transparent 100%)',
                'radial-gradient(circle at 30% 50%, rgba(143, 188, 136, 0.15) 0%, rgba(255, 182, 193, 0.1) 50%, transparent 100%)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
          />
          
          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Logo / Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <motion.h1
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  letterSpacing: '-0.02em',
                }}
              >
                Forêt des Crayons
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  color: '#666666',
                  marginTop: '1rem',
                  letterSpacing: '0.05em',
                }}
              >
                크레용숲
              </motion.p>
            </motion.div>
            
            {/* Animated crayon illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Three crayons */}
              <div className="flex gap-4">
                {[
                  { color: '#8fbc88', delay: 0 },
                  { color: '#FFB6C1', delay: 0.1 },
                  { color: '#A67C52', delay: 0.2 },
                ].map((crayon, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0, rotate: 0 }}
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: crayon.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <svg width="40" height="140" viewBox="0 0 40 140">
                      {/* Crayon body */}
                      <rect
                        x="5"
                        y="30"
                        width="30"
                        height="90"
                        fill={crayon.color}
                        rx="2"
                      />
                      {/* Crayon tip */}
                      <polygon
                        points="20,10 5,30 35,30"
                        fill={crayon.color}
                        style={{ filter: 'brightness(0.8)' }}
                      />
                      {/* Crayon bottom */}
                      <rect
                        x="5"
                        y="120"
                        width="30"
                        height="15"
                        fill={crayon.color}
                        rx="2"
                        style={{ filter: 'brightness(1.1)' }}
                      />
                      {/* Label */}
                      <rect
                        x="8"
                        y="60"
                        width="24"
                        height="30"
                        fill="white"
                        fillOpacity="0.3"
                        rx="1"
                      />
                    </svg>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="w-64 md:w-80"
            >
              {/* Progress track */}
              <div className="relative h-1 bg-brown-100 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: 'linear-gradient(to right, #8fbc88, #FFB6C1, #A67C52)',
                  }}
                  animate={{
                    width: `${Math.min(progress, 100)}%`,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  style={{ opacity: 0.3 }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
              
              {/* Percentage text */}
              <motion.p
                className="text-center mt-4 text-sm text-brown-600 font-medium tabular-nums"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>
          
          {/* Particle decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: ['#8fbc88', '#FFB6C1', '#A67C52'][Math.floor(Math.random() * 3)],
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
