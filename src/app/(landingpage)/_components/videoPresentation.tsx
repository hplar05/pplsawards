import { VideoSection } from "@/components/VideoSection";
import { motion } from "framer-motion";
import React from "react";

export const VideoPresentation = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center h-screen"
    >
      <div className="container px-4 md:px-6 ">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-yellow-600 font-medium tracking-wider">
            VIDEO PRESENTATION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            We honor exceptional contributions
          </h2>
        </div>
        <VideoSection />
      </div>
    </motion.section>
  );
};
