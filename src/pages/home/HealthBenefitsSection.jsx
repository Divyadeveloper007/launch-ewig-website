import React from "react";
import { FaGlobe, FaExclamationTriangle, FaIndustry, FaMoneyBill, FaWind, FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  {
    icon: <FaGlobe className="text-white text-2xl" />,
    text: "According to the World Health Organization (WHO), 99% of people globally breathe air that exceeds safe air quality limits.",
  },
  {
    icon: <FaExclamationTriangle className="text-white text-2xl" />,
    text: "Over 13 million deaths annually are linked to avoidable environmental causes, including air pollution.",
  },
  {
    icon: <FaIndustry className="text-white text-2xl" />,
    text: "Harmful pollutants like fine particulate matter and nitrogen dioxide mainly come from burning fossil fuels.",
  },
  {
    icon: <FaMoneyBill className="text-white text-2xl" />,
    text: "In 2018, air pollution from fossil fuels cost the world $2.9 trillion, or $8 billion per day in health and economic impacts.",
  },
  {
    icon: <FaWind className="text-white text-2xl" />,
    text: "Transitioning to clean energy sources like wind and solar helps reduce both air pollution and health risks, while also combating climate change.",
  },
  {
    icon: <FaHeartbeat className="text-white text-2xl" />,
    text: "Cleaner air from renewables leads to fewer respiratory and heart diseases, improving public health and reducing the burden on healthcare systems.",
  },
];

const HealthBenefitsSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Renewable Energy <span className="relative inline-block">
          <span className="text-black">Is Healthier</span>
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange-500"></span>
        </span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#008c4e] rounded-lg p-4 flex items-start gap-4 text-white shadow hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 mt-1 shrink-0">
              {item.icon}
            </div>
            <p className="text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HealthBenefitsSection;
