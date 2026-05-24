import { Trophy, Users, Calendar, FileText, Clock, AlertCircle } from "lucide-react";
import { tournaments } from "@/data/tournaments";

const TournamentSection = () => {
  const tournament = tournaments.find(t => t.active) || tournaments[0];
  const hasFirmDate = tournament && tournament.date !== "TBA" && tournament.date !== "";
  const status = hasFirmDate ? "Registration Open" : "Planning";

  return (
    <section id="tournament" className="px-4 py-12 md:py-14">
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
              <Trophy className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">Upcoming</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">FPS </span><span className="text-gold-gradient">Tournament</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">In-house competitions for FPS Gaming Center members.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className={"px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider border " + (hasFirmDate ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-yellow-500/10 border-yellow-500/30 text-yellow-500")}>
              <div className="flex items-center gap-1.5">
                <div className={"w-1.5 h-1.5 rounded-full animate-pulse " + (hasFirmDate ? "bg-emerald-400" : "bg-yellow-500")} />
                Status: {status}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-gold/10 to-gold/30 rounded-3xl blur-xl opacity-40" />
          <div className="relative bg-gradient-to-br from-black/80 via-black/60 to-black/80 border border-gold/40 rounded-3xl p-6 md:p-8 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{tournament?.name || "Next FPS Tournament"}</h3>
              <p className="text-sm text-gray-400 mb-6">Bring your best aim. Test your team. Climb the leaderboard.</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-black/40 border border-white/10 rounded-xl">
                  <Trophy className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mb-0.5">Format</p>
                    <p className="text-sm text-white font-semibold">{tournament?.format || "CS2 Wingman 2v2"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-black/40 border border-white/10 rounded-xl">
                  <Users className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mb-0.5">Access</p>
                    <p className="text-sm text-white font-semibold">{tournament?.access || "Members Only"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-black/40 border border-white/10 rounded-xl">
                  <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mb-0.5">Date</p>
                    <p className="text-sm text-white font-semibold">{hasFirmDate ? tournament.date : "To be announced"}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-black/40 border border-white/10 rounded-xl">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mb-0.5">Prize Pool</p>
                    <p className="text-sm text-white font-semibold">{tournament?.prizePool || "Announced Soon"}</p>
                  </div>
                </div>
              </div>

              {!hasFirmDate && (
                <div className="flex items-start gap-3 mb-5 p-3 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                  <AlertCircle className="w-4 h-4 text-yellow-500/80 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-yellow-500/90">
                    Tournament details are being finalized. Registration will open soon. Ask staff for early signup.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  disabled={!hasFirmDate}
                  className={"flex-1 px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 " + (hasFirmDate ? "bg-gold hover:bg-gold-light text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]" : "bg-gold/20 text-gold/60 cursor-not-allowed border border-gold/20")}
                >
                  <Trophy className="w-4 h-4" />
                  {hasFirmDate ? "Register Now" : "Registration Coming Soon"}
                </button>
                <button className="flex-1 px-6 py-3.5 bg-black/60 border border-cyan-500/40 hover:border-cyan-400 rounded-xl text-cyan-400 font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
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