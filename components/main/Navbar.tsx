"use client";  // This tells Next.js that this is a client component

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#d19932]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />
          

          <span className="cursive text-[20px] hidden md:block text-gray-300">
            Praneetha Mukkamala
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#d19932] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
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
        </div>

        <div className="flex flex-row gap-5">
          <a href="https://www.linkedin.com/in/praneethamss/" target="_blank" rel="noopener noreferrer">
            <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://github.com/praneetha0909" target="_blank" rel="noopener noreferrer">
            <Image src="/gitwhite.png" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://x.com/msspraneetha?s=21" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
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
            <a href="https://www.linkedin.com/in/praneethamss/" target="_blank" rel="noopener noreferrer">
              <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://github.com/praneetha0909" target="_blank" rel="noopener noreferrer">
              <Image src="/gitwhite.png" alt="GitHub" width={24} height={24} />
            </a>
            <a href="https://x.com/msspraneetha?s=21" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter.png" alt="Discord" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







        
      </div>
    </div>
  );
};

export default Navbar;
