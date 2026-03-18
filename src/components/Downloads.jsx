import React from 'react';

const Downloads = () => {
  return (
    <section id="downloads" style={{ padding: '4rem 2rem', textAlign: 'center', zIndex: 10, position: 'relative' }}>
      <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Resume & CV</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <a href="/assets/Husnain-Resume.pdf" download="Husnain_Resume.pdf" className="btn btn-primary cyber-btn" style={{ padding: '0.8rem 1.8rem', border: '1px solid #00FF8C', color: '#00FF8C', textDecoration: 'none', borderRadius: '4px', background: 'transparent' }}>
          <i className="fas fa-file-pdf" style={{ marginRight: '0.5rem' }}></i> Download Resume
        </a>
        <a href="/assets/Husnain-CV.pdf" download="Husnain_CV.pdf" className="btn btn-secondary cyber-btn" style={{ padding: '0.8rem 1.8rem', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
          <i className="fas fa-file-alt" style={{ marginRight: '0.5rem' }}></i> Download CV
        </a>
      </div>
    </section>
  );
};

export default Downloads;
