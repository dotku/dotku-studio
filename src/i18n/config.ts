export const LOCALES = ["en", "zh", "zh-TW", "es", "ko", "ja"] as const;
export const DEFAULT_LOCALE: Locale = "en";

export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { label: string; htmlLang: string }> = {
  en: { label: "English", htmlLang: "en" },
  zh: { label: "简体中文", htmlLang: "zh-Hans" },
  "zh-TW": { label: "繁體中文", htmlLang: "zh-Hant" },
  es: { label: "Español", htmlLang: "es" },
  ko: { label: "한국어", htmlLang: "ko" },
  ja: { label: "日本語", htmlLang: "ja" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
