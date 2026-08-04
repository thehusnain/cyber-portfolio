import React from 'react';

const Avatar = ({ className = "justify-end" }) => {
  return (
    <div className={`hidden xl:flex items-end h-full w-full ${className}`}>
      <img
        src="/assets/profile.png"
        alt="Husnain"
        className="w-auto h-full max-h-[92%] object-contain"
        style={{
          filter: 'drop-shadow(0 12px 36px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 30px rgba(241,48,36,0.18))',
        }}
      />
    </div>
  );
};

export default Avatar;
