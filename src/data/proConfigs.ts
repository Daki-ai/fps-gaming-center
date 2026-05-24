export interface ProConfig {
  id: string;
  name: string;
  team: string;
  role: string;
  crosshair: string;
  sens: string;
  res: string;
  launch: string;
  featured: boolean;
  active: boolean;
  source: string;
  lastUpdated: string;
}

export const proConfigs: ProConfig[] = [
  { id: "donk", name: "donk", team: "Spirit", role: "Rifler", crosshair: "cl_crosshairsize 2; cl_crosshairthickness 0.5", sens: "DPI 800 / Sens 1.65", res: "1280x960 (Stretched)", launch: "-novid -tickrate 128 -high", featured: true, active: true, source: "prosettings.net", lastUpdated: "2026-05-20" },
  { id: "m0nesy", name: "m0NESY", team: "G2", role: "AWPer", crosshair: "cl_crosshairsize 1.5; cl_crosshairgap -3", sens: "DPI 400 / Sens 1.30", res: "1280x960 (4:3)", launch: "-novid -freq 360 -high", featured: false, active: true, source: "prosettings.net", lastUpdated: "2026-05-18" },
  { id: "zywoo", name: "ZywOo", team: "Vitality", role: "AWPer/Rifler", crosshair: "cl_crosshairsize 2.5; cl_crosshairstyle 4", sens: "DPI 400 / Sens 1.85", res: "1280x960 (Stretched)", launch: "-novid -tickrate 128", featured: false, active: true, source: "prosettings.net", lastUpdated: "2026-05-15" },
  { id: "niko", name: "NiKo", team: "Falcons", role: "Rifler", crosshair: "cl_crosshairsize 2; cl_crosshairgap -2", sens: "DPI 400 / Sens 2.20", res: "1280x960 (4:3)", launch: "-novid -high -freq 360", featured: false, active: true, source: "prosettings.net", lastUpdated: "2026-05-12" },
  { id: "ropz", name: "ropz", team: "Vitality", role: "Lurker", crosshair: "cl_crosshairsize 1.5; cl_crosshairthickness 1", sens: "DPI 400 / Sens 1.50", res: "1024x768 (Stretched)", launch: "-novid -tickrate 128", featured: false, active: true, source: "prosettings.net", lastUpdated: "2026-05-10" },
  { id: "s1mple", name: "s1mple", team: "Falcons", role: "Rifler/AWPer", crosshair: "cl_crosshairsize 2.5; cl_crosshairgap -2", sens: "DPI 400 / Sens 3.09", res: "1280x960 (Stretched)", launch: "-novid -high -freq 360", featured: false, active: true, source: "prosettings.net", lastUpdated: "2026-05-08" },
];