import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { FEATURED_PROJECTS } from "@/data/featured";

export function Featured({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            {dict.featured.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {dict.featured.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{dict.featured.sub}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              {p.tech && (
                <p className="mt-4 text-xs text-slate-500 font-medium">{p.tech}</p>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={`/${lang}/case-studies`}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3 transition"
          >
            <span>{dict.featured.viewAll}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
