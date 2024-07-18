import React from 'react';

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="py-20 bg-blue-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6">Stay updated with the latest news, features, and educational insights from ThriveTracker.</p>
        <form className="max-w-lg mx-auto">
          <div className="flex items-center justify-center">
            <input type="email" className="bg-white border-2 border-gray-300 focus:border-blue-500 rounded-l-md px-4 py-2 outline-none" placeholder="Enter your email address" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
