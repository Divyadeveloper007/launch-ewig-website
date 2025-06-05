import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/healthier/img.png";
import img2 from "../../assets/healthier/img1.png";
import img3 from "../../assets/healthier/img2.png";
import img4 from "../../assets/healthier/img3.png";
import img5 from "../../assets/healthier/img4.png";
import img6 from "../../assets/healthier/img5.png";

const items = [
  {
    icon: img1,
    text: "According to the World Health Organization (WHO), 99% of people globally breathe air that exceeds safe air quality limits.",
  },
  {
    icon: img2,
    text: "Over 13 million deaths annually are linked to avoidable environmental causes, including air pollution.",
  },
  {
    icon: img3,
    text: "Harmful pollutants like fine particulate matter and nitrogen dioxide mainly come from burning fossil fuels.",
  },
  {
    icon: img4,
    text: "In 2018, air pollution from fossil fuels cost the world $2.9 trillion, or $8 billion per day in health and economic impacts.",
  },
  {
    icon: img5,
    text: "Transitioning to clean energy sources like wind and solar helps reduce both air pollution and health risks, while also combating climate change.",
  },
  {
    icon: img6,
    text: "Cleaner air from renewables leads to fewer respiratory and heart diseases, improving public health and reducing the burden on healthcare systems.",
  },
];

const HealthBenefitsSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Title with underline */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold inline-block relative">
          Renewable Energy <span className="text-black">Is Healthier</span>
          <span className="block h-[3px] w-16 bg-orange-500 mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#008c4e] rounded-lg p-4 flex items-start gap-4 text-white shadow-md hover:bg-green-600 hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white mt-1 shrink-0 overflow-hidden">
              <img
                src={item.icon}
                alt="icon"
                className="w-6 h-6 object-contain"
              />
            </div>
            <p className="text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HealthBenefitsSection;
