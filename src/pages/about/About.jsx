import React from 'react'
import slider1 from "../../assets/serviceSlider.png";
import HomeIcon from '../../utils/HomeIcon';
import CommonSlider from '../../utils/CommonSlider';
import SolarCard from './SolarCard'
import ContactBanner from './ContactBanner';
import OurTeam from '../teams/OurTeam';
import SustainableVision from './SustainableVision';

const About = () => {
   const aboutSlides = [
    {
      title: "About",
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
      label: "About",
    },
  ];
  
  return (
    <div>
        <CommonSlider slides={aboutSlides} breadcrumbItems={breadcrumbs} />
        <SolarCard/>
        <SustainableVision/>
        <ContactBanner/>
        <OurTeam/>
    </div>
  )
}

export default About