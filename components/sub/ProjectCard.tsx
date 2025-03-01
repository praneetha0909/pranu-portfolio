import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="w-[400px] h-[280px] flex flex-col items-center bg-[#1A1A2E] rounded-lg shadow-lg border border-[#5807f7]">
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
        <p className="mt-1 text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
