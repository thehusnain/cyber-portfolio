import React from 'react';
import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import WebGLFluidBackground from "./WebGLFluidBackground";

const Layout = ({ children }) => {
  return (
    <main className="page bg-site text-white bg-cover bg-no-repeat font-sora relative min-h-screen w-full">
      {/* WebGL Fluid background — covers entire site, pointer-events-none so interaction works */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <WebGLFluidBackground />
      </div>

      {/* Site background overlay to darken fluid a bit */}
      <div className="fixed inset-0 z-[1] bg-[#131424]/70 pointer-events-none" />

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </main>
  );
};

export default Layout;
