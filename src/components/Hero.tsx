import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import fpsLogo from "@/assets/fps-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img src={fpsLogo} alt="FPS Gaming Center" className="w-20 h-20 md:w-24 md:h-24 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gold-gradient tracking-tight">
          WHERE CHAMPIONS TRAIN
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-foreground font-semibold">
          FPS Gaming Center – Skopje
        </p>
        <p className="text-lg md:text-xl mb-12 text-gold">
          Elite Zone 600 Hz Experience
        </p>
        
        <Button 
          variant="hero"
          size="lg"
          className="text-lg px-8 py-6 font-bold"
          asChild
        >
          <a 
            href="https://www.instagram.com/fps_gaming_center/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <Instagram className="w-6 h-6" />
            Book Your Seat
          </a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
