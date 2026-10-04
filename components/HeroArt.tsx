import Image from "next/image";
import portrait from "@/public/portrait.jpg";

// Hero composition: round portrait over a floating butter blob, with orbiting sparkle and two mini
// cards. Geometry floats via CSS only (static under reduced motion). The mini cards repeat facts from
// Experience and Work, so everything except the portrait is aria-hidden.

const SPARKLE = "M50 0 C55 35 65 45 100 50 C65 55 55 65 50 100 C45 65 35 55 0 50 C35 45 45 35 50 0Z";
const BLOB =
  "M44.7,-61.4C57.1,-52.3,66,-38.4,71.1,-23.1C76.2,-7.8,77.5,8.9,72.1,23.3C66.7,37.7,54.6,49.8,40.6,58.6C26.6,67.4,10.7,72.9,-5.8,74.4C-22.3,75.9,-39.4,73.4,-51.6,64.3C-63.8,55.2,-71.1,39.5,-74.7,23.2C-78.3,6.9,-78.2,-10,-72.3,-24.4C-66.4,-38.8,-54.7,-50.7,-41.2,-59.6C-27.7,-68.5,-12.4,-74.4,1.9,-77C16.2,-79.6,32.3,-70.5,44.7,-61.4Z";

function MiniCard({ label, title, sub, className }: { label: string; title: string; sub: string; className: string }) {
  return (
    <div aria-hidden="true" className={`absolute z-20 grid gap-0.5 rounded-[18px] bg-card px-4 py-3 shadow-lift ${className}`}>
      <span className="text-[0.65rem] font-semibold tracking-[0.08em] text-ink-soft uppercase">{label}</span>
      <span className="font-display text-[clamp(0.85rem,1.6vw,1rem)] font-bold">{title}</span>
      <span className="text-xs text-ink-soft">{sub}</span>
    </div>
  );
}

export function HeroArt({ now, featured, portraitAlt }: { now: string; featured: string; portraitAlt: string }) {
  return (
    <div className="art-in relative mx-auto aspect-square w-full max-w-[min(100%,30rem)] lg:max-w-none">
      <svg aria-hidden="true" viewBox="0 0 200 200" className="float-slow absolute inset-[2%] size-[96%] fill-butter">
        <path d={BLOB} transform="translate(100 100)" />
      </svg>
      <div aria-hidden="true" className="orbit absolute inset-[13%]">
        <svg viewBox="0 0 100 100" className="absolute -top-2.5 left-1/2 size-5 -translate-x-1/2 fill-deep">
          <path d={SPARKLE} />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 z-10 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-card shadow-lift ring-[6px] ring-card">
        <Image
          src={portrait}
          alt={portraitAlt}
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 300px, 55vw"
          className="object-cover"
        />
      </div>

      <span aria-hidden="true" className="float absolute bottom-[6%] left-[16%] aspect-square w-[14%] rounded-full bg-peach" />
      <MiniCard label={now} title="Protean Studios" sub="Booking & e-commerce" className="float top-[12%] left-0 -rotate-3" />
      <MiniCard label={featured} title="HelpFlow AI" sub="RAG · Realtime handoff" className="float-slow right-0 bottom-[10%] rotate-[2.5deg]" />
      <svg aria-hidden="true" viewBox="0 0 100 100" className="float absolute top-[4%] right-[14%] z-20 size-[clamp(2rem,4vw,2.75rem)] fill-deep">
        <path d={SPARKLE} />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 100 100" className="float-slow absolute right-[10%] bottom-[2%] size-[clamp(1.25rem,2.4vw,1.65rem)] fill-accent">
        <path d={SPARKLE} />
      </svg>
    </div>
  );
}
