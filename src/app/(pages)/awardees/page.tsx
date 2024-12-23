"use client";

import { useState } from "react";
import { Award, Search, Briefcase, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";

// This would typically come from an API or database
const awardees = [
  {
    id: 1,
    name: "Maria Santos",
    position: "City Mayor",
    location: "Cebu City",
    image: "/placeholder.svg?height=300&width=300",
    achievement: "Implemented innovative waste management program",
    year: 2023,
    category: "Local Governance",
  },
  {
    id: 2,
    name: "Juan dela Cruz",
    position: "Public School Teacher",
    location: "Manila",
    image: "/placeholder.svg?height=300&width=300",
    achievement:
      "Developed successful literacy program for underprivileged children",
    year: 2023,
    category: "Education",
  },
  {
    id: 3,
    name: "Elena Reyes",
    position: "Public Health Officer",
    location: "Davao City",
    image: "/placeholder.svg?height=300&width=300",
    achievement: "Led successful COVID-19 vaccination campaign",
    year: 2022,
    category: "Healthcare",
  },
  {
    id: 4,
    name: "Roberto Lim",
    position: "Barangay Captain",
    location: "Quezon City",
    image: "/placeholder.svg?height=300&width=300",
    achievement: "Initiated community-based disaster preparedness program",
    year: 2022,
    category: "Disaster Management",
  },
  {
    id: 5,
    name: "Amelia Tan",
    position: "Social Welfare Officer",
    location: "Iloilo City",
    image: "/placeholder.svg?height=300&width=300",
    achievement:
      "Created successful livelihood program for persons with disabilities",
    year: 2021,
    category: "Social Welfare",
  },
  {
    id: 6,
    name: "Carlos Bautista",
    position: "Environmental Officer",
    location: "Baguio City",
    image: "/placeholder.svg?height=300&width=300",
    achievement: "Spearheaded reforestation project in Cordillera region",
    year: 2021,
    category: "Environmental Conservation",
  },
];

export default function AwardeesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const years = ["All", ...Array.from(new Set(awardees.map((a) => a.year)))];
  const categories = [
    "All",
    ...Array.from(new Set(awardees.map((a) => a.category))),
  ];

  const filteredAwardees = awardees.filter(
    (awardee) =>
      (awardee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        awardee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        awardee.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedYear === "All" || awardee.year === parseInt(selectedYear)) &&
      (selectedCategory === "All" || awardee.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-yellow-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Award className="mr-4" size={40} />
            Awardees Hall of Fame
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search awardees..."
                className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative">
              <select
                className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "All" ? "All Years" : year}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative">
              <select
                className="w-full p-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAwardees.map((awardee) => (
            <div
              key={awardee.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={awardee.image}
                  alt={awardee.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold mb-1">{awardee.name}</h2>
                  <p className="text-sm">{awardee.position}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin className="mr-2" size={16} />
                  <span>{awardee.location}</span>
                </div>
                <p className="mb-4 text-gray-700">{awardee.achievement}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-yellow-600">
                    <Briefcase className="mr-2" size={16} />
                    <span>Awarded in {awardee.year}</span>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    {awardee.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
