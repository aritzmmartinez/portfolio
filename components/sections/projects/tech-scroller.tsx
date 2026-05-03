"use client";

import { useRef, useState } from "react";

interface TechScrollerProps {
  tech: string[];
}

export function TechScroller({ tech }: TechScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      scrollLeft: scrollRef.current.scrollLeft,
    };
    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const delta = e.clientX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - delta;
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={`flex gap-2 overflow-x-auto pb-1 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {tech.map((name) => (
          <span
            key={name}
            className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border hover:border-muted-foreground/30 hover:text-foreground transition-colors pointer-events-none"
          >
            {name}
          </span>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-1 w-8 bg-linear-to-l from-card to-transparent pointer-events-none" />
    </div>
  );
}
