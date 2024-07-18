import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './sections/Navbar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import FeaturesSection from './sections/FeaturesSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import TestimonialsSection from './sections/TestimonialsSection.jsx';
import SpecialitiesSection from './sections/SpecialitiesSection.jsx';
import NewsletterSection from './sections/NewsletterSection.jsx';
import Footer from './sections/Footer.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="w-10/12 m-auto">
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <SpecialitiesSection />
      </div>
      <NewsletterSection />
      <Footer />
    </>
  )
}

export default Home
