import { useState } from "react";
import { Flame, Target, Coffee, Trophy, Crosshair, CheckCircle2 } from "lucide-react";

const sessionModes = [
  { id: "warmup", name: "Warmup", icon: Flame, checklist: ["Open Aim Lab or DM server", "Stretch wrists and shoulders", "Adjust mouse and headset", "10 minutes deathmatch", "Hydrate"] },
  { id: "faceit", name: "FACEIT Grind", icon: Target, checklist: ["Open FACEIT AC", "Warm up 10 minutes", "Check mouse and headset", "Use stable config", "Queue with focus"] },
  { id: "casual", name: "Casual", icon: Coffee, checklist: ["Pick your mood  DM, retake, or chill MM", "Set comfortable volume", "Play without pressure", "Have fun"] },
  { id: "tournament", name: "Tournament Practice", icon: Trophy, checklist: ["Drill team smokes and execs", "Mid-round comms practice", "Scrim or PUG with team", "Watch demo afterwards"] },
  { id: "aim", name: "Aim Training", icon: Crosshair, checklist: ["Open Aim Lab / Kovaak", "Run flick + tracking routine", "30 minutes focused", "DM map for 15 min", "Review hits/misses"] },
];

const SessionMode = () => {
  const [activeMode, setActiveMode] = useState<string | null>(null);
  const active = sessionModes.find(m => m.id === activeMode);

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Pre-Session</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Choose Your </span><span className="text-gold-gradient">Session Mode</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {sessionModes.map((mode) => {
            const Icon = mode.icon;
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(isActive ? null : mode.id)}
                className={"group relative p-6 rounded-2xl border-2 transition-all duration-300 backdrop-blur-xl " + (isActive ? "border-gold bg-gold/10 scale-105" : "border-white/10 bg-black/40 hover:border-cyan-500/40 hover:bg-black/60")}
              >
                <Icon className={"w-8 h-8 mx-auto mb-3 transition-colors " + (isActive ? "text-gold" : "text-gray-400 group-hover:text-cyan-400")} />
                <p className={"text-sm font-semibold uppercase tracking-wider " + (isActive ? "text-gold" : "text-gray-300")}>{mode.name}</p>
              </button>
            );
          })}
        </div>

        {active && (
          <div className="relative animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-cyan-500/10 to-gold/20 rounded-2xl blur-lg" />
            <div className="relative bg-black/70 border border-gold/30 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-gold mb-4 uppercase tracking-wider">{active.name} Checklist</h3>
              <ul className="space-y-3">
                {active.checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SessionMode;