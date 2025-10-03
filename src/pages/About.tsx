import Navbar from "@/components/Navbar";
import WhyUsSection from "@/components/WhyUsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient">
      <Navbar />
      <main>
        <WhyUsSection />
        <WhatWeDoSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;