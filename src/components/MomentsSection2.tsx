import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// MOMENTS Section 2: 철학 텍스트 + 붓질 이미지
export function MomentsSection2() {
  return (
    <section className="relative bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <img
              src={getImagePath('/assets/program/rolling review.jpg')}
              alt="Rolling review"
              className="w-full h-auto"
              onError={(e) => {
                const src = e.currentTarget.src;
                if (src.endsWith('.jpg')) {
                  e.currentTarget.src = getImagePath('/assets/program/rolling review.JPG');
                } else if (src.endsWith('.JPG')) {
                  e.currentTarget.src = getImagePath('/assets/program/rolling review.png');
                } else if (src.endsWith('.png')) {
                  e.currentTarget.src = getImagePath('/assets/program/rolling review.PNG');
                }
              }}
            />
          </motion.div>

          {/* RIGHT: Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 lg:space-y-8"
          >
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                color: '#333',
                fontWeight: 400,
                lineHeight: 1.9,
              }}
            >
              아이가 가진 내적 자원을 더욱 귀중히 여기고
            </p>

            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                color: '#333',
                fontWeight: 400,
                lineHeight: 1.9,
              }}
            >
              스스로 느끼고 상상하며 표현하는 가장 인간적인 능력이 상실되지 않도록
            </p>

            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                color: '#333',
                fontWeight: 400,
                lineHeight: 1.9,
              }}
            >
              먼저 사랑하고
            </p>

            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                color: '#2d5016',
                fontWeight: 600,
                lineHeight: 1.9,
              }}
            >
              그 다음 가르칩니다.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}
