"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Code2, MapPin, Globe } from "lucide-react";
import { StatCard } from "./stat-card";
import { TerminalBlock } from "./terminal-block";

const stats = [
  { key: "coding", icon: Code2, color: "text-foreground" },
  { key: "location", icon: MapPin, color: "text-foreground" },
  { key: "languages", icon: Globe, color: "text-foreground" },
];

export function AboutSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-(family-name:--font-syne) tracking-tight">
            {t("about.title")}
          </h2>
          <div className="w-16 h-1 bg-foreground rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("about.bio")}
            </p>

            <div className="grid gap-3">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.key}
                  label={t(`about.stats.${stat.key}`)}
                  icon={stat.icon}
                  color={stat.color}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
