import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.about.pageTitle,
    description: dict.about.pageDescription,
    alternates: { canonical: `/${lang}/about` },
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <JsonLd lang={lang} dict={dict} pageType="about" />
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="relative overflow-hidden hero-gradient border-b border-slate-200">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
              {dict.about.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {dict.about.heading}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              {dict.about.sub}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {dict.footer.parent}
            </p>
          </div>
        </section>

        <Stats dict={dict} />

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {dict.about.missionHeading}
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {dict.about.missionBody}
            </p>
          </div>
        </section>

        <Team dict={dict} />
        <Contact lang={lang} dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
