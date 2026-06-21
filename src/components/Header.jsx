import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Socials from './Socials';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Reset visibility and scroll state on route change
  useEffect(() => {
    setIsVisible(true);
    setIsScrolled(false);
  }, [location.pathname]);

  useEffect(() => {
    let lastScrollVal = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background status (scrolled vs top)
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Handle mobile show/hide on scroll
      if (window.innerWidth < 1024) {
        if (currentScrollY > 60) {
          if (currentScrollY > lastScrollVal) {
            // Scrolling down -> hide
            setIsVisible(false);
          } else {
            // Scrolling up -> show
            setIsVisible(true);
          }
        } else {
          // Near the top -> always show
          setIsVisible(true);
        }
      } else {
        // Always show on desktop
        setIsVisible(true);
      }

      lastScrollVal = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-16 xl:px-0 ${
        isScrolled
          ? 'bg-[#131424]/80 backdrop-blur-md border-b border-white/5 shadow-lg py-3'
          : 'bg-transparent py-5 lg:py-8'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          {/* logo */}
          <Link to="/">
            <h2 className="text-2xl font-bold tracking-wider text-white select-none m-0">
              Husnain<span className="text-accent">.</span>
            </h2>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
