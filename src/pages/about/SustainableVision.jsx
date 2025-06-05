import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../../assets/about1.png";
// import bannerImage from "../../assets/whyEWIG/img4.png";

const VisionSection = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#101828]">
          Our Vision For <span className="text-black">A Sustainable Future</span>
        </h2>
        <div className="w-20 h-[2px] bg-orange-500 mx-auto mt-2" />
      </div>

      {/* Image container */}
      <div className="relative w-full max-w-5xl mx-auto rounded-2xl">
        {/* Image */}
        <img
          src={bannerImage}
          alt="Solar Rooftop"
          className="w-full h-[400px] md:h-[620px] object-cover rounded-2xl"
        />

        {/* Cards on desktop (overlay) */}
        <div className="hidden md:flex absolute inset-x-0 -bottom-20 z-10 justify-center gap-6 px-4">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-green-700 text-white rounded-br-2xl rounded-tl-2xl w-full max-w-sm"
          >
            <h4 className="bg-white text-green-600 px-6 py-4 rounded-tl-2xl font-bold text-lg md:text-xl shadow">
              <span >Shaping A Sustainable  Future With </span>
              <span className="border-red-500 border-b ">Solar</span>
            </h4>
            <p className="text-sm md:text-base px-6 py-6">
              Our Future Sustainability Goals Focus On Expanding The Adoption Of Clean Solar
              Energy, Advancing Innovative Technologies, And Reducing Our Carbon Footprint.
              We Aim To Increase The Efficiency And Affordability Of Solar Solutions, Promote
              Energy Independence, And Support Global Efforts To Combat Climate Change. Additionally,
              We Are Committed To Long-Term Sustainability By Integrating Eco-Friendly Practices
              In Our Operations And Collaborating With Communities To Foster A Greener, Healthier
              Planet For Future Generations.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-green-700 text-white rounded-bl-2xl rounded-tr-2xl w-full max-w-sm"
          >
            <h4 className="bg-white text-green-600 px-6 py-4 rounded-tr-2xl font-bold text-lg md:text-xl shadow">
              <span >What Makes Our Solar Company </span>
              <span className="border-red-500 border-b ">Unique?</span>
            </h4>
            <p className="text-sm md:text-base px-6 py-4">
              Our Solar Company Stands Out Because Of Our Unwavering Commitment To Innovation,
              Customer-Centric Approach, And Sustainability. We Combine Cutting-Edge Technology
              With Personalized Solutions To Meet Each Client’s Unique Energy Needs, Ensuring
              Maximum Efficiency And Savings. Our Dedicated Team Provides Transparent Communication,
              Expert Guidance, And Exceptional Service From Consultation To Installation And Beyond.
              Plus, We Prioritize Environmental Responsibility In Every Project, Helping Our Clients
              Reduce Their Carbon Footprint And Contribute To A Sustainable Future.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards on mobile (stacked below image) */}
      <div className="flex flex-col md:hidden items-center justify-center gap-6 mt-8 w-full max-w-5xl px-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-green-700 text-white rounded-br-2xl rounded-tl-2xl w-full"
        >
          <h4 className="bg-white text-green-400 px-6 py-4 rounded-tl-2xl font-bold text-lg shadow">
            <span className="text-green-700">Shaping A Sustainable Future With </span>
            <span className="underline">Solar</span>
          </h4>
          <p className="text-sm px-6 py-4">
              Our Future Sustainability Goals Focus On Expanding The Adoption Of Clean Solar
              Energy, Advancing Innovative Technologies, And Reducing Our Carbon Footprint.
              We Aim To Increase The Efficiency And Affordability Of Solar Solutions, Promote
              Energy Independence, And Support Global Efforts To Combat Climate Change. Additionally,
              We Are Committed To Long-Term Sustainability By Integrating Eco-Friendly Practices
              In Our Operations And Collaborating With Communities To Foster A Greener, Healthier
              Planet For Future Generations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-green-700 text-white rounded-bl-2xl rounded-tr-2xl w-full"
        >
          <h4 className="bg-white text-green-400 px-6 py-4 rounded-tr-2xl font-bold text-lg shadow">
            <span className="text-green-700">What Makes Our Solar Company </span>
            <span className="underline">Unique?</span>
          </h4>
          <p className="text-sm px-6 py-4">
              Our Future Sustainability Goals Focus On Expanding The Adoption Of Clean Solar
              Energy, Advancing Innovative Technologies, And Reducing Our Carbon Footprint.
              We Aim To Increase The Efficiency And Affordability Of Solar Solutions, Promote
              Energy Independence, And Support Global Efforts To Combat Climate Change. Additionally,
              We Are Committed To Long-Term Sustainability By Integrating Eco-Friendly Practices
              In Our Operations And Collaborating With Communities To Foster A Greener, Healthier
              Planet For Future Generations.
          </p>
        </motion.div>
      </div>

      {/* Spacer only needed for desktop to push below the absolute overlay */}
      <div className="hidden md:block mt-52" />
    </section>
  );
};

export default VisionSection;
