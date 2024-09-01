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
import useData from "../../AllData";


function Dashboard() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const data = useData();
  const students = data.students;
  const tests = data.tests;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="mx-45 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 w-[80%] m-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome Back, Faculty!
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Have a look at your students performace
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaUserGraduate className="text-3xl text-blue-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">{data.counts.studentCount}</div>
            <div className="text-gray-500">Your Students</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaChalkboardTeacher className="text-3xl text-green-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">{data.counts.facultyCount}</div>
            <div className="text-gray-500">Total Faculties</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaBuilding className="text-3xl text-yellow-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">{data.counts.departmentCount}</div>
            <div className="text-gray-500">Departments</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaClipboardList className="text-3xl text-red-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">{data.counts.testCount}</div>
            <div className="text-gray-500">Active Quizzes</div>
          </div>
        </div>
      </div>
      <div className=" mt-5 gap-5">
        <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-full">
          <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 ">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">
              Your Students
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto flex justify-center">
              <table className="table-auto">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">USN</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Phone</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Department</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
                  {students.map((student) => {
                    return (
                      <tr key={student.id}>
                        <td className="p-2 pr-10 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800 dark:text-gray-100">
                              {student.USN}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 pr-10 whitespace-nowrap">
                          <div className="text-left">{student.name}</div>
                        </td>
                        <td className="p-2 pr-10 whitespace-nowrap">
                          <div className="text-left">{student.phone}</div>
                        </td>
                        <td className="p-2 pr-10 whitespace-nowrap">
                          <div className="text-left">{student.department}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-full my-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Active Quizzes</h2>
            <NavLink to="addquiz">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Quiz
              </button>
            </NavLink>
          </div>
          <div className="space-y-4">
          {tests.map((test, index) => {
            const testData = JSON.parse(test.testData);
            return (
              <div
                key={test._id}
                className="p-6 bg-gray-50 shadow-sm rounded-xl flex justify-between items-center hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="text-xl font-semibold text-gray-800">
                    {testData.title || "Quiz - " + (index + 1)}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Posted by: {test.facultyName}
                  </div>
                </div>
                <div className="text-sm font-medium text-green-600">Active</div>
              </div>

            )
          })}
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default Dashboard;
