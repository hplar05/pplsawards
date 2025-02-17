"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import { Plus, Grid, List, Pencil, Trash2, Handshake } from "lucide-react";
import { UploadButton } from "@/lib/utils";

type Partner = {
  id: string;
  logoImg: string;
};

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [newLogoImg, setNewLogoImg] = useState("");
  //const [newPartnerName, setNewPartnerName] = useState("") // Removed
  //const [searchTerm, setSearchTerm] = useState("") // Removed

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await fetch("/api/partners");
      if (!response.ok) {
        throw new Error("Failed to fetch partners");
      }
      const data = await response.json();
      setPartners(data);
    } catch (err) {
      setError("Failed to load partners. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddPartner = async () => {
    try {
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ logoImg: newLogoImg }),
      });
      if (!response.ok) {
        throw new Error("Failed to add partner");
      }
      fetchPartners();
      setIsAddModalOpen(false);
      setNewLogoImg("");
      //setNewPartnerName("") // Removed
    } catch (err) {
      setError("Failed to add partner. Please try again.");
    }
  };

  const handleUpdatePartner = async () => {
    if (!editingPartner) return;
    try {
      const response = await fetch("/api/partners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingPartner.id, logoImg: newLogoImg }),
      });
      if (!response.ok) {
        throw new Error("Failed to update partner");
      }
      fetchPartners();
      setIsEditModalOpen(false);
      setEditingPartner(null);
      setNewLogoImg("");
      //setNewPartnerName("") // Removed
    } catch (err) {
      setError("Failed to update partner. Please try again.");
    }
  };

  const handleDeletePartner = async (id: string) => {
    try {
      const response = await fetch("/api/partners", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete partner");
      }
      fetchPartners();
    } catch (err) {
      setError("Failed to delete partner. Please try again.");
    }
  };

  //const filteredPartners = partners.filter((partner) => partner.name.includes(searchTerm)) // Removed

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
      <header className=" text-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            {/* <Handshake className="mr-4 max-md:hidden" size={40} /> */}
            Manage Partners
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {" "}
            {/* Removed one column for search */}
            <div className="md:col-span-2 flex justify-end">
              <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                    <Plus className="mr-2 h-4 w-4" /> Add New Partner
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Partner</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {/* <Input
                      placeholder="Partner Name"
                      value={newPartnerName}
                      onChange={(e) => setNewPartnerName(e.target.value)}
                    /> */}{" "}
                    {/* Removed Name Input */}
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        if (res && res[0]) {
                          setNewLogoImg(res[0].url);
                        }
                      }}
                      onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                    {newLogoImg && (
                      <Image
                        src={newLogoImg || "/placeholder.svg"}
                        alt="New logo"
                        width={100}
                        height={100}
                        className="mt-2 rounded-md"
                      />
                    )}
                    <Button
                      onClick={handleAddPartner}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Add Partner
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="grid">
              <Grid className="mr-2 h-4 w-4" /> Grid View
            </TabsTrigger>
            <TabsTrigger value="list">
              <List className="mr-2 h-4 w-4" /> List View
            </TabsTrigger>
          </TabsList>
          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <Card
                  key={partner.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="relative h-40 mb-4">
                      <Image
                        src={partner.logoImg || "/placeholder.svg"}
                        alt={""}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                      />
                    </div>
                    {/* <h3 className="text-xl font-semibold mb-4 text-center">{partner.name}</h3> */}{" "}
                    {/* Removed Partner Name */}
                    <div className="flex justify-center space-x-2">
                      <Dialog
                        open={
                          isEditModalOpen && editingPartner?.id === partner.id
                        }
                        onOpenChange={setIsEditModalOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setEditingPartner(partner);
                              //setNewPartnerName(partner.name) // Removed
                              setNewLogoImg(partner.logoImg);
                            }}
                          >
                            <Pencil className="mr-2 h-4 w-4" /> Edit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Partner</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            {/* <Input
                              placeholder="Partner Name"
                              value={newPartnerName}
                              onChange={(e) => setNewPartnerName(e.target.value)}
                            /> */}{" "}
                            {/* Removed Name Input */}
                            <UploadButton
                              endpoint="imageUploader"
                              onClientUploadComplete={(res) => {
                                if (res && res[0]) {
                                  setNewLogoImg(res[0].url);
                                }
                              }}
                              onUploadError={(error: Error) => {
                                alert(`ERROR! ${error.message}`);
                              }}
                            />
                            {newLogoImg && (
                              <Image
                                src={newLogoImg || "/placeholder.svg"}
                                alt="New logo"
                                width={100}
                                height={100}
                                className="mt-2 rounded-md"
                              />
                            )}
                            <Button
                              onClick={handleUpdatePartner}
                              className="w-full bg-blue-600 hover:bg-blue-700"
                            >
                              Update Partner
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeletePartner(partner.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Logo</TableHead>
                  {/* <TableHead>Name</TableHead> */}{" "}
                  {/* Removed Name Column */}
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partners.map((partner) => (
                  <TableRow key={partner.id}>
                    <TableCell>
                      <Image
                        src={partner.logoImg || "/placeholder.svg"}
                        alt={""}
                        width={100}
                        height={100}
                        className="rounded-md"
                      />
                    </TableCell>
                    {/* <TableCell>{partner.name}</TableCell> */}{" "}
                    {/* Removed Name Cell */}
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog
                          open={
                            isEditModalOpen && editingPartner?.id === partner.id
                          }
                          onOpenChange={setIsEditModalOpen}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              onClick={() => {
                                setEditingPartner(partner);
                                //setNewPartnerName(partner.name) // Removed
                                setNewLogoImg(partner.logoImg);
                              }}
                            >
                              <Pencil className="mr-2 h-4 w-4" /> Edit
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Partner</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              {/* <Input
                                placeholder="Partner Name"
                                value={newPartnerName}
                                onChange={(e) => setNewPartnerName(e.target.value)}
                              /> */}{" "}
                              {/* Removed Name Input */}
                              <UploadButton
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                  if (res && res[0]) {
                                    setNewLogoImg(res[0].url);
                                  }
                                }}
                                onUploadError={(error: Error) => {
                                  alert(`ERROR! ${error.message}`);
                                }}
                              />
                              {newLogoImg && (
                                <Image
                                  src={newLogoImg || "/placeholder.svg"}
                                  alt="New logo"
                                  width={100}
                                  height={100}
                                  className="mt-2 rounded-md"
                                />
                              )}
                              <Button
                                onClick={handleUpdatePartner}
                                className="w-full bg-blue-600 hover:bg-blue-700"
                              >
                                Update Partner
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="destructive"
                          onClick={() => handleDeletePartner(partner.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
