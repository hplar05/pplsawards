"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Trophy,
  Calendar,
  Plus,
  FileText,
  Mail,
  Handshake,
} from "lucide-react";
import Link from "next/link";

type DashboardData = {
  totalAwardees: number;
  categories: number;
  recentAwardees: {
    id: string;
    fullname: string;
    categories: string;
    createdAt: string;
  }[];
};

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();
        setDashboardData(data);
      } catch (err) {
        setError("Failed to load dashboard data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleQuickAction = (action: string) => {
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(`Quick action triggered: ${action}`);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            {/* <Handshake className="mr-4 max-md:hidden" size={40} /> */}
            Dashboard
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Awardees
              </CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData?.totalAwardees}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Categories</CardTitle>
              <Trophy className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData?.categories}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Awardees</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {dashboardData?.recentAwardees.map((awardee) => (
                  <li
                    key={awardee.id}
                    className="bg-white p-4 rounded-lg shadow"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{awardee.fullname}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(awardee.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Category: {awardee.categories}
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
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white "
                onClick={() => handleQuickAction("Add Awardee")}
                disabled={isLoading}
              >
                <Plus className="mr-2 h-4 w-4" /> Add New Awardee
              </Button>
              <Button
                className="w-full bg-yellow-700 hover:bg-yellow-800 text-white "
                onClick={() => handleQuickAction("Add Awardee")}
                disabled={isLoading}
              >
                <Plus className="mr-2 h-4 w-4" /> Add New Partners
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
      </main>
    </div>
  );
}
