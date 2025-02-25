"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./_components/header";
import { About } from "./_components/about";
import { Features } from "./_components/features";
import { Partners } from "./_components/partners";
import { VideoPresentation } from "./_components/videoPresentation";
import { Service } from "./_components/service";
import { Testimonial } from "./_components/testimonial";
import { RecentAwardees } from "./_components/recentAwardees";
import { Faqs } from "./_components/faqs";
import { Subscribe } from "./_components/subscribe";
import { PopupImage } from "./_components/popupImage";

export default function Home() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  return (
    <AnimatePresence>
      {/* popup image */}
      <PopupImage />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        <main className="flex-1">
          {/* header */}
          <Header />
          {/* about */}
          <About />
          {/* featers */}
          <Features />
          {/* partners */}
          <Partners />
          {/* video presentation */}
          <VideoPresentation />
          {/* service */}
          <Service />
          {/* testimonial */}
          <Testimonial />
          {/* recent awardees */}
          <RecentAwardees />
          {/* faqs */}
          <Faqs />
          {/* subscribe email */}
          <Subscribe />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
