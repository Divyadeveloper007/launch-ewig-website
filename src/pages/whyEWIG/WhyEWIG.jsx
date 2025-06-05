import React from 'react'
import CommonSlider from '../../utils/CommonSlider';
import slider1 from "../../assets/serviceSlider.png";
import HomeIcon from '../../utils/HomeIcon';
import WhyEWIGDetails from './WhyEWIGDetails';

const WhyEWIG = () => {
  const whyEWIGSlides = [
    {
      title: "Why Choose EWIG?",
      description:
        "At EWIG, we don’t just offer solar solutions — we deliver peace of mind, long-term savings, and a cleaner future. Here’s why clients across residential, commercial, and industrial sectors trust us with their energy needs:",
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
      label: "Why EWIG",
    },
  ];


  return (
    <div>
      <CommonSlider slides={whyEWIGSlides} breadcrumbItems={breadcrumbs} />
      <WhyEWIGDetails />
    </div>
  )
}

export default WhyEWIG