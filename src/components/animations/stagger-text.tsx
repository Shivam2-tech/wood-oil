"use client";

import { motion } from "framer-motion";

interface StaggerTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
}

export function StaggerText({
  text,
  className,
  as: Tag = "h1",
}: StaggerTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Tag
        className={`flex flex-wrap justify-center gap-x-[0.3em] ${className ?? ""}`}
      >
        {words.map((word, i) => (
          <motion.span key={`${word}-${i}`} variants={child} className="inline-block">
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
