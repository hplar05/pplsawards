"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Award, Users, Trophy, Search, Plus } from "lucide-react";

// Mock data for awardees
const awardees = [
  {
    id: 1,
    name: "John Doe",
    category: "Innovation",
    year: 2023,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Jane Smith",
    category: "Leadership",
    year: 2023,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Bob Johnson",
    category: "Sustainability",
    year: 2022,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Alice Brown",
    category: "Community Service",
    year: 2022,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Charlie Davis",
    category: "Innovation",
    year: 2021,
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAwardees = awardees.filter(
    (awardee) =>
      awardee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedYear === "All" || awardee.year.toString() === selectedYear) &&
      (selectedCategory === "All" || awardee.category === selectedCategory)
  );

  const years = [
    "All",
    ...Array.from(new Set(awardees.map((a) => a.year.toString()))),
  ];
  const categories = [
    "All",
    ...Array.from(new Set(awardees.map((a) => a.category))),
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Awardees
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{awardees.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Categories
                </CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {categories.length - 1}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Latest Year
                </CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.max(...awardees.map((a) => a.year))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-0">
                Awardees
              </h2>
              <Button className="w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" /> Add New Awardee
              </Button>
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search awardees"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {filteredAwardees.map((awardee) => (
                  <li key={awardee.id}>
                    <div className="px-4 py-4 flex items-center sm:px-6">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center">
                          <Avatar className="mr-4">
                            <AvatarImage
                              src={awardee.image}
                              alt={awardee.name}
                            />
                            <AvatarFallback>
                              {awardee.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900 truncate">
                              {awardee.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {awardee.category} - {awardee.year}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-5 flex-shrink-0">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
