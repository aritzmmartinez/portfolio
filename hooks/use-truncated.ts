"use client";

import { useEffect, useState, type RefObject } from "react";

export function useTruncated(ref: RefObject<HTMLElement | null>) {
  const [truncated, setTruncated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;

    const measure = () => {
      if (cancelled) return;
      setTruncated(
        el.scrollHeight > el.clientHeight + 1 ||
          el.scrollWidth > el.clientWidth + 1,
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    document.fonts?.ready.then(measure);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [ref]);

  return truncated;
}
