export const osConfig = {
  status: "Online" as const,
  hoursOpen: "13:00",
  hoursClose: "05:00",
  zones: [
    { name: "Arena", hz: "360Hz", price: 70 },
    { name: "Premium", hz: "500Hz", price: 80 },
    { name: "Elite", hz: "600Hz", price: 90, featured: true },
  ],
  knowledgeBase: "FPS Gaming Center",
  aiMode: "Player Support",
  aiStatus: "Coming Online" as const,
};