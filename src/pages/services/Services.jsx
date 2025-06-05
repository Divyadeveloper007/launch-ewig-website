import React from 'react'
import slider1 from "../../assets/serviceSlider.png";
import ServicesDetailes from './ServicesDetailes'
import CommonSlider from '../../utils/CommonSlider';
import HomeIcon from '../../utils/HomeIcon';

const Services = () => {
  const servicesSlides = [
  {
    title: "Services",
    description:
      "At EWIG, we deliver end-to-end solar energy solutions for residential, commercial, and industrial clients. From consultation to long-term support, we ensure quality, innovation, and sustainable value.",
    image: slider1,
  },
];

const breadcrumbs = [
  {
    label: "Home",
    link: "/",
    icon: HomeIcon, // Optional
  },
  {
    label: "Services",
  },
];


  return (
    <div>
       <CommonSlider slides={servicesSlides} breadcrumbItems={breadcrumbs} />
        <ServicesDetailes/>
    </div>
  )
}

export default Services