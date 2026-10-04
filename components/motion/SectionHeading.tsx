import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <Reveal blur className="mb-10 md:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="mt-4 max-w-[18ch] font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.08] font-extrabold tracking-[-0.025em]"
      >
        {title}
      </h2>
    </Reveal>
  );
}
