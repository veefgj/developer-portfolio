import type { ReactNode } from "react";

/** Marks owner-supplied data that is still missing. Visible in `next dev`, rendered as nothing in production. */
export function Todo({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-peach px-2 py-1 font-sans text-xs font-semibold tracking-normal text-ink normal-case">
      TODO · {children}
    </span>
  );
}
