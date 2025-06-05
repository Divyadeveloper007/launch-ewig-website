import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, SquareCheckBig } from "lucide-react";
import solarImage from "../../assets/sustainable-future.png"; // replace with your actual path

const points = [
  "Renewable energy is now the most affordable power option in many parts of the world.",
  "Solar power costs dropped by 85% between 2010 and 2020.",
  "Falling prices make renewables more accessible to low- and middle-income countries, where electricity demand is growing.",
  "Most of the future power demand can be met with low-carbon, renewable sources.",
  "By 2030, renewables could generate 65% of the world’s electricity.",
  "By 2050, clean energy could decarbonize 90% of the global power sector.",
  "Even with temporary cost rises in 2022–2023, renewables stay competitive due to the surge in coal and gas prices (IEA).",
];

const SustainableFuture = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-6 lg:px-12">
      {/* 💡 CENTERED HEADING AT TOP */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-black relative inline-block">
          Our Vision For A Sustainable Future
     <span className="block h-[3px] w-12 bg-orange-500 mx-auto mt-1 rounded-full"></span>
      
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-16">
        {/* Image and Text Block */}

        <motion.img
          src={solarImage}
          alt="Group"
          className="w-full max-w-[500px] max-h-[500px] object-contain"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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
                <div className="pt-1">
                  <SquareCheckBig className="text-green-600" size={20} />
                </div>
                <span className="leading-snug">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainableFuture;
