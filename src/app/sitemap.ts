import type { MetadataRoute } from "next";
import { LOCALES, LOCALE_META } from "@/i18n/config";
import { SITE_URL } from "@/config/site";
import { FEATURED_PROJECTS } from "@/data/featured";

const STATIC_PAGES = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/repos", priority: 0.7, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_PAGES.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [LOCALE_META[l].htmlLang, `${SITE_URL}/${l}${page.path}`]),
        ),
      },
    })),
  );

  const caseStudyEntries = FEATURED_PROJECTS.flatMap((project) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}/case-studies/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [
            LOCALE_META[l].htmlLang,
            `${SITE_URL}/${l}/case-studies/${project.slug}`,
          ]),
        ),
      },
    })),
  );

  return [...staticEntries, ...caseStudyEntries];
}
