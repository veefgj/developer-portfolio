# Portfolio — Nguyễn Vi Phượng

One-page bilingual (VI/EN) personal portfolio. Static Next.js App Router app with Tailwind CSS and Motion; no backend.

```bash
pnpm install
pnpm dev         # http://localhost:3020 (redirects to /vi or /en)
pnpm typecheck
pnpm build
```

## Content

Facts live in `content/portfolio.ts` (links, CV files, jobs, projects, stack) and `content/translations.ts` (all
VI/EN copy). A value left `null` shows a **TODO** chip in `pnpm dev` and is hidden in production builds.
CVs are `public/cv/NguyenViPhuong_CV_{VI,EN}.pdf` with page-1 previews `preview-{vi,en}.jpg`; replace all four
together when the CV changes.

## Deploy

Deployed on Vercel (framework preset: Next.js, no extra configuration).
