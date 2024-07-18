import React from 'react';
import WOW from 'react-wow';
import 'animate.css';

const SpecialitiesSection = () => {
  return (
    <section id="specialities" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <WOW animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
        </WOW>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WOW animation="fadeInUp" delay="0.2s">
            <div className="specialty-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
              <h3 className="text-2xl font-bold mb-4">Automated Data Collection</h3>
              <p className="text-gray-700">Streamlines data collection through digital quizzes, surveys, and integration with existing educational tools.</p>
            </div>
          </WOW>
          <WOW animation="fadeInUp" delay="0.4s">
            <div className="specialty-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
              <h3 className="text-2xl font-bold mb-4">Full Spectrum Data Capture</h3>
              <p className="text-gray-700">Records a wide range of metrics including academic performance, IQ, EQ, and other relevant factors, providing a holistic view of student development.</p>
            </div>
          </WOW>
          <WOW animation="fadeInUp" delay="0.6s">
            <div className="specialty-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
              <h3 className="text-2xl font-bold mb-4">Predictive Insights</h3>
              <p className="text-gray-700">Utilizes machine learning algorithms to predict future performance trends and identify emerging issues, aiding proactive intervention planning.</p>
            </div>
          </WOW>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSection;
