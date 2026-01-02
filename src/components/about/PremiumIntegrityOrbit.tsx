import React from 'react';
import { motion } from 'motion/react';

export default function PremiumIntegrityOrbit() {
  // 중심점과 반지름 설정 (간격을 늘리기 위해 radius 증가)
  const centerX = 400;
  const centerY = 360;
  const radius = 280; // 220에서 280으로 증가하여 카드와 중심 원 사이 간격 확보
  
  // 오각형 배치를 위한 각도 계산 (위부터 시계방향)
  const angles = [-90, -18, 54, 126, 198]; // 도 단위
  
  const nodes = [
    {
      id: "n1",
      x: centerX + radius * Math.cos((angles[0] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[0] * Math.PI) / 180),
      titleKr: "1. 감정 이해력",
      titleEn: "(Affective Literacy)",
      description: "CASEL(2020): 감정 인식능력은 전두엽 발달과 직접적으로 연결됨."
    },
    {
      id: "n2",
      x: centerX + radius * Math.cos((angles[1] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[1] * Math.PI) / 180),
      titleKr: "2. 감각 기반 자기조절",
      titleEn: "(Sensory Self-Regulation)",
      description: "Art Therapy Outcomes Study(2019): 촉감 기반 드로잉은 스트레스 호르몬을 감소시킴."
    },
    {
      id: "n3",
      x: centerX + radius * Math.cos((angles[2] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[2] * Math.PI) / 180),
      titleKr: "3. 표현력 확장",
      titleEn: "(Expressive Agency)",
      description: "Lowenfeld의 창의성 발달 단계 이론: 자유로운 표현 경험이 자기주도성을 강화함."
    },
    {
      id: "n4",
      x: centerX + radius * Math.cos((angles[3] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[3] * Math.PI) / 180),
      titleKr: "4. 관계 감각",
      titleEn: "(Relational Sensitivity)",
      description: "Mirror Neuron Theory: 타인의 표현을 보며 감정 모방·이해가 촉진됨."
    },
    {
      id: "n5",
      x: centerX + radius * Math.cos((angles[4] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[4] * Math.PI) / 180),
      titleKr: "5. 세계관·자기서사 형성",
      titleEn: "(Narrative Identity)",
      description: "H. Gardner(다중지능): 예술·서사 경험은 '자기이해지능'을 강화함."
    },
  ];

  return (
    <>
      {/* PC: 기존 SVG 레이아웃 */}
      <div className="hidden md:flex w-full justify-center py-12 md:py-20">
        <svg 
          viewBox="0 0 800 720" 
          className="w-full max-w-5xl" 
          style={{ 
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.04))',
            minHeight: '400px'
          }}
        >
          {/* 관계 암시 라인 (느껴지는 수준) */}
          <g opacity="0.015">
            {nodes.map((n) => (
              <line
                key={n.id}
                x1="400"
                y1="360"
                x2={n.x}
                y2={n.y}
                stroke="#D4B896"
                strokeWidth="0.35"
                strokeDasharray="1 6"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* 중앙 노드 */}
          <CenterNode />

          {/* 주변 노드 */}
          {nodes.map((n, index) => (
            <PremiumNode key={n.id} index={index} {...n} />
          ))}
        </svg>
      </div>

      {/* 모바일: 1열 배치 + 하단 코어 */}
      <div className="md:hidden w-full py-12 px-4">
        <div className="max-w-lg mx-auto space-y-6">
          {/* 5개 카드 - 1열 배치 */}
          {nodes.map((node, index) => (
            <MobileCard
              key={node.id}
              index={index}
              titleKr={node.titleKr}
              titleEn={node.titleEn}
              description={node.description}
            />
          ))}
          
          {/* 하단 코어 */}
          <div className="pt-8 flex justify-center">
            <MobileCore />
          </div>
        </div>
      </div>
    </>
  );
}

function CenterNode() {
  return (
    <g>
      {/* 외부 글로우 효과 - 최소화 */}
      <defs>
        <filter id="centerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.08"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* 노이즈 텍스처 */}
        <filter id="organicTexture">
          <feTurbulence type="fractalNoise" baseFrequency="3.5" numOctaves="4" seed="99" stitchTiles="stitch"/>
          <feDisplacementMap in="SourceGraphic" scale="2"/>
        </filter>

        {/* 링 gradient (위/아래 얇아짐) */}
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" stopOpacity="0.3"/>
          <stop offset="25%" stopColor="rgba(255,255,255,0.35)" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="rgba(255,255,255,0.25)" stopOpacity="0.8"/>
          <stop offset="75%" stopColor="rgba(255,255,255,0.35)" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" stopOpacity="0.3"/>
        </linearGradient>
      </defs>

      {/* 하단 그림자 blob */}
      <path
        d="M310,415 C340,445 380,465 420,465 C460,465 500,445 520,415 C540,385 540,345 520,315 C500,285 460,265 420,265 C380,265 340,285 310,315 C290,345 290,385 310,415 Z"
        fill="rgba(0,0,0,0.06)"
        opacity="0.3"
        style={{ filter: 'blur(14px)' }}
      />

      {/* 외곽 두께 링 (3D 층감) - gradient stroke */}
      <path
        d="M305,365 C305,315 345,270 395,260 C445,250 495,275 520,315 C545,355 545,405 520,445 C495,485 445,510 395,500 C345,490 305,445 305,395 Z"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="1.5"
        opacity="0.35"
      />

      {/* 중심 blob wrapper with filter */}
      <g filter="url(#centerShadow) url(#organicTexture)">
        <motion.path
          d="M310,360 C310,320 340,285 380,275 C420,265 465,280 490,315 C515,350 520,395 495,430 C470,465 425,480 385,475 C345,470 310,435 310,395 Z"
          fill="url(#blobGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ filter: 'blur(6px)' }}
        />
      </g>

      {/* 내측 하이라이트 링 (볼륨감 강화) - gradient stroke */}
      <path
        d="M315,360 C315,325 345,292 385,282 C425,272 465,287 490,320 C515,353 515,398 490,428 C465,458 425,473 385,468 C345,463 315,428 315,393 Z"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="0.9"
        opacity="0.35"
      />

      {/* 상단 하이라이트 아크 (빛 받는 부분) */}
      <path
        d="M 340,310 A 80,80 0 0,1 460,310"
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* 타이틀 */}
      <motion.text
        x="400"
        y="350"
        textAnchor="middle"
        fontSize="28"
        fontWeight="700"
        fill="#6B5B4F"
        fontFamily="'Cormorant Garamond', serif"
        letterSpacing="0.03em"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        INTEGRITY
      </motion.text>

      {/* 서브 카피 */}
      <motion.text
        x="400"
        y="380"
        textAnchor="middle"
        fontSize="13"
        fill="#9B8B7F"
        opacity="0.9"
        fontFamily="'Noto Serif KR', serif"
        letterSpacing="0.01em"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <tspan x="400" dy="0">
          내면이 통합될 때
        </tspan>
        <tspan x="400" dy="20">
          예술적 성장이 시작됩니다
        </tspan>
      </motion.text>

      {/* blob 그라데이션 정의 - 머스타드 */}
      <defs>
        <radialGradient id="blobGradient" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#F5D366" />
          <stop offset="50%" stopColor="#E8B449" />
          <stop offset="100%" stopColor="#D9A43A" />
        </radialGradient>
      </defs>
    </g>
  );
}

function PremiumNode({ 
  x, 
  y, 
  titleKr,
  titleEn,
  description,
  index 
}: { 
  x: number;
  y: number;
  titleKr: string;
  titleEn: string;
  description: string;
  index: number;
}) {
  const jitterX = (x * 13) % 2 ? 0.8 : -0.8;
  const jitterY = (y * 17) % 2 ? 1 : -1;

  const W = 210;
  const pillH = 46;
  const textAreaH = 90;
  const gap = 12;

  const left = x - W / 2 + jitterX;
  const top = y - (pillH + gap + textAreaH) / 2 + jitterY;

  return (
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.9, 
        delay: 1.2 + index * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }}
      filter="drop-shadow(0 1px 3px rgba(0,0,0,0.02))"
    >
      <g transform={`translate(${left}, ${top})`}>
      
      {/* pill 헤더 - 오브제 라벨 느낌 */}
      <rect
        x="0"
        y="0"
        width={W}
        height={pillH}
        rx="8"
        fill="#F7F3EE"
        stroke="rgba(212,184,150,0.35)"
        strokeWidth="0.8"
        strokeDasharray="1 1.2"
        strokeLinecap="round"
        opacity="0.98"
      />
      
      {/* blur 효과는 별도 rect로 */}
      <rect
        x="-1"
        y="-1"
        width={W + 2}
        height={pillH + 2}
        rx="8"
        fill="none"
        stroke="rgba(212,184,150,0.15)"
        strokeWidth="0.4"
        filter="blur(0.2px)"
      />

      {/* 번호 - 작고 얌전하게 */}
      <text
        x="20"
        y={pillH / 2 - 2}
        textAnchor="start"
        fontSize="12"
        fontWeight="600"
        fill="#7A6A5F"
        opacity="0.9"
        style={{ 
          fontFamily: "'Noto Serif KR', serif"
        }}
      >
        {titleKr.split('.')[0]}.
      </text>

      {/* 한글 제목 - 가장 또렷 */}
      <text
        x={W / 2}
        y={pillH / 2 - 2}
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#5A4A3F"
        opacity="1"
        style={{ 
          fontFamily: "'Noto Serif KR', serif",
          letterSpacing: '-0.01em'
        }}
      >
        {titleKr.split('.')[1]?.trim() || titleKr}
      </text>

      {/* 영문 부제 - 보조 정보 */}
      <text
        x={W / 2}
        y={pillH / 2 + 14}
        textAnchor="middle"
        fontSize="10"
        fontWeight="500"
        fill="#75665C"
        opacity="0.95"
        style={{ 
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '0.02em'
        }}
      >
        {titleEn}
      </text>

      {/* 설명 영역 - 종이 위 메모 느낌 (테두리 없음) */}
      <rect
        x="0"
        y={pillH + gap}
        width={W}
        height={textAreaH}
        rx="10"
        fill="rgba(255,255,255,0.5)"
        stroke="none"
        opacity="0.92"
      />

      {/* 오른쪽 상단 코너 테두리 */}
      <line
        x1={W - 20}
        y1={pillH + gap}
        x2={W}
        y2={pillH + gap}
        stroke="rgba(212,184,150,0.4)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <line
        x1={W}
        y1={pillH + gap}
        x2={W}
        y2={pillH + gap + 20}
        stroke="rgba(212,184,150,0.4)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* 왼쪽 하단 코너 테두리 */}
      <line
        x1="0"
        y1={pillH + gap + textAreaH - 20}
        x2="0"
        y2={pillH + gap + textAreaH}
        stroke="rgba(212,184,150,0.4)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1={pillH + gap + textAreaH}
        x2="20"
        y2={pillH + gap + textAreaH}
        stroke="rgba(212,184,150,0.4)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      {/* 설명 텍스트 - 종이 위 연필 글씨 같은 톤 */}
      <foreignObject
        x="12"
        y={pillH + gap + 14}
        width={W - 24}
        height={textAreaH - 28}
      >
        <div
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '1.6',
            color: 'rgb(92, 76, 64)',
            opacity: 1,
            textAlign: 'left',
            wordBreak: 'keep-all'
          }}
        >
          {description}
        </div>
      </foreignObject>

      </g>
    </motion.g>
  );
}

// 모바일용 카드 컴포넌트
function MobileCard({
  index,
  titleKr,
  titleEn,
  description
}: {
  index: number;
  titleKr: string;
  titleEn: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="w-full"
      style={{
        filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.02))'
      }}
    >
      {/* Pill 헤더 */}
      <div
        style={{
          backgroundColor: '#F7F3EE',
          border: '0.8px dashed rgba(212,184,150,0.35)',
          borderRadius: '8px',
          padding: '12px 20px',
          marginBottom: '12px'
        }}
      >
        <div className="flex items-center gap-3">
          <span
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: '12px',
              fontWeight: 600,
              color: '#7A6A5F',
              opacity: 0.9
            }}
          >
            {titleKr.split('.')[0]}.
          </span>
          <div className="flex-1 text-center">
            <div
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: '14px',
                fontWeight: 700,
                color: '#5A4A3F',
                letterSpacing: '-0.01em',
                marginBottom: '4px'
              }}
            >
              {titleKr.split('.')[1]?.trim() || titleKr}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                fontWeight: 500,
                color: '#75665C',
                opacity: 0.95,
                letterSpacing: '0.02em'
              }}
            >
              {titleEn}
            </div>
          </div>
        </div>
      </div>

      {/* 설명 영역 */}
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: '10px',
          padding: '14px 20px',
          position: 'relative',
          opacity: 0.92
        }}
      >
        {/* 오른쪽 상단 코너 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '20px',
            height: '20px',
            borderTop: '0.8px solid rgba(212,184,150,0.4)',
            borderRight: '0.8px solid rgba(212,184,150,0.4)',
            borderTopRightRadius: '10px'
          }}
        />
        {/* 왼쪽 하단 코너 */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '20px',
            height: '20px',
            borderBottom: '0.8px solid rgba(212,184,150,0.4)',
            borderLeft: '0.8px solid rgba(212,184,150,0.4)',
            borderBottomLeftRadius: '10px'
          }}
        />
        <div
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '1.6',
            color: 'rgb(92, 76, 64)',
            wordBreak: 'keep-all'
          }}
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
}

// 모바일용 코어 컴포넌트
function MobileCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="relative"
      style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* 배경 blob 효과 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 40% 30%, #F5D366 0%, #E8B449 50%, #D9A43A 100%)',
          borderRadius: '50%',
          opacity: 0.55,
          filter: 'blur(6px)'
        }}
      />
      
      {/* 링 효과 */}
      <div
        style={{
          position: 'absolute',
          inset: '-10px',
          border: '1.5px solid rgba(255,255,255,0.35)',
          borderRadius: '50%',
          opacity: 0.35
        }}
      />

      {/* INTEGRITY 텍스트 */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '24px',
          fontWeight: 700,
          color: '#6B5B4F',
          letterSpacing: '0.03em',
          marginBottom: '12px',
          position: 'relative',
          zIndex: 1
        }}
      >
        INTEGRITY
      </div>

      {/* 서브 텍스트 */}
      <div
        style={{
          fontFamily: "'Noto Serif KR', serif",
          fontSize: '11px',
          color: '#9B8B7F',
          opacity: 0.9,
          letterSpacing: '0.01em',
          textAlign: 'center',
          lineHeight: '1.6',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div>내면이 통합될 때</div>
        <div>예술적 성장이 시작됩니다</div>
      </div>
    </motion.div>
  );
}
