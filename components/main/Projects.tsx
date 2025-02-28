import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Section 1: Education */}
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Education
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/uta.png"
          title="University of Texas at Arlington"
          description="Master's in Computer Science (2023 - 2024)"
        />
        <ProjectCard
          src="/vignan.png"
          title="Vignan Institute of Technology & Science"
          description="Bachelor's in Computer Science (2016 - 2020)"
        />
      </div>
      {/* Section 2: Work Experience */}
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500 py-10">
        Work Experience
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
          src="/reality.png"
          title="RealityAI"
          description="Software Developer"
        />
        <ProjectCard
          src="/tom.jpg"
          title="Tomorrows AI"
          description="Software Developer"
        />
        <ProjectCard
          src="/infosys.png"
          title="Infosys"
          description="Software Engineer"
        />
      </div>

      {/* Section 2: Work Experience */}
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 py-10">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <ProjectCard
         src="/Port1.jpeg"
         title="Job compatibility"
          description={"Developed a free, AI-powered tool that calculates a compatibility"} // ✅ New Line
        />
        <ProjectCard
          src="/Port2.jpeg"
          title="Query Genie"
          description="Engineered Python-based chatbot using PandasAI, processing over 250,000+ entries with 95% precision."
        />
        <ProjectCard
          src="/Port3.jpeg"
          title="Voice Based ChatBot"
          description="Designed a voice-based feedback analysis system with ChatGPT integration."
        />
      </div>
    </div>
  );
};

export default Projects;
