"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  fullDetails: string;
}

const ProjectCard = ({ src, title, description, fullDetails }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <motion.div
        className="w-[300px] h-[250px] flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#5807f7] cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
      >
        {/* Image */}
        <div className="relative w-full h-[120px] overflow-hidden">
          <Image src={src} alt={title} layout="fill" objectFit="contain" className="rounded-t-lg" />
        </div>

        {/* Text Content */}
        <div className="w-full p-4 text-center">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <p className="mt-1 text-gray-400 text-sm">{description}</p>
        </div>
      </motion.div>

      {/* Modal Pop-Up */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-[#1A1A2E] p-6 rounded-lg shadow-lg w-[90%] md:w-[600px]">
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-white text-xl" onClick={() => setIsOpen(false)}>
              ✖
            </button>

            {/* Project Details */}
            <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
            <Image src={src} alt={title} width={500} height={250} className="rounded-md mb-4" />
            <p className="text-gray-300">{fullDetails}</p>

            {/* Close Button */}
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
