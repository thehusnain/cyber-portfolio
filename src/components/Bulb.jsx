import React from 'react';

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 mix-blend-color-dodge animate-pulse duration-[4000ms] z-10 w-[200px] xl:w-[260px] pointer-events-none select-none">
      <img
        src="/bulb.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
