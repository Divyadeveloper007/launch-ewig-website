import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import solarImage from "../../assets/about1.png"; // replace with your actual path

const points = [
  "Renewable energy is now the most affordable power option in many parts of the world.",
  "Solar power costs dropped by 85% between 2010 and 2020.",
  "Falling prices make renewables more accessible to low- and middle-income countries, where electricity demand is growing.",
  "Most of the future power demand can be met with low-carbon, renewable sources.",
  "By 2030, renewables could generate 65% of the world’s electricity.",
  "By 2050, clean energy could decarbonize 90% of the global power sector.",
  "Even with temporary cost rises in 2022–2023, renewables stay competitive due to the surge in coal and gas prices (IEA)."
];

const SustainableFuture = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.img
               src={solarImage}
                alt="Group"
               className="w-full max-w-[500px] h-auto object-contain"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
      

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-black mb-2">
            Our Vision For <span className="text-green-600 underline decoration-2">A Sustainable Future</span>
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Renewable Energy Is Cheaper
          </h3>

          <ul className="space-y-4">
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 text-gray-700"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainableFuture;
