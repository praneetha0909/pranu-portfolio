"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {[
          {
            src: "/Port1.jpeg",
            title: "Job Compatibility Checker",
            description:
              "AI-powered tool that analyzes job descriptions, provides match scores, and suggests AI-driven improvements.",
            fullDetails:
              "This tool leverages NLP and AI-driven algorithms to compare resumes with job descriptions. It provides users with a compatibility percentage and highlights missing skills.",
          },
          {
            src: "/Port2.jpeg",
            title: "Query Genie",
            description:
              "Engineered Python-based chatbot using PandasAI, processing over 250,000+ entries with 95% precision.",
            fullDetails:
              "Query Genie is an AI-driven chatbot built with PandasAI, capable of processing and analyzing structured data. It provides quick insights and helps automate repetitive queries.",
          },
          {
            src: "/Port3.jpeg",
            title: "Voice Based ChatBot",
            description:
              "Designed a voice-based feedback analysis system with ChatGPT integration.",
            fullDetails:
              "This AI-powered chatbot enables users to provide feedback via voice. Integrated with OpenAI's GPT model, it transcribes and analyzes spoken input to generate meaningful insights.",
          },
        ].map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={expandedCard === index ? project.fullDetails : project.description}
            onClick={() => handleExpand(index)} // ✅ Now `onClick` is properly passed
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
