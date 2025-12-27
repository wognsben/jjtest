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
    <div className="w-full flex justify-center py-12 md:py-20">
      <svg 
        viewBox="0 0 800 720" 
        className="w-full max-w-5xl" 
        style={{ 
          filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.08))',
          minHeight: '400px' // 모바일에서 최소 높이 보장
        }}
      >

        {/* 관계 암시 라인 (느껴지는 수준) */}
        <g opacity="0.05">
          {nodes.map((n) => (
            <line
              key={n.id}
              x1="400"
              y1="360"
              x2={n.x}
              y2={n.y}
              stroke="#D4B896"
              strokeWidth="0.5"
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
  );
}

function CenterNode() {
  return (
    <g>
      {/* 외부 글로우 효과 - 최소화 */}
      <defs>
        <filter id="centerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6"/>
          <feOffset dx="0" dy="3" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.15"/>
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
        opacity="0.5"
        style={{ filter: 'blur(8px)' }}
      />

      {/* 외곽 두께 링 (3D 층감) - gradient stroke */}
      <path
        d="M305,365 C305,315 345,270 395,260 C445,250 495,275 520,315 C545,355 545,405 520,445 C495,485 445,510 395,500 C345,490 305,445 305,395 Z"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="2.5"
        opacity="0.6"
      />

      {/* 중심 blob wrapper with filter */}
      <g filter="url(#centerShadow) url(#organicTexture)">
        <motion.path
          d="M310,360 C310,320 340,285 380,275 C420,265 465,280 490,315 C515,350 520,395 495,430 C470,465 425,480 385,475 C345,470 310,435 310,395 Z"
          fill="url(#blobGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        />
      </g>

      {/* 내측 하이라이트 링 (볼륨감 강화) - gradient stroke */}
      <path
        d="M315,360 C315,325 345,292 385,282 C425,272 465,287 490,320 C515,353 515,398 490,428 C465,458 425,473 385,468 C345,463 315,428 315,393 Z"
        fill="none"
        stroke="url(#ringGradient)"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* 상단 하이라이트 아크 (빛 받는 부분) */}
      <path
        d="M 340,310 A 80,80 0 0,1 460,310"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* 타이틀 */}
      <motion.text
        x="400"
        y="350"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fill="white"
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
        fill="white"
        opacity="0.95"
        fontFamily="'Noto Serif KR', serif"
        letterSpacing="0.01em"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.95 }}
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
      filter="drop-shadow(0 2px 6px rgba(0,0,0,0.04))"
    >
      <g transform={`translate(${left}, ${top})`}>
      
      {/* pill 헤더 - 오브제 라벨 느낌 */}
      <rect
        x="0"
        y="0"
        width={W}
        height={pillH}
        rx="999"
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
        rx="999"
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
        fontSize="11"
        fontWeight="500"
        fill="#A89883"
        opacity="0.7"
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
        fontSize="13"
        fontWeight="600"
        fill="#6B5B4F"
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
        fontSize="9"
        fontWeight="400"
        fill="#8B7B6F"
        opacity="0.75"
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
        fill="#F5EEE6"
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
            fontSize: '10px',
            lineHeight: '1.6',
            color: '#6B5B4F',
            opacity: 0.85,
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
