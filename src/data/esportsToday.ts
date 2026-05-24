export interface EsportsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  sourceLink?: string;
  active: boolean;
}

export const esportsToday: EsportsItem[] = [
  {
    id: "match-day",
    title: "Match of the Day",
    description: "Top tier matchups from the pro circuit. Watch and learn from the best players in the world.",
    date: "2026-05-24",
    sourceLink: "https://www.hltv.org",
    active: true,
  },
];

export interface TrainingFocus {
  id: string;
  title: string;
  description: string;
  topic: string;
  date: string;
  active: boolean;
}

export const trainingFocus: TrainingFocus[] = [
  {
    id: "focus-1",
    title: "Today's Training Focus",
    description: "Master Mirage utility lineups. 3 essential smokes every FACEIT player should know - A connector, jungle, and stairs.",
    topic: "Mirage / Utility / Beginner",
    date: "2026-05-24",
    active: true,
  },
];