import React from 'react';
import { motion } from 'motion/react';

interface PaintTextureProps {
  color: string;
  isHovered: boolean;
  index: number;
}

export default function PremiumPaintTexture({ color, isHovered, index }: PaintTextureProps) {
  // Extract RGB values from rgba string
  const getRGBA = (rgbaString: string, alpha: number = 1) => {
    const match = rgbaString.match(/\d+/g);
    if (match) {
      return `rgba(${match[0]}, ${match[1]}, ${match[2]}, ${alpha})`;
    }
    return rgbaString;
  };

  // Different paint stroke patterns for each card
  const patterns = [
    // Pattern 1: Brushstroke
    'M10,50 Q30,20 50,40 T90,50',
    // Pattern 2: Splatter
    'M20,30 Q40,25 45,45 Q50,20 70,35',
    // Pattern 3: Textured stroke
    'M15,40 C25,20 45,60 55,40 S75,25 85,45',
  ];

  return (
    <motion.div
      animate={{
        opacity: isHovered ? 0.15 : 0.08,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.6 }}
      className="absolute -top-16 -right-16 w-[200px] h-[200px] pointer-events-none overflow-visible"
    >
      {/* Main paint texture - organic shape */}
      <svg 
        width="200" 
        height="200" 
        viewBox="0 0 200 200" 
        className="absolute inset-0"
        style={{ filter: 'blur(2px)' }}
      >
        <defs>
          {/* Organic texture filter */}
          <filter id={`paint-texture-${index}`}>
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.8" 
              numOctaves="4" 
              result="turbulence"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="turbulence" 
              scale="8" 
              xChannelSelector="R" 
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="1.5" />
          </filter>

          {/* Paint splatter pattern */}
          <pattern 
            id={`paint-pattern-${index}`} 
            x="0" 
            y="0" 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="2" fill={getRGBA(color, 0.3)} />
            <circle cx="25" cy="20" r="1.5" fill={getRGBA(color, 0.2)} />
            <circle cx="15" cy="30" r="1" fill={getRGBA(color, 0.25)} />
          </pattern>
        </defs>

        {/* Main brushstroke shape */}
        <path
          d="M60,40 Q80,20 120,35 Q140,45 150,70 Q145,95 130,110 Q100,125 70,115 Q45,100 40,75 Q35,55 60,40 Z"
          fill={getRGBA(color, 0.6)}
          filter={`url(#paint-texture-${index})`}
          opacity="0.8"
        />

        {/* Secondary organic shape */}
        <path
          d="M90,50 Q110,45 125,60 Q135,75 125,90 Q110,100 95,95 Q80,90 75,75 Q70,60 90,50 Z"
          fill={getRGBA(color, 0.4)}
          filter={`url(#paint-texture-${index})`}
          opacity="0.6"
        />

        {/* Paint drips */}
        <motion.g
          animate={{
            y: isHovered ? [0, 3, 0] : 0,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ellipse cx="85" cy="120" rx="4" ry="12" fill={getRGBA(color, 0.3)} />
          <ellipse cx="105" cy="115" rx="3" ry="10" fill={getRGBA(color, 0.25)} />
        </motion.g>

        {/* Texture dots overlay */}
        <g opacity="0.4">
          <circle cx="80" cy="60" r="2" fill={getRGBA(color, 0.5)} />
          <circle cx="110" cy="70" r="1.5" fill={getRGBA(color, 0.6)} />
          <circle cx="95" cy="85" r="1" fill={getRGBA(color, 0.4)} />
          <circle cx="120" cy="55" r="1.8" fill={getRGBA(color, 0.5)} />
        </g>
      </svg>

      {/* Animated brushstroke accent */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="absolute inset-0"
        style={{ mixBlendMode: 'multiply' }}
        animate={{
          rotate: isHovered ? [0, 5, -5, 0] : 0,
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <path
          d={patterns[index % patterns.length]}
          fill="none"
          stroke={getRGBA(color, 0.3)}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#paint-texture-${index})`}
          pathLength="1"
        />
      </motion.svg>

      {/* Subtle gradient overlay for depth */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.15 : 0.08,
        }}
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${getRGBA(color, 0.15)}, transparent 60%)`,
          filter: 'blur(20px)',
        }}
      />
    </motion.div>
  );
}
