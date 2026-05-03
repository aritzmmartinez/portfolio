"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/tech-stack";
import { useInfiniteCarousel } from "@/hooks/use-infinite-carousel";
import { TechCard } from "./tech-card";

export function InfiniteCarousel() {
  const { x, trackRef, setDragging } = useInfiniteCarousel(30000);

  const normalizeX = () => {
    if (!trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    const val = x.get();
    if (val > 0) x.set(val - halfWidth);
    else if (Math.abs(val) >= halfWidth) x.set(val + halfWidth);
  };

  return (
    <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        ref={trackRef}
        className="flex select-none"
        style={{ x }}
        drag="x"
        dragMomentum={false}
        dragElastic={0}
        onDragStart={() => setDragging(true)}
        onDrag={normalizeX}
        onDragEnd={() => setDragging(false)}
      >
        {technologies.map((tech, index) => (
          <TechCard
            key={`first-${index}`}
            name={tech.name}
            icon={tech.icon}
            color={tech.color}
          />
        ))}
        {technologies.map((tech, index) => (
          <TechCard
            key={`second-${index}`}
            name={tech.name}
            icon={tech.icon}
            color={tech.color}
          />
        ))}
      </motion.div>
    </div>
  );
}
