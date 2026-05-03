"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/use-typewriter";

interface TypewriterTextProps {
  texts: string[];
}

export function TypewriterText({ texts }: TypewriterTextProps) {
  const displayText = useTypewriter(texts);

  return (
    <span className="inline-flex items-center">
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 ml-1 bg-primary"
      />
    </span>
  );
}
