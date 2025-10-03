import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 2 users",
        "Basic reporting",
        "Inventory management",
        "Email support",
        "1 location",
      ],
      notIncluded: [
        "Advanced analytics",
        "API access",
        "Priority support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 users",
        "Advanced reporting",
        "Inventory management",
        "API access",
        "Up to 3 locations",
        "Priority email support",
      ],
      notIncluded: [
        "Custom integrations",
        "Dedicated account manager",
      ],
      cta: "Try Free for 14 Days",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited users",
        "Advanced analytics",
        "Custom integrations",
        "API access",
        "Unlimited locations",
        "24/7 phone support",
        "Dedicated account manager",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and bank transfers."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for non-profit organizations. Contact our sales team for more information."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, <span className="gradient-text-primary">Transparent</span>{" "}
                <span className="gradient-text-accent">Pricing</span>
              </h1>
              <p className="text-xl text-secondary max-w-2xl mx-auto mb-12">
                Choose the perfect plan for your business. All plans include our core features with no hidden fees.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`glass-card rounded-2xl p-8 relative ${
                    plan.popular ? "ring-2 ring-accent scale-105" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-secondary"> {plan.period}</span>}
                    </div>
                    <p className="text-secondary">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-secondary">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center opacity-50">
                        <X className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="text-secondary line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked <span className="gradient-text-primary">Questions</span>
              </h2>
              <p className="text-secondary">
                Everything you need to know about our pricing
              </p>
            </motion.div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="glass-card rounded-2xl px-6">
                    <AccordionTrigger className="text-left py-4 hover:no-underline">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-secondary pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;