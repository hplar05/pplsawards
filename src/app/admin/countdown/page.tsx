"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import type { Countdown } from "@prisma/client";

export default function CountdownAdmin() {
  const [countdowns, setCountdowns] = useState<Countdown[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { register, handleSubmit, reset } =
    useForm<Omit<Countdown, "id" | "createdAt" | "updatedAt">>();

  useEffect(() => {
    fetchCountdowns();
  }, []);

  const fetchCountdowns = async () => {
    try {
      const response = await fetch("/api/countdown");
      if (!response.ok) {
        throw new Error("Failed to fetch countdowns");
      }
      const data = await response.json();
      setCountdowns(Array.isArray(data) ? data : []); // Ensure it's an array
    } catch (error) {
      console.error("Error fetching countdowns:", error);
      setCountdowns([]); // Fallback to an empty array
    }
  };

  const onSubmit = async (
    data: Omit<Countdown, "id" | "createdAt" | "updatedAt">
  ) => {
    const response = await fetch("/api/countdown", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id: editingId }),
    });

    if (response.ok) {
      fetchCountdowns();
      reset();
      setEditingId(null);
    }
  };

  const handleEdit = (countdown: Countdown) => {
    reset(countdown);
    setEditingId(countdown.id);
  };

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/countdown?id=${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchCountdowns();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold flex items-center">
            {/* <Handshake className="mr-4 max-md:hidden" size={40} /> */}
            Manage Countdown
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
          <div className="mb-4">
            <label htmlFor="targetDate" className="block mb-2">
              Target Date
            </label>
            <input
              type="datetime-local"
              id="targetDate"
              {...register("targetDate", { required: true })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              {...register("description")}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editingId ? "Update" : "Add"} Countdown
          </button>
        </form>

        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Target Date</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {countdowns?.map((countdown) => (
              <tr key={countdown.id}>
                <td className="border p-2">
                  {new Date(countdown.targetDate).toLocaleString()}
                </td>
                <td className="border p-2">{countdown.description}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(countdown)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(countdown.id)}
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
