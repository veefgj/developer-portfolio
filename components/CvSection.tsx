import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";
import { profile } from "@/content/portfolio";
import type { Dict, Lang } from "@/content/translations";
import { ProjectTiltCard } from "./motion/ProjectTiltCard";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./motion/SectionHeading";

// The PDF opens in the browser's own viewer (works on desktop and mobile, unlike an inline <iframe>).
export function CvSection({ lang, t }: { lang: Lang; t: Dict["cv"] }) {
  const cv = profile.cv[lang];
  const other = profile.cv[lang === "vi" ? "en" : "vi"];

  return (
    <section id="cv" aria-labelledby="cv-title" className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading id="cv-title" eyebrow={t.eyebrow} title={t.title} />
          <Reveal>
            <p className="max-w-[46ch] text-lg leading-relaxed">{t.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={cv.pdf} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FileText aria-hidden="true" />
                {t.view}
              </a>
              <a href={cv.pdf} download className="btn btn-ghost">
                {t.download}
                <ArrowDown aria-hidden="true" />
              </a>
            </div>
            <a
              href={other.pdf}
              target="_blank"
              rel="noreferrer"
              hrefLang={lang === "vi" ? "en" : "vi"}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
            >
              {t.otherLabel}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative lg:col-span-6">
          <span aria-hidden="true" className="absolute inset-x-[8%] -inset-y-[4%] rounded-[36px] bg-butter" />
          <ProjectTiltCard className="relative mx-auto w-full max-w-[26rem] rotate-2 rounded-[18px]">
            <a
              href={cv.pdf}
              target="_blank"
              rel="noreferrer"
              aria-label={t.view}
              className="block overflow-hidden rounded-[18px] bg-card shadow-lift ring-1 ring-line"
            >
              <Image
                src={cv.preview}
                alt={t.previewAlt}
                width={989}
                height={1400}
                sizes="(min-width: 1024px) 416px, 90vw"
                className="h-auto w-full"
              />
            </a>
          </ProjectTiltCard>
        </Reveal>
      </div>
    </section>
  );
}
