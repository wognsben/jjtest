import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import { motion } from 'motion/react';

export function Credits3DLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Loading spinner */}
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 border-4 border-[#7CB342]/20 rounded-full" />
          <div
            className="absolute inset-0 border-4 border-[#7CB342] rounded-full border-t-transparent animate-spin"
            style={{
              animationDuration: '1s',
            }}
          />
        </div>

        {/* Progress text */}
        <p className="text-[#6B4423] text-lg">
          {progress.toFixed(0)}%
        </p>
        <p className="text-[#6B4423]/50 text-sm mt-2">
          크레용숲의 이야기를 불러오는 중...
        </p>
      </motion.div>
    </Html>
  );
}

export function Credits3DFallback() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#F5F5DC]/20 to-white">
      <div className="text-center space-y-4">
        {/* Animated brush stroke */}
        <svg
          className="w-24 h-24 mx-auto"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M20,50 Q40,20 60,50 T100,50"
            stroke="#7CB342"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>

        <p className="text-[#6B4423] text-lg">
          준비 중입니다...
        </p>
      </div>
    </div>
  );
}
