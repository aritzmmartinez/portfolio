"use client";

import { useState } from "react";

interface TechCardProps {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

export function TechCard({ name, icon, color }: TechCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative shrink-0 w-32 h-32 p-4 mr-6 rounded-2xl border border-border bg-card flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-muted hover:scale-105 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        hovered && color
          ? {
              borderColor: `${color}60`,
              boxShadow: `0 0 20px ${color}25`,
            }
          : {}
      }
    >
      <div
        className="transition-colors duration-300"
        style={
          hovered && color ? { color } : { color: "var(--muted-foreground)" }
        }
      >
        {icon}
      </div>
      <span
        className="text-xs font-medium transition-colors duration-300"
        style={
          hovered && color ? { color } : { color: "var(--muted-foreground)" }
        }
      >
        {name}
      </span>
    </div>
  );
}
