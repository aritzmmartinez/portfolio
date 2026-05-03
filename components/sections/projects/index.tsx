"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { FilterType } from "@/types";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { FilterButton } from "./filter-button";

export function ProjectsSection() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterType>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-(family-name:--font-syne) tracking-tight">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground">{t("projects.subtitle")}</p>
          <div className="w-16 h-1 bg-foreground rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-3 mb-10"
        >
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            {t("projects.filters.all")}
          </FilterButton>
          <FilterButton
            active={filter === "web"}
            onClick={() => setFilter("web")}
          >
            {t("projects.filters.web")}
          </FilterButton>
          <FilterButton
            active={filter === "mobile"}
            onClick={() => setFilter("mobile")}
          >
            {t("projects.filters.mobile")}
          </FilterButton>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
