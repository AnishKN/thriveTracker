import React from 'react';
import WOW from 'react-wow';
import 'animate.css';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <WOW animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        </WOW>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WOW animation="fadeInUp" delay="0.2s">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1.</p>
            </div>
          </WOW>
          <WOW animation="fadeInUp" delay="0.4s">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2.</p>
            </div>
          </WOW>
          <WOW animation="fadeInUp" delay="0.6s">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3.</p>
            </div>
          </WOW>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
