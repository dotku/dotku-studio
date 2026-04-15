import type { Dictionary } from "@/i18n/dictionaries";
import { TEAM } from "@/data/team";

export function Team({ dict }: { dict: Dictionary }) {
  return (
    <section id="team" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            {dict.team.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {dict.team.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{dict.team.sub}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {TEAM.map((member) => {
            const m = dict.team.members[member.key];
            return (
              <article
                key={member.key}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-brand-300 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-14 w-14 shrink-0 rounded-full ${member.tone.bg} ${member.tone.fg} items-center justify-center text-xl font-black`}
                  >
                    {member.initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-xl text-slate-900 truncate">{member.name}</h3>
                    <p className="text-sm font-semibold text-brand-700 mt-0.5">{m.role}</p>
                  </div>
                </div>
                <dl className="mt-5 space-y-2 text-sm">
                  {member.email && (
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0 text-slate-500">✉️</dt>
                      <dd>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-slate-700 hover:text-brand-600 break-all"
                        >
                          {member.email}
                        </a>
                      </dd>
                    </div>
                  )}
                  {member.wechat && (
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0 text-slate-500">{dict.team.wechatLabel}</dt>
                      <dd className="text-slate-700 font-mono">{member.wechat}</dd>
                    </div>
                  )}
                  {member.github && (
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0 text-slate-500">GitHub</dt>
                      <dd>
                        <a
                          href={`https://github.com/${member.github}`}
                          target="_blank"
                          rel="noopener"
                          className="text-slate-700 hover:text-brand-600"
                        >
                          @{member.github}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
