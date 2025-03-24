"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";

// Skill Groups with Usage Badges
const skillGroups = [
  {
    title: "Programming Languages & Frameworks",
    color: "from-cyan-600 to-cyan-700",
    skills: [
      { name: "Java", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Intermediate" },
      { name: "R", level: "Advanced" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Go (Golang)", level: "Intermediate" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
    ],
  },
  {
    title: "Databases & Cloud Technologies",
    color: "from-cyan-400 to-blue-300",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "NoSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Google Cloud Platform (GCP)", level: "Intermediate" },
      { name: "Amazon Web Services (AWS)", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
    ],
  },
  {
    title: "Data Science & AI",
    color: "from-purple-400 to-purple-600",
    skills: [
      { name: "Jupyter Notebook", level: "Advanced" },
      { name: "OpenAI API", level: "Advanced" },
      { name: "PyTorch", level: "Advanced" },
      { name: "TensorFlow", level: "Advanced" },
      { name: "Spark", level: "Advanced" },
      { name: "Hadoop", level: "Advanced" },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-orange-400 to-orange-500",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-red-400",
  Intermediate: "bg-yellow-400",
  Advanced: "bg-green-400",
};

const Skills = () => {
  return (
    <>
      {/* Main Skill Icons Section */}
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden py-10"
        style={{ transform: "scale(0.9)" }}
      >
        <SkillText />

        {[Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill].map(
          (skillSet, setIndex) => (
            <div
              key={setIndex}
              className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center"
            >
              {skillSet.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                />
              ))}
            </div>
          )
        )}

        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section
        id="additional-skills"
        className="flex flex-col items-center justify-center gap-10 px-4 sm:px-6 py-20 mx-auto max-w-7xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 text-center"
        >
          Additional Skills
        </motion.h2>

        <div className="text-white bg-white/10 px-6 py-2 rounded-full mb-8 text-sm shadow-md">
          {skillGroups.reduce((acc, group) => acc + group.skills.length, 0)}+ Skills
        </div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 sm:p-8 bg-gradient-to-br ${group.color} text-white shadow-lg border border-white/10 relative overflow-hidden`}
            >
              {/* Sand/Grainy Overlay */}
              <div className="absolute inset-0 bg-[url('/grain..jpeg')] opacity-50 z-0 pointer-events-none mix-blend-soft-light"></div>

              <h3 className="text-xl font-bold mb-4 relative z-10">{group.title}</h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-md"
                  >
                    {skill.name}
                    <span
                      className={`text-[10px] font-semibold text-black px-2 py-0.5 rounded-full ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
