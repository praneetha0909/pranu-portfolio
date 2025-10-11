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
    window.open("/Praneetha_Mukkamala_Resume.pdf", "_blank");
  };

  return (
    <motion.div initial="hidden" animate="visible" className="relative w-full">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* No portrait on mobile — only show on lg+ */}

        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10 lg:mt-24">
          {/* LEFT: Text */}
          <div className="w-full lg:w-[58%]">
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#d19932] opacity-[0.9]"
            >
              <SparklesIcon className="text-[#d19932] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px]">Data Engineer</h1>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-white font-bold leading-tight"
            >
              <span className="text-[20px] sm:text-5xl xl:text-7xl">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                  Praneetha Mukkamala
                </span>
                <span className="block">Data Engineer</span>
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-[15px] sm:text-lg text-gray-400 my-5 max-w-[42rem]"
            >
              I design and build SQL/Python ELT pipelines and dimensional models
              on AWS/GCP, turning business questions into trusted datasets and
              clear dashboards.
            </motion.p>

            <motion.a
              onClick={handleHireMeClick}
              variants={slideInFromRight(1)}
              className="inline-block py-3 px-5 bg-gradient-to-r from-orange-700 to-purple-500 text-white font-semibold text-lg rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer select-none"
            >
              Resume
            </motion.a>
          </div>

          {/* RIGHT: Portrait only on large screens */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="hidden lg:flex w-full lg:w-[42%] justify-center items-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, rgba(0,0,0,0) 75%)",
                }}
              />
              <div className="h-[360px] w-[360px] sm:h-[400px] sm:w-[400px] rounded-full ring-1 ring-white/10 shadow-[0_0_60px_rgba(255,255,255,0.08)] overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Praneetha portrait"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
