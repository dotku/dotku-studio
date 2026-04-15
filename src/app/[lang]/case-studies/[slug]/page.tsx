import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, LOCALES, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { FEATURED_PROJECTS } from "@/data/featured";
import { SITE_URL, BRAND } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    FEATURED_PROJECTS.map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  const dict = await getDictionary(lang);
  const desc = dict.featured.projects[project.descKey];
  return {
    title: `${project.name} — ${dict.caseStudy.pageTitle}`,
    description: desc,
    alternates: {
      canonical: `/${lang}/case-studies/${slug}`,
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `/${l}/case-studies/${slug}`]),
      ),
    },
    openGraph: {
      title: project.name,
      description: desc,
      type: "article",
      url: `${SITE_URL}/${lang}/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  const dict = await getDictionary(lang as Locale);
  const desc = dict.featured.projects[project.descKey];

  const related = FEATURED_PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/${lang}/case-studies/${slug}`,
    headline: project.name,
    description: desc,
    url: `${SITE_URL}/${lang}/case-studies/${slug}`,
    datePublished: project.year ? `${project.year}-01-01` : undefined,
    author: { "@type": "Organization", name: BRAND.name, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon` },
    },
    inLanguage: lang,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${lang}/case-studies/${slug}` },
    keywords: project.techList.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="relative overflow-hidden hero-gradient border-b border-slate-200">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <Link
              href={`/${lang}/case-studies`}
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              {dict.caseStudy.backToList}
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="rounded-full bg-white/80 border border-brand-200 px-2.5 py-0.5 text-brand-700">
                {dict.caseStudy.eyebrow}
              </span>
              {project.year && (
                <span className="rounded-full bg-white/80 border border-slate-200 px-2.5 py-0.5">
                  {dict.caseStudy.yearLabel}: {project.year}
                </span>
              )}
              {project.client && (
                <span className="rounded-full bg-white/80 border border-slate-200 px-2.5 py-0.5">
                  {dict.caseStudy.clientLabel}: {project.client}
                </span>
              )}
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight break-all">
              {project.name}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
              {desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                {dict.caseStudy.viewOnGithub}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-3 transition"
              >
                {dict.caseStudy.exploreCta} →
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 sm:grid-cols-3">
            <div className="sm:col-span-2 space-y-10">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  {dict.caseStudy.overviewLabel}
                </h2>
                <p className="mt-3 text-lg text-slate-700 leading-relaxed">{desc}</p>
              </div>
              {project.outcome && (
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600">
                    {dict.caseStudy.outcomeLabel}
                  </h2>
                  <p className="mt-3 text-lg text-slate-700 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 h-fit">
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600">
                {dict.caseStudy.techLabel}
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                {project.techList.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {dict.caseStudy.moreLabel}
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${lang}/case-studies/${r.slug}`}
                    className="group rounded-2xl bg-white border border-slate-200 p-5 hover:border-brand-400 hover:shadow-lg transition"
                  >
                    <h3 className="font-bold text-slate-900 group-hover:text-brand-700 break-all">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                      {dict.featured.projects[r.descKey]}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer dict={dict} />
    </>
  );
}
