import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
// Import ReactQuill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '@/components/ui/quill-editor.css';

const AdminBlogs = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [newBlogPost, setNewBlogPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "General",
    tags: "",
    featuredImage: "",
    published: true,
    seo: {
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      twitterCardType: "summary"
    }
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle nested SEO properties
    if (name.startsWith("seo.")) {
      const seoField = name.split(".")[1];
      setNewBlogPost(prev => ({
        ...prev,
        seo: {
          ...prev.seo,
          [seoField]: value
        }
      }));
    } else {
      setNewBlogPost(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    // Handle nested SEO properties
    if (name.startsWith("seo.")) {
      const seoField = name.split(".")[1];
      setNewBlogPost(prev => ({
        ...prev,
        seo: {
          ...prev.seo,
          [seoField]: value
        }
      }));
    } else {
      setNewBlogPost(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setNewBlogPost(prev => ({ ...prev, [name]: checked }));
  };

  // Handle content change for ReactQuill
  const handleContentChange = (content: string) => {
    setNewBlogPost(prev => ({ ...prev, content }));
  };

  const handleCreateBlogPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/blog/dashboard/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newBlogPost)
      });

      const data = await response.json();

      if (response.ok) {
        // Show success modal
        setShowSuccessModal(true);
        // Reset form
        setNewBlogPost({
          title: "",
          excerpt: "",
          content: "",
          category: "General",
          tags: "",
          featuredImage: "",
          published: true,
          seo: {
            metaTitle: "",
            metaDescription: "",
            metaKeywords: "",
            ogTitle: "",
            ogDescription: "",
            ogImage: "",
            twitterCardType: "summary"
          }
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to create blog post.",
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
      setIsCreating(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text-primary">Create New Blog</h1>
            <p className="text-secondary mt-2">Fill in the details below to create your blog post</p>
          </div>
          <Button asChild variant="outline">
            <Link to="/auth/dashboard/blogs">View All Blogs</Link>
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-lg">
          <CardTitle className="text-2xl">Blog Post Details</CardTitle>
          <CardDescription>Fill in the information for your new blog post</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleCreateBlogPost} className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Basic Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base">Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newBlogPost.title}
                    onChange={handleInputChange}
                    placeholder="Enter blog post title"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-base">Category</Label>
                  <Select name="category" value={newBlogPost.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Analytics">Analytics</SelectItem>
                      <SelectItem value="Security">Security</SelectItem>
                      <SelectItem value="General">General</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-base">Excerpt *</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={newBlogPost.excerpt}
                  onChange={handleInputChange}
                  placeholder="Write a compelling summary of your post"
                  required
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-base">Tags</Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={newBlogPost.tags}
                    onChange={handleInputChange}
                    placeholder="tag1, tag2, tag3"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featuredImage" className="text-base">Featured Image URL</Label>
                  <Input
                    id="featuredImage"
                    name="featuredImage"
                    value={newBlogPost.featuredImage}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    type="url"
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={newBlogPost.published}
                  onCheckedChange={(checked) => handleSwitchChange("published", checked)}
                />
                <Label htmlFor="published">Publish immediately</Label>
              </div>
            </div>

            <Separator />

            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Content</h3>
              </div>
              
              <div className="space-y-2 border-t border-gray-700/30 pt-4">
                <Label htmlFor="content" className="text-base">Content *</Label>
                <ReactQuill
                  theme="snow"
                  value={newBlogPost.content}
                  onChange={handleContentChange}
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      ['link', 'image'],
                      ['clean']
                    ]
                  }}
                  className="min-h-[300px]"
                />
              </div>
            </div>

            <Separator />

            {/* SEO Settings */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-highlight/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">SEO Settings</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="seo.metaTitle" className="text-base">Meta Title</Label>
                  <Input
                    id="seo.metaTitle"
                    name="seo.metaTitle"
                    value={newBlogPost.seo.metaTitle}
                    onChange={handleInputChange}
                    placeholder="Optimized title for search engines"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seo.metaKeywords" className="text-base">Meta Keywords</Label>
                  <Input
                    id="seo.metaKeywords"
                    name="seo.metaKeywords"
                    value={newBlogPost.seo.metaKeywords}
                    onChange={handleInputChange}
                    placeholder="keyword1, keyword2, keyword3"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo.metaDescription" className="text-base">Meta Description</Label>
                <Textarea
                  id="seo.metaDescription"
                  name="seo.metaDescription"
                  value={newBlogPost.seo.metaDescription}
                  onChange={handleInputChange}
                  placeholder="Brief description for search results"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <Separator />

            {/* Social Media Settings */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Social Media Settings</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="seo.ogTitle" className="text-base">Open Graph Title</Label>
                  <Input
                    id="seo.ogTitle"
                    name="seo.ogTitle"
                    value={newBlogPost.seo.ogTitle}
                    onChange={handleInputChange}
                    placeholder="Title for social media sharing"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seo.ogImage" className="text-base">Open Graph Image URL</Label>
                  <Input
                    id="seo.ogImage"
                    name="seo.ogImage"
                    value={newBlogPost.seo.ogImage}
                    onChange={handleInputChange}
                    placeholder="https://example.com/social-image.jpg"
                    type="url"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo.ogDescription" className="text-base">Open Graph Description</Label>
                <Textarea
                  id="seo.ogDescription"
                  name="seo.ogDescription"
                  value={newBlogPost.seo.ogDescription}
                  onChange={handleInputChange}
                  placeholder="Description for social media sharing"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo.twitterCardType" className="text-base">Twitter Card Type</Label>
                <Select name="seo.twitterCardType" value={newBlogPost.seo.twitterCardType} onValueChange={(value) => handleSelectChange("seo.twitterCardType", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select card type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summary">Summary</SelectItem>
                    <SelectItem value="summary_large_image">Summary with Large Image</SelectItem>
                    <SelectItem value="app">App</SelectItem>
                    <SelectItem value="player">Player</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <Button type="submit" disabled={isCreating} className="w-full md:w-auto">
                {isCreating ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : "Create Blog Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              Blog Post Created Successfully!
            </DialogTitle>
            <DialogDescription>
              Your blog post has been created successfully. You can view it in the published blogs section.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <Button asChild>
              <Link to="/auth/dashboard/blogs">View All Blogs</Link>
            </Button>
            <Button variant="outline" onClick={() => setShowSuccessModal(false)}>
              Create Another Post
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBlogs;