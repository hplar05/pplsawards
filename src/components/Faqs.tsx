"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of awards does AwardCo offer?",
    answer:
      "AwardCo offers a wide range of awards including Innovation Awards, Leadership Excellence Awards, Sustainability Champion Awards, and custom awards tailored to your organization's specific needs and values.",
  },
  {
    question: "How does the nomination process work?",
    answer:
      "The nomination process typically involves submitting a detailed application form highlighting the nominee's achievements. Our team will guide you through each step, from setting criteria to collecting and reviewing nominations.",
  },
  {
    question: "Can AwardCo help with the award ceremony planning?",
    answer:
      "We offer comprehensive event planning services, handling everything from venue selection and decor to catering and entertainment, ensuring a memorable and impactful award ceremony.",
  },
  {
    question: "How are the winners selected?",
    answer:
      "Winners are selected through a rigorous judging process. We assemble a panel of industry experts who evaluate each nomination based on predetermined criteria. The process is designed to be fair, transparent, and impartial.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="font-medium">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="p-4 bg-gray-50">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
