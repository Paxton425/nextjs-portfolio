import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer z-10 border-t border-border-dark border-x-transparent text-white">
      <div className="container mx-auto p-12 flex justify-between">
        <div className="logo flex items-center gap-2">
          <Image src="/images/favicon.ico" alt="logo" width={32} height={32} className="hover:opacity-80 transition-opacity" />
          <span className="font-bold tracking-tight">Sphelele's Portfolio</span>
        </div>
        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;