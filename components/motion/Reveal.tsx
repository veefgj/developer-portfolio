"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = { children: ReactNode; className?: string; delay?: number; blur?: boolean };

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Fades content up when it scrolls into view. The server HTML is always visible (no JS, crawlers,
 * reduced motion); only content that is still below the fold after hydration is hidden and revealed.
 */
export function Reveal({ children, className, delay = 0, blur = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    if (el.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, [reduce]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={armed && !inView ? "hidden" : "shown"}
      variants={{
        hidden: { opacity: 0, y: 16, filter: blur ? "blur(6px)" : "blur(0px)", transition: { duration: 0 } },
        shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: blur ? 0.55 : 0.45, delay, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
