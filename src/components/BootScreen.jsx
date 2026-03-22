import React, { useState, useEffect, useMemo } from 'react';
import './BootScreen.css';

// Randomly generate floating threat nodes
const ThreatNodes = () => {
  const nodes = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => {
      const isRed = Math.random() > 0.5;
      const types = ['WARNING', 'SYSTEM HACK', 'BREACH DETECTED', 'MALWARE'];
      const icons = ['fa-exclamation-triangle', 'fa-lock', 'fa-shield-alt', 'fa-bug', 'fa-wifi', 'fa-map-marker-alt'];
      
      return {
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        icon: icons[Math.floor(Math.random() * icons.length)],
        colorClass: isRed ? 'threat-red' : 'threat-cyan',
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        width: Math.random() * 120 + 80 + 'px',
        animationDuration: Math.random() * 20 + 10 + 's',
        animationDelay: '-' + Math.random() * 20 + 's',
        direction: Math.random() > 0.5 ? 'float-left' : 'float-right',
      };
    });
  }, []);

  return (
    <div className="threat-nodes-container">
      {nodes.map(node => (
        <div 
          key={node.id} 
          className={`threat-node ${node.colorClass} ${node.direction}`}
          style={{
            top: node.top,
            left: node.left,
            width: node.width,
            animationDuration: node.animationDuration,
            animationDelay: node.animationDelay
          }}
        >
          <div className="threat-header">
            <i className={`fas ${node.icon}`}></i>
          </div>
          <div className="threat-body">
            {node.type}
          </div>
          <div className="threat-footer">
            <div className="line-bar"></div>
            <span>0x{Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Facial Recognition Scanner Component
const FacialScanner = ({ sequence }) => {
  return (
    <div className="facial-scanner-wrapper">
      <div className="fs-corner fs-tl"></div>
      <div className="fs-corner fs-tr"></div>
      <div className="fs-corner fs-bl"></div>
      <div className="fs-corner fs-br"></div>
      
      {/* Background Grid */}
      <div className="fs-grid"></div>

      {/* Simplified User Avatar */}
      <div className={`fs-face-container ${sequence === 3 ? 'match-success' : ''}`}>
        {sequence >= 1 && (
          <>
            <div className="fs-user-icon">
              <i className="fas fa-user"></i>
            </div>
            
            {/* Analysis Nodes */}
            {sequence === 2 && (
              <div className="fs-vector-nodes">
                <div className="node n1"></div>
                <div className="node n2"></div>
                <div className="node n3"></div>
                <div className="node n4"></div>
                <div className="node n5"></div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Scanning Laser */}
      {sequence >= 1 && sequence < 3 && (
        <div className="fs-laser">
          <div className="fs-laser-beam"></div>
          <div className="fs-laser-light"></div>
        </div>
      )}

      {/* Verification Overlay */}
      {sequence === 3 && (
        <div className="fs-verified-overlay">
          <i className="fas fa-check-circle fs-icon"></i>
        </div>
      )}
    </div>
  );
};

const BootScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const [sequence, setSequence] = useState(0);
  const [bootLogs, setBootLogs] = useState([]);
  const [hexData, setHexData] = useState([]);

  const messages = useMemo(() => [
    "INITIATING FACIAL RECOGNITION MODULE...",
    "CALIBRATING DEPTH SENSORS...",
    "DETECTING FACIAL GEOMETRY...",
    "MAPPING 3D FACIAL LANDMARKS...",
    "RUNNING BIOMETRIC ANALYSIS...",
    "COMPUTING FEATURE VECTOR...",
    "MATCHING AGAINST DATABASE...",
    "FACE DETECTED SUCCESSFULLY.",
  ], []);

  const handleSkip = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  useEffect(() => {
    const s1 = setTimeout(() => setSequence(1), 2000); // CAPTURING FACE
    const s2 = setTimeout(() => setSequence(2), 4500); // ANALYZING VECTORS
    const s3 = setTimeout(() => setSequence(3), 7000); // MATCH FOUND
    const s4 = setTimeout(() => handleSkip(), 9500);   // FADE OUT

    const hexInterval = setInterval(() => {
      const newHex = Array.from({ length: 6 }, () => 
        Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()
      );
      setHexData(newHex);
    }, 60);

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < messages.length) {
        setBootLogs(prev => [...prev, messages[logIndex]]);
        logIndex++;
      }
    }, 600);

    return () => {
      clearTimeout(s1); clearTimeout(s2); clearTimeout(s3); clearTimeout(s4);
      clearInterval(hexInterval);
      clearInterval(logInterval);
    };
  }, [messages]);

  return (
    <div className={`boot-screen-threat ${fading ? 'fade-out' : ''}`} onClick={handleSkip}>
      
      {/* Background Map & Nodes */}
      <div className="bg-world-map"></div>
      <ThreatNodes />

      {/* Cyber HUD Overlay */}
      <div className="threat-hud-overlay">
        
        {/* Top Header */}
        <div className="th-header">
          <div className="th-stream">
            {hexData.slice(0, 3).map((h, i) => <span key={i}>0x{h}</span>)}
          </div>
          <div className="th-status-box">
            <span className="dot pulse-red"></span>
            FACIAL RECOGNITION SYSTEM
          </div>
          <div className="th-stream">
            {hexData.slice(3, 6).map((h, i) => <span key={i}>0x{h}</span>)}
          </div>
        </div>

        {/* Live Logs */}
        <div className="th-console">
          {bootLogs.map((log, i) => (
            <div key={i} className="th-log-line">
              <span className="th-log-prefix">[SYS_LOG]</span> {log}
            </div>
          ))}
          <div className="th-log-line typing-cursor">_</div>
        </div>

        {/* Center Target & Sequence */}
        <div className="th-center-panel">
          <FacialScanner sequence={sequence} />
          
          <div className="th-sequence-text">
            {sequence === 0 && <h2 className="th-phase blink cyan-text">INITIALIZING SCANNER</h2>}
            {sequence === 1 && <h2 className="th-phase tech blink red-text">SCANNING FACE...</h2>}
            {sequence === 2 && <h2 className="th-phase cyan-text">ANALYZING FACIAL GEOMETRY</h2>}
            {sequence === 3 && (
              <div className="th-match-panel">
                <h2 className="th-phase granted" data-text="FACE DETECTED">FACE DETECTED</h2>
                <p className="th-clearance">ACCESS GRANTED</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="th-footer">
          <div className="th-metrics">
            <div className="cyan-text">CONFIDENCE: {sequence === 3 ? '99.9%' : (sequence * 30 + 10) + '%'}</div>
            <div className="red-text">LANDMARKS: {Math.floor(Math.random() * 180 + 68)}</div>
          </div>
          
          <div className="th-progress-wrapper">
            <div className="th-progress-track">
              <div className={`th-progress-fill phase-${sequence}`}></div>
            </div>
            <div className="th-progress-label">IDENTIFICATION PROGRESS</div>
          </div>
          
          <div className="th-skip-hint">[ SYSTEM OVERRIDE - CLICK TO BYPASS ]</div>
        </div>

      </div>
    </div>
  );
};

export default BootScreen;
