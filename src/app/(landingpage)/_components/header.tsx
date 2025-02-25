import { Countdown } from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
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
    </section>
  );
};
