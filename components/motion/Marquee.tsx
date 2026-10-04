// CSS-only loop (globals.css `.marquee`): pauses on hover, hidden under reduced motion. Decorative —
// the same skills are listed in the categorized grid, so the band is aria-hidden.
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={`marquee ${className ?? ""}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-3 pr-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold tracking-[-0.02em] whitespace-nowrap"
              >
                {item}
                <svg viewBox="0 0 100 100" className="size-4 fill-ink" aria-hidden="true">
                  <path d="M50 0 C55 35 65 45 100 50 C65 55 55 65 50 100 C45 65 35 55 0 50 C35 45 45 35 50 0Z" />
                </svg>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
