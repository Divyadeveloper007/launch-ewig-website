import React from 'react'
import slider1 from "../../assets/serviceSlider.png";
import CommonSlider from '../../utils/CommonSlider';
import HomeIcon from '../../utils/HomeIcon';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

const Services = () => {
  const contactSlides = [
  {
    title: "Contact Us",
    description:
      "Whether you’re looking to install a rooftop solar system, explore commercial energy solutions, or need expert consultation — EWIG is just a message away. Our team is ready to guide you through every step, from understanding your energy needs to delivering a fully functional solar solution.",
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
    label: "Contact",
  },
];


  return (
    <div>
       <CommonSlider slides={contactSlides} breadcrumbItems={breadcrumbs} />
        <ContactForm/>
        <LocationMap/>
    </div>
  )
}

export default Services