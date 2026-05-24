import TopBar from "@/components/os/TopBar";
import HeroOS from "@/components/os/HeroOS";
import AskFpsAI from "@/components/os/AskFpsAI";
import ProConfigLibrary from "@/components/os/ProConfigLibrary";
import TodayInCS2 from "@/components/os/TodayInCS2";
import ZoneUpgrade from "@/components/os/ZoneUpgrade";
import TournamentSection from "@/components/os/TournamentSection";
import FpsAcademy from "@/components/os/FpsAcademy";
import SessionMode from "@/components/os/SessionMode";
import FooterAIVERS from "@/components/os/FooterAIVERS";

const FpsOS = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <TopBar />
        <HeroOS />
        <AskFpsAI />
        <ProConfigLibrary />
        <TodayInCS2 />
        <ZoneUpgrade />
        <TournamentSection />
        <FpsAcademy />
        <SessionMode />
        <FooterAIVERS />
      </div>
    </div>
  );
};

export default FpsOS;