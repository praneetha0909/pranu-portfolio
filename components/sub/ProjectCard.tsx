import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  github?: string;      // <-- NEW (optional)
  badge?: string;       // optional, if you want a small status chip on the top-left
}

const ProjectCard = ({ src, title, description, github, badge }: Props) => {
  return (
    <div className="w-[500px] h-[350px] flex flex-col items-center bg-[#050505] rounded-lg shadow-lg border border-[#E4B860]">
      {/* Image area */}
      <div className="relative w-full h-[120px] overflow-hidden rounded-t-lg bg-gradient-to-b from-black/10 to-black/0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-2 pointer-events-none"  // <- image won’t eat clicks
          sizes="(max-width: 768px) 500px, 500px"
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

        {/* Github pill (top-right) */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 rounded-full border px-3 py-0.5 text-[11px] leading-none text-white/90 hover:text-white transition"
            style={{ borderColor: "#E4B860", background: "#0b0d12" }}
            aria-label={`${title} GitHub (opens in new tab)`}
          >
            Github
          </a>
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
