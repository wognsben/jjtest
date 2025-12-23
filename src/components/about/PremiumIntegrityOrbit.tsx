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
      titleEn: "Affective Literacy",
      body: ["감정을 정확히 인식하고", "언어로 표현하는 능력", "", "CASEL, 2020"],
    },
    {
      id: "n2",
      x: centerX + radius * Math.cos((angles[1] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[1] * Math.PI) / 180),
      titleKr: "2. 감각 기반 자기조절",
      titleEn: "Sensory Self-Regulation",
      body: ["촉각적 경험을 통해", "마음을 안정시키는 힘", "", "Art Therapy Outcomes, 2019"],
    },
    {
      id: "n3",
      x: centerX + radius * Math.cos((angles[2] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[2] * Math.PI) / 180),
      titleKr: "3. 표현력 확장",
      titleEn: "Expressive Agency",
      body: ["자유로운 표현이", "자기주도성으로 연결됨", "", "Lowenfeld Theory"],
    },
    {
      id: "n4",
      x: centerX + radius * Math.cos((angles[3] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[3] * Math.PI) / 180),
      titleKr: "4. 관계 감각",
      titleEn: "Relational Sensitivity",
      body: ["타인의 감정을 이해하고", "공감하는 능력", "", "Mirror Neuron Theory"],
    },
    {
      id: "n5",
      x: centerX + radius * Math.cos((angles[4] * Math.PI) / 180),
      y: centerY + radius * Math.sin((angles[4] * Math.PI) / 180),
      titleKr: "5. 세계관·자기서사",
      titleEn: "Narrative Identity",
      body: ["예술과 서사로", "자기이해를 깊게 함", "", "H. Gardner"],
    },
  ];

  return (
    <div className="w-full flex justify-center py-12 md:py-20">
      <svg viewBox="0 0 800 720" className="w-full max-w-5xl" style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.08))' }}>

        {/* 미세한 관계 암시 라인 (보이지만 읽히지 않게) */}
        <g opacity="0.15">
          {nodes.map((n) => (
            <motion.line
              key={n.id}
              x1="400"
              y1="360"
              x2={n.x}
              y2={n.y}
              stroke="#D4B896"
              strokeWidth="1.5"
              strokeDasharray="3 12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
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
      {/* 외부 글로우 효과 */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="centerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* 여운 링 1 */}
      <motion.circle
        cx="400"
        cy="360"
        r="115"
        fill="none"
        stroke="#8FBC88"
        strokeWidth="1.5"
        opacity="0.35"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ transformOrigin: '50% 50%', transformBox: 'fill-box', filter: 'url(#glow)' }}
      />

      {/* 여운 링 2 */}
      <motion.circle
        cx="400"
        cy="360"
        r="125"
        fill="none"
        stroke="#FFB6C1"
        strokeWidth="1"
        opacity="0.25"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={{ transformOrigin: '50% 50%', transformBox: 'fill-box', filter: 'url(#glow)' }}
      />

      {/* 중심 원 - 그림자 효과 추가 */}
      <motion.circle
        cx="400"
        cy="360"
        r="100"
        fill="url(#centerGradient)"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ 
          scale: { duration: 0.3, ease: 'easeOut' },
          default: { duration: 0.8, type: 'spring', bounce: 0.3 }
        }}
        style={{ 
          transformOrigin: '50% 50%', 
          transformBox: 'fill-box',
          filter: 'url(#centerShadow)',
          cursor: 'pointer'
        }}
      />

      {/* 내부 하이라이트 */}
      <circle
        cx="380"
        cy="340"
        r="35"
        fill="white"
        opacity="0.3"
        style={{ filter: 'blur(15px)' }}
      />

      {/* 타이틀 */}
      <motion.text
        x="400"
        y="350"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fill="white"
        style={{ 
          fontFamily: "'Cormorant Garamond', serif",
          letterSpacing: '0.03em',
          textShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
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
        style={{ 
          fontFamily: "'Noto Serif KR', serif",
          letterSpacing: '0.01em'
        }}
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

      {/* 그라데이션 정의 */}
      <defs>
        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="50%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>
      </defs>
    </g>
  );
}

function PremiumNode({ 
  x, 
  y, 
  titleKr, 
  titleEn, 
  body,
  index 
}: { 
  x: number;
  y: number;
  titleKr: string;
  titleEn: string;
  body: string[];
  index: number;
}) {
  // 프리미엄 기준: 완전 대칭 금지(살짝 흔들어 생동감)
  const jitterX = (x * 13) % 2 ? 0.8 : -0.8;
  const jitterY = (y * 17) % 2 ? 1 : -1;

  const W = 240;
  const pillH = 38;
  const boxH = 115;
  const rPill = 19;
  const rBox = 18;

  // 노드 기준 좌상단
  const left = x - W / 2 + jitterX;
  const top = y - (pillH + boxH) / 2 + jitterY;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: 1.2 + index * 0.2,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ scale: 1.03, y: -2 }}
      style={{ 
        cursor: 'pointer',
        filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.1))'
      }}
    >
      <g transform={`translate(${left}, ${top})`}>
      {/* 카드 배경 그림자 */}
      <defs>
        <filter id={`cardShadow${index}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6"/>
          <feOffset dx="0" dy="4" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* 타이틀 pill 배경 - 그라데이션 추가 */}
      <defs>
        <linearGradient id={`pillGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        width={W}
        height={pillH}
        rx={rPill}
        fill={`url(#pillGradient${index})`}
        opacity="1"
        style={{ filter: `url(#cardShadow${index})` }}
      />
      
      {/* 타이틀 pill 테두리 - 더 부드러운 선 */}
      <rect
        x="0"
        y="0"
        width={W}
        height={pillH}
        rx={rPill}
        fill="none"
        stroke="#E38B63"
        strokeWidth="2"
        opacity="0.8"
      />

      {/* 타이틀 (한글) */}
      <text
        x={W / 2}
        y="18"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#D06F45"
        style={{ 
          fontFamily: "'Noto Serif KR', serif",
          letterSpacing: '-0.01em'
        }}
      >
        {titleKr}
      </text>

      {/* 타이틀 (영문) - 위계 낮게, 자간 + */}
      <text
        x={W / 2}
        y="32"
        textAnchor="middle"
        fontSize="9.5"
        fill="#8FBC88"
        opacity="0.8"
        style={{ 
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        {titleEn}
      </text>

      {/* 바디 박스 - 그라데이션 배경 */}
      <defs>
        <linearGradient id={`boxGradient${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBE6DD" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#F9DDD3" stopOpacity="0.92" />
        </linearGradient>
      </defs>
      <rect
        x="12"
        y={pillH + 8}
        width={W - 24}
        height={boxH}
        rx={rBox}
        fill={`url(#boxGradient${index})`}
        opacity="1"
      />

      {/* 바디 박스 미세한 테두리 - 더 정교하게 */}
      <rect
        x="12"
        y={pillH + 8}
        width={W - 24}
        height={boxH}
        rx={rBox}
        fill="none"
        stroke="#E38B63"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* 바디 텍스트 */}
      <text
        x={W / 2}
        y={pillH + 36}
        textAnchor="middle"
        fontSize="12"
        fill="#6B4A38"
        opacity="0.95"
        style={{ 
          fontFamily: "'Noto Serif KR', serif",
          letterSpacing: '0em',
          lineHeight: '1.7'
        }}
      >
        {body.slice(0, 4).map((line, i) => (
          <tspan 
            key={i} 
            x={W / 2} 
            dy={i === 0 ? 0 : 20}
            fontWeight={i === 3 ? "400" : "500"}
            fontSize={i === 3 ? "10" : "12"}
            opacity={i === 3 ? 0.65 : 0.95}
            fontStyle={i === 3 ? "italic" : "normal"}
            style={{
              fontFamily: i === 3 ? "'Inter', sans-serif" : "'Noto Serif KR', serif"
            }}
          >
            {line}
          </tspan>
        ))}
      </text>

      {/* 미세한 언더라인 장식 */}
      <line
        x1={W / 2 - 38}
        y1={pillH + boxH + 18}
        x2={W / 2 + 38}
        y2={pillH + boxH + 18}
        stroke="#E38B63"
        strokeWidth="2"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* 코너 포인트 장식 */}
      <circle
        cx="20"
        cy={pillH + 16}
        r="2.5"
        fill="#E38B63"
        opacity="0.5"
      />
      <circle
        cx={W - 20}
        cy={pillH + boxH}
        r="2"
        fill="#8FBC88"
        opacity="0.4"
      />
      </g>
    </motion.g>
  );
}
