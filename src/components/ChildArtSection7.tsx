import React from 'react';
import { motion } from 'motion/react';

// CHILD ART Section 7: Curriculum Details
export function ChildArtSection7() {
  const skills = [
    '상상과 구상',
    '표현: 의미찾기',
    '관찰·자세히 보기',
    '성찰: 질문과 성찰',
    '실수하기',
    '발견하기',
  ];

  return (
    <section className="relative min-h-screen bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: '#d97878',
              lineHeight: 1.9,
              fontWeight: 400,
            }}
          >
            스토리텔링으로 그리고, 읽고, 쓰며
          </p>
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: '#666',
              lineHeight: 1.9,
              fontWeight: 300,
              marginTop: '0.5rem',
            }}
          >
            자기 감정 언어를 배우고 자기 세계를 해석하는 눈을 확장합니다.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side: Semester Boxes */}
          <div className="space-y-12">
            {/* 1학기 Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Label Badge */}
              <div className="absolute -left-4 top-6 z-10">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-brown-300 flex items-center justify-center shadow-lg">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: '0.9rem',
                      color: '#8b6f47',
                      fontWeight: 600,
                    }}
                  >
                    1학기
                  </p>
                </div>
              </div>

              {/* Content Box */}
              <div className="bg-pink-50 border-4 border-brown-300 rounded-[3rem] p-8 md:p-10 pl-16 md:pl-20">
                <div className="space-y-2">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#ff6b9d', fontWeight: 500 }}>3월</span> · 마음의 여정상 "마음에 오솔 사는 내 친구가 알고?"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    강정 패턴 · 색의 기본 · 감정의 움직 '타인'으로 상정하기
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#ff6b9d', fontWeight: 500 }}>4월</span> 마중 수업 : "속마음을 담아 대신 색으로 보내볼까?"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    감정–색·연결 / 심리색 기법·표현 / 감정 카드로 수업하는 활동
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#ff6b9d', fontWeight: 500 }}>5월</span> 기후 감정 아카이브 "우리 가족의 색은 어떤 말일까?"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    가족 관찰 서도 / 가족 상징 색기 / 무드 감3페 북감
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#ff6b9d', fontWeight: 500 }}>6월</span> 어토그기감 · 마음을 조ㄴ하는 부엌 "강심은 버이고 팔고 씨기도 해요."
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    색 혼합 성장 / 강정의 오드 / 패스처 레시피
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#ff6b9d', fontWeight: 500 }}>7월</span> 감정 테책화의블 "선페체 기발을 응련애에 커뻐내까?"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    감정을 색에 쌓장 기법으로 다들
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2학기 Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Label Badge */}
              <div className="absolute -left-4 top-6 z-10">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-brown-300 flex items-center justify-center shadow-lg">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: '0.9rem',
                      color: '#8b6f47',
                      fontWeight: 600,
                    }}
                  >
                    2학기
                  </p>
                </div>
              </div>

              {/* Content Box */}
              <div className="bg-pink-50 border-4 border-brown-300 rounded-[3rem] p-8 md:p-10 pl-16 md:pl-20">
                <div className="space-y-2">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#8fbc88', fontWeight: 500 }}>8월</span> 감정 지도 "내 마음속 차곡 여디틀까?"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    감정색 / 경겨 기억 / 마을 담화·포석
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#8fbc88', fontWeight: 500 }}>9월</span> 감정 밤을 어구멍 "너요은 믿메멀스 비느다"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    안 될 내든 색에 → 자기 성격과 감싸 디뤄을 시각화
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#8fbc88', fontWeight: 500 }}>10월</span> 감정 마을촌 "내 감정이 마을에 산는 준ᄃᄋ"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    감정–색–경험의 고도감 / 차거리의 상징 색기
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#8fbc88', fontWeight: 500 }}>11월</span> 감정 트스 맹류딴 "나년의 감정을 보관하는 과제적 예술 성방"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    감싱 표독페미2 / 감정 표돈 외국 / 거에억 색 기록
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#8fbc88', fontWeight: 500 }}>12월</span> 미중 서뮤 "마음의 국자불을 만 시돈애로 모아가는 서2"
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    감싱 표독 박스 → 개인 아카이브북 완성
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ color: '#8fbc88', fontWeight: 500 }}>1년간</span> 감정 기능 → 개인 아카이브박 완성
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="space-y-12">
            {/* Top: 6 Skill Buttons in Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {skills.map((skill, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-3 border-gray-300 rounded-[2rem] px-6 py-8 hover:border-pink-300 hover:bg-pink-50/30 transition-all duration-300"
                >
                  <p 
                    className="text-center"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                      color: '#333',
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {skill}
                  </p>
                </motion.button>
              ))}
            </motion.div>

            {/* Bottom: 방학스페셜 Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Label Badge */}
              <div className="absolute -left-4 top-6 z-10">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-green-400 flex items-center justify-center shadow-lg">
                  <p 
                    className="text-center px-2"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: '0.8rem',
                      color: '#8fbc88',
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    방학<br />스페셜
                  </p>
                </div>
              </div>

              {/* Content Box */}
              <div className="bg-pink-50 border-4 border-brown-300 rounded-[3rem] p-8 md:p-10 pl-20 md:pl-24">
                <div className="space-y-3">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    • 애니포토숍을 위한 마음드문일
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                      color: '#666',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    • 초등 마음일 성별뢰 : 어샀에도 되는 마을
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
