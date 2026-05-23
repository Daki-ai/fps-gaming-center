import { Sparkles, Copy, Newspaper, Trophy } from "lucide-react";
import fpsLogo from "@/assets/fps-logo-new.png";

const HeroOS = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
        <img src={fpsLogo} alt="FPS" className="w-12 h-12 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
        <div>
          <div className="text-xs text-gold uppercase tracking-widest">FPS Gaming Center</div>
          <div className="text-[10px] text-cyan-400/70 uppercase tracking-wider">Player Command Center</div>
        </div>
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-xs text-cyan-400/80 uppercase tracking-wider font-mono">System Online</span>
      </div>

      <div className="text-center max-w-5xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">Powered by AIVERS AI</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          <span className="block text-white">WELCOME TO</span>
          <span className="block text-gold-gradient mt-2">FPS OS</span>
        </h1>

        <p className="text-xl md:text-2xl text-cyan-400/90 mb-3 font-mono uppercase tracking-wider">
          Player Command Center
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Your competitive session starts here.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => scrollTo("ask-ai")}
            className="group relative px-10 py-5 bg-gradient-to-r from-gold via-gold-light to-gold rounded-xl font-bold text-lg text-black hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:shadow-[0_0_60px_rgba(212,175,55,0.8)]"
          >
            <span className="flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              ASK FPS AI
            </span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 w-full max-w-3xl">
            <button onClick={() => scrollTo("pro-config")} className="group px-6 py-4 rounded-lg bg-black/40 border border-gold/20 hover:border-gold/60 backdrop-blur-md transition-all duration-300 hover:bg-black/60">
              <div className="flex items-center justify-center gap-2 text-gold/90 group-hover:text-gold">
                <Copy className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Copy Pro Config</span>
              </div>
            </button>

            <button onClick={() => scrollTo("today-cs2")} className="group px-6 py-4 rounded-lg bg-black/40 border border-cyan-500/20 hover:border-cyan-400/60 backdrop-blur-md transition-all duration-300 hover:bg-black/60">
              <div className="flex items-center justify-center gap-2 text-cyan-400/90 group-hover:text-cyan-300">
                <Newspaper className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Today in CS2</span>
              </div>
            </button>

            <button onClick={() => scrollTo("tournament")} className="group px-6 py-4 rounded-lg bg-black/40 border border-gold/20 hover:border-gold/60 backdrop-blur-md transition-all duration-300 hover:bg-black/60">
              <div className="flex items-center justify-center gap-2 text-gold/90 group-hover:text-gold">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Join Tournament</span>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gold/60 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOS;