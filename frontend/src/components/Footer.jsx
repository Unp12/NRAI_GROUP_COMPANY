import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-3 text-sm sm:text-base text-center">
        
        <p>
          Contact us: <a href="mailto:nitin@nrgroupindia.com" className="text-amber-600 hover:underline">nitin@nrgroupindia.com</a>
        </p>
        
        <p>
          Contact us : +91 9845454774 | +1 (857) 264 - 9519
        </p>
        
        <p className="mt-4 text-slate-500 text-xs sm:text-sm">
          ©2026 NR Groupindia. All rights reserved
        </p>

      </div>
    </footer>
  );
}