import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

interface Dot {
  u: number;
  v: number;
  label: string;
  note: string;
}

interface FocusDotsProps {
  dots: Dot[];
  selected: number;
  onSelect: (index: number) => void;
}

// 색상 계산 함수 (shader의 hueRamp와 동일한 로직)
function calculateColorFromUV(u: number, v: number): THREE.Color {
  const uGrid = 12.0;
  const uRows = 6.0;
  
  // 칩 인덱스 계산 (u, v는 0~1 범위, shader와 동일)
  // shader: float x = floor(vUv.x * uGrid);
  // shader: float y = floor(vUv.y * uRows);
  const x = Math.floor(u * uGrid);
  const y = Math.floor(v * uRows);
  
  const tHue = (x + 0.5) / uGrid;
  const tRow = (y + 0.5) / uRows;
  
  // 명도 계산 (shader: float light = mix(0.18, 0.92, tRow);)
  // tRow가 클수록 밝음 (아래쪽이 밝음)
  const light = 0.18 + (0.92 - 0.18) * tRow;
  
  // hueRamp 함수 (레드→오렌지→옐로→그린→블루→퍼플)
  const hueRamp = (t: number): [number, number, number] => {
    const a: [number, number, number] = [0.90, 0.20, 0.20]; // 레드
    const b: [number, number, number] = [0.95, 0.55, 0.20]; // 오렌지
    const c: [number, number, number] = [0.95, 0.85, 0.25]; // 옐로
    const d: [number, number, number] = [0.25, 0.70, 0.45]; // 그린
    const e: [number, number, number] = [0.20, 0.55, 0.85]; // 블루
    const f: [number, number, number] = [0.55, 0.35, 0.80]; // 퍼플
    
    let base: [number, number, number];
    if (t < 0.20) {
      const ratio = t / 0.20;
      base = [
        a[0] + (b[0] - a[0]) * ratio,
        a[1] + (b[1] - a[1]) * ratio,
        a[2] + (b[2] - a[2]) * ratio,
      ];
    } else if (t < 0.40) {
      const ratio = (t - 0.20) / 0.20;
      base = [
        b[0] + (c[0] - b[0]) * ratio,
        b[1] + (c[1] - b[1]) * ratio,
        b[2] + (c[2] - b[2]) * ratio,
      ];
    } else if (t < 0.60) {
      const ratio = (t - 0.40) / 0.20;
      base = [
        c[0] + (d[0] - c[0]) * ratio,
        c[1] + (d[1] - c[1]) * ratio,
        c[2] + (d[2] - c[2]) * ratio,
      ];
    } else if (t < 0.80) {
      const ratio = (t - 0.60) / 0.20;
      base = [
        d[0] + (e[0] - d[0]) * ratio,
        d[1] + (e[1] - d[1]) * ratio,
        d[2] + (e[2] - d[2]) * ratio,
      ];
    } else {
      const ratio = (t - 0.80) / 0.20;
      base = [
        e[0] + (f[0] - e[0]) * ratio,
        e[1] + (f[1] - e[1]) * ratio,
        e[2] + (f[2] - e[2]) * ratio,
      ];
    }
    
    // L5: Color Perception - 채도 감소 (10%)
    const col = [
      base[0] + (1.0 - base[0]) * 0.10,
      base[1] + (1.0 - base[1]) * 0.10,
      base[2] + (1.0 - base[2]) * 0.10,
    ];
    
    // 명도 적용 + 미세한 변화
    const microVariation = Math.sin(x * 2.7 + y * 3.1) * 0.015;
    const adjustedLight = Math.max(0, Math.min(1, light + microVariation));
    
    return [col[0] * adjustedLight, col[1] * adjustedLight, col[2] * adjustedLight];
  };
  
  const [r, g, b] = hueRamp(tHue);
  return new THREE.Color(r, g, b);
}

export default function FocusDots({ dots, selected, onSelect }: FocusDotsProps) {
  const group = useRef<THREE.Group>(null);

  // L6: Focus Markers - 세라믹 핀 느낌 (작고 정밀하게)
  const geo = useMemo(() => new THREE.CylinderGeometry(0.06, 0.06, 0.012, 32), []);
  
  // 각 점의 색상 계산
  const dotColors = useMemo(() => {
    return dots.map(dot => calculateColorFromUV(dot.u, dot.v));
  }, [dots]);
  
  // L6: 혼색 처리 함수 (파랑+빨강, 파랑+초록 등)
  const getMixedColor = (dot: Dot, baseColor: THREE.Color): THREE.Color => {
    const label = dot.label.toLowerCase();
    
    // 혼색 감지 및 처리
    if (label.includes('파랑') && label.includes('빨강')) {
      // 파랑+빨강: 보라 계열로 블렌드
      const blue = new THREE.Color(0.20, 0.55, 0.85);
      const red = new THREE.Color(0.90, 0.20, 0.20);
      return new THREE.Color().lerpColors(blue, red, 0.5);
    } else if (label.includes('파랑') && label.includes('초록')) {
      // 파랑+초록: 청록 계열로 블렌드
      const blue = new THREE.Color(0.20, 0.55, 0.85);
      const green = new THREE.Color(0.25, 0.70, 0.45);
      return new THREE.Color().lerpColors(blue, green, 0.5);
    } else if (label.includes('노랑') && label.includes('보라')) {
      // 노랑+보라: 따뜻한 보라 계열
      const yellow = new THREE.Color(0.95, 0.85, 0.25);
      const purple = new THREE.Color(0.55, 0.35, 0.80);
      return new THREE.Color().lerpColors(yellow, purple, 0.5);
    } else if (label.includes('하늘') && label.includes('빨강')) {
      // 하늘+빨강: 밝은 빨강 계열
      const sky = new THREE.Color(0.65, 0.85, 0.95);
      const red = new THREE.Color(0.90, 0.20, 0.20);
      return new THREE.Color().lerpColors(sky, red, 0.6);
    } else if (label.includes('하늘') && label.includes('보라')) {
      // 하늘+보라: 밝은 보라 계열
      const sky = new THREE.Color(0.65, 0.85, 0.95);
      const purple = new THREE.Color(0.55, 0.35, 0.80);
      return new THREE.Color().lerpColors(sky, purple, 0.5);
    } else if (label.includes('하늘') && label.includes('초록') && label.includes('보라')) {
      // 하늘=초록+보라: 복합 블렌드
      const sky = new THREE.Color(0.65, 0.85, 0.95);
      const green = new THREE.Color(0.25, 0.70, 0.45);
      const purple = new THREE.Color(0.55, 0.35, 0.80);
      const temp = new THREE.Color().lerpColors(green, purple, 0.5);
      return new THREE.Color().lerpColors(sky, temp, 0.4);
    }
    
    // 단일 색상은 그대로 반환
    return baseColor;
  };
  
  // L6: 각 점의 재질 생성 (실제 색상으로 채워진 세라믹 핀)
  const dotMaterials = useMemo(() => {
    return dots.map((dot, i) => {
      const baseColor = dotColors[i];
      const finalColor = getMixedColor(dot, baseColor);
      
      return new THREE.MeshPhysicalMaterial({
        color: finalColor,
        roughness: 0.42, // L6: 세라믹 느낌 (더 거칠게)
        metalness: 0.0,
        clearcoat: 0.12, // L6: 더 낮은 clearcoat (조용하게)
        clearcoatRoughness: 0.7,
        emissive: new THREE.Color(0x000000),
        emissiveIntensity: 0.0,
      });
    });
  }, [dotColors, dots]);

  // uv -> wall 좌표 매핑(컬러 영역: 5.4 x 3.6, 마진 제외)
  const mapToWorld = (u: number, v: number) => {
    const w = 5.4, h = 3.6; // 컬러 영역 크기
    const x = (u - 0.5) * w;
    const y = (v - 0.5) * h;
    // wall 위치/회전과 일치해야 함 (ColorCarteWall: pos y=1.05, rot x=-0.06, rot y=0.01)
    return new THREE.Vector3(x, 1.05 + y, 0.02); // z는 살짝 앞으로
  };

  // L6: Interaction Hierarchy - 절제된 애니메이션
  useFrame(() => {
    if (!group.current) return;
    group.current.children.forEach((m, i) => {
      const mesh = m as THREE.Mesh;
      const material = mesh.material as THREE.MeshPhysicalMaterial;
      
      // L6: 선택 시 2-3px lift만 (0.04 → 0.025, 더 절제)
      const targetLift = i === selected ? 0.025 : 0.0;
      mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, 0.02 + targetLift, 0.08); // 더 느린 easing
      
      // L6: Scale 변화 최소화 (거의 없음)
      mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, i === selected ? 1.02 : 1.0, 0.08));
      
      // L6: 하이라이트 제거 (조용하게)
      material.emissiveIntensity = 0.0;
    });
  });

  return (
    <group ref={group}>
      {dots.map((d, i) => {
        const p = mapToWorld(d.u, d.v);
        
        return (
          <mesh
            key={i}
            geometry={geo}
            material={dotMaterials[i]}
            position={[p.x, p.y, p.z]}
            rotation={[Math.PI / 2 - 0.06, 0.01, 0]} // wall과 각 맞춤 (L4: rotation y 추가)
            onClick={() => onSelect(i)}
            // L6: hover 효과 제거 (조용하게)
          />
        );
      })}
    </group>
  );
}

