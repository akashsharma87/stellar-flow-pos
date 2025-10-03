import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  BarChart3, 
  Users, 
  CreditCard, 
  Package, 
  Cloud
} from "lucide-react";
// We'll use the hotel.png and payroll.png as our split images
import hotelImage from "@/assets/hotel.png";
import payrollImage from "@/assets/payroll.png";

const WhatWeDoSection = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Smart Sales Processing",
      description: "Lightning-fast checkout with AI-powered product recognition and dynamic pricing.",
      delay: 0.1
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and predictive analytics to optimize your business performance.",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Build lasting relationships with comprehensive customer profiles and loyalty programs.",
      delay: 0.3
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Accept all payment methods with secure, PCI-compliant transaction processing.",
      delay: 0.4
    },
    {
      icon: Package,
      title: "Inventory Control",
      description: "Automated inventory tracking with low-stock alerts and purchase order generation.",
      delay: 0.5
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Access your data anywhere with secure cloud sync and multi-location support.",
      delay: 0.6
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
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

        {/* Split Layout Sections */}
        <div className="space-y-32 max-w-7xl mx-auto">
          {/* First Split Section - Image Left, Content Right */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Side */}
            <div className="md:w-1/2">
              <div className="relative">
                <div className="glass-card rounded-3xl p-6 border border-gray-700/30">
                  <img 
                    src={hotelImage} 
                    alt="Hotel Management System" 
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full opacity-20"></div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="md:w-1/2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4 gradient-text-primary">
                    Integrated Business Solutions
                  </h3>
                  <p className="text-secondary text-lg leading-relaxed">
                    Our comprehensive POS system combines all essential business tools in one seamless platform, 
                    eliminating the need for multiple disconnected applications.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {features.slice(0, 3).map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div 
                        key={feature.title}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="mt-1 w-12 h-12 glass-card rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700/30">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-foreground">
                            {feature.title}
                          </h4>
                          <p className="text-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Second Split Section - Content Left, Image Right */}
          <motion.div 
            className="flex flex-col md:flex-row-reverse items-center gap-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Side */}
            <div className="md:w-1/2">
              <div className="relative">
                <div className="glass-card rounded-3xl p-6 border border-gray-700/30">
                  <img 
                    src={payrollImage} 
                    alt="Payroll Management System" 
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-30"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="md:w-1/2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4 gradient-text-accent">
                    Data-Driven Growth
                  </h3>
                  <p className="text-secondary text-lg leading-relaxed">
                    Transform your business decisions with real-time analytics and intelligent insights 
                    that help you understand customer behavior and optimize operations.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {features.slice(3, 6).map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div 
                        key={feature.title}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="mt-1 w-12 h-12 glass-card rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700/30">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-foreground">
                            {feature.title}
                          </h4>
                          <p className="text-secondary">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;