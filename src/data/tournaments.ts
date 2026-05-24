export interface Tournament {
  id: string;
  name: string;
  format: string;
  access: string;
  prizePool: string;
  date: string;
  rulesUrl?: string;
  active: boolean;
}

export const tournaments: Tournament[] = [
  { id: "t1", name: "Next FPS Tournament", format: "CS2 Wingman 2v2", access: "Members Only", prizePool: "Announced Soon", date: "TBA", active: true },
];