import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Businesses from './components/Businesses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget'; // <-- Import added
import FoundersSection from './components/FoundersSection';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-amber-500 selection:text-slate-950 antialiased relative">
      <Navbar />
      <main>
        <Hero />
        <Businesses />
        <About />
        <FoundersSection />
        <Contact />
      </main>
      <Footer />
      <ChatWidget /> {/* <-- Rendered here so it floats over everything */}
    </div>
  );
}