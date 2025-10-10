const ProjectCard: React.FC<CardProps> = ({
  src,
  title,
  description,
  href,
  badge,
  skills,
  github,
}) => {
  const CardBody = (
    <motion.div
      whileHover={{ y: -6, rotate: 0.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group w-[300px] h-[360px] flex flex-col items-center rounded-2xl shadow-lg border"
      style={{ borderColor: GOLD, background: "#11131A" }}
    >
      {/* Image */}
      <div className="relative w-full h-[160px] sm:h-[170px] lg:h-[180px] overflow-hidden rounded-t-2xl bg-gradient-to-b from-black/10 to-black/0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.04] pointer-events-none"
          sizes="(max-width: 768px) 300px, 300px"
          priority={false}
        />
        {/* Badge (left) */}
        {badge && (
          <span
            className="absolute top-2 left-2 rounded-full border px-2 py-0.5 text-[10px] tracking-wide"
            style={{ borderColor: GOLD, color: GOLD, background: "#0b0d12" }}
          >
            {badge}
          </span>
        )}
        {/* removed top-right github pill */}
      </div>

      {/* Text */}
      <div className="w-full p-4 text-center">
        <h3 className="text-base font-semibold text-white line-clamp-1">{title}</h3>
        <p className="mt-1 text-gray-400 text-xs leading-snug line-clamp-2">{description}</p>
        {/* Skills */}
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
