import React from 'react';
import { motion } from 'framer-motion';
import GroupImg from '../../assets/solar-rooftop.png';

const SolarRooftop = () => {
  return (
    <motion.div
      className='px-4 sm:px-6 md:px-10 lg:px-20 py-10 space-y-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
        {/* Image Section */}
        <motion.div
          className='relative w-full lg:w-5/6 flex justify-center'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Green Background Box with controlled visibility */}
          <div className='w-full h-64 sm:h-80 md:h-[450px] lg:h-[600px] relative'>
            {/* Green on the left side */}
            <motion.div
              className='absolute bottom-0 left-0 h-1/2 w-1/2 bg-[#0A9642] rounded-3xl z-0'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            {/* Green bottom layer */}
            <motion.div
              className='absolute bottom-0 left-0 h-1/2 w-full bg-[#0A9642] rounded-3xl z-0'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
            {/* Image Card */}
            <motion.div
              className="absolute bottom-4 left-4 right-0 py-6 top-0 bg-white rounded-3xl shadow-2xl z-10 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={GroupImg}
                alt="about"
                className='w-full h-full object-contain rounded-lg'
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SolarRooftop;
