import React from "react";
import { useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import Image01 from "../../../../images/user-36-05.jpg";
import Image02 from "../../../../images/user-36-06.jpg";
import Image03 from "../../../../images/user-36-07.jpg";
import Image04 from "../../../../images/user-36-08.jpg";
import Image05 from "../../../../images/user-36-09.jpg";
import { NavLink } from "react-router-dom";



function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Anish",
      email: "1CR22MC001",
      location: "7019316634",
      spent: "MCA",
    },
    {
      id: "1",
      image: Image02,
      name: "Akash",
      email: "1CR22MC009",
      location: "9632587410",
      spent: "MCA",
    },
    {
      id: "2",
      image: Image03,
      name: "Sarvesh",
      email: "1CR22MC079",
      location: "7458963210",
      spent: "MCA",
    },
    {
      id: "3",
      image: Image04,
      name: "Likitha",
      email: "1CR22MC040",
      location: "8457962130",
      spent: "MCA",
    },
    {
      id: "4",
      image: Image05,
      name: "Rohan",
      email: "1CR22MC085",
      location: "6365478109",
      spent: "MCA",
    },
  ];
  return (
    <div className="mx-45 px-4 py-8 sm:px-6 sm:py-12 lg:px-32">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome Back, Student!
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Have a look at your faculty performace
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaUserGraduate className="text-3xl text-blue-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">12</div>
            <div className="text-gray-500">Total Faculty</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaChalkboardTeacher className="text-3xl text-green-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-gray-500">Your Active Quizzes</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaBuilding className="text-3xl text-yellow-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">10</div>
            <div className="text-gray-500">Announcements</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaClipboardList className="text-3xl text-red-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">10</div>
            <div className="text-gray-500">Tasks</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Active Quizzes</h2>
          </div>
          <div className="space-y-4">
          <NavLink to="test">
            <div className="p-12 bg-blue-800 rounded-lg flex justify-between items-center">
              <div>
                <div className="text-lg font-bold text-white">IQ Test - 1</div>
                <div className="text-gray-100">
                  Expires at: 02-07-2024 12:00 AM
                </div>
              </div>
              <div className="text-green-50 font-bold">Active</div>
            </div>
            </NavLink>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
