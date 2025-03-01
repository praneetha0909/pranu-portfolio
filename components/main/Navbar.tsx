"use client";  // This tells Next.js that this is a client component

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#0374ff]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between px-4 md:px-10">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/logo1.jpeg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="cursive text-[20px] hidden  text-gray-300">
            Prasanna Kottur
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 bg-[#0300145e] border border-[#0374ff] px-6 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            Home
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Career
          </a>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/prasannakottur/" target="_blank" rel="noopener noreferrer">
            <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://github.com/kotturp" target="_blank" rel="noopener noreferrer">
            <Image src="/gitwhite.png" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
            <Image src="/discord.svg" alt="Discord" width={24} height={24} />
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <Image src="/close1.png" alt="Close" width={30} height={30} />
          ) : (
            <Image src="/menu4.png" alt="Menu" width={30} height={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[65px] left-0 w-full bg-[#030014] transition-all duration-300 ease-in-out ${
          menuOpen ? "h-auto py-5" : "h-0 overflow-hidden"
        } md:hidden`}
      >
        <div className="flex flex-col items-center space-y-5 text-gray-200">
          <a href="#about-me" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#skills" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            Career
          </a>
          {/* Mobile Social Links */}
          <div className="flex gap-5 mt-3">
            <a href="https://www.linkedin.com/in/prasannakottur/" target="_blank" rel="noopener noreferrer">
              <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://github.com/kotturp" target="_blank" rel="noopener noreferrer">
              <Image src="/gitwhite.png" alt="GitHub" width={24} height={24} />
            </a>
            <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
              <Image src="/discord.svg" alt="Discord" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
