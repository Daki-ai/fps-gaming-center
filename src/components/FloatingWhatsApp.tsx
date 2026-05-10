import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "38976445566";
  const message = "Здраво! Сакам да резервирам седиште во FPS Gaming Center";
  const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 group">
      <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-60" />
      <span className="absolute inset-0 rounded-full bg-gold animate-pulse opacity-40" />
      <div className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-gold/50 hover:scale-110 transition-all duration-300 bg-gradient-to-br from-gold-light to-gold-dark border-2 border-gold-glow">
        <MessageCircle className="w-8 h-8 text-black" fill="black" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;