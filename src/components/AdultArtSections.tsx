import React from 'react';
import { motion } from 'motion/react';

// ADULT ART Section 1: Hero
export function AdultArtSection1() {
  return (
    <section className="relative min-h-screen bg-white py-24 md:py-32 lg:py-40">
      {/* Section label */}
      <div className="absolute top-8 left-8 md:left-12 lg:left-24">
        <p className="text-xs tracking-[0.15em] text-tertiary uppercase opacity-60">
          ADULT ART
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-0 items-center min-h-[600px]">
          {/* Left: Beige Texture Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[500px] bg-gradient-to-br from-[#f5f1e8] to-[#e8e0d5]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(0,0,0,0.02) 2px,
                  rgba(0,0,0,0.02) 4px
                )
              `
            }}
          >
            {/* Wood texture effect */}
            <div className="absolute inset-0 opacity-30" 
                 style={{
                   backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(139,115,85,0.1) 10px, rgba(139,115,85,0.1) 11px)`
                 }} 
            />
          </motion.div>

          {/* Right: Pink Gradient with Circle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-[500px] bg-gradient-to-br from-pink-100 via-pink-50 to-pink-100 flex items-center justify-center"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 40%, rgba(255,182,193,0.4) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(255,192,203,0.3) 0%, transparent 50%)
              `
            }}
          >
            {/* Brush stroke texture effect */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-pink-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-64 h-32 bg-pink-300/15 rounded-full blur-2xl" />

            {/* Center Circle with Text */}
            <div className="relative z-10">
              {/* Outer border circle (brown/gold) */}
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-full blur-sm"
                  style={{
                    border: '2px solid rgba(139,115,85,0.4)',
                    transform: 'scale(1.02)'
                  }}
                />
                
                {/* Main circle */}
                <div 
                  className="relative bg-pink-50/80 backdrop-blur-sm rounded-full w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center"
                  style={{
                    border: '2px solid rgba(139,115,85,0.3)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="text-center px-12">
                    <p 
                      className="mb-4"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)',
                        color: '#ff6b9d',
                        fontWeight: 300,
                        lineHeight: 1.9,
                        letterSpacing: '0.02em',
                      }}
                    >
                      감각을 회복하고, 삶의 결을 다시 잇는
                      <br />
                      어른의 감정의 숲
                    </p>
                    <h2 
                      className="mb-4"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                        color: '#333',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      크레용숲 예술리추얼
                    </h2>
                    <p 
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                        color: '#ff6b9d',
                        fontWeight: 300,
                        letterSpacing: '0.1em',
                        fontStyle: 'italic',
                      }}
                    >
                      ADULT ART
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-32" />
      </div>
    </section>
  );
}

// ADULT ART Section 2: Program Description
export function AdultArtSection2() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header: PROGRAM Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 
            className="mb-6"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              color: '#2d5016',
              fontWeight: 500,
              letterSpacing: '0.15em',
            }}
          >
            PROGRAM
          </h3>
          <div className="flex flex-wrap gap-3">
            {['CHILD ART', 'YOUTH ART', 'ADULT ART', 'FOR MOM'].map((tag, i) => (
              <span
                key={i}
                className={`px-5 py-2 rounded-full border-2 ${
                  tag === 'ADULT ART' || tag === 'FOR MOM'
                    ? 'bg-pink-100 border-pink-300 text-pink-600' 
                    : 'border-gray-200 text-gray-400'
                }`}
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left: Main Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <h2
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                color: '#333',
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              감정은 생각보다 훨씬 예술적입니다.
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                '어른은 감정을 설명하기보다 적당히 달아두는 기술이 먼저 늘죠.',
                '그러다 아는 날, 삶이 둔 갠드리까 때도 결이 무뎌졌음 눈이 오듯니다.',
                '그때 필요한 건 "덜어냄"이 아니라,',
                '내 마음의 결을 스케치해보는 용기입니다.',
                '그렇온 때로 마음보다 먼저 신념을 밟게하기도.'
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                    color: '#666',
                    fontWeight: 300,
                    lineHeight: 1.9,
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Highlighted Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-8"
            >
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)',
                  color: '#ff6b9d',
                  fontWeight: 500,
                  lineHeight: 1.8,
                  letterSpacing: '-0.01em',
                }}
              >
                내 삶의 결을 다시 읽고, 나의 세계를 잇는 예술 리추얼입니다.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Pink Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-pink-50 border-2 border-pink-200 rounded-3xl p-12 mb-16"
        >
          <h3 
            className="mb-8"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              color: '#ff6b9d',
              fontWeight: 600,
            }}
          >
            이런 분에게 딱이요
          </h3>
          
          <div className="space-y-6">
            {[
              '오랫만에 나를 위한 시간을 찾고 싶은 분',
              '색과 드로잉을 통해 감정 언어를 배우고 싶은 분',
              '예술 작품을 읽시 내려놓고, 자기감각을 회복하고 싶은 여성',
              '화나의 작업이 아니라 자기서사를 탐색해보고 싶은 분',
              '예술은 어려울까? 걱정보다는 반갑게 그리는 경험을 원하시는 분'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#555',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-pink-100 border-2 border-pink-300 rounded-full hover:bg-pink-200 transition-all duration-300"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              color: '#ff6b9d',
              fontWeight: 500,
            }}
          >
            BLOG 바로가기
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              color: '#666',
              fontWeight: 500,
            }}
          >
            크레용숲 바로가기 버튼
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}