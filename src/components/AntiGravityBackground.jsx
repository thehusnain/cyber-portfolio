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
        // Base background colour using CSS variable for smooth transition
        backgroundColor: 'var(--bg-primary)',
        transition: 'background-color 0.6s ease',
      }}
    >
      {/* WebGL Fluid simulation — only interactive background layer */}
      <WebGLFluidBackground isLight={isLight} />

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
