import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/whyEWIG/img1.png";
import img2 from "../../assets/whyEWIG/img2.png";
import img3 from "../../assets/whyEWIG/img3.png";
import img4 from "../../assets/whyEWIG/img4.png";
import img5 from "../../assets/whyEWIG/img5.png";

const whyEWIG = [
  {
    title: "Reliable & Efficient Systems",
    description:
      "Our solar installations are engineered for maximum efficiency and built with high-quality components to ensure lasting performance. With EWIG, you're investing in power you can depend on — day after day, year after year.",
    image: img1,
  },
  {
    title: "Clean Energy for a Greener Planet",
    description:
      "By choosing EWIG, you're making a conscious move toward sustainability. Our solar solutions help reduce your carbon footprint and support the global shift to renewable energy — without compromising on power or performance.",
    image: img3,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "From consultation to installation and after-sales support, we guide you every step of the way. Our expert team is committed to delivering seamless service, transparent communication, and tailored solutions that fit your needs.",
    image: img5,
  },
  {
    title: "Smart Savings & Fast ROI",
    description:
      "Solar isn’t just good for the planet — it’s great for your wallet. EWIG systems are designed for cost-effectiveness, helping you cut down on electricity bills while increasing property value and accessing potential subsidies.",
    image: img2,
  },
  {
    title: "Powered by Innovation",
    description:
      "We bring together the latest in solar technology and smart energy practices to ensure your system is future-ready. With EWIG, you’re not just going solar — you’re stepping into the next generation of energy.",
    image: img4,
  },
];

const WhyEWIGDetails = () => {
  return (
    <motion.div
      className="px-4 sm:px-6 md:px-16 lg:px-20 py-14"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {/* Heading Animation */}
      <motion.h2
        className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Choose EWIG – Where Reliability <br /> Meets Sustainability
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {whyEWIG.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col gap-4 items-center md:items-start ${
              index % 2 === 0 ? "md:mt-0" : "md:mt-24"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-[90%] mx-auto">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] object-cover rounded-tr-2xl shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-justify text-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyEWIGDetails;
