import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Education />
        <Expertise />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
