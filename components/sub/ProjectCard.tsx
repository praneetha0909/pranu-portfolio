"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="w-[300px] h-[250px] flex flex-col items-center bg-[#11131A] rounded-lg shadow-lg border border-[#E4B860]">
      {/* Image */}
      <div className="relative w-full h-[120px] overflow-hidden rounded-t-lg">
        <Image
          src={src}
          alt={title}
          fill
          style={{ objectFit: "contain" }}   {/* replaces deprecated layout/objectFit props */}
          priority
        />
      </div>

      {/* Text */}
      <div className="w-full p-4 text-center">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
