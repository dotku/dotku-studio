import type { Dictionary } from "@/i18n/dictionaries";
import { PARTNER_GROUPS } from "@/data/partners";

export function Partners({ dict }: { dict: Dictionary }) {
  return (
    <section id="clients" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            {dict.partners.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {dict.partners.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{dict.partners.sub}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNER_GROUPS.map((group) => (
            <article
              key={group.key}
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 rounded-xl ${group.tone.bg} ${group.tone.fg} items-center justify-center text-xl`}
                >
                  {group.icon}
                </span>
                <h3 className="font-bold text-lg text-slate-900">{dict.partners[group.key]}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {group.partners.map((p) => (
                  <li key={p.name} className="flex items-start gap-2">
                    {p.tagKey && (
                      <span className="inline-block w-16 shrink-0 text-xs text-slate-500">
                        {dict.partners.tag[p.tagKey]}
                      </span>
                    )}
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener"
                        className="hover:text-brand-600"
                      >
                        {p.name}
                      </a>
                    ) : (
                      <span>{p.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
