import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Award, CheckCircle } from "lucide-react";

export const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center min-h-screen"
    >
      <div className="container px-4 md:px-6">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-yellow-600 font-medium tracking-wider">
              FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Recognizing outstanding achievements in
              <br />
              Innovation Award
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This prestigious awards program celebrates and recognizes
              exceptional individuals and organizations making significant
              contributions in three crucial areas: Innovation, Leadership, and
              Sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/features-images.jpg"
                alt="features"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  We seek to honor
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  those who are pushing boundaries, inspiring others, and
                  creating a better future for all.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Inspiring Innovation, Leading Sustainably",
                  "Celebrating Leadership, Impacting Future",
                  "Honoring Excellence, Driving Change",
                  "Recognizing Achievement, Inspiring Progress",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/features1.jpg"
                  alt="PPSLAWARDS"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/features2.jpg"
                  alt="features"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative lg:col-span-1 md:col-span-2 lg:mt-0 md:mt-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/features3.jpg"
                  alt="features"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            "Innovation Award",
            "Leadership Excellence",
            "Sustainability Champion",
          ].map((award, index) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 "
            >
              <div className="w-20 h-20  flex items-center justify-center mx-auto">
                <Award className="h-12 w-12 text-yellow-500 mb-4" />
              </div>

              <h3 className="text-xl font-bold mb-2">{award}</h3>
              <p className="text-gray-500 text-center">
                Recognizing outstanding achievements in {award.toLowerCase()}.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
