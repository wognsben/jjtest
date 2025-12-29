import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

type Phase = 'intro' | 'showRoom' | 'stackToCapsule' | 'idle';

interface Room {
  num: string;
  name: string;
  subtitle: string;
  quote: string;
  items: string[];
}

// Capsule Card 컴포넌트 (프로 디자이너 기준 스타일)
function CapsuleCard({ room, order, isHovered }: { room: Room; order: number; isHovered?: boolean }) {
  return (
    <div
      className="rounded-full px-8 py-6 relative overflow-hidden"
      style={{
        background: '#FADFDB',
        border: '1px solid rgba(185, 132, 99, 0.35)',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06)',
        width: '330px',
        minHeight: '96px',
      }}
    >
      <div className="flex items-center gap-3 mb-1">
        <span
          className="text-xs font-medium px-3 py-1 rounded-full tracking-wide"
          style={{
            background: '#A66A5A',
            color: '#FFF',
            fontFamily: "'Noto Serif KR', serif",
          }}
        >
          {room.num} ROOM
        </span>
        <span
          className="text-xs"
          style={{
            color: '#888',
            fontFamily: "'Noto Serif KR', serif",
          }}
        >
          • 3개월
        </span>
      </div>
      <h5
        className="mt-1"
        style={{
          fontFamily: "'Noto Serif KR', serif",
          fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
          color: '#2F6B4F',
          fontWeight: 600,
        }}
      >
        {room.name}
      </h5>
      <p
        className="mt-1 text-sm"
        style={{
          fontFamily: "'Noto Serif KR', serif",
          fontSize: '0.85rem',
          color: 'rgba(166, 106, 90, 0.8)',
          fontWeight: 400,
        }}
      >
        {room.subtitle}
      </p>
    </div>
  );
}

export function PhilosophyRoomsExperience({ rooms }: { rooms: Room[] }) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const hasPlayedRef = React.useRef(false);

  const [phase, setPhase] = React.useState<Phase>('intro');
  const [activeRoom, setActiveRoom] = React.useState<number | null>(null);
  const [stackedRooms, setStackedRooms] = React.useState<number[]>([]);
  const [expanded, setExpanded] = React.useState(false);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);

  // Capsule Stack 스타일 (겹치지 않도록 넉넉한 간격)
  const capsuleStackStyle = [
    { y: 0, opacity: 1 },
    { y: 100, opacity: 0.9 },
    { y: 200, opacity: 0.8 },
    { y: 300, opacity: 0.7 },
  ];

  // ROOM 회전 방향 (시계방향 느낌)
  const roomRotations = [-1.2, 1.0, -0.8, 0.6];

  // 텍스트 상수 (절대 변경 금지)
  const PHILOSOPHY_TEXT = {
    line1: '나는 누구인가 — 정체성',
    line2: '어떻게 바라볼 것인가 — 사유력',
    line3: '무엇을 만들며 살아갈까 — 세계관',
    philosophy: 'Philosophy',
    art: 'ART',
  };

  // IntersectionObserver - 섹션 진입 감지 (60%)
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasPlayedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6 && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          setExpanded(true);
          
          // intro → showRoom (ROOM1)
          setTimeout(() => {
            setPhase('showRoom');
            setActiveRoom(0);
          }, shouldReduceMotion ? 100 : 1800);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  // ROOM 순차 등장 로직
  React.useEffect(() => {
    if (phase !== 'showRoom' || activeRoom === null) return;

    const delay = shouldReduceMotion ? 200 : 2500;

    // 다음 ROOM으로 전환
    if (activeRoom < rooms.length - 1) {
      setTimeout(() => {
        setPhase('stackToCapsule');
        setTimeout(() => {
          setStackedRooms(prev => [...prev, activeRoom]);
          setActiveRoom(activeRoom + 1);
          setPhase('showRoom');
        }, shouldReduceMotion ? 100 : 1200);
      }, delay);
    } else {
      // 마지막 ROOM 완료
      setTimeout(() => {
        setPhase('stackToCapsule');
        setTimeout(() => {
          setStackedRooms(prev => [...prev, activeRoom]);
          setPhase('idle');
          setExpanded(false);
        }, shouldReduceMotion ? 100 : 1200);
      }, delay);
    }
  }, [phase, activeRoom, rooms.length, shouldReduceMotion]);

  return (
    <motion.div
      ref={sectionRef}
      className="hidden md:block relative"
      animate={{
        minHeight: expanded ? '1300px' : '950px',
      }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.9,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      {/* CenterStage: 철학 텍스트 패널 (intro / idle 에만 보임, focusedIndex가 없을 때만) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{
          opacity: (phase === 'intro' || phase === 'idle') && focusedIndex === null ? 1 : 0,
          scale: (phase === 'intro' || phase === 'idle') && focusedIndex === null ? 1 : 0.95,
        }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.8,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        {/* 프리미엄 패널 */}
        <div
          className="relative rounded-[32px] p-10 md:p-12"
          style={{
            background: 'rgba(250, 223, 219, 0.85)',
            border: '1px solid rgba(185, 132, 99, 0.35)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(12px)',
            minWidth: '420px',
          }}
        >
          {/* Grain overlay */}
          <div
            className="absolute inset-0 rounded-[32px] opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              mixBlendMode: 'multiply',
            }}
          />

          {/* Guide lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[32px]">
            <line x1="40" y1="20" x2="380" y2="20" stroke="rgba(185, 132, 99, 0.15)" strokeWidth="1" />
            <line x1="40" y1="180" x2="380" y2="180" stroke="rgba(185, 132, 99, 0.15)" strokeWidth="1" />
          </svg>

          {/* 텍스트 내용 (절대 변경 금지) */}
          <div className="relative z-10 text-center">
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                color: '#A66A5A',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: 0,
                marginBottom: '0.25rem',
              }}
            >
              {PHILOSOPHY_TEXT.line1.split(' — ')[0]} — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>{PHILOSOPHY_TEXT.line1.split(' — ')[1]}</span>
            </p>
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                color: '#A66A5A',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: 0,
                marginBottom: '0.25rem',
              }}
            >
              {PHILOSOPHY_TEXT.line2.split(' — ')[0]} — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>{PHILOSOPHY_TEXT.line2.split(' — ')[1]}</span>
            </p>
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                color: '#A66A5A',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: 0,
                marginBottom: '1rem',
              }}
            >
              {PHILOSOPHY_TEXT.line3.split(' — ')[0]} — <span style={{ color: '#2F6B4F', fontWeight: 500 }}>{PHILOSOPHY_TEXT.line3.split(' — ')[1]}</span>
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                color: '#A66A5A',
                fontWeight: 300,
                letterSpacing: '0.1em',
                fontStyle: 'italic',
              }}
            >
              {PHILOSOPHY_TEXT.philosophy}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.85rem, 1.6vw, 1.3rem)',
                color: '#A66A5A',
                fontWeight: 500,
                letterSpacing: '0.15em',
              }}
            >
              {PHILOSOPHY_TEXT.art}
            </p>
          </div>
        </div>
      </motion.div>

      {/* LeftStage: ROOM 큰 카드 등장 (항상 왼쪽) */}
      {(phase === 'showRoom' || phase === 'stackToCapsule') && activeRoom !== null && (
        <div className="absolute inset-0" style={{ left: '6vw' }}>
          {rooms.map((room, idx) => {
            const isActive = activeRoom === idx;
            const isStacking = phase === 'stackToCapsule' && activeRoom === idx;
            const isStacked = stackedRooms.includes(idx);

            if (!isActive && !isStacking && !isStacked) return null;

            // 스택으로 이동할 때의 목표 스타일 (stackedRooms.length가 order가 됨)
            const targetOrder = stackedRooms.length;
            const targetStyle = capsuleStackStyle[targetOrder] || capsuleStackStyle[0];

            return (
              <motion.div
                key={idx}
                className="absolute left-0 top-1/2"
                initial={isActive ? { opacity: 0, scale: 0.985, y: 14, rotate: roomRotations[idx] } : false}
                animate={{
                  opacity: isStacked ? 0 : isStacking ? targetStyle.opacity : isActive ? 1 : 0,
                  scale: isStacking ? 1 : isActive ? 1 : 0,
                  y: isStacking ? targetStyle.y : isActive ? 0 : 14,
                  rotate: isStacking ? 0 : isActive ? roomRotations[idx] : 0,
                  x: isStacking ? -80 : 0, // Capsule Stack 위치로 이동 (6vw → 5vw, 약 -1vw ≈ -80px)
                }}
                transition={{
                  duration: shouldReduceMotion ? 0.2 : isStacking ? 1.2 : 1.2,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                style={{
                  width: '320px',
                  zIndex: isActive ? 20 : isStacking ? 15 : 0,
                }}
              >
                <div 
                  className="rounded-[40px] p-8 min-h-[200px] relative overflow-hidden"
                  style={{ background: '#FADFDB' }}
                >
                  {/* 테두리 SVG - 유지 */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 400 300"
                    preserveAspectRatio="none"
                    animate={{
                      opacity: isStacking ? 0 : 1,
                    }}
                  >
                    <motion.path
                      d="M 320 20 H 380 Q 390 20 390 30 V 80"
                      fill="none"
                      stroke="#b98463"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: isActive ? 1 : 0,
                        opacity: isActive ? 0.8 : 0,
                      }}
                      transition={{ duration: shouldReduceMotion ? 0.3 : 1.5, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M 10 240 V 270 Q 10 280 20 280 H 80"
                      fill="none"
                      stroke="#b98463"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: isActive ? 1 : 0,
                        opacity: isActive ? 0.8 : 0,
                      }}
                      transition={{ duration: shouldReduceMotion ? 0.3 : 1.5, delay: 0.2, ease: "easeInOut" }}
                    />
                  </motion.svg>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span 
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: '#A66A5A', color: '#FFF' }}
                    >
                      {room.num} ROOM
                    </span>
                    <span className="text-xs" style={{ color: '#888' }}>• 3개월</span>
                  </div>
                  
                  <h4 
                    className="mb-2"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                      color: '#2F6B4F',
                      fontWeight: 600,
                    }}
                  >
                    {room.name}
                  </h4>
                  <p 
                    className="mb-3"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: '0.95rem',
                      color: '#A66A5A',
                      fontWeight: 400,
                    }}
                  >
                    {room.subtitle}{room.quote ? ` — ${room.quote}` : ''}
                  </p>
                  
                  <ul className="space-y-1.5 mt-4">
                    {room.items.map((item, i) => (
                      <li 
                        key={i}
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: '0.9rem',
                          color: '#666',
                          lineHeight: 1.5,
                          letterSpacing: 0,
                        }}
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Background Depth Layer (왼쪽 공백 채우기) */}
      <div
        className="absolute left-0 top-0 w-[40vw] h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at left, rgba(250,223,219,0.35), transparent 70%)',
        }}
      />

      {/* Vertical Flow Guide (미세 가이드 라인) */}
      <div className="absolute left-[3vw] top-0 bottom-0 pointer-events-none z-0">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[#b98463]/20 to-transparent" />
      </div>

      {/* Capsule Stack (왼쪽, 항상 보임) */}
      {stackedRooms.length > 0 && (
        <div
          className="absolute z-30"
          style={{ 
            left: '5vw', 
            width: '360px',
            top: '50%',
            transform: 'translateY(-50%)',
            marginTop: stackedRooms.length > 2 ? '-150px' : '0px', // 3개 이상일 때 위로 조정
          }}
        >
          <div className="relative">
            {stackedRooms.map((roomIdx, order) => {
              const style = capsuleStackStyle[order];
              const room = rooms[roomIdx];
              const isNewest = order === stackedRooms.length - 1;
              const isHovered = focusedIndex === roomIdx;

              return (
                <motion.div
                  key={roomIdx}
                  className="absolute left-0 w-full cursor-pointer"
                  initial={{
                    y: isNewest ? 0 : style.y,
                    scale: 1,
                    opacity: 0,
                  }}
                  animate={{
                    y: style.y,
                    scale: isHovered ? 1.02 : 1,
                    opacity: isHovered 
                      ? 1 
                      : focusedIndex !== null && focusedIndex !== roomIdx
                      ? 0.4
                      : style.opacity,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.8,
                    delay: isNewest ? (shouldReduceMotion ? 0.1 : 0.6) : 0,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  onMouseEnter={() => setFocusedIndex(roomIdx)}
                  onMouseLeave={() => setFocusedIndex(null)}
                  onClick={() => setFocusedIndex(roomIdx)}
                  style={{
                    zIndex: isHovered ? 200 : 100 - order,
                  }}
                >
                  <CapsuleCard room={room} order={order} isHovered={isHovered} />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Focused Room Detail (Center Philosophy Panel 위치) */}
      <AnimatePresence>
        {focusedIndex !== null && (
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >
            <div
              className="relative rounded-[40px] p-8 max-w-md mx-4 cursor-pointer"
              style={{ background: '#FADFDB' }}
              onClick={() => setFocusedIndex(null)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFocusedIndex(null);
                }}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 transition-colors"
                style={{ color: '#A66A5A' }}
              >
                ×
              </button>
              
              {(() => {
                const room = rooms[focusedIndex];
                return (
                  <>
                    <div className="flex items-center gap-3 mb-3">
                      <span 
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ background: '#A66A5A', color: '#FFF' }}
                      >
                        {room.num} ROOM
                      </span>
                      <span className="text-xs" style={{ color: '#888' }}>• 3개월</span>
                    </div>
                    
                    <h4 
                      className="mb-2"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                        color: '#2F6B4F',
                        fontWeight: 600,
                      }}
                    >
                      {room.name}
                    </h4>
                    <p 
                      className="mb-3"
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: '0.95rem',
                        color: '#A66A5A',
                        fontWeight: 400,
                      }}
                    >
                      {room.subtitle}{room.quote ? ` — ${room.quote}` : ''}
                    </p>
                    
                    <ul className="space-y-1.5 mt-4">
                      {room.items.map((item, i) => (
                        <li 
                          key={i}
                          style={{
                            fontFamily: "'Noto Serif KR', serif",
                            fontSize: '0.9rem',
                            color: '#666',
                            lineHeight: 1.5,
                            letterSpacing: 0,
                          }}
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
