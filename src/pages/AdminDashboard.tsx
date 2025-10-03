import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    contactMessages: 0,
    subscriptions: 0,
    blogPosts: 0
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem("token");
      
      // Fetch contact messages count
      const contactResponse = await fetch("http://localhost:5000/api/contact", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      // Fetch subscriptions count
      const subscriptionResponse = await fetch("http://localhost:5000/api/subscriptions", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      // Fetch blog posts count
      const blogResponse = await fetch("http://localhost:5000/api/blog/posts", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (contactResponse.ok && subscriptionResponse.ok && blogResponse.ok) {
        const contactData = await contactResponse.json();
        const subscriptionData = await subscriptionResponse.json();
        const blogData = await blogResponse.json();
        
        setStats({
          contactMessages: contactData.messages?.length || 0,
          subscriptions: subscriptionData.subscriptions?.length || 0,
          blogPosts: blogData.blogPosts?.length || 0
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch dashboard data.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-accent border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text-primary">Dashboard Overview</h1>
        <p className="text-secondary mt-2">Welcome to your admin dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Messages</CardTitle>
            <CardDescription>Total messages received</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold gradient-text-accent">{stats.contactMessages}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subscribers</CardTitle>
            <CardDescription>Newsletter subscribers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold gradient-text-primary">{stats.subscriptions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Published articles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold gradient-text-highlight">{stats.blogPosts}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest messages and subscriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-secondary">Recent activity will be displayed here.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common admin tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-secondary">Quick action buttons will be available here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
