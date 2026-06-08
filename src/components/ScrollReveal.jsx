import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal — GSAP ScrollTrigger-driven animation component.
 * Uses ScrollTrigger to toggle CSS classes for bulletproof layout performance.
 */
const ScrollReveal = ({
  children,
  variant,
  direction,
  delay = 0,
  duration = 0.8,
  threshold = 0.05,
  stagger = false,
  staggerDelay = 0.09,
}) => {
  const ref = useRef(null);

  // Map legacy directions
  const resolvedVariant = variant || (() => {
    switch (direction) {
      case 'up':    return 'fade-up';
      case 'down':  return 'fade-down';
      case 'left':  return 'fade-right';
      case 'right': return 'fade-left';
      default:      return 'fade-up';
    }
  })();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: `top 92%`, // Triggers when the top of the element hits 92% of viewport height
      onEnter: () => {
        el.classList.add('sr-visible');
      },
      once: true,
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`sr-wrap sr-${resolvedVariant} ${stagger ? 'sr-stagger' : ''}`}
      style={{
        '--sr-duration': `${duration}s`,
        '--sr-delay': `${delay}s`,
        '--sr-stagger': `${staggerDelay * 1000}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
