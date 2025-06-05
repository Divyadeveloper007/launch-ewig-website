import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import ServiceDropdown from './ServiceDropdown'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactForm = () => {
    const [selectedService, setSelectedService] = useState({ label: "Choose Service" });

  return (
    <motion.section
      className="px-4 md:px-8 py-16 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Heading */}
      <motion.div className="text-center mb-12" variants={fadeUp}>
        <p className="text-[#0A9642] font-semibold text-sm relative inline-block">
          REQUEST A QUOTE
          <span className="block h-[3px] w-12 bg-orange-500 mx-auto mt-1 rounded-full"></span>
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-black mt-4">
          We're Here To Help You Make The <br />
          Switch To Clean, Reliable Solar Energy
        </h2>
      </motion.div>

      {/* Form and Info */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left: Form */}
        <motion.form
          className="md:col-span-2 space-y-6"
          variants={fadeUp}
          custom={1}
        >
          <div>
            <label className="block font-semibold mb-2 text-sm">
              GENERAL ENQUIRY
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" type="text" placeholder="Complete Name" />
              <input className="input" type="email" placeholder="Email Address" />
              <input className="input" type="tel" placeholder="Phone No" />
              <input className="input" type="text" placeholder="Post Code" />
              <input className="input md:col-span-2" type="text" placeholder="Location?" />
              <input
                className="input md:col-span-2"
                type="text"
                placeholder="How did you hear of us?"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-sm">
              I AM INTERESTED IN RENEWABLES FOR MY
            </label>
              <ServiceDropdown
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
          </div>

          <textarea
            rows={5}
            className="w-full bg-gray-100 border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A9642] rounded-xl"
            placeholder="Your Message"
          ></textarea>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF5B2E] hover:bg-[#e64b1f] transition px-6 py-2 rounded-full text-white text-sm font-semibold"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Right: Info Blocks */}
        <div className="space-y-6">
          <label className="block font-semibold mb-2 text-sm">
            CONTACT INFORMATION
          </label>

          {[
            {
              icon: <Smartphone size={18} />,
              title: "Phone No:",
              detail: "+91 7845279010",
            },
            {
              icon: <FaMapMarkerAlt size={18} />,
              title: "Location:",
              detail: (
                <>
                  Register Office <br />
                  18/23, Mookamb, Devakottai Post, <br />
                  Karaikudi, Tamilnadu – 630204 <br />
                  <br />
                  Corporate Office <br />
                  Flat No-F1, Plot No.17, Arunachalam Main Road, <br />
                  Ambal Nagar, Porur, Chennai - 600116
                </>
              ),
            },
            {
              icon: <FaEnvelope size={18} />,
              title: "Email Address:",
              detail: "info@evspenergie.com",
            },
          ].map((block, idx) => (
            <motion.div
              key={idx}
              className="bg-green-600 text-white rounded-xl p-6 flex gap-4 items-start"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
            >
              <div className="bg-orange-500 text-white rounded-full p-2">
                {block.icon}
              </div>
              <div className="text-sm">
                <p className="font-semibold">{block.title}</p>
                <p>{block.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
