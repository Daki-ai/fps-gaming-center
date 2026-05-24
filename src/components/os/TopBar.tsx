import { Sparkles } from "lucide-react";
import { osConfig } from "@/data/osConfig";

const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-gold/20">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-cyan-500/5 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between gap-4">

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-7 h-7 rounded-md bg-gold/15 border border-gold/40 flex items-center justify-center">
            <span className="text-gold text-xs font-bold">F</span>
          </div>
          <span className="text-xs md:text-sm font-bold text-gold uppercase tracking-widest font-mono">FPS OS</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-gray-400 uppercase tracking-wider">Status:</span>
            <span className="text-emerald-400 font-semibold uppercase">{osConfig.status}</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-gray-400 uppercase tracking-wider">Open:</span>
            <span className="text-cyan-400 font-semibold">{osConfig.hoursOpen} - {osConfig.hoursClose}</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-gray-400 uppercase tracking-wider">Zones:</span>
            <span className="text-gold/90 font-semibold">Arena / Premium / Elite</span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[10px] md:text-xs text-cyan-400/90 uppercase tracking-widest font-mono">
            <span className="hidden sm:inline">Powered by </span>AIVERS AI
          </span>
        </div>

      </div>
    </div>
  );
};

export default TopBar;