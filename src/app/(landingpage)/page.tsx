"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
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
import { Popup } from "@/components/Popup";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent winners
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000); // Show popup after 3 seconds

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
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        <main className="flex-1">
          <section className="min-h-screen pt-[4rem] relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />

            <div className="container mx-auto px-4 pt-12 pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative z-10 space-y-8">
                  <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                    <span className="text-primary font-medium tracking-wider text-sm">
                      Philippine Public Service Leadership Awards
                    </span>
                  </div>

                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
                    <span className="block text-yellow-600">Celebrating</span>
                    <span className="block text-yellow-500 ">Excellence</span>
                    <span className="block ">in Public Service.</span>
                  </h1>

                  <div className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                    Join us in honoring outstanding achievements and inspiring
                    greatness across the world.
                    <span className="block mt-2">
                      Time left until the next award ceremony.
                    </span>
                    <div className=" lg:w-[58%] xl:w-[47%] md:w-[48%] max-md:w-[100%] max-sm:w-[100%]">
                      <Countdown />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 rounded-full"
                    >
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdSfM1xhN655LhT6H5oRfa_6cr-jeISNXxesy6kPa_CPV4cKg/viewform"
                        target="_blank"
                      >
                        Get Started
                      </a>
                    </Button>
                    <Link href="/about" className="max-md:hidden">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white rounded-full"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <Image
                      src="/header-image.jpg"
                      alt="Header"
                      fill
                      className="object-contain transform hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  <div className="absolute top-1/4 -right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-1/4 -left-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />

                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="text-primary font-medium">
                      Philippine Public
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="text-primary font-medium">
                      Service Leadership Awards
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-gray-600">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
              </div>
            </div> */}
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
