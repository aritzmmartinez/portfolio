"use client";

import { useTranslation } from "react-i18next";
import pkg from "@/package.json";

const GITHUB_REPO = "https://github.com/aritzmmartinez/portfolio";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-1 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Aritz Martínez. {t("footer.rights")}
          </p>
          <a
            href={`${GITHUB_REPO}/releases/tag/v${pkg.version}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            v{pkg.version}
          </a>
        </div>
      </div>
    </footer>
  );
}
