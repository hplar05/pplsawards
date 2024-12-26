"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

interface LogoutButtonProps {
  isCollapsed: boolean;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ isCollapsed }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      toast.loading("Logging out...", { id: "logout" });
      await signOut({ callbackUrl: "/" });
      toast.success("Logged out successfully", { id: "logout" });
    } catch (error) {
      console.error(`Logout failed: ${error}`);
      toast.error("Failed to logout. Please try again.", { id: "logout" });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <motion.button
      onClick={handleSignOut}
      disabled={isLoggingOut}
      className={`w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ${
        isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <LogOut className={`h-5 w-5 ${!isCollapsed ? "mr-2" : ""}`} />
      {!isCollapsed && (
        <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
      )}
    </motion.button>
  );
};
