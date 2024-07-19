import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaBuilding, FaClipboardList } from 'react-icons/fa';
import Image01 from '../../../../images/user-36-05.jpg';
import Image02 from '../../../../images/user-36-06.jpg';
import Image03 from '../../../../images/user-36-07.jpg';
import Image04 from '../../../../images/user-36-08.jpg';
import Image05 from '../../../../images/user-36-09.jpg';

const Dashboard = () => {
  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      location: 'Asst. Prof',
      spent: 'B.Tech (CSE)',
    },
    {
      id: '1',
      image: Image02,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      location: 'HOD',
      spent: 'B.Tech (ECE)',
    },
    {
      id: '2',
      image: Image03,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      location: 'Asst. Prof',
      spent: 'MCA',
    },
    {
      id: '3',
      image: Image04,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      location: 'Asst. Prof',
      spent: 'MBA',
    },
    {
      id: '4',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      location: 'Asst. Prof',
      spent: 'B.Tech (Civil)',
    },
  ];

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

      <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Faculty</h2>
      </header>      
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Department</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Role</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-gray-800 dark:text-gray-100">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.spent}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.location}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

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


