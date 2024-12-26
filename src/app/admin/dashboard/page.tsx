"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Trophy,
  TrendingUp,
  Calendar,
  Plus,
  FileText,
  Mail,
} from "lucide-react";
import Link from "next/link";

// Mock data for recent activities
const recentActivities = [
  {
    id: 1,
    action: "New awardee added",
    category: "Innovation",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    action: "Category updated",
    category: "Leadership",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    action: "Nomination received",
    category: "Sustainability",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    action: "Award ceremony scheduled",
    category: "All",
    timestamp: "2 days ago",
  },
];

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickAction = (action: string) => {
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(`Quick action triggered: ${action}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Awardees
              </CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-blue-100">+5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <Trophy className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-green-100">2 new categories added</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nominations</CardTitle>
              <Award className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,567</div>
              <p className="text-xs text-purple-100">+12% from last year</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Engagement Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-yellow-100">+3% from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li
                    key={activity.id}
                    className="bg-white p-4 rounded-lg shadow"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{activity.action}</span>
                      <span className="text-sm text-gray-500">
                        {activity.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Category: {activity.category}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => handleQuickAction("Add Awardee")}
                disabled={isLoading}
              >
                <Plus className="mr-2 h-4 w-4" /> Add New Awardee
              </Button>
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => handleQuickAction("Schedule Ceremony")}
                disabled={isLoading}
              >
                <Calendar className="mr-2 h-4 w-4" /> Schedule Ceremony
              </Button>
              <Button
                className="w-full bg-purple-500 hover:bg-purple-600 text-white"
                onClick={() => handleQuickAction("Generate Report")}
                disabled={isLoading}
              >
                <FileText className="mr-2 h-4 w-4" /> Generate Report
              </Button>
              <Button
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                onClick={() => handleQuickAction("Send Newsletter")}
                disabled={isLoading}
              >
                <Mail className="mr-2 h-4 w-4" /> Send Newsletter
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/admin/awardees"
            className="text-blue-500 hover:underline"
          >
            View All Awardees
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
