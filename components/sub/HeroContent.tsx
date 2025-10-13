"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const ACCENT = "#E4B860"; // ring color for the portrait

const HeroContent: React.FC = () => {
  return (
    <motion.section initial="hidden" animate="visible" className="relative w-full">
      {/* Add top gap under the navbar */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-40 lg:pt-44 pb-10">
        {/* 1-col on mobile, 2-col on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Text block */}
          <div className="relative z-20 w-full">
            {/* Small badge */}
            <motion.div
              variants={slideInFromTop}
              className="inline-flex items-center gap-2 rounded-2xl border border-[#d19932]/90 px-3.5 py-2 opacity-90"
            >
              <SparklesIcon className="h-5 w-5 text-[#d19932]" />
              <span className="text-[13px]">Data Engineer</span>
            </motion.div>

            {/* Name & Title */}
            <motion.h1
              variants={slideInFromLeft(0.5)}
              className="mt-8 md:mt-10 font-bold text-white tracking-tight break-words text-center md:text-left"
            >
              <span className="block text-[44px] sm:text-[54px] md:text-[58px] lg:text-[62px] leading-[1.05]">
                <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                  Praneetha Mukkamala
                </span>
              </span>
              <span className="block text-[36px] sm:text-[44px] md:text-[48px] lg:text-[52px] leading-[1.05]">
                Data Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="mt-5 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            >
              I design and build SQL/Python ETL/ELT pipelines and dimensional models on AWS/GCP,
              turning business questions into trusted datasets and clear dashboards.
            </motion.p>

            {/* Resume — use <a> to open reliably. The file must be in /public (no /public in the URL). */}
            <motion.div variants={slideInFromLeft(1)} className="mt-7 flex justify-center md:justify-start">
              <a
                href="/PraneethaMukkamala_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Resume in a new tab"
                className="relative z-20 inline-block rounded-lg px-6 py-3 text-white text-lg font-semibold transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-white/40"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,138,12,1) 0%, rgba(169,92,255,1) 100%)",
                }}
              >
                Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Portrait (hidden on small screens) */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="hidden lg:flex w-full justify-center items-center"
          >
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: "440px",
                height: "440px",
                boxShadow: `0 0 0 2px ${ACCENT} inset`,
              }}
            >
              <Image
                src="/profilebg.jpeg"
                alt="Praneetha Mukkamala portrait"
                fill
                priority
                className="object-cover"
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

      {/* If you have any starfield/video layers elsewhere, make sure they ignore clicks:
          className="pointer-events-none -z-10" */}
    </motion.section>
  );
};

export default HeroContent;
