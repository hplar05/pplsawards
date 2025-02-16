"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

import Image from "next/image";
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
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Manage Partners
        </h1>

        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="mb-4">Add New Partner</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Partner</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
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
                  className="mt-2"
                />
              )}
              <Button onClick={handleAddPartner}>Add Partner</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partners.map((partner) => (
              <TableRow key={partner.id}>
                <TableCell>
                  <Image
                    src={partner.logoImg || "/placeholder.svg"}
                    alt="Partner logo"
                    width={100}
                    height={100}
                  />
                </TableCell>
                <TableCell>
                  <Dialog
                    open={isEditModalOpen && editingPartner?.id === partner.id}
                    onOpenChange={setIsEditModalOpen}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="mr-2"
                        onClick={() => setEditingPartner(partner)}
                      >
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Partner</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
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
                            className="mt-2"
                          />
                        )}
                        <Button onClick={handleUpdatePartner}>
                          Update Partner
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="destructive"
                    onClick={() => handleDeletePartner(partner.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
}
