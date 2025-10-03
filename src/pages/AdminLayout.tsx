import { useState, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import AdminSidebar from "@/components/AdminSidebar";
import { useToast } from "@/hooks/use-toast";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Check if user is authenticated
  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/auth");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (!response.ok) {
          localStorage.removeItem("token");
          navigate("/auth");
          return;
        }

        const userData = await response.json();
        // All users are admins, so we can proceed
      } catch (error) {
        console.error("Authentication verification error:", error);
        localStorage.removeItem("token");
        navigate("/auth");
      }
    };

    verifyAuth();
  }, [navigate, location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-gradient">
      <AdminSidebar onLogout={handleLogout} />
      
      {/* Main content */}
      <div className="md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;