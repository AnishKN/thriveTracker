import React from 'react';
import WOW from 'react-wow';
import 'animate.css';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen bg-blue-500 flex items-center justify-center text-white">
    <div className="max-w-4xl mx-auto text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to ThriveTracker</h1>
      <p className="text-xl mb-6">Track and manage your educational resources effortlessly.</p>
      <NavLink to="/login">
        <button className="bg-white text-blue-500 px-8 py-3 rounded-full shadow-md hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Get Started
        </button>
      </NavLink>
    </div>
  </section>
  
  );
};

export default HeroSection;
