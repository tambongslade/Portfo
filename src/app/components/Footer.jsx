import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-2xl font-bold text-gradient">
              KT.
            </Link>
            <p className="text-[#ADB7BE] text-sm">
              Building digital experiences that matter.
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <Link
              href="#about"
              className="text-[#ADB7BE] text-sm hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-[#ADB7BE] text-sm hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-[#ADB7BE] text-sm hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Kersten Tambong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
