import type { Dictionary } from "@/i18n/dictionaries";
import { VENDORS, type VendorCategory } from "@/data/vendors";

const CATEGORY_META: Record<
  VendorCategory,
  { icon: string; tone: { bg: string; fg: string } }
> = {
  cloud: { icon: "☁️", tone: { bg: "bg-sky-100", fg: "text-sky-700" } },
  ai: { icon: "🧠", tone: { bg: "bg-brand-100", fg: "text-brand-700" } },
  payments: { icon: "💳", tone: { bg: "bg-indigo-100", fg: "text-indigo-700" } },
  devices: { icon: "📱", tone: { bg: "bg-amber-100", fg: "text-amber-700" } },
  online: { icon: "💼", tone: { bg: "bg-emerald-100", fg: "text-emerald-700" } },
  social: { icon: "💬", tone: { bg: "bg-rose-100", fg: "text-rose-700" } },
};

const CATEGORY_ORDER: VendorCategory[] = ["cloud", "ai", "payments", "devices", "online", "social"];

export function Vendors({ dict }: { dict: Dictionary }) {
  const categoryLabel: Record<VendorCategory, string> = {
    cloud: dict.vendors.categoryCloud,
    ai: dict.vendors.categoryAi,
    payments: dict.vendors.categoryPayments,
    devices: dict.vendors.categoryDevices,
    online: dict.vendors.categoryOnline,
    social: dict.vendors.categorySocial,
  };

  const grouped = CATEGORY_ORDER.map((cat) => ({
    key: cat,
    label: categoryLabel[cat],
    icon: CATEGORY_META[cat].icon,
    tone: CATEGORY_META[cat].tone,
    items: VENDORS.filter((v) => v.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="vendors" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-600">
            {dict.vendors.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {dict.vendors.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{dict.vendors.sub}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.map((group) => (
            <article
              key={group.key}
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 rounded-xl ${group.tone.bg} ${group.tone.fg} items-center justify-center text-xl`}
                >
                  {group.icon}
                </span>
                <h3 className="font-bold text-lg text-slate-900">{group.label}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {group.items.map((v) => (
                  <li key={v.name}>
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 hover:text-brand-600"
                    >
                      <span className={`h-2 w-2 shrink-0 rounded-full ${v.dotColor}`} aria-hidden />
                      <span className="truncate">{v.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
