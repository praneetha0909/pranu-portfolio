"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// ---- Design tokens
const GOLD = "#E4B860"; // matches your tile border gold

// ---- Reusable ProjectCard
interface CardProps {
  src: string;
  title: string;
  description: string;
  href?: string; // optional link to details/demo
  badge?: string; // optional small badge (e.g., "2025", "In Progress")
  skills?: string[]; // chips under description
  github?: string;   // GitHub repo link (used by bottom button only)
  size?: "sm" | "lg"; // controls tile size
}

const SkillChips: React.FC<{ skills?: string[] }> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  const max = 6;
  const shown = skills.slice(0, max);
  const extra = skills.length - shown.length;

  return (
    <div className="mt-3 flex flex-wrap justify-center gap-2">
      {shown.map((s, i) => (
        <span
          key={`${s}-${i}`}
          className="rounded-full border px-2 py-1 text-[10px] leading-none tracking-wide text-white/90"
          style={{ borderColor: GOLD, background: "#0b0d12" }}
        >
          {s}
        </span>
      ))}
      {extra > 0 && (
        <span
          className="rounded-full border px-2 py-1 text-[10px] leading-none tracking-wide text-white/70"
          style={{ borderColor: GOLD, background: "#0b0d12" }}
          aria-label={`and ${extra} more skills`}
        >
          +{extra}
        </span>
      )}
    </div>
  );
};

// Size presets (only affects Projects when size="lg")
const CARD_SIZES = {
  sm: {
    cardHeight: "h-[320px]",
    imgHeight: "h-[120px] sm:h-[130px] lg:h-[140px]",
    imgPadding: "p-2",
  },
  lg: {
    cardHeight: "h-[420px]",
    imgHeight: "h-[220px] sm:h-[230px] lg:h-[240px]",
    imgPadding: "p-1",
  },
} as const;

// ---------- Inline Card ----------
const ProjectCard: React.FC<CardProps> = ({
  src,
  title,
  description,
  href,
  badge,
  skills,
  github,
  size = "sm",
}) => {
  const S = CARD_SIZES[size];

  const CardBody = (
    <motion.div
      whileHover={{ y: -6, rotate: 0.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group w-[300px] ${S.cardHeight} flex flex-col items-center rounded-2xl shadow-lg border`}
      style={{ borderColor: GOLD, background: "#11131A" }}
    >
      {/* Image */}
      <div
        className={`relative w-full ${S.imgHeight} overflow-hidden rounded-t-2xl bg-gradient-to-b from-black/10 to-black/0`}
      >
        <Image
          src={src}
          alt={title}
          fill
          className={`object-contain ${S.imgPadding} transition-transform duration-300 group-hover:scale-[1.04] pointer-events-none`}
          sizes="(max-width: 768px) 300px, 300px"
          priority={false}
        />
        {badge && (
          <span
            className="absolute top-2 left-2 rounded-full border px-2 py-0.5 text-[10px] tracking-wide"
            style={{ borderColor: GOLD, color: GOLD, background: "#0b0d12" }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="w-full p-4 text-center">
        <h3 className="text-base font-semibold text-white line-clamp-1">{title}</h3>
        <p className="mt-1 text-gray-400 text-xs leading-snug line-clamp-2">{description}</p>
        <SkillChips skills={skills} />
      </div>
    </motion.div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${title} (opens in new tab)`}
    >
      {CardBody}
    </a>
  ) : (
    CardBody
  );
};

// ---- Page Section animation bits
const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const SectionTitle: React.FC<{ children: React.ReactNode; size?: "lg" | "xl" }> = ({
  children,
  size = "xl",
}) => (
  <h2
    className={[
      "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-purple-500",
      size === "xl" ? "text-[60px]" : "text-[50px]",
      "py-10 text-center",
    ].join(" ")}
  >
    {children}
  </h2>
);

const Projects: React.FC = () => {
  const education = [
    {
      src: "/uta2.png",
      title: "Master's in Computer Science",
      description: "University of Texas at Arlington (Jan 2023 – Dec 2024)",
      skills: ["Database Systems", "AI/ML", "Data Mining", "Cloud Computing & Big Data "],
    },
    {
      src: "/JNTUH.jpeg",
      title: "Bachelor's in Computer Science",
      description:
        "Jawaharlal Nehru Technological University Hyderabad (Aug 2016 – Sep 2020)",
      skills: ["Python", "Data Warehouse", "Web Data Management", "Software Engineering"],
    },
  ];

  const experience = [
    {
      src: "/reality.png",
      title: "Data Engineer",
      description: "Reality AI Lab (Jan 2025 – Present)",
      badge: "Current",
      skills: ["Python", "SQL", "Airflow", "AWS", "CI/CD", "Docker", "ETL", "Redshift"],
    },
    {
      src: "/tom.jpg",
      title: "Business Intelligence Analyst",
      description: "Tomorrow's AI (Sep 2024 – Dec 2024)",
      skills: ["Power BI", "A/B Testing", "Python", "ETL", "KPI Design"],
    },
    {
      src: "/uta2.png",
      title: "Data Reporting Analyst",
      description: "University of Texas at Arlington (Aug 2023 – Dec 2024)",
      skills: ["SQL", "Excel", "Dashboards", "Stakeholder Reports", "Power BI"],
    },
    {
      src: "/infosys.png",
      title: "SAP Data & Systems Analyst",
      description: "Infosys (Mar 2021 – Nov 2022)",
      skills: ["SAP S/4HANA", "SAP Fiori", "CDS Views", "HP ALM", "ABAP"],
    },
  ];

  // ---- SIX projects (keep wording unchanged)
  const projects = [
    {
      src: "/Palantir.jpeg",
      title: "CRM Analytics Dashboard",
      description:
        "Built a Palantir Foundry CRM dashboard: cleaned Companies/People, modeled objects, and shipped a filterable CRUD UI.",
      skills: ["Palantir Foundry", "SQL", "Python", "ETL", "AWS Redshift"],
      github: "https://github.com/praneetha0909/CRM-Dashboard",
    },
    {
      src: "/Job_comp.jpeg",
      title: "Job Compatibility Checker",
      description:
        "Resume compatibility tool that analyzes JDs, scores matches, and suggests AI-driven improvements.",
      skills: ["React", "Next.js", "Python", "NLP", "OpenAI", "Tailwind"],
      github: "https://github.com/praneetha0909/job-compatibility-checker",
    },
    {
      src: "/dashboard.jpeg",
      title: "US Employment Trends",
      description:
        "Created a Tableau dashboard analyzing 50+ state-level labor metrics. Improved trend identification speed by 30% and supported policy decisions.",
      skills: ["Tableau", "SQL", "BigQuery", "Data Analysis"],
      github:
        "https://github.com/praneetha0909/U.S.-Employment-Unemployment-Trends-A-Tableau-Dashboard",
    },
    {
      src: "/SQL4.jpeg",
      title: "IMDb Genre & Talent Ratings Analytics (SQL)",
      description:
        "Produced YoY genre averages and highest-average lead actors per year from IMDb datasets using joins, aggregation, and deterministic filtering.",
      skills: ["Advanced SQL", "Data Modeling & Quality", "Query Optimization"],
      github: "https://github.com/praneetha0909/IMDB-database",
    },
    {
      src: "/Port2.jpeg",
      title: "Query Genie",
      description:
        "Python chatbot (PandasAI) over 250k+ rows with ~95% precision on factual queries.",
      skills: ["Python", "Pandas", "PandasAI", "DataFrames", "Evaluation"],
      github:
        "https://github.com/praneetha0909/Data-Mining/blob/main/Mukkamala_2894_Mulkalapally_8345_Munduru_6693_python.ipynb",
    },
    {
      src: "/Port3.jpeg",
      title: "Voice-Based Chatbot",
      description:
        "Voice feedback analysis with ChatGPT integration and streaming responses.",
      skills: ["Web Speech API", "Node/Flask", "LLM", "Streaming", "OpenAI API"],
      github: "https://github.com/praneetha0909/ConversAI-VoiceBot-Assistant",
    },
  ];

  return (
    <div id="projects" className="w-full">
      {/* PAGE CONTAINER (centers + adds side padding) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-20">
        {/* Education */}
        <SectionTitle>Education</SectionTitle>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center items-center gap-6 md:gap-12 flex-wrap"
        >
          {education.map((c, i) => (
            <motion.div variants={item} key={`edu-${i}`}>
              <ProjectCard {...c} size="sm" />
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <SectionTitle size="lg">Experience</SectionTitle>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center items-center gap-6 md:gap-12 flex-wrap"
        >
          {experience.map((c, i) => (
            <motion.div variants={item} key={`exp-${i}`}>
              <ProjectCard {...c} size="sm" />
            </motion.div>
          ))}
        </motion.div>

        {/* Projects — larger tiles */}
        <SectionTitle>Projects</SectionTitle>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex justify-center items-center gap-6 md:gap-12 flex-wrap"
        >
          {projects.map((p, i) => (
            <motion.div variants={item} key={`proj-${i}`} className="flex flex-col items-center">
              <ProjectCard {...p} size="lg" />

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => {
                    try {
                      e.stopPropagation();
                      window.open(p.github as string, "_blank", "noopener,noreferrer");
                    } catch {}
                  }}
                  className="pointer-events-auto relative z-20 mt-3 inline-flex items-center
                             rounded-full border px-4 py-2 text-sm font-medium
                             text-white/90 hover:text-white transition hover:scale-[1.03]"
                  style={{ background: "#0b0d12", borderColor: GOLD }}
                >
                  Github
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* subtle divider */}
        <div
          className="mt-16 h-px w-2/3"
          style={{
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
