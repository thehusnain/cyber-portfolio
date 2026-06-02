import React, { useEffect, useRef } from 'react';
import './ScrollProgressBar.css';

/**
 * Fixed cyan gradient bar at the top of the viewport that
 * fills left-to-right as the user scrolls down the page.
 */
const ScrollProgressBar = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialise on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-fill" />
    </div>
  );
};

export default ScrollProgressBar;
