import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  CATEGORY_ORDER,
  COSTS,
  formatUSD,
  groupByCategory,
  monthlyTotal,
  toMonthly,
  yearlyTotal,
} from "@/data/costs";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.costCenter.pageTitle,
    description: dict.costCenter.pageDescription,
    alternates: { canonical: `/${lang}/cost-center` },
    robots: { index: false, follow: false },
  };
}

export default async function CostCenterPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  const grouped = groupByCategory(COSTS);
  const totalMonthly = monthlyTotal(COSTS);
  const totalYearly = yearlyTotal(COSTS);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <section className="relative overflow-hidden hero-gradient border-b border-slate-200">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <Link
              href={`/${lang}`}
              className="text-sm font-semibold text-brand-700 hover:underline"
            >
              {dict.costCenter.backHome}
            </Link>
            <p className="mt-4 text-sm font-bold uppercase tracking-wider text-brand-600">
              {dict.costCenter.eyebrow}
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {dict.costCenter.heading}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
              {dict.costCenter.sub}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {dict.costCenter.totalMonthly}
                </p>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {formatUSD(totalMonthly)}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {dict.costCenter.totalYearly}
                </p>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {formatUSD(totalYearly)}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {CATEGORY_ORDER.map((category) => {
              const items = grouped[category];
              if (items.length === 0) return null;
              const categoryMonthly = monthlyTotal(items);
              return (
                <section key={category}>
                  <header className="flex items-end justify-between gap-3 mb-4">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {dict.costCenter.category[category]}
                    </h2>
                    <p className="text-sm text-slate-500">
                      {formatUSD(categoryMonthly)} / {dict.costCenter.mo}
                    </p>
                  </header>

                  <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <table className="min-w-full text-sm">
                      <thead className="bg-slate-50 text-slate-700">
                        <tr>
                          <th className="text-left font-semibold px-4 py-3">
                            {dict.costCenter.table.name}
                          </th>
                          <th className="text-left font-semibold px-4 py-3">
                            {dict.costCenter.table.frequency}
                          </th>
                          <th className="text-right font-semibold px-4 py-3">
                            {dict.costCenter.table.amount}
                          </th>
                          <th className="text-right font-semibold px-4 py-3">
                            {dict.costCenter.table.monthly}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {items.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-slate-900">
                              {item.url ? (
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener"
                                  className="hover:text-brand-600 hover:underline"
                                >
                                  {item.name}
                                </a>
                              ) : (
                                item.name
                              )}
                              {item.note && (
                                <span className="ml-2 text-xs font-normal text-slate-500">
                                  {item.note}
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-slate-600">
                              {dict.costCenter.frequency[item.frequency]}
                            </td>
                            <td className="px-4 py-3 text-right text-slate-700">
                              {formatUSD(item.amount)}
                            </td>
                            <td className="px-4 py-3 text-right font-bold text-slate-900">
                              {formatUSD(toMonthly(item))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <ul className="md:hidden space-y-3">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="rounded-xl border border-slate-200 bg-white p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900 truncate">
                              {item.url ? (
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener"
                                  className="hover:text-brand-600 hover:underline"
                                >
                                  {item.name}
                                </a>
                              ) : (
                                item.name
                              )}
                            </p>
                            <p className="mt-0.5 text-xs text-slate-500">
                              {dict.costCenter.frequency[item.frequency]}
                              {item.note ? ` · ${item.note}` : ""}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-bold text-slate-900">
                              {formatUSD(toMonthly(item))}
                            </p>
                            <p className="text-xs text-slate-500">
                              / {dict.costCenter.mo}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}

            <p className="text-xs text-slate-500">{dict.costCenter.footnote}</p>
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
