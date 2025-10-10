"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard"; // ✅ default import

const items = [
  { logo: "/reality.png",     title: "Data Engineer (AI & Machine Learning Focus)", subtitle: "Reality AI Lab (January 2025 – Present)" },
  { logo: "/tomorrowsai.png", title: "Business Intelligence Analyst (GenAI Focus)",  subtitle: "Tomorrow’s AI (Sep 2024 – Dec 2024)" },
  { logo: "/uta.png",         title: "Data Reporting Analyst",                       subtitle: "University of Texas at Arlington (Aug 2023 – Dec 2024)" },
  { logo: "/infosys.png",     title: "SAP Data & Systems Analyst",                   subtitle: "Infosys (Mar 2021 – Nov 2022)" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-center text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 mb-12">
        Experience
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {items.map((it) => (
          <ProjectCard
            key={it.title}
            src={it.logo}                 // ✅ use src
            title={it.title}
            description={it.subtitle}     // ✅ use description
            imageHeightClass="h-[160px]"  // optional: logos fit nicer
            containerClassName="max-w-[420px]"
          />
        ))}
      </motion.div>
    </section>
  );
}
