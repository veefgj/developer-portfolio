import { ArrowUpRight, Bot, FileText, Headset } from "lucide-react";
import { helpflow, projects } from "@/content/portfolio";
import type { Dict, ProjectCopy } from "@/content/translations";
import { ProjectTiltCard } from "./motion/ProjectTiltCard";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./motion/SectionHeading";
import { Todo } from "./Todo";

// Schematic of the product idea (cited AI answer → hand-off to a person). Abstract shapes, not a screenshot:
// real screenshots go here only once approved.
function HelpFlowSketch() {
  const line = "h-2 rounded-full bg-ink/15";
  return (
    <div aria-hidden="true" className="w-full max-w-sm rounded-[22px] bg-card p-4 shadow-lift">
      <div className="flex items-center gap-1.5 border-b border-line pb-3">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="ml-2 h-2 w-20 rounded-full bg-butter" />
      </div>
      <div className="grid gap-3 pt-4">
        <div className="ml-auto grid w-3/5 gap-1.5 rounded-2xl rounded-br-md bg-accent p-3">
          <span className={`${line} w-full bg-ink/25`} />
          <span className={`${line} w-2/3 bg-ink/25`} />
        </div>
        <div className="flex items-end gap-2">
          <span className="flex size-7 flex-none items-center justify-center rounded-full bg-butter">
            <Bot className="size-4" />
          </span>
          <div className="grid w-4/5 gap-1.5 rounded-2xl rounded-bl-md bg-canvas p-3 shadow-[inset_0_0_0_1px_var(--color-line)]">
            <span className={`${line} w-full`} />
            <span className={`${line} w-5/6`} />
            <span className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-butter px-2 py-0.5 text-[0.65rem] font-bold">
              <FileText className="size-3" />
              [1]
            </span>
          </div>
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-full bg-peach px-3 py-1">
          <Headset className="size-3.5" />
          <span className="h-1.5 w-16 rounded-full bg-ink/20" />
        </div>
        <div className="flex items-end gap-2">
          <span className="flex size-7 flex-none items-center justify-center rounded-full bg-peach">
            <Headset className="size-4" />
          </span>
          <div className="grid w-3/5 gap-1.5 rounded-2xl rounded-bl-md bg-canvas p-3 shadow-[inset_0_0_0_1px_var(--color-line)]">
            <span className={`${line} w-full`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ copy, stack, wide = false }: { copy: ProjectCopy; stack: string[]; wide?: boolean }) {
  return (
    <ProjectTiltCard maxTilt={wide ? 2 : 4} className="h-full rounded-[24px] border border-line bg-card shadow-soft">
      <article className={`flex h-full flex-col p-6 md:p-8 ${wide ? "lg:grid lg:grid-cols-12 lg:gap-10" : ""}`}>
        <div className={wide ? "lg:col-span-5" : undefined}>
          <p className="text-xs font-semibold tracking-[0.06em] text-ink-soft uppercase">{copy.context}</p>
          <h4 className="mt-3 font-display text-xl leading-snug font-bold tracking-[-0.015em] md:text-2xl">{copy.title}</h4>
          <p className="mt-3 leading-relaxed text-ink-soft">{copy.summary}</p>
          {wide && <StackChips stack={stack} className="mt-6 hidden lg:flex" />}
        </div>
        <ul className={`mt-5 grid gap-2.5 ${wide ? "lg:col-span-7 lg:mt-0" : ""}`}>
          {copy.highlights.map((h) => (
            <li key={h} className="flex gap-3 leading-relaxed">
              <span aria-hidden="true" className="mt-[0.6em] size-1.5 flex-none rounded-full bg-deep" />
              {h}
            </li>
          ))}
        </ul>
        <StackChips stack={stack} className={`mt-auto pt-6 ${wide ? "lg:hidden" : ""}`} />
      </article>
    </ProjectTiltCard>
  );
}

function StackChips({ stack, className }: { stack: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {stack.map((s) => (
        <li key={s} className="chip">
          {s}
        </li>
      ))}
    </ul>
  );
}

export function Projects({ t }: { t: Dict["work"] }) {
  const h = t.helpflow;
  const links = [
    { href: helpflow.repoUrl, label: h.repo },
    { href: helpflow.demoUrl, label: h.demo },
  ].filter((l): l is { href: string; label: string } => l.href !== null);

  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <div className="container-page">
        <SectionHeading id="work-title" eyebrow={t.eyebrow} title={t.title} />
        <Reveal>
          <ProjectTiltCard maxTilt={3} className="overflow-hidden rounded-[28px] border border-line bg-card shadow-soft">
            <article className="grid lg:grid-cols-12">
              <div className="p-7 md:p-10 lg:col-span-7">
                <p className="eyebrow">{t.featured}</p>
                <h3 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-none font-extrabold tracking-[-0.04em]">
                  HelpFlow AI
                </h3>
                <p className="mt-3 text-lg text-ink-soft">{h.tagline}</p>
                <dl className="mt-8 grid gap-5">
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase">{h.problemLabel}</dt>
                    <dd className="mt-1 leading-relaxed">{h.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase">{h.solutionLabel}</dt>
                    <dd className="mt-1 leading-relaxed">{h.solution}</dd>
                  </div>
                  {h.role ? (
                    <div>
                      <dt className="text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase">{h.roleLabel}</dt>
                      <dd className="mt-1 leading-relaxed">{h.role}</dd>
                    </div>
                  ) : (
                    <Todo>{h.roleLabel}: work.helpflow.role</Todo>
                  )}
                </dl>
                <h4 className="sr-only">{h.stackLabel}</h4>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {helpflow.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
                      {l.label}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ))}
                  {links.length === 0 && <Todo>repo / demo: content/portfolio.ts → helpflow</Todo>}
                </div>
              </div>
              <div className="relative flex items-center justify-center overflow-hidden bg-butter p-7 md:p-10 lg:col-span-5">
                <span aria-hidden="true" className="absolute -top-16 -right-16 size-56 rounded-full bg-canvas/60" />
                <span aria-hidden="true" className="absolute -bottom-10 -left-10 size-32 rounded-full bg-peach" />
                <div className="relative w-full">
                  <HelpFlowSketch />
                </div>
              </div>
            </article>
          </ProjectTiltCard>
        </Reveal>

        <Reveal blur className="mt-20 mb-8">
          <h3 className="font-display text-2xl font-extrabold tracking-[-0.02em] md:text-3xl">{t.moreTitle}</h3>
        </Reveal>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const wide = i === 0;
            const last = i === projects.length - 1;
            return (
              <li key={p.id} className={wide ? "md:col-span-2 lg:col-span-3" : last ? "md:col-span-2 lg:col-span-1" : undefined}>
                <Reveal delay={wide ? 0 : (i - 1) * 0.08} className="h-full">
                  <ProjectCard copy={t.projects[p.id]} stack={p.stack} wide={wide} />
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
