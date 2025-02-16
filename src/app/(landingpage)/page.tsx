"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ChevronRight, Star, Trophy, Users } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { FAQ } from "@/components/Faqs";
import { motion } from "framer-motion";
import { VideoSection } from "@/components/VideoSection";
import { LogoCarousel } from "@/components/LogoCarousel";
import { useEffect, useState } from "react";

type Awardee = {
  id: string;
  fullname: string;
  occupation: string;
  images: string;
  categories: string;
};

export default function Home() {
  const [recentWinners, setRecentWinners] = useState<Awardee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentWinners = async () => {
      try {
        const response = await fetch("/api/awardees?limit=8&sort=desc");
        if (!response.ok) {
          throw new Error("Failed to fetch recent winners");
        }
        const data = await response.json();
        setRecentWinners(data);
      } catch (err) {
        setError("Failed to load recent winners. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentWinners();
  }, []);
  // Set the target date for the countdown (e.g., 30 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Celebrating Excellence in Every Field
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-800 mb-8 max-w-2xl"
              >
                Join us in honoring outstanding achievements and inspiring
                greatness across industries.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 bg-white rounded-lg shadow-md z-10"
              >
                <Countdown />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-sm text-gray-800 mb-4 z-10"
              >
                Time left until the next award ceremony
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex space-x-4 z-10 mt-3"
              >
                <Link
                  href="/contact"
                  className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="/criteria"
                  className="bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

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
          id="partners"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex justify-center items-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Partners
            </h2>
            <LogoCarousel />
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
            {isLoading ? (
              <p className="text-center">Loading recent winners...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recentWinners.map((winner, i) => (
                  <motion.div
                    key={winner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                      <Image
                        src={
                          winner.images || `/placeholder.svg?height=96&width=96`
                        }
                        alt={winner.fullname}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-center">
                      {winner.fullname}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                      {winner.categories}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
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
