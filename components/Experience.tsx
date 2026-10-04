import { GraduationCap } from "lucide-react";
import { jobs } from "@/content/portfolio";
import type { Dict } from "@/content/translations";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./motion/SectionHeading";
import { Todo } from "./Todo";

function Dot({ muted = false }: { muted?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute top-7 -left-[calc(2rem+7px)] size-3 rounded-full ring-4 ring-canvas ${muted ? "bg-accent" : "bg-deep"}`}
    />
  );
}

export function Experience({ t }: { t: Dict["experience"] }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading id="experience-title" eyebrow={t.eyebrow} title={t.title} />
        </div>
        <ol className="relative grid gap-6 border-l-2 border-line pl-8 lg:col-span-8">
          {jobs.map((job, i) => (
            <li key={job.id} className="relative">
              <Dot />
              <Reveal delay={i * 0.1} className="card p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-bold md:text-2xl">{job.company}</h3>
                  <span className="text-sm text-ink-soft tabular-nums">
                    {job.start} – {job.end ?? t.present}
                  </span>
                </div>
                <div className="mt-1">{job.title ? <p className="font-medium">{job.title}</p> : <Todo>job title</Todo>}</div>
                <p className="mt-3 leading-relaxed">{t.jobs[job.id]}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
          <li className="relative">
            <Dot muted />
            <Reveal delay={jobs.length * 0.1} className="flex items-start gap-4 rounded-[22px] bg-butter p-6 md:p-7">
              <GraduationCap className="mt-1 size-6 flex-none" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase">{t.educationLabel}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{t.school}</h3>
                <p>{t.major}</p>
              </div>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
