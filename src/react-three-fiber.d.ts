import 'react';
import '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      planeGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
    }
  }
}
