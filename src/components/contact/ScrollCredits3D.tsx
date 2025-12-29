// @ts-nocheck
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { Credits3DFallback } from './Credits3DLoader';

gsap.registerPlugin(ScrollTrigger);

// Image data for credits
const creditImages = [
  { 
    id: 1, 
    position: [-2.5, 0, 0] as [number, number, number], 
    speed: 1,
    url: 'https://images.unsplash.com/photo-1629822908853-b1d2a39ece98?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 2, 
    position: [2.5, 3, -0.5] as [number, number, number], 
    speed: 1.2,
    url: 'https://images.unsplash.com/photo-1611085667203-7efa7c067bce?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 3, 
    position: [-2, 6, -1] as [number, number, number], 
    speed: 0.9,
    url: 'https://images.unsplash.com/photo-1564152078766-9d62133c7e9a?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 4, 
    position: [2.8, 9, -0.8] as [number, number, number], 
    speed: 1.1,
    url: 'https://images.unsplash.com/photo-1727768351795-2390d19b2b41?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 5, 
    position: [-2.3, 12, -0.3] as [number, number, number], 
    speed: 1,
    url: 'https://images.unsplash.com/photo-1610274672835-65a79c852f58?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 6, 
    position: [2.2, 15, -1.2] as [number, number, number], 
    speed: 1.3,
    url: 'https://images.unsplash.com/photo-1555942861-769f7774848a?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 7, 
    position: [-2.6, 18, -0.6] as [number, number, number], 
    speed: 0.95,
    url: 'https://images.unsplash.com/photo-1578521157034-273977158e71?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 8, 
    position: [2.4, 21, -0.9] as [number, number, number], 
    speed: 1.15,
    url: 'https://images.unsplash.com/photo-1608762202130-36436df91cf0?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 9, 
    position: [-2.1, 24, -0.4] as [number, number, number], 
    speed: 1.05,
    url: 'https://images.unsplash.com/photo-1630077852169-3900cc6f4f37?w=800&q=80&auto=format&fit=crop'
  },
  { 
    id: 10, 
    position: [2.7, 27, -1.1] as [number, number, number], 
    speed: 0.98,
    url: 'https://images.unsplash.com/photo-1610137444548-728e7c4b49d9?w=800&q=80&auto=format&fit=crop'
  },
];

interface ImageCardProps {
  position: [number, number, number];
  imageUrl: string;
  scrollProgress: number;
  baseY: number;
  speed: number;
  index: number;
}

function ImageCard({ position, imageUrl, scrollProgress, baseY, speed, index }: ImageCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const { viewport } = useThree();
  
  // 반응형 크기 및 위치 계산
  const isMobile = viewport.width < 6;
  const cardWidth = isMobile ? 1.5 : 2.5;
  const cardHeight = isMobile ? 2.1 : 3.5;
  
  // 모바일에서는 X 위치를 중앙으로 좁게, PC에서는 더 넓게 조정
  const adjustedPositionX = isMobile ? position[0] * 0.6 : position[0] * 1.2;

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      imageUrl,
      (loadedTexture) => {
        loadedTexture.minFilter = THREE.LinearFilter;
        loadedTexture.generateMipmaps = false;
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.warn('Texture load failed:', imageUrl, error);
      }
    );

    return () => {
      if (texture) {
        texture.dispose();
      }
    };
  }, [imageUrl]);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;

    // Calculate Y position based on scroll
    const newY = baseY - scrollProgress * speed * 15;
    meshRef.current.position.y = newY;

    // Calculate rotation based on distance from camera
    const distanceFromCamera = newY - state.camera.position.y;
    const rotationProgress = Math.max(0, Math.min(1, distanceFromCamera / 10));

    // Apply counter-clockwise rotation (negative Z)
    meshRef.current.rotation.z = -rotationProgress * Math.PI * 0.4;
    
    // Add slight X rotation for depth
    meshRef.current.rotation.x = -rotationProgress * Math.PI * 0.1;

    // Fade out as it rotates
    materialRef.current.opacity = 1 - rotationProgress * 0.6;

    // Add subtle mouse parallax (모바일에서 덜 적용)
    const mouse = state.mouse;
    const parallaxStrength = isMobile ? 0.05 : 0.2;
    meshRef.current.position.x = adjustedPositionX + mouse.x * parallaxStrength * (index % 2 === 0 ? 1 : -1);
    meshRef.current.position.z = position[2] + Math.abs(mouse.y) * (isMobile ? 0.1 : 0.3);
  });

  if (!texture) {
    return null; // Don't render until texture is loaded
  }

  return (
    <mesh ref={meshRef} position={[adjustedPositionX, position[1], position[2]]}>
      <planeGeometry args={[cardWidth, cardHeight]} />
      <meshStandardMaterial
        ref={materialRef}
        map={texture}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  );
}

function Scene({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    // Move camera up slightly with scroll for more dynamic effect
    camera.position.y = scrollProgress * 2;
  });

  return (
    <>
      {/* Enhanced lighting for premium look */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} />
      <pointLight position={[0, 0, 5]} intensity={0.7} color="#7CB342" />
      <pointLight position={[0, 10, -5]} intensity={0.5} color="#F48FB1" />

      {/* Image cards */}
      {creditImages.map((item, index) => (
        <ImageCard
          key={item.id}
          position={item.position}
          imageUrl={item.url}
          scrollProgress={scrollProgress}
          baseY={item.position[1]}
          speed={item.speed}
          index={index}
        />
      ))}
    </>
  );
}

export default function ScrollCredits3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    // GSAP ScrollTrigger for precise scroll tracking
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      observer.disconnect();
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] bg-white"
    >
      {/* Fixed Canvas */}
      <div className="sticky top-0 h-screen w-full">
        {isVisible ? (
          <Canvas
            camera={{ 
              position: [0, 0, isMobile ? 10 : 8], 
              fov: isMobile ? 60 : 50 
            }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            dpr={[1, 2]}
          >
            <Scene scrollProgress={scrollProgress} />
          </Canvas>
        ) : (
          <Credits3DFallback />
        )}

        {/* Credits text overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-24">
          <div
            className="text-center space-y-2 transition-opacity duration-1000 px-4"
            style={{
              opacity: scrollProgress > 0.7 ? 1 : 0,
            }}
          >
            <p className="text-[#6B4423]/40 text-sm uppercase tracking-[0.3em]">
              Forêt des Crayons
            </p>
            <h3 className="text-[clamp(2rem,5vw,4rem)] text-[#6B4423]">
              2025
            </h3>
            <p className="text-[#6B4423]/60 text-lg">
              아이들의 이야기는 계속됩니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
