import React, { useRef, useState, useEffect, Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { getImagePath } from '../utils/imageUtils';

// Review image paths (6 images: review11~review16, repeated)
const reviewImagePaths = [
  getImagePath('/assets/program/review/review11.png'),
  getImagePath('/assets/program/review/review12.png'),
  getImagePath('/assets/program/review/review13.png'),
  getImagePath('/assets/program/review/review14.png'),
  getImagePath('/assets/program/review/review15.png'),
  getImagePath('/assets/program/review/review16.png'),
];

// Single Review Card in 3D Space - Premium Style with Image
function ReviewCard3D({ 
  position, 
  index, 
  totalCards,
  scrollOffset,
  imageUrl,
}: { 
  position: [number, number, number]; 
  index: number;
  totalCards: number;
  scrollOffset: number;
  imageUrl: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const borderRef = useRef<THREE.LineSegments>(null);
  
  // Load texture
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Calculate position based on scroll offset
    const cardSpacing = 3.8;
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
    
    // Scale: larger at center, smaller at edges (more dramatic)
    const scale = Math.max(0.35, 1 - distanceFromCenter * 0.12);
    meshRef.current.scale.set(scale, scale, scale);
    
    // Rotation: subtle rotation away from center
    const maxRotation = Math.PI / 8;
    const rotation = (wrappedX / 10) * maxRotation;
    meshRef.current.rotation.y = rotation;
    
    // Opacity: fade out at edges (more dramatic fade)
    const opacity = Math.max(0.15, 1 - distanceFromCenter * 0.18);
    if (materialRef.current) {
      materialRef.current.opacity = opacity;
    }
    
    // Z-position: bring center cards forward (enhanced depth)
    meshRef.current.position.z = -distanceFromCenter * 0.4;
    
    // Subtle floating animation - slower and more elegant
    meshRef.current.position.y = Math.sin(time * 0.3 + index * 0.5) * 0.08;
    
    // Border opacity sync
    if (borderRef.current && borderRef.current.material instanceof THREE.LineBasicMaterial) {
      borderRef.current.material.opacity = opacity * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      {/* Plane geometry for image - Premium aspect ratio */}
      <planeGeometry args={[3.2, 4.2]} />
      <meshBasicMaterial 
        ref={materialRef}
        map={texture}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
      />
      
      {/* Premium minimal border */}
      <lineSegments ref={borderRef}>
        <edgesGeometry args={[new THREE.PlaneGeometry(3.2, 4.2)]} />
        <lineBasicMaterial color="#d1d5db" opacity={0.3} transparent />
      </lineSegments>
    </mesh>
  );
}

// Fallback card without image (for loading state)
function ReviewCardFallback({ 
  position, 
  index, 
  totalCards,
  scrollOffset,
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
    const cardSpacing = 3.8;
    const baseX = (index - totalCards / 2) * cardSpacing;
    const offsetX = scrollOffset * cardSpacing;
    const finalX = baseX + offsetX;
    
    let wrappedX = finalX % (totalCards * cardSpacing);
    if (wrappedX > totalCards * cardSpacing / 2) {
      wrappedX -= totalCards * cardSpacing;
    }
    if (wrappedX < -totalCards * cardSpacing / 2) {
      wrappedX += totalCards * cardSpacing;
    }
    
    meshRef.current.position.x = wrappedX;
    const distanceFromCenter = Math.abs(wrappedX);
    const scale = Math.max(0.35, 1 - distanceFromCenter * 0.12);
    meshRef.current.scale.set(scale, scale, scale);
    meshRef.current.rotation.y = (wrappedX / 10) * (Math.PI / 8);
    meshRef.current.position.z = -distanceFromCenter * 0.4;
    meshRef.current.position.y = Math.sin(time * 0.3 + index * 0.5) * 0.08;
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[3.2, 4.2]} />
      <meshBasicMaterial color="#f3f4f6" transparent opacity={0.8} side={THREE.DoubleSide} />
    </mesh>
  );
}

// 3D Scene Component - Premium version
function ReviewCarousel3D() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const totalCards = 12; // Reduced for better performance with images
  
  // Auto-scroll animation - slower, more cinematic
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    setScrollOffset(time * 0.2);
  });
  
  return (
    <>
      {/* Soft ambient lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.4} />
      <directionalLight position={[-10, -10, -5]} intensity={0.2} />
      
      {/* Review Cards with Images */}
      {Array.from({ length: totalCards }).map((_, i) => (
        <Suspense 
          key={i} 
          fallback={
            <ReviewCardFallback
              position={[0, 0, 0]}
              index={i}
              totalCards={totalCards}
              scrollOffset={scrollOffset}
            />
          }
        >
          <ReviewCard3D
            position={[0, 0, 0]}
            index={i}
            totalCards={totalCards}
            scrollOffset={scrollOffset}
            imageUrl={reviewImagePaths[i % reviewImagePaths.length]}
          />
        </Suspense>
      ))}
    </>
  );
}

// MOMENTS Section 3: Premium Review Gallery (Awwwards Style)
export function MomentsSection3() {
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const mobileAnimationRef = useRef<gsap.core.Tween | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP 무한 스크롤 애니메이션 (Mobile only)
  useEffect(() => {
    if (!isMobile || !mobileTrackRef.current) return;

    const track = mobileTrackRef.current;
    const cards = track.querySelectorAll('.mobile-review-card');
    if (cards.length === 0) return;

    // 무한 루프 애니메이션
    const totalWidth = track.scrollWidth / 2; // 이미지가 2번 반복되므로 절반
    
    // 초기 위치 설정 (오른쪽으로 이동하기 위해 왼쪽 끝에서 시작)
    gsap.set(track, { x: `-${totalWidth}px` });
    
    mobileAnimationRef.current = gsap.to(track, {
      x: '0px', // 오른쪽으로 이동
      duration: 40, // 40초에 걸쳐 이동
      ease: 'linear',
      repeat: -1,
    });

    // Cleanup
    return () => {
      if (mobileAnimationRef.current) {
        mobileAnimationRef.current.kill();
      }
    };
  }, [isMobile]);

  return (
    <section className="relative bg-white pt-[90px] pb-24">
      <div className="max-w-[1180px] mx-auto px-0">
        {/* Header - Minimal typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p
            className="mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
              color: '#9ca3af',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Voices & Moments
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
              color: '#2d5016',
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            작은 변화가 큰 성장을 만든 장면들
          </h2>
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)',
              color: '#A66A5A',
              fontWeight: 300,
              lineHeight: 1.5,
            }}
          >
            1000명의 아이들을 만나며
          </p>
        </motion.div>

        {/* 3D Carousel - Desktop Only (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden hidden lg:block"
          style={{
            background: 'linear-gradient(180deg, #f9fafb 0%, #f3f4f6 50%, #f9fafb 100%)',
            height: '600px',
          }}
        >
          {/* Subtle noise texture overlay */}
          <div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              opacity: 0.03,
              mixBlendMode: 'multiply',
            }}
          />
          
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
          
          {/* Premium edge fades - white/gray */}
          <div 
            className="absolute inset-x-0 top-0 h-40 pointer-events-none z-20" 
            style={{
              background: 'linear-gradient(to bottom, rgba(249,250,251,1) 0%, rgba(249,250,251,0) 100%)',
            }}
          />
          <div 
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-20" 
            style={{
              background: 'linear-gradient(to top, rgba(249,250,251,1) 0%, rgba(249,250,251,0) 100%)',
            }}
          />
          
          {/* Side fades for depth */}
          <div 
            className="absolute inset-y-0 left-0 w-32 pointer-events-none z-20" 
            style={{
              background: 'linear-gradient(to right, rgba(249,250,251,0.9) 0%, rgba(249,250,251,0) 100%)',
            }}
          />
          <div 
            className="absolute inset-y-0 right-0 w-32 pointer-events-none z-20" 
            style={{
              background: 'linear-gradient(to left, rgba(249,250,251,0.9) 0%, rgba(249,250,251,0) 100%)',
            }}
          />
        </motion.div>

        {/* Mobile: GSAP Infinite Horizontal Scroll - Mobile Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(180deg, #f9fafb 0%, #f3f4f6 50%, #f9fafb 100%)',
            height: '400px',
          }}
        >
          {/* Scrolling Track */}
          <div
            ref={mobileTrackRef}
            className="flex items-center absolute top-0 left-0 h-full"
            style={{ gap: '1rem' }}
          >
            {/* 이미지 2번 반복 (무한 루프를 위해) */}
            {[...reviewImagePaths, ...reviewImagePaths].map((imagePath, idx) => (
              <div
                key={idx}
                className="mobile-review-card flex-shrink-0 rounded-xl overflow-hidden"
                style={{
                  width: '240px',
                  height: '320px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                }}
              >
                <img
                  src={imagePath}
                  alt={`크레용숲 후기 ${(idx % reviewImagePaths.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Left Fade */}
          <div 
            className="absolute inset-y-0 left-0 w-16 pointer-events-none z-20" 
            style={{
              background: 'linear-gradient(to right, rgba(249,250,251,1) 0%, rgba(249,250,251,0) 100%)',
            }}
          />
          
          {/* Right Fade */}
          <div 
            className="absolute inset-y-0 right-0 w-16 pointer-events-none z-20" 
            style={{
              background: 'linear-gradient(to left, rgba(249,250,251,1) 0%, rgba(249,250,251,0) 100%)',
            }}
          />
        </motion.div>

        {/* Bottom Text - Minimal */}
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
              fontSize: 'clamp(0.85rem, 1.1vw, 0.85rem)',
              color: '#9ca3af',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: '0.02em',
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
