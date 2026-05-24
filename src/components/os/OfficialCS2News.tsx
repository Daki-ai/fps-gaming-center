import { Newspaper, ExternalLink, Clock, Loader2, AlertCircle, Info } from "lucide-react";
import { useCS2News, cleanSteamContent } from "@/hooks/useCS2News";

const OfficialCS2News = () => {
  const { news, loading, error } = useCS2News();

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  };

  const displayNews = news.slice(0, 3);
  const itemClass = "group block p-3 bg-black/40 border border-white/5 hover:border-cyan-500/40 rounded-xl transition-all duration-300";

  return (
    <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-5 backdrop-blur-xl">

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <Newspaper className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Official CS2 Updates</h3>
            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Source: Steam</p>
          </div>
        </div>
        {loading && (
          <div className="flex items-center gap-1.5 text-[10px] text-cyan-400/80 font-mono uppercase tracking-wider">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span>Loading</span>
          </div>
        )}
        {!loading && !error && displayNews.length > 0 && (
          <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono uppercase tracking-wider">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live</span>
          </div>
        )}
      </div>

      {loading && (
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-3 bg-white/5 rounded w-3/4 mb-2" />
              <div className="h-2 bg-white/5 rounded w-full mb-1" />
              <div className="h-2 bg-white/5 rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-4 text-center">
          <AlertCircle className="w-8 h-8 text-yellow-500/60 mx-auto mb-2" />
          <p className="text-sm text-white font-semibold mb-1">Could not load CS2 updates right now</p>
          <p className="text-xs text-gray-400">Check FPS Academy for today's training focus.</p>
          <p className="text-[10px] text-gray-600 font-mono mt-2 uppercase tracking-wider">Reason: {error}</p>
        </div>
      )}

      {!loading && !error && displayNews.length === 0 && (
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center">
          <Info className="w-8 h-8 text-cyan-400/60 mx-auto mb-2" />
          <p className="text-sm text-gray-400">No CS2 updates available right now.</p>
        </div>
      )}

      {!loading && !error && displayNews.length > 0 && (
        <div className="space-y-3">
          {displayNews.map((item) => {
            const summary = cleanSteamContent(item.contents, 150);
            return (
              <a key={item.gid} href={item.url} target="_blank" rel="noopener noreferrer" className={itemClass}>
                <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 mb-1 line-clamp-2 transition-colors">{item.title}</h4>
                {summary && <p className="text-xs text-gray-400 line-clamp-2 mb-2">{summary}</p>}
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-400/80 group-hover:text-cyan-400 uppercase tracking-wider">
                    <span>Read</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default OfficialCS2News;