import { motion } from "framer-motion";
import { ChevronRight, Star, Trophy, Users } from "lucide-react";
import React from "react";

export const Service = () => {
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
            SERVICE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            We provide comprehensive services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Handling everything from nominations and judging to custom award
            design and unforgettable event planning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Trophy,
              title: "Award Program Management",
              description:
                "We handle every aspect of your award program, from nominations to the final ceremony.",
            },
            {
              icon: Users,
              title: "Judging Panel Coordination",
              description:
                "We assemble expert panels to ensure fair and comprehensive evaluations.",
            },
            {
              icon: Star,
              title: "Custom Award Design",
              description:
                "Create unique, memorable awards that reflect your brand and values.",
            },
            {
              icon: ChevronRight,
              title: "Event Planning",
              description:
                "From intimate gatherings to grand galas, we plan and execute flawless award ceremonies.",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <service.icon className="h-6 w-6 text-yellow-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
