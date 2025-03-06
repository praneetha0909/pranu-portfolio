import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20"id="projects">
      {/* Section 1: Education */}
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500 py-10">
        Education
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/uta.png"
          title="University of Texas at Arlington"
          description={`Master's in Computer Science (January 2023 - December 2024)`}
        />
        <ProjectCard
          src="/vignan.png"
          title="Vignan Institute of Technology & Science"
          description={`Bachelor's in Computer Science (August 2016 - September 2020)`}
        />
      </div>
      {/* Section 2: Work Experience */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500 py-10">
        Experience
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/reality.png"
          title="Reality AI Lab"
          description={`Software Developer (January 2025 - Present)`}
        />
        <ProjectCard
          src="/tom.jpg"
          title="Tomorrows AI"
          description={`Software Developer (September 2024 - December 2024)`}

        />
        <ProjectCard
          src="/infosys.png"
          title="Infosys"
          description={`Software Engineer (March 2021 - November 2022)`}
        />
      </div>

      {/* Section 2: Work Experience */}
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
         src="/Port1.jpeg"
         title="Job compatibility Checker"
          description="Resume compatibility tool that analyzes job descriptions, provides a match score, and suggests AI-driven improvements." // ✅ New Line
        />
        <ProjectCard
          src="/Port2.jpeg"
          title="Query Genie"
          description="Engineered Python-based chatbot using PandasAI, processing over 250,000+ entries with 95% precision."
        />
        <ProjectCard
          src="/Port3.jpeg"
          title="Voice Based ChatBot"
          description="Designed a voice-based feedback analysis system with ChatGPT integration. "
        />
      </div>
    </div>
  );
};

export default Projects;
