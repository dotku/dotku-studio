import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { CONSULTING_URL } from "@/data/services";
import { LangSwitcher } from "./LangSwitcher";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const home = `/${lang}`;
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <Link href={home} className="flex items-center gap-2 font-extrabold text-lg text-slate-900 shrink-0">
          <span className="inline-flex h-8 w-8 rounded-lg bg-brand-600 text-white items-center justify-center font-black">.K</span>
          <span className="hidden sm:inline">DotKu Studio</span>
          <span className="sm:hidden">DotKu</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href={`${home}#services`} className="hover:text-brand-600">{dict.nav.services}</a>
          <a href={`${home}#clients`} className="hover:text-brand-600">{dict.nav.clients}</a>
          <a href={`${home}#work`} className="hover:text-brand-600">{dict.nav.work}</a>
          <Link href={`/${lang}/about`} className="hover:text-brand-600">{dict.nav.about}</Link>
          <a href={`${home}#contact`} className="hover:text-brand-600">{dict.nav.contact}</a>
          <Link href={`/${lang}/repos`} className="hover:text-brand-600">{dict.nav.repos}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitcher current={lang} />
          <a
            href={CONSULTING_URL}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 transition"
          >
            {dict.cta.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
