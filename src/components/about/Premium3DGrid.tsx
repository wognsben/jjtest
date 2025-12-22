import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface Card3DProps {
  num: number;
  index: number;
  imageSrc: string;
}

function Card3D({ num, index, imageSrc }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageAspectRatio, setImageAspectRatio] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      setImageAspectRatio(aspectRatio);
    }
  };

  // Staggered animation colors
  const colors = [
    { bg: 'rgba(255, 182, 193, 0.15)', accent: '#FFB6C1', glow: 'rgba(255, 182, 193, 0.4)' },
    { bg: 'rgba(143, 188, 136, 0.15)', accent: '#8fbc88', glow: 'rgba(143, 188, 136, 0.4)' },
    { bg: 'rgba(166, 124, 82, 0.15)', accent: '#A67C52', glow: 'rgba(166, 124, 82, 0.4)' },
    { bg: 'rgba(255, 107, 157, 0.15)', accent: '#FF6B9D', glow: 'rgba(255, 107, 157, 0.4)' },
  ];

  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer"
      style={{
        perspective: '1000px',
        aspectRatio: imageAspectRatio ? `${imageAspectRatio}` : '4/3',
      }}
      data-cursor-hover
      data-cursor-text={`Chapter ${num}`}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ z: 50 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-4 rounded-[32px] blur-2xl"
          style={{
            background: `radial-gradient(circle at center, ${color.glow}, transparent 70%)`,
            opacity: isHovered ? 0.6 : 0,
          }}
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Main card */}
        <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-transparent">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <img
              ref={imageRef}
              src={encodeURI(imageSrc)}
              alt={`Chapter ${num}`}
              className="w-full h-full object-contain"
              style={{ display: 'block' }}
              onError={(e) => {
                console.error('Image load error:', imageSrc);
                console.error('Encoded path:', encodeURI(imageSrc));
                (e.target as HTMLImageElement).style.display = 'none';
              }}
              onLoad={handleImageLoad}
            />
          </div>

          {/* Subtle overlay - no blur - reduced opacity to show image */}
          <div
            className="absolute inset-0 z-10 border-2 border-white/10 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.01) 0%, transparent 100%)`,
              boxShadow: `
                0 20px 60px rgba(0,0,0,0.08),
                0 8px 24px rgba(0,0,0,0.04),
                inset 0 1px 0 rgba(255,255,255,0.1),
                inset 0 -1px 0 rgba(0,0,0,0.03)
              `,
            }}
          />

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${color.bg}, transparent 70%)`,
              opacity: isHovered ? 1 : 0,
            }}
            animate={{
              background: isHovered
                ? [
                    `radial-gradient(circle at 30% 30%, ${color.bg}, transparent 70%)`,
                    `radial-gradient(circle at 70% 70%, ${color.bg}, transparent 70%)`,
                    `radial-gradient(circle at 30% 30%, ${color.bg}, transparent 70%)`,
                  ]
                : `radial-gradient(circle at 50% 50%, ${color.bg}, transparent 70%)`,
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Particle decoration */}
          {isHovered && (
            <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: color.accent,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    y: [0, -50],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          )}

          {/* Number removed - image only */}

          {/* Floating corner accent */}
          <motion.div
            className="absolute top-4 right-4 z-30 flex gap-1 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: color.accent }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>

          {/* Bottom line accent */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-30 h-1 pointer-events-none"
            style={{
              background: `linear-gradient(to right, transparent, ${color.accent}, transparent)`,
              opacity: isHovered ? 1 : 0,
            }}
            animate={{
              scaleX: isHovered ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Premium3DGrid() {
  const images = [
    '/assets/about/stressful child/4x4-1.PNG',
    '/assets/about/stressful child/4x4-2.PNG',
    '/assets/about/stressful child/4x4-3.PNG',
    '/assets/about/stressful child/4x4-4.PNG',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {[1, 2, 3, 4].map((num, index) => (
          <Card3D key={num} num={num} index={index} imageSrc={images[index] || ''} />
        ))}
      </div>

      {/* Floating label - premium style */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute -bottom-8 right-0"
      >
        <div className="relative group cursor-pointer" data-cursor-hover>
          {/* Glow background */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(255, 182, 193, 0.4), transparent)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Label */}
          <div className="relative px-8 py-3 rounded-full border-2 border-pink-200/60 bg-white/80 backdrop-blur-lg">
            <motion.span
              className="text-xs md:text-sm tracking-[0.2em] text-brown-700 font-medium"
              style={{ fontFamily: "'Noto Serif KR', serif" }}
            >
              감각 기반 정서예술교육
            </motion.span>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent)',
              }}
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
