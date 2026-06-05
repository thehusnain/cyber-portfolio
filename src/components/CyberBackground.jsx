import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles, OrbitControls } from '@react-three/drei';

const CyberBackground = ({ theme }) => {
  const isLight = theme === 'light';
  // Adapt sparkles and brightness for Dark Green (default) and Red Team (light) modes
  const color1 = isLight ? '#ef4444' : '#00FF8C';
  const color2 = isLight ? '#ff3366' : '#10b981';
  const opacity1 = 0.6;
  const opacity2 = 0.35;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -3, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <Sparkles count={350} scale={16} size={2.5} speed={0.45} opacity={opacity1} color={color1} />
        <Sparkles count={180} scale={16} size={3.5} speed={0.25} opacity={opacity2} color={color2} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
};

export default CyberBackground;
