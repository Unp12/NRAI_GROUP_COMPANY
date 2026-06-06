import React from 'react';

export default function About() {
  const investments = [
    "Real Estate & Urban Development",
    "EPC Construction & Infrastructure",
    "Advanced Façade & Glazing Systems",
    "Smart Manufacturing",
    "Luxury Furniture & Interior Solutions",
    "AI-Driven ERP & Automation Platforms",
    "Intelligent Construction Technologies",
    "Robotics & Industry 5.0 Systems"
  ];

  return (
    <section id="about" className="bg-white">
      
      {/* Title Header */}
      <div className="py-12 sm:py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">About NR Group</h2>
      </div>

      {/* Split Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Dark Blue Text Block */}
        <div className="bg-[#0f172a] text-slate-300 p-8 sm:p-16 lg:p-24 flex flex-col justify-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 relative inline-block w-fit">
            Our Story
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-white transform translate-y-3"></span>
          </h3>
          
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-left">
            <p>
              NR Group is a Bangalore-based diversified business group operating across real estate development, EPC construction, advanced manufacturing, façade engineering, luxury interiors, architecture, and AI-driven intelligent automation systems.
            </p>
            <p>
              Founded on the principles of integrity, innovation, and long-term value creation, NR Group has evolved into an integrated platform combining land development, engineering, construction, manufacturing, luxury design, and next-generation enterprise technologies.
            </p>
            <p>
              With a legacy spanning over three decades, the Group has developed residential layouts, apartment projects, commercial developments, industrial infrastructure, and premium lifestyle spaces across Karnataka and beyond. Through its companies NR Realty, Spaceki, Spaceki Infra, Khenshu, Element Design, and NRAI & Robotics the Group is building a future-ready ecosystem that integrates real estate, manufacturing, EPC execution, luxury living, and intelligent automation.
            </p>
            <p>
              NR Group's integrated model enables end-to-end control across the development lifecycle from land acquisition and architecture to EPC construction, façade engineering, manufacturing, luxury interiors, and AI-powered operational systems.
            </p>
          </div>
        </div>

        {/* Image Block */}
        <div className="h-[400px] lg:h-auto w-full">
          <img 
            src="/Ourstory.png"
            alt="NR Group Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Investment Section */}
      <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-12 relative inline-block w-fit">
          The Group is actively investing in
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-[#0f172a] translate-y-4"></span>
        </h3>

        <ul className="text-left max-w-md mx-auto space-y-2 mb-12 text-slate-700 text-sm sm:text-base list-disc list-inside">
          {investments.map((item, index) => (
            <li key={index} className="pl-2">{item}</li>
          ))}
        </ul>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-center px-4">
          Driven by a long-term vision to build globally respected Indian enterprises, NR Group combines engineering excellence, design sophistication, technology innovation, and ethics-driven entrepreneurship to create sustainable businesses for the future.
        </p>
      </div>

    </section>
  );
}