import { Button } from "@/components/ui/button";
import { Instagram, Phone } from "lucide-react";

const BookingSeat = () => {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-gold-gradient">Level Up?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Book your seat at the Elite Zone and experience gaming like never before
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="hero"
              size="lg"
              className="text-lg px-10 py-6 font-bold w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://www.instagram.com/fps_gaming_center/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Instagram className="w-6 h-6" />
                Book on Instagram
              </a>
            </Button>

            <a 
              href="tel:076445566"
              className="flex items-center gap-3 text-xl font-bold text-gold hover:text-gold-glow transition-colors"
            >
              <Phone className="w-6 h-6" />
              076 44 55 66
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-16">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-bold mb-2 text-gold">Location</h3>
              <p className="text-muted-foreground text-lg">
                Butel, Skopje<br />
                Macedonia
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-bold mb-2 text-gold">Hours</h3>
              <p className="text-muted-foreground text-lg">
                Every Day<br />
                13:00 – 05:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSeat;
