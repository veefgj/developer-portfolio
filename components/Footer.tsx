import { ArrowUp } from "lucide-react";
import type { Dict } from "@/content/translations";

export function Footer({ name, t }: { name: string; t: Dict["footer"] }) {
  return (
    <footer className="container-page flex flex-wrap items-center justify-between gap-4 pt-4 pb-28 text-sm text-ink-soft">
      <p>
        © {new Date().getFullYear()} {name}
      </p>
      <a href="#home" className="inline-flex items-center gap-1 font-semibold text-ink underline-offset-4 hover:underline">
        {t.backToTop}
        <ArrowUp className="size-4" aria-hidden="true" />
      </a>
    </footer>
  );
}
