import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// CHILD ART Section 6: Age-based Development (Premium Editorial Design)
export function ChildArtSection6() {
  return (
    <section className="relative bg-white py-32 md:py-40 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1rem, 2.2vw, 1.6rem)',
              color: '#2F6B4F',
              lineHeight: 1.8,
              fontWeight: 500,
            }}
          >
            아이의 예술발달은 숫자로 나뉘어 보이지만
          </p>
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1rem, 2.2vw, 1.6rem)',
              color: '#A66A5A',
              lineHeight: 1.8,
              fontWeight: 500,
              marginTop: '0.5rem',
            }}
          >
            감각에서 사고까지 자연스럽게 이어지는 하나의 예술 여정입니다.
          </p>
        </motion.div>

        {/* Age Group 1: 3~5세 */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 md:mb-32 items-start">
          {/* Left: Circle Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div 
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(166, 106, 90, 0.12)',
                }}
              >
                <img 
                  src={getImagePath("/assets/program/child/3-5.jpg")}
                  alt="3~5세 색 예술공간"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const src = e.currentTarget.src;
                    if (src.endsWith('.jpg')) {
                      e.currentTarget.src = getImagePath('/assets/program/child/3-5.JPG');
                    } else if (src.endsWith('.JPG')) {
                      e.currentTarget.src = getImagePath('/assets/program/child/3-5.png');
                    }
                  }}
                />
              </div>
              {/* Small Circle Image - Bottom Left */}
              <div 
                className="absolute rounded-full overflow-hidden"
                style={{
                  bottom: '8px',
                  left: '8px',
                  boxShadow: '0 4px 16px rgba(166, 106, 90, 0.15)',
                  border: '3px solid #FFF',
                  width: '88px',
                  height: '88px',
                }}
              >
                <img 
                  src={getImagePath("/assets/program/child/child3-5.png")}
                  alt="3~5세"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1666710988451-ba4450498967?w=200&q=80';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: '#FDFBF9',
              border: '1px solid #E8DDD5',
            }}
          >
            {/* Capsule - Angled on Card Corner */}
            <div 
              className="absolute px-5 py-2 rounded-full"
              style={{
                bottom: '-12px',
                right: '-8px',
                background: '#FFF',
                border: '1.5px solid #A66A5A',
                boxShadow: '0 4px 16px rgba(166, 106, 90, 0.12)',
                transform: 'rotate(-3deg)',
                zIndex: 10,
              }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)',
                  color: '#A66A5A',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                3~5세는 이렇게 자라요
              </p>
            </div>
            <h3 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                color: '#A66A5A',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              색 예술공간이 열리는 시기
            </h3>
            
            <p 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                color: '#444',
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}
            >
              세상을 만지고, 흔들고, 눌러보고, 색을 배우는 감각 기반 탐색기예요.
              크레용숲에서는 배움보다 발견, 결과보다 경험 그 자체를 중요하게 둡니다.
            </p>

            <div className="space-y-2 mb-6">
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 색·촉감·질감 중심의 감각 표현
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 재료·소재·농도를 느끼며 탐험하는 시기
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 감정을 색으로 처음 연결하는 경험
              </p>
            </div>

            <div 
              className="pt-5"
              style={{ borderTop: '1px solid #E8DDD5' }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                주요 활동
              </p>
              <div className="space-y-1.5">
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.85rem', color: '#2F6B4F', lineHeight: 1.7, fontWeight: 400 }}>
                  촉감 드로잉 · 크레용·파스텔 색 섞기 · 자연 오브제로 그리는 이야기
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Age Group 2: 5~7세 */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 md:mb-32 items-start">
          {/* Left: Circle Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:order-2"
          >
            <div className="relative">
              <div 
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(47, 107, 79, 0.12)',
                }}
              >
                <img 
                  src={getImagePath("/assets/program/child/5-7.jpg")}
                  alt="5~7세 표현의 시작"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const src = e.currentTarget.src;
                    if (src.endsWith('.jpg')) {
                      e.currentTarget.src = getImagePath('/assets/program/child/5-7.JPG');
                    } else if (src.endsWith('.JPG')) {
                      e.currentTarget.src = getImagePath('/assets/program/child/5-7.png');
                    }
                  }}
                />
              </div>
              {/* Small Circle Image - Bottom Left */}
              <div 
                className="absolute rounded-full overflow-hidden"
                style={{
                  bottom: '8px',
                  left: '8px',
                  boxShadow: '0 4px 16px rgba(47, 107, 79, 0.15)',
                  border: '3px solid #FFF',
                  width: '88px',
                  height: '88px',
                }}
              >
                <img 
                  src={getImagePath("/assets/program/child/child5-7.png")}
                  alt="5~7세"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1629822908853-b1d2a39ece98?w=200&q=80';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl p-8 md:p-10 lg:order-1"
            style={{
              background: '#F7FAF7',
              border: '1px solid #D5E5D5',
            }}
          >
            {/* Capsule - Angled on Card Corner */}
            <div 
              className="absolute px-5 py-2 rounded-full"
              style={{
                bottom: '-12px',
                left: '-8px',
                background: '#FFF',
                border: '1.5px solid #2F6B4F',
                boxShadow: '0 4px 16px rgba(47, 107, 79, 0.12)',
                transform: 'rotate(3deg)',
                zIndex: 10,
              }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)',
                  color: '#2F6B4F',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                5~7세는 이렇게 자라요
              </p>
            </div>
            <h3 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                color: '#2F6B4F',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              마음을 그림으로 담기 시작
            </h3>
            
            <p 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                color: '#444',
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}
            >
              감각·기억·상상이 자유로운 그림으로 나타나는 표현기입니다.
              단순한 낙서가 '이야기 있는 그림'으로 바뀌는 순간이죠.
            </p>

            <div className="space-y-2 mb-6">
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 관찰이 시작되는 리얼 표현
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 스토리를 기억하고 장면을 담아내는 연속 방식
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 스스로 선택하고 결정하는 자기감정 감각
              </p>
            </div>

            <div 
              className="pt-5"
              style={{ borderTop: '1px solid #D5E5D5' }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  color: '#A66A5A',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                주요 활동
              </p>
              <div className="space-y-1.5">
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.85rem', color: '#A66A5A', lineHeight: 1.7, fontWeight: 400 }}>
                  감정 스케치 · 텍스처(질감) 드로잉 · 상상의 지도 만들기
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Age Group 3: 초등 */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-start">
          {/* Left: Circle Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div 
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(166, 106, 90, 0.12)',
                }}
              >
                <img 
                  src={getImagePath("/assets/program/child/7-13.jpg")}
                  alt="초등 나만의 세계"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const src = e.currentTarget.src;
                    if (src.endsWith('.jpg')) {
                      e.currentTarget.src = getImagePath('/assets/program/child/7-13.JPG');
                    } else if (src.endsWith('.JPG')) {
                      e.currentTarget.src = getImagePath('/assets/program/child/7-13.png');
                    }
                  }}
                />
              </div>
              {/* Small Circle Image - Bottom Left */}
              <div 
                className="absolute rounded-full overflow-hidden"
                style={{
                  bottom: '8px',
                  left: '8px',
                  boxShadow: '0 4px 16px rgba(166, 106, 90, 0.15)',
                  border: '3px solid #FFF',
                  width: '88px',
                  height: '88px',
                }}
              >
                <img 
                  src={getImagePath("/assets/program/child/child7-13.png")}
                  alt="초등"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1727768351795-2390d19b2b41?w=200&q=80';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl p-8 md:p-10"
            style={{
              background: '#FDFBF9',
              border: '1px solid #E8DDD5',
            }}
          >
            {/* Capsule - Angled on Card Corner */}
            <div 
              className="absolute px-5 py-2 rounded-full"
              style={{
                bottom: '-12px',
                right: '-8px',
                background: '#FFF',
                border: '1.5px solid #A66A5A',
                boxShadow: '0 4px 16px rgba(166, 106, 90, 0.12)',
                transform: 'rotate(-3deg)',
                zIndex: 10,
              }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)',
                  color: '#A66A5A',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                초등은 이렇게 자라요
              </p>
            </div>
            <h3 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                color: '#A66A5A',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              나만의 세계를 그리는 시기
            </h3>
            
            <p 
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                color: '#444',
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: '1.5rem',
              }}
            >
              상징성의 세계가 자리 잡으며, 감각·기억·관계가 스토리로 '그림으로 엮이는' 시기입니다.
              이 시기에 생긴 '자기서사'는 평생의 기반이 됩니다.
            </p>

            <div className="space-y-2 mb-6">
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 관찰력의 심화와 구조화
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 상상과 표현의 경험 축적
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.9rem', color: '#666', lineHeight: 1.8, fontWeight: 300 }}>
                • 미디어적·서사적 능력 확장
              </p>
            </div>

            <div 
              className="pt-5"
              style={{ borderTop: '1px solid #E8DDD5' }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                주요 활동
              </p>
              <div className="space-y-1.5">
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: '0.85rem', color: '#2F6B4F', lineHeight: 1.7, fontWeight: 400 }}>
                  관찰 구조 드로잉 · 감정 오브제 패턴 · 자기 서사 미니북
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 md:mt-24"
        >
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
              color: '#2F6B4F',
              lineHeight: 1.9,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            "아이의 기질과 감정의 속도를 따라가며,<br className="md:hidden" /> 마음이 자라는 미술입니다."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
