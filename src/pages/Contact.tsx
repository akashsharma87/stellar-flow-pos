import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient">
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;