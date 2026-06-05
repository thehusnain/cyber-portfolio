import React from 'react';
import WebGLFluidBackground from './WebGLFluidBackground';

const AntiGravityBackground = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        overflow: 'hidden',
        pointerEvents: 'none',
        // Transparent — let the WebGL canvas own its own background completely
        backgroundColor: 'transparent',
      }}
    >
      {/* WebGL Fluid simulation — only interactive background layer */}
      <WebGLFluidBackground isLight={isLight} />

      {/* Very subtle dark overlay to improve text readability without killing fluid colors */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Ambient glassmorphic glowing blobs (rotating gradient) */}
      <div className="bg-gradient-blob blob-1" />
      <div className="bg-gradient-blob blob-2" />

      {/* Subtle dot-grid overlay for a premium techy feel */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, var(--border-color) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default AntiGravityBackground;
