import React from 'react';
import { motion } from 'motion/react';

// ADULT ART Section 4: FOR MOM 프로그램
export function AdultArtSection4() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
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
            아이 마음을 잘 돌보고 싶은데,
            <br />
            정작 내 마음은 어디쯤 있을까요?
          </h2>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p
            className="mb-2"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
              color: '#A66A5A',
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
              color: '#A66A5A',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            먼저 자신의 마음을 돌보는 엄마를 위한 예술 시간
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 max-w-3xl space-y-4"
        >
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
            가장 마지막으로 자기 마음을 돌보는 사람이기도 하지요.
            <br />
            엄마 자신의 마음에 물을 주고, 숨을 고르고,
            <br />
            다시 감각을 되찾는 시간입니다.
            <br />
            색으로 지금의 마음을 살피고, 선으로 쌓인 감정을 천천히 풀어내며,
            <br />
            그림과 기록을 통해 <span style={{ fontWeight: 500 }}>"나는 지금 어떤 상태일까?"</span>를 스스로 묻습니다.
            <br />
            가정의 정서는 그렇게, 조용히 다시 순환하기 시작합니다.
            <br />
            완벽한 엄마가 되기보다는 대신 엄마가 자기 마음과 다시 연결되는 길을 함께 걷습니다.
          </p>
        </motion.div>

        {/* Info Box: 우리는 어떤 엄마들을 기다립니다 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mb-16"
          style={{
            background: '#FADFDB',
            borderRadius: '32px',
            padding: '2.5rem 3rem',
          }}
        >
          <span
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: '1rem',
              fontWeight: 600,
              color: '#2F6B4F',
              marginBottom: '1.5rem',
              display: 'inline-block',
            }}
          >
            우리는 이런 엄마들을 기다립니다
          </span>
          <ul className="space-y-2 mt-4">
            {[
              '무언가를 더 배우기보다 잠시 내려놓고 싶은 엄마',
              '엄마라는 역할 뒤에 가려진 나를 다시 느끼고 싶은 사람',
              '지금 당장 아웃풋은 없어도 삶이 조금 더 아름다워지길 바라는 사람'
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: '0.95rem',
                  lineHeight: 2,
                  color: '#A66A5A',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quote: 미스 럼피우스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
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
            <span style={{ fontWeight: 500, color: '#333' }}>『미스 럼피우스』</span>가 그랬듯, 우리는 세상을 바꾸지 않습니다
            <br />
            다만 각자의 삶에 작은 아름다움이 자라나길 바랄 뿐입니다.
          </p>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
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

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}
