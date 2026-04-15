import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SECTORS, TOTAL_REPOS } from "@/data/sectors";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.repos.pageTitle,
    description: dict.repos.pageDescription,
    alternates: { canonical: `/${lang}/repos` },
  };
}

export default async function ReposPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="relative overflow-hidden hero-gradient border-b border-slate-200">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <Link
              href={`/${lang}`}
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              {dict.repos.backHome}
            </Link>
            <p className="mt-4 text-sm font-bold uppercase tracking-wider text-brand-600">
              {dict.repos.heroEyebrow}
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {dict.repos.heroHeadingPrefix}
              <span className="text-brand-600">{dict.repos.heroHeadingAccent}</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
              {dict.repos.heroSubBefore}
              <a
                href="https://github.com/dotku"
                target="_blank"
                rel="noopener"
                className="text-brand-600 font-semibold hover:underline"
              >
                github.com/dotku
              </a>
              {dict.repos.heroSubMid}
              <a
                href="https://www.msci.com/our-solutions/indexes/gics"
                target="_blank"
                rel="noopener"
                className="text-brand-600 font-semibold hover:underline"
              >
                Global Industry Classification Standard
              </a>
              {dict.repos.heroSubAfter}
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {dict.repos.overviewHeading}
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="text-left font-semibold px-4 py-3">{dict.table.sector}</th>
                    <th className="text-left font-semibold px-4 py-3">{dict.table.group}</th>
                    <th className="text-right font-semibold px-4 py-3">{dict.table.count}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {SECTORS.map((sector) => {
                    const meta = dict.sector[sector.key];
                    const subDict = (
                      dict.sub as Record<string, Record<string, string> | undefined>
                    )[sector.key];
                    return (
                      <tr key={sector.key} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          <span className="mr-2" aria-hidden>
                            {sector.icon}
                          </span>
                          {meta.name}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {sector.subs && subDict
                            ? sector.subs
                                .map((s) => `${subDict[s.key]} (${s.count})`)
                                .join(" · ")
                            : "—"}
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-slate-900">
                          {sector.count}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-slate-100 font-bold">
                    <td className="px-4 py-3" colSpan={2}>
                      {dict.table.total}
                    </td>
                    <td className="px-4 py-3 text-right">{TOTAL_REPOS}+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {SECTORS.map((sector) => {
              const meta = dict.sector[sector.key];
              const subDict = (
                dict.sub as Record<string, Record<string, string> | undefined>
              )[sector.key];
              return (
                <article
                  key={sector.key}
                  id={sector.key}
                  className="scroll-mt-20 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
                >
                  <header className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-12 w-12 rounded-xl ${sector.badgeBg} ${sector.badgeFg} items-center justify-center text-2xl`}
                      >
                        {sector.icon}
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                          {meta.name}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">{meta.desc}</p>
                      </div>
                    </div>
                    <div className={`text-3xl font-extrabold ${sector.accentText}`}>
                      {sector.count}
                    </div>
                  </header>
                  {sector.subs && subDict && (
                    <div className="mt-4 flex flex-wrap gap-2 text-xs">
                      {sector.subs.map((sub) => (
                        <span
                          key={sub.key}
                          className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 font-medium"
                        >
                          {subDict[sub.key]} · {sub.count}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={sector.href}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
                  >
                    github.com/dotku →
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
