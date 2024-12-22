"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ChevronRight, Star, Trophy, Users } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { FAQ } from "@/components/Faqs";
import { motion } from "framer-motion";
import { VideoSection } from "@/components/VideoSection";

export default function Home() {
  // Set the target date for the countdown (e.g., 30 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 flex items-center justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Recognizing Excellence in Every Field
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Celebrate achievements, inspire greatness, and honor the best
                  in the industry with our prestigious awards.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Countdown targetDate={targetDate} />
              </div>
              <p className="text-sm text-gray-500">
                Time left until nominations close
              </p>
              <div className="space-x-4">
                <Link
                  href="#contact"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  Get Started
                </Link>
                <Link
                  href="#awards"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-white flex items-center justify-center h-screen"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Awards
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-200"
                >
                  <Award className="h-12 w-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{award}</h3>
                  <p className="text-gray-500 text-center">
                    Recognizing outstanding achievements in{" "}
                    {award.toLowerCase()}.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex items-center justify-center h-screen"
        >
          <div className="container px-4 md:px-6 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Watch Our Presentation
            </h2>
            <VideoSection />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-white flex items-center justify-center h-screen"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
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

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex items-center justify-center h-screen"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechInnovate",
                  quote:
                    "PSSLAWARDS transformed our recognition program. Their expertise and attention to detail made our awards truly special.",
                },
                {
                  name: "Michael Chen",
                  role: "Director, GreenEarth Foundation",
                  quote:
                    "The sustainability award designed by PSSLAWARDS perfectly captured our mission. Its become a symbol of excellence in our industry.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Head of HR, Global Corp",
                  quote:
                    "Working with PSSLAWARDS was a breeze. They handled everything, allowing us to focus on celebrating our teams achievements.",
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

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-white flex items-center justify-center h-screen"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Recent Award Winners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=96&width=96`}
                      alt={`Winner ${i}`}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-center">Winner Name</h3>
                  <p className="text-sm text-gray-500 text-center">
                    Award Category
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex items-center justify-center h-screen"
        >
          <div className="container px-4 md:px-6 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 ">
              Frequently Asked Questions
            </h2>
            <FAQ />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-yellow-500 flex items-center justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Celebrate Excellence?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-900 md:text-xl">
                  Lets create an award program that inspires and recognizes true
                  achievement.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
