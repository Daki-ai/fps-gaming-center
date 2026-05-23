import { Crosshair, Mouse, Monitor, Settings, Copy, BookOpen } from "lucide-react";

const proConfigs = [
  { name: "donk", team: "Spirit", role: "Rifler", crosshair: "cl_crosshairsize 2; cl_crosshairthickness 0.5", sens: "DPI 800 / Sens 1.65", res: "1280x960 (Stretched)", launch: "-novid -tickrate 128 -high" },
  { name: "m0NESY", team: "G2", role: "AWPer", crosshair: "cl_crosshairsize 1.5; cl_crosshairgap -3", sens: "DPI 400 / Sens 1.30", res: "1280x960 (4:3)", launch: "-novid -freq 360 -high" },
  { name: "ZywOo", team: "Vitality", role: "AWPer/Rifler", crosshair: "cl_crosshairsize 2.5; cl_crosshairstyle 4", sens: "DPI 400 / Sens 1.85", res: "1280x960 (Stretched)", launch: "-novid -tickrate 128" },
  { name: "NiKo", team: "Falcons", role: "Rifler", crosshair: "cl_crosshairsize 2; cl_crosshairgap -2", sens: "DPI 400 / Sens 2.20", res: "1280x960 (4:3)", launch: "-novid -high -freq 360" },
  { name: "ropz", team: "Vitality", role: "Lurker", crosshair: "cl_crosshairsize 1.5; cl_crosshairthickness 1", sens: "DPI 400 / Sens 1.50", res: "1024x768 (Stretched)", launch: "-novid -tickrate 128" },
  { name: "s1mple", team: "Falcons", role: "Rifler/AWPer", crosshair: "cl_crosshairsize 2.5; cl_crosshairgap -2", sens: "DPI 400 / Sens 3.09", res: "1280x960 (Stretched)", launch: "-novid -high -freq 360" },
];

const ProConfigLibrary = () => {
  const copyConfig = (cfg: typeof proConfigs[0]) => {
    const text = "// " + cfg.name + " (" + cfg.team + ") CS2 Config\n" + cfg.crosshair + "\n// Sensitivity: " + cfg.sens + "\n// Resolution: " + cfg.res + "\n// Launch Options: " + cfg.launch;
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="pro-config" className="px-4 py-20 md:py-28 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
            <Settings className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">Pro Library</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Copy </span><span className="text-gold-gradient">Pro Configs</span>
          </h2>
          <p className="text-base text-gray-400">Play like the pros. One-click copy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proConfigs.map((cfg, i) => (
            <div key={i} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="relative bg-black/60 border border-white/10 hover:border-gold/40 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-gold mb-1">{cfg.name}</h3>
                    <p className="text-xs text-cyan-400/80 uppercase tracking-wider">{cfg.team}  {cfg.role}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Crosshair className="w-5 h-5 text-gold" />
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-2 text-sm">
                    <Crosshair className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Crosshair</p>
                      <p className="text-xs text-gray-300 font-mono">{cfg.crosshair}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Mouse className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Sensitivity</p>
                      <p className="text-xs text-gray-300 font-mono">{cfg.sens}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Monitor className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Resolution</p>
                      <p className="text-xs text-gray-300 font-mono">{cfg.res}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Settings className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Launch Options</p>
                      <p className="text-xs text-gray-300 font-mono">{cfg.launch}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => copyConfig(cfg)} className="flex-1 px-4 py-2.5 bg-gold/20 hover:bg-gold/30 border border-gold/40 rounded-lg text-gold text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2">
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </button>
                  <button className="flex-1 px-4 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    How to Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProConfigLibrary;