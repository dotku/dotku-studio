import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import { LOCALES, LOCALE_META, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL, BRAND, KEYWORDS_BY_LOCALE, OG_LOCALES } from "@/config/site";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const keywords = KEYWORDS_BY_LOCALE[lang] ?? KEYWORDS_BY_LOCALE.en;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s | ${BRAND.name}`,
    },
    description: dict.meta.description,
    keywords,
    applicationName: BRAND.name,
    authors: [{ name: BRAND.legalName, url: SITE_URL }],
    creator: BRAND.legalName,
    publisher: BRAND.legalName,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        LOCALES.map((l) => [LOCALE_META[l].htmlLang, `/${l}`]),
      ),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALES[lang] ?? "en_US",
      alternateLocale: Object.values(OG_LOCALES).filter((l) => l !== OG_LOCALES[lang]),
      url: `${SITE_URL}/${lang}`,
      siteName: BRAND.name,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: `/${lang}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: BRAND.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`/${lang}/opengraph-image`],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const htmlLang = LOCALE_META[lang as Locale].htmlLang;

  return (
    <html lang={htmlLang} className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-white text-slate-800 antialiased flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
