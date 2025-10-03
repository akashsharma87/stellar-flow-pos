import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hotelImage from "@/assets/hotel.png";
import inventoryImage from "@/assets/inventory.png";
import payrollImage from "@/assets/payroll.png";
import editImage from "@/assets/edit.png";
import whyusImage from "@/assets/whyus.png";

const MobileScreensSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const screens = [
    {
      id: "hotel",
      name: "Hotel",
      image: hotelImage,
      title: "Hotel Management",
      description: "Streamline your hotel operations with our comprehensive POS solution"
    },
    {
      id: "inventory",
      name: "Inventory",
      image: inventoryImage,
      title: "Inventory Control",
      description: "Real-time inventory tracking and automated stock management"
    },
    {
      id: "payroll",
      name: "Payroll",
      image: payrollImage,
      title: "Payroll Management",
      description: "Simplified payroll processing with accurate time tracking"
    },
    {
      id: "edit",
      name: "Tasks",
      image: editImage,
      title: "Task Management",
      description: "Efficient task organization and workflow optimization"
    }
  ];

  const tabVariants = {
    inactive: { 
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#94a3b8"
    },
    active: { 
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      color: "#3b82f6"
    }
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.9, y: 20 },
    center: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.1, y: -20 }
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{
      backgroundImage: `url(${whyusImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Partial black overlay to match the current theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">POS</span>{" "}
            <span className="gradient-text-accent">Software</span>
          </h2>
          
          <p className="text-base text-secondary/80 max-w-4xl mx-auto">
            Manage all your restaurant operations efficiently as you scale to multiple outlets across locations and get complete visibility.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Device Display - Desktop Frame for md+ screens, Mobile Frame for smaller screens */}
          <motion.div
            className="relative mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Desktop Frame - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block relative max-w-2xl mx-auto">
              {/* Monitor Frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl p-2 shadow-2xl">
                <div className="bg-black rounded-t-xl p-1.5">
                  <div className="relative bg-white rounded-t-lg overflow-hidden aspect-[16/10] shadow-inner">
                    {/* Screen Content */}
                    <div className="relative w-full h-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          variants={imageVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute inset-0 flex items-center justify-center p-4"
                        >
                          <img
                            src={screens[activeTab].image}
                            alt={screens[activeTab].title}
                            className="max-h-full max-w-full object-contain"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                
                {/* Monitor Base */}
                <div className="relative">
                  <div className="h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2.5 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-lg"></div>
                </div>
                
                {/* Monitor Stand */}
                <div className="flex justify-center">
                  <div className="w-16 h-3 bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-1.5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Desktop Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full opacity-20"
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full opacity-15"
                animate={{ 
                  y: [0, 16, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              ></motion.div>
            </div>

            {/* Mobile Frame - Visible on mobile, hidden on md+ */}
            <div className="block md:hidden relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] p-1">
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/16] shadow-inner">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                    
                    {/* Screen Content */}
                    <div className="relative w-full h-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          variants={imageVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute inset-0 flex items-center justify-center p-4"
                        >
                          <img
                            src={screens[activeTab].image}
                            alt={screens[activeTab].title}
                            className="max-h-full max-w-full object-contain"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                
                {/* Phone Shadow */}
                <div className="absolute inset-0 rounded-[3rem] shadow-2xl opacity-30 pointer-events-none"></div>
              </div>

              {/* Mobile Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-20"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full opacity-15"
                animate={{ 
                  y: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="flex justify-center gap-2 md:gap-3 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {screens.map((screen, index) => (
              <motion.button
                key={screen.id}
                className={`px-3 md:px-5 py-2.5 rounded-xl font-medium transition-all duration-300 border backdrop-blur-sm text-sm md:text-base ${
                  activeTab === index
                    ? "border-primary/30 shadow-lg"
                    : "border-gray-200/20 hover:border-primary/20"
                }`}
                variants={tabVariants}
                animate={activeTab === index ? "active" : "inactive"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(index)}
              >
                {screen.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Screen Info */}
          <motion.div
            className="text-center max-w-2xl mx-auto"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-primary">
              {screens[activeTab].title}
            </h3>
            <p className="text-secondary leading-relaxed">
              {screens[activeTab].description}
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore POS
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileScreensSection;