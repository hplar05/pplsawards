"use client";

import { useState, useEffect } from "react";
import { Award, Search, Briefcase, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Awardee = {
  id: string;
  fullname: string;
  occupation: string;
  area: string;
  images: string;
  description: string;
  yearOfAward: string;
  categories: string;
};

function AwardeeModal({
  awardee,
  isOpen,
  onClose,
}: {
  awardee: Awardee | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!awardee) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{awardee.fullname}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative h-64 w-full">
            <Image
              src={awardee.images || "/placeholder.svg?height=300&width=300"}
              alt={awardee.fullname}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Occupation:</span>
            <span className="col-span-3">{awardee.occupation}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Area:</span>
            <span className="col-span-3">{awardee.area}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Year:</span>
            <span className="col-span-3">{awardee.yearOfAward}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Category:</span>
            <span className="col-span-3">{awardee.categories}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Description:</span>
            <span className="col-span-3">{awardee.description}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function AwardeesPage() {
  const [awardees, setAwardees] = useState<Awardee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAwardee, setSelectedAwardee] = useState<Awardee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAwardees = async () => {
      try {
        const response = await fetch("/api/awardees");
        if (!response.ok) {
          throw new Error("Failed to fetch awardees");
        }
        const data = await response.json();
        setAwardees(data);
      } catch (err) {
        setError("Failed to load awardees. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAwardees();
  }, []);

  const years = [
    "All",
    ...Array.from(new Set(awardees.map((a) => a.yearOfAward))),
  ];
  const categories = [
    "All",
    ...Array.from(new Set(awardees.map((a) => a.categories))),
  ];

  const filteredAwardees = awardees.filter(
    (awardee) =>
      (awardee.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        awardee.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        awardee.area.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedYear === "All" || awardee.yearOfAward === selectedYear) &&
      (selectedCategory === "All" || awardee.categories === selectedCategory)
  );

  const handleAwardeeClick = (awardee: Awardee) => {
    setSelectedAwardee(awardee);
    setIsModalOpen(true);
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
      <header className="bg-yellow-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            <Award className="mr-4 max-md:hidden" size={40} />
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
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() => handleAwardeeClick(awardee)}
            >
              <div className="relative h-64">
                <Image
                  src={
                    awardee.images || "/placeholder.svg?height=300&width=300"
                  }
                  alt={awardee.fullname}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold mb-1">
                    {awardee.fullname}
                  </h2>
                  <p className="text-sm">{awardee.occupation}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin className="mr-2" size={16} />
                  <span>{awardee.area}</span>
                </div>
                <p className="mb-4 text-gray-700">{awardee.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-yellow-600">
                    <Briefcase className="mr-2" size={16} />
                    <span>Awarded in {awardee.yearOfAward}</span>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    {awardee.categories}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <AwardeeModal
        awardee={selectedAwardee}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
