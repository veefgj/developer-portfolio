import { ArrowDown, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { Dict } from "@/content/translations";
import { HeroArt } from "./HeroArt";
import { MagneticButton } from "./motion/MagneticButton";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero({ t, cvUrl }: { t: Dict["hero"]; cvUrl: string }) {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative scroll-mt-0 pt-28 pb-16 sm:pt-36 md:pb-24 lg:pt-40">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <p className="eyebrow rise" style={step(0)}>
            {t.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-display text-[clamp(3rem,10vw,6.25rem)] leading-[0.98] font-extrabold tracking-[-0.045em]"
          >
            <span className="rise block text-[0.42em] leading-tight font-semibold tracking-[-0.02em]" style={step(1)}>
              {t.greeting}
            </span>{" "}
            <span className="rise block" style={step(2)}>
              <span className="hl hl-in">{t.name}</span>
            </span>
          </h1>
          <p className="rise mt-6 max-w-[34rem] text-lg leading-relaxed md:text-xl" style={step(3)}>
            {t.lead}
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={step(4)}>
            <MagneticButton href="#work" spark className="btn btn-primary">
              {t.viewWork}
              <ArrowRight aria-hidden="true" />
            </MagneticButton>
            <a href={cvUrl} download className="btn btn-ghost">
              {t.downloadCv}
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <HeroArt now={t.now} featured={t.featured} portraitAlt={t.portraitAlt} />
        </div>
      </div>
    </section>
  );
}
