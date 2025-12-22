import React from 'react';
import { motion } from 'motion/react';

// MOMENTS Section 1: 성장의 순간들
export function MomentsSection1() {
  // 4개 원형 카드 데이터
  const testimonials = [
    {
      category: '감정 표현',
      quote1: '"말로 표현 못 했던 감정이',
      quote2: '그림으로 전달되더라고요."',
      quote3: '"아이 표정이 더 부드러워졌어요."',
    },
    {
      category: '집중력 향상',
      quote1: '"그림에 30분 이상 몰입하는 걸',
      quote2: '처음 봤어요."',
      quote3: '"집에서도 스스로 색을 고르고',
      quote4: '마음을 펼칩니다."',
    },
    {
      category: '정서 안정',
      quote1: '"아이와의 대화가 더 편안해졌어요."',
      quote2: '"화가 나도 스스로',
      quote3: '그림으로 풀어요."',
    },
    {
      category: '자기 표현',
      quote1: '"자기만의 세계가 생기기 시작했어요."',
      quote2: '"자기표현이 또렷해졌어요."',
    },
  ];

  // 리뷰 카드 (이미지만)
  const reviewCards = Array(10).fill(null);

  return (
    <section className="relative bg-white py-24 md:py-32">
      {/* Top Label */}
      <div className="absolute top-8 left-8 md:left-12 lg:left-24">
        <p
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
            color: '#999',
            fontWeight: 400,
            letterSpacing: '0.2em',
          }}
        >
          MOMENT
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#2d5016',
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            아이와 부모가 함께 발견한 성장의 순간들입니다.
          </h2>
          <div className="space-y-1">
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                color: '#8B7355',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              예술이 마음을 움직일 때 일어나는 변화의 기록이자,
            </p>
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                color: '#8B7355',
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              크레용숲이 만든 고유의 증거입니다.
            </p>
          </div>
        </motion.div>

        {/* 4 Circle Cards - Asymmetric Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              {/* Asymmetric Circle Border (SVG) */}
              <svg
                viewBox="0 0 300 300"
                className="w-full h-auto"
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.06))',
                }}
              >
                {/* Imperfect circle path */}
                <path
                  d="M 150,10 
                     C 220,15 285,75 290,150 
                     C 288,220 225,288 150,290 
                     C 78,287 12,223 10,150 
                     C 13,80 75,12 150,10 Z"
                  fill="white"
                  stroke="#9DC88D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    paintOrder: 'stroke fill',
                  }}
                />

                {/* Text inside circle */}
                <foreignObject x="30" y="30" width="240" height="240">
                  <div className="flex flex-col items-center justify-center h-full px-8 text-center">
                    {/* Category */}
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)',
                        color: '#2d5016',
                        fontWeight: 500,
                      }}
                    >
                      {item.category}
                    </p>

                    {/* Quotes */}
                    <div className="space-y-2">
                      <p
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                          color: '#555',
                          fontWeight: 300,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.quote1}
                        {item.quote2 && (
                          <>
                            <br />
                            {item.quote2}
                          </>
                        )}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: 'clamp(0.8rem, 1vw, 0.95rem)',
                          color: '#555',
                          fontWeight: 300,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.quote3}
                        {item.quote4 && (
                          <>
                            <br />
                            {item.quote4}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Review Cards Section - Pink Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-pink-50/60 rounded-3xl p-12 md:p-16"
        >
          {/* Review Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {reviewCards.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="aspect-[3/4] bg-white rounded-2xl shadow-sm"
                style={{
                  border: '1px solid rgba(255,182,193,0.2)',
                }}
              >
                {/* Empty image placeholder */}
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}