import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import eliteZonePhoto from "@/assets/elite-zone-photo.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const Gallery = () => {
  const images = [eliteZonePhoto, gallery1, gallery2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-secondary to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gold-gradient">Gaming Arena</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Gallery Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden border-2 border-gold-glow shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <img
              src={images[currentIndex]}
              alt={`FPS Gaming Center - Image ${currentIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                currentIndex === 2 ? "object-[center_55%]" : ""
              }`}
            />
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-gold hover:text-black border border-gold"
            onClick={prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-gold hover:text-black border border-gold"
            onClick={nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gold w-8"
                    : "bg-muted-foreground hover:bg-gold"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
