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
        // Solid base colour so the fluid dye has something to blend against
        backgroundColor: isLight ? '#e8f4fd' : '#060c18',
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
          backgroundImage: isLight
            ? 'radial-gradient(circle, rgba(15,23,42,0.07) 1px, transparent 1px)'
            : 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default AntiGravityBackground;
