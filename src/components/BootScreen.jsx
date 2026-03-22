import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sphere, Stars, Trail, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import './BootScreen.css';

// Stunning Cyber Core Model
const AdvancedCyberCore = () => {
  const coreRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.rotation.x = t * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t;
      ring1Ref.current.rotation.y = t * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.8;
      ring2Ref.current.rotation.z = t * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.4;
      ring3Ref.current.rotation.z = -t * 0.6;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer intricate wireframe sphere */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="#00FF8C" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Orbiting Tech Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00D9FF" transparent opacity={0.6} wireframe />
      </mesh>
      
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#FFB800" transparent opacity={0.4} />
      </mesh>
      
      <mesh ref={ring3Ref}>
        <torusGeometry args={[4.5, 0.05, 8, 50]} />
        <meshBasicMaterial color="#00FF8C" transparent opacity={0.3} wireframe />
      </mesh>

      {/* Pulsing Solid Inner Core */}
      <Sphere args={[1.2, 32, 32]}>
        <meshStandardMaterial 
          color="#002211" 
          emissive="#00FF8C" 
          emissiveIntensity={2} 
          wireframe={false} 
        />
      </Sphere>

      <Sparkles count={200} scale={10} size={2} speed={0.4} opacity={0.5} color="#00D9FF" />
    </group>
  );
};

// Data particles orbiting the core (Digital Snow)
const CyberParticles = () => {
  const pointsRef = useRef(null);
  const count = 1500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
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
      <pointsMaterial size={0.04} color="#00FF8C" transparent opacity={0.8} blending={THREE.AdditiveBlending} />
    </points>
  );
};

// Moving Grid floor
const InfinityGrid = () => {
  const gridRef = useRef(null);
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 4) % 2;
    }
  });

  return (
    <group position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper ref={gridRef} args={[100, 100, '#00FF8C', '#001a0e']} />
    </group>
  );
};

const BootScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const [sequence, setSequence] = useState(0);
  const [bootLogs, setBootLogs] = useState([]);
  const [hexData, setHexData] = useState([]);

  const messages = useMemo(() => [
    "INITIALIZING KERNEL MODULES...",
    "LOADING SECURE ENCLAVE...",
    "MOUNTING ENCRYPTED VOLUMES...",
    "ESTABLISHING NEURAL LINK...",
    "BYPASSING FIREWALL PROTCOLS...",
    "INJECTING PAYLOAD...",
    "HANDSHAKE ACQUIRED [200 OK]",
    "DECRYPTING MASTER KEY...",
  ], []);

  const handleSkip = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      onComplete();
    }, 1200); // Wait for fade-out animation
  };

  useEffect(() => {
    // Top-level sequence phases
    const s1 = setTimeout(() => setSequence(1), 1800); // DECRYPTING
    const s2 = setTimeout(() => setSequence(2), 3500); // VERIFYING
    const s3 = setTimeout(() => setSequence(3), 5200); // ACCESS GRANTED
    const s4 = setTimeout(() => handleSkip(), 7500);   // FADE OUT

    // Random hex top bar data
    const hexInterval = setInterval(() => {
      const newHex = Array.from({ length: 6 }, () => 
        Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()
      );
      setHexData(newHex);
    }, 80);

    // Boot logs typing
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < messages.length) {
        setBootLogs(prev => [...prev, messages[logIndex]]);
        logIndex++;
      }
    }, 400);

    return () => {
      clearTimeout(s1); clearTimeout(s2); clearTimeout(s3); clearTimeout(s4);
      clearInterval(hexInterval);
      clearInterval(logInterval);
    };
  }, [messages]);

  return (
    <div className={`boot-screen-3d ${fading ? 'fade-out' : ''}`} onClick={handleSkip}>
      
      {/* Immersive 3D Background */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#00FF8C" />
          <AdvancedCyberCore />
          <CyberParticles />
          <InfinityGrid />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Cyber HUD Overlay */}
      <div className="cyber-hud-overlay">
        
        {/* Top HUD Bar */}
        <div className="hud-header">
          <div className="stream stream-left">
            {hexData.slice(0, 3).map((h, i) => <span key={i}>0x{h}</span>)}
          </div>
          <div className="hud-status">
            <span className="dot pulse"></span>
            SYS_SECURE_MODE
          </div>
          <div className="stream stream-right">
            {hexData.slice(3, 6).map((h, i) => <span key={i}>0x{h}</span>)}
          </div>
        </div>

        {/* Console Logs */}
        <div className="boot-console">
          {bootLogs.map((log, i) => (
            <div key={i} className="log-line">
              <span className="log-prefix">&gt; root@host:~# </span> {log}
            </div>
          ))}
          <div className="log-line typing-cursor">_</div>
        </div>

        {/* Center Target & Sequence */}
        <div className="hud-center-target">
          <div className="crosshair-h"></div>
          <div className="crosshair-v"></div>
          
          <div className="corner c-top-left"></div>
          <div className="corner c-top-right"></div>
          <div className="corner c-bottom-left"></div>
          <div className="corner c-bottom-right"></div>
          
          <div className="sequence-panel">
            {sequence === 0 && <h2 className="phase-text blink">ESTABLISHING UPLINK</h2>}
            {sequence === 1 && <h2 className="phase-text tech">BRUTEFORCING HASH...</h2>}
            {sequence === 2 && <h2 className="phase-text">VERIFYING SIGNATURE</h2>}
            {sequence === 3 && <h2 className="phase-text granted glitch" data-text="ACCESS GRANTED">ACCESS GRANTED</h2>}
          </div>
        </div>

        {/* Bottom HUD Bar */}
        <div className="hud-footer">
          <div className="hud-metrics">
            <div>CPU: {Math.floor(Math.random() * 20 + 80)}%</div>
            <div>MEM: 0x2A4F</div>
            <div>NET: ENCRYPTED</div>
          </div>
          
          <div className="hud-progress-wrapper">
            <div className="hud-progress-track">
              <div className={`hud-progress-fill phase-${sequence}`}></div>
            </div>
            <div className="hud-progress-label">SYSTEM INITIALIZATION PROGRESS</div>
          </div>
          
          <div className="skip-hint">[ CLICK SCREEN TO BYPASS ]</div>
        </div>

      </div>
    </div>
  );
};

export default BootScreen;
