"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent: React.FC = () => {
  const handleHireMeClick = () => {
    window.open("/Praneetha_Mukkamala_Resume.pdf", "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* LEFT: Headline + CTA */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#d19932] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#d19932] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Data Engineer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[400px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
              {" "}
              Praneetha Mukkamala{" "}
            </span>
            Data Engineer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I design and build SQL/Python ELT pipelines and dimensional models on
          AWS/GCP, turning business questions into trusted datasets and clear
          dashboards.
        </motion.p>

        <motion.a
          onClick={handleHireMeClick}
          variants={slideInFromRight(1)}
          className="py-3 px-5 bg-gradient-to-r from-orange-700 to-purple-500 text-white font-semibold text-lg rounded-lg max-w-[120px] hover:scale-105 transition-transform duration-300"
        >
          Resume
        </motion.a>
      </div>

      {/* RIGHT: Circular profile with feather + subtle gradient halo */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/* Wrapper controls overall size across breakpoints (slightly smaller) */}
        <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]">
          {/* Radial halo behind the image (gold → purple → transparent) */}
          <div
            className="
              pointer-events-none absolute inset-0 rounded-full
              opacity-55 blur-lg
              [background:radial-gradient(closest-side,rgba(228,184,96,.35),rgba(147,51,234,.22),transparent_70%)]
            "
          />

          {/* Feathered circular image (requires .mask-feather in global.css) */}
          <div className="relative rounded-full mask-feather w-full h-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Praneetha Mukkamala"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 480px"
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
