import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaCode,
  FaAward,
  FaFlag,
  FaBriefcase,
  FaUserSecret,
  FaEnvelope
} from "react-icons/fa";

// Safely resolve components if they are imported as ES module objects
const renderIcon = (IconComponent, props = {}) => {
  if (!IconComponent) return null;
  const Target = typeof IconComponent === 'function' 
    ? IconComponent 
    : (IconComponent.default || null);
  if (!Target) return null;
  return <Target {...props} />;
};

// nav data using highly related real icons
export const navData = [
  { name: "home", path: "/", Icon: FaHome },
  { name: "about", path: "/about", Icon: FaUser },
  { name: "projects", path: "/work", Icon: FaCode },
  { name: "certificates", path: "/certificates", Icon: FaAward },
  { name: "CTFs", path: "/ctfs", Icon: FaFlag },
  { name: "internship", path: "/internship", Icon: FaBriefcase },
  { name: "fsociety", path: "/fsociety", Icon: FaUserSecret },
  { name: "contact", path: "/contact", Icon: FaEnvelope },
];

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-8 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            to={link.path}
            key={i}
          >
            {/* tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize whitespace-nowrap">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              {renderIcon(link.Icon, { className: "w-5 h-5 xl:w-4 xl:h-4", "aria-hidden": true })}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
