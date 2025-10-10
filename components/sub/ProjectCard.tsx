"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface Props {
  logo: string;
  title: string;
  subtitle: string; // company + dates
}

export default function ExperienceCard({ logo, title, subtitle }: Props) {
  const prefersReduced = useReducedMotion();

  // gold accent (matches your header)
  const gold = "#634F26";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: prefersReduced ? 0 : 24, scale: prefersReduced ? 1 : 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      whileHover={
        prefersReduced
          ? {}
          : {
              y: -6,
              rotateX: 2,
              rotateY: -2,
              boxShadow:
                "0 0 0 1px rgba(99,79,38,.35), 0 18px 40px rgba(99,79,38,.20), 0 4px 10px rgba(0,0,0,.35)",
              transition: { type: "spring", stiffness: 220, damping: 18 },
            }
      }
      whileTap={prefersReduced ? {} : { scale: 0.99 }}
      className={`
        relative rounded-2xl p-6 w-full max-w-[420px] mx-auto
        bg-[#11131A]/95
        border border-[${gold}]/45 ring-1 ring-[${gold}]/25
        shadow-[0_0_0_1px_rgba(99,79,38,0.18),0_10px_30px_rgba(0,0,0,0.35)]
        transition-all duration-300
      `}
    >
      {/* subtle animated gold sheen */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          background:
            "radial-gradient(120px 80px at 20% 0%, rgba(99,79,38,.18), transparent 60%), radial-gradient(140px 100px at 80% 0%, rgba(99,79,38,.16), transparent 60%)",
        }}
        animate={prefersReduced ? {} : { opacity: [0.15, 0.35, 0.15] }}
        transition={prefersReduced ? {} : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* logo */}
      <div className="relative mx-auto mb-5 h-24 w-24 rounded-md overflow-hidden bg-black/20">
        <Image src={logo} alt={title} fill style={{ objectFit: "contain" }} />
      </div>

      {/* text */}
      <h3 className="text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E8D39A] via-[#D7B766] to-[#A47A31]">
        {title}
      </h3>
      <p className="mt-2 text-center text-slate-300">{subtitle}</p>
    </motion.div>
  );
}
