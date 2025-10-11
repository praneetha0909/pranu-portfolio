// components/main/HeroContent.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const handleHireMeClick = () => {
    window.open("/Praneetha_Mukkamala_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // Mobile: column, centered. md+: row with spacing.
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 px-5 sm:px-8 md:px-12 lg:px-20 mt-16 sm:mt-24 md:mt-28 w-full z-[20]"
    >
      {/* LEFT: text */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#d19932] opacity-[0.9] w-max"
        >
          <SparklesIcon className="text-[#d19932] mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-[12px] sm:text-[13px]">Data Engineer</h1>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          // clamp() keeps it readable on every screen
          className="font-bold text-white leading-tight text-[clamp(28px,7vw,60px)] max-w-[24ch]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
            Praneetha Mukkamala
          </span>
          <br />
          Data Engineer
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[15px] sm:text-[16px] text-gray-400 max-w-[60ch]"
        >
          I design and build SQL/Python ELT pipelines and dimensional models on
          AWS/GCP, turning business questions into trusted datasets and clear
          dashboards.
        </motion.p>

        <motion.button
          onClick={handleHireMeClick}
          variants={slideInFromRight(1)}
          className="mt-2 inline-flex justify-center py-3 px-6 bg-gradient-to-r from-orange-700 to-purple-500 text-white font-semibold text-base sm:text-lg rounded-lg w-full sm:w-auto hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200"
        >
          Resume
        </motion.button>
      </div>

      {/* RIGHT: portrait (feathered circle with halo) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]">
          <div className="ring-vignette pointer-events-none" />
          <div className="halo-soft pointer-events-none" />
          <div className="relative rounded-full mask-feather-strong w-full h-full overflow-hidden">
            {/* Use a transparent PNG for best look */}
            <Image
              src="/profile.png"
              alt="Praneetha Mukkamala"
              fill
              priority
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
              className="object-cover object-center"
              quality={90}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
