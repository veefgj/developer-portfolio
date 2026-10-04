import { stack } from "@/content/portfolio";
import type { Dict } from "@/content/translations";
import { Marquee } from "./motion/Marquee";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./motion/SectionHeading";

export function TechStack({ t }: { t: Dict["stack"] }) {
  const all = stack.flatMap((c) => c.items);
  return (
    <section id="stack" aria-labelledby="stack-title" className="section overflow-x-clip">
      <div className="container-page">
        <SectionHeading id="stack-title" eyebrow={t.eyebrow} title={t.title} />
      </div>
      <div className="-rotate-[1.5deg] border-y-2 border-ink bg-butter py-4">
        <Marquee items={all} />
      </div>
      <ul className="container-page mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stack.map((c, i) => (
          <li key={c.category} className={i === stack.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}>
            <Reveal delay={i * 0.06} className="card h-full p-5">
              <h3 className="text-xs font-semibold tracking-[0.08em] text-ink-soft uppercase">{t.categories[c.category]}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
