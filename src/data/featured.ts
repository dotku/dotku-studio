export type FeaturedProject = {
  slug: string;
  name: string;
  href: string;
  descKey: "video2text" | "sienovo" | "crm" | "hippa" | "mcn" | "search";
  tech?: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: "video-to-text",
    name: "video-to-text",
    href: "https://github.com/dotku/video-to-text",
    descKey: "video2text",
    tech: "Python · OpenAI · Whisper",
  },
  {
    slug: "sienovo-intl",
    name: "sienovo-intl",
    href: "https://github.com/dotku/sienovo-intl",
    descKey: "sienovo",
    tech: "Next.js · MDX · i18n",
  },
  {
    slug: "crm-business-development-system",
    name: "crm-business-development-system",
    href: "https://github.com/dotku/crm-business-development-system",
    descKey: "crm",
    tech: "Next.js · Supabase",
  },
  {
    slug: "hippa-free-chat",
    name: "hippa-free-chat",
    href: "https://github.com/dotku/hippa-free-chat",
    descKey: "hippa",
    tech: "Next.js · HIPAA",
  },
  {
    slug: "bayarea-mcn-platform",
    name: "bayarea-mcn-platform",
    href: "https://github.com/dotku/bayarea-mcn-platform",
    descKey: "mcn",
    tech: "Next.js · Creator tools",
  },
  {
    slug: "you.com-mini-search",
    name: "you.com-mini-search",
    href: "https://github.com/dotku/you.com-mini-search",
    descKey: "search",
    tech: "Next.js 15 · TypeScript",
  },
];
