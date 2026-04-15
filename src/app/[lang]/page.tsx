import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Partners } from "@/components/Partners";
import { Projects } from "@/components/Projects";
import { Featured } from "@/components/Featured";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { Footer } from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <JsonLd lang={lang} dict={dict} pageType="home" />
      <Header lang={lang} dict={dict} />
      <main id="top" className="flex-1">
        <Hero lang={lang} dict={dict} />
        <Stats dict={dict} />
        <Services dict={dict} />
        <Partners dict={dict} />
        <Featured lang={lang} dict={dict} />
        <Projects lang={lang} dict={dict} />
        <Contact lang={lang} dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
