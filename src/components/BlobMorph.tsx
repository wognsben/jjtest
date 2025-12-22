// @ts-nocheck
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';

interface BlobProps {
  position: [number, number, number];
  color: string;
  delay: number;
  morphProgress: number;
  mousePosition: { x: number; y: number };
  initialPosition: [number, number, number];
}

function Blob({ position, color, delay, morphProgress, mousePosition, initialPosition }: BlobProps) {
  const meshRef = useRef<any>(null);
  const targetPosition = useRef({ x: position[0], y: position[1], z: position[2] });
  const currentPosition = useRef({ x: initialPosition[0], y: initialPosition[1], z: initialPosition[2] });
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Smooth morphing from center to target position
    currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * delta * 1.5 * morphProgress;
    currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * delta * 1.5 * morphProgress;
    currentPosition.current.z += (targetPosition.current.z - currentPosition.current.z) * delta * 1.5 * morphProgress;
    
    meshRef.current.position.set(
      currentPosition.current.x,
      currentPosition.current.y,
      currentPosition.current.z
    );
    
    // Magnetic mouse effect
    const mouseX = (mousePosition.x - 0.5) * 0.5;
    const mouseY = -(mousePosition.y - 0.5) * 0.5;
    
    meshRef.current.position.x += mouseX * 0.1;
    meshRef.current.position.y += mouseY * 0.1;
    
    // Gentle rotation
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + delay;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 + delay;
  });
  
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} position={initialPosition}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Scene({ morphProgress, mousePosition }: { morphProgress: number; mousePosition: { x: number; y: number } }) {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 10;
  }, [camera]);
  
  const blobs = useMemo(() => [
    { position: [-6, 0, 0] as [number, number, number], color: '#FFE066', delay: 0 },
    { position: [-2, 0, 0] as [number, number, number], color: '#FFB3BA', delay: 0.2 },
    { position: [2, 0, 0] as [number, number, number], color: '#D4A574', delay: 0.4 },
    { position: [6, 0, 0] as [number, number, number], color: '#B8E6B8', delay: 0.6 }
  ], []);
  
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a8c68f" />
      
      {blobs.map((blob, i) => (
        <Blob
          key={i}
          position={blob.position}
          color={blob.color}
          delay={blob.delay}
          morphProgress={morphProgress}
          mousePosition={mousePosition}
          initialPosition={[0, 0, 0]}
        />
      ))}
    </>
  );
}

export default function BlobMorph({ morphProgress }: { morphProgress: number }) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0.5, y: 0.5 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };
  
  return (
    <div 
      className="w-full h-[280px] md:h-[320px] relative"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene morphProgress={morphProgress} mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}