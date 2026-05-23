import { Cpu } from "lucide-react";

const FooterAIVERS = () => {
  return (
    <footer className="px-4 py-16 border-t border-white/5 mt-12">
      <div className="max-w-5xl mx-auto">
        <div className="bg-black/40 border border-white/5 rounded-2xl p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">FPS OS is powered by AIVERS AI</p>
                <p className="text-xs text-gray-500">AI systems for modern businesses</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-300 mb-3">Want this system for your business?</p>
              <a href="https://aivers.io" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 rounded-lg text-cyan-400 text-sm font-semibold uppercase tracking-wider transition-all duration-300">
                Visit aivers.io
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-xs text-gray-600">FPS Gaming Center - Skopje. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAIVERS;