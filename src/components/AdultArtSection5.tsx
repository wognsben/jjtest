import React from 'react';
import { motion } from 'motion/react';

// ADULT ART Section 5: 엄마는 크레용 정원사
export function AdultArtSection5() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header: 엄마는 크레용 정원사 with Pastel Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,182,193,0.25) 0%, rgba(200,230,201,0.25) 50%, rgba(255,228,196,0.25) 100%)',
            padding: '4rem 3rem',
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Title */}
            <div>
              <h2
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  color: '#2d5016',
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                엄마는 크레용 정원사
              </h2>
            </div>

            {/* Right: Description */}
            <div>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.25vw, 1.1rem)',
                  color: '#333',
                  fontWeight: 400,
                  lineHeight: 1.8,
                }}
              >
                크레용숲 정원사는 엄마들이 <span style={{ fontWeight: 600, color: '#2d5016' }}>'다시 나로 살아나도록'</span>
                <br />
                씨앗을 나누는 웰니스 커뮤니티
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
            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
              <p
                className="text-center text-gray-400"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: '0.95rem',
                }}
              >
                엄마와 아이 그림 이미지 영역
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            {/* Info Card with Border */}
            <div
              className="bg-white border-2 rounded-3xl p-8 md:p-10"
              style={{
                borderColor: '#d4a574',
              }}
            >
              <h3
                className="mb-6 text-center"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                  color: '#333',
                  fontWeight: 600,
                }}
              >
                엄마는 크레용정원사
              </h3>
            </div>

            {/* Green Section: 변화 */}
            <div className="space-y-4">
              <h4
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                  color: '#2d5016',
                  fontWeight: 600,
                }}
              >
                이 정원에서 일어나는 변화
              </h4>

              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  아이의 변화는 초점입니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  감자기 인생이 바뀌진 않아도 괜찮고
                  <br />
                  눈에 띄는 성장이 없어도 괜찮습니다
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  다만 아는 날 문득,
                  <br />
                  아이를 대하는 태도가 조금 부드러워지고
                  <br />
                  나를 바라보는 시선이 덜 날카로워지고
                  <br />
                  <span style={{ fontWeight: 500, color: '#2d5016' }}>
                    "나는 괜찮은 사람이었지"
                  </span>
                  라는 생각이 스며듭니다.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  그 정도로 충분합니다.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}
