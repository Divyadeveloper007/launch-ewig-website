import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { projects } from "./ProjectData";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // 'left' or 'right'
  const [animating, setAnimating] = useState(false); // <-- new state

  const handlePrev = () => {
    setAnimating(false); // Reset animation
    setTimeout(() => {
      setDirection("left");
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setAnimating(true); // Trigger animation
    }, 10);
  };

  const handleNext = () => {
    setAnimating(false); // Reset animation
    setTimeout(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setAnimating(true); // Trigger animation
    }, 10);
  };

  const project = projects[currentIndex];

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-3 mt-5">
      {/* Heading */}
      <div className="text-center mb-10">
        <h6 className="text-[#0A9642] text-lg font-bold">Our Projects</h6>
        <h2 className="text-3xl pb-5 font-bold text-[#101828] leading-snug">
          Showcasing Our Commitment to a Greener Tomorrow
        </h2>
      </div>

      <div className="relative w-full max-w-5xl pb-12 overflow-hidden">
        {/* Content wrapper for sliding animation */}
        <div className={`flex flex-col md:flex-row items-center md:ml-10 relative transition-transform duration-500
            ${animating ? (direction === "right" ? "animate-slide-right" : "animate-slide-left") : ""}
          `}>
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] object-cover rounded-md shadow-md"
            />
          </div>

          {/* Card */}
          <div className="w-full lg:absolute lg:top-[20%] lg:left-[45%] lg:w-[50%] z-10">
            <div className="relative before:content-[''] before:absolute before:-right-3 before:-bottom-3 before:bg-[#0A9642] before:w-full before:h-full before:rounded-lg before:z-[-1] before:rounded-tr-none before:rounded-br-lg before:rounded-tl-lg">
              <div className="p-6 shadow-xl rounded-lg bg-white leading-loose">
                <h2 className="mb-2 text-[#0A9642] text-lg font-bold flex items-center gap-2">
                  <MapPin className="text-[#0A9642] w-5 h-5" />
                  {project.title}
                </h2>
                <p className="text-gray-700 font-bold text-sm mb-4 leading-relaxed">{project.description}</p>
                <h2 className="text-2xl font-bold text-[#101828] leading-snug">{project.summary}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center mt-6 md:absolute md:top-[2%] md:right-44 md:transform md:-translate-y-1/2 md:z-10 gap-4">
          <button
            className="bg-[#0A9642] p-1 rounded-full shadow-md hover:shadow-lg"
            onClick={handlePrev}
          >
            <ChevronLeft className="text-white font-bold" />
          </button>

          <span className="text-black font-bold text-xl md:text-2xl">
            {currentIndex + 1} / {projects.length}
          </span>

          <button
            className="bg-[#0A9642] p-1 rounded-full shadow-md hover:shadow-lg"
            onClick={handleNext}
          >
            <ChevronRight className="text-white font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
