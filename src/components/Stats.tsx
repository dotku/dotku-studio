import type { Dictionary } from "@/i18n/dictionaries";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section id="stats" className="border-y border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              {dict.stats.clients}
            </dt>
            <dd className="mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900">30+</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              {dict.stats.industries}
            </dt>
            <dd className="mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900">9</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              {dict.stats.repos}
            </dt>
            <dd className="mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900">865+</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              {dict.stats.years}
            </dt>
            <dd className="mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900">13+</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
