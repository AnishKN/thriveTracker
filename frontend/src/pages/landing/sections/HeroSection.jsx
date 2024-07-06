import React from 'react';
import WOW from 'react-wow';
import 'animate.css';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen bg-blue-500 flex items-center justify-center text-white">
      <WOW animation="fadeIn">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to ThriveTracker</h1>
          <p className="text-xl mb-6">Track and manage your educational resources effortlessly.</p>
          <NavLink to="/login">
            <button className="bg-white text-blue-500 px-6 py-3 rounded-full">Get Started</button>
          </NavLink>
        </div>
      </WOW>
    </section>
  );
};

export default HeroSection;
