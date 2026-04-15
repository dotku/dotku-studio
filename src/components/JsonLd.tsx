import { BRAND, SITE_URL } from "@/config/site";
import { LOCALES } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function JsonLd({
  lang,
  dict,
  pageType = "home",
}: {
  lang: string;
  dict: Dictionary;
  pageType?: "home" | "about";
}) {
  const baseUrl = `${SITE_URL}/${lang}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: BRAND.name,
    alternateName: [BRAND.legalName, "DotKu"],
    url: SITE_URL,
    logo: `${SITE_URL}/icon`,
    description: dict.meta.description,
    parentOrganization: {
      "@type": "Organization",
      name: BRAND.parentName,
      legalName: BRAND.legalName,
    },
    foundingDate: String(BRAND.foundingYear),
    sameAs: [BRAND.github, BRAND.consultingUrl],
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressLocality: BRAND.locality,
      addressCountry: BRAND.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: BRAND.email,
        name: "Leo Liu",
        availableLanguage: ["en", "zh", "zh-Hant", "es", "ko", "ja"],
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Enterprise Software",
      "Next.js",
      "React",
      "Multilingual E-commerce",
      "Technical Due Diligence",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: BRAND.name,
    inLanguage: lang,
    publisher: { "@id": `${SITE_URL}#organization` },
    alternateName: LOCALES.map((l) => `${BRAND.name} (${l})`),
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#service`,
    name: BRAND.name,
    url: baseUrl,
    description: dict.services.sub,
    areaServed: { "@type": "Place", name: "Worldwide" },
    serviceType: [
      dict.services.items.ai.title,
      dict.services.items.enterprise.title,
      dict.services.items.global.title,
      dict.services.items.advisory.title,
    ],
    provider: { "@id": `${SITE_URL}#organization` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: BRAND.name,
        item: baseUrl,
      },
      ...(pageType === "about"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: dict.nav.about,
              item: `${baseUrl}/about`,
            },
          ]
        : []),
    ],
  };

  const graph = [organization, website, professionalService, breadcrumb];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
