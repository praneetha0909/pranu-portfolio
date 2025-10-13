"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const GOLD = "#E4B860";

const HeroContent: React.FC = () => {
  const handleResume = () => window.open("/Praneetha_Mukkamala_Resume.pdf", "_blank");

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative w-full"
    >
      {/* Add more top gap under the navbar */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-44 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: Text block */}
          <div className="w-full">
            {/* Badge */}
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[12px] border border-[#d19932]/90 opacity-90 rounded-2xl inline-flex items-center gap-2"
            >
              <SparklesIcon className="text-[#d19932] h-5 w-5" />
              <span className="Welcome-text text-[13px]">Data Engineer</span>
            </motion.div>

            {/* Name / Title — nudged lower */}
            <motion.h1
              variants={slideInFromLeft(0.5)}
              className="mt-10 md:mt-12 font-bold text-white tracking-tight break-words"
            >
              <span className="block text-[48px] sm:text-[56px] md:text-[60px] lg:text-[64px] leading-[1.05]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
                  Praneetha Mukkamala
                </span>
              </span>
              <span className="block text-[44px] sm:text-[50px] md:text-[54px] lg:text-[58px] leading-[1.05]">
                Data Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="mt-6 text-gray-300 text-base sm:text-lg max-w-2xl"
            >
              I design and build SQL/Python ETL/ELT pipelines and dimensional models on AWS/GCP,
              turning business questions into trusted datasets and clear dashboards.
            </motion.p>

            {/* Resume button */}
            <motion.div variants={slideInFromLeft(1.0)} className="mt-8">
              <button
                onClick={handleResume}
                className="py-3 px-6 rounded-lg text-white font-semibold text-lg hover:scale-[1.03] transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,138,12,1) 0%, rgba(169,92,255,1) 100%)",
                }}
              >
                Resume
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Portrait (hidden on mobile). Extra top margin on large screens */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="hidden lg:flex w-full justify-center items-start lg:mt-16 xl:mt-24"
          >
            {/* Circular frame with gold ring, no ambient glow */}
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: "480px",
                height: "480px",
                // Clean gold ring
                boxShadow: `0 0 0 2px ${GOLD} inset`,
              }}
            >
              <Image
                src="/profilebg.jpeg"
                alt="Praneetha Mukkamala portrait"
                fill
                priority
                className="object-cover"
                // optional soft feather at edge (kept subtle). Remove if you want a hard circle.
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 82%, rgba(0,0,0,0.85) 88%, rgba(0,0,0,0.6) 92%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 82%, rgba(0,0,0,0.85) 88%, rgba(0,0,0,0.6) 92%, rgba(0,0,0,0) 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroContent;
