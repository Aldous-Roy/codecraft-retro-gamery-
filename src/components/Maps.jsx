import React from "react";

const Maps = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full h-72 sm:h-80 md:h-96 px-4 sm:px-10 md:px-28"
      id="maps"
    >
      <section>
        <p className="text-4xl ">Location</p>
        <p className="py-4 text-xl">Venue:Apple Hall</p>
      </section>
      <iframe
        title="Sairam College Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.727120755148!2d80.0574071!3d12.9602171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1757655919693!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
