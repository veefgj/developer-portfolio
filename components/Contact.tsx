import { ArrowRight, ArrowUpRight, Bot } from "lucide-react";
import { profile } from "@/content/portfolio";
import type { Dict } from "@/content/translations";
import { CopyEmail } from "./CopyEmail";
import { MagneticButton } from "./motion/MagneticButton";
import { Reveal } from "./motion/Reveal";
import { Todo } from "./Todo";

export function Contact({ t }: { t: Dict["contact"] }) {
  const socials = [
    { href: profile.github, label: "GitHub" },
    { href: profile.linkedin, label: "LinkedIn" },
  ].filter((s): s is { href: string; label: string } => s.href !== null);

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[36px] bg-butter px-6 py-14 md:px-14 md:py-20">
          <span aria-hidden="true" className="absolute -top-24 -right-24 size-80 rounded-full bg-canvas/60" />
          <span aria-hidden="true" className="absolute -bottom-12 left-1/3 size-28 rounded-full bg-peach" />
          <div className="relative">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2
              id="contact-title"
              className="mt-4 max-w-[16ch] font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em]"
            >
              {t.title}
            </h2>
            <p className="mt-5 text-lg md:text-xl">{t.body}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {profile.email ? (
                <>
                  <div className="group relative">
                    <span
                      aria-hidden="true"
                      className="absolute -inset-1.5 rounded-full bg-accent transition-[scale] duration-500 ease-spring group-hover:scale-x-110 group-hover:scale-y-125"
                    />
                    <MagneticButton href={`mailto:${profile.email}`} className="btn btn-dark">
                      {t.emailCta}
                      <ArrowRight aria-hidden="true" />
                    </MagneticButton>
                  </div>
                  <CopyEmail email={profile.email} label={t.copy} copiedLabel={t.copied} />
                  <span className="w-full font-medium select-all sm:w-auto">{profile.email}</span>
                </>
              ) : (
                <Todo>email: content/portfolio.ts → profile.email</Todo>
              )}
            </div>

            {socials.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline">
                      {s.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-8">
                <Todo>GitHub / LinkedIn: profile.github, profile.linkedin</Todo>
              </div>
            )}

            {profile.showAssistantHint && (
              <p className="mt-10 flex max-w-[52ch] items-start gap-3 text-ink-soft">
                <Bot className="mt-0.5 size-5 flex-none text-ink" aria-hidden="true" />
                {t.assistantHint}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
