import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  github?: string;   // optional: shows a button if provided
  badge?: string;    // optional: status chip (unused here but kept)
}

const ProjectCard = ({ src, title, description, github, badge }: Props) => {
  return (
    <div className="w-[500px] h-[350px] flex flex-col items-center bg-[#050505] rounded-lg shadow-lg border border-[#E4B860]">
      {/* Image area (unchanged formatting) */}
      <div className="relative w-full h-[120px] overflow-hidden rounded-t-lg bg-gradient-to-b from-black/10 to-black/0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-2 pointer-events-none rounded-t-lg"
          sizes="(max-width: 768px) 500px, 500px"
          priority={false}
        />

        {badge && (
          <span
            className="absolute top-2 left-2 rounded-full border px-2 py-0.5 text-[10px] tracking-wide"
            style={{ borderColor: "#E4B860", color: "#E4B860", background: "#0b0d12" }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Text Content (unchanged wording) */}
      <div className="w-full p-4 text-center">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-1 text-gray-400 text-sm">{description}</p>

        {/* Github button (bottom of tile) */}
        {github && (
          <div className="mt-3 flex justify-center">
            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              className="inline-flex items-center rounded-full border px-3 py-1 text-[12px] leading-none text-white/90 hover:text-white transition cursor-pointer"
              style={{ borderColor: "#E4B860", background: "#0b0d12" }}
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
