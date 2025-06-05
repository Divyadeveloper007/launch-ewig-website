// SolarCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import img from '../../assets/about.png';

const SolarCard = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center gap-6 md:mt-6 md:gap-16 p-6 md:p-12 bg-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Text Content */}
      <motion.div
        className="max-w-lg text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-green-600 font-semibold">WE CARE FOR EARTH</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
          Your Partner In <br /> Clean, Smart Solar Energy
        </h2>
        <p className="text-gray-600 mt-4 text-justify">
          At 100% we are passionate about making a cleaner planet for future generations. We believe in delivering the most efficient solar energy systems in order to reduce the carbon footprint and energy cost for families, businesses, and communities.
        </p>
      </motion.div>

      {/* Image Card */}
      <motion.div
        className="relative w-full md:w-[400px]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={img}
          alt="Solar Panel"
          className="w-full h-auto rounded-xl shadow-md object-cover"
        />

        {/* Badge */}
        <motion.div
          className="absolute flex-col -bottom-4 -left-4 px-10 bg-[#0A9642] text-white py-2 rounded flex items-center gap-2 text-sm shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <FaClock className="text-white" />
            <p className="font-semibold text-4xl">18+</p>
          </div>
          <p className="font-normal text-xs">Years Experience</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SolarCard;
