import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  BarChart3, 
  Users, 
  CreditCard, 
  Package, 
  Cloud,
  ArrowRight
} from "lucide-react";

const WhatWeDoSection = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Smart Sales Processing",
      description: "Lightning-fast checkout with AI-powered product recognition and dynamic pricing.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and predictive analytics to optimize your business performance.",
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Build lasting relationships with comprehensive customer profiles and loyalty programs.",
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Accept all payment methods with secure, PCI-compliant transaction processing.",
    },
    {
      icon: Package,
      title: "Inventory Control",
      description: "Automated inventory tracking with low-stock alerts and purchase order generation.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Access your data anywhere with secure cloud sync and multi-location support.",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 w-full h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-accent to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-secondary">What We Do</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="gradient-text-primary">POS</span>{" "}
            <span className="gradient-text-accent">Solutions</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Every feature designed to streamline your operations and accelerate growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="glass-card p-8 rounded-2xl h-full relative overflow-hidden group-hover:glow-accent transition-all duration-300">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    className="relative z-10 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center group-hover:glow-primary">
                      <Icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </motion.div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:gradient-text-primary transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-secondary leading-relaxed mb-6 group-hover:text-muted transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Gradient Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;