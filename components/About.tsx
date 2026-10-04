import { Bot, CalendarCheck, Workflow } from "lucide-react";
import type { Dict } from "@/content/translations";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./motion/SectionHeading";

const ICONS = [CalendarCheck, Workflow, Bot];

export function About({ t }: { t: Dict["about"] }) {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading id="about-title" eyebrow={t.eyebrow} title={t.title} />
          <Reveal>
            <p className="max-w-[60ch] text-lg leading-relaxed">{t.body}</p>
          </Reveal>
        </div>
        <ul className="grid content-end gap-4 lg:col-span-6">
          {t.highlights.map((h, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <li key={h.title}>
                <Reveal delay={i * 0.08} className="card flex gap-4 p-5 md:p-6">
                  <span className="flex size-11 flex-none items-center justify-center rounded-2xl bg-butter">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{h.title}</h3>
                    <p className="mt-1 text-ink-soft">{h.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
