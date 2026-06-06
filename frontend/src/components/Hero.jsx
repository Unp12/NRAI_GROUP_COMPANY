import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/home1.png',
    '/home2.png',
    '/home3.png',
    '/home4.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide}')` }}
          />
          {/* Subtle dark tint for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Main Content Overlay: Transparent with no blur */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-black/20 p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md">
            India’s Integrated Real Estate, <br className="hidden sm:inline" />
            Manufacturing &amp; AI Platform
          </h1>
          
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Building high-value assets through design, engineering, construction, luxury, and intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#businesses" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/90 text-slate-900 font-bold hover:bg-white transition-all shadow-xl hover:scale-105">
              Explore Our Business
            </a>
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold hover:bg-white/20 transition-all shadow-xl hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 bg-white/90 hover:bg-white text-slate-900 rounded-md shadow-lg transition-all focus:outline-none hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 bg-white/90 hover:bg-white text-slate-900 rounded-md shadow-lg transition-all focus:outline-none hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 shadow-md ${
              index === currentSlide ? 'w-8 bg-amber-500' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}