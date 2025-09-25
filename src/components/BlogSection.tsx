import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Retail: AI-Powered POS Systems",
      excerpt: "Discover how artificial intelligence is revolutionizing point-of-sale systems and transforming the retail landscape.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      id: 2,
      title: "Maximizing Restaurant Efficiency with Smart Analytics",
      excerpt: "Learn how data-driven insights can boost your restaurant's performance and increase customer satisfaction.",
      date: "Dec 12, 2024", 
      readTime: "7 min read",
      category: "Analytics",
      gradient: "from-accent/20 to-highlight/20",
    },
    {
      id: 3,
      title: "Security Best Practices for Modern POS Systems",
      excerpt: "Essential security measures every business owner should implement to protect customer data and transactions.",
      date: "Dec 8, 2024",
      readTime: "6 min read", 
      category: "Security",
      gradient: "from-highlight/20 to-primary/20",
    },
  ];

  return (
    <section id="blog" className="py-20 relative">
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
            <span className="text-sm text-secondary">Latest Insights</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry <span className="gradient-text-primary">Insights</span>{" "}
            <span className="gradient-text-accent">& News</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Stay ahead with the latest trends, tips, and insights from the world of modern commerce
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full group-hover:glow-accent transition-all duration-300">
                {/* Featured Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="glass-card px-3 py-1 rounded-full text-xs font-medium text-accent">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Animated Particles */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full opacity-60"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary rounded-full opacity-80"
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center text-sm text-secondary mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:gradient-text-primary transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-secondary leading-relaxed mb-6 line-clamp-3 group-hover:text-muted transition-colors duration-300">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <motion.div
                    className="flex items-center text-accent font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Read More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 group-hover/link:glow-accent transition-all duration-300" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button variant="glass" size="lg" className="group">
            View All Articles
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;