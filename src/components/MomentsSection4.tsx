import React from 'react';
import { motion } from 'motion/react';

// MOMENTS Section 4: 크레용숲 선언서
export function MomentsSection4() {
  return (
    <section className="relative bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header Label - Orange Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <svg width="180" height="50" viewBox="0 0 180 50">
                {/* Imperfect ellipse */}
                <ellipse
                  cx="90"
                  cy="25"
                  rx="85"
                  ry="20"
                  fill="none"
                  stroke="#FF8C42"
                  strokeWidth="2"
                />
                <text
                  x="90"
                  y="30"
                  textAnchor="middle"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: '14px',
                    fill: '#FF8C42',
                    fontWeight: 500,
                  }}
                >
                  크레용숲 선언서
                </text>
              </svg>
            </motion.div>

            {/* Declaration Text */}
            <div className="space-y-6">
              {/* 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  우리는 어른의 잣대로 작품으로 만들지 않습니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  우리는 <span style={{ fontWeight: 500 }}>아이의 결을 발견</span>합니다.
                </p>
              </motion.div>

              {/* 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  우리는 기술을 가르치기보다
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ fontWeight: 500 }}>아이 안의 감정 언어를</span> 깨워줍니다.
                </p>
              </motion.div>

              {/* 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  우리는 비교하지 않습니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  대신 <span style={{ fontWeight: 500 }}>아이가 가진 고유한 속도를</span> 지켜줍니다.
                </p>
              </motion.div>

              {/* 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  우리는 완시 미술을 하지 않습니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  대신 <span style={{ fontWeight: 500 }}>아이가 평생 사용하는</span>
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ fontWeight: 500 }}>정서력·표현력·몰입력을</span> 키웁니다.
                </p>
              </motion.div>

              {/* 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  그림은 결과가 아니라
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ fontWeight: 500 }}>아이 마음의 기록</span>이라고 믿습니다.
                </p>
              </motion.div>

              {/* 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  크레용숲은
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ fontWeight: 500 }}>아이의 색을 찾고, 마음을 읽고,</span>
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ fontWeight: 500 }}>자기다움이 자라는 시간을</span> 선물합니다.
                </p>
              </motion.div>

              {/* 7 - Final Statement with Underline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-4"
              >
                <p
                  className="inline-block"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                    color: '#2d5016',
                    fontWeight: 500,
                    lineHeight: 1.8,
                    borderBottom: '2px solid #2d5016',
                    paddingBottom: '2px',
                  }}
                >
                  여기는 예술로 성장하는 숲입니다.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Image placeholder - will be replaced with actual image */}
            <div 
              className="aspect-[3/4] rounded-3xl bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50 shadow-xl"
              style={{
                border: '1px solid rgba(157, 200, 141, 0.2)',
              }}
            >
              {/* You can add the outdoor painting image here:
              <img 
                src={outdoorPaintingImage}
                alt="아이가 야외에서 그림을 그리는 모습"
                className="w-full h-full object-cover rounded-3xl"
              />
              */}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}
