import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sphere, Box, Plane, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import './BootScreen.css';

// Forensic Scanner Core Model
const ForensicScanner = ({ sequence }) => {
  const globeRef = useRef(null);
  const scanPlaneRef = useRef(null);
  const dataPointsRef = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Rotating Globe representing the global database
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.4;
      globeRef.current.rotation.x = t * 0.1;
    }
    
    // Scanning Plane moving up and down
    if (scanPlaneRef.current) {
      scanPlaneRef.current.position.y = Math.sin(t * 2) * 1.5;
    }
    
    if (dataPointsRef.current) {
      dataPointsRef.current.rotation.y = -t * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Target Wireframe Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial color="#00D9FF" wireframe transparent opacity={sequence === 3 ? 0.8 : 0.2} />
      </mesh>

      {/* Internal Identity Core (Appears when match is found) */}
      <Sphere args={[1.5, 32, 32]} scale={sequence === 3 ? 1 : 0.001}>
        <meshStandardMaterial 
          color="#00FF8C" 
          emissive="#00FF8C" 
          emissiveIntensity={1} 
          wireframe={false} 
          transparent
          opacity={sequence === 3 ? 1 : 0}
        />
      </Sphere>

      {/* Scanning Laser Plane */}
      <mesh ref={scanPlaneRef} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshBasicMaterial 
          color="#00FF8C" 
          transparent 
          opacity={sequence >= 1 && sequence < 3 ? 0.4 : 0.0} 
          side={THREE.DoubleSide} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Floating Database Nodes */}
      <group ref={dataPointsRef}>
        <Sparkles count={300} scale={8} size={2.5} speed={0.8} opacity={0.6} color="#00D9FF" />
      </group>
    </group>
  );
};

// Grid floor for scale
const TacticalGrid = () => {
  const gridRef = useRef(null);
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 5) % 2;
    }
  });

  return (
    <group position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper ref={gridRef} args={[80, 80, '#00D9FF', '#001a1a']} />
    </group>
  );
};

const BootScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const [sequence, setSequence] = useState(0);
  const [bootLogs, setBootLogs] = useState([]);
  const [hexData, setHexData] = useState([]);
  const [profileScan, setProfileScan] = useState(false);

  const messages = useMemo(() => [
    "INITIALIZING FORENSIC SUITE...",
    "CONNECTING TO GLOBAL SURVEILLANCE NODE...",
    "ACQUIRING TARGET TELEMETRY...",
    "EXTRACTING BIOMETRIC HASH...",
    "SEARCHING KNOWN THREAT DATABASES...",
    "CROSS-REFERENCING FINGERPRINTS...",
    "ANALYZING FACIAL RECOGNITION VECTORS...",
    "IDENTITY MATCH CONFIRMED.",
  ], []);

  const handleSkip = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  useEffect(() => {
    const s1 = setTimeout(() => setSequence(1), 1800); // SCANNING
    const s2 = setTimeout(() => {
      setSequence(2);
      setProfileScan(true);
    }, 4000); // ANALYZING
    const s3 = setTimeout(() => setSequence(3), 6200); // MATCH FOUND
    const s4 = setTimeout(() => handleSkip(), 8500);   // FADE OUT

    const hexInterval = setInterval(() => {
      const newHex = Array.from({ length: 6 }, () => 
        Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()
      );
      setHexData(newHex);
    }, 80);

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < messages.length) {
        setBootLogs(prev => [...prev, messages[logIndex]]);
        logIndex++;
      }
    }, 500);

    return () => {
      clearTimeout(s1); clearTimeout(s2); clearTimeout(s3); clearTimeout(s4);
      clearInterval(hexInterval);
      clearInterval(logInterval);
    };
  }, [messages]);

  return (
    <div className={`boot-screen-3d ${fading ? 'fade-out' : ''}`} onClick={handleSkip}>
      
      {/* 3D Background */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 4, 0]} intensity={2} color="#00D9FF" />
          <ForensicScanner sequence={sequence} />
          <TacticalGrid />
        </Canvas>
      </div>

      {/* Forensic Interface Overlay */}
      <div className="cyber-hud-overlay">
        
        {/* Top Header */}
        <div className="hud-header">
          <div className="stream stream-left">
            {hexData.slice(0, 3).map((h, i) => <span key={i}>0x{h}</span>)}
          </div>
          <div className="hud-status forensic-status">
            <span className="dot pulse-blue"></span>
            AFIS_TERMINAL_ONLINE
          </div>
          <div className="stream stream-right">
            {hexData.slice(3, 6).map((h, i) => <span key={i}>0x{h}</span>)}
          </div>
        </div>

        {/* Live Forensic Logs */}
        <div className="boot-console">
          {bootLogs.map((log, i) => (
            <div key={i} className="log-line">
              <span className="log-prefix">sys_log&gt;</span> {log}
            </div>
          ))}
          <div className="log-line typing-cursor">_</div>
        </div>

        {/* Dynamic Center Identity Box */}
        <div className="hud-center-target forensic-target">
          <div className="corner c-top-left"></div>
          <div className="corner c-top-right"></div>
          <div className="corner c-bottom-left"></div>
          <div className="corner c-bottom-right"></div>
          
          <div className="sequence-panel">
            {sequence === 0 && <h2 className="phase-text blink">INITIALIZING SCANNER</h2>}
            {sequence === 1 && <h2 className="phase-text tech blink">ACQUIRING BIOMETRICS...</h2>}
            {sequence === 2 && <h2 className="phase-text">CROSS-REFERENCING DB</h2>}
            {sequence === 3 && (
              <div className="match-found-panel">
                <h2 className="phase-text granted glitch" data-text="MATCH FOUND">MATCH FOUND</h2>
                <div className="identity-card">
                  <div className="id-photo"><i className="fas fa-user-secret"></i></div>
                  <div className="id-details">
                    <p>SUBJECT: <span>HUSNAIN</span></p>
                    <p>CLEARANCE: <span>MAXIMUM</span></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="hud-footer">
          <div className="hud-metrics">
            <div>CONFIDENCE: {sequence === 3 ? '99.9%' : Math.floor(Math.random() * 50 + 20) + '%'}</div>
            <div>NODES: {Math.floor(Math.random() * 9000 + 1000)}</div>
          </div>
          
          <div className="hud-progress-wrapper">
            <div className="hud-progress-track">
              <div className={`hud-progress-fill phase-${sequence}`}></div>
            </div>
            <div className="hud-progress-label">FORENSIC ANALYSIS PROGRESS</div>
          </div>
          
          <div className="skip-hint">[ CLICK SCREEN TO OVERRIDE ]</div>
        </div>

      </div>
    </div>
  );
};

export default BootScreen;
