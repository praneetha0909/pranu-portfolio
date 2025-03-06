"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src?: string;  // ✅ Making props optional
  title?: string;
  description?: string;
  onClick?: () => void;
}

const ProjectCard = ({ src = "", title = "", description = "", onClick }: Props) => { 
  
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="w-[300px] flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#5807f7] cursor-pointer transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Project Image */}
      <div className="relative w-full h-[120px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full p-4 text-center">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-400 text-sm">
          {isExpanded ? fullDetails : description}
        </p>
        
        {/* Expand Button */}
        <motion.button
          className="mt-3 px-4 py-2 text-sm bg-blue-500 text-white rounded-md transition-all duration-300 hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
