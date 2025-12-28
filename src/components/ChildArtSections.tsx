import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// CHILD ART Section 2: Philosophy & Questions (Premium Editorial Style)
export function ChildArtSection2() {
  return (
    <section className="relative min-h-screen bg-white pt-[90px] pb-24">
      <div className="max-w-[1180px] mx-auto px-0">
        {/* QUESTIONS - 최상단 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mb-20"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
              color: '#333',
              lineHeight: 1.5,
              letterSpacing: 0,
              fontWeight: 400,
            }}
          >
            "우리 아이는 지금 어떤 마음으로 세상을 보고 있을까?"
          </p>

          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
              color: '#333',
              lineHeight: 1.5,
              letterSpacing: 0,
              fontWeight: 400,
            }}
          >
            "말로 설명하지 못한 감정은 어디에 남아 있을까?"
          </p>

          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
              color: '#333',
              lineHeight: 1.5,
              letterSpacing: 0,
              fontWeight: 400,
            }}
          >
            "이 아이만의 감각·상징·세계는 어떻게 싹을 틔울까?"
          </p>
        </motion.div>

        {/* DESCRIPTION - 본문 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 mb-16"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.6vw, 0.85rem)',
              color: '#444',
              lineHeight: 1.5,
              letterSpacing: 0,
              fontWeight: 300,
              maxWidth: '34em',
              textAlign: 'left',
              wordBreak: 'keep-all',
              marginBottom: 0
            } as React.CSSProperties}
          >
            아이들은 감정을 먼저 느끼고, 그 마음은 몸–색–선으로 표현되며,<br /><br />
            그 다음이 비로소 언어입니다.<br /><br />
            하지만 현실은 너무 빠르게 <span style={{ fontWeight: 500 }}>정답 · 속도 · 비교</span>를 요구하죠.<br /><br />
            그 순간, 아이의 감정은 말해지지 못한 채 조용히 접히고,<br /><br />
            표현은 줄어들고, 세계관의 씨앗도 자라날 자리를 잃어버립니다.<br /><br />
            그래서 아이에게는 <span style={{ fontWeight: 500 }}>자기 마음을 먼저 알아차리고,</span><br /><br />
            <span style={{ fontWeight: 500 }}>자기 방식으로 표현하는 힘</span>이 필요합니다.
          </p>
        </motion.div>

        {/* KEY MESSAGE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.2rem, 2vw, 1rem)',
            color: '#2F6B4F',
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: 0,
            marginBottom: '3rem',
            maxWidth: '34em',
            textAlign: 'left',
            wordBreak: 'keep-all'
          } as React.CSSProperties}
        >
          "아이의 기질과 감정의 속도를 따라가며, 마음이 자라는 미술입니다."
        </motion.p>

        {/* BLOB CAPSULE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: '#FADFDB',
            borderRadius: '24px',
            padding: '2rem 2.5rem',
            marginBottom: '3rem',
            minWidth: '200px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'Noto Serif KR', serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#2F6B4F',
              marginBottom: '1rem',
            }}
          >
            이런 친구에게 맞아요
          </span>

          <ul
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)',
              lineHeight: 1.5,
              letterSpacing: 0,
              color: '#2F6B4F',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            <li>선·색·형태에 호기심이 많고 손으로 탐색하는 걸 좋아하는 아이</li>
            <br /><br />
            <li>감정표현이 서툴지만, 말 대신 그림에서 마음이 잘 드러나는 아이</li>
            <br /><br />
            <li>'잘 그리기'보다 자기 속도로 탐색하는 경험이 필요한 아이</li>
            <br /><br />
            <li>정서 조절·감각 자극·표현력 성장을 균형 있게 경험하고 싶은 아이</li>
            <br /><br />
            <li>자기만의 비밀 세계를 만드는 걸 좋아하는 아이</li>
          </ul>
        </motion.div>

        {/* BLOG BUTTON */}
        <div className="flex justify-end">
          <motion.a
            href="https://blog.naver.com/dreaming_art_play"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
              backgroundColor: '#F6D2CC',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '0.9rem 2.4rem',
              border: '2px solid #A66A5A',
              borderRadius: '9999px',
              fontFamily: "'Noto Serif KR', serif",
              fontSize: '0.95rem',
              color: '#2d5016',
              background: '#FADFDE',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            BLOG 바로가기
          </motion.a>
        </div>
      </div>
    </section>
  );
}

// CHILD ART Section 3: 6 Questions from Parents (Premium Editorial Style)
export function ChildArtSection3() {
  const questionsLeft = [
    {
      number: '1',
      title: '우리 아이 같은 성향도 잘 적응할 수 있을까요?',
      content: `보통 예민해 보이는 아이들은 감정이 많은 게 아니라 감정을 처리할 통로가 없는 경우가 많아요. 크레용숲에서는 그 감정을 꺼내 쓰는 연습을 하다 보니 오히려 집에서의 폭발이나 위축이 줄어드는 경우가 많습니다. 마음이 불안하면 선이 흔들리고, 색이 세지고, 움직임이 급해져요. 그래서 아이의 감정은 수업 시작 전 이미 드러나 있습니다. 크레용숲은 색·촉감·리듬을 이용해 아이의 신경계를 먼저 안정시키는 방식을 사용합니다. 안정이 생기면 아이는 자연스럽게 표현을 시작해요. 아이 스스로 느끼는 문장은 이렇게 바뀝니다. "조심해야 해" → "괜찮아" → "표현해도 돼" 이 한 단계 변화만으로 아이의 집중력, 대화, 성향이 부드럽게 열리기 시작합니다.`,
    },
    {
      number: '2',
      title: '정답이 없는 미술이라면, 아이는 뭘 기준으로 자라고 있다고 보면 될까요?',
      content: `정답이 없는 것처럼 보이지만, 아이의 변화에는 분명한 기준이 있습니다. 결과물 대신 아이에게서 이런 변화가 보이면 수업은 제대로 작동하고 있는 거예요. 표현이 막히지 않는다/ 실패해도 다시 시도한다/ 설명을 피하지 않는다/ "내가 이런 느낌이었어"라고 말한다/ 이건 이건 취향의 문제가 아니라 누가 봐도 알 수 있는 변화입니다. 자기다움은 가르쳐서 생기는 게 아니라 감정이 원활하게 작동할 때 자연스럽게 드러나는 결과이기 때문입니다. 그래서 크레용숲은 아이를 바꾸려 하지 않고, 아이 안에 이미 있는 자기다움이 막히지 않도록 감정의 흐름을 풀어줍니다.`,
    },
    {
      number: '3',
      title: '아이의 마음을 정말 읽어주나요?',
      content: `그림은 말보다 먼저 나옵니다. 특히 아이들은 말하기 전에 색·속도·패턴으로 마음을 흘려보내죠. 빠른 선은 불안, 반복되는 패턴은 위로의 욕구, 어느 한 부분을 오래 칠하는 건 감정의 정착점예요. 우리는 이러한 단서를 통해 오늘 아이의 마음이 어떤 방향으로 흐르는지 읽습니다. 그리고 그 내용을 '기질요약·감정결 메모'로 정리해 부모님께 전달합니다. 아이에게 이 과정은 "내 마음을 알아주는 어른이 있다"는 경험으로 남고, 이 경험이 아이의 자기 이해력을 자라게 합니다. 이 문장이 아이의 자기개념을 단단하게 만들고 그게 바로 정서적 성장 + 학습력의 기초가 됩니다.`,
    },
  ];

  const questionsRight = [
    {
      number: '4',
      title: '미술로 감정이 정말 좋아지나?',
      content: `미술이 감정을 '고쳐준다'고 말하지는 않습니다. 하지만 미술은 감정을 가장 안전하게 다룰 수 있는 통로입니다. 표현이 막히면 자신감도 함께 줄어듭니다. 말이 안 나오면 행동도 작아지고, 선택도 느려지죠. 하지만 색으로 감정을 표현하고 손과 감각이 안정되기 시작하면 아이의 내면에서 작은 변화가 일어납니다. "하고 싶은데 못 하겠어…" → "이건 해볼 수 있을 것 같아." 표현은 곧 선택의 힘을 키우고, 선택의 힘은 관계 안에서 존재감을 만들어줍니다. 결국 변화는 이렇게 옵니다. 소극적이던 아이가 스스로 먼저 들고, 말이 없던 아이가 색을 고르는 기준을 설명하고, 친구 앞에서 작품을 소개하며 눈빛이 달라지는 순간으로요.`,
    },
    {
      number: '5',
      title: '다른 미술학원과 가장 크게 다른 점은 무엇인가요?',
      content: `크레용숲의 중심에는 성장기록 기반 마음 코칭 시스템이 있습니다. 단순히 그림을 가르치는 것이 아니라 아이의 정서 리듬–기질–감정 흐름–표현 패턴을 함께 기록합니다. 그래서 아이는 비교당하지 않고, 정답을 강요받지 않으며, 자기 속도로 자기 세계를 만들어갑니다. 여기서는 '잘 그리는 아이'가 되는 것이 목표가 아닙니다. '나를 이해하고 나답게 표현하는 아이'가 되는 것이 목표예요. 이 경험을 반복하면 아이 마음속에 아주 중요한 문장이 생깁니다. "나는 이렇게 느끼는 사람이구나."`,
    },
  ];

  return (
    <section className="relative bg-white py-32 md:py-40 lg:py-48">
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.2rem, 3vw, 2.4rem)',
              color: '#2F6B4F',
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            엄마들이 가장 많이 묻는 5가지 질문
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Questions 1, 2, 3 */}
          <div className="space-y-10">
            {questionsLeft.map((q, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  borderLeft: '3px solid #2F6B4F',
                  paddingLeft: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.85rem)',
                    color: '#2F6B4F',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                  }}
                >
                  {q.number}. {q.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.85rem)',
                    color: '#444',
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    fontWeight: 300,
                    maxWidth: '34em',
                    textAlign: 'left',
                    wordBreak: 'keep-all',
                    marginBottom: 0
                  } as React.CSSProperties}
                >
                  {q.content.split(/\. /).map((sentence, idx, arr) => (
                    <React.Fragment key={idx}>
                      {sentence}{idx < arr.length - 1 ? '.' : ''}
                      {idx < arr.length - 1 && <><br /><br /></>}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: Questions 4, 5 + Quote Box */}
          <div className="space-y-10">
            {questionsRight.map((q, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                style={{
                  borderLeft: '3px solid #d97878',
                  paddingLeft: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.85rem)',
                    color: '#d97878',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                  }}
                >
                  {q.number}. {q.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.85rem)',
                    color: '#444',
                    lineHeight: 1.5,
                    letterSpacing: 0,
                    fontWeight: 300,
                    maxWidth: '34em',
                    textAlign: 'left',
                    wordBreak: 'keep-all',
                    marginBottom: 0
                  } as React.CSSProperties}
                >
                  {q.content.split(/\. /).map((sentence, idx, arr) => (
                    <React.Fragment key={idx}>
                      {sentence}{idx < arr.length - 1 ? '.' : ''}
                      {idx < arr.length - 1 && <><br /><br /></>}
                    </React.Fragment>
                  ))}
                </p>
              </motion.div>
            ))}

            {/* Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                background: '#FAFAFA',
                borderRadius: '16px',
                padding: '2rem 2.5rem',
                marginTop: '2rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                  color: '#2F6B4F',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  marginBottom: '0.5rem',
                }}
              >
                정답을 잘 고르는 아이보다
              </p>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
                  color: '#d97878',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                }}
              >
                자기 마음을 잘 읽는 아이가 더 멀리 갑니다
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CHILD ART Section 4: Final Message (Premium Editorial Style)
export function ChildArtSection4() {
  return (
    <section className="relative bg-white py-20 md:py-24">
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Image with Text Overlay - Premium Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 20px 80px rgba(47, 107, 79, 0.12)',
            minHeight: '600px',
          }}
        >
          {/* Background Image */}
          <img
            src={getImagePath("/assets/about/crayon forest/crayon forest.png")}
            alt="크레용숲 어린이 작품"
            className="w-full h-auto"
            style={{
              minHeight: '600px',
              objectFit: 'cover',
            }}
            onError={(e) => {
              console.error('Image load error:', e.currentTarget.src);
              const src = e.currentTarget.src;
              if (src.endsWith('.png')) {
                e.currentTarget.src = getImagePath('/assets/about/crayon forest/crayon forest.jpg');
              } else if (src.endsWith('.jpg')) {
                e.currentTarget.src = getImagePath('/assets/about/crayon forest/crayon forest.PNG');
              } else if (src.endsWith('.PNG')) {
                e.currentTarget.src = getImagePath('/assets/about/crayon forest/crayon forest.JPG');
              } else {
                e.currentTarget.src = getImagePath('/assets/about/crayon forest/crayon forest.png');
              }
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.98) 100%)',
              zIndex: 1,
            }}
          />

          {/* Text Content Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 text-center px-8 pb-16 md:pb-24 lg:pb-32"
            style={{
              zIndex: 2,
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 1.6vw, 1.2rem)',
                color: '#2F6B4F',
                lineHeight: 1.5,
                letterSpacing: 0,
                fontWeight: 400,
                marginBottom: '1.5rem',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
              }}
            >
              이제 질문은 바뀝니다.
            </p>

            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 1.6vw, 1.2rem)',
                color: '#2F6B4F',
                lineHeight: 1.5,
                letterSpacing: 0,
                fontWeight: 300,
                marginBottom: '0.5rem',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
              }}
            >
              "우리 아이가 잘 그리게 될까요?"가 아니라,
            </p>

            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 1.6vw, 1.2rem)',
                color: '#2F6B4F',
                lineHeight: 1.5,
                letterSpacing: 0,
                fontWeight: 300,
                marginBottom: '2.5rem',
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
              }}
            >
              "이 아이가 자기다운 세계를 만들 힘을 갖게 될까요?"
            </p>

            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 2vw, 1.5rem)',
                color: '#2F6B4F',
                lineHeight: 1.5,
                fontWeight: 600,
                wordBreak: 'keep-all',
                overflowWrap: 'break-word',
              }}
            >
              크레용숲은 그 질문에 대한 하나의 대답입니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// CHILD ART Section 5: Program Details (Premium Editorial Style)
export function ChildArtSection5() {
  return (
    <section className="relative bg-white pt-[90px] pb-24">
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Mobile Title - 모바일에서만 상단에 표시 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:hidden mb-8"
        >
          <h2
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
              color: '#2F6B4F',
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            크레용숲 차일드아트<br />
            어린이 색채학교
          </h2>
        </motion.div>

        {/* Image Banner with Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-24 rounded-3xl overflow-hidden min-h-[350px] md:min-h-[300px]"
          style={{
            boxShadow: '0 20px 60px rgba(47, 107, 79, 0.1)',
          }}
        >
          {/* Background Image */}
          <img
            src={getImagePath("/assets/program/child/child sec.jpg")}
            alt="크레용숲 차일드아트 어린이 색채학교"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Image load error:', e.currentTarget.src);
              const src = e.currentTarget.src;
              if (src.endsWith('.jpg')) {
                e.currentTarget.src = getImagePath('/assets/program/child/child sec.JPG');
              } else if (src.endsWith('.JPG')) {
                e.currentTarget.src = getImagePath('/assets/program/child/child sec.png');
              } else if (src.endsWith('.png')) {
                e.currentTarget.src = getImagePath('/assets/program/child/child sec.PNG');
              }
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0) 70%)',
            }}
          />

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-16 px-6 md:px-12 lg:px-16 py-8 md:py-10 w-full">
              {/* Left: Title - PC에서만 표시 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:block"
              >
                <h2
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(1rem, 2.8vw, 2.2rem)',
                    color: '#2F6B4F',
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  크레용숲 차일드아트<br />
                  어린이 색채학교
                </h2>
              </motion.div>

              {/* Right: Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col justify-center"
              >
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.85rem)',
                    color: '#444',
                    lineHeight: 1.6,
                  letterSpacing: 0,
                    fontWeight: 300,
                    marginBottom: '0.5rem',
                  }}
                >
                  색·선·감각을 기반으로 아이의 감정 이해력, 감각 민감성, 자기결(고유 패턴)을 키우는 정서예술 프로그램입니다.
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.85rem)',
                    color: '#2F6B4F',
                    lineHeight: 1.6,
                  letterSpacing: 0,
                    fontWeight: 500,
                  }}
                >
                  '나답게' 그리고 자기 마음을 아는 법을 배우는 <span style={{ color: '#d97878' }}>예술학교</span>입니다.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Content: Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT COLUMN: Circles + Info */}
          <div className="space-y-12 lg:order-1">
            {/* Two Circles */}
            <div className="flex flex-row gap-4 md:gap-8 items-start justify-center">
              {/* Circle 1: 학기제 운영 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center flex-1"
              >
                <div
                  className="rounded-full flex items-center justify-center mb-6"
                  style={{
                    width: 'clamp(120px, 10vw, 176px)',
                    height: 'clamp(120px, 10vw, 176px)',
                    background: '#FADFDB',
                    border: '3px solid #2F6B4F',
                    flex: 'none',
                    overflow: 'hidden',
                    aspectRatio: '1 / 1',
                  }}
                >
                  <p
                    className="text-center px-2 md:px-3"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.75rem, 1.3vw, 1.1rem)',
                      color: '#333',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: 0,
                    }}
                  >
                    학기제 운영
                  </p>
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
                <div
                  className="rounded-full flex items-center justify-center mb-6"
                  style={{
                    width: 'clamp(120px, 10vw, 176px)',
                    height: 'clamp(120px, 10vw, 176px)',
                    background: '#FADFDB',
                    border: '3px solid #2F6B4F',
                    flex: 'none',
                    overflow: 'hidden',
                    aspectRatio: '1 / 1',
                  }}
                >
                  <p
                    className="text-center px-2 md:px-3"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.75rem, 1.3vw, 1.1rem)',
                      color: '#333',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: 0,
                    }}
                  >
                    소수정예<br />
                    연령별 수업
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-full"
              style={{
                background: '#FAFAFA',
                borderRadius: '20px',
                padding: '1.5rem 2rem',
                border: '1px solid #E8E8E8',
                boxSizing: 'border-box',
              }}
            >
              {/* Card Header */}
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                어떻게 진행되나요?
              </p>

              {/* Card Content */}
              <div>
                <div className="space-y-1.5">
                  <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                    월별 감정예술 테마
                  </p>
                  <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                    발달 단계에 맞춘 4~12세 연령별 수업
                  </p>
                  <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                    감정 기록·색 그림으로 글쓰기·자기표현 활동
                  </p>
                  <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                    학기제로 이어지는 연속적 성장 흐름
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-10 lg:order-2"
          >
            {/* 왜 학기제로 운영하나요? */}
            <div
              className="pl-0 lg:pl-6"
              data-pc-border="true"
            >
              <h3
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                왜 학기제로 운영하나요?
              </h3>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1vw, 0.9rem)',
                  color: '#444',
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  fontWeight: 300,
                }}
              >
                아이의 감정과 세계관이 자라는 1년의 흐름을 설계합니다.<br /><br />
                감정은 반복되어야 구조가 되고, 구조는 축적되어야 자기세계관이 됩니다.
              </p>
            </div>

            {/* 같은 대주제라도... */}
            <div>
              <h4
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  background: '#FADFDE',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  display: 'inline-block',
                }}
              >
                같은 대주제라도 아이의 나이에 따라 자연스럽게 '표현 깊이'가 달라집니다
              </h4>
              <div className="space-y-2">
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                  예: 3월 &lt;마음의 의상실&gt;
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                  4~5세: 감각 패턴, 표정, 단순한 색의 기분
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                  6~7세: 마음의 '입고 싶은 색' 찾기
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                  초등: 감정의 층과 겹을 의상으로 상징화
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0 }}>
                  고학년: 감정의 기원·기억을 연결한 스토리 디자인
                </p>
              </div>
            </div>

            {/* Key Statement */}
            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid #E5E7EB',
              }}
            >
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.65rem, 0.6vw, 0.6rem)',
                  color: '#333',
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  fontWeight: 400,
                }}
              >
                단지 난이도만 조정되는 것이 아니라 아이의 발달에 맞춰 해석 능력 자체가 달라지는 것입니다.<br /><br />
                스토리텔링 기반의 이 방식이 아이의 창조성과 자기이해를 가장 빠르게 성장시킵니다.
              </p>
            </div>

            {/* Final Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  marginBottom: '0.75rem',
                  background: '#FADFDE',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  display: 'inline-block',
                }}
              >
                형제·자매는 같은 주제를 배우면서도 각자 다른 방식으로 표현합니다.
              </p>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1vw, 0.9rem)',
                  color: '#444',
                  fontWeight: 300,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                }}
              >
                집에서는 자연스럽게 예술 이야기가 오가고, 서로의 감정을 이해하는 시간이 늘어나며, 두 아이의 성장 기록이 한 흐름으로 이어집니다.
              </p>
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                  color: '#666',
                  fontWeight: 300,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  marginTop: '0.75rem',
                }}
              >
                이 가정 안의 통합 예술 생태계는 많은 부모님이 가장 사랑하는 크레용숲의 특징입니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* 반응형 border 스타일 */}
      <style>{`
        @media (min-width: 1024px) {
          [data-pc-border="true"] {
            border-left: 3px solid #2F6B4F;
          }
        }
      `}</style>
    </section>
  );
}