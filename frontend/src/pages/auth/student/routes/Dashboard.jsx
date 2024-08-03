import React, { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaClipboardList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";
import useData from "../../AllData";

function Dashboard() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [tests, setTests] = useState([]);
  const [studentName, setStudentName] = useState("");
  const data = useData();

  useEffect(() => {
    // Fetching student name
    const student_id = localStorage.getItem("id");
    const student = data.students.find((student) => student._id === student_id);
    if (student) {
      setStudentName(student.name);
    }
  }, [data.students]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}tests`)
      .then((response) => {
        setTests(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mx-45 px-4 py-8 sm:px-6 sm:py-12 lg:px-32">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome Back, {studentName}!
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Have a look at your faculty performance
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
          {tests.length === 0 ? (
            <div className="flex justify-center items-center p-12 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-500">No active quizzes available.</p>
            </div>
          ) : (
            tests.map((test) => (
              <NavLink key={test._id} to={`test/${test._id}`}>
                <div className="m-2 p-12 bg-blue-800 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold text-white">
                      {test.facultyName}
                    </div>
                    <div className="text-gray-100">
                      Expires at: 02-07-2024 12:00 AM
                    </div>
                  </div>
                  <div className="text-green-50 font-bold">Active</div>
                </div>
              </NavLink>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
