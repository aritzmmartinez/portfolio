"use client";

import { useEffect, useRef } from "react";
import type MasonryType from "masonry-layout";

export function useMasonry(deps: unknown[]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const masonryRef = useRef<MasonryType | null>(null);

  useEffect(() => {
    let cancelled = false;
    let instance: MasonryType | undefined;

    (async () => {
      const mod = await import("masonry-layout");
      const Masonry = (mod.default ?? mod) as typeof MasonryType;
      if (cancelled || !containerRef.current) return;

      instance = new Masonry(containerRef.current, {
        itemSelector: ".masonry-item",
        columnWidth: ".masonry-sizer",
        gutter: ".masonry-gutter",
        percentPosition: true,
        transitionDuration: 0,
      });
      masonryRef.current = instance;

      document.fonts?.ready.then(() => {
        if (!cancelled) instance?.layout?.();
      });
    })();

    return () => {
      cancelled = true;
      instance?.destroy?.();
      masonryRef.current = null;
    };
  }, []);

  useEffect(() => {
    const masonry = masonryRef.current;
    if (!masonry) return;
    masonry.reloadItems?.();
    masonry.layout?.();
  }, deps);

  return containerRef;
}
