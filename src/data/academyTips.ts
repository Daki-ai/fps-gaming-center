export interface AcademyTip {
  id: string;
  title: string;
  category: "Mirage" | "Inferno" | "Dust2" | "Nuke" | "Ancient" | "Anubis" | "Utility" | "Aim" | "Movement";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  videoUrl?: string;
  guideUrl?: string;
  active: boolean;
  lastUpdated: string;
}

export const academyTips: AcademyTip[] = [
  { id: "tip-mirage-1", title: "3 Mirage smokes every FACEIT player should know", category: "Mirage", difficulty: "Intermediate", duration: "3 min", description: "Master the essential lineups for A connector, jungle, and stairs. Stop guessing - start executing.", videoUrl: "#", guideUrl: "#", active: true, lastUpdated: "2026-05-24" },
];