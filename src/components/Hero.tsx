import heroImage from "@/assets/hero-bg.jpg";
import fpsLogo from "@/assets/fps-logo-new.png";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-16 md:py-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(" + heroImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in flex flex-col items-center max-w-5xl">
        <img
          src={fpsLogo}
          alt="FPS Gaming Center"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-3 md:mb-4 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-gold-gradient tracking-tight">
          WHERE CHAMPIONS TRAIN
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-1 text-foreground font-semibold">
          FPS Gaming Center  Skopje
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gold mb-6">
          Elite Zone 600 Hz Experience
        </p>

        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;