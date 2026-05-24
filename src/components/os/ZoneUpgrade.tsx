import { Zap, Crown, Gem } from "lucide-react";
import { osConfig } from "@/data/osConfig";

const iconMap = { Arena: Zap, Premium: Gem, Elite: Crown };

const ZoneUpgrade = () => {
  return (
    <section id="zone-upgrade" className="px-4 py-12 md:py-14 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
              <Crown className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Performance Tiers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Choose Your </span><span className="text-gold-gradient">Level</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">From competitive to flagship. Pick your performance tier.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {osConfig.zones.map((zone) => {
            const Icon = iconMap[zone.name as keyof typeof iconMap] || Zap;
            const isFeatured = zone.featured;
            const isCyan = zone.name === "Premium";
            return (
              <div key={zone.name} className={"group relative " + (isFeatured ? "md:-mt-3" : "")}>
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-0.5 bg-gold rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
                    Most Premium
                  </div>
                )}
                <div className={"absolute -inset-0.5 rounded-2xl blur " + (isFeatured ? "bg-gradient-to-br from-gold via-gold/50 to-gold opacity-60 animate-pulse" : isCyan ? "bg-gradient-to-br from-cyan-500/40 to-cyan-500/20 opacity-30" : "bg-gradient-to-br from-white/20 to-white/5 opacity-20")} />
                <div className={"relative h-full bg-black/70 border-2 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 group-hover:scale-[1.02] " + (isFeatured ? "border-gold/60" : isCyan ? "border-cyan-500/30" : "border-white/10")}>
                  <div className={"w-12 h-12 rounded-xl flex items-center justify-center mb-4 " + (isFeatured ? "bg-gold/20 border border-gold/50" : isCyan ? "bg-cyan-500/10 border border-cyan-500/30" : "bg-white/5 border border-white/10")}>
                    <Icon className={"w-6 h-6 " + (isFeatured ? "text-gold" : isCyan ? "text-cyan-400" : "text-gray-400")} />
                  </div>

                  <h3 className={"text-2xl font-bold mb-1 " + (isFeatured ? "text-gold" : "text-white")}>{zone.name}</h3>
                  <p className={"text-xs uppercase tracking-wider mb-4 " + (isFeatured ? "text-gold/80" : isCyan ? "text-cyan-400/80" : "text-gray-500")}>{zone.hz} {isFeatured ? "Flagship Setup" : isCyan ? "Performance Setup" : "Competitive Setup"}</p>

                  <div className="flex items-baseline gap-2 pt-4 border-t border-white/10">
                    <span className={"text-3xl font-bold " + (isFeatured ? "text-gold-gradient" : "text-white")}>{zone.price}</span>
                    <span className="text-gray-500 text-xs">den / hour</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 italic">
          Ask staff for availability, reservations and current offers.
        </p>
      </div>
    </section>
  );
};

export default ZoneUpgrade;