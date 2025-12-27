import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// ADULT ART Section 3: 마음을 그리다
export function AdultArtSection3() {
  return (
    <>
      <style>{`
        .emotion-art-card {
          position: relative;
        }
        .emotion-art-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          border-top: 3px solid #d4a574;
          border-right: 3px solid #d4a574;
          border-top-right-radius: 24px;
          pointer-events: none;
        }
        .emotion-art-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 120px;
          height: 120px;
          border-bottom: 3px solid #d4a574;
          border-left: 3px solid #d4a574;
          border-bottom-left-radius: 24px;
          pointer-events: none;
        }
      `}</style>
      <section className="relative bg-white pt-[90px] pb-24">
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Header: 마음을 그리다 with Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 rounded-3xl overflow-hidden"
          style={{
            padding: '4rem 3rem',
          }}
        >
          {/* Background Image - Flipped horizontally and vertically */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${getImagePath('/assets/program/child/child sec.jpg')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(-1, -1)',
              opacity: 0.25,
            }}
          />
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(255,182,193,0.5) 0%, rgba(245,245,220,0.5) 33%, rgba(200,230,201,0.5) 66%, rgba(255,228,196,0.5) 100%)',
            }}
          />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Title */}
            <div>
              <h2
                className="mb-2"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  color: '#2d5016',
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                마음을 그리다
              </h2>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                  color: '#A66A5A',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                어른의 예술리추얼
              </p>
            </div>

            {/* Right: Description with Highlight */}
            <div>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.1vw, 0.85rem)',
                  color: '#333',
                  fontWeight: 400,
                  lineHeight: 1.65,
                  letterSpacing: 0,
                }}
              >
                일상에서 잃어버린 감각과 감정의 언어를 회복하고,
                <br />
                나만의 색·
                <span
                  style={{
                    background: 'linear-gradient(120deg, rgba(180,230,140,0.6) 0%, rgba(144,238,144,0.6) 100%)',
                    padding: '0.1em 0.3em',
                    borderRadius: '4px',
                  }}
                >
                  패턴·서사를 발견하는 창의성
                </span>
                {' '}회복 프로그램입니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
                color: '#2d5016',
                fontWeight: 600,
              }}
            >
              어떻게 진행되나요?
            </h3>
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                color: '#666',
                fontWeight: 300,
              }}
            >
              일상 공지 후 상시 진행
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Image Area */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={getImagePath('/assets/program/adult.png')}
                alt="어른의 예술리추얼 컬러링"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const src = e.currentTarget.src;
                  if (src.endsWith('.png')) {
                    e.currentTarget.src = getImagePath('/assets/program/adult.PNG');
                  } else if (src.endsWith('.PNG')) {
                    e.currentTarget.src = getImagePath('/assets/program/adult.jpg');
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Right: Info Box + Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            {/* Info Card with Partial Border (Open Frame Style) */}
            <div
              className="emotion-art-card bg-white rounded-3xl p-8 md:p-10 relative"
            >
              <h3
                className="mb-8 text-center"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                  color: '#333',
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                마음을 그리는 예술
                <br />
                <span style={{ fontSize: '0.9em', color: '#666' }}>(Emotion Art)</span>
              </h3>

              <div className="space-y-5">
                {[
                  '감정 리추얼(색 선택·선 흐름정·감정 발상)',
                  '색채필링 / 컬러링북 테라피',
                  '패턴 드로잉 / 자기서사 드로잉',
                  '마음을 붙드는 분위 속의 다이어리'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full mt-2 flex-shrink-0" />
                    <p
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                        color: '#555',
                        fontWeight: 300,
                        lineHeight: 1.65,
                        letterSpacing: 0,
                      }}
                    >
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote Section (Pink) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.1vw, 0.85rem)',
                  color: '#A66A5A',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  letterSpacing: 0,
                  letterSpacing: '0.01em',
                }}
              >
                루틴한 일이 우리의 존재 이유가 아님은 분명하다.
                <br />
                우리가 창조하기 위해 존재한다. 우리는 사랑하기 위해 존재한다.
              </p>
              <p
                className="mt-3"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                  color: '#d4a574',
                  fontWeight: 300,
                  fontStyle: 'italic',
                }}
              >
                - 책 &lt;이토록 멋진 휴식&gt; 리카이푸(1961~)
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
    </>
  );
}
