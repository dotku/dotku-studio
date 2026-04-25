export type CostCategory = "ai" | "infra" | "dev" | "saas" | "other";
export type CostFrequency = "monthly" | "yearly" | "one-time";

export type CostItem = {
  id: string;
  name: string;
  url?: string;
  amount: number;
  currency: "USD";
  frequency: CostFrequency;
  category: CostCategory;
  note?: string;
};

export const COSTS: CostItem[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    url: "https://claude.com/claude-code",
    amount: 100,
    currency: "USD",
    frequency: "monthly",
    category: "ai",
  },
  {
    id: "codex",
    name: "Codex",
    url: "https://openai.com/codex",
    amount: 8,
    currency: "USD",
    frequency: "monthly",
    category: "ai",
  },
  {
    id: "llm-api",
    name: "LLM API",
    amount: 20,
    currency: "USD",
    frequency: "monthly",
    category: "ai",
    note: "OpenAI / Anthropic usage-based",
  },
  {
    id: "flyio",
    name: "Fly.io",
    url: "https://fly.io",
    amount: 3,
    currency: "USD",
    frequency: "monthly",
    category: "infra",
  },
];

export const CATEGORY_ORDER: CostCategory[] = [
  "ai",
  "infra",
  "dev",
  "saas",
  "other",
];

export function toMonthly(item: CostItem): number {
  if (item.frequency === "monthly") return item.amount;
  if (item.frequency === "yearly") return item.amount / 12;
  return 0;
}

export function monthlyTotal(items: CostItem[]): number {
  return items.reduce((sum, i) => sum + toMonthly(i), 0);
}

export function yearlyTotal(items: CostItem[]): number {
  return monthlyTotal(items) * 12;
}

export function groupByCategory(
  items: CostItem[],
): Record<CostCategory, CostItem[]> {
  const groups: Record<CostCategory, CostItem[]> = {
    ai: [],
    infra: [],
    dev: [],
    saas: [],
    other: [],
  };
  for (const item of items) groups[item.category].push(item);
  return groups;
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: amount < 10 ? 2 : 0,
  }).format(amount);
}
