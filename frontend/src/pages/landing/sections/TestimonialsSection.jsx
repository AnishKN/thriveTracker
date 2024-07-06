import React from 'react';
import WOW from 'react-wow';
import 'animate.css';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <WOW animation="fadeInRight">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        </WOW>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WOW animation="fadeInRight" delay="0.2s">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"ThriveTracker has revolutionized the way we manage our educational resources. It's user-friendly and incredibly efficient."</p>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-500">Principal, ABC School</p>
            </div>
          </WOW>
          <WOW animation="fadeInRight" delay="0.4s">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"I love how easy it is to track the progress of our students and manage quizzes with ThriveTracker."</p>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-500">Teacher, XYZ School</p>
            </div>
          </WOW>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
