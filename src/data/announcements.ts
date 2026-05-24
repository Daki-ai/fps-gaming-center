export interface Announcement {
  id: string;
  title: string;
  message: string;
  priority: "low" | "medium" | "high";
  date: string;
  active: boolean;
}

export const announcements: Announcement[] = [];