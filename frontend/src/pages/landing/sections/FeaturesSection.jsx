import React from 'react';
import WOW from 'react-wow';
import 'animate.css';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <WOW animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-12">ThriveTracker Features</h2>
        </WOW>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WOW animation="fadeInUp" delay="0.2s">
            <div className="feature-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Automated Data Collection</h3>
                <p className="text-gray-600">Streamlines data collection through digital quizzes, surveys, and integration with existing educational tools.</p>
              </div>
            </div>
          </WOW>
          <WOW animation="fadeInUp" delay="0.4s">
            <div className="feature-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Full Spectrum Data Capture</h3>
                <p className="text-gray-600">Records a wide range of metrics including academic performance, IQ, EQ, and other relevant factors, providing a holistic view of student development.</p>
              </div>
            </div>
          </WOW>
          <WOW animation="fadeInUp" delay="0.6s">
            <div className="feature-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Early Identification of At-Risk Students</h3>
                <p className="text-gray-600">Uses predictive analytics to identify students at risk of dropping out or underperforming, enabling timely interventions.</p>
              </div>
            </div>
          </WOW>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
