export type VendorCategory = "cloud" | "ai" | "payments" | "devices" | "online" | "social";

export type Vendor = {
  name: string;
  href: string;
  category: VendorCategory;
  dotColor: string;
};

export const VENDORS: Vendor[] = [
  // Cloud
  { name: "AWS", href: "https://aws.amazon.com/", category: "cloud", dotColor: "bg-amber-500" },
  { name: "Google Cloud", href: "https://cloud.google.com/", category: "cloud", dotColor: "bg-blue-500" },
  { name: "Microsoft Azure", href: "https://azure.microsoft.com/", category: "cloud", dotColor: "bg-sky-500" },
  { name: "Vercel", href: "https://vercel.com/", category: "cloud", dotColor: "bg-slate-900" },
  { name: "Cloudflare", href: "https://www.cloudflare.com/", category: "cloud", dotColor: "bg-orange-600" },
  { name: "Volcano Engine 火山引擎", href: "https://www.volcengine.com/", category: "cloud", dotColor: "bg-red-500" },

  // AI
  { name: "Anthropic", href: "https://www.anthropic.com/", category: "ai", dotColor: "bg-orange-500" },
  { name: "OpenAI", href: "https://openai.com/", category: "ai", dotColor: "bg-emerald-500" },
  { name: "Doubao 豆包", href: "https://www.doubao.com/", category: "ai", dotColor: "bg-pink-500" },
  { name: "Vidu", href: "https://www.vidu.studio/", category: "ai", dotColor: "bg-violet-500" },
  { name: "BytePlus", href: "https://www.byteplus.com/", category: "ai", dotColor: "bg-red-400" },

  // Payments
  { name: "Stripe", href: "https://stripe.com/", category: "payments", dotColor: "bg-indigo-500" },
  { name: "PayPal", href: "https://www.paypal.com/", category: "payments", dotColor: "bg-blue-700" },
  { name: "Mercury", href: "https://mercury.com/", category: "payments", dotColor: "bg-slate-800" },
  { name: "Coinbase", href: "https://www.coinbase.com/", category: "payments", dotColor: "bg-blue-500" },
  { name: "Alipay 支付宝", href: "https://global.alipay.com/", category: "payments", dotColor: "bg-sky-600" },

  // Devices ecosystem
  { name: "Apple", href: "https://developer.apple.com/", category: "devices", dotColor: "bg-slate-700" },
  { name: "Lenovo 联想", href: "https://www.lenovo.com/", category: "devices", dotColor: "bg-red-600" },
  { name: "HP", href: "https://www.hp.com/", category: "devices", dotColor: "bg-blue-600" },
  { name: "Huawei 华为", href: "https://developer.huawei.com/", category: "devices", dotColor: "bg-red-700" },
  { name: "Szxinmai 深圳信迈", href: "https://www.szxinmai.com/", category: "devices", dotColor: "bg-amber-600" },

  // Online ecosystem
  // Productivity / online office
  { name: "Google Workspace", href: "https://workspace.google.com/", category: "online", dotColor: "bg-red-500" },
  { name: "GitHub", href: "https://github.com/", category: "online", dotColor: "bg-slate-900" },
  { name: "Feishu 飞书 / Lark", href: "https://www.feishu.cn/", category: "online", dotColor: "bg-cyan-500" },
  { name: "Slack", href: "https://slack.com/", category: "online", dotColor: "bg-purple-500" },
  { name: "Baidu Netdisk 百度云盘", href: "https://pan.baidu.com/", category: "online", dotColor: "bg-blue-500" },
  { name: "Zoho", href: "https://www.zoho.com/", category: "online", dotColor: "bg-red-500" },

  // Social platforms
  { name: "WeChat 微信", href: "https://open.weixin.qq.com/", category: "social", dotColor: "bg-green-500" },
  { name: "TikTok", href: "https://developers.tiktok.com/", category: "social", dotColor: "bg-slate-900" },
  { name: "YouTube", href: "https://developers.google.com/youtube", category: "social", dotColor: "bg-red-600" },
  { name: "Facebook", href: "https://developers.facebook.com/", category: "social", dotColor: "bg-blue-600" },
  { name: "Instagram", href: "https://developers.facebook.com/products/instagram/", category: "social", dotColor: "bg-pink-500" },
  { name: "Meta", href: "https://about.meta.com/", category: "social", dotColor: "bg-blue-700" },
  { name: "LinkedIn", href: "https://developer.linkedin.com/", category: "social", dotColor: "bg-sky-700" },
  { name: "Xiaohongshu 小红书 (RED)", href: "https://open.xiaohongshu.com/", category: "social", dotColor: "bg-rose-500" },
];
