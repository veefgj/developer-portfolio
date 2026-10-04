// Language-independent facts. Anything left null is hidden in production and shows a TODO chip in
// `next dev`, so nothing unapproved (links, files, titles) ever ships by accident.
import type { JobId, Lang, ProjectId, StackCategory } from "./translations";

export const profile = {
  email: "vyphuongit@gmail.com" as string | null,
  github: "https://github.com/veefgj" as string | null,
  linkedin: "https://www.linkedin.com/in/veefgjit/" as string | null,
  /** Owner-approved public CV files (no phone, address or birth year). */
  cv: {
    vi: { pdf: "/cv/NguyenViPhuong_CV_VI.pdf", preview: "/cv/preview-vi.jpg" },
    en: { pdf: "/cv/NguyenViPhuong_CV_EN.pdf", preview: "/cv/preview-en.jpg" },
  } satisfies Record<Lang, { pdf: string; preview: string }>,
  /** Set to true once the HelpFlow chatbot is embedded (see README.md). */
  showAssistantHint: false,
};

export const stack: { category: StackCategory; items: string[] }[] = [
  { category: "frontend", items: ["React", "Next.js", "Vue", "TypeScript"] },
  { category: "backend", items: ["Node.js", "NestJS", "GraphQL"] },
  { category: "data", items: ["PostgreSQL", "pgvector", "Redis"] },
  { category: "realtimeAi", items: ["Socket.IO", "OpenAI API", "RAG"] },
  { category: "infra", items: ["Docker", "JWT", "Webhooks", "LINE WORKS", "Kintone"] },
];

export const jobs: { id: JobId; company: string; start: string; end: string | null; title: string | null; tags: string[] }[] = [
  { id: "protean", company: "Protean Studios", start: "05/2025", end: null, title: "Full-stack Developer", tags: ["GraphQL", "Reszaiko", "JWT", "Webhooks", "Redis"] },
  { id: "tiah", company: "Tiah Vietnam", start: "06/2024", end: "04/2025", title: "Frontend Developer", tags: ["React", "Vue", "LINE WORKS", "Kintone"] },
];

export const helpflow = {
  stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL / pgvector", "OpenAI API", "Socket.IO", "Docker"],
  repoUrl: "https://github.com/veefgj/helpflow-ai" as string | null,
  /** TODO(owner): only once a public demo exists. */
  demoUrl: null as string | null,
};

export const projects: { id: ProjectId; stack: string[] }[] = [
  { id: "booking", stack: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL", "PostgreSQL", "TypeORM", "Redis", "REST APIs"] },
  { id: "globalb", stack: ["JavaScript", "jQuery", "Kintone", "LINE WORKS (WOFF)", "Node.js", "AWS"] },
  { id: "seikastudo", stack: ["Vue.js", "WordPress", "PHP", "Nginx"] },
  { id: "reactApps", stack: ["React", "TypeScript"] },
];
