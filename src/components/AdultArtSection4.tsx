import React from 'react';
import { motion } from 'motion/react';

// ADULT ART Section 4: FOR MOM 프로그램
export function AdultArtSection4() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Program Tags */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            <span
              className="px-5 py-2 rounded-full border-2 border-gray-200 text-gray-400"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                fontWeight: 500,
              }}
            >
              CHILD ART
            </span>
            <span
              className="px-5 py-2 rounded-full border-2 border-gray-200 text-gray-400"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                fontWeight: 500,
              }}
            >
              YOUTH ART
            </span>
            <span
              className="px-5 py-2 rounded-full border-2 border-gray-200 text-gray-400"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                fontWeight: 500,
              }}
            >
              ADULT ART
            </span>
            <span
              className="px-5 py-2 rounded-full border-2 bg-pink-100 border-pink-300 text-pink-600"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                fontWeight: 500,
              }}
            >
              FOR MOM
            </span>
          </div>
        </motion.div>

        {/* Main Grid: Left Question + Right Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Big Question */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <h2
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: '#2d5016',
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              아이 마음을 잘 돌보고 싶은데,
              <br />
              정작 내 마음은 어디쯤 있을까요?
            </h2>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Header */}
            <div>
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                  color: '#ff6b9d',
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                아이의 마음을 키우기 전에,
              </p>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                  color: '#ff6b9d',
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                먼저 자신의 마음을 돌보는 엄마를 위한 예술 시간
              </p>
            </div>

            {/* Main Description */}
            <div className="space-y-4">
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                  color: '#333',
                  fontWeight: 300,
                  lineHeight: 1.9,
                }}
              >
                엄마는 아이의 감정을 가장 가까이에서 바라보는 사람입니다.
                <br />
                가장 따지덜로운 자기 마음을 돌보는 사람이기도 하지요.
                <br />
                엄마 자신의 마음에 물을 주고, 솥을 고르고,
                <br />
                다시 감싸를 덮어도 사람입니다.
              </p>

              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                  color: '#333',
                  fontWeight: 300,
                  lineHeight: 1.9,
                }}
              >
                색으로 지금의 마음을 살피고, 선으로 쌓인 감성을 천천히 풀어내며,
                <br />
                그림의 기록을 통해 <span style={{ fontWeight: 500 }}>"나는 지금 어떤 상태일까?"</span>를 스스로 듬니다.
                <br />
                가장의 싱서는 그렇게, 조용히 다시 순환커가 사킵니다.
              </p>

              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                  color: '#333',
                  fontWeight: 300,
                  lineHeight: 1.9,
                }}
              >
                완벽한 엄마가 되기보다는
                <br />
                대신 엄마가 자기 마음과 다시 연결되는 간을 갖게 됩니다.
              </p>
            </div>

            {/* Pink Box: 우리는 어떤 엄마들을 기다립니다 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-pink-50/80 border border-pink-200 rounded-2xl p-8 space-y-3"
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.25vw, 1.1rem)',
                  color: '#2d5016',
                  fontWeight: 600,
                }}
              >
                우리는 어떤 엄마들을 기다립니다
              </h3>

              <div className="space-y-2">
                {[
                  '늘상가를 더 매우기보다 잠시 내려놓고 싶은 엄마',
                  '엄마라는 역할 뒤에 자리잡은 나를 다시 느끼고 싶은 사람',
                  '지금 당장 아주조은 강아도 실어 조금 더 어렵더어있지 바라는 사람'
                ].map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.05vw, 0.95rem)',
                      color: '#555',
                      fontWeight: 300,
                      lineHeight: 1.8,
                    }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Quote: 미스 콤피우스 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                  color: '#666',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                <span style={{ fontWeight: 500, color: '#333' }}>"미스 콤피우스"</span> 가 그랬듯, 우리는 세상을 바꾸지 않습니다
                <br />
                다만 각자의 실에 작은 어둠터움이 자라나길 바랄 뿐입니다.
              </p>
            </motion.div>

            {/* Final Message (Green) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8 border-t border-gray-200"
            >
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                  color: '#2d5016',
                  fontWeight: 500,
                  lineHeight: 1.7,
                }}
              >
                엄마의 마음이 회복되면, 아이의 마음도 투명해집니다.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}