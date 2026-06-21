import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';

const Header = () => {
  return (
    <header className="absolute z-50 w-full flex items-center px-4 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
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
