import { GraduationCap, Play, BookOpen } from "lucide-react";

const FpsAcademy = () => {
  return (
    <section className="px-4 py-20 md:py-28 bg-gradient-to-b from-transparent via-black/40 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">Learn & Improve</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gold-gradient">FPS Academy</span>
          </h2>
          <p className="text-base text-gray-400">Today lesson</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-cyan-500/20 to-gold/30 rounded-2xl blur-lg opacity-40" />
          <div className="relative bg-black/60 border border-gold/30 rounded-2xl overflow-hidden backdrop-blur-xl">
            <div className="aspect-video bg-gradient-to-br from-gold/10 via-black to-cyan-500/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)]" />
              <div className="relative z-10 w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center backdrop-blur-md group cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-gold ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-widest text-cyan-400/80 font-mono">Lesson 01</span>
                <span className="text-gray-600"></span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Mirage</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                3 Mirage smokes every FACEIT player should know
              </h3>
              <p className="text-gray-400 mb-6">
                Master the essential lineups for A connector, jungle, and stairs. Stop guessing  start executing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 px-6 py-3 bg-gold hover:bg-gold-light rounded-lg text-black font-semibold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" fill="currentColor" />
                  Watch Tip
                </button>
                <button className="flex-1 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-cyan-400 font-semibold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Open Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FpsAcademy;