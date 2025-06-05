import { Carousel, Typography, Button } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "../../assets/slider/slider1.jpg"; 
import slider2 from "../../assets/slider/slider2.jpg"; 
import slider3 from "../../assets/slider/slider3.jpg"; 

const slides = [
  {
    title: (
      <>
        Your Partner in {" "} Industrial Growth {""}
        <span className="text-[#E8D31B]">Solar-Powered</span>
      </>
    ),
    description1: "Affordable | Sustainable | Reliable",
    description2:
      "Switch to solar rooftop energy and reduce your electricity bills today.",
    image: slider1,
  },
  {
    title: (
      <>
        Transforming Industrial Landscapes with {" "}
        <span className="text-[#E8D31B]">Solar Brilliance</span>
      </>
    ),
    description1: "Affordable | Sustainable | Reliable",
    description2:
      "Switch to solar rooftop energy and reduce your electricity bills today.",
    image: slider2,
  },
  {
    title: (
      <>
        Harnessing the Sun for a Brighter, {" "}
        <span className="text-[#E8D31B]">Greener Future</span>
      </>
    ),
    description1: "Affordable | Sustainable | Reliable",
    description2:
      "Switch to solar rooftop energy and reduce your electricity bills today.",
    image: slider3,
  },
];


const Slider = () => {
  return (
    <Carousel
    className="h-[100vh] rounded-none"
      autoplay
      loop
      prevArrow={({ handlePrev }) => (
        <button
          onClick={handlePrev}
          className="carousel-button absolute top-2/4 left-4 -translate-y-2/4"
        >
          <ChevronLeft size={28} />
        </button>
      )}
      nextArrow={({ handleNext }) => (
        <button
          onClick={handleNext}
          className="carousel-button absolute top-2/4 right-4 -translate-y-2/4"
        >
          <ChevronRight size={28} />
        </button>
      )}
    >
      {slides.map((slide, index) => (
  <div key={index} className="relative h-full w-full">
    <img
      src={slide.image}
      alt={`slide ${index + 1}`}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 flex items-center  px-3 lg:px-24">
      <div className="max-w-2xl">
        <Typography className="mb-4 font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-[Ubuntu, sans-serif]">
         {slide.title}
        </Typography>
        <Typography className="mb-4 text-white/90 text-base md:text-lg">
          {slide.description1}
        </Typography>
        <Typography className="mb-8 text-white text-sm md:text-base">
          {slide.description2}
        </Typography>
        <a
          href="#about"
          size="lg"
          className="bg-[#E8D31B] hover:bg-yellow-500 text-black font-bold text-sm px-6 py-3 rounded shadow-md"
        >
          Read more
        </a>
      </div>
    </div>
  </div>
))}

    </Carousel>
  );
};

export default Slider;
