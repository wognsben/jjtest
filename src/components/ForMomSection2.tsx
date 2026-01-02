import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// FOR MOM Section 2: 엄마는 크레용 정원사
export function ForMomSection2() {
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

        /* 모바일에서 배너 패딩 조정 */
        @media (max-width: 1023px) {
          .for-mom-header-banner {
            padding-top: 24px !important;
            padding-bottom: 24px !important;
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
        }
      `}</style>
    <section className="relative bg-white pt-24 pb-24" style={{ paddingTop: '96px' }}>
      <div className="max-w-[1180px] mx-auto px-0">
        {/* 시각용 상단 스페이서 - absolute overlay 구조로 인한 시각적 여백 보장 */}
        <div aria-hidden="true" className="h-24" />

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 rounded-3xl overflow-hidden for-mom-header-banner"
          style={{ padding: '4rem 3rem' }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${getImagePath('/assets/program/child/child sec.jpg')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              transform: 'scaleY(-1)',
              opacity: 0.25,
            }}
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 182, 193, 0.25) 0%, rgba(200, 230, 201, 0.25) 50%, rgba(255, 228, 196, 0.25) 100%)',
            }}
          />
          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                  color: '#2d5016',
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                엄마는 크레용 정원사
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.25vw, 0.85rem)',
                  color: '#333',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                }}
              >
                크레용숲 정원사는 엄마들이 <span style={{ fontWeight: 600, color: '#2d5016' }}>'다시 나로 살아나도록'</span>
                <br className="md:hidden" />
                <br className="hidden md:block" />
                씨앗을 나누는 <span
                  style={{
                    textDecoration: 'underline',
                    textDecorationColor: '#8FBC88',
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '3px',
                    boxDecorationBreak: 'clone',
                  }}
                >
                  웰니스 커뮤니티
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Schedule Info */}
        <div className="mb-16">
          <motion.div
            className="for-mom-schedule-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 1.3vw, 1.2rem)',
                color: '#2d5016',
                fontWeight: 600,
              }}
            >
              어떻게 진행되나요?
            </h3>
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 1.1vw, 0.85rem)',
                color: '#666',
                fontWeight: 300,
              }}
            >
              일정 공지 후 상시 진행
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url("${getImagePath('/assets/program/mom drawing.png')}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Card */}
            <div className="emotion-art-card bg-white rounded-3xl p-8 md:p-10 relative">
              <h3
                className="text-center"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                  color: '#333',
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                엄마는 크레용정원사
              </h3>
            </div>

            {/* Changes Section */}
            <div className="space-y-4 for-mom-changes-section">
              <h4
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.35vw, 1.2rem)',
                  color: '#2d5016',
                  fontWeight: 600,
                }}
              >
                이 정원에서 일어나는 변화
              </h4>
              <div className="for-mom-changes-paragraphs">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: '0.75rem',
                  }}
                >
                  이곳의 변화는 조용합니다.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: '0.75rem',
                  }}
                >
                  갑자기 인생이 바뀌지 않아도 괜찮고
                  <br />
                  눈에 띄는 성장이 없어도 괜찮습니다
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: '0.75rem',
                  }}
                >
                  다만 어느 날 문득,
                  <br />
                  아이를 대하는 태도가 조금 부드러워지고
                  <br />
                  나를 바라보는 시선이 덜 날카로워지고
                  <br />
                  <span style={{ fontWeight: 500, color: '#2d5016' }}>"나도 괜찮은 사람이었지"</span>라는 생각이 스칩니다
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)',
                    color: '#333',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    marginBottom: 0,
                  }}
                >
                  그 정도면 충분합니다.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
    </>
  );
}

