export type TeamMemberKey = "jay" | "leo";

export type TeamMember = {
  key: TeamMemberKey;
  name: string;
  email?: string;
  wechat?: string;
  github?: string;
  initials: string;
  tone: { bg: string; fg: string };
};

export const TEAM: TeamMember[] = [
  {
    key: "jay",
    name: "Weijing Jay Lin",
    email: "jay.lin@jytech.us",
    github: "dotku",
    initials: "JL",
    tone: { bg: "bg-brand-100", fg: "text-brand-700" },
  },
  {
    key: "leo",
    name: "Leo Liu",
    email: "leo.liu@jytech.us",
    wechat: "xinmai002leo",
    initials: "LL",
    tone: { bg: "bg-indigo-100", fg: "text-indigo-700" },
  },
];
