import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

/**
 * ScrollReveal — premium scroll-triggered animation wrapper
 *
 * Props:
 *  variant   : 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right'
 *              | 'scale-up' | 'flip-up' | 'zoom' | 'blur-in'
 *  delay     : number (seconds)
 *  duration  : number (seconds)
 *  threshold : 0-1  (how much of element must be visible before triggering)
 *  stagger   : boolean — stagger animate each direct child in sequence
 *  staggerDelay : number (ms between each staggered child)
 *
 * Backward compat: the old `direction` prop still maps to the new variants.
 */
const ScrollReveal = ({
  children,
  variant,
  direction,           // legacy prop
  delay = 0,
  duration = 0.75,
  threshold = 0.05,
  stagger = false,
  staggerDelay = 90,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Map legacy `direction` → new variant names
  const resolvedVariant = variant || (() => {
    switch (direction) {
      case 'up':    return 'fade-up';
      case 'down':  return 'fade-down';
      case 'left':  return 'fade-right';   // "direction=left" means slide from left → fade-right
      case 'right': return 'fade-left';    // "direction=right" means slide from right → fade-left
      default:      return 'fade-up';
    }
  })();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`sr-wrap sr-${resolvedVariant} ${isVisible ? 'sr-visible' : ''} ${stagger ? 'sr-stagger' : ''}`}
      style={{
        '--sr-duration': `${duration}s`,
        '--sr-delay': `${delay}s`,
        '--sr-stagger': `${staggerDelay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
