export type PartnerGroupKey = "tech" | "media" | "medical" | "supply" | "finance" | "misc";

export type Partner = {
  name: string;
  href?: string;
  tagKey?: "fashion" | "food" | "nature" | "edu" | "beauty";
};

export type PartnerGroup = {
  key: PartnerGroupKey;
  icon: string;
  tone: {
    bg: string;
    fg: string;
  };
  partners: Partner[];
};

export const PARTNER_GROUPS: PartnerGroup[] = [
  {
    key: "tech",
    icon: "⚙️",
    tone: { bg: "bg-brand-100", fg: "text-brand-700" },
    partners: [
      { name: "杰圆科技 JYTech", href: "https://jytech.us" },
      { name: "深圳市华思旭 (卡儿酷能源)", href: "https://www.carku.com/" },
      { name: "Coway", href: "https://coway.jytech.us/" },
      { name: "Crystal Start Innovation Group" },
      { name: "太古宙能源科技" },
      { name: "守卫者智能科技" },
      { name: "华拓明通出行科技", href: "https://ouxi.us" },
      { name: "Pear.us", href: "https://pear.us/" },
      { name: "Merlyn AI", href: "https://merlyn.org/" },
    ],
  },
  {
    key: "media",
    icon: "📺",
    tone: { bg: "bg-pink-100", fg: "text-pink-700" },
    partners: [
      { name: "负负得正" },
      { name: "稻草人影业" },
      { name: "赤兔华盟" },
      { name: "YEA Media" },
      { name: "星岛日报", href: "https://www.singtaousa.com/" },
      { name: "老中新闻网", href: "https://newsforchinese.com/" },
      { name: "洛杉矶资讯网", href: "https://www.chineseinla.com/" },
      { name: "Nation X" },
      { name: "加拿大传奇文化", href: "https://thelegendsmedia.com/" },
    ],
  },
  {
    key: "medical",
    icon: "🏥",
    tone: { bg: "bg-emerald-100", fg: "text-emerald-700" },
    partners: [
      { name: "九安医疗 iHealth Lab", href: "https://ihealthlabs.com/" },
      { name: "必欧瀚生物技术 (合肥)", href: "https://www.hf.biouhan.com/" },
      { name: "蓝雀医疗 BlueJay Mobile", href: "https://www.bluejayhealth.com/" },
      { name: "A+ Berry", href: "https://aplusberry.com/" },
    ],
  },
  {
    key: "supply",
    icon: "🚚",
    tone: { bg: "bg-amber-100", fg: "text-amber-700" },
    partners: [
      { name: "Tradin AI Inc" },
      { name: "JD.com (US)" },
      { name: "ZY International", href: "https://www.zyinternationaltrade.com/" },
      { name: "Alibaba (US)" },
      { name: "徽商集团" },
    ],
  },
  {
    key: "finance",
    icon: "💳",
    tone: { bg: "bg-indigo-100", fg: "text-indigo-700" },
    partners: [
      { name: "Good Driver Mutuality (GDM)", href: "https://gdm.jytech.us" },
      { name: "Intuit", href: "https://www.intuit.com/" },
      { name: "Xero", href: "https://www.xero.com/us/" },
      { name: "Gusto", href: "https://gusto.com/" },
      { name: "GiveButter", href: "https://givebutter.com/c/tvsmbq" },
    ],
  },
  {
    key: "misc",
    icon: "👟",
    tone: { bg: "bg-rose-100", fg: "text-rose-700" },
    partners: [
      { name: "东莞市厚街昱晟鞋业", href: "https://dotku.us/dongguan-houjie-yusheng-shoes/", tagKey: "fashion" },
      { name: "UNI&CORE", href: "https://unincore.us/", tagKey: "beauty" },
      { name: "福赢国际供应链管理", tagKey: "food" },
      { name: "紫金矿业", tagKey: "nature" },
      { name: "尤品新材料 UPIN New Material", href: "https://youpin.jytech.us/", tagKey: "nature" },
      { name: "Alum AI", tagKey: "edu" },
    ],
  },
];
