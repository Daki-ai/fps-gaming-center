import { GraduationCap, Play, BookOpen, Map, Target, Zap, Clock, Info } from "lucide-react";
import { academyTips } from "@/data/academyTips";

const FpsAcademy = () => {
  const activeTip = academyTips.find(t => t.active);
  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <section className="px-4 py-12 md:py-14 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
              <GraduationCap className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Learn & Improve</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gold-gradient">FPS Academy</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">Today's tactical lesson.</p>
          </div>
        </div>

        {!activeTip ? (
          <div className="bg-black/40 border border-white/10 rounded-2xl p-10 backdrop-blur-md text-center">
            <Info className="w-10 h-10 text-cyan-400/60 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No active lesson</h3>
            <p className="text-sm text-gray-400">Check back tomorrow for the next tactical tip.</p>
          </div>
        ) : (
          <div className="relative max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-cyan-500/10 to-gold/20 rounded-2xl blur-lg opacity-40" />
            <div className="relative bg-black/60 border border-gold/30 rounded-2xl overflow-hidden backdrop-blur-xl">

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative bg-gradient-to-br from-gold/15 via-black to-cyan-500/10 p-8 flex flex-col items-center justify-center min-h-[260px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)]" />

                  <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
                    backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }} />

                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-gold/20 border border-gold/40 backdrop-blur-sm">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold">Lesson 01</span>
                    </div>

                    <div className="w-20 h-20 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center backdrop-blur-md group cursor-pointer hover:scale-110 transition-transform mb-3 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                      <Play className="w-8 h-8 text-gold ml-1" fill="currentColor" />
                    </div>

                    <p className="text-[10px] uppercase tracking-widest text-gold/80 font-mono">Tactical Guide</p>
                    <p className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-mono mt-1">{activeTip.duration}</p>
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col">

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="flex items-center gap-1.5 p-2 bg-black/40 border border-white/5 rounded-lg">
                      <Map className="w-3.5 h-3.5 text-cyan-400/70 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[8px] text-gray-500 uppercase tracking-wider font-mono">Map</p>
                        <p className="text-[11px] text-white font-semibold">{activeTip.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-black/40 border border-white/5 rounded-lg">
                      <Target className="w-3.5 h-3.5 text-cyan-400/70 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[8px] text-gray-500 uppercase tracking-wider font-mono">Topic</p>
                        <p className="text-[11px] text-white font-semibold">Utility</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 bg-black/40 border border-white/5 rounded-lg">
                      <Zap className="w-3.5 h-3.5 text-cyan-400/70 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[8px] text-gray-500 uppercase tracking-wider font-mono">Level</p>
                        <p className="text-[11px] text-white font-semibold">{activeTip.difficulty}</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">{activeTip.title}</h3>
                  <p className="text-sm text-gray-400 mb-5 flex-1">{activeTip.description}</p>

                  <div className="flex items-center justify-between mb-4 pt-3 border-t border-white/5 text-[10px] font-mono">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{formatDate(activeTip.lastUpdated)}</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] uppercase tracking-wider text-emerald-400">Active</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="flex-1 px-4 py-2.5 bg-gold hover:bg-gold-light rounded-lg text-black font-semibold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2">
                      <Play className="w-3.5 h-3.5" fill="currentColor" />
                      Watch Tip
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-cyan-400 font-semibold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      Open Guide
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default FpsAcademy;