"use client";

import type { MouseEvent } from "react";
import { LANGS, type Lang } from "@/content/translations";

/** VI/EN switch. Plain links (each language is its own static page); the choice is remembered in a cookie. */
export function LanguageToggle({ lang, label }: { lang: Lang; label: string }) {
  function onClick(e: MouseEvent<HTMLAnchorElement>, next: Lang) {
    document.cookie = `lang=${next}; path=/; max-age=31536000; samesite=lax`;
    if (window.location.hash) {
      e.preventDefault();
      window.location.assign(`/${next}${window.location.hash}`);
    }
  }

  return (
    <div role="group" aria-label={label} className="flex rounded-full border border-line bg-card/90 p-1 shadow-soft backdrop-blur">
      {LANGS.map((l) => (
        <a
          key={l}
          href={`/${l}`}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? "true" : undefined}
          onClick={(e) => onClick(e, l)}
          className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
            l === lang ? "bg-ink text-canvas" : "text-ink-soft hover:text-ink"
          }`}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
