import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function Businesses() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  // Added 'details' array to hold the extended information for the modal
  const sectors = [
    {
      title: "NR Realty",
      tag: "Development",
      desc: "Architecting premier residential hubs, commercial zones, and industrial ecosystems across strategic development zones.",
      image: "/realty.png",
      details: [
        "End-to-end land acquisition and zoning management.",
        "Development of ultra-luxury residential communities.",
        "Creation of high-yield commercial and IT park assets.",
        "Integration of smart-home technologies into base builds."
      ]
    },
    {
      title: "Spaceki",
      tag: "Facades & Glazing",
      desc: "Specializing in advanced façade engineering, premium doors and windows, aluminium systems, and high-performance building products.",
      image: "/spaceki.png",
      details: [
        "Custom unitized and semi-unitized glass curtain walls.",
        "High-performance acoustic and thermal insulation systems.",
        "Automated fabrication using precision CNC machinery.",
        "Sustainable, LEED-certified material sourcing."
      ]
    },
    {
      title: "Spaceki Infra",
      tag: "EPC & Construction",
      desc: "Executing residential, commercial, industrial, and infrastructure projects with a strong focus on engineering precision and scalable delivery.",
      image: "/spaceki infra.png",
      details: [
        "Turnkey EPC (Engineering, Procurement, and Construction) contracting.",
        "Heavy civil engineering and foundation execution.",
        "Implementation of Building Information Modeling (BIM) workflows.",
        "Strict adherence to international safety and quality standards."
      ]
    },
    {
      title: "Khenshu",
      tag: "Luxury Styling",
      desc: "Premium artisanal furnishing elements blending custom aesthetics with refined high-end residential interiors.",
      image: "/khenshu.png",
      details: [
        "Bespoke furniture design and artisanal craftsmanship.",
        "Sourcing of rare, premium materials and global textiles.",
        "Comprehensive interior architecture and space planning.",
        "Seamless integration with NR Realty residential projects."
      ]
    },
    {
      title: "NRAI & Robotics",
      tag: "Intelligent Systems",
      desc: "Deep integration layers providing structural cloud software, industrial robotics management tools, and advanced manufacturing platforms.",
      image: "/robotics.png",
      details: [
        "Deployment of Enterprise RAG systems for document retrieval.",
        "Integration of IoT sensors for real-time construction monitoring.",
        "Custom ERP platforms for supply chain and vendor management.",
        "Robotic process automation (RPA) in manufacturing facilities."
      ]
    }
  ];

  return (
    <section id="businesses" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Core Ecosystem Segments</h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Operational frameworks structured to coordinate development, advanced assembly processes, and enterprise cloud intelligence.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedBusiness(item)}
              className="group relative bg-slate-900 rounded-xl border border-slate-800/80 hover:border-amber-500/50 transition-all flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg hover:shadow-amber-500/10"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Business+Unit'; }}
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 pt-2 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors text-left">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-left flex-grow">{item.desc}</p>
                
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-amber-500 transition-colors">
                  <span>Explore Details</span>
                  <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Interactive Modal */}
      {selectedBusiness && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity"
          onClick={() => setSelectedBusiness(null)} // Clicking outside closes it
        >
          {/* Modal Container */}
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevents clicks inside the modal from closing it
          >
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedBusiness(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-slate-950/50 hover:bg-amber-500 text-white hover:text-slate-900 rounded-full transition-colors backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Side: Large Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={selectedBusiness.image} 
                alt={selectedBusiness.title} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/800x800?text=Business+Image'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Right Side: Detailed Content */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col justify-center overflow-y-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2 block text-left">
                {selectedBusiness.tag}
              </span>
              <h3 className="text-3xl font-bold text-white mb-6 text-left">
                {selectedBusiness.title}
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed mb-8 text-left">
                {selectedBusiness.desc}
              </p>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2 text-left">
                  Key Capabilities
                </h4>
                <ul className="space-y-3">
                  {selectedBusiness.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300 text-left">
                      <ArrowUpRight className="h-4 w-4 text-amber-500 mr-3 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => {
                  setSelectedBusiness(null);
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-10 w-full py-4 bg-slate-800 hover:bg-amber-500 text-white hover:text-slate-900 font-bold rounded-lg transition-colors"
              >
                Inquire About Services
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}