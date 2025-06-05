import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/about2.png";
import { Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
<section className="relative max-w-5xl mx-auto bg-[#0A1E50] text-white pt-32 md:pt-10 pb-16 px-6 md:px-10 rounded-2xl shadow-xl my-10">
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Image Section (mobile first row) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/3 flex justify-center md:justify-end relative order-1 md:order-2"
        >
          <img
            src={img}
            alt="City Globe"
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] object-contain mx-auto md:mx-0 md:absolute md:-top-52 md:right-6"
          />
        </motion.div>

        {/* Text Section (mobile second row) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left md:px-10 w-full md:w-2/3 order-2 md:order-1"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Get In Touch To Discuss <br /> How We Can Help You!
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            We're pleased to be welcoming customers to join us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link to={'/contact'} className="bg-[#FF5B2E] hover:bg-[#e64b1f] transition text-white px-6 py-2 rounded-full font-semibold text-sm">
              Request a Quote
            </Link>
            <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-medium bg-white/10">
              <div className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full">
                <Smartphone size={18} className="text-white" />
              </div>
              Phone: +91 98 76 543 210
            </div>
          </div>
        </motion.div>
      </div>

      {/* Green Curve at Bottom */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-4 bg-green-600 rounded-b-2xl z-0" />
    </section>
  );
};

export default ContactBanner;
