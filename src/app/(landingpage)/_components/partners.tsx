import { LogoCarousel } from "@/components/LogoCarousel";
import { motion } from "framer-motion";
import React from "react";

export const Partners = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="partners"
      className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center items-center"
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-yellow-600 font-medium tracking-wider">
            PARTNERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Our Trusted Partners
          </h2>
        </div>
        <LogoCarousel />
      </div>
    </motion.section>
  );
};
