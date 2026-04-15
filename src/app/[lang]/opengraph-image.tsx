import { ImageResponse } from "next/og";
import { isLocale, LOCALES } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { BRAND } from "@/config/site";

export const alt = "DotKu Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang = isLocale(lang) ? lang : "en";
  const dict = await getDictionary(safeLang);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(900px 500px at 20% 0%, rgba(47,123,255,0.25), transparent 60%), radial-gradient(700px 400px at 110% 20%, rgba(236,72,153,0.18), transparent 60%), #ffffff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#1c5ff0",
              color: "white",
              fontSize: 48,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: -3,
            }}
          >
            .K
          </div>
          <div style={{ fontSize: 34, fontWeight: 800, color: "#0f172a" }}>
            {BRAND.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            {dict.meta.title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#475569",
              lineHeight: 1.4,
              maxWidth: 1000,
            }}
          >
            {dict.hero.body.slice(0, 180)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#64748b",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>30+ Clients</span>
            <span>·</span>
            <span>9 Industries</span>
            <span>·</span>
            <span>865+ OSS</span>
          </div>
          <div style={{ fontWeight: 700, color: "#1c5ff0" }}>
            JY Tech LLC
          </div>
        </div>
      </div>
    ),
    size,
  );
}
