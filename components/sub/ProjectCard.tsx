// components/sub/ProjectCard.tsx
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  badge?: string;
}

const ProjectCard: React.FC<Props> = ({ src, title, description, badge }) => {
  return (
    <div className="w-full max-w-[520px] sm:max-w-[560px] bg-[#050505] rounded-xl shadow-lg border border-[#E4B860] overflow-hidden">
      <div className="relative w-full aspect-[16/9] bg-gradient-to-b from-black/10 to-black/0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-2"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

      <div className="p-4 text-center">
        <h3 className="text-[18px] sm:text-[20px] font-semibold text-white">{title}</h3>
        <p className="mt-1 text-gray-400 text-sm sm:text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
