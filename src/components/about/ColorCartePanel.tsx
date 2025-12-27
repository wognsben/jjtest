import { motion } from 'motion/react';

interface Dot {
  u: number;
  v: number;
  label: string;
  note: string;
}

interface ColorCartePanelProps {
  dots: Dot[];
  selected: number;
  onSelect?: (index: number) => void;
}

export default function ColorCartePanel({ dots, selected, onSelect }: ColorCartePanelProps) {
  if (!dots || dots.length === 0 || !dots[selected]) {
    return null;
  }
  
  const currentDot = dots[selected];

  return (
    <motion.div
      key={`panel-${selected}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Interpretation Text - 편집적 레이아웃 */}
      <div className="space-y-4">
        {/* Label - 작고 차분한 타이포그래피 */}
        <motion.h3
          key={`label-${selected}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-brown-700"
          style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
            fontWeight: 400, // L6: No bold emphasis
            letterSpacing: '0.01em',
            lineHeight: 1.65,
            fontFamily: "'Noto Serif KR', serif",
          }}
        >
          {currentDot.label}
        </motion.h3>

        {/* Note - 넉넉한 행간 */}
        <motion.p
          key={`note-${selected}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="text-brown-600"
          style={{
            fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
            lineHeight: 1.65,
            letterSpacing: 0,
            fontFamily: "'Noto Serif KR', serif",
            fontWeight: 300,
          }}
        >
          {currentDot.note}
        </motion.p>

        {/* Dot indicators - 조용한 네비게이션 */}
        {onSelect && (
          <div className="flex gap-1.5 mt-6 justify-center">
            {dots.map((_, i) => (
              <button
                key={i}
                onClick={() => onSelect(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  i === selected
                    ? 'bg-brown-500'
                    : 'bg-brown-200'
                }`}
                aria-label={`Select ${dots[i].label}`}
                style={{
                  opacity: i === selected ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

