import { useState } from "react";
import { Crosshair, Mouse, Monitor, Settings, Copy, BookOpen, Check, AlertCircle, Clock } from "lucide-react";
import { proConfigs } from "@/data/proConfigs";

const ProConfigLibrary = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyConfig = (cfg: typeof proConfigs[0]) => {
    const text = "// " + cfg.name + " (" + cfg.team + ") CS2 Config\n" + cfg.crosshair + "\n// Sensitivity: " + cfg.sens + "\n// Resolution: " + cfg.res + "\n// Launch Options: " + cfg.launch;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(cfg.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const activeConfigs = proConfigs.filter(c => c.active);

  return (
    <section id="pro-config" className="px-4 py-12 md:py-14 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
              <Settings className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Pro Library</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Copy </span><span className="text-gold-gradient">Pro Configs</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">Play like the pros. One-click copy.</p>
          </div>
          <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
            {activeConfigs.length} active configs
          </div>
        </div>

        <div className="flex items-start gap-3 mb-6 p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
          <AlertCircle className="w-4 h-4 text-yellow-500/80 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-yellow-500/90">
            Pro configs are for reference. Settings can change. Verify before applying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeConfigs.map((cfg) => {
            const isCopied = copiedId === cfg.id;
            return (
              <div key={cfg.id} className="group relative">
                <div className={"absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm " + (cfg.featured ? "bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40 opacity-50" : "bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0")} />
                <div className={"relative bg-black/60 border rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 h-full flex flex-col " + (cfg.featured ? "border-gold/40" : "border-white/10 hover:border-gold/40")}>

                  {cfg.featured && (
                    <div className="absolute -top-2 right-4 px-2.5 py-0.5 bg-gold rounded text-[10px] font-bold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                      Featured Today
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gold mb-0.5">{cfg.name}</h3>
                      <p className="text-[11px] text-cyan-400/80 uppercase tracking-wider">{cfg.team} - {cfg.role}</p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Crosshair className="w-4 h-4 text-gold" />
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-4 flex-1">
                    <div className="flex items-start gap-2">
                      <Crosshair className="w-3.5 h-3.5 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-mono">Crosshair</p>
                        <p className="text-[11px] text-gray-300 font-mono break-all">{cfg.crosshair}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mouse className="w-3.5 h-3.5 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-mono">Sensitivity</p>
                        <p className="text-[11px] text-gray-300 font-mono">{cfg.sens}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Monitor className="w-3.5 h-3.5 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-mono">Resolution</p>
                        <p className="text-[11px] text-gray-300 font-mono">{cfg.res}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Settings className="w-3.5 h-3.5 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-mono">Launch Options</p>
                        <p className="text-[11px] text-gray-300 font-mono break-all">{cfg.launch}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3 pb-3 border-t border-white/5 pt-3 text-[10px] font-mono">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{formatDate(cfg.lastUpdated)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{cfg.source}</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 uppercase tracking-wider">Active</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => copyConfig(cfg)}
                      className={"flex-1 px-3 py-2 border rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 " + (isCopied ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" : "bg-gold/20 hover:bg-gold/30 border-gold/40 text-gold")}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                    <button className="flex-1 px-3 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      How to Apply
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProConfigLibrary;