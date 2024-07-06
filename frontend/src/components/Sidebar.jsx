import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaUserTie, FaUserGraduate, FaCogs, FaChartBar, FaLifeRing, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    navigate('/');
  }

  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-center font-bold text-xl">
        ThriveTracker
      </div>
      <ul className="flex-grow">
        <NavLink to="/admin/">
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <FaHome className="mr-2" />
            <p>Dashboard</p>
          </li>
        </NavLink>
        <NavLink to="/admin/addDepartment">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <FaBuilding className="mr-2" />
          <p >Add Departments</p>
        </li>
        </NavLink>
        <NavLink to="/admin/addFaculty">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <FaUserTie className="mr-2" />
          <p >Add Faculty</p>
        </li>
        </NavLink>
        <NavLink to="/admin/addStudent">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <FaUserGraduate className="mr-2" />
          <p >Add Students</p>
        </li>
        </NavLink>
        <NavLink to="/admin/configureStudents">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <FaCogs className="mr-2" />
          <p >Configure Students</p>
        </li>
        </NavLink>
        <NavLink to="/admin/reports">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <FaChartBar className="mr-2" />
          <p >Reports</p>
        </li>
        </NavLink>
        <NavLink to="/admin/settings">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <FaCogs className="mr-2" />
          <p >Settings</p>
        </li>
        </NavLink>
        <NavLink to="/admin/support">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <FaLifeRing className="mr-2" />
          <p >Support</p>
        </li>
        </NavLink>
        <NavLink to="/admin/profile">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <FaUser className="mr-2" />
          <p >Profile</p>
        </li>
        </NavLink>
      </ul>
      <div onClick={handleLogout} className="p-4 hover:bg-gray-700 flex items-center">
        <FaSignOutAlt className="mr-2" />
        <p >Log Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
