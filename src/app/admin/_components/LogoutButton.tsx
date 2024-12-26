"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";

export const LogoutButton = () => {
  const SignOut = () => {
    try {
      toast.success("Logout Successfully");
      setTimeout(() => {
        signOut();
      }, 2000);
    } catch (error) {
      console.log(`Something went wrong! ${error}`);
      toast.error("Something went wrong!");
    }
  };
  return (
    <button
      className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
      onClick={SignOut}
    >
      <LogOut className="h-5 w-5 mr-3" />
      Logout
    </button>
  );
};
