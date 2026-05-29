import React, { useState, useEffect, useRef, useMemo } from 'react';
import './BootScreen.css';

// ─── BOOT SEQUENCE LOG LINES ───────────────────────────────────────────────
const BOOT_LINES = [
  { text: 'PORTFOLIO BOOT v3.0 — Preparing assets', delay: 0,    color: 'dim' },
  { text: '──────────────────────────────────────────────────────────────', delay: 120,  color: 'dim' },
  { text: 'Loading styles and media...', delay: 280,  color: 'dim' },
  { text: '[  OK  ] Images optimized', delay: 480,  color: 'ok'  },
  { text: '[  OK  ] Fonts loaded', delay: 660,  color: 'ok'  },
  { text: '[  OK  ] Scripts initialized', delay: 820,  color: 'ok'  },
  { text: 'Establishing secure connection...', delay: 980,  color: 'dim'  },
  { text: '[  OK  ] CDN cache primed', delay: 1200, color: 'ok' },
  { text: '[  OK  ] Analytics ready', delay: 1380, color: 'ok'  },
  { text: '[  OK  ] Components mounted', delay: 1540, color: 'ok'  },
  { text: '[  OK  ] Accessibility checks passed', delay: 1700, color: 'ok'  },
  { text: '[  OK  ] Visual theme: premium', delay: 1900, color: 'ok'},
  { text: '[  OK  ] Animations primed', delay: 2100, color: 'ok'  },
  { text: 'Starting portfolio runtime...', delay: 2400, color: 'dim' },
  { text: '[  OK  ] Ready to display', delay: 3200, color: 'ok'  },
  { text: '──────────────────────────────────────────────────────────────', delay: 3400, color: 'dim' },
  { text: 'SYSTEM READY. LAUNCHING...', delay: 3600, color: 'accent' },
];

const TOTAL_DURATION = 5800; // ms before auto-complete

// ─── MATRIX RAIN ───────────────────────────────────────────────────────────
const MatrixRain = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-#@$%&*()[]{}<>?/|';
    const fontSize = 13;
    let cols, drops;

    const init = () => {
      cols  = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(1).map(() => Math.random() * -50);
    };
    init();

    const draw = () => {
      ctx.fillStyle = 'rgba(10,10,10,0.045)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cols; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const y  = drops[i] * fontSize;
        // Lead char bright (premium cyan/purple)
        ctx.fillStyle = '#6EE7F7';
        ctx.shadowColor = '#6EE7F7';
        ctx.shadowBlur  = 8;
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(ch, i * fontSize, y);
        // Dim trail next char
        ctx.fillStyle = 'rgba(110,231,247,0.16)';
        ctx.shadowBlur = 0;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y - fontSize);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.5;
      }
    };

    const loop = () => { draw(); rafRef.current = requestAnimationFrame(loop); };
    loop();

    window.addEventListener('resize', init);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', init);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
};

// ─── GLITCH TEXT ───────────────────────────────────────────────────────────
const GlitchText = ({ text, className = '' }) => (
  <div className={`glitch-wrap ${className}`} data-text={text}>
    <span>{text}</span>
  </div>
);

// ─── TYPING EFFECT LINES ───────────────────────────────────────────────────
const TerminalLine = ({ line, index }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), line.delay);
    return () => clearTimeout(t);
  }, [line.delay]);

  if (!visible) return null;

  return (
    <div className={`t-line t-${line.color} t-line-in`} style={{ animationDelay: '0ms' }}>
      {line.text}
    </div>
  );
};

// ─── PROGRESS BAR ──────────────────────────────────────────────────────────
const ProgressBar = ({ progress }) => (
  <div className="boot-progress-wrap">
    <div className="boot-progress-track">
      <div className="boot-progress-fill" style={{ width: `${progress}%` }}>
        <div className="boot-progress-glow" />
      </div>
    </div>
    <div className="boot-progress-info">
      <span className="boot-progress-label">LOADING PORTFOLIO</span>
      <span className="boot-progress-pct">{Math.round(progress)}%</span>
    </div>
  </div>
);

// ─── CORNER BRACKETS ───────────────────────────────────────────────────────
const Corners = () => (
  <>
    <div className="bc bc-tl" /><div className="bc bc-tr" />
    <div className="bc bc-bl" /><div className="bc bc-br" />
  </>
);

// ─── HEX STRIP ─────────────────────────────────────────────────────────────
const HexStrip = () => {
  const [vals, setVals] = useState([]);
  useEffect(() => {
    const gen = () => setVals(Array.from({length: 8}, () =>
      Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,'0').toUpperCase()
    ));
    gen();
    const id = setInterval(gen, 90);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hex-strip">
      {vals.map((v, i) => <span key={i}>0x{v}</span>)}
    </div>
  );
};

// ─── MAIN BOOT SCREEN ──────────────────────────────────────────────────────
const BootScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0); // 0=booting 1=done
  const [scanline, setScanline] = useState(0);
  const rootRef = useRef(null);

  const doFade = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => onComplete(), 1100);
  };

  // mouse parallax
  const handleMouseMove = (e) => {
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--mx', `${(x * 18).toFixed(2)}px`);
    el.style.setProperty('--my', `${(y * 10).toFixed(2)}px`);
  };

  const handleMouseLeave = () => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty('--mx', `0px`);
    el.style.setProperty('--my', `0px`);
  };

  // Progress animation
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const raw = Math.min((elapsed / (TOTAL_DURATION - 1000)) * 100, 100);
      // Ease: slow in middle, fast at ends
      const eased = raw < 80 ? raw * 0.9 : 100 - (100 - raw) * 0.5;
      setProgress(Math.min(eased, 100));
      if (raw >= 100) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, []);

  // Auto complete
  useEffect(() => {
    const t = setTimeout(() => {
      setPhase(1);
      setTimeout(doFade, 600);
    }, TOTAL_DURATION);
    return () => clearTimeout(t);
  }, []);

  // Scanline position
  useEffect(() => {
    const id = setInterval(() => setScanline(s => (s + 0.4) % 100), 16);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={rootRef}
      className={`bs-root ${fading ? 'bs-fadeout' : ''}`}
      onClick={doFade}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Matrix rain background */}
      <MatrixRain />

      {/* CRT scanline overlay */}
      <div className="crt-scanline" style={{ top: `${scanline}%` }} />
      <div className="crt-overlay" />

      {/* 3D terminal window */}
      <div className={`bs-terminal ${phase === 1 ? 'terminal-done' : ''}`}>
        <Corners />

        {/* Terminal title bar */}
        <div className="t-titlebar">
          <div className="t-dots">
            <span className="td td-red" /><span className="td td-yellow" /><span className="td td-green" />
          </div>
          <div className="t-title">root@husnain-portfolio: ~/boot-sequence</div>
          <div className="t-right">
            <span className="t-badge">SECURE</span>
          </div>
        </div>

        {/* Main terminal content */}
        <div className="t-body">

          {/* ASCII banner */}
          <div className="t-banner">
            <GlitchText text="PORTFOLIO" className="t-banner-main" />
            <div className="t-banner-sub">
              &gt; Design  •  Security  •  Development
            </div>
          </div>

          <div className="t-separator">{'─'.repeat(60)}</div>

          {/* Boot log lines */}
          <div className="t-log">
            {BOOT_LINES.map((line, i) => (
              <TerminalLine key={i} line={line} index={i} />
            ))}
          </div>

          {/* Blinking cursor */}
          {phase < 1 && <div className="t-cursor">█</div>}
          {phase === 1 && (
            <div className="t-granted">
              <span className="t-granted-icon">✓</span>
              <span>WELCOME</span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <ProgressBar progress={progress} />

        {/* Bottom bar */}
        <div className="t-statusbar">
          <HexStrip />
          <span className="t-skip">[CLICK TO SKIP]</span>
        </div>
      </div>

      {/* Floating side stats */}
      <div className="bs-side-left">
        <div className="side-block">
          <div className="side-label">CPU</div>
          <div className="side-value">{'█'.repeat(Math.round(progress / 14))}{'░'.repeat(7 - Math.round(progress / 14))}</div>
        </div>
        <div className="side-block">
          <div className="side-label">MEM</div>
          <div className="side-value">32GB/32GB</div>
        </div>
        <div className="side-block">
          <div className="side-label">NET</div>
          <div className="side-value side-flash">ACTIVE</div>
        </div>
        <div className="side-block">
          <div className="side-label">SEC</div>
          <div className="side-value">AES-256</div>
        </div>
      </div>

      <div className="bs-side-right">
        <div className="side-block">
          <div className="side-label">PID</div>
          <div className="side-value">0001</div>
        </div>
        <div className="side-block">
          <div className="side-label">UID</div>
          <div className="side-value">ROOT</div>
        </div>
        <div className="side-block">
          <div className="side-label">UPTIME</div>
          <Uptime />
        </div>
        
      </div>

      {/* removed center holographic logo per request */}

    </div>
  );
};

const Uptime = () => {
  const [s, setS] = useState(0);
  useEffect(() => { const id = setInterval(() => setS(n => n + 1), 1000); return () => clearInterval(id); }, []);
  const m = Math.floor(s / 60), sec = s % 60;
  return <div className="side-value">{String(m).padStart(2,'0')}:{String(sec).padStart(2,'0')}</div>;
};

export default BootScreen;
