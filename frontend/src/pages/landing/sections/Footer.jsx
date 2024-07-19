import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">ThriveTracker</h3>
            <p className="text-gray-400">Track and manage your educational resources effortlessly.</p>
            <p className="text-gray-400">Made with ❤️ by Anishkrishna and A R Sai Tejas</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap">
              <li className="mr-4"><a href="#features" className="hover:text-gray-300 transition duration-300">Dashboard</a></li>
              <li className="mr-4"><a href="#testimonials" className="hover:text-gray-300 transition duration-300">Features</a></li>
              <li className="mr-4"><a href="#specialities" className="hover:text-gray-300 transition duration-300">About Us</a></li>
              <li className="mr-4"><a href="#newsletter" className="hover:text-gray-300 transition duration-300">Testimonials</a></li>
              
            </ul>
          </nav>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm flex justify-between">
          <p>&copy; {new Date().getFullYear()} ThriveTracker. All Rights Reserved.</p>
          <div>
            <a href="#" className="mr-4 hover:text-gray-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
