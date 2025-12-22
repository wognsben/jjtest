import React from 'react';
import { motion } from 'motion/react';
import { ArtCircle3D, StaticArtCircle } from './ChildArtSection6_3DCircle';

// CHILD ART Section 6: Age-based Development
export function ChildArtSection6() {
  // Check WebGL support
  const [hasWebGL, setHasWebGL] = React.useState(true);

  React.useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        return false;
      }
    };

    setHasWebGL(checkWebGL());
  }, []);

  // Image sets for each age group
  const artImages = {
    age35: [
      'https://images.unsplash.com/photo-1666710988451-ba4450498967?w=800&q=80',
      'https://images.unsplash.com/photo-1620398716856-67a4fc2c2fe6?w=800&q=80',
      'https://images.unsplash.com/photo-1610274672835-65a79c852f58?w=800&q=80',
    ],
    age57: [
      'https://images.unsplash.com/photo-1629822908853-b1d2a39ece98?w=800&q=80',
      'https://images.unsplash.com/photo-1611085667203-7efa7c067bce?w=800&q=80',
      'https://images.unsplash.com/photo-1564152078766-9d62133c7e9a?w=800&q=80',
    ],
    elementary: [
      'https://images.unsplash.com/photo-1727768351795-2390d19b2b41?w=800&q=80',
      'https://images.unsplash.com/photo-1555942861-769f7774848a?w=800&q=80',
      'https://images.unsplash.com/photo-1578521157034-273977158e71?w=800&q=80',
    ],
  };

  const CircleComponent = hasWebGL ? ArtCircle3D : StaticArtCircle;

  return (
    <section className="relative min-h-screen bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Intro Text */}
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
              color: '#8fbc88',
              lineHeight: 1.9,
              fontWeight: 400,
            }}
          >
            아이의 예술발달은 숫자로 나뉘어 보이지만 실제로는 감각에서 사고까지
          </p>
          <p 
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
              color: '#d97878',
              lineHeight: 1.9,
              fontWeight: 400,
              marginTop: '0.5rem',
            }}
          >
            자연스럽게 이어지는 하나의 예술 여정입니다.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side: Circle Cards */}
          <div className="space-y-16">
            {/* Circle 1: 3-5세 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="relative flex-shrink-0">
                {/* 3D Circle with rotating images */}
                <CircleComponent
                  images={artImages.age35}
                  bgColor="rgba(255, 182, 193, 0.3)"
                  borderColor="#FFB6C1"
                />
                
                {/* Label */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-pink-100 border-2 border-pink-300 rounded-full px-6 py-2">
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                        color: '#ff6b9d',
                        fontWeight: 500,
                      }}
                    >
                      색 예술공간이 열리는 시기
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    color: '#666',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  3~5세는 세상을 만지고, 흔들고, 눌러보고, 색을 배우는 감각 기반 탐색기예요.<br />
                  그래용숲에서는 배움보다 발견, 결과보다 경험 그 자체를 중요하게 둡니다.
                </p>
              </div>
            </motion.div>

            {/* Circle 2: 5-7세 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <div className="relative flex-shrink-0">
                {/* 3D Circle with rotating images */}
                <CircleComponent
                  images={artImages.age57}
                  bgColor="rgba(143, 188, 136, 0.3)"
                  borderColor="#8fbc88"
                />
                
                {/* Label */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-green-100 border-2 border-green-300 rounded-full px-6 py-2">
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                        color: '#8fbc88',
                        fontWeight: 500,
                      }}
                    >
                      바둑을 그림으로 받아기 시작
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    color: '#666',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  5~7세는 감싹·기억·생명이 자움의 그림으로 나타나는 표현기입니다.<br />
                  단순한 낙서가 '이야기 있는 그림'으로 바뀌 그 순간이죠.
                </p>
              </div>
            </motion.div>

            {/* Circle 3: 초등 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <div className="relative flex-shrink-0">
                {/* 3D Circle with rotating images */}
                <CircleComponent
                  images={artImages.elementary}
                  bgColor="rgba(255, 182, 193, 0.3)"
                  borderColor="#FFB6C1"
                />
                
                {/* Label */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-pink-100 border-2 border-pink-300 rounded-full px-6 py-2">
                    <p 
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                        color: '#ff6b9d',
                        fontWeight: 500,
                      }}
                    >
                      나만의 세계를 그리는 시기
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    color: '#666',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  초등 시기는 상ニック성의 세살어 자리며,<br />
                  강싹·기억·관계가 스느리로 '그림으로 닉상드는' 시기입니다.<br />
                  이 시기에 생긴 '자기서사'는 평생의 기단이 됩니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Info Boxes */}
          <div className="space-y-8">
            {/* Box 1: 3~5세 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-amber-50/50 border-2 border-amber-300/50 rounded-3xl p-8"
            >
              <h3 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.1rem, 1.7vw, 1.3rem)',
                  color: '#d97878',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                3~5세는 이렇게 자라요
              </h3>
              
              <div className="space-y-2 mb-6">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                    color: '#666',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  • 색이와 같는 방새 중심 표현
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
                  • 주긴·소재·닉도 등을 느끼며 탐험하는 시기
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
                  • 감정을 색으로 처옴 연니는 경험
                </p>
              </div>

              <div className="border-t border-amber-300/50 pt-4">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    color: '#8fbc88',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                  }}
                >
                  주요 활동
                </p>
                <div className="space-y-1.5">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 촉감 드로잉
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 크예용·모빌라수로 섞욌
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 자연 오브제로 그리는 이야기
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 2: 5~7세 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-amber-50/50 border-2 border-amber-300/50 rounded-3xl p-8"
            >
              <h3 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.1rem, 1.7vw, 1.3rem)',
                  color: '#d97878',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                5~7세 이렇게 자라요
              </h3>
              
              <div className="space-y-2 mb-6">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                    color: '#666',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  • 관찰이 서이 되는 리열 표현
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
                  • 스토리를 기억하고 작금 담 해는 연ニック 방식
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
                  • 스스로 녟작싱고 골해는 자기감정상 감싹
                </p>
              </div>

              <div className="border-t border-amber-300/50 pt-4">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    color: '#8fbc88',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                  }}
                >
                  주요 활동
                </p>
                <div className="space-y-1.5">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 김싹 스케치
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 테크체(훌살기) 드므잉
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 상싹의 지도 만들기
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 3: 초등 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-amber-50/50 border-2 border-amber-300/50 rounded-3xl p-8"
            >
              <h3 
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 'clamp(1.1rem, 1.7vw, 1.3rem)',
                  color: '#d97878',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                초등 이렇게 자라요
              </h3>
              
              <div className="space-y-2 mb-6">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                    color: '#666',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  • 관찰자기의 신판설가고
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
                  • 상싹과 표예의 경험치싼
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
                  • 미디어적 서소질적 녟력니다
                </p>
              </div>

              <div className="border-t border-amber-300/50 pt-4">
                <p 
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                    color: '#8fbc88',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                  }}
                >
                  주요 활동
                </p>
                <div className="space-y-1.5">
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 관찰 구조 드므잉
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 강점 오보제 폐턴
                  </p>
                  <p 
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                      color: '#666',
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    • 자기 서사 미니북
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