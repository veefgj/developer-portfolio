import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { dictionaries, isLang, LANGS } from "@/content/translations";
import "../globals.css";

// Outfit has no Vietnamese glyphs, so headings use Plus Jakarta Sans.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter", display: "swap" });

// Skips the entry loader after the first page view of a browser session; runs before first paint.
const loaderOncePerSession = `try{var s=sessionStorage;if(s.getItem("pf-loaded"))document.documentElement.dataset.loaded="1";else s.setItem("pf-loaded","1")}catch(e){}`;

type Params = Promise<{ lang: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = dictionaries[lang].meta;
  return {
    // TODO(owner): set NEXT_PUBLIC_SITE_URL to the approved domain before deploying.
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3020"),
    title: t.title,
    description: t.description,
    alternates: { canonical: `/${lang}`, languages: { vi: "/vi", en: "/en" } },
    openGraph: { title: t.title, description: t.description, type: "website", locale: lang === "vi" ? "vi_VN" : "en_US" },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: loaderOncePerSession }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
