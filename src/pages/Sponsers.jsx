import React from "react";

const Sponsers = () => {
  const sponsors = [
    { name: "Anu Traders", link: "https://company-one.com", logo: "anu.jpeg" },
  ];

  return (
    <section id="sponsors" className="py-16 px-4 w-full h-screen">
      <h2 className="text-center text-4xl font-bold mb-12">Our Sponsors</h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 shadow-lg rounded-lg transition-transform duration-300 hover:scale-110"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-24 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
