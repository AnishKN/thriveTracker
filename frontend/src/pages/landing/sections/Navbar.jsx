import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="font-bold text-xl">ThriveTracker</div>
      <div className="space-x-4">
        <a href="#hero" className="hover:text-blue-500">Home</a>
        <a href="#features" className="hover:text-blue-500">Features</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#testimonials" className="hover:text-blue-500">Testimonials</a>
        <a href="#specialities" className="hover:text-blue-500">Specialities</a>
        <a href="#newsletter" className="hover:text-blue-500">Newsletter</a>
      </div>
    </nav>
  );
};

export default Navbar;
