import React from 'react';
import { motion } from 'motion/react';
import BlobMorph from './BlobMorph';

// CHILD ART Section 2: Philosophy & Questions
export function ChildArtSection2() {
  const [morphProgress, setMorphProgress] = React.useState(0);

  // Gradually increase morph progress as page loads
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMorphProgress(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white py-48 md:py-64 lg:py-80">
      {/* 3D Blob Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96">
          <BlobMorph morphProgress={morphProgress} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 md:gap-28 lg:gap-32">
          {/* Left Side: Three Questions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16 md:space-y-20"
          >
            <div>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                  color: '#333',
                  lineHeight: 1.75,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                "우리 아이는 지금 어떤 마음으로 세상을 보고 있을까?"
              </p>
            </div>

            <div>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                  color: '#333',
                  lineHeight: 1.75,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                "말로 설명하지 못한 감정은 어디에 남아 있을까?"
              </p>
            </div>

            <div>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                  color: '#333',
                  lineHeight: 1.75,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                "이 아이만의 감각·성정·세계는 어떻게 싹을 틀울까?"
              </p>
            </div>
          </motion.div>

          {/* Right Side: Description Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <p 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                color: '#444',
                lineHeight: 1.9,
                fontWeight: 300,
                letterSpacing: '0.01em',
              }}
            >
              아이들은 감성을 먼저 느끼고, 그 마음을 몸·색·선으로 표현하며,<br />
              그 다음에 비로소 언어입니다.
            </p>

            <p 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                color: '#444',
                lineHeight: 1.9,
                fontWeight: 300,
                letterSpacing: '0.01em',
              }}
            >
              하지만 현실은 너무 빠르게 정답·속도·비교를 요구하죠.<br />
              그 순간, 아이의 감성은 말해지지 못한 채 소외되고,<br />
              표현은 줄어들고, 세계관의 싹도 자리 잡을 자리를 잃어버립니다.
            </p>

            <p 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                color: '#444',
                lineHeight: 1.9,
                fontWeight: 300,
                letterSpacing: '0.01em',
              }}
            >
              그래서 아이에게는 자기 마음을 먼저 알아차리고,<br />
              자기 방식으로 표현하는 힘이 필요합니다.
            </p>

            <div className="pt-10">
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  color: '#8fbc88',
                  lineHeight: 1.7,
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                }}
              >
                "아이의 기질과 감정의 속도를 따라가며, 마음이 자라는 미술입니다."
              </p>
            </div>

            {/* Pink Box: 이런 친구에게 필요해요 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                y: -4, 
                boxShadow: '0 12px 40px rgba(255,107,157,0.15)',
                transition: { duration: 0.3 }
              }}
              className="bg-pink-50 border-l-4 border-pink-300 rounded-2xl p-10 mt-16"
              style={{
                boxShadow: '0 4px 20px rgba(255,107,157,0.08)',
              }}
            >
              <h4 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                  color: '#ff6b9d',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                이런 친구에게 필요해요
              </h4>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.95rem, 1.35vw, 1.05rem)',
                  color: '#666',
                  lineHeight: 2,
                  fontWeight: 300,
                  letterSpacing: '0.005em',
                }}
              >
                선·색, 형태에 즐거움이 많고 손으로 탐색하는 걸 좋아하는 아이<br />
                감정표현이 서툴지만, 몸과 그림에서 마음이 잘 드러나는 아이<br />
                '잘 그리기'보다 자기 속도로 탐색하는 경험이 필요한 아이<br />
                감정 조절·관계 형성·표현력 성장을 균형 있게 경험하고 싶은 아이<br />
                자기만의 비밀 세계를 만드는 걸 좋아하는 아이
              </p>
            </motion.div>

            {/* Blog Button */}
            <div className="pt-10 text-right">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  boxShadow: '0 8px 30px rgba(255,107,157,0.2)',
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-pink-300 text-pink-400 rounded-full hover:bg-pink-50 transition-all duration-300"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  boxShadow: '0 4px 20px rgba(255,107,157,0.1)',
                }}
              >
                BLOG 바로가기
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-right mt-28 md:mt-32"
        >
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.15vw, 0.95rem)',
              color: '#aaa',
              lineHeight: 1.6,
              letterSpacing: '0.02em',
            }}
          >
            크레용숲 블로그에서 더 많은 이야기를 만나보세요
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// CHILD ART Section 3: 6 Questions from Parents
export function ChildArtSection3() {
  const questions = [
    {
      number: '1',
      title: '우리 아이 같은 성향도 잘 적응할 수 있을까요?',
      content: `보통 예민한 아이, 산만한 아이, 불안정한 감정을 표현하지 못한 경우가 많아요. 크레용숲에서는 그 감정을 알아차리는 연습을 하다 보니 오히려 집에서의 특별한 위축이 줄어드는 경향이 있습니다.`,
    },
    {
      number: '2',
      title: '정답이 없는 미술이라면, 아이는 뭘 기준으로 자라고 있다고 보면 될까요?',
      content: `정답이 없는 것처럼 보이지만, 아이의 변화는 분명한 기준이 있습니다. 결과물 대신 아이에게서 어떤 변화가 보이는가, 누구나 체감할 수 있도록 성장하고 있는 거예요.`,
    },
    {
      number: '3',
      title: '아이의 마음을 정말 읽어주나요?',
      content: `그림은 말보다 먼저 나옵니다. 특히 아이들은 압력이 색·속도·패턴으로 마음을 표현해요. 빨간 선은 불안, 반복되는 패턴은 위로의 욕구, 어느 한 부분을 오래 칠하는 건 감정이 축적되어 있어요.`,
    },
    {
      number: '4',
      title: '미술로 감정이 정말 풀어지나요?',
      content: `미술이 감정을 '치유한다'고 말하기는 어렵습니다. 하지만 미술은 감정을 가장 안전하게 다룰 수 있는 통로입니다. 표현이 익숙해지면 자신감도 함께 자라납니다.`,
    },
    {
      number: '5',
      title: '다른 미술학원과 가장 크게 다른 점은 무엇인가요?',
      content: `크레용숲은 결과물을 성장기록으로 남기는 미술 공간입니다. 단순히 그리기를 가르치는 것이 아니라 아이의 정서 리듬·기질·감정 흐름·표현 패턴을 읽어내기 위해 노력합니다.`,
    },
  ];

  return (
    <section className="relative min-h-screen bg-white py-32 md:py-40 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <h2 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#d97878',
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            엄마들이 가장 많이 묻는 5가지 질문
          </h2>
        </motion.div>

        {/* Questions Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-24">
          {questions.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:border-pink-200 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    color: '#ff6b9d',
                    fontWeight: 600,
                  }}
                >
                  {q.number}
                </div>
                
                <div className="flex-1">
                  <h3 
                    className="mb-5"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                      color: '#333',
                      fontWeight: 600,
                      lineHeight: 1.7,
                    }}
                  >
                    {q.title}
                  </h3>
                  
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                      color: '#666',
                      lineHeight: 1.9,
                      fontWeight: 300,
                    }}
                  >
                    {q.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-20 md:pt-24 border-t border-gray-200 space-y-4"
        >
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
              color: '#8fbc88',
              fontWeight: 500,
              lineHeight: 1.8,
            }}
          >
            정답을 잘 고르는 아이보다
          </p>
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
              color: '#d97878',
              fontWeight: 500,
              lineHeight: 1.8,
            }}
          >
            자기 마음을 잘 읽는 아이가 더 멀리 갑니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// CHILD ART Section 4: Final Message
export function ChildArtSection4() {
  return (
    <section className="relative bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Image with Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.4 }
          }}
          className="relative mb-24 md:mb-32 rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 10px 50px rgba(0,0,0,0.08)',
          }}
        >
          <img
            src="/assets/about/crayon forest/crayon forest.png"
            alt="크레용숲 어린이 작품"
            className="w-full h-auto"
            onError={(e) => {
              console.error('Image load error:', e.currentTarget.src);
              const src = e.currentTarget.src;
              if (src.endsWith('.png')) {
                e.currentTarget.src = '/assets/about/crayon forest/crayon forest.jpg';
              } else if (src.endsWith('.jpg')) {
                e.currentTarget.src = '/assets/about/crayon forest/crayon forest.PNG';
              } else if (src.endsWith('.PNG')) {
                e.currentTarget.src = '/assets/about/crayon forest/crayon forest.JPG';
              } else {
                e.currentTarget.src = '/assets/about/crayon forest/crayon forest.png';
              }
            }}
          />
        </motion.div>

        {/* Central Message - 극적인 여백 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto space-y-10 py-32 md:py-48"
        >
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
              color: '#555',
              lineHeight: 1.8,
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            이제 질문은 바뀝니다.
          </p>

          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)',
              color: '#333',
              lineHeight: 1.7,
              fontWeight: 300,
              letterSpacing: '-0.015em',
            }}
          >
            "우리 아이가 잘 그리게 될까요?"가 아니라,
          </p>

          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)',
              color: '#333',
              lineHeight: 1.7,
              fontWeight: 300,
              letterSpacing: '-0.015em',
            }}
          >
            "이 아이가 자기다운 세계를 만들 힘을 갖게 될까요?"
          </p>

          <div className="pt-16">
            <p 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                color: '#8fbc88',
                lineHeight: 1.6,
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
            >
              크레용숲은 그 질문에 대한 하나의 대답입니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CHILD ART Section 5: Program Details
export function ChildArtSection5() {
  return (
    <section className="relative min-h-screen bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <img
            src="/assets/about/crayon forest/crayon forest.png"
            alt="크레용숲 차일드아트 어린이 색채학교"
            className="w-full h-auto rounded-3xl shadow-lg"
            onError={(e) => {
              console.error('Image load error:', e.currentTarget.src);
              const src = e.currentTarget.src;
              if (src.endsWith('.png')) {
                e.currentTarget.src = '/assets/about/crayon forest/crayon forest.jpg';
              } else if (src.endsWith('.jpg')) {
                e.currentTarget.src = '/assets/about/crayon forest/crayon forest.PNG';
              } else if (src.endsWith('.PNG')) {
                e.currentTarget.src = '/assets/about/crayon forest/crayon forest.JPG';
              } else {
                e.currentTarget.src = '/assets/about/crayon forest/crayon forest.png';
              }
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: '#8fbc88',
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            크레용숲 차일드아트<br />
            어린이 색채학교
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 mb-20">
          {/* Left Side: Two Circles Horizontal + Additional Info */}
          <div className="flex flex-col gap-8">
            {/* Two Circles - Horizontal Layout */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-start">
              {/* Circle 1: 학기제 운영 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center flex-1"
              >
                <div className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-pink-50 border-4 border-green-200 flex items-center justify-center mb-6">
                  <p 
                    className="text-center px-4"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                      color: '#333',
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    학기제 운영
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    어떻게 진행되나요?
                  </p>
                  <div className="space-y-1.5 text-center">
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                        color: '#666',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      월별 감정술을 테마
                    </p>
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                        color: '#666',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      발달 단계별 4~12세
                    </p>
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                        color: '#666',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      월 2회~4회 수업
                    </p>
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                        color: '#666',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}
                    >
                      재료비·가이드북 포함
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Circle 2: 소수정예 연령별 수업 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center flex-1"
              >
                <div className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-pink-50 border-4 border-green-200 flex items-center justify-center mb-6">
                  <p 
                    className="text-center px-4"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                      color: '#333',
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    소수정예<br />
                    연령별 수업
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    1학기: 3~8월 (5개월)<br />
                    2학기: 9~12월 (5개월)<br />
                    방학특강 (1~2월)
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                      color: '#666',
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    주1회 / 각 100분 수업
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.75rem, 1.1vw, 0.85rem)',
                      color: '#666',
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    인원: 4명 (최대 5명)
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Additional Info Box - Balances with right side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-pink-50/50 border-2 border-pink-200 rounded-3xl p-8"
            >
              <h4 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  color: '#ff6b9d',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                수업 포인트
              </h4>
              <div className="space-y-3">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                    color: '#666',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  • 아이의 감정 리듬을 따라가는 개별 맞춤 수업
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
                  • 학기제 운영으로 아이의 성장 과정 관찰
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
                  • 소수정예로 깊이 있는 정서 케어
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
                  • 부모님과의 정기적인 피드백 공유
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-pink-200 my-6" />

              <p 
                className="text-center"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                  color: '#8fbc88',
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                "아이의 속도로, 아이의 언어로"
              </p>
            </motion.div>
          </div>

          {/* Right Side: Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* 왜 학기제로 운영하나요? */}
            <div className="bg-green-50 border-l-4 border-green-300 rounded-2xl p-6">
              <h3 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.1rem, 1.7vw, 1.4rem)',
                  color: '#8fbc88',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                왜 학기제로 운영하나요?
              </h3>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                  color: '#666',
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}
              >
                아이의 감정과 세계의 자리는 1년의 호흡을 생겨납니다.<br />
                감성은 빠르게마도 구조가, 구조는 빠르게마 자기관계는 능니다.
              </p>
            </div>

            {/* 감은 대주제로 아이의 나이에 따라 저온도를챕터 */}
            <div>
              <h4 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  color: '#ff6b9d',
                  fontWeight: 600,
                  marginBottom: '0.8rem',
                }}
              >
                감은 대주제로 아이의 나이에 따라 저온도를 '표현 갑기'를 달라집니다
              </h4>
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
                  예: 3월 〈미술에 익숙산〉
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
                  4~5세: 큰갱 벅적, 표현, 단조로 색의 기본
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
                  6~7세: 어울림 '집고 칠은 색' 경기
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
                  초등: 감싸를 촉길 갈호 역살으로 상성
                </p>
              </div>
            </div>

            {/* 교재감, 관찰일 기관 */}
            <div>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                  color: '#666',
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}
              >
                교재감, 관찰을 기관 : 기술별 연감감 스토리 디자안
              </p>
            </div>

            {/* Bottom Statement */}
            <div className="pt-6 border-t border-gray-200">
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                  color: '#333',
                  lineHeight: 1.9,
                  fontWeight: 400,
                }}
              >
                단지 니나으뜬 아청이 아니라 아이의 심리 말긋도 엣이 핵김 능력이 저셜혈계는 것입니다.
              </p>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
                  color: '#333',
                  lineHeight: 1.9,
                  fontWeight: 400,
                  marginTop: '0.5rem',
                }}
              >
                스느리접인 기쁜오 아이 병석의 기벌은 성싱기, 셀리고 약칭 앉운 나를 속도로 만들어 지는 듣특민나 누치 욕이 등아링니다.
              </p>
            </div>

            {/* Final Green Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center"
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  color: '#8fbc88',
                  fontWeight: 500,
                  lineHeight: 1.8,
                }}
              >
                형제·자매는 같은 주제를 배우되무터도 각각 다른 방식으로 표현합니다.
              </p>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                  color: '#666',
                  fontWeight: 400,
                  lineHeight: 1.8,
                  marginTop: '0.5rem',
                }}
              >
                형제뛴는 저온드려편 예술 아이가지 오겠고, 셔으나 검섬을 어메넨는 시건이 줄어니너,<br />
                둘 아이의 성장 거름이 한 곳으로 이어지니다.
              </p>
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                  color: '#666',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  marginTop: '0.5rem',
                }}
              >
                이 가장 안의 월곰 드 거러어니는 만든 보니스니즘 가지 사하는 크뢰중념니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}