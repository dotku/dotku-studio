import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Contact({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{dict.contact.heading}</h2>
        <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">{dict.contact.body}</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:leo.liu@jytech.us"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 hover:bg-slate-200 font-semibold px-5 py-3 transition"
          >
            ✉️ leo.liu@jytech.us
          </a>
          <a
            href="https://github.com/dotku"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-white font-semibold px-5 py-3 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            @dotku
          </a>
          <Link
            href={`/${lang}/repos`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-white font-semibold px-5 py-3 transition"
          >
            <span aria-hidden>📚</span> <span>{dict.contact.repos}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
