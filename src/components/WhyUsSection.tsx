import { motion } from "framer-motion";
import { Lightbulb, DollarSign, Smartphone, Headphones } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Cutting-edge AI and machine learning capabilities that evolve with your business needs.",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, competitive pricing that scales with your success.",
      gradient: "from-accent to-accent/70",
    },
    {
      icon: Smartphone,
      title: "Effortless UX",
      description: "Intuitive interface designed for speed and efficiency, reducing training time by 80%.",
      gradient: "from-highlight to-highlight/70",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert assistance to ensure your business never skips a beat.",
      gradient: "from-primary/80 to-accent/80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Our <span className="gradient-text-primary">Clients</span>{" "}
            <span className="gradient-text-accent">Love Us</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Discover what makes our POS system the preferred choice for forward-thinking businesses
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden group-hover:glow-accent transition-all duration-300">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center mb-6 group-hover:glow-accent"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="w-8 h-8 text-accent" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:gradient-text-accent transition-all duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;