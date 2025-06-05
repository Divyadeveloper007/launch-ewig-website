import React from "react";
import { motion } from "framer-motion";
import img1 from '../../assets/projects/project1.png';
import img2 from '../../assets/projects/project2.png';
import img3 from '../../assets/projects/project3.png';
import img4 from '../../assets/projects/project4.png';
import img5 from '../../assets/projects/project5.png';
import img6 from '../../assets/projects/project6.png';
import img7 from '../../assets/projects/project7.png';
import { ArrowRight } from "lucide-react";

const installations = [
  {
    title: "Develop and Manage",
    subtitle: "Sustainable Infrastructure",
    price: "250.43",
    image: img1,
  },
  {
    title: "Bishop restorative academy -",
    subtitle: "Hybrid (rooftop mounting)",
    price: "250.43",
    image: img2,
  },
  {
    title: "Develop and Manage",
    subtitle: "Sustainable Infrastructure",
    price: "250.43",
    image: img3,
  },
  {
    title: "Bishop restorative academy -",
    subtitle: "Hybrid (rooftop mounting)",
    price: "250.43",
    image: img4,
  },
  {
    title: "Develop and Manage",
    subtitle: "Sustainable Infrastructure",
    price: "250.43",
    image: img5,
    fullWidth: true,
  },
  {
    title: "Develop and Manage",
    subtitle: "Sustainable Infrastructure",
    price: "250.43",
    image: img6,
  },
  {
    title: "Bishop restorative academy -",
    subtitle: "Hybrid (rooftop mounting)",
    price: "250.43",
    image: img7,
  },
];

const SuccessfulInstallations = () => {
  return (
    <motion.div
      className="px-4 sm:px-6 md:px-16 lg:px-20 py-14"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        From Vision To Reality – EWIG’s <br className="hidden sm:block" />
        Successful Solar Installations
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {installations.map((item, index) => (
          <motion.div
            key={index}
            className={`relative rounded-xl group transition-transform duration-300 transform hover:scale-[1.015] pb-20 ${
              item.fullWidth ? "md:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-xl"
            />

            <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-md px-4 py-3 rounded-md shadow-md max-w-[260px] w-[85%] sm:w-[240px]">
              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-gray-800">
                {item.subtitle}
              </p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-green-600 font-bold text-sm">
                  {item.price}{" "}
                  <span className="text-[10px] font-normal text-gray-600">
                    kwp
                  </span>
                </span>
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500">
                  <ArrowRight
                    size={14}
                    className="text-gray-500 transition-colors duration-300 group-hover:text-white"
                  />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SuccessfulInstallations;
