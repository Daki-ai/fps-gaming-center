import { MapPin, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <section className="pt-4 pb-16 md:pt-6 md:pb-20 px-4 bg-gradient-to-b from-black to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gold-gradient">FPS Gaming Center</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FPS Gaming Center is the first 600 Hz gaming center in Macedonia, 
            designed for both professional esports athletes and casual gamers. Located in 
            the heart of Butel, Skopje, we offer an unparalleled gaming experience with 
            cutting-edge technology and a premium atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-gold-glow transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-dark to-gold rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gold">Prime Location</h3>
            <p className="text-muted-foreground">
              Easily accessible in Butel, Skopje, Macedonia
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-gold-glow transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-dark to-gold rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gold">All Skill Levels</h3>
            <p className="text-muted-foreground">
              From casual players to professional esports teams
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-gold-glow transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-dark to-gold rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gold">Elite Performance</h3>
            <p className="text-muted-foreground">
              Tournament-grade equipment and optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
