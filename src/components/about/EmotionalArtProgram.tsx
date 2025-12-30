import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../../utils/imageUtils';

const stages = [
  {
    id: 1,
    number: '①',
    title: '클래스 전',
    subtitle: '감정·성향을 먼저 읽습니다',
    description: '오늘의 감정 상태를 색으로 표현하는 감정카드 기록\n\n유형에 따라 필요한 안정 루틴 체크\n\n또한 주제 인지를 돕는 짧은 오디오·이미지 프리세션 제공\n\n➡ 수업에 들어가기 전, 감정·주의력·안정도를 먼저 파악합니다',
    color: '#FFB6C1',
  },
  {
    id: 2,
    number: '②',
    title: '클래스 중',
    subtitle: '감정 표현과 물질 경험을 설계합니다',
    description: '작품의 색 선택, 선의 변화, 몰입 흐름을 실시간 관찰\n\n성향·정서 패턴 기록\n\n작품 속 감정·세계관을 발견해주는 스토리 코칭\n\n➡ 그림이 아니라 \'창조성\'이 수업의 중심이 됩니다.',
    color: '#8FBC88',
  },
  {
    id: 3,
    number: '③',
    title: '클래스 후',
    subtitle: '매일 성장 기록으로 이어집니다',
    description: '수업 종료 후, 작품과 감정의 연결을 한 줄로 남기는 컬러 성장차트\n\n색–감정–행동 패턴을 누적 기록, 부모에게 전달되는 오늘의 마음 메모\n\n모아진 기록은 6개월 단위로 어린이 성장 리포트로 완성\n\n➡ 미술 시간이 끝나도, 아이의 감정 생태는 계속 성장합니다.',
    color: '#A67C52',
  },
];

export default function EmotionalArtProgram() {
  return (
    <>
      <hr className="section-divider" />
      <section 
        id="section-emotional-art"
        className="relative py-32 md:py-48 lg:py-64 overflow-hidden bg-white"
      >
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-accent-green mb-4">
            크레용숲 수업의 중심: 감정 예술 코칭
            </h2>
            <p 
              className="text-brown-700 leading-relaxed max-w-6xl"
              style={{
                fontSize: 'clamp(0.85rem, 1.5vw, 0.85rem)',
              }}
            >
              <span style={{ color: '#bb8162', fontWeight: 600 }}>감각 기반 미술기법</span>과{' '}
              <span style={{ color: '#bb8162', fontWeight: 600 }}>색채심리</span>를 결합해{' '}
              감정·성향·물질 변화를 '기록'하고{' '}
              <span style={{ color: '#bb8162', fontWeight: 600 }}>창조적으로 '해석'</span>합니다.
            </p>
          </motion.div>
          
          {/* Main Grid - 3 columns with equal height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col"
              >
                {/* Premium SVG Clip Image */}
                <div className="relative aspect-[4/3] mb-6 flex-shrink-0">
                  {/* SVG Definitions (종이 울림 + clipPath) */}
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      {/* 비대칭 clipPath (종이 느낌, 더 둥글게) */}
                      <clipPath id={`paperClip${stage.id}`} clipPathUnits="objectBoundingBox">
                        <path
                          d="
                            M0.05,0.08
                            Q0.5,0.02 0.95,0.08
                            Q0.98,0.5 0.95,0.92
                            Q0.5,0.98 0.05,0.92
                            Q0.02,0.5 0.05,0.08
                            Z
                          "
                        />
                      </clipPath>
                      
                      {/* SVG Displacement (종이 울림 효과) */}
                      <filter id={`paperWarp${stage.id}`}>
                        <feTurbulence
                          type="fractalNoise"
                          baseFrequency="0.02"
                          numOctaves="3"
                          result="warp"
                        />
                        <feDisplacementMap
                          in="SourceGraphic"
                          in2="warp"
                          scale="3"
                          xChannelSelector="R"
                          yChannelSelector="G"
                        />
                      </filter>
                    </defs>
                  </svg>

                  {/* 비대칭 그림자 (뒤쪽) */}
                  <div className="absolute inset-0 -z-10 transform translate-x-1 translate-y-1">
                    <div 
                      className="w-full h-full"
                      style={{
                        borderRadius: '80px',
                        boxShadow: `
                          inset 8px 8px 20px rgba(0, 0, 0, 0.25),
                          inset -8px -8px 20px rgba(0, 0, 0, 0.25),
                          inset 8px -8px 20px rgba(0, 0, 0, 0.2),
                          inset -8px 8px 20px rgba(0, 0, 0, 0.2),
                          0 20px 48px rgba(0, 0, 0, 0.2),
                          0 8px 16px rgba(0, 0, 0, 0.15)
                        `,
                      }}
                    />
                  </div>

                  {/* Image Container */}
                  <div 
                    className="relative w-full h-full bg-gradient-to-br from-beige/30 to-white overflow-hidden"
                    style={{
                      borderRadius: '80px',
                      boxShadow: `
                        inset 8px 8px 20px rgba(0, 0, 0, 0.25),
                        inset -8px -8px 20px rgba(0, 0, 0, 0.25),
                        inset 8px -8px 20px rgba(0, 0, 0, 0.2),
                        inset -8px 8px 20px rgba(0, 0, 0, 0.2)
                      `,
                    }}
                  >
                    {/* Image */}
                    <img
                      src={
                        stage.id === 1
                          ? getImagePath('/assets/about/emotion art teaching/emotion art first.jpg')
                          : stage.id === 2
                          ? getImagePath('/assets/about/emotion art teaching/emotion art middle.jpg')
                          : getImagePath('/assets/about/emotion art teaching/emotion art after.PNG')
                      }
                      alt={`${stage.title} - ${stage.subtitle}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        filter: `url(#paperWarp${stage.id}) contrast(1.02) saturate(0.98)`,
                        borderRadius: '80px',
                        display: 'block',
                      }}
                    />

                    {/* Hover overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-brown-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </div>

                {/* Premium SVG Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex-1 flex flex-col"
                >
                  <div className="relative">
                    {/* Premium SVG Container */}
                    <svg
                      viewBox="0 0 400 320"
                      className="w-full h-auto"
                      style={{
                        filter: `drop-shadow(0 8px 24px ${stage.color}30)`,
                      }}
                    >
                      {/* Layer 1: Soft background */}
                      <rect
                        x="3"
                        y="3"
                        width="394"
                        height="314"
                        rx="24"
                        fill="#FFFCF9"
                        opacity="0.95"
                      />

                      {/* Layer 2: Main asymmetric stroke with grain */}
                      <motion.path
                        d="M 24 3 
                           L 376 5 
                           Q 392 6, 394 22
                           L 396 294
                           Q 395 310, 379 312
                           L 24 317
                           Q 8 316, 6 300
                           L 4 22
                           Q 5 6, 21 4
                           Z"
                        fill="none"
                        stroke={stage.color}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.8,
                          delay: 0.5 + index * 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />

                      {/* Inner accent line */}
                      <motion.path
                        d="M 30 14
                           L 370 16
                           Q 380 17, 382 27
                           L 384 293
                           Q 383 303, 373 304
                           L 30 307
                           Q 20 306, 18 296
                           L 16 27
                           Q 17 17, 27 16
                           Z"
                        fill="none"
                        stroke={stage.color}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        opacity="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.8,
                          delay: 0.7 + index * 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </svg>

                    {/* Text Content (positioned over SVG) */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7 lg:p-8">
                      {/* Top */}
                      <div className="space-y-3 flex-shrink-0">
                        <div className="flex items-center gap-4">
                          <span 
                            className="text-5xl font-light"
                            style={{ color: stage.color }}
                          >
                            {stage.number}
                          </span>
                          <div>
                            <h3 
                              className="text-xl md:text-2xl font-semibold tracking-tight"
                              style={{ color: '#333' }}
                            >
                              {stage.title}
                            </h3>
                            <p 
                              className="text-sm md:text-base mt-1"
                              style={{ color: stage.color, fontWeight: 500 }}
                            >
                              {stage.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="flex-1 flex items-end">
                        <p 
                          className="w-full stage-description-text"
                          style={{ 
                            color: '#555',
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .stage-description-text {
          font-size: 0.75rem;
          line-height: 1.5;
        }

        @media (min-width: 1024px) {
          .stage-description-text {
            font-size: 0.85rem;
            line-height: 2;
          }
        }
      `}</style>
    </>
  );
}
