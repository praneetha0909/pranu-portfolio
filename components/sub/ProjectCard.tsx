import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  github?: string;                 // optional GitHub link
  badge?: string;                  // optional small status chip (top-left)
  skills?: string[];               // optional skill chips under description
}

const GOLD = "#E4B860";

const ProjectCard = ({ src, title, description, github, badge, skills }: Props) => {
  return (
    <div className="relative w-[500px] h-[350px] flex flex-col items-center bg-[#050505] rounded-lg shadow-lg border border-[#E4B860]">
      {/* Image area */}
      <div className="relative w-full h-[120px] overflow-hidden rounded-t-lg bg-gradient-to-b from-black/10 to-black/0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-2 pointer-events-none" // image won’t eat clicks
          sizes="(max-width: 768px) 500px, 500px"
          priority={false}
        />

        {/* Badge (top-left) */}
        {badge && (
          <span
            className="absolute top-2 left-2 rounded-full border px-2 py-0.5 text-[10px] tracking-wide"
            style={{ borderColor: GOLD, color: GOLD, background: "#0b0d12" }}
          >
            {badge}
          </span>
        )}

        {/* Github pill — bottom-center of the image area */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 inline-flex items-center justify-center rounded-full border px-3 py-0.5 text-[11px] leading-none text-white/90 hover:text-white transition cursor-pointer"
            style={{ borderColor: GOLD, background: "#0b0d12" }}
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

        {/* Optional skills */}
        {skills?.length ? (
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {skills.slice(0, 6).map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="rounded-full border px-2 py-1 text-[10px] leading-none tracking-wide text-white/90"
                style={{ borderColor: GOLD, background: "#0b0d12" }}
              >
                {s}
              </span>
            ))}
            {skills.length > 6 && (
              <span
                className="rounded-full border px-2 py-1 text-[10px] leading-none tracking-wide text-white/70"
                style={{ borderColor: GOLD, background: "#0b0d12" }}
                aria-label={`and ${skills.length - 6} more skills`}
              >
                +{skills.length - 6}
              </span>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
