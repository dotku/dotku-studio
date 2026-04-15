import type { Dictionary } from "@/i18n/dictionaries";
import { TEAM } from "@/data/team";

export function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  const sales = TEAM.find((m) => m.key === "leo");
  const salesRole = dict.team.members.leo.role;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {sales && (
          <div className="grid gap-6 sm:grid-cols-2 pb-8 border-b border-slate-100">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {dict.nav.contact}
              </p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed max-w-md">
                {dict.contact.body}
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {salesRole}
              </p>
              <p className="mt-2 font-bold text-slate-900">{sales.name}</p>
              <dl className="mt-1 text-sm text-slate-600 space-y-0.5">
                {sales.email && (
                  <div className="sm:flex sm:justify-end sm:gap-2">
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${sales.email}`}
                        className="hover:text-brand-600 break-all"
                      >
                        {sales.email}
                      </a>
                    </dd>
                  </div>
                )}
                {sales.wechat && (
                  <div className="sm:flex sm:justify-end sm:gap-2">
                    <dt className="text-slate-500">{dict.team.wechatLabel}:</dt>
                    <dd className="font-mono">{sales.wechat}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        )}
        <div className="pt-6 space-y-3 text-sm text-slate-500">
          <p className="text-slate-600 font-medium">{dict.footer.parent}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p>© {year} JY Tech LLC · DotKu Studio</p>
            <p>
              {dict.footer.gicsBefore}
              <a
                href="https://www.msci.com/our-solutions/indexes/gics"
                target="_blank"
                rel="noopener"
                className="hover:text-brand-600"
              >
                {dict.footer.gicsLink}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
