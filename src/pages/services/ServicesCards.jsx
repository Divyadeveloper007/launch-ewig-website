import React from 'react';
import service1 from '../../assets/services1.png';
import service2 from '../../assets/services2.png';
import service3 from '../../assets/services3.png';
import service4 from '../../assets/services4.png';
import service5 from '../../assets/services5.png';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "epc",
    title: "EPC (Engineering, Procurement & Construction)",
    description:
      "We provide end-to-end project development, management, and turnkey solutions for a seamless solar experience, ensuring your satisfaction.",
    image: service1
  },
  {
    id: "commercial-solutions",
    title: "COMMERCIAL SOLUTIONS",
    description:
      "Control your energy use and expenses with tailored solar solutions, offering sustainable savings through renewable energy.",
    image: service2
  },
  {
    id: "rooftop-project",
    title: "SOLAR ROOFTOP PROJECT",
    description:
      "Specializing in decentralized energy generation for commercial, industrial, and rural needs, both ON-Grid and OFF-Grid.",
    image: service3
  },
  {
    id: "government-approval",
    title: "GOVERNMENT APPROVAL",
    description:
      "We handle all necessary government permissions and documentation, ensuring a smooth and hassle-free installation process.",
    image: service4
  },
  {
    id: "oprations-maintenance",
    title: "O & M (Operations & Maintenance)",
    description:
      "We offer on-site maintenance services to ensure maximum efficiency, performance, and longevity of your solar systems.",
    image: service5
  }
];

const ServicesCards = () => {
  return (
    <section id='services' className="bg-white py-16 px-2 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col justify-center items-center text-center pb-8'>
          <h3 className='text-[#0A9642] text-lg font-bold pb-3'>Our Services</h3>
          <h2 className="text-3xl font-bold text-[#101828] leading-snug">
            Your All-in-One Partner for Rooftop Solar Installations
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden group transition duration-300 flex flex-col justify-between"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transform group-hover:scale-95 transition-transform duration-300"
                />
              </div>
              <div className="p-3 flex flex-col justify-between flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-base font-bold text-[#101828]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#475467] text-sm mb-4 flex-grow">{service.description}</p>
                <Link
                  to={`/services#${service.id}`}
                  className="text-green-600 text-sm font-semibold flex items-center gap-1 hover:underline mt-auto"
                >
                  View more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
