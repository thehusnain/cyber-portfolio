import React, { useState, useEffect } from 'react';
import './BootScreen.css';

const BootScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  const handleSkip = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSkip();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`boot-screen ${fading ? 'fade-out' : ''}`} onClick={handleSkip}>
      <div className="premium-boot-wrapper">
        <div className="cyber-loader">
          <svg className="loader-svg" viewBox="0 0 120 120">
            <circle className="loader-ring-bg" cx="60" cy="60" r="54"></circle>
            <circle className="loader-ring-progress" cx="60" cy="60" r="54"></circle>
            <circle className="loader-ring-inner" cx="60" cy="60" r="40"></circle>
            <polygon className="loader-hexagon" points="60,28 88,44 88,76 60,92 32,76 32,44"></polygon>
          </svg>
          <div className="loader-core">
            <i className="fas fa-shield-alt"></i>
          </div>
        </div>

        <div className="boot-text-container">
          <h2 className="boot-title glitch" data-text="SYSTEM INITIALIZING">SYSTEM INITIALIZING</h2>
          <div className="premium-terminal">
            <div className="pt-line"><span className="pt-label">SYS</span><span className="pt-msg">Loading kernel modules...</span><span className="pt-status green">OK</span></div>
            <div className="pt-line"><span className="pt-label">SEC</span><span className="pt-msg">Activating firewall protocols...</span><span className="pt-status green">OK</span></div>
            <div className="pt-line"><span className="pt-label">NET</span><span className="pt-msg">Establishing secure uplink...</span><span className="pt-status green">OK</span></div>
            <div className="pt-line"><span className="pt-label">USR</span><span className="pt-msg">Authenticating profile[thehusnain]...</span><span className="pt-status blue">VERIFIED</span></div>
          </div>
          <div className="premium-progress-wrapper">
            <div className="premium-progress-bar">
              <div className="premium-progress-fill"></div>
            </div>
          </div>
        </div>

        <div className="boot-footer-modern">
          <div className="boot-skip-hint">[ CLICK ANYWHERE TO ENTER ]</div>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
