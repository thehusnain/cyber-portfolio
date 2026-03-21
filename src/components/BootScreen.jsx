import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import './BootScreen.css';

// Central 3D Core with wireframes
const HologramCore = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.2;
      outerRef.current.rotation.y = t * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = t * -0.5;
      innerRef.current.rotation.y = t * -0.2;
    }
  });

  return (
    <group>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial color="#00FF8C" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#00D9FF" wireframe transparent opacity={0.4} />
      </mesh>
      {/* Central solid glowing core */}
      <Sphere args={[0.8, 32, 32]}>
        <meshBasicMaterial color="#00FF8C" transparent opacity={0.8} />
      </Sphere>
    </group>
  );
};

// Data particles orbiting the core
const ParticleSystem = () => {
  const pointsRef = useRef(null);
  const count = 600;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00D9FF" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

// Background subtle grid lines
const GridFloor = () => {
  const gridRef = useRef(null);
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 2) % 2;
    }
  });

  return (
    <group position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper ref={gridRef} args={[50, 50, '#00FF8C', '#002211']} />
    </group>
  );
};

const BootScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const [sequence, setSequence] = useState(0);
  const [hexData, setHexData] = useState([]);

  const handleSkip = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  useEffect(() => {
    // Sequence timing
    const s1 = setTimeout(() => setSequence(1), 1000); // CONNECTING...
    const s2 = setTimeout(() => setSequence(2), 2500); // AUTHENTICATING...
    const s3 = setTimeout(() => setSequence(3), 4000); // ACCESS GRANTED
    const s4 = setTimeout(() => handleSkip(), 6000);   // FADE OUT

    // Random hex data generator
    const hexInterval = setInterval(() => {
      const newHex = Array.from({ length: 8 }, () => 
        Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()
      );
      setHexData(newHex);
    }, 100);

    return () => {
      clearTimeout(s1); clearTimeout(s2); clearTimeout(s3); clearTimeout(s4);
      clearInterval(hexInterval);
    };
  }, []);

  return (
    <div className={`boot-screen-3d ${fading ? 'fade-out' : ''}`} onClick={handleSkip}>
      
      {/* 3D Canvas Background */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <HologramCore />
          <ParticleSystem />
          <GridFloor />
        </Canvas>
      </div>

      {/* Forensic Overlay UI */}
      <div className="forensic-overlay">
        
        {/* Top bar data */}
        <div className="overlay-top">
          <div className="hex-stream left-stream">
            {hexData.slice(0, 4).map((h, i) => <div key={i}>0x{h}</div>)}
          </div>
          <div className="status-indicator-box">
            <span className="dot pulse"></span>
            SYS_NORMAL
          </div>
          <div className="hex-stream right-stream">
            {hexData.slice(4, 8).map((h, i) => <div key={i}>0x{h}</div>)}
          </div>
        </div>

        {/* Center Target UI */}
        <div className="target-reticle">
          <div className="reticle-corner top-left"></div>
          <div className="reticle-corner top-right"></div>
          <div className="reticle-corner bottom-left"></div>
          <div className="reticle-corner bottom-right"></div>
          
          <div className="sequence-text-wrapper">
            {sequence === 0 && <h2 className="seq-text blink">ESTABLISHING CONNECTION</h2>}
            {sequence === 1 && <h2 className="seq-text">HANDSHAKE ACQUIRED</h2>}
            {sequence === 2 && <h2 className="seq-text tech">DECRYPTING PAYLOAD_</h2>}
            {sequence === 3 && <h2 className="seq-text granted glitch" data-text="ACCESS GRANTED">ACCESS GRANTED</h2>}
          </div>
        </div>

        {/* Bottom Details */}
        <div className="overlay-bottom">
          <div className="sys-info">
            <p>ID: HUSNAIN_0x1A</p>
            <p>LOC: PK_NODE_R</p>
          </div>
          
          <div className="progress-bar-container">
            <div className="progress-bar-track">
              <div className={`progress-bar-fill seq-${sequence}`}></div>
            </div>
            <div className="progress-label">INITIALIZATION PROGRESS</div>
          </div>
          
          <div className="skip-hint">[ CLICK ANYWHERE TO BYPASS SEQUENCE ]</div>
        </div>

      </div>
    </div>
  );
};

export default BootScreen;
