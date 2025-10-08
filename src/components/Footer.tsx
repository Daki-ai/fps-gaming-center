import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import fpsLogo from "@/assets/fps-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-full md:col-span-1">
            <img src={fpsLogo} alt="FPS Gaming Center" className="w-20 h-20 rounded-full mb-4" />
            <p className="text-gold font-bold text-lg mb-2">FPS Gaming Center</p>
            <p className="text-muted-foreground text-sm">
              Where Performance Meets Perfection
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/fps_gaming_center/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @fps_gaming_center
              </a>
              <a 
                href="tel:076445566"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                076 44 55 66
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Location</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <p>
                Butel, Skopje<br />
                Macedonia
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Hours</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
              <p>
                Every Day<br />
                13:00 – 03:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} FPS Gaming Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
