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
    <div className="mx-45 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome Back, Faculty!
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Have a look at your students performace
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <button
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
            type="button"
          >
            <span className="text-sm font-medium"> View Report </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>

          <button
            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
            type="button"
          >
            Create Quiz
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-10">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <FaUserGraduate className="text-3xl text-blue-500 mr-4" />
          <div>
            <div className="text-2xl font-bold">12</div>
            <div className="text-gray-500">Your Students</div>
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
      <div className="flex mt-5 gap-5">
        <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl w-1/2">
          <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 ">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">
              Your Students
            </h2>
          </header>
          <div className="p-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">USN</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Department</div>
                    </th>
                    <th className="p-2 pl-10 whitespace-nowrap">
                      <div className="font-semibold text-left">Phone</div>
                    </th>
                    <th className="p-2 pl-10 whitespace-nowrap">
                      <div className="font-semibold text-left">Actions</div>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
                  {customers.map((customer) => {
                    return (
                      <tr key={customer.id}>
                        <td className="p-2 pr-10 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={customer.image}
                                width="40"
                                height="40"
                                alt={customer.name}
                              />
                            </div>
                            <div className="font-medium text-gray-800 dark:text-gray-100">
                              {customer.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 pr-10 whitespace-nowrap">
                          <div className="text-left">{customer.email}</div>
                        </td>
                        <td className="p-2  whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {customer.spent}
                          </div>
                        </td>
                        <td className="p-2 pl-10 whitespace-nowrap">
                          <div className="text-md text-left">
                            {customer.location}
                          </div>
                        </td>
                        <td className="p-2 pl-10 whitespace-nowrap">
                          <div className="flex text-md text-left">
                            <div>
                              <button>
                                <svg
                                  width="20px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="SVGRepo_bgCarrier"
                                    stroke-width="0"
                                  ></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <path
                                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                      stroke="#000000"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                    <path
                                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                      stroke="#000000"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></path>
                                  </g>
                                </svg>
                              </button>
                            </div>

                            <button className="pl-2"><div>
                              <button onClick={handleOpen} className="">
                              <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5001 6H3.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.5 11L10 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14.5 11L14 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#1C274C" stroke-width="1.5"></path> <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                              </button>

                              

                              <CSSTransition
                                in={isOpen}
                                timeout={300}
                                classNames="modal"
                                unmountOnExit
                              >
                                
                                
                                <div
                                  className="fixed inset-0 z-10 overflow-y-auto"
                                  aria-labelledby="modal-title"
                                  role="dialog"
                                  aria-modal="true"
                                >
                                  <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                                    <span
                                      className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                      aria-hidden="true"
                                    >
                                      &#8203;
                                    </span>

                                    <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                      <div>
                                        <div className="flex items-center justify-center">
                                        <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5001 6H3.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9.5 11L10 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14.5 11L14 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#1C274C" stroke-width="1.5"></path> <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                        </div>

                                        <div className="mt-2 text-center">
                                          <h3
                                            className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                            id="modal-title"
                                          >
                                            Delete User ?
                                          </h3>
                                          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                           You will have to contact super user to add 
                                          </p>
                                        </div>
                                      </div>

                                      <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                                        <a
                                          href="#"
                                          className="text-sm text-blue-500 hover:underline"
                                        >
                                          Learn more
                                        </a>

                                        <div className="sm:flex sm:items-center">
                                          <button
                                            onClick={handleClose}
                                            className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                          >
                                            Cancel
                                          </button>

                                          <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md sm:w-auto sm:mt-0 hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                            Delete
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CSSTransition>
                            </div></button>

                            
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Active Quizzes</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add Quiz
            </button>
          </div>
          <div className="space-y-4">
          <NavLink to="/faculty/quiz1">
            <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
              <div>
                <div className="text-lg font-bold">IQ Test - 1</div>
                <div className="text-gray-500">
                  Expires at: 02-07-2024 12:00 AM
                </div>
              </div>
              <div className="text-green-500">Active</div>
            </div>
            </NavLink>
            <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
              <div>
                <div className="text-lg font-bold">EQ Test - 1</div>
                <div className="text-gray-500">
                  Expires at: 01-06-2024 05:45 AM
                </div>
              </div>
              <div className="text-green-500">Active</div>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
              <div>
                <div className="text-lg font-bold">IQ Test - 2</div>
                <div className="text-gray-500">
                  Expires at: 15-08-2024 06:20 PM
                </div>
              </div>
              <div className="text-green-500">Active</div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default Dashboard;
