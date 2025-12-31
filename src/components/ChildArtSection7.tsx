import React from 'react';
import { motion } from 'motion/react';

// CHILD ART Section 7: Curriculum Details - Premium Editorial Design
export function ChildArtSection7() {
  const skills = [
    '상상과 구상',
    '표현: 의미찾기',
    '관찰·자세히 보기',
    '성찰: 질문과 성찰',
    '실수하기',
    '발견하기',
  ];

  // 1학기 커리큘럼 데이터
  const semester1 = [
    {
      month: '3월',
      title: '마음의 의상실',
      quote: '"마음에 오늘 어떤 옷을 입힐까?"',
      desc: "감정 패턴 · 색의 기분 · 감정의 층을 '의상'으로 상징화",
    },
    {
      month: '4월',
      title: '마음 우체국',
      quote: '"속마음을 편지 대신 색으로 보낸다면?"',
      desc: '감정–색 연결 / 심리적 거리 표현 / 감정 카드를 주고받는 활동',
    },
    {
      month: '5월',
      title: '가족 감정 아카이브',
      quote: '"우리 가족의 색은 어떤 빛일까?"',
      desc: '가족 감정 지도 / 가족 상징 제작 / 부모 참여형 워크',
    },
    {
      month: '6월',
      title: '아트키친 – 마음을 조리하는 부엌',
      quote: '"감정은 섞이고 끓고 식기도 해요."',
      desc: '색 혼합 실험 / 감정의 온도 / 텍스처 레시피',
    },
    {
      month: '7월',
      title: '감정 테라리움',
      quote: '"오늘의 기분을 유리병에 키워볼까?"',
      desc: '감정을 생태·성장 개념으로 다룸',
    },
  ];

  // 2학기 커리큘럼 데이터
  const semester2 = [
    {
      month: '8월',
      title: '감정 지도',
      quote: '"내 마음은 지금 어디쯤일까?"',
      desc: '감정역 / 감정 거리 / 마음 탐험·표현',
    },
    {
      month: '9월',
      title: '감정 직물 정원',
      quote: '"감정은 반복될 때 결이 됩니다."',
      desc: '선·결·패턴 작업 → 자기 성향과 감정 리듬 시각화',
    },
    {
      month: '10월',
      title: '감정 미술관',
      quote: '"내 감정이 작품이 되는 순간"',
      desc: '감정–색–형태의 고도화 / 자기만의 상징 제작',
    },
    {
      month: '11월',
      title: '감정 표본 박물관',
      quote: '"1년의 감정을 보존하는 과학적 예술 실험"',
      desc: '감정 포트폴리오 / 감정 표본 채집 / 기억의 색 기록',
    },
    {
      month: '12월',
      title: '마음 서랍',
      quote: '"마음의 조각들을 한 서랍에 모아두는 시간"',
      desc: '1년의 감정 기록 → 개인 아카이브북 완성',
    },
  ];

  return (
    <>
      <style>{`
        .curriculum-card {
          position: relative;
          background: #FDF8F6;
          border-radius: 48px;
          padding: 48px 48px 48px 80px;
        }
        
        @media (max-width: 640px) {
          .curriculum-card {
            padding: 28px 20px 28px 32px;
            border-radius: 32px;
          }
        }
        
        .curriculum-card::before {
          content: "";
          position: absolute;
          top: 16px;
          right: 16px;
          width: 100px;
          height: 100px;
          border-top: 3px solid #B98365;
          border-right: 3px solid #B98365;
          border-top-right-radius: 40px;
          pointer-events: none;
        }
        
        @media (max-width: 640px) {
          .curriculum-card::before {
            width: 60px;
            height: 60px;
            top: 12px;
            right: 12px;
          }
        }
        
        .curriculum-card::after {
          content: "";
          position: absolute;
          bottom: 16px;
          left: 16px;
          width: 120px;
          height: 120px;
          border-bottom: 3px solid #B98365;
          border-left: 3px solid #B98365;
          border-bottom-left-radius: 40px;
          pointer-events: none;
        }
        
        @media (max-width: 640px) {
          .curriculum-card::after {
            width: 70px;
            height: 70px;
            bottom: 12px;
            left: 12px;
          }
        }
        
        .special-card {
          position: relative;
          background: #F5FAF7;
          border-radius: 36px;
          padding: 32px 32px 32px 72px;
        }
        
        @media (max-width: 640px) {
          .special-card {
            padding: 24px 20px 24px 32px;
            border-radius: 24px;
          }
        }
        
        .special-card::before {
          content: "";
          position: absolute;
          top: 12px;
          right: 12px;
          width: 80px;
          height: 80px;
          border-top: 3px solid #6F8F7A;
          border-right: 3px solid #6F8F7A;
          border-top-right-radius: 28px;
          pointer-events: none;
        }
        
        @media (max-width: 640px) {
          .special-card::before {
            width: 50px;
            height: 50px;
            top: 8px;
            right: 8px;
          }
        }
        
        .special-card::after {
          content: "";
          position: absolute;
          bottom: 12px;
          left: 12px;
          width: 100px;
          height: 100px;
          border-bottom: 3px solid #6F8F7A;
          border-left: 3px solid #6F8F7A;
          border-bottom-left-radius: 28px;
          pointer-events: none;
        }
        
        @media (max-width: 640px) {
          .special-card::after {
            width: 60px;
            height: 60px;
            bottom: 8px;
            left: 8px;
          }
        }
        
        .skill-card {
          background: #FAFAFA;
          border: 1.5px solid #E8E8E8;
          border-radius: 24px;
          padding: 1.5rem 1.25rem;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: default;
        }
        
        @media (max-width: 640px) {
          .skill-card {
            padding: 1rem 0.75rem;
            border-radius: 16px;
          }
        }
        
        .skill-card:hover {
          background: #FDF8F6;
          border-color: #B98365;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(185, 131, 101, 0.08);
        }
        
        .month-line {
          font-family: 'Noto Serif KR', serif;
          font-size: clamp(0.85rem, 1.3vw, 0.85rem);
          color: #6F8F7A;
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        .desc-line {
          font-family: 'Noto Serif KR', serif;
          font-size: clamp(0.85rem, 1.1vw, 0.85rem);
          color: #888;
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 5px;
        }
        
        @media (max-width: 640px) {
          .desc-line {
            font-size: 0.85rem;
            line-height: 1.8;
            margin-bottom: 5px;
            letter-spacing: 0.01em;
          }
        }
        
        .desc-line:last-child {
          margin-bottom: 0;
        }
      `}</style>
      
      <section className="relative bg-white pt-24 pb-24" style={{ paddingTop: '96px' }}>
        <div className="max-w-[1180px] mx-auto px-0">
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
                lineHeight: 1.5,
                letterSpacing: 0,
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
                lineHeight: 1.5,
                letterSpacing: 0,
                fontWeight: 300,
                marginTop: '0.5rem',
              }}
            >
              자기 감정 언어를 배우고 자기 세계를 해석하는 눈을 확장합니다.
            </p>
          </motion.div>

          {/* ============ TOP SECTION: Skills + Special ============ */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Left: Skill Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-3 sm:gap-5"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="skill-card"
                >
                  <p 
                    className="text-center"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
                      color: '#444',
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    {skill}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: 방학 스페셜 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Label Badge - PC: 카드 왼쪽 바깥 */}
              <div className="hidden md:block absolute -left-4 top-6 z-10">
                <div 
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
                  style={{
                    boxShadow: '0 8px 24px rgba(111, 143, 122, 0.15)',
                    border: '3px solid #6F8F7A',
                  }}
                >
                  <p 
                    className="text-center px-1"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#6F8F7A',
                      fontWeight: 600,
                      lineHeight: 1.3,
                    }}
                  >
                    방학<br />스페셜
                  </p>
                </div>
              </div>

              {/* Content Card - Open Frame */}
              <div className="special-card">
                {/* Label Badge - 모바일: 카드 내부 상단 */}
                <div className="md:hidden mb-4">
                  <div 
                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                    style={{
                      boxShadow: '0 8px 24px rgba(111, 143, 122, 0.15)',
                      border: '3px solid #6F8F7A',
                    }}
                  >
                    <p 
                      className="text-center px-1"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '0.85rem',
                        color: '#6F8F7A',
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      방학<br />스페셜
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                      color: '#6F8F7A',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      marginBottom: '1.25rem',
                    }}
                  >
                    예비초등을 위한 마음드로잉
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                      color: '#888',
                      lineHeight: 1.5,
                      letterSpacing: 0,
                      fontWeight: 300,
                    }}
                  >
                    새 학년을 앞둔 아이들이 감정과 색을 통해 자기 표현의 첫걸음을 내딛는 시간
                  </p>
                  <div className="pt-4" style={{ borderTop: '1px solid rgba(111, 143, 122, 0.2)' }}>
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                        color: '#6F8F7A',
                        fontWeight: 500,
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        marginBottom: '1.25rem',
                      }}
                    >
                      초등 마음의 실험실  : 이상해도 되는 미술
                    </p>
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        color: '#888',
                        lineHeight: 1.5,
                        letterSpacing: 0,
                        fontWeight: 300,
                      }}
                    >
                      정답 없이 탐색하고, 실수로 발견하는 예술 실험
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ============ BOTTOM SECTION: 1학기 + 2학기 ============ */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
            {/* 1학기 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Label Badge - PC: 카드 왼쪽 바깥 */}
              <div className="hidden md:block absolute -left-4 top-8 z-10">
                <div 
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
                  style={{
                    boxShadow: '0 8px 24px rgba(111, 143, 122, 0.15)',
                    border: '3px solid #6F8F7A',
                  }}
                >
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: '0.9rem',
                      color: '#6F8F7A',
                      fontWeight: 600,
                    }}
                  >
                    1학기
                  </p>
                </div>
              </div>

              {/* Content Card - Open Frame */}
              <div className="curriculum-card">
                {/* Label Badge - 모바일: 카드 내부 상단 */}
                <div className="md:hidden mb-4">
                  <div 
                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                    style={{
                      boxShadow: '0 8px 24px rgba(111, 143, 122, 0.15)',
                      border: '3px solid #6F8F7A',
                    }}
                  >
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '0.75rem',
                        color: '#6F8F7A',
                        fontWeight: 600,
                      }}
                    >
                      1학기
                    </p>
                  </div>
                </div>
                <div className="space-y-0">
                  {semester1.map((item, idx) => (
                    <div key={idx}>
                      <p className="month-line">
                        {item.month} · {item.title} {item.quote}
                      </p>
                      <p className="desc-line" style={{ marginBottom: '5px' }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 2학기 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Label Badge - PC: 카드 왼쪽 바깥 */}
              <div className="hidden md:block absolute -left-4 top-8 z-10">
                <div 
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
                  style={{
                    boxShadow: '0 8px 24px rgba(111, 143, 122, 0.15)',
                    border: '3px solid #6F8F7A',
                  }}
                >
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: '0.9rem',
                      color: '#6F8F7A',
                      fontWeight: 600,
                    }}
                  >
                    2학기
                  </p>
                </div>
              </div>

              {/* Content Card - Open Frame */}
              <div className="curriculum-card">
                {/* Label Badge - 모바일: 카드 내부 상단 */}
                <div className="md:hidden mb-4">
                  <div 
                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                    style={{
                      boxShadow: '0 8px 24px rgba(111, 143, 122, 0.15)',
                      border: '3px solid #6F8F7A',
                    }}
                  >
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '0.75rem',
                        color: '#6F8F7A',
                        fontWeight: 600,
                      }}
                    >
                      2학기
                    </p>
                  </div>
                </div>
                <div className="space-y-0">
                  {semester2.map((item, idx) => (
                    <div key={idx}>
                      <p className="month-line">
                        {item.month} · {item.title} {item.quote}
                      </p>
                      <p className="desc-line" style={{ marginBottom: '5px' }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
