import { Carousel, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CommonSlider = ({ slides = [], breadcrumbItems = [] }) => {
  return (
    <div className="relative">
      <Carousel
        className="h-[60vh] rounded-none"
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
            <div className="absolute inset-0 flex items-end px-6 lg:px-40 pb-4 md:pb-8">
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
          {breadcrumbItems.map((item, idx) => (
            <span key={idx} className="flex items-center space-x-1">
              {item.link ? (
                <Link to={item.link} className="hover:underline flex items-center space-x-1">
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {idx < breadcrumbItems.length - 1 && <span>|</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonSlider;
