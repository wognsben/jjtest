import React from 'react';
import { motion } from 'motion/react';
import { getImagePath } from '../utils/imageUtils';

// CHILD ART Section 6: Age-based Development (Premium Editorial Design)
export function ChildArtSection6() {
  return (
    <section className="relative bg-white pt-24 pb-24" style={{ paddingTop: '96px' }}>
      <div className="max-w-[1180px] mx-auto px-0">
        {/* 시각적 패딩 앵커 - 첫 요소가 작아서 padding이 시각적으로 보이지 않는 문제 해결 */}
        <div aria-hidden="true" className="h-24" />
        
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
              lineHeight: 1.5,
              letterSpacing: 0,
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
              lineHeight: 1.5,
              letterSpacing: 0,
              fontWeight: 500,
              marginTop: '0.5rem',
            }}
          >
            감각에서 사고까지 자연스럽게 이어지는 하나의 예술 여정입니다.
          </p>
        </motion.div>

        {/* Age Group 1: 3~5세 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-24 md:mb-32 items-start">
          {/* Left: Circle Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:col-start-1"
          >
            <div className="relative" style={{ width: 'fit-content', maxWidth: '300px' }}>
              <div 
                className="rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(166, 106, 90, 0.12)',
                  width: 'clamp(256px, 20vw, 300px)',
                  height: 'clamp(256px, 20vw, 300px)',
                  maxWidth: '300px',
                  maxHeight: '300px',
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

          {/* Center: Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col w-full lg:col-start-2"
          >
            {/* Capsule Button - 상단 */}
            <div 
              className="px-5 py-2 rounded-full mb-6 inline-block"
              style={{
                background: '#FFF',
                border: '1.5px solid #A66A5A',
                boxShadow: '0 4px 16px rgba(166, 106, 90, 0.12)',
                width: 'fit-content',
              }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#A66A5A',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                첫 예술감각이 열리는 시기
              </p>
            </div>
            
            {/* Description Text Block */}
            <div 
              className="space-y-4"
              style={{
                width: 'clamp(296px, 100%, 500px)',
              }}
            >
              <p 
                className="growth-desc"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.2vw, 0.85rem)',
                  color: '#444',
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  fontWeight: 300,
                }}
              >
                <span 
                  className="line-1"
                  style={{ display: 'block', marginBottom: '0.75rem' }}
                >
                  3~5세는 세상을 만지고, 흔들고, 눌러보고, 색을 비벼보며 배우는 감각 기반 탐색기예요.
                </span>
                <span 
                  className="line-2"
                  style={{ display: 'block' }}
                >
                  크레용숲에서는 배움보다 발견, 결과보다 경험 그 자체를 중요하게 둡니다.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl p-8 md:p-10 lg:col-start-3"
            style={{
              background: '#FDFBF9',
              border: '1px solid #E8DDD5',
            }}
          >
            {/* Capsule - Angled on Card Corner */}
            <div 
              className="absolute px-5 py-2 rounded-full"
              style={{
                top: '-12px',
                left: '-8px',
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
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#A66A5A',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                3~5세는 이렇게 자라요
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
                • 색·촉감·질감 중심의 감각 표현
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
                • 재료·소재·농도를 느끼며 탐험하는 시기
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
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
                  fontSize: 'clamp(0.9rem, 1.2vw, 0.85rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                주요 활동
              </p>
              <div className="space-y-1.5">
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#2F6B4F', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  촉감 드로잉
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#2F6B4F', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  크레용·파스텔 색 섞기
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#2F6B4F', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  자연 오브제로 그리는 이야기
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Age Group 2: 5~7세 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-24 md:mb-32 items-start">
          {/* Left: Circle Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:col-start-1"
          >
            <div className="relative" style={{ width: 'fit-content', maxWidth: '300px' }}>
              <div 
                className="rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(47, 107, 79, 0.12)',
                  width: 'clamp(256px, 20vw, 300px)',
                  height: 'clamp(256px, 20vw, 300px)',
                  maxWidth: '300px',
                  maxHeight: '300px',
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

          {/* Center: Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col w-full lg:col-start-2"
          >
            {/* Capsule Button - 상단 */}
            <div 
              className="px-5 py-2 rounded-full mb-6 inline-block"
              style={{
                background: '#FFF',
                border: '1.5px solid #2F6B4F',
                boxShadow: '0 4px 16px rgba(47, 107, 79, 0.12)',
                width: 'fit-content',
              }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#2F6B4F',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                마음을 그림으로 말하기 시작
              </p>
            </div>
            
            {/* Description Text Block */}
            <div 
              className="space-y-4"
              style={{
                width: 'clamp(296px, 100%, 500px)',
              }}
            >
              <p 
                className="growth-desc"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.2vw, 0.85rem)',
                  color: '#444',
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  fontWeight: 300,
                }}
              >
                <span 
                  className="line-1"
                  style={{ display: 'block', marginBottom: '0.75rem' }}
                >
                  5~7세는 감정·기억·경험이 처음으로 그림의 상징으로 나타나는 황금기입니다.
                </span>
                <span 
                  className="line-2"
                  style={{ display: 'block' }}
                >
                  단순한 낙서가 '이야기 있는 그림'으로 바뀌는 바로 그 순간이죠.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl p-8 md:p-10 lg:col-start-3"
            style={{
              background: '#F7FAF7',
              border: '1px solid #D5E5D5',
            }}
          >
            {/* Capsule - Angled on Card Corner */}
            <div 
              className="absolute px-5 py-2 rounded-full"
              style={{
                top: '-12px',
                left: '-8px',
                background: '#FFF',
                border: '1.5px solid #2F6B4F',
                boxShadow: '0 4px 16px rgba(47, 107, 79, 0.12)',
                transform: 'rotate(-3deg)',
                zIndex: 10,
              }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#2F6B4F',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                5~7세는 이렇게 자라요
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
                감정이 색이 되는 과정 경험
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
                "이건 이런 느낌이야"라고 마음을 설명하는 언어 발달
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
                스스로 선택하고 결정하는 자기결정성 강화
              </p>
            </div>

            <div 
              className="pt-5"
              style={{ borderTop: '1px solid #D5E5D5' }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.2vw, 0.85rem)',
                  color: '#A66A5A',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                주요 활동
              </p>
              <div className="space-y-1.5">
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  감정 스케치
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  텍스처(질감) 드로잉
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#A66A5A', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  상징적 그림 만들기
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Age Group 3: 초등 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20 items-start">
          {/* Left: Circle Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:col-start-1"
          >
            <div className="relative" style={{ width: 'fit-content', maxWidth: '300px' }}>
              <div 
                className="rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(166, 106, 90, 0.12)',
                  width: 'clamp(256px, 20vw, 300px)',
                  height: 'clamp(256px, 20vw, 300px)',
                  maxWidth: '300px',
                  maxHeight: '300px',
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

          {/* Center: Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col w-full lg:col-start-2"
          >
            {/* Capsule Button - 상단 */}
            <div 
              className="px-5 py-2 rounded-full mb-6 inline-block"
              style={{
                background: '#FFF',
                border: '1.5px solid #A66A5A',
                boxShadow: '0 4px 16px rgba(166, 106, 90, 0.12)',
                width: 'fit-content',
              }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#A66A5A',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                나만의 세계를 그리는 시기
              </p>
            </div>
            
            {/* Description Text Block */}
            <div 
              className="space-y-4"
              style={{
                width: 'clamp(296px, 100%, 500px)',
              }}
            >
              <p 
                className="growth-desc"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.85rem, 1.2vw, 0.85rem)',
                  color: '#444',
                  lineHeight: 1.5,
                  letterSpacing: 0,
                  fontWeight: 300,
                }}
              >
                <span 
                  className="line-1"
                  style={{ display: 'block', marginBottom: '0.75rem' }}
                >
                  초등 시기는 정체성의 씨앗이 자라며,
                </span>
                <span 
                  className="line-2"
                  style={{ display: 'block', marginBottom: '0.75rem' }}
                >
                  감정·기억·관계가 스토리 있는 그림으로 확장되는 시기입니다.
                </span>
                <span 
                  className="line-3"
                  style={{ display: 'block' }}
                >
                  이 시기에 생긴 '자기서사'는 평생의 기반이 됩니다.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative rounded-3xl p-8 md:p-10 lg:col-start-3"
            style={{
              background: '#FDFBF9',
              border: '1px solid #E8DDD5',
            }}
          >
            {/* Capsule - Angled on Card Corner */}
            <div 
              className="absolute px-5 py-2 rounded-full"
              style={{
                top: '-12px',
                left: '-8px',
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
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                  color: '#A66A5A',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                초등은 이렇게 자라요
              </p>
            </div>

            <div className="space-y-2 mb-6">
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
                감정언어가 더 선명해지고
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
                상징과 표현이 깊어지고
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#666', lineHeight: 1.5, letterSpacing: 0, fontWeight: 300 }}>
                나만의 시선과 세계관이 자랍니다
              </p>
            </div>

            <div 
              className="pt-5"
              style={{ borderTop: '1px solid #E8DDD5' }}
            >
              <p 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(0.9rem, 1.2vw, 0.85rem)',
                  color: '#2F6B4F',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                주요 활동
              </p>
              <div className="space-y-1.5">
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#2F6B4F', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  감정 구조 드로잉
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#2F6B4F', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  감정 오브제 제작
                </p>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 'clamp(0.85rem, 2vw, 0.85rem)', color: '#2F6B4F', lineHeight: 1.5, letterSpacing: 0, fontWeight: 400 }}>
                  자기 서사 미니북
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
              lineHeight: 1.5,
              letterSpacing: 0,
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
