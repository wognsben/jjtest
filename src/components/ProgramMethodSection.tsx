import React from 'react';
import { motion } from 'motion/react';

// Program Page Method Section
export default function ProgramMethodSection() {
  return (
    <section className="relative min-h-screen bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#333',
              fontWeight: 400,
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}
          >
            스에나가 메소드는
          </h2>
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#8fbc88',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            크레용숲이 지향하는 예술 기반 정서교육의 핵심 토대입니다.
          </p>
        </motion.div>

        {/* Image 2: Certifications and Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img 
            src="/assets/about/The Origin of Color/The Origin of Color.jpg"
            alt="스에나가 메소드 색채심리연구소"
            className="w-full h-auto rounded-3xl"
          />
          
          {/* Optional: Add clickable overlay for the link button area */}
          <a
            href="https://www.healingcolor.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16"
            style={{ 
              width: '180px', 
              height: '60px',
              cursor: 'pointer',
              opacity: 0 // invisible but clickable
            }}
            aria-label="색채심리연구소 바로가기"
          >
            {/* Invisible clickable area over the button in image */}
          </a>
        </motion.div>

        {/* Bottom Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 md:mt-32 text-center"
        >
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              color: '#666',
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            크레용숲의 모든 프로그램은 스에나가 메소드 색채심리 철학을 기반으로 설계되었습니다.
          </p>
          
          {/* External Link Button */}
          <motion.a
            href="https://www.healingcolor.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mt-10 px-10 py-4 bg-pink-100 border-2 border-pink-300 rounded-full hover:bg-pink-200 transition-all duration-600"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              color: '#ff6b9d',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            색채심리연구소 자세히 보기 →
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32 md:mt-40" />
      </div>
    </section>
  );
}