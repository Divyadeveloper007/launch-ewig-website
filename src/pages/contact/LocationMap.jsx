import React from "react";

const LocationMap = () => {
  return (
    <section className="px-4 md:px-8 pb-16 max-w-6xl mx-auto">

    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
      <iframe
        title="Ewig Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9232513807538!2d77.41851207350658!3d8.97920988976945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04127718d013e5%3A0x2e8d6dc6a5120d17!2sEVSP%20Energie!5e0!3m2!1sen!2sin!4v1717665683430!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
        ></iframe>
    </div>
        </section>
  );
};

export default LocationMap;
