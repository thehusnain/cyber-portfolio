import React, { useState, useEffect } from 'react';
import './CinematicIntro.css';

const CinematicIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: init, 1: welcome, 2: analyzing, 3: success, 4: fade out
  const [glitchText, setGlitchText] = useState('');
  
  const DURATION = 9000; // total ms

  const doFade = () => {
    if (phase === 4) return;
    setPhase(4);
    setTimeout(() => onComplete(), 1500);
  };

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);    // Welcome
    const t2 = setTimeout(() => setPhase(2), 3500);   // Analyzing Identity
    const t3 = setTimeout(() => setPhase(3), 6500);   // Success
    const t4 = setTimeout(doFade, DURATION);          // Auto-skip
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);
  
  useEffect(() => {
      if(phase === 2) {
         let count = 0;
         const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
         const id = setInterval(() => {
             setGlitchText(Array.from({length: 8}, () => chars[Math.floor(Math.random() * chars.length)]).join(''));
             count++;
             if(count > 25) clearInterval(id);
         }, 80);
         return () => clearInterval(id);
      }
  }, [phase]);

  return (
    <div
      className={`ci-root ${phase === 4 ? 'ci-fadeout' : ''}`}
      onClick={doFade}
    >
      <div className="ci-noise" />
      <div className="ci-scanlines" />
      <div className="ci-scanbeam" />
      
      {/* Corner brackets */}
      <div className="ci-corner tl" />
      <div className="ci-corner tr" />
      <div className="ci-corner bl" />
      <div className="ci-corner br" />

      {/* Main Container */}
      <div className="ci-container">
          
          {/* Phase 1: Welcome */}
          <div className={`ci-phase ${phase === 1 ? 'active' : phase > 1 ? 'exit-up' : ''}`}>
             <div className="ci-badge">[ SYSTEM INITIALIZED ]</div>
             <div className="ci-title-large glitch" data-text="WELCOME">WELCOME</div>
             <div className="ci-subtitle">PORTFOLIO BOOT SEQUENCE ENGAGED</div>
          </div>
          
          {/* Phase 2: Analyzing */}
          <div className={`ci-phase ${phase === 2 ? 'active' : phase > 2 ? 'exit-up' : ''}`}>
             <div className="ci-loader">
                <div className="ci-spinner"></div>
                <div className="ci-identity-box">
                    <div className="ci-frame ci-frame-top">SCANNING <span className="ci-blink">_</span></div>
                    <div className="ci-id-glitch">{glitchText || '0x00A7F1'}</div>
                    <div className="ci-frame ci-frame-bottom">ANALYZING IDENTITY PROTOCOL...</div>
                </div>
             </div>
          </div>
          
          {/* Phase 3: Success */}
          <div className={`ci-phase ${phase === 3 ? 'active' : ''}`}>
             <div className="ci-success-icon"><i className="fas fa-fingerprint"></i></div>
             <div className="ci-subtitle" style={{color: '#00FF8C'}}>AUTHENTICATION APPROVED</div>
             <div className="ci-loading-bar-wrap">
                 <div className="ci-loading-bar-fill"></div>
             </div>
             <div className="ci-status-msg">PORTFOLIO LOADING SUCCESSFULLY</div>
          </div>

      </div>

      <div className="ci-skip">[ CLICK ANYWHERE TO SKIP ]</div>
    </div>
  );
};

export default CinematicIntro;
