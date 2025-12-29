// @ts-nocheck
/**
 * ScrollCredits3D - Context Lost 방지 최종 패턴
 * 
 * 주요 최적화:
 * 1. scrollProgress를 useRef로 저장하여 매 프레임 setState 제거 (리렌더링 폭주 방지)
 * 2. frameloop="demand" + invalidate()로 필요할 때만 렌더링
 * 3. dpr 제한 (모바일 1, PC 최대 1.5)
 * 4. meshBasicMaterial + 라이트 최소화로 GPU 부하 감소
 * 5. 텍스처 최적화 (해상도 제한, mipmap 비활성화)
 * 6. Context Lost 감지 및 자동 복구
 * 7. IntersectionObserver로 화면 밖에서 완전 정지
 */

import React, { useRef, useEffect, useState, Suspense, useCallback } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { Credits3DFallback } from './Credits3DLoader';

gsap.registerPlugin(ScrollTrigger);

// Image data for credits - 모바일용 낮은 해상도 URL 추가
const getImageUrl = (baseUrl: string, isMobile: boolean) => {
  // 모바일은 w=512, PC는 w=768로 제한
  return baseUrl.replace('w=800', isMobile ? 'w=512' : 'w=768');
};

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
  scrollProgressRef: React.MutableRefObject<number>;
  baseY: number;
  speed: number;
  index: number;
  isMobile: boolean;
}

// 텍스처 캐시 (중복 로드 방지)
const textureCache = new Map<string, THREE.Texture>();

function ImageCard({ position, imageUrl, scrollProgressRef, baseY, speed, index, isMobile }: ImageCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const geometryRef = useRef<THREE.PlaneGeometry | null>(null);
  const { viewport, invalidate } = useThree();
  
  // 반응형 크기 및 위치 계산
  const cardWidth = isMobile ? 1.5 : 2.5;
  const cardHeight = isMobile ? 2.1 : 3.5;
  const adjustedPositionX = isMobile ? position[0] * 0.6 : position[0] * 1.2;

  // 텍스처 로드 - useLoader 사용 (Suspense 지원)
  const texture = useLoader(
    THREE.TextureLoader,
    getImageUrl(imageUrl, isMobile),
    (loader) => {
      // 캐시 확인
      const cached = textureCache.get(imageUrl);
      if (cached) return cached;
    }
  );

  // 텍스처 최적화 설정
  useEffect(() => {
    if (!texture) return;

    // 캐시에 저장
    textureCache.set(imageUrl, texture);

    // 최적화 설정
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 1; // anisotropy 제한

    return () => {
      // 언마운트 시 dispose는 하지 않음 (캐시 유지)
      // 컴포넌트 전체 언마운트 시에만 정리
    };
  }, [texture, imageUrl]);

  // 지오메트리 생성 및 정리
  useEffect(() => {
    if (!geometryRef.current) {
      geometryRef.current = new THREE.PlaneGeometry(cardWidth, cardHeight);
    }
    return () => {
      if (geometryRef.current) {
        geometryRef.current.dispose();
      }
    };
  }, [cardWidth, cardHeight]);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;

    // scrollProgress는 ref에서 읽기 (setState 없음)
    const scrollProgress = scrollProgressRef.current;

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

    // 필요할 때만 invalidate (렌더링 요청)
    invalidate();
  });

  if (!texture) {
    return null;
  }

  return (
    <mesh ref={meshRef} position={[adjustedPositionX, position[1], position[2]]} geometry={geometryRef.current || undefined}>
      {!geometryRef.current && <planeGeometry args={[cardWidth, cardHeight]} />}
      <meshBasicMaterial
        ref={materialRef}
        map={texture}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
        toneMapped={true}
      />
    </mesh>
  );
}

// Context Lost 감지를 위한 컴포넌트
function ContextLostHandler({ onContextLost, onContextRestored }: { onContextLost: () => void; onContextRestored: () => void }) {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;
    
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      onContextLost();
    };

    const handleContextRestored = () => {
      onContextRestored();
    };

    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [gl, onContextLost, onContextRestored]);

  return null;
}

function Scene({ scrollProgressRef, isMobile, onContextLost, onContextRestored }: { 
  scrollProgressRef: React.MutableRefObject<number>; 
  isMobile: boolean;
  onContextLost: () => void;
  onContextRestored: () => void;
}) {
  const { camera, invalidate } = useThree();

  useFrame(() => {
    // scrollProgress는 ref에서 읽기
    const scrollProgress = scrollProgressRef.current;
    camera.position.y = scrollProgress * 2;
    invalidate();
  });

  return (
    <>
      <ContextLostHandler onContextLost={onContextLost} onContextRestored={onContextRestored} />
      
      {/* 최소 라이트 - ambientLight 1개만 (basicMaterial이므로 사실상 불필요하지만 톤 유지) */}
      <ambientLight intensity={0.5} />

      {/* Image cards */}
      <Suspense fallback={null}>
        {creditImages.map((item, index) => (
          <ImageCard
            key={item.id}
            position={item.position}
            imageUrl={item.url}
            scrollProgressRef={scrollProgressRef}
            baseY={item.position[1]}
            speed={item.speed}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </Suspense>
    </>
  );
}

export default function ScrollCredits3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<number>(0); // useRef로 변경 (setState 제거)
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [contextLost, setContextLost] = useState(false);
  const [showTextOverlay, setShowTextOverlay] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTextUpdateRef = useRef<number>(0);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 텍스트 오버레이 throttle (10-15fps)
  const updateTextOverlay = useCallback(() => {
    const now = performance.now();
    if (now - lastTextUpdateRef.current < 100) return; // ~10fps
    lastTextUpdateRef.current = now;
    
    setShowTextOverlay(scrollProgressRef.current > 0.7);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    let isActive = true;

    // Intersection Observer - 화면 밖에서 완전 정지
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            isActive = true;
            // ScrollTrigger 재활성화
            if (scrollTriggerRef.current) {
              scrollTriggerRef.current.enable();
            }
          } else {
            // 화면 밖에서는 렌더링 중지
            isActive = false;
            if (scrollTriggerRef.current) {
              scrollTriggerRef.current.disable();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    // GSAP ScrollTrigger - onUpdate에서 setState 금지, ref만 업데이트
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        if (!isActive) return;
        // setState 대신 ref 업데이트
        scrollProgressRef.current = self.progress;
        // 텍스트 오버레이 throttle 업데이트
        updateTextOverlay();
      },
    });

    scrollTriggerRef.current = trigger;

    // requestAnimationFrame으로 텍스트 오버레이 업데이트 (추가 안전장치)
    const animate = () => {
      if (isActive) {
        updateTextOverlay();
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      trigger.kill();
      scrollTriggerRef.current = null;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      isActive = false;
    };
  }, [updateTextOverlay]);

  // Context Lost 복구 핸들러
  const handleContextLost = useCallback(() => {
    console.warn('WebGL Context Lost detected');
    setContextLost(true);
    setIsVisible(false);
  }, []);

  const handleContextRestored = useCallback(() => {
    console.log('WebGL Context Restored');
    setContextLost(false);
    // 1-2초 후 재마운트 시도
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);
  }, []);

  // DPR 계산 (모바일 1, PC 최대 1.5)
  const getDPR = () => {
    if (isMobile) return 1;
    const devicePixelRatio = window.devicePixelRatio || 1;
    return Math.min(devicePixelRatio, 1.5); // 최대 1.5로 제한
  };

  // 컨테이너 높이 - style로 강제 적용 (Tailwind class 충돌 방지)
  const containerHeight = '400vh';

  return (
    <div
      ref={containerRef}
      className="relative bg-white"
      style={{ 
        minHeight: containerHeight,
        height: containerHeight,
        overflow: 'visible' // sticky 부모에 overflow-visible 강제
      }}
    >
      {/* Fixed Canvas */}
      <div className="sticky top-0 h-screen w-full" style={{ overflow: 'visible' }}>
        {isVisible && !contextLost ? (
          <Canvas
            camera={{ 
              position: [0, 0, isMobile ? 10 : 8], 
              fov: isMobile ? 60 : 50 
            }}
            gl={{
              antialias: false, // antialias 비활성화 (성능 향상)
              alpha: true,
              powerPreference: 'default', // high-performance 금지
              stencil: false,
              depth: true,
            }}
            dpr={getDPR()} // dpr 제한
            frameloop="demand" // demand 렌더링
          >
            <Scene 
              scrollProgressRef={scrollProgressRef} 
              isMobile={isMobile}
              onContextLost={handleContextLost}
              onContextRestored={handleContextRestored}
            />
          </Canvas>
        ) : (
          <Credits3DFallback />
        )}

        {/* Credits text overlay - throttle 적용 */}
        <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-24">
          <div
            className="text-center space-y-2 transition-opacity duration-1000 px-4"
            style={{
              opacity: showTextOverlay ? 1 : 0,
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
