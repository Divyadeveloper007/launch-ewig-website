import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

// FAQ data
const faqs = [
  {
    question: "What is climate change, and what causes it?",
    answer:
      "Climate change refers to long-term changes in global temperatures and weather patterns. While it can occur naturally, the current rapid warming is primarily caused by human activities — especially the burning of fossil fuels like coal, oil, and gas, which release greenhouse gases into the atmosphere and trap heat.",
  },
  {
    question: "How does renewable energy help reduce climate change?",
    answer:
      "Renewable energy like wind and solar produce little to no greenhouse gas emissions, replacing fossil fuels and helping reduce carbon in the atmosphere.",
  },
  {
    question: "Is renewable energy really more affordable than fossil fuels?",
    answer:
      "Yes, in many regions renewable energy is now cheaper due to falling technology costs and government incentives.",
  },
  {
    question: "Can clean energy sources completely replace fossil fuels?",
    answer:
      "Yes, over time. With the right investments, infrastructure, and policy support, clean energy can fully power our world sustainably.",
  },
  {
    question: "What are the health benefits of switching to renewable energy?",
    answer:
      "Cleaner air, fewer respiratory and heart diseases, and reduced pollution-related health costs are key benefits of switching.",
  },
  {
    question:
      "Why should businesses and homeowners invest in solar energy now?",
    answer:
      "Costs are low, incentives are strong, and long-term savings plus sustainability make solar a smart investment.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First open by default

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      className="max-w-5xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-center text-2xl md:text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently{" "}
        <span className="relative inline-block">
          <span className="text-black">asked</span>
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange-500"></span>
        </span>{" "}
        Questions
      </motion.h2>

      {/* FAQ List */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`bg-white rounded-xl shadow-sm border transition-all ${
              openIndex === index ? "border-gray-300" : "border-transparent"
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Text */}
              <span className="font-semibold text-sm md:text-base text-gray-800">
                {faq.question}
              </span>

              {/* Chevron Icon in Circle */}
              <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
                {openIndex === index ? (
                  <FaChevronDown className="text-gray-500 text-sm" />
                ) : (
                  <FaChevronRight className="text-gray-500 text-sm" />
                )}
              </div>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FaqSection;
