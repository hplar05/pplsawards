"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How we were chosen?",
    answer:
      "Actually, we are just the organizer of the said event. They have separate team who does the survey and validation of the nomination form nationwide. What we receive from them is the complete list of awardees. We are just liable in sending out the letter and making follow ups with them. What I could offer you is the criteria and company profile since the result is very discreet in protection to other competitors to avoid bias",
  },
  {
    question: "Why is there a fee?",
    answer:
      "Because we are a non-profit organization considering our event will be at the country’s biggest hotel and casino to date. Also we are working hand in hand together with the chosen beneficiary. But in return to your Business/Company you will be receiving a marketing mileage from our end.",
  },
  {
    question: "Who's your Chairman?",
    answer:
      "Dr. Richard Carl Fauci is our Chairman He will be attending too on the day of the event.",
  },
  {
    question: "Are you legit?",
    answer:
      "Of course, We can send you our Business Permit for your reference thru our email address ppslawards@gmail.com or go to Contact Us. Also you can call the venue to confirm our booking on the said day or you can visit us here at the office for further info.",
  },
  {
    question: "Do you accept Exdeals?",
    answer:
      "Yes, but only in 50:50 ratio we are not allowed to accept 100% exdeal proposal.",
  },
  {
    question: "Is the event going on?",
    answer:
      "Yes, because we are not allowed to move the event in protection to our provincial awardees. Since they will have to book pa their tickets and Hotel you can call the venue for confirming the day.",
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
