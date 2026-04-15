export type ServiceKey = "ai" | "enterprise" | "global" | "advisory";

export type Service = {
  key: ServiceKey;
  icon: string;
  href?: string;
  tone: { bg: string; fg: string };
};

export const CONSULTING_URL = "https://consulting.jytech.us/";

export const SERVICES: Service[] = [
  { key: "ai", icon: "🧠", tone: { bg: "bg-brand-100", fg: "text-brand-700" } },
  { key: "enterprise", icon: "🏢", tone: { bg: "bg-indigo-100", fg: "text-indigo-700" } },
  { key: "global", icon: "🌐", tone: { bg: "bg-emerald-100", fg: "text-emerald-700" } },
  { key: "advisory", icon: "🧭", href: CONSULTING_URL, tone: { bg: "bg-amber-100", fg: "text-amber-700" } },
];
