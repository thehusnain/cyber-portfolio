import React from 'react';

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-[4000ms] z-10 pointer-events-none select-none">
      <img
        src="/circles.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Circles;
