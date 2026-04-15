import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  en: () => import("./messages/en.json").then((m) => m.default),
  zh: () => import("./messages/zh.json").then((m) => m.default),
  "zh-TW": () => import("./messages/zh-TW.json").then((m) => m.default),
  es: () => import("./messages/es.json").then((m) => m.default),
  ko: () => import("./messages/ko.json").then((m) => m.default),
  ja: () => import("./messages/ja.json").then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
