import React from "react";
import { FaCog, FaLeaf, FaSolarPanel } from "react-icons/fa";
import { motion } from "framer-motion";

const cardData = [
  {
    icon: <FaCog className="text-white text-2xl" />,
    title: "Who We Are",
    description:
      "EVSP is a team of passionate solar experts dedicated to revolutionizing the clean energy industry with sustainable solutions.",
  },
  {
    icon: <FaSolarPanel className="text-white text-2xl" />,
    title: "What We Do",
    description:
      "We design, build & maintain solar projects that help homes and businesses harness the power of the sun efficiently.",
  },
  {
    icon: <FaLeaf className="text-white text-2xl" />,
    title: "Why We Do It",
    description:
      "Our mission is to accelerate the world's transition to sustainable energy for a cleaner and greener future.",
  },
];

const SustainableSolutions = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center">
      {/* Subtitle */}
      <p className="text-sm text-green-600 font-semibold mb-2">
        PROJECT WE BELIEVE IN — GREEN FUTURE
      </p>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl md:pb-4 font-bold text-gray-800 mb-12">
        Driving Sustainable Solar Solutions
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: index === 1 ? -20 : 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: 10, // Move slightly downward on hover
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className={`bg-white border shadow-md rounded-2xl p-6 transition-all duration-300 ${
              index === 1 ? "md:-mt-4" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-800">{card.title}</h3>
              <div className="w-12 h-12 rounded-2xl bg-green-600 flex items-center justify-center">
                {card.icon}
              </div>
            </div>
            <p className="text-sm text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SustainableSolutions;
