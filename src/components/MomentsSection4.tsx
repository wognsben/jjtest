import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// MOMENTS Section 4: 크레용숲 선언서
export function MomentsSection4() {
  return (
    <section className="relative bg-white pt-[90px] pb-24">
      <div className="max-w-[1180px] mx-auto px-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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
              <svg width="280" height="60" viewBox="0 0 280 60">
                {/* Left star decoration */}
                <text
                  x="15"
                  y="38"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    fill: '#D4A574',
                  }}
                >
                  ✦
                </text>
                
                {/* Ellipse border with gold color */}
                <ellipse
                  cx="140"
                  cy="30"
                  rx="100"
                  ry="24"
                  fill="none"
                  stroke="#D4A574"
                  strokeWidth="2"
                />
                
                {/* Text */}
                <text
                  x="140"
                  y="36"
                  textAnchor="middle"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.5vw, 0.85rem)',
                    fill: '#A66A5A',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                  }}
                >
                  크레용숲 선언서
                </text>
                
                {/* Right star decoration */}
                <text
                  x="255"
                  y="38"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    fill: '#D4A574',
                  }}
                >
                  ✦
                </text>
              </svg>
            </motion.div>

            {/* Declaration Text */}
            <div className="space-y-6 max-w-[34em]" style={{ borderLeft: '2px solid rgba(45, 80, 22, 0.15)', paddingLeft: '1.25rem' }}>
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
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                  }}
                >
                  우리는 어른의 잣대로 작품으로 만들지 않습니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: 0,
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
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                  }}
                >
                  우리는 기술을 가르치기보다
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: 0,
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
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                  }}
                >
                  우리는 비교하지 않습니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: 0,
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
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                  }}
                >
                  우리는 입시 미술을 하지 않습니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                  }}
                >
                  대신 <span style={{ fontWeight: 500 }}>아이가 평생 사용하는</span>
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: 0,
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
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                  }}
                >
                  그림은 결과가 아니라
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: 0,
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
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                  }}
                >
                  크레용숲은
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                  }}
                >
                  <span style={{ fontWeight: 500 }}>아이의 색을 찾고, 마음을 읽고,</span>
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                    color: '#2d5016',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    letterSpacing: 0,
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
                    fontSize: 'clamp(0.85rem, 1.4vw, 0.85rem)',
                    color: '#2d5016',
                    fontWeight: 500,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    borderBottom: '2px solid #2d5016',
                    paddingBottom: '2px',
                  }}
                >
                  여기는 예술로 성장하는 숲입니다.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div 
              className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl"
              style={{
                border: '1px solid rgba(157, 200, 141, 0.2)',
              }}
            >
              <img 
                src={getImagePath('/assets/program/review/crayon annonce.png')}
                alt="크레용숲 선언서"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const src = e.currentTarget.src;
                  if (src.endsWith('.png')) {
                    e.currentTarget.src = getImagePath('/assets/program/review/crayon annonce.PNG');
                  } else if (src.endsWith('.PNG')) {
                    e.currentTarget.src = getImagePath('/assets/program/review/crayon annonce.jpg');
                  }
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}
