import { Carousel, Typography } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "../../assets/serviceSlider.png";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Services",
    description:
      "At EWIG, we deliver end-to-end solar energy solutions for residential, commercial, and industrial clients. From consultation to long-term support, we ensure quality, innovation, and sustainable value.",
    image: slider1,
  },
  // {
  //   title: "Services",
  //   description:
  //     "At EWIG, we deliver end-to-end solar energy solutions for residential, commercial, and industrial clients. From consultation to long-term support, we ensure quality, innovation, and sustainable value.",
  //   image: slider1,
  // },
  // {
  //   title: "Services",
  //   description:
  //     "At EWIG, we deliver end-to-end solar energy solutions for residential, commercial, and industrial clients. From consultation to long-term support, we ensure quality, innovation, and sustainable value.",
  //   image: slider1,
  // },
];

const ServiceSlider = () => {
  return (
    <div className="relative">
      <Carousel
        className="h-[60vh] rounded-none"
        // autoplay
        // loop
        // prevArrow={({ handlePrev }) => (
        //   <button
        //     onClick={handlePrev}
        //     className="carousel-button absolute top-2/4 left-4 -translate-y-2/4"
        //   >
        //     <ChevronLeft size={28} />
        //   </button>
        // )}
        // nextArrow={({ handleNext }) => (
        //   <button
        //     onClick={handleNext}
        //     className="carousel-button absolute top-2/4 right-4 -translate-y-2/4"
        //   >
        //     <ChevronRight size={28} />
        //   </button>
        // )}
        autoplay={true}
        loop={true}
        navigation={false}
        prevArrow={() => null}
        nextArrow={() => null}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={slide.image}
              alt={`slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-end  px-6 lg:px-40 pb-4 md:pb-8">
              <div className="max-w-2xl">
                <Typography className="mb-4 font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-[Ubuntu, sans-serif]">
                  {slide.title}
                </Typography>
                <Typography className="mb-4 text-white/90 font-normal text-sm md:text-base">
                  {slide.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Breadcrumbs */}
      <div className="absolute -bottom-4 left-0 right-0 mx-auto w-[90vw] max-w-5xl px-4">
        <div className="flex items-center space-x-2 bg-[#0A9642] px-6 py-2 rounded-full text-white text-sm md:text-base font-[Ubuntu, sans-serif] shadow-lg justify-start text-left">
          <Link to="/" className="flex items-center space-x-1 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <span>Home</span>
          </Link>
          <span>|</span>
          <span className="cursor-pointer">Services</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
