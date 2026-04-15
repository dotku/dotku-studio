import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { FEATURED_PROJECTS } from "@/data/featured";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.caseStudy.pageTitle,
    description: dict.caseStudy.pageDescription,
    alternates: { canonical: `/${lang}/case-studies` },
  };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="relative overflow-hidden hero-gradient border-b border-slate-200">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
              {dict.caseStudy.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {dict.caseStudy.heading}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
              {dict.caseStudy.sub}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_PROJECTS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${lang}/case-studies/${p.slug}`}
                  className="group flex flex-col rounded-2xl bg-white border border-slate-200 p-6 hover:border-brand-400 hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-700 break-all">
                      {p.name}
                    </h3>
                    {p.year && (
                      <span className="shrink-0 text-xs font-semibold text-slate-500 rounded-full bg-slate-100 px-2 py-0.5">
                        {p.year}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {dict.featured.projects[p.descKey]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.techList.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 text-xs font-semibold text-brand-700 group-hover:underline">
                    {dict.caseStudy.overviewLabel} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
