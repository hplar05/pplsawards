import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export const Testimonial = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center min-h-screen"
    >
      <div className="container px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-yellow-600 font-medium tracking-wider">
            VOICE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Hear directly from some of the award recipients
          </h2>
          <p className="text-gray-600 leading-relaxed">
            About what this prestigious recognition means to them and their
            communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/testimonial-image.jpg"
              alt="VOICE"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <blockquote className="text-xl text-gray-900 font-medium italic">
              &quot;We are proud to partner with the Philippine Public Service
              Leadership Awards program. Its crucial to recognize and celebrate
              the outstanding contributions of public servants who are making a
              real difference in the lives of Filipinos. This program fosters a
              culture of excellence and inspires future generations of leaders
              to dedicate themselves to public service.&quot;
            </blockquote>
            <div>
              <p className="font-bold text-gray-900">Micheal</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Maria Santos",
              role: "Municipal Mayor",
              quote:
                "Receiving the Philippine Public Service Leadership Award was an incredible honor. It validated the hard work and dedication of my team in serving our community.  This award has not only boosted our morale but also inspired us to strive for even greater heights in public service.  The recognition from this prestigious program has energized our efforts to improve the lives of our constituents.",
            },
            {
              name: "Lita Reyes",
              role: "Public School Teacher",
              quote:
                "This award is not just for me; it's for all the dedicated teachers who work tirelessly to shape the future of our nation.  The Philippine Public Service Leadership Awards program sends a powerful message that the work we do in education is valued and essential.  It motivates us to continue nurturing young minds and building a brighter future for the Philippines.",
            },
            {
              name: "Benito Tan",
              role: "Community Organizer",
              quote:
                "I believe in the power of community-driven change, and this award is a recognition of that belief.  The Philippine Public Service Leadership Awards program shines a light on the importance of grassroots initiatives and empowers community leaders to continue their work in social development.  I am inspired to continue serving my community and working towards a more inclusive and equitable society.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col p-6 bg-white rounded-lg shadow"
            >
              <p className="text-gray-500 mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
