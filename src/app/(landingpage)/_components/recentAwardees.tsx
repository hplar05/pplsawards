"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type Awardee = {
  id: string;
  fullname: string;
  occupation: string;
  images: string;
  categories: string;
};

export const RecentAwardees = () => {
  const [recentWinners, setRecentWinners] = useState<Awardee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/awardees?limit=10&sort=desc");
        if (!response.ok) {
          throw new Error("Failed to fetch recent winners");
        }
        const data = await response.json();
        setRecentWinners(data);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Simulate page loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 2000); // 2 seconds delay, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full py-12 md:py-24 lg:py-32 bg-white flex items-center justify-center h-screen"
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-yellow-600 font-medium tracking-wider">
            RECENT AWARDEES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Meet the remarkable individuals and organizations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Honored at the recent Philippine Public Service Leadership Awards.
          </p>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {recentWinners.map((winner, i) => (
              <motion.div
                key={winner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 shadow-md">
                  <Image
                    src={winner.images || `/placeholder.svg?height=96&width=96`}
                    alt={winner.fullname}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-center text-gray-800 line-clamp-1">
                  {winner.fullname}
                </h3>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};
