export interface Match {
  id: string;
  teamA: string;
  teamB: string;
  event: string;
  time: string;
  status: "upcoming" | "live" | "finished";
  active: boolean;
}

export const matches: Match[] = [
  { id: "m1", teamA: "Spirit", teamB: "Vitality", event: "BLAST Premier", time: "20:00", status: "upcoming", active: true },
  { id: "m2", teamA: "G2", teamB: "FaZe", event: "ESL Pro League", time: "22:30", status: "upcoming", active: true },
];