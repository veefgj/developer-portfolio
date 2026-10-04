"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { Dict, Lang } from "@/content/translations";
import { LanguageToggle } from "./LanguageToggle";

const SECTIONS = ["home", "about", "stack", "work", "cv", "contact"] as const;
type SectionId = (typeof SECTIONS)[number];

const PILL_SPRING = { type: "spring", stiffness: 380, damping: 32 } as const;

export function Header({ lang, t }: { lang: Lang; t: Dict["nav"] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<SectionId>("home");
  const [open, setOpen] = useState(false);

  // The section crossing the middle of the viewport is "active"; sections without a nav item
  // (Experience) leave the previous one highlighted.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const transition = reduce ? { duration: 0 } : PILL_SPRING;

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[max(0.75rem,env(safe-area-inset-top))] sm:pt-4">
      <div className="container-page flex items-center justify-between gap-3">
        <a
          href="#home"
          className="rounded-full border border-line bg-card/90 px-4 py-2 font-display text-lg font-extrabold tracking-[-0.03em] shadow-soft backdrop-blur"
        >
          Vy Phuong<span className="text-deep">.</span>
        </a>

        <nav aria-label={t.label} className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-card/90 p-1.5 shadow-soft backdrop-blur">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className="relative block rounded-full px-4 py-2 text-sm font-medium"
                >
                  {active === id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-butter" transition={transition} />
                  )}
                  <span className="relative">{t[id]}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle lang={lang} label={t.language} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((o) => !o)}
            className="flex size-11 items-center justify-center rounded-full border border-line bg-card/90 shadow-soft backdrop-blur md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={t.label}
            initial={reduce ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="container-page mt-2 md:hidden"
          >
            <ul className="grid gap-1 rounded-3xl border border-line bg-card p-2 shadow-lift">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === id ? "true" : undefined}
                    className={`block rounded-2xl px-4 py-3 font-display text-lg font-bold ${active === id ? "bg-butter" : ""}`}
                  >
                    {t[id]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
