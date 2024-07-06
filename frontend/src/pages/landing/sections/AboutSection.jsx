import React from 'react';
import WOW from 'react-wow';
import 'animate.css';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <WOW animation="fadeInLeft">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        </WOW>
        <WOW animation="fadeInLeft">
          <p className="text-gray-600 text-center">ThriveTracker is designed to help you manage and track your educational resources seamlessly. Our platform offers a range of features that make it easy to keep track of your students, faculties, departments, and quizzes.</p>
        </WOW>
      </div>
    </section>
  );
};

export default AboutSection;
