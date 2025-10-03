import Navbar from "@/components/Navbar";
import MobileScreensSection from "@/components/MobileScreensSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient">
      <Navbar />
      <main>
        <MobileScreensSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;