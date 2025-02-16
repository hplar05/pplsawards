"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Partner = {
  id: string;
  logoImg: string;
};

export function LogoCarousel() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

    fetchPartners();
  }, []);

  if (isLoading) {
    return <div>Loading partners...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1000],
          transition: {
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        }}
      >
        {partners.map((partner) => (
          <div key={partner.id} className="flex-shrink-0">
            <Image
              src={partner.logoImg || "/placeholder.svg"}
              alt="Partner logo"
              width={100}
              height={100}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
