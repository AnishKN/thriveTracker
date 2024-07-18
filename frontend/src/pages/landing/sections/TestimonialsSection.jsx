import React from 'react';
import WOW from 'react-wow';
import 'animate.css';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <WOW animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-12">What People are Saying</h2>
        </WOW>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WOW animation="fadeInUp" delay="0.2s">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-gray-700 mb-4 leading-relaxed">"ThriveTracker has truly transformed our educational management. It's intuitive, efficient, and incredibly powerful."</p>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">Principal, ABC School</p>
            </div>
          </WOW>
          <WOW animation="fadeInUp" delay="0.4s">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <p className="text-gray-700 mb-4 leading-relaxed">"Using ThriveTracker has made my teaching life much easier. I can focus more on student progress and less on administrative tasks."</p>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Teacher, XYZ School</p>
            </div>
          </WOW>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
