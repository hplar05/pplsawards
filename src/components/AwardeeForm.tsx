"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import Image from "next/image";

type AwardeeFormProps = {
  onSubmit: (data: AwardeeFormData) => void;
  initialData?: Partial<AwardeeFormData>;
  onClose: () => void;
};

export type AwardeeFormData = {
  fullname: string;
  occupation: string;
  area: string;
  images?: string;
  description: string;
  yearOfAward: string;
  categories: string;
};

const categories = [
  "Local_Governance",
  "Education",
  "Healthcare",
  "Disaster_Management",
  "Social_Welfare",
  "Environmental_Conservation",
];

export function AwardeeForm({
  onSubmit,
  initialData = {},
  onClose,
}: AwardeeFormProps) {
  const [formData, setFormData] = useState<AwardeeFormData>({
    fullname: initialData.fullname || "",
    occupation: initialData.occupation || "",
    area: initialData.area || "",
    images: initialData.images || "",
    description: initialData.description || "",
    yearOfAward: initialData.yearOfAward || new Date().getFullYear().toString(),
    categories: initialData.categories || "Local_Governance",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="fullname">Full Name</Label>
        <Input
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="occupation">Occupation</Label>
        <Input
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="area">Area</Label>
        <Input
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="images">Image</Label>
        <UploadButton<OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res[0]) {
              setFormData((prev) => ({ ...prev, images: res[0].url }));
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        {formData.images && (
          <Image
            src={formData.images || "/placeholder.svg"}
            alt="Uploaded"
            className="mt-2 w-32 h-32 object-cover"
          />
        )}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="yearOfAward">Year of Award</Label>
        <Input
          id="yearOfAward"
          name="yearOfAward"
          value={formData.yearOfAward}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="categories">Category</Label>
        <Select
          value={formData.categories}
          onValueChange={handleSelectChange("categories")}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
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
      <Button type="submit">Submit</Button>
    </form>
  );
}
