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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* LEFT: Headline */}
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

      {/* RIGHT: Circular portrait with blend (white bg “removed”) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div
          className="
            relative 
            w-[300px] h-[300px] 
            sm:w-[340px] sm:h-[340px] 
            lg:w-[400px] lg:h-[400px]
          "
        >
          {/* Outer soft vignette ring (subtle) */}
          <div className="ring-vignette pointer-events-none" />

          {/* Soft halo that merges into page background */}
          <div className="halo-soft pointer-events-none" />

          {/* Feathered circular mask container */}
          <div className="relative rounded-full mask-feather-strong w-full h-full overflow-hidden">
            {/* dark base helps multiply blending hide whites */}
            <div className="absolute inset-0 bg-black" />

            {/* Use your current JPG; multiply removes white against dark bg */}
            <Image
              src="/profile.png"
              alt="Praneetha Mukkamala"
              fill
              priority
              sizes="(max-width: 1024px) 50vw, 400px"
              className="object-cover object-center mix-blend-multiply opacity-95"
              quality={90}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
