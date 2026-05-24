export interface CS2NewsItem {
  id: string;
  title: string;
  category: "Patch Notes" | "Live Now" | "Tactical" | "Strategy";
  description: string;
  date: string;
  sourceLink?: string;
  active: boolean;
  accent: "gold" | "cyan";
}

export const todayInCS2: CS2NewsItem[] = [
  { id: "update-1", title: "Latest CS2 Update", category: "Patch Notes", description: "Check today's balance changes, weapon adjustments, and map tweaks before queueing.", date: "2026-05-23", sourceLink: "https://www.counter-strike.net/news", active: true, accent: "gold" },
  { id: "match-1", title: "Match of the Day", category: "Live Now", description: "Top tier matchups from the pro circuit. Watch and learn from the best players in the world.", date: "2026-05-24", sourceLink: "https://www.hltv.org", active: true, accent: "cyan" },
  { id: "tip-1", title: "Map Tip - Mirage", category: "Tactical", description: "Daily callouts, smokes, and rotations to give you the competitive edge on Mirage.", date: "2026-05-24", active: true, accent: "gold" },
  { id: "meta-1", title: "Meta Watch", category: "Strategy", description: "What is working in the current patch. Weapon picks, utility usage, popular strats.", date: "2026-05-22", active: true, accent: "cyan" },
];