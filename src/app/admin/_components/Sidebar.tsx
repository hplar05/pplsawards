"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Award,
  Settings,
  ChevronRight,
  TimerIcon,
  VideoIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { LogoutButton } from "./LogoutButton";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
  { icon: Users, label: "Awardees", href: "/admin/awardees" },
  { icon: TimerIcon, label: "Countdown", href: "/admin/countdown" },
  { icon: Award, label: "Partners", href: "/admin/partners" },
  {
    icon: VideoIcon,
    label: "Video-Presentation",
    href: "/admin/video-presentation",
  },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      className={`flex flex-col h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between h-16 px-4 py-11 bg-gray-900">
        {!isCollapsed && (
          <span className="text-lg font-bold">
            <span className="text-yellow-500">PPSLAWARDS </span>ADMIN
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-full hover:bg-gray-700 transition-colors duration-200"
        >
          <ChevronRight
            className={`h-5 w-5 transition-transform duration-200 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <motion.div
                  className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors duration-200 ${
                    pathname === item.href ? "bg-gray-700 text-white" : ""
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {!isCollapsed && <span>{item.label}</span>}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <LogoutButton isCollapsed={isCollapsed} />
      </div>
    </motion.div>
  );
}
