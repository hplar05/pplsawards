"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  ChevronRight,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { FAQ } from "@/components/Faqs";
import { VideoSection } from "@/components/VideoSection";
import { LogoCarousel } from "@/components/LogoCarousel";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent winners
        const response = await fetch("/api/awardees?limit=8&sort=desc");
        if (!response.ok) {
          throw new Error("Failed to fetch recent winners");
        }
        const data = await response.json();
        setRecentWinners(data);

        // Add any other data fetching operations here
        // For example:
        // await fetchPartners();
        // await fetchTestimonials();
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

  // if (pageLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
  //     </div>
  //   );
  // }
  // Set the target date for the countdown (e.g., 30 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        <main className="flex-1">
          <section className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 py-20 md:py-32 mb-[10rem]">
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

          <section
            id="about"
            className="py-24 bg-white relative overflow-hidden min-h-screen"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
                <span className="text-yellow-600 font-medium tracking-wider">
                  ABOUT
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  Philippine Public Service Leadership Awards
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Honor individuals who make outstanding contributions and who’s
                  accomplished are models of exemplary public service for those
                  dedicated to the public good-now and in the future.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/thumbnail.jpg"
                    alt="奄美大島の豊かな自然"
                    fill
                    className="object-fill"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Philippine Public Service Leadership Awards
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Uncovered hundreds of inspirational stories of Filipino
                    Public Servants who sought to make a difference in the lives
                    of their constituents, their community, and the country as
                    well.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Through public recognition, this event aims to motivate the
                    Filipinos to further excel in their chosen fields, boost
                    their self-esteem, and emulate their success in the coming
                    generation. This is also a time to share your success story
                    and triumph over countless afflictions and adversities you
                    have been through in your journey to give service to the
                    public and to further motivate others to achieve more in
                    their crafts.
                  </p>
                  <Button className="mt-4 bg-gray-900">
                    <Link href={"/about"}>About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center min-h-screen"
          >
            <div className="container px-4 md:px-6">
              {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Featured Awards
              </h2> */}
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
                    contributions in three crucial areas: Innovation,
                    Leadership, and Sustainability.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/features-images.jpg"
                      alt="乳酸菌の電子顕微鏡写真"
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
                        alt="奄美大島の自然"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="relative lg:col-span-1 md:col-span-2 lg:mt-0 md:mt-8">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                      <Image
                        src="/features3.jpg"
                        alt="奄美大島の夕景"
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
                      {" "}
                      <Award className="h-12 w-12 text-yellow-500 mb-4" />
                    </div>

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
            className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center items-center"
          >
            <div className="container px-4 md:px-6">
              <div className="max-w-xl mx-auto text-center mb-16">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
                <span className="text-yellow-600 font-medium tracking-wider">
                  PARTNERS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  Our Trusted Partners
                </h2>
                {/* <p className="text-gray-600 leading-relaxed">
                  The generous support and collaboration of our valued partners,
                  who share our commitment to recognizing excellence in
                  Innovation, Leadership, and Sustainability.
                </p> */}
              </div>
              <LogoCarousel />
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center h-screen"
          >
            <div className="container px-4 md:px-6 ">
              <div className="max-w-xl mx-auto text-center mb-16">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
                <span className="text-yellow-600 font-medium tracking-wider">
                  VIDEO PRESENTATION
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  We honor exceptional contributions
                </h2>
                {/* <p className="text-gray-600 leading-relaxed mt-4 mb-6">
                </p> */}
              </div>
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
              <div className="max-w-xl mx-auto text-center mb-16">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
                <span className="text-yellow-600 font-medium tracking-wider">
                  SERVICE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  We provide comprehensive services
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Handling everything from nominations and judging to custom
                  award design and unforgettable event planning.
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
                      <h3 className="text-xl font-bold mb-2">
                        {service.title}
                      </h3>
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
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center min-h-screen"
          >
            <div className="container px-4 md:px-6">
              <div className="max-w-xl mx-auto text-center mb-16">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
                <span className="text-yellow-600 font-medium tracking-wider">
                  VOICE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  Hear directly from some of the award recipients
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  About what this prestigious recognition means to them and
                  their communities.
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
                  {/* <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div> */}
                  <blockquote className="text-xl text-gray-900 font-medium italic">
                    &quot;We are proud to partner with the Philippine Public
                    Service Leadership Awards program. Its crucial to recognize
                    and celebrate the outstanding contributions of public
                    servants who are making a real difference in the lives of
                    Filipinos. This program fosters a culture of excellence and
                    inspires future generations of leaders to dedicate
                    themselves to public service.&quot;
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900">Micheal</p>
                    {/* <p className="text-gray-600">Representative</p> */}
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
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
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
              <div className="max-w-xl mx-auto text-center mb-16">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
                <span className="text-yellow-600 font-medium tracking-wider">
                  RECENT AWARDEES
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  Meet the remarkable individuals and organizations
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Honored at the recent Philippine Public Service Leadership
                  Awards.
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
                          src={
                            winner.images ||
                            `/placeholder.svg?height=96&width=96`
                          }
                          alt={winner.fullname}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base text-center text-gray-800 line-clamp-1">
                        {winner.fullname}
                      </h3>
                      {/* <p className="text-xs sm:text-sm text-gray-600 text-center mt-1 line-clamp-1">
                        {winner.categories}
                      </p> */}
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
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center h-screen"
          >
            <div className="container px-4 md:px-6 ">
              <div className="max-w-xl mx-auto text-center mb-16">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                  About PPSLAWARDS
                </h2> */}
                <span className="text-yellow-600 font-medium tracking-wider">
                  FREQUENTLY ASKED QUESTION
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                  Have questions about the Philippine Public Service Leadership
                  Awards?
                </h2>
                {/* <p className="text-gray-600 leading-relaxed">
                  奄美大島に古くから伝わる発酵飲料「ミキ」。
                  その知恵と現代のテクノロジーを組み合わせることで、
                  より多くの人々に健康をお届けしたい。 そんな想いから Fermy
                  は誕生しました。
                </p> */}
              </div>
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
                    Lets create an award program that inspires and recognizes
                    true achievement.
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
      </motion.div>
    </AnimatePresence>
  );
}
