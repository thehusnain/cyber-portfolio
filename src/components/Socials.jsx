import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

// Safely resolve components if they are imported as ES module objects
const renderIcon = (IconComponent, props = {}) => {
  if (!IconComponent) return null;
  const Target = typeof IconComponent === 'function' 
    ? IconComponent 
    : (IconComponent.default || null);
  if (!Target) return null;
  return <Target {...props} />;
};

export const socialData = [
  {
    name: "Github",
    link: "https://github.com/thehusnain",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/husnain-fiaz-7a4761369",
    Icon: FaLinkedin,
  },
  {
    name: "TryHackMe",
    link: "https://tryhackme.com/p/thehusnain",
    Icon: SiTryhackme,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6">
      {socialData.map((social, i) => (
        <a
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-white hover:text-accent transition-all duration-300 text-[22px] flex items-center justify-center"
        >
          {renderIcon(social.Icon, { className: "w-6 h-6" })}
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
