"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, Edit, Trash2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { AwardeeForm, type AwardeeFormData } from "@/components/AwardeeForm";

type Awardee = AwardeeFormData & { id: string };

export default function AwardeesPage() {
  const [awardees, setAwardees] = useState<Awardee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingAwardee, setEditingAwardee] = useState<Awardee | null>(null);

  useEffect(() => {
    fetchAwardees();
  }, []);

  const fetchAwardees = async () => {
    const response = await fetch("/api/awardees");
    const data = await response.json();
    setAwardees(data);
  };

  const filteredAwardees = awardees.filter(
    (awardee) =>
      awardee.fullname.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedYear === "All" || awardee.yearOfAward === selectedYear) &&
      (selectedCategory === "All" || awardee.categories === selectedCategory)
  );

  const years = [
    "All",
    ...Array.from(new Set(awardees.map((a) => a.yearOfAward))),
  ];
  const categories = [
    "All",
    ...Array.from(new Set(awardees.map((a) => a.categories))),
  ];

  const handleAddAwardee = async (newAwardee: AwardeeFormData) => {
    const response = await fetch("/api/awardees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAwardee),
    });
    const data = await response.json();
    setAwardees([...awardees, data]);
    setIsAddModalOpen(false);
  };

  const handleEditAwardee = async (editedAwardee: Awardee) => {
    const response = await fetch("/api/awardees", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedAwardee),
    });
    const data = await response.json();
    setAwardees(awardees.map((a) => (a.id === data.id ? data : a)));
    setIsEditModalOpen(false);
    setEditingAwardee(null);
  };

  const handleDeleteAwardee = async (id: string) => {
    await fetch("/api/awardees", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    setAwardees(awardees.filter((a) => a.id !== id));
  };

  const handleOpenEditModal = (awardee: Awardee) => {
    setEditingAwardee(awardee);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            {/* <Handshake className="mr-4 max-md:hidden" size={40} /> */}
            Manage Awardees
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
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
                  {Math.max(
                    ...awardees.map((a) => Number.parseInt(a.yearOfAward))
                  )}
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
                    {category.replace("_", " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                onClick={() => setIsAddModalOpen(true)}
              >
                <Plus className="mr-2 h-4 w-4" /> Add New Awardee
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Awardee</DialogTitle>
              </DialogHeader>
              <AwardeeForm
                onSubmit={handleAddAwardee}
                onClose={() => setIsAddModalOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Occupation</TableHead>
                  <TableHead>Area</TableHead>
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
                        {awardee.fullname}
                      </TableCell>
                      <TableCell>{awardee.occupation}</TableCell>
                      <TableCell>{awardee.area}</TableCell>
                      <TableCell>
                        {awardee.categories.replace("_", " ")}
                      </TableCell>
                      <TableCell>{awardee.yearOfAward}</TableCell>
                      <TableCell className="text-right">
                        <Dialog
                          open={
                            isEditModalOpen && editingAwardee?.id === awardee.id
                          }
                          onOpenChange={setIsEditModalOpen}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mr-2"
                              onClick={() => handleOpenEditModal(awardee)}
                            >
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Awardee</DialogTitle>
                            </DialogHeader>
                            {editingAwardee && (
                              <AwardeeForm
                                initialData={editingAwardee}
                                onSubmit={(data) =>
                                  handleEditAwardee({
                                    ...data,
                                    id: editingAwardee.id,
                                  })
                                }
                                onClose={() => setIsEditModalOpen(false)}
                              />
                            )}
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
      </main>
    </div>
  );
}
