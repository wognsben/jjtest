// @ts-nocheck
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'motion/react';

// 3D Rotating Image Circle
interface RotatingImageProps {
  imageUrl: string;
  position: [number, number, number];
  rotation: number;
  active: boolean;
}

function RotatingImage({ imageUrl, position, rotation, active }: RotatingImageProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

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
    if (!meshRef.current) return;

    // Smooth rotation animation
    const targetRotation = rotation;
    meshRef.current.rotation.y += (targetRotation - meshRef.current.rotation.y) * 0.1;

    // Active image scale and glow
    const targetScale = active ? 1.2 : 1;
    const currentScale = meshRef.current.scale.x;
    meshRef.current.scale.setScalar(currentScale + (targetScale - currentScale) * 0.1);

    // Gentle floating
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + rotation) * 0.1;
  });

  if (!texture) return null;

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1.5, 1.5]} />
      <meshStandardMaterial 
        map={texture} 
        transparent
        opacity={active ? 1 : 0.7}
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  );
}

// Main 3D Carousel Scene
interface CarouselSceneProps {
  images: string[];
  activeIndex: number;
}

function CarouselScene({ images, activeIndex }: CarouselSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;

    // Gentle rotation of entire carousel
    groupRef.current.rotation.y += delta * 0.2;
  });

  const radius = 2.5;
  const imageCount = images.length;

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-3, 2, 3]} intensity={0.5} color="#FFB6C1" />

      {images.map((imageUrl, i) => {
        const angle = (i / imageCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <RotatingImage
            key={i}
            imageUrl={imageUrl}
            position={[x, 0, z]}
            rotation={angle}
            active={i === activeIndex}
          />
        );
      })}
    </group>
  );
}

// Exported Component for each age group
interface ArtCircle3DProps {
  images: string[];
  bgColor: string;
  borderColor: string;
}

export function ArtCircle3D({ images, bgColor, borderColor }: ArtCircle3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
      {/* 3D Canvas Circle */}
      <div 
        className="w-full h-full rounded-full overflow-hidden border-4"
        style={{ 
          backgroundColor: bgColor,
          borderColor: borderColor,
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <CarouselScene images={images} activeIndex={activeIndex} />
        </Canvas>
      </div>

      {/* Progress Dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? 'bg-accent-green scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Fallback: Static image circle (if WebGL fails)
export function StaticArtCircle({ images, bgColor, borderColor }: ArtCircle3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
      <motion.div 
        className="w-full h-full rounded-full overflow-hidden border-4 flex items-center justify-center"
        style={{ 
          backgroundColor: bgColor,
          borderColor: borderColor,
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          key={activeIndex}
          src={images[activeIndex]}
          alt={`Artwork ${activeIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Progress Dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? 'bg-accent-green scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
