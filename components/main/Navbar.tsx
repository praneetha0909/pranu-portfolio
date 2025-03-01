import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
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
          <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.png" alt="Discord" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
