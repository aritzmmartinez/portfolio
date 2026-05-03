"use client";

import { useRef } from "react";
import { useMotionValue, useAnimationFrame } from "framer-motion";

export function useInfiniteCarousel(durationMs: number = 30000) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useAnimationFrame((_, delta) => {
    if (isDragging.current || !trackRef.current) return;
    const halfWidth = trackRef.current.scrollWidth / 2;
    const speed = halfWidth / durationMs;
    let next = x.get() - speed * Math.min(delta, 100);
    if (Math.abs(next) >= halfWidth) next += halfWidth;
    x.set(next);
  });

  const setDragging = (value: boolean) => {
    isDragging.current = value;
  };

  return { x, trackRef, setDragging };
}
