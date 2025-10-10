import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  github?: string; // kept for compatibility; not rendered here
  badge?: string;  // optional badge on top-left
}

const ProjectCard: React.FC<Props> = ({ src, title, description, badge }) => {
  return (
    <div className="w-[500px] h-[350px] flex flex-col items-center bg-[#050505] rounded-lg shadow-lg border border-[#E4B860]">
      {/* Image area (bigger height; adjust if needed) */}
      <div className="relative w-full h-[180px] overflow-hidden rounded-t-lg bg-gradient-to-b from-black/10 to-black/0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-2 pointer-events-none rounded-t-lg"
          sizes="(max-width: 1000px) 500px, 500px"
          priority={false}
        />

        {/* Optional badge (top-left) */}
        {badge && (
          <span
            className="absolute top-2 left-2 rounded-full border px-2 py-0.5 text-[10px] tracking-wide"
            style={{ borderColor: "#E4B860", color: "#E4B860", background: "#0b0d12" }}
          >
            {badge}
          </span>
        )}
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
