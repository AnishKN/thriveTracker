import React from 'react';
import { FaSearch, FaBell, FaQuestionCircle, FaCalendarAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search for anything..."
            className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaCalendarAlt />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaQuestionCircle />
        </button>
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaBell />
        </button>
        <div className="flex items-center space-x-2">
          <div className="text-sm font-medium">Anish</div>
          <div className="text-sm text-gray-500">Admin</div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <i className="fas fa-robot"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
