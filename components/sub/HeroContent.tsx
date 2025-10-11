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

const GOLD = "#E4B860";

const HeroContent = () => {
  const handleHireMeClick = () => {
    window.open("/Praneetha_Mukkamala_Resume.pdf", "_blank");
  };

  return (
    <motion.div initial="hidden" animate="visible" className="relative w-full">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 mt-0 lg:mt-20">
          {/* LEFT: Text */}
          <div className="w-full lg:w-[58%]">
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[6px] px-[7px] border border-[#d19932] opacity-[0.9] w-max"
            >
              <SparklesIcon className="text-[#d19932] mr-[10px] h-4 w-4" />
              <h1 className="Welcome-text text-[12px]">Data Engineer</h1>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={slideInFromLeft(0.5)}
              className="mt-4 font-bold text-white tracking-tight break-words"
            >
              <span className="block
                               text-[32px] leading-tight
                               sm:text-4xl
                               md:text-5xl
                               lg:text-6xl
                               text-transparent bg-clip-text
                               bg-gradient-to-r from-orange-500 to-purple-500">
                Praneetha Mukkamala
              </span>

              {/* Role */}
              <span className="block
                               text-[30px] leading-tight
                               sm:text-4xl
                               md:text-5xl
                               lg:text-6xl">
                Data Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-[15px] sm:text-base md:text-[17px] text-gray-400 mt-4 max-w-[42rem]"
            >
              I design and build SQL/Python ELT pipelines and dimensional models
              on AWS/GCP, turning business questions into trusted datasets and
              clear dashboards.
            </motion.p>

            <motion.a
              onClick={handleHireMeClick}
              variants={slideInFromRight(1)}
              className="inline-block mt-6 py-2.5 px-5
                         bg-gradient-to-r from-orange-700 to-purple-500
                         text-white font-semibold text-base md:text-lg
                         rounded-lg hover:scale-105 transition-transform duration-300
                         cursor-pointer select-none"
            >
              Resume
            </motion.a>
          </div>

          {/* RIGHT: Portrait (hidden on mobile) */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="hidden lg:flex w-full lg:w-[42%] justify-center items-center"
          >
            <div
              className="h-[320px] w-[320px] xl:h-[360px] xl:w-[360px] rounded-full overflow-hidden"
              style={{ border: `2px solid ${GOLD}` }}
            >
              <Image
                src="/profile.jpg"
                alt="Praneetha portrait"
                width={800}
                height={800}
                className="h-full w-full object-cover
                           [mask-image:radial-gradient(100%_100%_at_50%_50%,#000_70%,transparent_100%)]
                           [webkit-mask-image:radial-gradient(100%_100%_at_50%_50%,#000_70%,transparent_100%)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
