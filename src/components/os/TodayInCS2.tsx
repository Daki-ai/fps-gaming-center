import { Newspaper, Swords, Map, Eye, Calendar } from "lucide-react";

const cs2Cards = [
  { icon: Newspaper, title: "Latest CS2 Update", tag: "Patch Notes", text: "Stay locked in. Check today updates and balance changes before you queue.", accent: "gold" },
  { icon: Swords, title: "Match of the Day", tag: "Live Now", text: "Top tier matchups from the pro circuit. Watch and learn from the best.", accent: "cyan" },
  { icon: Map, title: "Map Tip", tag: "Tactical", text: "Daily callouts, smokes, and rotations to give you the competitive edge.", accent: "gold" },
  { icon: Eye, title: "Meta Watch", tag: "Strategy", text: "What is working in the current patch. Weapon picks, utility usage, popular strats.", accent: "cyan" },
];

const TodayInCS2 = () => {
  return (
    <section id="today-cs2" className="px-4 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Daily Feed</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Today in </span><span className="text-gold-gradient">CS2</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Stay locked in. Check today updates, pro matches, and tactical tips before you queue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cs2Cards.map((card, i) => {
            const Icon = card.icon;
            const isGold = card.accent === "gold";
            return (
              <div key={i} className="group relative cursor-pointer">
                <div className={"absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm " + (isGold ? "bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0" : "bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0")} />
                <div className={"relative bg-black/60 border rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 h-full " + (isGold ? "border-white/10 hover:border-gold/40" : "border-white/10 hover:border-cyan-500/40")}>
                  <div className={"w-12 h-12 rounded-xl flex items-center justify-center mb-4 " + (isGold ? "bg-gold/10 border border-gold/30" : "bg-cyan-500/10 border border-cyan-500/30")}>
                    <Icon className={"w-6 h-6 " + (isGold ? "text-gold" : "text-cyan-400")} />
                  </div>
                  <span className={"inline-block text-[10px] uppercase tracking-widest mb-2 px-2 py-0.5 rounded " + (isGold ? "bg-gold/10 text-gold" : "bg-cyan-500/10 text-cyan-400")}>
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TodayInCS2;