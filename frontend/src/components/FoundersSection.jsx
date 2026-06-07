import React from 'react';

const founders = [
  {
    id: 1,
    name: "Dr. Nagaraj Reddy",
    role: "FOUNDER & MANAGING DIRECTOR",
    image: "nagaraj.png", // Keep your working image path here
    bio: "A doctor-turned-visionary entrepreneur. Armed with an MBBS and an MBA, he pioneered early technical enterprise computing via NRIT Inc. in the US, establishing structural foundations for our manufacturing and robotic transformations.",
  },
  {
    id: 2,
    name: "Nitin Reddy",
    role: "CEO – SPACEKI & DIRECTOR",
    image: "nitin.png", // Keep your working image path here
    bio: "Northeastern University alumnus specializing in Finance & Economics. Brings deep institutional operational infrastructure expertise from tenures at Warburg Pincus and CBRE US to lead facade manufacturing, smart automation, and enterprise integrations.",
  },
  {
    id: 3,
    name: "Aishwarya Reddy",
    role: "CEO – KHENSHU",
    image: "aishwarya.png", // Keep your working image path here
    bio: "Industrial Design Engineering graduate from BIT with an International MBA completed at Hult International Business School, San Francisco. Crafts premium identity footprints, aligning global aesthetic components with specialized artisanal custom fabrication.",
  }
];

export default function FoundersSection() {
  return (
    <section className="py-20 bg-[#0a1128]" id="founders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NEW: Left-Aligned Side Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            {/* Amber accent line */}
            <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
              Leadership Team
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl text-lg pl-16">
            The visionary minds driving NR Group's global manufacturing, automation, and enterprise transformations.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div 
              key={founder.id} 
              className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-300 flex flex-col items-center text-center shadow-lg group"
            >
              {/* Circular Profile Image Wrapper */}
              <div className="mb-6 relative">
                <div className="w-40 h-40 rounded-full bg-slate-800 border-2 border-amber-600/50 p-1 overflow-hidden group-hover:border-amber-500 transition-colors duration-300">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Profile Details */}
              <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
              <p className="text-amber-500 font-bold text-sm tracking-wide mb-6 uppercase">
                {founder.role}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                {founder.bio}
              </p>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}