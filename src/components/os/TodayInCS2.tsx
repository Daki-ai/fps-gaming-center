import { Calendar, Swords, GraduationCap, Clock, ExternalLink } from "lucide-react";
import OfficialCS2News from "./OfficialCS2News";
import { esportsToday, trainingFocus } from "@/data/esportsToday";

const TodayInCS2 = () => {
  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const esports = esportsToday.find(e => e.active);
  const training = trainingFocus.find(t => t.active);

  return (
    <section id="today-cs2" className="px-4 py-12 md:py-14">
      <div className="max-w-[1280px] mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">Daily Feed</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">Today in </span><span className="text-gold-gradient">CS2</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">Official updates, pro matches, and tactical focus.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <div className="lg:col-span-1">
            <OfficialCS2News />
          </div>

          <div className="bg-black/40 border border-gold/20 rounded-2xl p-5 backdrop-blur-xl flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <Swords className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Esports Today</h3>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Source: HLTV</p>
                </div>
              </div>
              {esports && (
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono uppercase tracking-wider text-emerald-400">Active</span>
              )}
            </div>

            {esports ? (
              <>
                <h4 className="text-base font-bold text-white mb-2">{esports.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1">{esports.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(esports.date)}</span>
                  </div>
                  {esports.sourceLink && (
                    <a href={esports.sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gold/80 hover:text-gold uppercase tracking-wider">
                      <span>HLTV</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500 text-center py-6">No esports event today.</p>
            )}
          </div>

          <div className="bg-black/40 border border-gold/20 rounded-2xl p-5 backdrop-blur-xl flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Training Focus</h3>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Source: FPS Academy</p>
                </div>
              </div>
              {training && (
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono uppercase tracking-wider text-emerald-400">Active</span>
              )}
            </div>

            {training ? (
              <>
                <h4 className="text-base font-bold text-white mb-1">{training.title}</h4>
                <p className="text-[10px] text-cyan-400/80 uppercase tracking-wider font-mono mb-2">{training.topic}</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1">{training.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(training.date)}</span>
                  </div>
                  <span className="text-gold/80 uppercase tracking-wider">Internal</span>
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500 text-center py-6">No training focus today.</p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TodayInCS2;