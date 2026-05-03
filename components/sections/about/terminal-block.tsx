"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function TerminalBlock() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden border border-border bg-card"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
        <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
        <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 text-xs text-muted-foreground font-mono">
          Terminal
        </span>
      </div>
      <div className="p-4 font-mono text-sm">
        <p className="text-muted-foreground">{t("about.terminal.comment")}</p>
        <p className="mt-2">
          <span className="text-secondary">$</span>{" "}
          <span className="text-foreground">{t("about.terminal.command")}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block w-2 h-4 ml-1 bg-primary align-middle"
          />
        </p>
      </div>
    </motion.div>
  );
}
