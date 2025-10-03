import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blog/posts");
        if (response.ok) {
          const data = await response.json();
          // Take only the first 3 posts for the homepage
          setBlogPosts(data.blogPosts.slice(0, 3));
        } else {
          console.error("Failed to fetch blog posts");
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm text-secondary">Latest Insights</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry <span className="gradient-text-primary">Insights</span>{" "}
              <span className="gradient-text-accent">& News</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Stay ahead with the latest trends, tips, and insights from the world of modern commerce
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden h-96 animate-pulse bg-card/50"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
              key={post._id}
              className="group"
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
              <Link to={`/blog/${post._id}`} className="cursor-pointer">
                <div className="glass-card rounded-2xl overflow-hidden h-full group-hover:glow-accent transition-all duration-300">
                  {/* Featured Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="glass-card px-3 py-1 rounded-full text-xs font-medium text-accent">
                        {post.category || "General"}
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
                        {formatDate(post.createdAt)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime || "5 min read"}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:gradient-text-primary transition-all duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                          <span 
                            key={tagIndex} 
                            className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-secondary/20 text-secondary rounded-full text-xs">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

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
              </Link>
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
          <Button variant="glass" size="lg" className="group" asChild>
            <Link to="/blog">
              View All Articles
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;