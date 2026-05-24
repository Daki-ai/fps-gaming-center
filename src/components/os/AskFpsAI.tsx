import { Sparkles, Send, Cpu, ArrowRight } from "lucide-react";

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
    <section id="ask-ai" className="px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">AI Assistant</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gold-gradient">Ask FPS AI</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Ask anything before you start: prices, bookings, tournaments, PC specs, rules, CS2 configs, warmup routines and zone recommendations.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-cyan-500/20 to-gold/30 rounded-2xl blur-lg opacity-50" />
          <div className="relative bg-black/60 border border-gold/30 rounded-2xl p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6 text-cyan-400/80">
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-mono">FPS AI Assistant - Coming Online</span>
            </div>

            <div className="bg-black/50 border border-white/5 rounded-xl p-6 mb-6 min-h-[200px] flex flex-col items-center justify-center text-center">
              <Sparkles className="w-12 h-12 text-gold/40 mb-4 animate-pulse" />
              <p className="text-lg text-gray-300 mb-2 font-semibold">FPS AI assistant coming online</p>
              <p className="text-sm text-gray-500 max-w-md mb-2">
                In the meantime, try the quick questions below or ask our staff for anything you need.
              </p>
              <p className="text-xs text-cyan-400/70 uppercase tracking-wider font-mono mt-2">
                Quick answers available now
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/40 border border-gold/20 rounded-xl p-3 opacity-60 cursor-not-allowed">
              <input
                type="text"
                placeholder="Type your question here..."
                disabled
                className="flex-1 bg-transparent text-white placeholder:text-gray-500 outline-none px-3"
              />
              <button disabled className="p-3 bg-gold/30 rounded-lg">
                <Send className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider">Quick Questions - Click for Instant Answer</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickQuestions.map((item, i) => (
              <button
                key={i}
                onClick={() => handleQuestion(item.target, item.openMode)}
                className="group text-left px-5 py-4 bg-black/40 border border-white/5 hover:border-gold/40 rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-black/60 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-gold/60 group-hover:text-gold flex-shrink-0" />
                  <span className="text-sm text-gray-300 group-hover:text-white flex-1">{item.q}</span>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gold transition-all group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskFpsAI;