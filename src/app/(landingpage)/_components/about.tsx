import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
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
              alt="about"
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
              Uncovered hundreds of inspirational stories of Filipino Public
              Servants who sought to make a difference in the lives of their
              constituents, their community, and the country as well.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through public recognition, this event aims to motivate the
              Filipinos to further excel in their chosen fields, boost their
              self-esteem, and emulate their success in the coming generation.
              This is also a time to share your success story and triumph over
              countless afflictions and adversities you have been through in
              your journey to give service to the public and to further motivate
              others to achieve more in their crafts.
            </p>
            <Button className="mt-4 bg-gray-900">
              <Link href={"/about"}>About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
