import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SECTORS } from "@/data/sectors";

type SubGroupKey = keyof Dictionary["sub"];

export function Projects({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section id="projects" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            {dict.projects.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {dict.projects.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            {dict.projects.subBefore}
            <a
              href="https://www.msci.com/our-solutions/indexes/gics"
              target="_blank"
              rel="noopener"
              className="text-brand-600 font-semibold hover:underline"
            >
              {dict.projects.subLink}
            </a>
            {dict.projects.subAfter}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => {
            const meta = dict.sector[sector.key];
            const subDict = (dict.sub as Record<SubGroupKey, Record<string, string>>)[
              sector.key as SubGroupKey
            ];
            return (
              <Link
                key={sector.key}
                href={`/${lang}/repos#${sector.key}`}
                className="block rounded-2xl bg-white border border-slate-200 p-6 hover:border-brand-400 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`inline-flex h-10 w-10 rounded-xl ${sector.badgeBg} ${sector.badgeFg} items-center justify-center text-xl`}
                  >
                    {sector.icon}
                  </span>
                  <span className={`text-3xl font-extrabold ${sector.accentText}`}>
                    {sector.count}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-lg text-slate-900">{meta.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{meta.desc}</p>
                {sector.subs && subDict && (
                  <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
                    {sector.subs.map((sub) => (
                      <span
                        key={sub.key}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700"
                      >
                        {subDict[sub.key]} · {sub.count}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/${lang}/repos`}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3 transition"
          >
            <span>{dict.projects.browse}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
