import { Trophy, Users, Calendar, FileText } from "lucide-react";

const TournamentSection = () => {
  return (
    <section id="tournament" className="px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40 rounded-3xl blur-xl opacity-60 animate-pulse" />
          <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-gold/40 rounded-3xl p-8 md:p-12 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gold/20 border border-gold/40 backdrop-blur-sm">
                <Trophy className="w-4 h-4 text-gold" />
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">Upcoming</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Next </span><span className="text-gold-gradient">FPS Tournament</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-black/40 border border-white/10 rounded-xl">
                  <Trophy className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Format</p>
                    <p className="text-white font-semibold">CS2 Wingman 2v2</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-black/40 border border-white/10 rounded-xl">
                  <Users className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Access</p>
                    <p className="text-white font-semibold">Members Only</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-black/40 border border-white/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Prize Pool</p>
                    <p className="text-white font-semibold">Announced Soon</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 px-8 py-4 bg-gold hover:bg-gold-light rounded-xl text-black font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]">
                  <Trophy className="w-5 h-5" />
                  Join Tournament
                </button>
                <button className="flex-1 px-8 py-4 bg-black/60 border border-cyan-500/40 hover:border-cyan-400 rounded-xl text-cyan-400 font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  View Rules
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;