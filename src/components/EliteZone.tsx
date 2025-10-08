import { Cpu, Monitor, Mouse, Headphones, Zap } from "lucide-react";
import eliteZoneLogo from "@/assets/elite-zone-logo.jpg";
import eliteZonePhoto from "@/assets/elite-zone-photo.jpg";
import fpsOptimizer from "@/assets/fps-optimizer.png";

const EliteZone = () => {
  const specs = [
    {
      icon: Cpu,
      title: "Ryzen 7 9800X3D",
      description: "Latest AMD processor for maximum FPS",
    },
    {
      icon: Zap,
      title: "NVIDIA RTX 5080",
      description: "Ultimate graphics performance",
    },
    {
      icon: Monitor,
      title: "BenQ 600 Hz",
      description: "Professional esports monitors",
    },
    {
      icon: Mouse,
      title: "Logitech G Pro 2",
      description: "Tournament-grade peripherals",
    },
    {
      icon: Headphones,
      title: "Logitech Headsets",
      description: "Crystal clear audio",
    },
  ];

  return (
    <section className="py-24 px-4 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${eliteZonePhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Elite Zone Logo */}
        <div className="text-center mb-16 animate-fade-in">
          <img 
            src={eliteZoneLogo} 
            alt="FPS Elite Zone 600 Hz" 
            className="w-full max-w-md mx-auto mb-8"
          />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Experience competitive gaming at its finest with our Elite Zone — 
            where performance meets perfection.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-gold-glow transition-all duration-300 group"
            >
              <spec.icon className="w-12 h-12 mb-4 text-gold group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-gold">{spec.title}</h3>
              <p className="text-muted-foreground">{spec.description}</p>
            </div>
          ))}

          {/* FPS Optimizer Card */}
          <div className="p-6 rounded-lg bg-gradient-to-br from-card to-secondary border-2 border-gold-glow col-span-full lg:col-span-3">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img 
                src={fpsOptimizer} 
                alt="FPS Optimizer" 
                className="w-full md:w-64 h-auto"
              />
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gold-gradient">
                  FPS Optimized
                </h3>
                <p className="text-lg text-muted-foreground">
                  All our PCs are equipped with the <span className="text-gold font-semibold">FPS Optimizer suite</span>, 
                  ensuring maximum performance and stability. Every system is fine-tuned to deliver 
                  the highest frame rates and lowest latency possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteZone;
