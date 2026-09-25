"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import type { Project, ProjectStatus, ProjectType } from "@/types";
import { BrowserMockup } from "./browser-mockup";
import { PhoneMockup } from "./phone-mockup";
import { TechScroller } from "./tech-scroller";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const featuredWidth: Record<ProjectType, string> = {
  web: "sm:w-full lg:w-[66%]",
  mobile: "",
  library: "",
};

const statusConfig: Record<ProjectStatus, { labelKey: string }> = {
  live: { labelKey: "projects.status.live" },
  openSource: { labelKey: "projects.status.openSource" },
  inDev: { labelKey: "projects.status.inDev" },
  done: { labelKey: "projects.status.done" },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  const isMobile = project.type === "mobile";
  const isLibrary = project.type === "library";
  const imageSrc =
    mounted && resolvedTheme === "dark" && project.imageDark
      ? project.imageDark
      : project.image;
  const status = project.status ? statusConfig[project.status] : null;

  const screenshot = (className?: string) => (
    <Image
      src={imageSrc}
      alt={t(project.nameKey)}
      fill
      className={cn("object-cover", className)}
    />
  );

  function renderMockup(): React.JSX.Element {
    switch (project.type) {
      case "mobile":
        return (
          <PhoneMockup featured={project.featured}>{screenshot()}</PhoneMockup>
        );
      case "web":
        return (
          <BrowserMockup url={project.url}>
            {screenshot(
              "transition-transform duration-500 group-hover:scale-[1.02]",
            )}
          </BrowserMockup>
        );
      case "library":
        return (
          <div
            className={`relative ${project.featured ? "aspect-4/3" : "aspect-16/10"} rounded-lg border border-border bg-muted/30 overflow-hidden`}
          >
            {screenshot(
              "transition-transform duration-500 group-hover:scale-[1.02]",
            )}
          </div>
        );
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        "masonry-item group relative mb-6 inline-block w-full align-top sm:w-[49%] lg:w-[32%]",
        "rounded-2xl border border-border bg-card overflow-hidden hover:border-muted-foreground/30 transition-all duration-300",
        project.featured && featuredWidth[project.type],
      )}
    >
      <div className={`relative ${isMobile ? "p-6 pb-4 bg-muted/20" : ""}`}>
        {renderMockup()}
      </div>

      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold font-(family-name:--font-syne) text-foreground leading-tight">
              {t(project.nameKey)}
            </h3>
            {status && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-medium tracking-wide uppercase border border-border bg-muted/50 text-muted-foreground shrink-0">
                {t(status.labelKey)}
              </span>
            )}
          </div>
          <Tooltip label={t(project.descriptionKey)}>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {t(project.descriptionKey)}
            </p>
          </Tooltip>
        </div>

        <TechScroller tech={project.tech} />

        <div className="flex items-center gap-3 pt-1">
          {project.link &&
            (isLibrary ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:opacity-70 transition-opacity"
                aria-label="View on npm"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#CB3837"
                    d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
                  />
                </svg>
              </a>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                {isMobile ? t("projects.appStore") : t("projects.viewProject")}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          {project.docker && (
            <a
              href={project.docker}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-70 transition-opacity"
              aria-label="View on Docker Hub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#1D63ED"
                  d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.135a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327a4.7 4.7 0 0 0-.6 1.4c-.228.949-.09 1.845.4 2.61-.6.33-1.55.4-1.744.408H.751a.75.75 0 0 0-.75.744 11.4 11.4 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137a16 16 0 0 0 2.916-.263 12.2 12.2 0 0 0 3.807-1.377 10.5 10.5 0 0 0 2.599-2.131c1.238-1.4 1.977-2.96 2.526-4.35h.225c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.099-.29z"
                />
              </svg>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-muted-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
