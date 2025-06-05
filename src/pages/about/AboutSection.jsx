import React from "react";
import icon from "../../assets/solar-icon.png";
import groupImg from "../../assets/about-group-img.png";
import { motion } from "framer-motion";

// const features = [
//   "End-to-End Solutions",
//   "Expert Engineering Team",
//   "Custom Design Approach",
//   "Long-Term Savings",
// ];

const AboutSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Right: Group Image Section */}

        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* <h6 className="text-[#0A9642] text-lg font-bold">About Us</h6> */}
          <h2 className="text-3xl font-bold text-[#101828] leading-snug">
            Renewable energy – Powering a safer
            <space className='border-b border-orange-500'> future </space>
            
          </h2>
          <p className="text-[#475467] text-sm leading-relaxed text-justify">
            Energy is at the heart of the climate challenge – and key to the
            solution. A large chunk of the greenhouse gases that blanket the
            Earth and trap the sun’s heat are generated through energy
            production, by burning fossil fuels to generate electricity and
            heat. Fossil fuels, such as coal, oil and gas, are by far the
            largest contributor to global climate change, accounting for over 75
            percent of global greenhouse gas emissions and nearly 90 percent of
            all carbon dioxide emissions. The science is clear: to avoid the
            worst impacts of climate change, emissions need to be reduced by
            almost half by 2030 and reach net-zero by 2050. To achieve this, we
            need to end our reliance on fossil fuels and invest in alternative
            sources of energy that are clean, accessible, affordable,
            sustainable, and reliable. Renewable energy sources – which are
            available in abundance all around us, provided by the sun, wind,
            water, waste, and heat from the Earth – are replenished by nature
            and emit little to no greenhouse gases or pollutants into the air.
            Fossil fuels still account for more than 80 percent of global energy
            production, but cleaner sources of energy are gaining ground. About
            29 percent of electricity currently comes from renewable sources.
          </p>

          {/* <ul className="space-y-4">
            {features.map((text, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-[#101828]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={icon} alt="Solar Icon" className="w-5 h-5 mt-1" />
                <span className="text-lg font-semibold">{text}</span>
              </motion.li>
            ))}
          </ul> */}
        </motion.div>

        {/* Left: Image Section */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={groupImg}
            alt="Group"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </motion.div>

        {/* Right: Text Content */}
      </div>
    </section>
  );
};

export default AboutSection;
