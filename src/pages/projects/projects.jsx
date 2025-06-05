import React from 'react'
import slider1 from "../../assets/serviceSlider.png";
import CommonSlider from '../../utils/CommonSlider';
import HomeIcon from '../../utils/HomeIcon';
import SuccessfulInstallations from './SuccessfulInstallations';

const Projects = () => {
  const projectSlides = [
  {
    title: "Our Project",
    description:
      "At EWIG, we take pride in every project we execute — from compact residential rooftops to large-scale commercial and industrial installations. Each project reflects our commitment to quality, innovation, and sustainable energy solutions tailored to client needs.",
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
    label: "Project",
  },
];


  return (
    <div>
       <CommonSlider slides={projectSlides} breadcrumbItems={breadcrumbs} />
        <SuccessfulInstallations/>
    </div>
  )
}

export default Projects