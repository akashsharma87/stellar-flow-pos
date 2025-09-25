import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Restaurant Owner",
      company: "Golden Dragon Bistro",
      rating: 5,
      text: "This POS system transformed our restaurant operations. Order processing is 3x faster, and the analytics helped us increase revenue by 25% in just 3 months.",
      avatar: "SC",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Retail Manager", 
      company: "TechHub Electronics",
      rating: 5,
      text: "The inventory management features are phenomenal. We've eliminated stockouts and reduced ordering time by 80%. The customer support is exceptional too.",
      avatar: "MJ",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Cafe Owner",
      company: "Brew & Bean",
      rating: 5,
      text: "Switching to this POS was the best business decision we made. The intuitive interface means new staff can learn it in minutes, not hours.",
      avatar: "ER",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text-primary">Customers</span>{" "}
            <span className="gradient-text-accent">Say</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Real stories from businesses that transformed their operations with our POS system
          </p>
        </motion.div>

        {/* Main Review Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden glow-accent">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote size={80} className="text-accent" />
            </div>

            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-accent fill-current mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-center text-foreground mb-8 leading-relaxed font-medium">
                "{reviews[currentReview].text}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4 glow-primary">
                  <span className="text-white font-bold text-lg">
                    {reviews[currentReview].avatar}
                  </span>
                </div>
                <div className="text-center">
                  <p className="font-bold text-foreground text-lg">
                    {reviews[currentReview].name}
                  </p>
                  <p className="text-secondary">
                    {reviews[currentReview].role} at {reviews[currentReview].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Review Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview
                  ? "bg-accent glow-accent scale-125"
                  : "bg-card-border hover:bg-accent/50"
              }`}
            />
          ))}
        </div>

        {/* Additional Reviews Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="glass-card p-6 rounded-2xl hover:glow-accent transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setCurrentReview(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent font-bold">{review.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:gradient-text-accent transition-all duration-300">
                    {review.name}
                  </p>
                  <p className="text-sm text-secondary">{review.company}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              
              <p className="text-secondary text-sm leading-relaxed line-clamp-3 group-hover:text-muted transition-colors duration-300">
                {review.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;