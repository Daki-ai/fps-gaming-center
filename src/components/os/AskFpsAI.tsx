import { Sparkles, Send, Cpu, ArrowRight, Database, Target, Activity } from "lucide-react";

const quickQuestions = [
  { q: "What is the best PC for CS2?", target: "zone-upgrade" },
  { q: "How much is Elite Zone?", target: "zone-upgrade" },
  { q: "Show me pro configs", target: "pro-config" },
  { q: "When is the next tournament?", target: "tournament" },
  { q: "How should I warm up before FACEIT?", target: "session-mode", openMode: "faceit" },
  { q: "What are the rules?", target: "tournament" },
];

const AskFpsAI = () => {
  const handleQuestion = (target: string, openMode?: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    if (openMode) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("openSessionMode", { detail: { modeId: openMode } }));
      }, 600);
    }
  };

  return (
    <section id="ask-ai" className="px-4 py-12 md:py-14">
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">AI Assistant</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gold-gradient">Ask FPS AI</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">Quick answers available now. Real AI coming soon.</p>
          </div>
          <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">v1.0 - Placeholder Mode</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <div className="lg:col-span-1 bg-black/50 border border-gold/20 rounded-2xl p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-yellow-500 font-mono font-semibold">System Status</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Activity className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mb-0.5">Status</p>
                  <p className="text-sm text-yellow-500 font-semibold">Coming Online</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mb-0.5">Knowledge Base</p>
                  <p className="text-sm text-white font-semibold">FPS Gaming Center</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mb-0.5">Mode</p>
                  <p className="text-sm text-cyan-400 font-semibold">Player Support</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 bg-black/40 border border-gold/15 rounded-lg p-2 opacity-70">
                <input
                  type="text"
                  placeholder="Coming Online - try quick answers"
                  disabled
                  className="flex-1 bg-transparent text-xs text-white placeholder:text-gray-500 outline-none px-2 cursor-not-allowed"
                />
                <button disabled className="p-2 bg-gold/25 rounded-md cursor-not-allowed">
                  <Send className="w-3.5 h-3.5 text-black/70" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Quick Answers Available Now
              </span>
              <span className="text-[10px] text-gray-500 font-mono">6 topics</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {quickQuestions.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestion(item.target, item.openMode)}
                  className="group text-left px-4 py-3 bg-black/50 border border-white/10 hover:border-gold/40 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-black/70"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold flex-shrink-0" />
                    <span className="text-sm text-gray-300 group-hover:text-white flex-1">{item.q}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AskFpsAI;