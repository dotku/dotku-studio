export type FeaturedProject = {
  slug: string;
  name: string;
  href: string;
  descKey: "video2text" | "sienovo" | "crm" | "hippa" | "mcn" | "search";
  tech?: string;
  techList: string[];
  client?: string;
  outcome?: string;
  year?: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: "video-to-text",
    name: "video-to-text",
    href: "https://github.com/dotku/video-to-text",
    descKey: "video2text",
    tech: "Python · OpenAI · Whisper",
    techList: ["Python", "OpenAI API", "Whisper", "FFmpeg", "CLI tooling"],
    client: "Internal · Content ops",
    outcome: "Used in production weekly for automated video transcription and content repurposing.",
    year: "2026",
  },
  {
    slug: "sienovo-intl",
    name: "sienovo-intl",
    href: "https://github.com/dotku/sienovo-intl",
    descKey: "sienovo",
    tech: "Next.js · MDX · i18n",
    techList: ["Next.js", "MDX", "Tailwind CSS", "URL-based i18n", "Vercel"],
    client: "Sienovo International",
    outcome: "Multilingual corporate portal supporting global sales across 4 languages.",
    year: "2026",
  },
  {
    slug: "crm-business-development-system",
    name: "crm-business-development-system",
    href: "https://github.com/dotku/crm-business-development-system",
    descKey: "crm",
    tech: "Next.js · Supabase",
    techList: ["Next.js", "Supabase", "TypeScript", "Auth", "Referral tracking"],
    client: "Internal · Sales enablement",
    outcome: "Lightweight CRM replacing spreadsheets for referral-driven BD workflows.",
    year: "2025",
  },
  {
    slug: "hippa-free-chat",
    name: "hippa-free-chat",
    href: "https://github.com/dotku/hippa-free-chat",
    descKey: "hippa",
    tech: "Next.js · HIPAA",
    techList: ["Next.js", "HIPAA-considerate design", "End-to-end encryption", "Audit logs"],
    client: "Medical partners",
    outcome: "Reference implementation for healthcare chat with HIPAA-aligned controls.",
    year: "2026",
  },
  {
    slug: "bayarea-mcn-platform",
    name: "bayarea-mcn-platform",
    href: "https://github.com/dotku/bayarea-mcn-platform",
    descKey: "mcn",
    tech: "Next.js · Creator tools",
    techList: ["Next.js", "Creator CMS", "Short-video analytics", "Multi-platform posting"],
    client: "Bay Area creator network",
    outcome: "Tooling adopted by Bay Area short-video creators for multi-channel distribution.",
    year: "2026",
  },
  {
    slug: "you.com-mini-search",
    name: "you.com-mini-search",
    href: "https://github.com/dotku/you.com-mini-search",
    descKey: "search",
    tech: "Next.js 15 · TypeScript",
    techList: ["Next.js 15", "TypeScript", "Search API aggregation", "Streaming UI"],
    client: "Open-source demo",
    outcome: "Educational reference for building lightweight search aggregators.",
    year: "2025",
  },
];
