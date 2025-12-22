import React from 'react';
import { motion } from 'motion/react';

// YOUTH ART Section 1: Hero
export function YouthArtSection1() {
  return (
    <section className="relative min-h-screen bg-white py-24 md:py-32 lg:py-40">
      {/* Section label */}
      <div className="absolute top-8 left-8 md:left-12 lg:left-24">
        <p className="text-xs tracking-[0.15em] text-tertiary uppercase opacity-60">
          YOUTH ART
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Abstract Art Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-3xl overflow-hidden"
          >
            {/* Abstract brush strokes background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-green-100">
              {/* Pink brush stroke */}
              <svg className="absolute top-10 left-10 w-64 h-64 opacity-60" viewBox="0 0 200 200">
                <path
                  d="M20,100 Q50,20 100,50 T180,100"
                  fill="none"
                  stroke="#ff6b9d"
                  strokeWidth="25"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
              {/* Green brush stroke */}
              <svg className="absolute bottom-10 right-10 w-64 h-64 opacity-60" viewBox="0 0 200 200">
                <path
                  d="M20,100 Q80,150 120,100 T180,80"
                  fill="none"
                  stroke="#8fbc88"
                  strokeWidth="30"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
              {/* Abstract shapes */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl" />
              <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-green-200/30 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Right: Pink Circle with Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Hand-drawn circle effect */}
              <div className="absolute inset-0 bg-pink-100 rounded-full blur-xl opacity-50" 
                   style={{ transform: 'scale(1.1)' }} />
              
              {/* Main pink circle */}
              <div className="relative bg-pink-100/90 backdrop-blur-sm rounded-full w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center border-2 border-pink-200/50 shadow-lg">
                <div className="text-center px-12">
                  <p 
                    className="mb-3"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                      color: '#ff6b9d',
                      fontWeight: 300,
                      lineHeight: 1.8,
                      letterSpacing: '0.03em',
                    }}
                  >
                    '나만의 철학 미술관'을 완성하는
                    <br />
                    청소년 사유의 숲
                  </p>
                  <h2 
                    className="mb-3"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                      color: '#333',
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    크레용숲 철학미술관
                  </h2>
                  <p 
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                      color: '#ff6b9d',
                      fontWeight: 300,
                      letterSpacing: '0.15em',
                      fontStyle: 'italic',
                    }}
                  >
                    YOUTH ART
                  </p>
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

// YOUTH ART Section 2: Program Description
export function YouthArtSection2() {
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
              color: '#999',
              fontWeight: 400,
              letterSpacing: '0.1em',
            }}
          >
            PROGRAM
          </h3>
          <div className="flex flex-wrap gap-3">
            {['CHILD ART', 'YOUTH ART', 'ADULT ART', 'MOMENTS'].map((tag, i) => (
              <span
                key={i}
                className={`px-5 py-2 rounded-full border-2 ${
                  tag === 'YOUTH ART' 
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

        {/* Three Big Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24 space-y-8"
        >
          {[
            '"나는 누구일까?"',
            '"나는 어떤 세계를 만들고 싶은 사람일까?"',
            '"왜 내 감정은 이렇게 복잡하고 자꾸 변하는 걸까?"'
          ].map((question, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: '#333',
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              {question}
            </motion.h2>
          ))}
        </motion.div>

        {/* Pink Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
            이런 친구에게 맞아요
          </h3>
          
          <div className="space-y-6">
            {[
              '스스로 생각하고 질문하는 것을 좋아하는 청소년',
              '내 안의 복잡한 감정을 이해하고 표현하고 싶은 친구',
              '예술을 통해 나만의 철학을 만들고 싶은 청소년',
              '단순한 기술이 아닌, 깊이 있는 사유를 원하는 학생',
              '자기 생각을 시각적으로 표현하는 법을 배우고 싶은 친구'
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
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

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: '#666',
              fontWeight: 300,
              lineHeight: 1.9,
            }}
          >
            청소년기는 정체성을 탐구하고 세계관을 형성하는 중요한 시기입니다. 
            철학미술관은 예술을 통해 스스로 질문하고, 생각하고, 표현하는 과정을 통해 
            '나만의 철학 미술관'을 완성해가는 청소년 사유 프로그램입니다.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
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
            크레용숲 블로그 바로가기 →
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}

// YOUTH ART Section 3: Curriculum Structure
export function YouthArtSection3() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 
            className="mb-4"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#333',
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            철학미술관: 나를 이해하는 색채의 방
          </h2>
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: '#ff6b9d',
              fontWeight: 400,
            }}
          >
            청소년 사유예술 프로그램
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Description & Process */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 
                className="mb-4"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                  color: '#333',
                  fontWeight: 600,
                }}
              >
                진행 방식
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                  color: '#666',
                  fontWeight: 300,
                  lineHeight: 1.9,
                }}
              >
                철학미술관은 1년 과정으로 진행되며, 4개의 ROOM으로 구성됩니다. 
                각 ROOM은 3개월씩 진행되며, 감각-감정-상징-세계의 단계를 거치며 
                청소년이 스스로 철학적 사유를 확장해갑니다.
              </p>

              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                    color: '#2d5016',
                    fontWeight: 500,
                    lineHeight: 1.8,
                  }}
                >
                  ✦ 4ROOM 시즌 구조<br />
                  1년 과정 (각 3개월씩)<br />
                  감각 → 감정 → 상징 → 세계
                </p>
              </div>
            </div>

            {/* Hand illustration placeholder */}
            <div className="relative aspect-square max-w-sm mx-auto bg-gray-100 rounded-3xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
              <p 
                className="text-center text-gray-400"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: '0.9rem',
                }}
              >
                손 이미지 영역
              </p>
            </div>
          </motion.div>

          {/* Right: 4ROOM Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* 4ROOM Grid Layout */}
            <div className="space-y-6">
              {/* Row 1: Origin Room */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-green-600 font-medium">1st ROOM</span>
                    <span className="text-xs text-gray-400">• 3개월</span>
                  </div>
                  <h4 
                    className="mb-2"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                      color: '#2d5016',
                      fontWeight: 600,
                    }}
                  >
                    Origin Room
                  </h4>
                  <p className="text-sm text-gray-600">감각의 시작 — 나의 근원을 찾다</p>
                </div>
              </motion.div>

              {/* Row 2: Surface Room + Central Philosophy */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="bg-yellow-50 border-2 border-yellow-300 rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs text-yellow-600 font-medium">2nd ROOM</span>
                      <span className="text-xs text-gray-400">• 3개월</span>
                    </div>
                    <h4 
                      className="mb-2"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                        color: '#d97706',
                        fontWeight: 600,
                      }}
                    >
                      Surface Room
                    </h4>
                    <p className="text-sm text-gray-600">감정의 표면 — 내면의 물결을 보다</p>
                  </div>
                </motion.div>

                {/* Central Philosophy Art */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center justify-center"
                >
                  <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-full w-40 h-40 flex items-center justify-center border-2 border-pink-300 shadow-lg">
                    <div className="text-center">
                      <p
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: '0.75rem',
                          color: '#ff6b9d',
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        Philosophy<br />Art<br />
                        <span style={{ fontSize: '0.65rem', fontWeight: 400 }}>철학적 탐구</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Row 3: Memory Room + Self Room */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs text-blue-600 font-medium">3rd ROOM</span>
                      <span className="text-xs text-gray-400">• 3개월</span>
                    </div>
                    <h4 
                      className="mb-2"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                        color: '#1e40af',
                        fontWeight: 600,
                      }}
                    >
                      Memory Room
                    </h4>
                    <p className="text-sm text-gray-600">상징의 기억 — 의미를 새기다</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="bg-purple-50 border-2 border-purple-300 rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs text-purple-600 font-medium">4th ROOM</span>
                      <span className="text-xs text-gray-400">• 3개월</span>
                    </div>
                    <h4 
                      className="mb-2"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                        color: '#7c3aed',
                        fontWeight: 600,
                      }}
                    >
                      Self Room
                    </h4>
                    <p className="text-sm text-gray-600">나의 세계 — 철학을 완성하다</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center mt-12"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                color: '#999',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              * 각 ROOM은 3개월 과정으로 진행되며,<br />
              순차적으로 청소년의 철학적 사유를 확장합니다.
            </motion.p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}