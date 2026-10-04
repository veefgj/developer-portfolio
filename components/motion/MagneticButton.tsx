"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { useFinePointer } from "./use-fine-pointer";

type Props = { href: string; children: ReactNode; className?: string; spark?: boolean };

const PULL_RADIUS = 60; // px beyond the button edge where the pull starts
const MAX_SHIFT = 10;
const clamp = (v: number) => Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, v));

/** CTA that leans toward a nearby cursor (desktop only) and springs on press; optional click spark. */
export function MagneticButton({ href, children, className, spark = false }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.6 });
  const active = fine && !reduce;

  useEffect(() => {
    if (!active) {
      x.set(0);
      y.set(0);
      return;
    }
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const inside = Math.hypot(dx, dy) < Math.max(r.width, r.height) / 2 + PULL_RADIUS;
      x.set(inside ? clamp(dx * 0.22) : 0);
      y.set(inside ? clamp(dy * 0.32) : 0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [active, x, y]);

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!spark || reduce || !el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX || r.left + r.width / 2) - r.left;
    const py = (e.clientY || r.top + r.height / 2) - r.top;
    for (let i = 0; i < 8; i++) {
      const s = document.createElement("span");
      s.className = "spark";
      s.style.left = `${px}px`;
      s.style.top = `${py}px`;
      s.style.setProperty("--a", `${i * 45}deg`);
      el.appendChild(s);
      window.setTimeout(() => s.remove(), 520);
    }
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}
