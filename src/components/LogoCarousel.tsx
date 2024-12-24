"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const partnerLogos = [
  { name: "Partner 1", src: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 2", src: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 3", src: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 4", src: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 5", src: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 6", src: "/placeholder.svg?height=100&width=200" },
];

export function LogoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollInterval: NodeJS.Timeout;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 1;
        }
      }, 20);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    startScroll();
    carousel.addEventListener("mouseenter", stopScroll);
    carousel.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      carousel.removeEventListener("mouseenter", stopScroll);
      carousel.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div ref={carouselRef} className="flex space-x-8 overflow-x-hidden">
        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.name}
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
