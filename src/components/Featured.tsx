import type { Dictionary } from "@/i18n/dictionaries";
import { FEATURED_PROJECTS } from "@/data/featured";

export function Featured({ dict }: { dict: Dictionary }) {
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
            <a
              key={p.slug}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="group flex flex-col rounded-2xl bg-white border border-slate-200 p-6 hover:border-brand-400 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-brand-700">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {dict.featured.projects[p.descKey]}
              </p>
              {p.tech && (
                <p className="mt-4 text-xs text-slate-500 font-medium">{p.tech}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
