import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Factory, Wind, PlusCircle, BadgeDollarSign } from "lucide-react";

const healthData = [
  {
    icon: <AlertCircle className="w-6 h-6 text-white" />,
    text: "Over 13 million deaths annually are linked to avoidable environmental causes, including air pollution."
  },
  {
    icon: <Factory className="w-6 h-6 text-white" />,
    text: "Harmful pollutants like fine particulate matter and nitrogen dioxide mainly come from burning fossil fuels."
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6 text-white" />,
    text: "In 2018, air pollution from fossil fuels cost the world $2.9 trillion, or $8 billion per day in health and economic impacts."
  },
  {
    icon: <Wind className="w-6 h-6 text-white" />,
    text: "Transitioning to clean energy sources like wind and solar helps reduce both air pollution and health risks, while also combating climate change."
  },
  {
    icon: <PlusCircle className="w-6 h-6 text-white" />,
    text: "Cleaner air from renewables leads to fewer respiratory and heart diseases, improving public health and reducing the burden on healthcare systems."
  },
];

const RenewableHealth = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold text-black">
          Renewable Energy Is <span className="text-green-600 underline decoration-2">Healthier</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <motion.div
          className="bg-green-600 text-white p-6 rounded-xl shadow-md col-span-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            According to the World Health Organization (WHO), 99% of people globally breathe air that exceeds safe air quality limits.
          </p>
        </motion.div>

        {healthData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-green-600 text-white p-6 rounded-xl shadow-md flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RenewableHealth; 
