"use client";

import {
  cloneElement,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
  type Ref,
} from "react";
import { createPortal } from "react-dom";
import { useTruncated } from "@/hooks/use-truncated";

type TriggerProps = {
  ref?: Ref<HTMLElement | null>;
  tabIndex?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  "aria-describedby"?: string;
};

interface TooltipProps {
  label: string;
  children: ReactElement<TriggerProps>;
}

export function Tooltip({ label, children }: TooltipProps) {
  const triggerRef = useRef<HTMLElement>(null);
  const truncated = useTruncated(triggerRef);
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const id = useId();

  const show = () => {
    if (!triggerRef.current) return;
    setRect(triggerRef.current.getBoundingClientRect());
    setOpen(true);
  };
  const hide = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    let frame = 0;
    const reposition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (triggerRef.current) {
          setRect(triggerRef.current.getBoundingClientRect());
        }
      });
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", reposition);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", reposition);
    };
  }, [open]);

  const trigger = cloneElement(children, {
    ref: triggerRef,
    ...(truncated && {
      tabIndex: 0,
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      "aria-describedby": open ? id : undefined,
    }),
  });

  return (
    <>
      {trigger}
      {truncated &&
        open &&
        rect &&
        createPortal(
          <div
            id={id}
            role="tooltip"
            style={{
              position: "fixed",
              left: Math.min(
                Math.max(rect.left + rect.width / 2, 8),
                window.innerWidth - 8,
              ),
              top: rect.top - 8,
            }}
            className="pointer-events-none z-50 max-w-80 -translate-x-1/2 -translate-y-full rounded-lg border border-border bg-card px-3 py-2 text-xs leading-relaxed text-foreground shadow-lg"
          >
            {label}
          </div>,
          document.body,
        )}
    </>
  );
}
