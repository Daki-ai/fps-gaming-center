import { Zap, Crown, Gem } from "lucide-react";

const zones = [
  { name: "Arena", icon: Zap, hz: "360Hz", desc: "Competitive setup", price: "70", accent: "gray", featured: false },
  { name: "Premium", icon: Gem, hz: "500Hz", desc: "Performance setup", price: "80", accent: "cyan", featured: false },
  { name: "Elite", icon: Crown, hz: "600Hz", desc: "Flagship setup", price: "90", accent: "gold", featured: true },
];

const ZoneUpgrade = () => {
  return (
    <section id="zone-upgrade" className="px-4 py-20 md:py-28 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
            <Crown className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">Performance Tiers</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Choose Your </span><span className="text-gold-gradient">Level</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {zones.map((zone, i) => {
            const Icon = zone.icon;
            const isFeatured = zone.featured;
            const isCyan = zone.accent === "cyan";
            return (
              <div key={i} className={"group relative " + (isFeatured ? "md:-mt-4" : "")}>
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1 bg-gold rounded-full text-xs font-bold uppercase tracking-widest text-black">
                    Most Premium
                  </div>
                )}
                <div className={"absolute -inset-0.5 rounded-2xl blur " + (isFeatured ? "bg-gradient-to-br from-gold via-gold/50 to-gold opacity-60 animate-pulse" : isCyan ? "bg-gradient-to-br from-cyan-500/40 to-cyan-500/20 opacity-30" : "bg-gradient-to-br from-white/20 to-white/5 opacity-20")} />
                <div className={"relative h-full bg-black/70 border-2 rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 group-hover:scale-[1.02] " + (isFeatured ? "border-gold/60" : isCyan ? "border-cyan-500/30" : "border-white/10")}>
                  <div className={"w-14 h-14 rounded-xl flex items-center justify-center mb-6 " + (isFeatured ? "bg-gold/20 border border-gold/50" : isCyan ? "bg-cyan-500/10 border border-cyan-500/30" : "bg-white/5 border border-white/10")}>
                    <Icon className={"w-7 h-7 " + (isFeatured ? "text-gold" : isCyan ? "text-cyan-400" : "text-gray-400")} />
                  </div>

                  <h3 className={"text-3xl font-bold mb-1 " + (isFeatured ? "text-gold" : "text-white")}>{zone.name}</h3>
                  <p className={"text-sm uppercase tracking-wider mb-1 " + (isFeatured ? "text-gold/80" : isCyan ? "text-cyan-400/80" : "text-gray-500")}>{zone.hz}</p>
                  <p className="text-gray-400 text-sm mb-6">{zone.desc}</p>

                  <div className="flex items-baseline gap-2 pt-6 border-t border-white/10">
                    <span className={"text-4xl font-bold " + (isFeatured ? "text-gold-gradient" : "text-white")}>{zone.price}</span>
                    <span className="text-gray-500 text-sm">den / hour</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 italic">
          Ask staff for availability, reservations and current offers.
        </p>
      </div>
    </section>
  );
};

export default ZoneUpgrade;