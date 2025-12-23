import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { getImagePath } from '../../utils/imageUtils';

export default function Interview() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <>
      <hr className="section-divider" />
      <section 
        ref={sectionRef}
        className="relative py-32 md:py-48 lg:py-64 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 182, 193, 0.12) 0%, rgba(255, 182, 193, 0.06) 50%, rgba(255, 182, 193, 0.02) 100%)',
        }}
      >
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div 
              className="inline-block px-6 py-2 rounded-full border-2"
              style={{
                backgroundColor: 'rgba(255, 182, 193, 0.1)',
                borderColor: 'rgba(255, 182, 193, 0.3)',
                color: '#D97757',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Interview
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
              {/* Left: Main Header */}
              <div>
                <h2 
                  className="mb-8 leading-tight"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                  }}
                >
                  <span style={{ color: '#bb8162' }}>꽃밭샘 김결,</span><br />
                  <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#FFD700', fontSize: '1.5rem' }}>✦</span>
                    <span style={{ 
                      color: '#8FBC88',
                      border: '2px solid #FFD700',
                      padding: '10px 20px',
                      display: 'inline-block',
                      borderRadius: '55% 45% 48% 52% / 53% 47% 53% 47%',
                    }}>마음을 그리는 사람</span>
                    <span style={{ color: '#FFD700', fontSize: '1.5rem' }}>✦</span>
                  </span>
                </h2>
                <p 
                  className="max-w-2xl leading-relaxed"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                    color: '#333333',
                    lineHeight: 1.85,
                    fontWeight: 400,
                  }}
                >
                  색채를 연구하던 한 디자이너가 어떻게 '마음의 숲'을 열게 되었을까.
                </p>
                <p
                  className="max-w-2xl leading-relaxed mt-4"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#000000',
                    lineHeight: 1.85,
                    fontWeight: 300,
                  }}
                >
                  크레용숲의 창립자인 꽃밭샘 김결과의 대화를 통해 그 여정의 뿌리를 따라가 보았다.
                </p>
              </div>

              {/* Right: Title Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-right lg:text-right"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                  color: '#666666',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                }}
              >
                Crayonsoop Founder · 감정예술 콘텐츠 디자이너
              </motion.div>
            </div>
          </motion.div>

          {/* First Q&A with Clip-Path Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-32 items-start"
          >
            {/* Image with organic clip-path */}
            <motion.div
              className="relative"
              style={{
                transform: 'translateX(-20px)',
              }}
            >
              <div 
                className="relative overflow-hidden"
                style={{
                  width: '68%',
                  aspectRatio: '1 / 1',
                }}
              >
                <img
                  src={getImagePath("/assets/about/interview/interview-1.PNG")}
                  alt="꽃밭샘 김결 인터뷰"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const src = target.src;
                    console.error('Image load error:', src);
                    // 확장자 자동 처리
                    if (src.endsWith('.PNG')) {
                      target.src = getImagePath('/assets/about/interview/interview-1.jpg');
                    } else if (src.endsWith('.jpg')) {
                      target.src = getImagePath('/assets/about/interview/interview-1.png');
                    } else {
                      target.src = getImagePath('/assets/about/interview/interview-1.PNG');
                    }
                  }}
                  className="w-full h-full object-contain"
                  style={{
                    clipPath: `path("M 60 30 Q 30 30, 30 60 L 30 180 Q 15 200, 30 220 L 30 340 Q 30 370, 60 370 L 180 370 Q 200 375, 220 370 L 340 370 Q 370 370, 370 340 L 370 220 Q 385 200, 370 180 L 370 60 Q 370 30, 340 30 L 220 30 Q 200 25, 180 30 Z")`,
                  }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="space-y-8"
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    color: '#bb8162',
                    fontWeight: 500,
                  }}
                >
                  Q. 선생님을 '꽃밭샘'이라고 부르던데, 그 이름에는 어떤 이야기가 담겨 있나요?
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(15px, 1.8vw, 18px)',
                    color: '#4A4A4A',
                    lineHeight: '2',
                  }}
                >
                  미술수업을 할 때 5살 아이가 지어준 별명인데요, 너무 마음에 들었어요. 아이들이 예술씨앗을 심고 마음의 꽃을 피우는 순간을 돕고 싶다는 마음입니다. 저는 그림을 지도하는 사람이 아니라, 아이의 세계가 자라는 과정을 옆에서 지켜보며 가장 자연스러운 방식으로 피어날 수 있도록 돕는 <span style={{ color: '#8FBC88', fontWeight: 500 }}>정서적 동반자</span>라고 생각합니다.
                </motion.p>
              </div>

              {/* 추가 인터뷰 내용 */}
              <div className="mt-12">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    color: '#bb8162',
                    fontWeight: 500,
                  }}
                >
                  Q. 20년 동안 패션 소재와 색채를 다루던 디자이너에서 창작 교육자로 전환한 계기는 무엇이었나요?
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="leading-loose mb-6"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(15px, 1.8vw, 18px)',
                    color: '#4A4A4A',
                    lineHeight: '2',
                  }}
                >
                  패션 소재 디자이너로 일한 20년 동안 저는 늘 <span style={{ color: '#8FBC88', fontWeight: 500 }}>'색은 마음보다 먼저 반응한다'</span>는 사실을 느꼈습니다. 옷의 재질과 색은 그 사람의 감정과 이야기를 그대로 품고 있었어요. 퇴사 후 중학생이었던 딸과 남한산성숲에서 미술을 함께 하게 되었는데, 제가 오랫동안 찾아 헤매던 '감정과 색의 연결'이 그곳에서 또렷하게 보였습니다. 아이들은 설명보다 색으로 먼저 감정을 말하더군요. 붉은색 하나에도 분노·열정·사랑·안전함이 겹겹이 담겨 있고, 푸른색 한 줄기로도 두려움·평온함·생각의 깊이가 함께 드러났죠. 그때 깨달았습니다. <span style={{ color: '#bb8162', fontWeight: 500 }}>'예술은 잘 그리는 기술이 아니라, 잘 느끼는 능력을 키우는 일'</span>이라는 것을요.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="leading-loose"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(15px, 1.8vw, 18px)',
                    color: '#4A4A4A',
                    lineHeight: '2',
                  }}
                >
                  그래서 저는 색채심리 연구를 다시 공부했고, 스에나가타미오박사님의 Heart&Color 메소드를 만나 <span style={{ color: '#8FBC88', fontWeight: 500 }}>'마음의 결을 읽는 예술교육자'</span>라는 새로운 길을 걷기 시작했습니다. 현재는 한국지부 스에나가메소드 색채심리연구소 선임연구원으로 색채심리 프로그램을 공동 연구기획하고 있습니다.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-pink-200/40 to-transparent my-32" />

          {/* Second Q&A (Text + Image) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Text Content */}
              <div className="space-y-8">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    color: '#bb8162',
                    fontWeight: 500,
                    lineHeight: '1.6',
                  }}
                >
                  Q. 우리 아이들에게 미술, 그림이 어떠한 의미가 있나요?
                </motion.h3>
                
                <div className="space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="leading-loose"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(15px, 1.8vw, 18px)',
                      color: '#4A4A4A',
                      lineHeight: '2',
                    }}
                  >
                    파울 클레는 <span style={{ color: '#A67C52', fontStyle: 'italic' }}>'예술은 보이는 것을 재현하는 것이 아니라, 보이게 하는 것이다'</span>라고 말했어요.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="leading-loose"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(15px, 1.8vw, 18px)',
                      color: '#4A4A4A',
                      lineHeight: '2',
                    }}
                  >
                    아이들은 은행 잎을 보며 호랑이를 떠올리고, 검은 종이 위에서 마음의 소리를 터뜨리고, 좋아하는 색으로 마음의 열쇠를 만들기도 하죠. 그림은 아이들에게 자기를 잃지 않고 <span style={{ color: '#8FBC88', fontWeight: 500 }}>감정을 표현할 수 있는 가장 안전한 통로</span>입니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="leading-loose"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(15px, 1.8vw, 18px)',
                      color: '#4A4A4A',
                      lineHeight: '2',
                    }}
                  >
                    상처를 남기지 않으면서도 감정을 밖으로 내보내고, 그 감정이 어떤 의미인지 스스로 이해할 수 있게 만드는 힘—— 저는 이것을 <span style={{ color: '#8FBC88', fontWeight: 500 }}>'마음의 자가 회복력'</span>이라고 부릅니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="leading-loose"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(15px, 1.8vw, 18px)',
                      color: '#4A4A4A',
                      lineHeight: '2',
                    }}
                  >
                    그리고 <span style={{ color: '#8FBC88', fontWeight: 500 }}>자유롭고 창조적인 그림 경험이 충분히 쌓이면</span> 아이의 세계관은 자연스럽게 <span style={{ color: '#8FBC88', fontWeight: 500 }}>'나는 괜찮은 존재구나'라는 방향으로 단단</span>해집니다.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="leading-loose pt-4"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(15px, 1.8vw, 18px)',
                      color: '#4A4A4A',
                      lineHeight: '2',
                    }}
                  >
                    파울 클레의 또 다른 말처럼, <span style={{ color: '#8FBC88', fontStyle: 'italic' }}>"아이의 그림은 꿈꾸는 방식으로 세계를 표현하는 또 하나의 언어"</span>입니다. 그래서 저는 낙서처럼 보이는 그림 속에서도 마음의 흐름, 성장의 리듬, 세계를 바라보는 시선을 읽습니다. 아이에게 그림은 기술이 아니라, 자신을 알아차리고 세상과 연결되는 첫 번째 예술 언어입니다.
                  </motion.p>
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <img
                  src={getImagePath("/assets/about/interview/interview-2.PNG")}
                  alt="인터뷰 2"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const src = target.src;
                    console.error('Image load error:', src);
                    // 확장자 자동 처리
                    if (src.endsWith('.PNG')) {
                      target.src = getImagePath('/assets/about/interview/interview-2.jpg');
                    } else if (src.endsWith('.jpg')) {
                      target.src = getImagePath('/assets/about/interview/interview-2.png');
                    } else {
                      target.src = getImagePath('/assets/about/interview/interview-2.PNG');
                    }
                  }}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  style={{
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Third Q&A (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 182, 193, 0.1) 0%, rgba(143, 188, 136, 0.08) 100%)',
              borderRadius: '32px',
              padding: 'clamp(40px, 6vw, 80px)',
              border: '1px solid rgba(255, 182, 193, 0.2)',
              maxWidth: '100%',
            }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(20px, 3vw, 28px)',
                color: '#bb8162',
                fontWeight: 500,
                lineHeight: '1.5',
              }}
            >
              Q. 왜 '크레용숲'을 만들게 되었나요?
            </motion.h3>
            
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="leading-loose"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#4A4A4A',
                  lineHeight: '2',
                }}
              >
                크레용의 어원은 <span style={{ color: '#D97757', fontWeight: 500 }}>creta, 흰 점토</span>에서 시작됩니다. 아주 작은 흙이 선이 되고, 선이 이야기가 되고, 그 이야기가 마음의 숲으로 자라나는 과정— 저는 그 흐름이 아이의 성장과 너무 닮아 있다고 느꼈습니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="leading-loose"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#4A4A4A',
                  lineHeight: '2',
                }}
              >
                숲은 누구도 억지로 꽃을 피우지 않습니다. 물과 빛을 허락하면, <span style={{ color: '#8FBC88', fontWeight: 500 }}>제 속도로 스스로 피어납니다</span>. 아이의 마음도 똑같습니다. 그래서 저는 <span style={{ color: '#8FBC88', fontWeight: 500 }}>'크레용'을 아이의 첫 예술 언어로, '숲'을 성장의 은유로</span> 삼아 크레용숲을 만들었습니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-loose"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#4A4A4A',
                  lineHeight: '2',
                }}
              >
                이우학교 김철원 교장선생님께서는 <span style={{ color: '#A67C52', fontStyle: 'italic' }}>"교육의 본질은 개개인성, 고유성, 자기다움이라는 살아있는 질문을 갖게 하는 일"</span>이라고 말씀하셨어요.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="leading-loose"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#4A4A4A',
                  lineHeight: '2',
                }}
              >
                그동안 1000명이 넘는 아이들과 어른을 만나며 저는 한 가지를 보았습니다. 사람은 누구나 마음을 표현하기 전에 이미 너무 바쁘고, 비교 속에서 자신을 잃고, 자기 감정의 속도를 잃어버린다는 사실을요. 그때 색, 선, 촉감 같은 <span style={{ color: '#8FBC88', fontWeight: 500 }}>가장 원초적인 감각이 어떻게 사람을 다시 회복</span>시키는지, 다시 자기 세계로 돌아오게 하는지를 반복해서 목격했습니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="leading-loose"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#4A4A4A',
                  lineHeight: '2',
                }}
              >
                그리고 제 마음속에는 오래전부터 한 단어가 자리하고 있었습니다. 그리스어 <span style={{ color: '#D97757', fontWeight: 500 }}>초로스(Choros)</span>. <span style={{ color: '#8FBC88', fontStyle: 'italic' }}>"자기 자신을 찾기 위해 돌아가는 정든 곳."</span> 마리야 이바시키나의 그림책에서 만난 이 단어는 저에게 언젠가 꼭 만들고 싶은 '마음의 공간'을 향한 신호 같았습니다. 그 공간이 바로 지금의 크레용숲이 되었습니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="leading-loose"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#4A4A4A',
                  lineHeight: '2',
                }}
              >
                저에게 <span style={{ color: '#8FBC88', fontWeight: 500 }}>창조·쓰임·성장</span>은 삶을 움직이는 가장 근본적인 가치입니다. 그리고 그 가치는 결국 한 사람의 내면이 자라는 숲을 돌보는 일로 이어졌습니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="leading-loose"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#4A4A4A',
                  lineHeight: '2',
                }}
              >
                그래서 저는 결심했습니다. <span style={{ color: '#8FBC88', fontWeight: 500 }}>"아이의 마음이 닫히기 전에, 자기 세계를 스스로 만들어갈 힘을 회복시키는 숲을 열어야 한다."</span> 크레용숲은 그 믿음에서 시작된 공간입니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="leading-loose"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#4A4A4A',
                  lineHeight: '2',
                }}
              >
                누군가의 정답을 따라 그리는 곳이 아니라, <span style={{ color: '#8FBC88', fontWeight: 500 }}>아이 스스로 자기 마음을 느끼고, 고르고, 표현하며 자기다움의 뿌리를 단단히 내리는 곳.</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="leading-loose pt-6"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  color: '#A67C52',
                  lineHeight: '2',
                  fontWeight: 500,
                }}
              >
                그리고 이렇게 말할 수 있어서 참 고맙습니다.<br />
                색의 언어가 나를 데리고 여기까지 와준 것처럼, 그 마법을 다른 이에게 건넬 수 있음에 마음 깊이 감사드립니다.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
