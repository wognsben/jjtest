import * as THREE from 'three';
import { useMemo } from 'react';

export default function ColorCarteWall() {
  // Ultra-matte mineral panel 물성 (전시 패널)
  const panelMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffffff'),
      roughness: 0.82,
      metalness: 0.0,
      clearcoat: 0.06,
      clearcoatRoughness: 0.85,
    });
  }, []);

  // Shader로 컬러 생성 (노이즈 제거, 전시물 느낌)
  const colorMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: false,
      uniforms: {
        uGrid: { value: 12.0 },      // 세로 칩 수
        uRows: { value: 6.0 },       // 가로 톤(명도 단계)
      },
      vertexShader: `
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uGrid;
        uniform float uRows;

        // 아주 단순한 "RAL 느낌" 흐름: 레드→오렌지→옐로→그린→블루→퍼플
        vec3 hueRamp(float t){
          // t 0..1
          vec3 a = vec3(0.90,0.20,0.20);
          vec3 b = vec3(0.95,0.55,0.20);
          vec3 c = vec3(0.95,0.85,0.25);
          vec3 d = vec3(0.25,0.70,0.45);
          vec3 e = vec3(0.20,0.55,0.85);
          vec3 f = vec3(0.55,0.35,0.80);

          if(t < 0.20) return mix(a,b,t/0.20);
          if(t < 0.40) return mix(b,c,(t-0.20)/0.20);
          if(t < 0.60) return mix(c,d,(t-0.40)/0.20);
          if(t < 0.80) return mix(d,e,(t-0.60)/0.20);
          return mix(e,f,(t-0.80)/0.20);
        }

        void main(){
          // 칩 인덱스
          float x = floor(vUv.x * uGrid);
          float y = floor(vUv.y * uRows);

          float tHue = (x + 0.5) / uGrid;
          float tRow = (y + 0.5) / uRows;

          // 위로 갈수록 밝게(명도)
          float light = mix(0.18, 0.92, tRow);
          vec3 base = hueRamp(tHue);

          // L5: Color Perception - 채도 감소 (5-12%), 미세한 명도 변화
          // 채도 감소: 8% → 10% (더 절제)
          vec3 col = mix(base, vec3(1.0), 0.10);
          
          // 미세한 명도 변화 (±1-2% per cell) - 인간적인 느낌
          float microVariation = sin(x * 2.7 + y * 3.1) * 0.015; // ±1.5%
          light += microVariation;
          light = clamp(light, 0.0, 1.0);
          
          col *= light;

          // 그리드 라인 거의 완전히 제거 (L5: barely perceptible)
          vec2 g = fract(vUv * vec2(uGrid, uRows));
          float line = step(g.x, 0.004) + step(g.y, 0.004) + step(0.996, g.x) + step(0.996, g.y);
          col = mix(col, col * 0.98, clamp(line, 0.0, 1.0) * 0.04);

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
  }, []);

  // L3: Panel Material - 물리적 두께, chamfered edges 느낌
  const panelThickness = 0.12; // 두께 증가 (더 물리적)
  const panelWidth = 5.4;
  const panelHeight = 3.6;
  const margin = 0.6; // L2: 여백 증가 (0.4 → 0.6)
  const actualWidth = panelWidth + margin * 2;
  const actualHeight = panelHeight + margin * 2;

  // L4: 카메라 각도에 맞춘 패널 rotation (약간의 각도)
  const panelRotationX = -0.06; // 기존 각도 유지
  const panelRotationY = 0.01; // L4: 미세한 Y rotation (2-4° 느낌)

  return (
    <group>
      {/* L3: 전시 패널 프레임 (물리적 두께 있는 박스) */}
      <mesh 
        rotation-x={panelRotationX} 
        rotation-y={panelRotationY}
        position={[0, 1.05, -panelThickness / 2]}
      >
        <boxGeometry args={[actualWidth, actualHeight, panelThickness]} />
        <primitive object={panelMaterial} attach="material" />
      </mesh>
      
      {/* 컬러 영역 (프레임 마진 내부) */}
      <mesh 
        rotation-x={panelRotationX} 
        rotation-y={panelRotationY}
        position={[0, 1.05, 0.001]}
      >
        <planeGeometry args={[panelWidth, panelHeight, 1, 1]} />
        <primitive object={colorMaterial} attach="material" />
      </mesh>
    </group>
  );
}

