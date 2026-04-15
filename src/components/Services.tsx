import type { Dictionary } from "@/i18n/dictionaries";
import { SERVICES } from "@/data/services";

export function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            {dict.services.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {dict.services.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{dict.services.sub}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc) => {
            const item = dict.services.items[svc.key];
            const className =
              "group rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-lg transition";
            const inner = (
              <>
                <span
                  className={`inline-flex h-11 w-11 rounded-xl ${svc.tone.bg} ${svc.tone.fg} items-center justify-center text-2xl`}
                >
                  {svc.icon}
                </span>
                <h3 className="mt-4 font-bold text-lg text-slate-900 group-hover:text-brand-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                {svc.href && (
                  <p className="mt-4 text-xs font-semibold text-brand-700 group-hover:underline">
                    {dict.services.learnMore} →
                  </p>
                )}
              </>
            );
            return svc.href ? (
              <a
                key={svc.key}
                href={svc.href}
                target="_blank"
                rel="noopener"
                className={`${className} block`}
              >
                {inner}
              </a>
            ) : (
              <article key={svc.key} className={className}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
