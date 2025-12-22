import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

// Single Review Card in 3D Space
function ReviewCard3D({ 
  position, 
  index, 
  totalCards,
  scrollOffset 
}: { 
  position: [number, number, number]; 
  index: number;
  totalCards: number;
  scrollOffset: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Calculate position based on scroll offset
    const cardSpacing = 3.5;
    const baseX = (index - totalCards / 2) * cardSpacing;
    const offsetX = scrollOffset * cardSpacing;
    const finalX = baseX + offsetX;
    
    // Wrap around for infinite loop
    let wrappedX = finalX % (totalCards * cardSpacing);
    if (wrappedX > totalCards * cardSpacing / 2) {
      wrappedX -= totalCards * cardSpacing;
    }
    if (wrappedX < -totalCards * cardSpacing / 2) {
      wrappedX += totalCards * cardSpacing;
    }
    
    meshRef.current.position.x = wrappedX;
    
    // Distance from center (0, 0, 0)
    const distanceFromCenter = Math.abs(wrappedX);
    
    // Scale: larger at center, smaller at edges
    const scale = Math.max(0.4, 1 - distanceFromCenter * 0.15);
    meshRef.current.scale.set(scale, scale, scale);
    
    // Rotation: rotate away from center
    const maxRotation = Math.PI / 6; // 30 degrees
    const rotation = (wrappedX / 8) * maxRotation;
    meshRef.current.rotation.y = rotation;
    
    // Opacity: fade out at edges
    const opacity = Math.max(0.3, 1 - distanceFromCenter * 0.2);
    if (meshRef.current.material instanceof THREE.MeshBasicMaterial) {
      meshRef.current.material.opacity = opacity;
    }
    
    // Z-position: bring center cards forward
    meshRef.current.position.z = -distanceFromCenter * 0.3;
    
    // Subtle floating animation
    meshRef.current.position.y = Math.sin(time * 0.5 + index) * 0.1;
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      {/* Plane geometry for image - BIGGER SIZE */}
      <planeGeometry args={[3.5, 4.5]} />
      <meshBasicMaterial 
        color="#ffffff"
        transparent
        opacity={1}
        side={THREE.DoubleSide}
      >
        {/* Placeholder - will add texture later */}
      </meshBasicMaterial>
      
      {/* Border */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(3.5, 4.5)]} />
        <lineBasicMaterial color="#ffb6c1" opacity={0.4} transparent />
      </lineSegments>
      
      {/* Review number overlay */}
      <Html
        center
        distanceFactor={2.5}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div 
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: '12px',
            color: '#999',
            fontWeight: 300,
            textAlign: 'center',
            padding: '4px 8px',
            background: 'rgba(255,255,255,0.8)',
            borderRadius: '4px',
          }}
        >
          손글씨 리뷰 #{index + 1}
        </div>
      </Html>
    </mesh>
  );
}

// 3D Scene Component
function ReviewCarousel3D() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const totalCards = 20;
  
  // Auto-scroll animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    setScrollOffset(time * 0.3); // Adjust speed here
  });
  
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
      
      {/* Review Cards */}
      {Array.from({ length: totalCards }).map((_, i) => (
        <ReviewCard3D
          key={i}
          position={[0, 0, 0]}
          index={i}
          totalCards={totalCards}
          scrollOffset={scrollOffset}
        />
      ))}
    </>
  );
}

// MOMENTS Section 3: 엔딩 크레딧 스타일 리뷰 (Three.js Version)
export function MomentsSection3() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-3"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#2d5016',
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            작은 변화가 큰 성장을 만든 장면들
          </h2>
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
              color: '#ff9999',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            1000명의 아이들을 만나며
          </p>
        </motion.div>

        {/* 3D Carousel - Pink Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #FFE5EC 0%, #FFD6E0 50%, #FFE5EC 100%)',
            height: '600px',
          }}
        >
          {/* Three.js Canvas */}
          <Canvas
            camera={{
              position: [0, 0, 12],
              fov: 45,
              near: 0.1,
              far: 1000,
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <ReviewCarousel3D />
          </Canvas>
          
          {/* Top & Bottom Fade Overlay */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-pink-100 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-pink-100 to-transparent pointer-events-none" />
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
              color: '#8B7355',
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            예술이 마음을 움직일 때 일어나는 변화의 기록
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-32" />
      </div>
    </section>
  );
}