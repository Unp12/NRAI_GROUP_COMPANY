import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white relative">
      {/* Top Section: Info and Form */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-left">
                Have inquiries regarding upcoming project pipelines, manufacturing contracts, or technical software consulting deployments? Reach out directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-amber-500 rounded-lg border border-slate-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Headquarters</h4>
                  <p className="text-slate-200 text-sm sm:text-base mt-1">NR Aquafront, Tank Shore Road,<br />BTM Layout 2nd Stage, Bangalore</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-amber-500 rounded-lg border border-slate-800">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Communication Nodes</h4>
                  <p className="text-slate-200 text-sm sm:text-base mt-1">+91 9845454774</p>
                  <p className="text-slate-400 text-xs sm:text-sm">+1 (857) 264-9519 (Global Ops)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 text-amber-500 rounded-lg border border-slate-800">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Electronic Mail</h4>
                  <a href="mailto:nitin@nrgroupindia.com" className="text-amber-400 text-sm sm:text-base hover:underline mt-1 block">
                    nitin@nrgroupindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-left">Transmission Terminal</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm" placeholder="First Name" />
                </div>
                <div className="text-left">
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm" placeholder="Last Name" />
                </div>
              </div>
              <div className="text-left">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm" placeholder="name@company.com" />
              </div>
              <div className="text-left">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message Payload</label>
                <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm resize-none" placeholder="Describe your requirement..."></textarea>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-all shadow-md shadow-amber-500/10">
                Submit Inquiry
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Section: Full Width Google Map */}
      <div className="w-full h-[400px] border-t border-slate-800 grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700">
        <iframe 
          title="NR Aquafront Map"
          // Corrected Google Maps Embed Link
          src="https://maps.google.com/maps?q=NR+Aqua+Front,+Tank+Shore+Rd,+BTM+Layout,+Bengaluru,+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}