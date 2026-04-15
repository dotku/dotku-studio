"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOCALES, LOCALE_META, type Locale } from "@/i18n/config";

export function LangSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function switchTo(locale: Locale) {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = locale;
    const next = "/" + segments.join("/");
    setOpen(false);
    router.push(next);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 hover:border-brand-400 px-3 py-2 text-sm font-semibold text-slate-700 bg-white"
      >
        <span aria-hidden="true">🌐</span>
        <span>{LOCALE_META[current].label}</span>
        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.06l3.71-3.83a.75.75 0 1 1 1.08 1.04l-4.25 4.39a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-44 rounded-lg border border-slate-200 bg-white shadow-lg py-1 text-sm z-50"
        >
          {LOCALES.map((code) => (
            <li key={code}>
              <button
                type="button"
                onClick={() => switchTo(code)}
                className={`w-full text-left px-3 py-2 hover:bg-slate-50 ${
                  code === current ? "font-semibold text-brand-700" : "text-slate-700"
                }`}
                role="option"
                aria-selected={code === current}
              >
                {LOCALE_META[code].label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
