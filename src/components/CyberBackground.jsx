import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles, OrbitControls } from '@react-three/drei';

const CyberBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -3, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <Sparkles count={400} scale={15} size={2} speed={0.4} opacity={0.5} color="#00FF8C" />
        <Sparkles count={200} scale={15} size={3} speed={0.2} opacity={0.3} color="#00D9FF" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
};

export default CyberBackground;
