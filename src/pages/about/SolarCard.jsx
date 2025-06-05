import React from "react";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import img from "../../assets/about.png";
import icon from '../../assets/about-icon.png'

const SolarCard = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div
        className="flex flex-col max-w-6xl md:flex-row items-center justify-center gap-6 md:mt-6 md:gap-14 p-6 md:p-12 bg-white"
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
          <div className="inline-block">

          <p className="text-sm text-green-600 font-semibold">
            WE CARE FOR EARTH
          </p>
                    <span className="block h-[3px] w-12 bg-orange-500 mx-auto mt-1 rounded-full"></span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-2 leading-snug">
            Your Partner In Clean, Smart Solar Energy
          </h2>
          <p className="text-gray-600 mt-4 text-justify">
            Our company ensures customer satisfaction through a combination of
            personalized service, transparent communication, and reliable
            solutions. We prioritize understanding each client's specific energy
            needs and provide tailored solar energy systems that maximize
            efficiency and cost savings. Our team offers professional guidance
            throughout the entire process, from consultation to installation and
            ongoing support. We are committed to quality craftsmanship, timely
            project delivery, and responsive after-sales service to build trust
            and long-term relationships with our customers.
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
  className="absolute -bottom-6 -left-6 bg-[#0A9642] rounded-xl px-2 py-3 shadow-lg w-[180px] text-white flex flex-col items-center"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  {/* Top Line */}
  <p className="text-xs uppercase tracking-wide">A Team With</p>

  {/* Icon and Number */}
  <div className="flex items-center gap-3 mt-1">
    <div className="bg-white rounded-md p-2 w-10 h-10 flex items-center justify-center">
      <img src={icon} alt="icon" className="w-6 h-6 object-contain" />
    </div>
    <p className="text-4xl font-bold">25+</p>
  </div>

  {/* Bottom Text - Centered Across Both */}
  <p className="text-xs mt-2 text-center">Years Of Solar Expertise</p>
</motion.div>


        </motion.div>
      </motion.div>
    </section>
  );
};

export default SolarCard;
