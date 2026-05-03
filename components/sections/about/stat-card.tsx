"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

export function StatCard({ label, icon: Icon, color, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-4 rounded-2xl glass-card hover:bg-muted/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-xl bg-muted ${color} transition-transform group-hover:scale-110`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
    </motion.div>
  );
}
