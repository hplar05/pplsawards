"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { VideoPresentation } from "@prisma/client";

export default function VideoPresentationAdmin() {
  const [presentations, setPresentations] = useState<VideoPresentation[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { register, handleSubmit, reset } =
    useForm<Omit<VideoPresentation, "id" | "createdAt" | "updatedAt">>();

  useEffect(() => {
    fetchPresentations();
  }, []);

  const fetchPresentations = async () => {
    const response = await fetch("/api/video-presentation");
    const data = await response.json();
    setPresentations(data);
  };

  const onSubmit = async (
    data: Omit<VideoPresentation, "id" | "createdAt" | "updatedAt">
  ) => {
    const response = await fetch("/api/video-presentation", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id: editingId }),
    });

    if (response.ok) {
      fetchPresentations();
      reset();
      setEditingId(null);
    }
  };

  const handleEdit = (presentation: VideoPresentation) => {
    reset(presentation);
    setEditingId(presentation.id);
  };

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/video-presentation?id=${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchPresentations();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            {/* <Handshake className="mr-4 max-md:hidden" size={40} /> */}
            Manage Video - Presentation
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
          <div className="mb-4">
            <label htmlFor="videoLink" className="block mb-2">
              Video Link
            </label>
            <input
              type="text"
              id="videoLink"
              {...register("videoLink")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editingId ? "Update" : "Add"} Video Presentation
          </button>
        </form>

        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Video Link</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {presentations.map((presentation) => (
              <tr key={presentation.id}>
                <td className="border p-2">{presentation.title}</td>
                <td className="border p-2">{presentation.videoLink}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(presentation)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(presentation.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
