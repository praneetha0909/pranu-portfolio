import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  github?: string;   // optional: show pill button if provided
}

const GOLD = "#E4B860";

const ProjectCard = ({ src, title, description, github }: Props) => {
  return (
    <div className="w-[500px] h-[350px] flex flex-col items-center bg-[#050505] rounded-lg shadow-lg border border-[#E4B860]">
      {/* Image area — unchanged layout */}
      <div className="relative w-full h-[120px] overflow-hidden rounded-t-lg">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain rounded-t-lg p-2 pointer-events-none" // don't capture clicks (safe)
          sizes="(max-width: 768px) 500px, 500px"
          priority={false}
        />
      </div>

      {/* Text Content — unchanged */}
      <div className="w-full p-4 text-center">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-400 text-sm">{description}</p>

        {/* Github pill button (bottom-center) */}
        {github && (
          <div className="mt-3 flex justify-center">
            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] leading-none text-white/90 hover:text-white transition cursor-pointer"
              style={{ borderColor: GOLD, background: "#0b0d12" }}
              aria-label={`${title} GitHub (opens in new tab)`}
            >
              Github
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
