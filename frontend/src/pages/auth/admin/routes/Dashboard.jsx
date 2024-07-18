import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaClipboardList } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="text-2xl font-bold mb-6">Hello, Anish</div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaUserGraduate className="text-3xl text-blue-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">450</div>
            <div className="text-gray-500">Total Students</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaChalkboardTeacher className="text-3xl text-green-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">50</div>
            <div className="text-gray-500">Total Active Faculties</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaBuilding className="text-3xl text-yellow-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">10</div>
            <div className="text-gray-500">Total Departments</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaClipboardList className="text-3xl text-red-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">10</div>
            <div className="text-gray-500">Active Quizzes</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Active Quizzes</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Quiz</button>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-lg font-bold">IQ Test - 1</div>
              <div className="text-gray-500">Expires at: 02-07-2024 12:00 AM</div>
            </div>
            <div className="text-green-500">Active</div>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-lg font-bold">EQ Test - 1</div>
              <div className="text-gray-500">Expires at: 01-06-2024 05:45 AM</div>
            </div>
            <div className="text-green-500">Active</div>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
            <div>
              <div className="text-lg font-bold">IQ Test - 2</div>
              <div className="text-gray-500">Expires at: 15-08-2024 06:20 PM</div>
            </div>
            <div className="text-green-500">Active</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
