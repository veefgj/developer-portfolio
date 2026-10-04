import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CvSection } from "@/components/CvSection";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Loader } from "@/components/motion/Loader";
import { profile } from "@/content/portfolio";
import { dictionaries, isLang } from "@/content/translations";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <>
      <Loader />
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-ink px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t.skipToContent}
      </a>
      <Header lang={lang} t={t.nav} />
      <main id="main">
        <Hero t={t.hero} cvUrl={profile.cv[lang].pdf} />
        <About t={t.about} />
        <TechStack t={t.stack} />
        <Experience t={t.experience} />
        <Projects t={t.work} />
        <CvSection lang={lang} t={t.cv} />
        <Contact t={t.contact} />
      </main>
      <Footer name={t.name} t={t.footer} />
    </>
  );
}
