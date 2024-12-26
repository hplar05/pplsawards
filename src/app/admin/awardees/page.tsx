"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { AwardeeForm } from "../components/AwardeeForm";

// Mock data for awardees
const initialAwardees = [
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

type Awardee = {
  id: number;
  name: string;
  category: string;
  year: number;
  image: string;
};

export default function AwardeesPage() {
  const [awardees, setAwardees] = useState(initialAwardees);
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

  const handleAddAwardee = (newAwardee: Omit<Awardee, "id">) => {
    setAwardees([...awardees, { ...newAwardee, id: awardees.length + 1 }]);
  };

  const handleEditAwardee = (editedAwardee: Awardee) => {
    setAwardees(
      awardees.map((a) => (a.id === editedAwardee.id ? editedAwardee : a))
    );
  };

  const handleDeleteAwardee = (id: number) => {
    setAwardees(awardees.filter((a) => a.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-gray-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Manage Awardees
        </h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Awardee Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-lg font-semibold text-yellow-800">
                  Total Awardees
                </p>
                <p className="text-3xl font-bold text-yellow-600">
                  {awardees.length}
                </p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-lg font-semibold text-green-800">
                  Categories
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {categories.length - 1}
                </p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-800">
                  Latest Year
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  {Math.max(...awardees.map((a) => a.year))}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 flex-grow">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search awardees"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-40">
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
              <SelectTrigger className="w-full md:w-40">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <Plus className="mr-2 h-4 w-4" /> Add New Awardee
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Awardee</DialogTitle>
              </DialogHeader>
              {/* <AwardeeForm onSubmit={handleAddAwardee} /> */}
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <AnimatePresence>
                  {filteredAwardees.map((awardee) => (
                    <motion.tr
                      key={awardee.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TableCell className="font-medium">
                        {awardee.name}
                      </TableCell>
                      <TableCell>{awardee.category}</TableCell>
                      <TableCell>{awardee.year}</TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mr-2"
                            >
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Awardee</DialogTitle>
                            </DialogHeader>
                            {/* <AwardeeForm
                              awardee={awardee}
                              onSubmit={handleEditAwardee}
                            /> */}
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteAwardee(awardee.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </Button>
                      </TableCell>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
