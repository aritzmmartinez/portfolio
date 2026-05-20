"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Briefcase } from "lucide-react";

interface WorkEntry {
  company: string;
  role: string;
  period: string;
  bullets?: string[];
  description?: string;
}

export function ExperienceSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workExperience = t("experience.work", {
    returnObjects: true,
  }) as WorkEntry[];

  return (
    <section id="experience" className="py-24 md:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-(family-name:--font-syne) tracking-tight">
            {t("experience.title")}
          </h2>
          <div className="w-16 h-1 bg-foreground rounded-full" />
        </motion.div>

        <div className="space-y-14">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2.5 mb-8"
            >
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {t("experience.workTitle")}
              </h3>
            </motion.div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6 pl-8">
                {workExperience.map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
                    className="relative"
                  >
                    <div className="absolute -left-8.25 top-5 w-2.5 h-2.5 rounded-full bg-foreground border-2 border-background" />

                    <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-foreground" />
                      <div className="p-5 pl-6">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-semibold font-(family-name:--font-syne) text-foreground">
                              {entry.company}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {entry.role}
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap pt-0.5">
                            {entry.period}
                          </span>
                        </div>
                        {entry.description ? (
                          <div className="space-y-3">
                            {entry.description.split("\n\n").map((para, i) => (
                              <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                                {para}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-2">
                            {entry.bullets?.map((bullet, i) => (
                              <li
                                key={i}
                                className="flex gap-2.5 text-sm text-muted-foreground"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
