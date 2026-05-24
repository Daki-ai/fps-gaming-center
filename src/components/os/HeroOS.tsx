import { Sparkles, Copy, Newspaper, Trophy, Crosshair, ArrowRight, Clock } from "lucide-react";
import fpsLogo from "@/assets/fps-logo-new.png";
import { proConfigs } from "@/data/proConfigs";
import { todayInCS2 } from "@/data/todayInCS2";
import { osConfig } from "@/data/osConfig";

const HeroOS = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const featured = proConfigs.find(c => c.featured && c.active) || proConfigs[0];
  const latestNews = todayInCS2.filter(n => n.active).slice(0, 1)[0];

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short" });

  return (
    <section className="relative px-4 pt-8 pb-12 md:pt-10 md:pb-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute top-20 left-10 w-2 h-2 bg-gold/40 rounded-full animate-pulse pointer-events-none" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto">

        <div className="flex items-center gap-4 mb-6">
          <img src={fpsLogo} alt="FPS Gaming Center" className="w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]" />
          <div>
            <div className="text-[10px] md:text-xs text-cyan-400/80 uppercase tracking-widest font-mono mb-0.5">Player Command Center</div>
            <div className="text-sm md:text-base text-gold font-semibold uppercase tracking-wider">FPS Gaming Center</div>
          </div>
        </div>

        <div className="relative mb-8">
          <div className="absolute -inset-x-6 -inset-y-4 bg-gradient-to-br from-gold/[0.07] via-transparent to-cyan-500/[0.05] rounded-3xl pointer-events-none" />
          <div className="absolute -inset-x-3 -inset-y-1 border border-gold/10 rounded-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Powered by AIVERS AI</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-3">
              <span className="block text-white">WELCOME TO</span>
              <span className="block text-gold-gradient mt-1">FPS OS</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-cyan-400/90 mb-2 font-mono uppercase tracking-wider">
              Player Command Center
            </p>

            <p className="text-sm md:text-base text-gray-400 mb-6 max-w-2xl">
              Your competitive session starts here. Pro configs, daily CS2 intel, tournaments and AI guidance.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              <button onClick={() => scrollTo("ask-ai")} className="group relative px-5 py-4 bg-gradient-to-r from-gold via-gold-light to-gold rounded-xl font-bold text-sm md:text-base text-black hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] col-span-2 lg:col-span-1">
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  ASK FPS AI
                </span>
              </button>

              <button onClick={() => scrollTo("pro-config")} className="px-4 py-4 rounded-xl bg-black/50 border border-gold/30 hover:border-gold/70 hover:bg-black/70 backdrop-blur-md transition-all duration-300">
                <span className="flex items-center justify-center gap-2 text-gold font-semibold uppercase tracking-wider text-xs md:text-sm">
                  <Copy className="w-4 h-4" />
                  Pro Config
                </span>
              </button>

              <button onClick={() => scrollTo("today-cs2")} className="px-4 py-4 rounded-xl bg-black/50 border border-cyan-500/30 hover:border-cyan-400/70 hover:bg-black/70 backdrop-blur-md transition-all duration-300">
                <span className="flex items-center justify-center gap-2 text-cyan-400 font-semibold uppercase tracking-wider text-xs md:text-sm">
                  <Newspaper className="w-4 h-4" />
                  CS2 Today
                </span>
              </button>

              <button onClick={() => scrollTo("tournament")} className="px-4 py-4 rounded-xl bg-black/50 border border-gold/30 hover:border-gold/70 hover:bg-black/70 backdrop-blur-md transition-all duration-300">
                <span className="flex items-center justify-center gap-2 text-gold font-semibold uppercase tracking-wider text-xs md:text-sm">
                  <Trophy className="w-4 h-4" />
                  Tournament
                </span>
              </button>
            </div>

            <button onClick={() => scrollTo("zone-upgrade")} className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-gold/10 via-black/40 to-cyan-500/10 border border-gold/30 hover:border-gold/60 backdrop-blur-md transition-all duration-300 group flex-wrap">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold">Zones:</span>
              {osConfig.zones.map((z, i) => (
                <div key={z.name} className="flex items-center gap-1.5">
                  <span className={"text-sm font-bold uppercase tracking-wider " + (z.featured ? "text-gold" : "text-gray-200")}>{z.name}</span>
                  <span className={"text-sm font-mono font-semibold " + (z.featured ? "text-gold" : "text-gray-300")}>{z.price}</span>
                  <span className="text-[10px] text-gray-500 font-mono">den</span>
                  {i < osConfig.zones.length - 1 && <span className="text-gold/40 ml-1">|</span>}
                </div>
              ))}
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-gold group-hover:translate-x-1 transition-all ml-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <button onClick={() => scrollTo("today-cs2")} className="group text-left bg-black/50 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 hover:bg-black/70">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Newspaper className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-mono">CS2 Today</span>
              </div>
              {latestNews && <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono uppercase tracking-wider text-emerald-400">Active</div>}
            </div>
            {latestNews ? (
              <>
                <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{latestNews.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 mb-3">{latestNews.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(latestNews.date)}</span>
                  </div>
                  <span className="text-[10px] text-cyan-400/80 font-mono uppercase tracking-wider group-hover:text-cyan-400 flex items-center gap-1">View <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" /></span>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500">No update today.</p>
            )}
          </button>

          <button onClick={() => scrollTo("pro-config")} className="group text-left bg-black/50 border border-gold/20 hover:border-gold/50 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 hover:bg-black/70 relative overflow-hidden">
            <div className="absolute top-3 right-3 px-2 py-0.5 bg-gold rounded text-[9px] font-bold uppercase tracking-widest text-black">Featured Today</div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                <Crosshair className="w-4 h-4 text-gold" />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-gold/80 font-mono">Pro Config</span>
            </div>
            <h3 className="text-2xl font-bold text-gold mb-0.5">{featured.name}</h3>
            <p className="text-[11px] text-cyan-400/80 uppercase tracking-wider mb-2">{featured.team} - {featured.role}</p>
            <p className="text-xs text-gray-400 font-mono line-clamp-1 mb-3">{featured.sens}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
                <Clock className="w-3 h-3" />
                <span>{formatDate(featured.lastUpdated)}</span>
              </div>
              <span className="text-[10px] text-gold/80 font-mono uppercase tracking-wider group-hover:text-gold flex items-center gap-1">Copy <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" /></span>
            </div>
          </button>

          <button onClick={() => scrollTo("ask-ai")} className="group text-left bg-gradient-to-br from-gold/10 via-black/50 to-cyan-500/10 border border-gold/30 hover:border-gold/60 rounded-2xl p-5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-gold animate-pulse" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-mono">AI Assistant</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30 text-[9px] font-mono uppercase tracking-wider text-yellow-500">Coming</div>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Ask FPS AI</h3>
              <p className="text-xs text-gray-400 mb-3">Prices, configs, warmups, tournaments.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-cyan-400/80 font-mono uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                  Coming Online
                </div>
                <span className="text-[10px] text-gold/80 font-mono uppercase tracking-wider group-hover:text-gold flex items-center gap-1">Try <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" /></span>
              </div>
            </div>
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroOS;