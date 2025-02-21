"use client";

import { useState, useEffect } from "react";
import { Award, Search, Briefcase, MapPin, X } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";

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
      <DialogContent className="sm:max-w-[600px] bg-white rounded-lg overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-yellow-600">
            {awardee.fullname}
          </DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              className="absolute right-4 top-4 rounded-full p-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="relative h-80 w-full">
            <Image
              src={awardee.images || "/placeholder.svg?height=300&width=300"}
              alt={awardee.fullname}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-semibold text-gray-600">Occupation</p>
              <p>{awardee.occupation}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-600">Area</p>
              <p>{awardee.area}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-600">Year of Award</p>
              <p>{awardee.yearOfAward}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-600">Category</p>
              <p>{awardee.categories}</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-gray-600">Description</p>
            <p className="text-gray-700">{awardee.description}</p>
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
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-yellow-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold flex items-center justify-center">
            <Award className="mr-4 max-md:hidden" size={48} />
            Awardees Hall of Fame
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search awardees..."
                className="w-full pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year === "All" ? "All Years" : year}
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
                    {category === "All" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredAwardees.map((awardee) => (
              <motion.div
                key={awardee.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleAwardeeClick(awardee)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
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
                  <p className="mb-4 text-gray-700 line-clamp-3">
                    {awardee.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-yellow-600">
                      <Briefcase className="mr-2" size={16} />
                      <span>Awarded in {awardee.yearOfAward}</span>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                      {awardee.categories}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      <AwardeeModal
        awardee={selectedAwardee}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
