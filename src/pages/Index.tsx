import Hero from "@/components/Hero";
import About from "@/components/About";
import EliteZone from "@/components/EliteZone";
import Gallery from "@/components/Gallery";
import BookingSeat from "@/components/BookingSeat";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <EliteZone />
      <Gallery />
      <BookingSeat />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
