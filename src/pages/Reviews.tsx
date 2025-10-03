import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient">
      <Navbar />
      <main>
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;