import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
// Import images
import hotelImage from "@/assets/hotel.png";
import inventoryImage from "@/assets/inventory.png";
import payrollImage from "@/assets/payroll.png";
import posMockupImage from "@/assets/pos-mockup.png";
import brainstormingImage from "@/assets/brainstorming-8.png";
import whyusImage from "@/assets/whyus.png";

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Map categories to images
  const getCategoryImage = (category: string) => {
    switch (category?.toLowerCase()) {
      case "technology":
        return hotelImage;
      case "analytics":
        return inventoryImage;
      case "security":
        return payrollImage;
      default:
        return posMockupImage;
    }
  };

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blog/posts/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlogPost(data.blogPost);
        } else {
          // Handle error - in a real app, you might want to show a 404 page
          console.error("Failed to fetch blog post");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-accent border-t-transparent"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-secondary mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="outline" className="mb-8">
            <a href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>
          </Button>

          <article className="glass-card rounded-2xl p-8">
            <div className="mb-6">
              <span className="glass-card px-3 py-1 rounded-full text-xs font-medium text-accent">
                {blogPost.category || "General"}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4 gradient-text-primary">
              {blogPost.title}
            </h1>

            <div className="flex items-center text-secondary mb-8">
              <span>By {blogPost.author?.name || "Anonymous"}</span>
              <span className="mx-2">•</span>
              <span>{new Date(blogPost.createdAt).toLocaleDateString()}</span>
            </div>

            {/* Hero Image Section */}
            <div className="h-64 md:h-96 rounded-xl mb-8 overflow-hidden">
              {blogPost.featuredImage ? (
                <img 
                  src={blogPost.featuredImage} 
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={getCategoryImage(blogPost.category)} 
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-secondary mb-8">
                {blogPost.excerpt}
              </p>
              <div 
                className="text-foreground"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;