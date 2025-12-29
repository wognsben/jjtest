import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { getImagePath } from "../../utils/imageUtils";

// SNS 채널 데이터
const snsChannels = [
  {
    id: 0,
    title: "카카오톡 채널",
    description: "Forêt des Crayons·크레용숲의 새로운 소식을 가장 먼저 받아보세요",
    icon: "message-circle",
    imagePath: getImagePath("/assets/1x/kakao.png"),
    link: "https://pf.kakao.com/_ELTxcK",
    gradient: "from-[#D4A574]/10 to-[#D4A574]/5",
    iconColor: "text-[#D4A574]",
    iconBg: "bg-[#D4A574]/10",
    borderColor: "border-[#D4A574]/20",
  },
  {
    id: 1,
    title: "인스타그램",
    description: "@crayonforest.art",
    subtitle: "@crayonforest_childart",
    icon: "instagram",
    imagePath: getImagePath("/assets/1x/instagram.png"),
    link: "https://www.instagram.com/crayonforest.art",
    link2: "https://www.instagram.com/crayonforest_childart",
    gradient: "from-[#fadfde]/30 to-[#fadfde]/10",
    iconColor: "text-[#6B4423]",
    iconBg: "bg-[#fadfde]/50",
    borderColor: "border-[#fadfde]/40",
  },
  {
    id: 2,
    title: "네이버 블로그",
    description: "dreaming_art_play",
    icon: "mail",
    imagePath: getImagePath("/assets/1x/blog bl.png"),
    link: "https://blog.naver.com/dreaming_art_play",
    gradient: "from-[#2D5016]/10 to-[#2D5016]/5",
    iconColor: "text-[#2D5016]",
    iconBg: "bg-[#2D5016]/10",
    borderColor: "border-[#2D5016]/20",
  }
];

// 아이콘 SVG 컴포넌트
function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactElement> = {
    "message-circle": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    ),
    "instagram": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    "mail": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  };
  return icons[name] || null;
}

// 미니멀 일러스트 컴포넌트 (이미지로 대체)
function MinimalIllustration() {
  return (
    <div className="illustration-container">
      <img
        src={getImagePath("/assets/program/Social Medial Discussion 2.png")}
        alt="Social Media Discussion"
        className="minimal-illustration"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          console.error('Image load error:', target.src);
          
          // 대문자 확장자 시도
          if (target.src.includes('Social%20Medial%20Discussion%202')) {
            if (target.src.endsWith('.png') || target.src.includes('%202.png')) {
              target.src = getImagePath('/assets/program/Social Medial Discussion 2.PNG');
            } else {
              // 모든 시도 실패 시 이미지 숨김
              target.style.display = 'none';
            }
          }
        }}
      />
    </div>
  );
}

// 나선 위치 계산 함수 (세로 비스듬하게)
function spiralPosition(i: number, activeIndex: number) {
  const step = i - activeIndex;
  
  return {
    x: step * 60, // 좌우 오프셋 감소
    y: step * 150 * -1, // 위로 올라가는 느낌 (세로 배치) - 더 위로 올라가도록 증가
    rotation: step * 8, // 비스듬한 각도
    scale: 1 - Math.abs(step) * 0.15,
    opacity: 1 - Math.abs(step) * 0.3,
    zIndex: 10 - Math.abs(step),
    blur: Math.abs(step) * 3
  };
}

// Spiral SNS 카드 컴포넌트
const SpiralSNSCard = React.forwardRef<HTMLDivElement, {
  channel: typeof snsChannels[0];
  index: number;
  isActive: boolean;
  onSelect: () => void;
  showInstagramOptions?: boolean;
  onInstagramLinkSelect?: (link: string) => void;
}>(({ channel, index, isActive, onSelect, showInstagramOptions, onInstagramLinkSelect }, ref) => {

    return (
    <div
      ref={ref}
      className={`spiral-item ${isActive ? 'spiral-active' : ''}`}
      data-index={index}
      onClick={() => {
        // 인스타그램이 아니거나 이미 선택 UI가 보이는 경우만 onSelect
        if (channel.id !== 1 || !showInstagramOptions) {
          onSelect();
        }
      }}
    >
      <div className={`absolute inset-0 bg-white border ${channel.borderColor} rounded-3xl spiral-card-bg`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} rounded-3xl spiral-card-gradient`} />
      
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between min-h-[200px]">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-2xl ${channel.iconBg} border ${channel.borderColor} ${channel.iconColor} spiral-icon-container flex items-center justify-center`}>
            {channel.imagePath ? (
              <img 
                src={channel.imagePath} 
                alt={channel.title}
                className="w-6 h-6 object-contain"
              />
            ) : (
              channel.icon && <Icon name={channel.icon} className="w-6 h-6" />
            )}
          </div>
          </div>

        <div className="space-y-2 mt-auto">
          <h3 className="text-xl md:text-2xl text-[#6B4423] tracking-tight font-semibold">
            {channel.title}
          </h3>
          {channel.id === 1 && channel.link2 ? (
            showInstagramOptions && isActive ? (
              // 인스타그램 선택 UI
              <div className="space-y-2 mt-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInstagramLinkSelect?.(channel.link);
                  }}
                  className="w-full text-left px-4 py-2.5 bg-white border border-[#fadfde]/60 rounded-xl hover:bg-[#fadfde]/20 transition-all duration-200 hover:scale-[1.02] hover:border-[#fadfde]"
                >
                  <p className="text-[#6B4423] font-medium text-sm">{channel.description}</p>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInstagramLinkSelect?.(channel.link2);
                  }}
                  className="w-full text-left px-4 py-2.5 bg-white border border-[#fadfde]/60 rounded-xl hover:bg-[#fadfde]/20 transition-all duration-200 hover:scale-[1.02] hover:border-[#fadfde]"
                >
                  <p className="text-[#6B4423] font-medium text-sm">{channel.subtitle}</p>
                </button>
              </div>
            ) : (
              <p className="text-[#6B4423]/60 text-sm leading-relaxed">
                {isActive ? "클릭하여 계정 선택" : `${channel.description} / ${channel.subtitle}`}
              </p>
            )
          ) : (
            <p className="text-[#6B4423]/60 text-sm leading-relaxed">
              {channel.description}
            </p>
          )}
          </div>
        </div>

      <div className={`absolute -inset-[1px] bg-gradient-to-r ${channel.gradient} rounded-3xl blur-xl -z-10 spiral-glow`} />
    </div>
  );
});

export function BentoGrid() {
  const [activeIndex, setActiveIndex] = useState(0); // 기본: 카카오톡 (섹션 진입 시 즉시 보이도록)
  const [showInstagramOptions, setShowInstagramOptions] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showKakaoTooltip, setShowKakaoTooltip] = useState(false);

  const handleKakaoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowKakaoTooltip(true);
    setTimeout(() => setShowKakaoTooltip(false), 2000);
  };
  const spiralWrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Spiral 애니메이션 렌더링
  useEffect(() => {
    if (isMobile || !spiralWrapRef.current) return;

    const items = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (items.length === 0) return;

    items.forEach((item, i) => {
      const pos = spiralPosition(i, activeIndex);
      const isActive = i === activeIndex;

      gsap.to(item, {
        x: pos.x,
        y: pos.y,
        rotation: pos.rotation,
        scale: pos.scale,
        opacity: pos.opacity,
        zIndex: pos.zIndex,
        filter: `blur(${pos.blur}px)`,
        duration: 0.8,
        ease: "power3.out",
      });

      // Active 카드에만 클래스 추가
      item.classList.toggle("spiral-active", isActive);
    });
  }, [activeIndex, isMobile]);

  // 자동 슬라이드 회전 (스크롤 제거)
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % snsChannels.length;
        // 인스타그램이 아닌 경우 선택 UI 초기화
        if (nextIndex !== 1) {
          setShowInstagramOptions(false);
        }
        return nextIndex;
      });
    }, 3000); // 3초마다 자동 전환

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleChannelSelect = (index: number) => {
    setActiveIndex(index);
    // 인스타그램인 경우 선택 UI 표시
    if (index === 1) {
      setShowInstagramOptions(true);
    } else {
      // 다른 카드는 선택 UI 초기화 후 링크 이동
      setShowInstagramOptions(false);
      const channel = snsChannels[index];
      if (channel && channel.link) {
        // 애니메이션 완료 후 링크 이동
        setTimeout(() => {
          window.open(channel.link, '_blank', 'noopener,noreferrer');
        }, 800); // GSAP 애니메이션 duration과 맞춤
      }
    }
  };

  const handleInstagramLinkSelect = (link: string) => {
    // 인스타그램 링크 선택 후 이동
    setTimeout(() => {
      window.open(link, '_blank', 'noopener,noreferrer');
      setShowInstagramOptions(false);
    }, 100);
  };

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px]">

          {/* LEFT 영역: 텍스트 블록 + 일러스트 */}
          <div className="space-y-6 orbit-left-zone">
            <div className="space-y-4">
              <h2 className="text-[clamp(1.25rem,2vw,1.5rem)] text-[#363636] leading-[1.4]">
                <strong>Forêt des Crayons·크레용숲</strong>
              </h2>
            </div>
            
            <div className="space-y-2 text-[#555555]">
              <p>카카오톡 채널에서 '크레용숲'을 검색, 채널 추가하면</p>
              <p>프로젝트 오픈 소식을 가장 먼저 받을 수 있어요.</p>
          </div>
          
            <div className="pt-4 hidden md:block">
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <a
                    href="#"
                    onClick={handleKakaoClick}
                    className="inline-flex items-center gap-3 bg-white border border-[#D4A574]/30 hover:border-[#D4A574]/50 text-[#6B4423] px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#D4A574]/5 cursor-pointer"
                  >
                    {snsChannels[0].imagePath ? (
                      <img src={snsChannels[0].imagePath} alt="카카오톡" className="w-5 h-5 object-contain" />
                    ) : (
                      <Icon name="message-circle" className="w-5 h-5" />
                    )}
                    <span>카카오톡 채널</span>
                  </a>
                  {/* 준비중 툴팁 */}
                  {showKakaoTooltip && (
                    <div
                      className="absolute left-0 bottom-full mb-2 px-4 py-2 rounded-full whitespace-nowrap z-50"
                      style={{
                        background: 'rgba(166, 106, 90, 0.95)',
                        color: '#FFF',
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '0.85rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      준비중입니다
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <button
                    onClick={() => setShowInstagramOptions(!showInstagramOptions)}
                    className="inline-flex items-center gap-3 bg-white border border-[#fadfde]/60 hover:border-[#fadfde] text-[#6B4423] px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#fadfde]/10"
                  >
                    {snsChannels[1].imagePath ? (
                      <img src={snsChannels[1].imagePath} alt="Instagram" className="w-5 h-5 object-contain" />
                    ) : (
                      <Icon name="instagram" className="w-5 h-5" />
                    )}
                    <span>인스타그램</span>
                  </button>
                  
                  {/* 인스타그램 링크 선택 툴팁 */}
                  {showInstagramOptions && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-[#fadfde]/60 rounded-xl shadow-lg p-2 z-50 min-w-[200px]">
                      <a
                        href="https://www.instagram.com/crayonforest.art"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setShowInstagramOptions(false);
                          handleInstagramLinkSelect("https://www.instagram.com/crayonforest.art");
                        }}
                        className="block px-4 py-2 rounded-lg hover:bg-[#fadfde]/20 transition-colors text-sm text-[#6B4423]"
                      >
                        @crayonforest.art
                      </a>
                      <a
                        href="https://www.instagram.com/crayonforest_childart"
              target="_blank"
              rel="noopener noreferrer"
                        onClick={() => {
                          setShowInstagramOptions(false);
                          handleInstagramLinkSelect("https://www.instagram.com/crayonforest_childart");
                        }}
                        className="block px-4 py-2 rounded-lg hover:bg-[#fadfde]/20 transition-colors text-sm text-[#6B4423]"
                      >
                        @crayonforest_childart
                      </a>
                    </div>
          )}
        </div>

                <a
                  href="https://blog.naver.com/dreaming_art_play"
              target="_blank"
              rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white border border-[#2D5016]/30 hover:border-[#2D5016]/50 text-[#6B4423] px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#2D5016]/5"
                >
                  {snsChannels[2].imagePath ? (
                    <img src={snsChannels[2].imagePath} alt="Blog" className="w-5 h-5 object-contain" />
                  ) : (
                    <Icon name="mail" className="w-5 h-5" />
                  )}
                  <span>네이버 블로그</span>
                </a>
              </div>
            </div>

            {/* 미니멀 일러스트 */}
            <div className="mt-8">
              <MinimalIllustration />
            </div>
          </div>

          {/* RIGHT 영역: Spiral SNS */}
          <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[500px] spiral-right-zone">
            {isMobile ? (
              /* 모바일: 세로 스택 */
              <div className="w-full max-w-md space-y-4">
                {snsChannels.map((channel, index) => (
                  <div
                    key={channel.id}
                    className={`spiral-mobile-card ${activeIndex === index ? 'spiral-mobile-active' : ''}`}
                    onClick={() => handleChannelSelect(index)}
            >
                    <div className={`absolute inset-0 bg-white border ${channel.borderColor} rounded-3xl`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} rounded-3xl`} />
                    
                    <div className="relative h-full p-6 flex flex-col justify-between min-h-[160px]">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-2xl ${channel.iconBg} border ${channel.borderColor} ${channel.iconColor} flex items-center justify-center`}>
                          {channel.imagePath ? (
                            <img 
                              src={channel.imagePath} 
                              alt={channel.title}
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            channel.icon && <Icon name={channel.icon} className="w-6 h-6" />
                          )}
                        </div>
        </div>

                      <div className="space-y-2 mt-auto">
                        <h3 className="text-xl text-[#6B4423] tracking-tight font-semibold">
                          {channel.title}
          </h3>
                        {channel.id === 1 && channel.link2 ? (
                          <div className="space-y-1">
              <a 
                              href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                              className="block text-[#6B4423]/60 hover:text-[#6B4423] text-sm leading-relaxed transition-colors underline decoration-dotted underline-offset-4"
                              onClick={(e) => e.stopPropagation()}
              >
                              {channel.description}
              </a>
              <a 
                              href={channel.link2}
                target="_blank"
                rel="noopener noreferrer"
                              className="block text-[#6B4423]/40 hover:text-[#6B4423]/70 text-xs transition-colors underline decoration-dotted underline-offset-4"
                              onClick={(e) => e.stopPropagation()}
              >
                              {channel.subtitle}
              </a>
            </div>
          ) : (
                          <p className="text-[#6B4423]/60 text-sm leading-relaxed">
                            {channel.description}
                </p>
              )}
                      </div>
        </div>
      </div>
                ))}
              </div>
            ) : (
              /* 데스크톱: Spiral Orbit */
              <div ref={spiralWrapRef} className="spiral-wrap">
                {snsChannels.map((channel, index) => (
                  <SpiralSNSCard
                    key={channel.id}
                    channel={channel}
                    index={index}
                    isActive={activeIndex === index}
                    onSelect={() => handleChannelSelect(index)}
                    showInstagramOptions={showInstagramOptions}
                    onInstagramLinkSelect={handleInstagramLinkSelect}
                    ref={(el) => {
                      if (el) cardRefs.current[index] = el;
                    }}
                  />
          ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
