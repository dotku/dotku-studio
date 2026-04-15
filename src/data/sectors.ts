export type SectorKey = "it" | "cd" | "ind" | "com" | "fin" | "hc" | "en" | "cs" | "re";

export type SubKey =
  | { sector: "it"; keys: ["app", "infra", "sys"] }
  | { sector: "cd"; keys: ["retail", "services", "apparel"] }
  | { sector: "ind"; keys: ["prof", "cap", "trans"] }
  | { sector: "com"; keys: ["interactive", "media", "telecom"] }
  | { sector: "fin"; keys: ["services"] }
  | { sector: "hc"; keys: ["equip", "bio"] };

export type Sector = {
  key: SectorKey;
  count: number;
  icon: string;
  accentText: string;
  badgeBg: string;
  badgeFg: string;
  href: string;
  subs?: { key: string; count: number }[];
};

export const SECTORS: Sector[] = [
  {
    key: "it",
    count: 432,
    icon: "💻",
    accentText: "text-brand-600",
    badgeBg: "bg-brand-100",
    badgeFg: "text-brand-700",
    href: "https://github.com/dotku?tab=repositories",
    subs: [
      { key: "app", count: 431 },
      { key: "infra", count: 15 },
      { key: "sys", count: 7 },
    ],
  },
  {
    key: "cd",
    count: 48,
    icon: "🛍️",
    accentText: "text-rose-600",
    badgeBg: "bg-rose-100",
    badgeFg: "text-rose-700",
    href: "https://github.com/dotku?tab=repositories",
    subs: [
      { key: "retail", count: 21 },
      { key: "services", count: 17 },
      { key: "apparel", count: 4 },
    ],
  },
  {
    key: "ind",
    count: 37,
    icon: "🏭",
    accentText: "text-amber-600",
    badgeBg: "bg-amber-100",
    badgeFg: "text-amber-700",
    href: "https://github.com/dotku?tab=repositories",
    subs: [
      { key: "prof", count: 24 },
      { key: "cap", count: 10 },
      { key: "trans", count: 2 },
    ],
  },
  {
    key: "com",
    count: 43,
    icon: "📡",
    accentText: "text-pink-600",
    badgeBg: "bg-pink-100",
    badgeFg: "text-pink-700",
    href: "https://github.com/dotku?tab=repositories",
    subs: [
      { key: "interactive", count: 23 },
      { key: "media", count: 10 },
      { key: "telecom", count: 2 },
    ],
  },
  {
    key: "fin",
    count: 33,
    icon: "💰",
    accentText: "text-indigo-600",
    badgeBg: "bg-indigo-100",
    badgeFg: "text-indigo-700",
    href: "https://github.com/dotku?tab=repositories",
    subs: [{ key: "services", count: 28 }],
  },
  {
    key: "hc",
    count: 17,
    icon: "🩺",
    accentText: "text-emerald-600",
    badgeBg: "bg-emerald-100",
    badgeFg: "text-emerald-700",
    href: "https://github.com/dotku?tab=repositories",
    subs: [
      { key: "equip", count: 13 },
      { key: "bio", count: 1 },
    ],
  },
  {
    key: "en",
    count: 5,
    icon: "⚡",
    accentText: "text-yellow-600",
    badgeBg: "bg-yellow-100",
    badgeFg: "text-yellow-700",
    href: "https://github.com/dotku?tab=repositories",
  },
  {
    key: "cs",
    count: 1,
    icon: "🥤",
    accentText: "text-lime-600",
    badgeBg: "bg-lime-100",
    badgeFg: "text-lime-700",
    href: "https://github.com/dotku?tab=repositories",
  },
  {
    key: "re",
    count: 1,
    icon: "🏠",
    accentText: "text-teal-600",
    badgeBg: "bg-teal-100",
    badgeFg: "text-teal-700",
    href: "https://github.com/dotku?tab=repositories",
  },
];

export const TOTAL_REPOS = 865;
