import React from 'react';
import bgImg from '../../assets/why-ewig-bg.png';
import engineerImg from '../../assets/why-ewig-right.png';
import processGroup from '../../assets/process-group.png';
import VerticalProcessGroup from '../../assets/Vertical-process-group.png';

const WhyEWIG = () => {
  return (
    <div id="why-ewig" className="relative w-full min-h-[700px] sm:min-h-[400px] xl:min-h-[600px] overflow-hidden text-white">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Heading Section */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center px-4">
        <h2 className="text-white bg-[#0A9642] font-bold p-1 text-base sm:text-xl md:text-3xl">
          Our 7-Step Solar Rooftop Process
        </h2>
        <p className="mt-2 text-sm font-normal md:text-base italic">
          From consultation to clean energy – here's how we do it.
        </p>
      </div>

      {/* Responsive Layout */}
      <div className="relative z-10 w-full mt-6 px-4">
        {/* Mobile View: Vertical Layout */}
        <div className="flex flex-col items-center gap-6 sm:hidden">
          {/* Vertical Process Group */}
          <div className="w-[80%]">
            <img
              src={VerticalProcessGroup}
              alt="Vertical Process"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Engineer Image */}
          <div className="w-[80%]">
            <img
              src={engineerImg}
              alt="Engineer"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Large Screens: Horizontal Layout */}
        <div className="hidden sm:flex w-full justify-between items-center">
          {/* Engineer Image - LEFT */}
          <div className="w-[40%] xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[40%]">
            <img
              src={engineerImg}
              alt="Engineer"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Process Group Image - RIGHT Centered Vertically */}
          <div className="w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[60%] flex items-center justify-center">
            <img
              src={processGroup}
              alt="Process"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEWIG;
