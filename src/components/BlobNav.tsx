import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

interface BlobNavItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export function BlobNavItem({ children, isActive, onClick }: BlobNavItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const itemRef = useRef<HTMLButtonElement>(null);
  
  const springX = useSpring(0, { stiffness: 150, damping: 15 });
  const springY = useSpring(0, { stiffness: 150, damping: 15 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!itemRef.current) return;
    
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Magnetic effect
    springX.set(x * 0.3);
    springY.set(y * 0.3);
    
    // Mouse position for blob
    setMousePosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    springX.set(0);
    springY.set(0);
  };
  
  return (
    <motion.button
      ref={itemRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative px-4 py-2 text-xs tracking-[0.1em] uppercase transition-colors overflow-visible"
      style={{
        x: springX,
        y: springY,
      }}
    >
      {/* Organic blob background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered || isActive ? 1 : 0,
          opacity: isHovered || isActive ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        >
          <motion.path
            d="M 50 10
               C 70 10, 85 20, 90 40
               C 93 55, 92 70, 85 80
               C 75 92, 60 95, 45 92
               C 30 89, 15 80, 10 65
               C 5 50, 8 35, 18 22
               C 28 12, 40 10, 50 10 Z"
            fill={isActive ? "#a8c68f" : "#f5f1e8"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              filter: 'blur(0.5px)',
            }}
          />
        </svg>
      </motion.div>
      
      {/* Text */}
      <span
        className={`relative z-10 transition-colors ${
          isActive ? 'text-white' : isHovered ? 'text-secondary' : 'text-tertiary'
        }`}
        style={{
          textAlign: 'left',
          fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", monospace',
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}

interface BlobNavLogoProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function BlobNavLogo({ children, onClick }: BlobNavLogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const logoRef = useRef<HTMLButtonElement>(null);
  
  const springX = useSpring(0, { stiffness: 150, damping: 15 });
  const springY = useSpring(0, { stiffness: 150, damping: 15 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!logoRef.current) return;
    
    const rect = logoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    springX.set(x * 0.15);
    springY.set(y * 0.15);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    springX.set(0);
    springY.set(0);
  };
  
  return (
    <motion.button
      ref={logoRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="text-primary hover:text-secondary transition-colors"
      style={{
        fontFamily: "'Noto Serif KR', serif",
        fontSize: '1.5rem',
        fontWeight: 500,
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.button>
  );
}
