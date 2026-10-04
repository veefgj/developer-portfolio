"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";
import { useFinePointer } from "./use-fine-pointer";

type Props = { children: ReactNode; className?: string; maxTilt?: number };

/** Card that tilts toward the cursor (≤ maxTilt degrees) with a soft butter glow. Flat on touch and reduced motion. */
export function ProjectTiltCard({ children, className, maxTilt = 4 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const rotateX = useSpring(0, { stiffness: 200, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 22 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${glowX}% ${glowY}%, rgb(255 241 184 / 0.55), transparent 60%)`;
  const active = fine && !reduce;

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!active || !el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateX.set((0.5 - py) * 2 * maxTilt);
    rotateY.set((px - 0.5) * 2 * maxTilt);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function onPointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={`group relative ${className ?? ""}`}
    >
      {active && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
        />
      )}
      {children}
    </motion.div>
  );
}
