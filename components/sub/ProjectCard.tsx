// components/sub/ProjectCard.tsx
"use client";

import Image from "next/image";
import React, { ReactNode } from "react";

export interface Props {
  src: string | string[];
  title: string;
  description: ReactNode;
  skills?: string[];
  containerClassName?: string;
  imageHeightClass?: string;
}

const join = (...parts: Array<string | undefined>) =>
  parts.filter(Boolean).join(" ");

export default function ProjectCard({
  src,
  title,
  description,
  skills = [],
  containerClassName,
  imageHeightClass = "h-[300px]",
}: Props) {
  const images = Array.isArray(src) ? src : [src];
  const multi = images.length > 1;

  const chipClass =
    "px-3 py-1 text-xs rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 ring-1 ring-cyan-500/20 hover:bg-cyan-500/25";

  return (
    <div
      className={join(
        "w-full h-auto flex flex-col items-center bg-[#1A1A2E] rounded-xl shadow-lg border border-[#2A0E61] p-5",
        containerClassName
      )}
    >
      {multi ? (
        <div className={join("grid grid-cols-2 gap-3 w-full rounded-lg overflow-hidden", imageHeightClass)}>
          {images.slice(0, 4).map((img, i) => (
            <div key={`${img}-${i}`} className="relative w-full h-full bg-black/20 rounded-md">
              <Image src={img} alt={`${title} screenshot ${i + 1}`} fill style={{ objectFit: "contain" }} priority={i===0}/>
            </div>
          ))}
        </div>
      ) : (
        <div className={join("relative w-full overflow-hidden rounded-lg", imageHeightClass)}>
          <Image src={images[0]} alt={title} fill style={{ objectFit: "contain" }} priority />
        </div>
      )}

      <div className="w-full text-center mt-3">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-base leading-relaxed">{description}</p>

        {skills.length > 0 && (
          <div className="mt-3">
            <p className="text-sm font-medium text-slate-200 mb-2">Skills used</p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((s) => (
                <span key={s} className={chipClass}>{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
