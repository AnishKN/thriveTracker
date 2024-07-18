import React from 'react';
import WOW from 'react-wow';
import 'animate.css';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <WOW animation="fadeInLeft">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">About ThriveTracker</h2>
        </WOW>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <WOW animation="fadeInLeft" delay="0.2s">
            <p className="text-gray-600 text-center md:text-left mb-6 md:mb-0 max-w-lg">
              ThriveTracker is a comprehensive platform designed to streamline the management and tracking of educational resources. Our platform provides robust features to efficiently monitor students, faculties, departments, and quizzes.
            </p>
          </WOW>
          <WOW animation="fadeInLeft" delay="0.4s">
            <img src="https://placehold.co/600x300" alt="About Us Image" className="rounded-lg shadow-md md:ml-8 max-w-full h-auto" />
          </WOW>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
