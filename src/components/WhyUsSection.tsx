import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, DollarSign, Smartphone, Headphones } from "lucide-react";

const WhyUsSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Cutting-edge AI and machine learning capabilities that evolve with your business needs.",
      fullDescription: "Our platform continuously evolves with the latest AI and machine learning technologies, ensuring you always have access to cutting-edge features. We release updates regularly to keep your system ahead of the competition, automatically adapting to new business trends and customer expectations.",
      delay: 0.1
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, competitive pricing that scales with your success.",
      fullDescription: "We believe in complete transparency with our pricing model. What you see is what you get - no hidden fees, no surprise charges. Our tiered pricing structure scales with your business needs, ensuring you only pay for what you use while having the flexibility to upgrade as you grow.",
      delay: 0.2
    },
    {
      icon: Smartphone,
      title: "Effortless UX",
      description: "Intuitive interface designed for speed and efficiency, reducing training time by 80%.",
      fullDescription: "Our user interface has been meticulously crafted for maximum efficiency and ease of use. With intuitive design principles and thoughtful workflows, new team members can be fully productive within hours, not weeks. The streamlined experience reduces errors and increases customer satisfaction.",
      delay: 0.3
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert assistance to ensure your business never skips a beat.",
      fullDescription: "Our dedicated support team is available 24/7 to assist with any issues or questions. With experts in multiple time zones, you'll always have access to professional assistance when you need it most. From troubleshooting to optimization advice, we're here to ensure your success.",
      delay: 0.4
    },
  ];

  // Get the icon component for the active feature
  const ActiveIcon = features[activeFeature].icon;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
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

        {/* Two-section layout - responsive for mobile */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left side - Description (without card styling) */}
          <div className="lg:w-1/2">
            <div className="h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-6">
                  {ActiveIcon && <ActiveIcon className="w-8 h-8 text-accent" />}
                </div>
                <h3 className="text-3xl font-bold gradient-text-primary">
                  {features[activeFeature].title}
                </h3>
              </div>
              
              <div className="pl-4 border-l-2 border-accent/30">
                <p className="text-secondary text-lg leading-relaxed">
                  {features[activeFeature].fullDescription}
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Efficient</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">Reliable</span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">Scalable</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Smaller Cards */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className={`bg-background/30 rounded-xl p-4 cursor-pointer border border-gray-700/30 transition-all duration-300 ${
                      activeFeature === index 
                        ? "scale-105 shadow-lg glow-accent" 
                        : "hover:scale-105 hover:glow-primary"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: feature.delay }}
                    viewport={{ once: true }}
                    onHoverStart={() => setActiveFeature(index)}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-bold text-md mb-1">{feature.title}</h4>
                      <p className="text-xs text-secondary">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;