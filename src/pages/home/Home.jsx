import React, { useEffect } from 'react'
import Slider from './Slider'
import ServicesCards from '../services/ServicesCards'
import WhyEWIGSection from '../whyEWIG/WhyEWIGSection'
import SolarRooftop from './SolarRooftop'
import OurTeam from '../teams/OurTeam'
// import Contact from '../contact/ContactSection'
import { useLocation } from 'react-router-dom'
import AboutSection from '../about/AboutSection'
import ProjectSection from '../projects/ProjectSection'
import SustainableFuture from './SustainableFuture'
// import RenewableHealth from './RenewableHealth'
import FaqSection from './FaqSection'
import HealthBenefitsSection from './HealthBenefitsSection'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // eg: #about => about
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // Optional - Add green border highlight
        element.classList.add("ring", "ring-green-400", "ring-offset-2");
        setTimeout(() => {
          element.classList.remove("ring", "ring-green-400", "ring-offset-2");
        }, 2000);
      }
    }
  }, [location]);

  return (
    <div id='home'>
        <Slider/>
        <AboutSection/>
        <SustainableFuture/>
        <HealthBenefitsSection/>
        {/* <ServicesCards/> */}
        <SolarRooftop/>
                <WhyEWIGSection/>
        <OurTeam/>
        <FaqSection/>
        {/* <ProjectSection/> */}
        {/* <Contact/> */}
    </div>
  )
}

export default Home