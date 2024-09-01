import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import useData from "../../AllData.js";

const AddStudent = () => {
  const data = useData();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [usn, setUsn] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");


  const departments = data.departments;
  console.log(departments);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!usn || !name || !email || !phone || !department || !password) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "All fields are required.",
      });
      return;
    }
    if (phone.length < 10) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Enter a valid phone number.",
      });
      return;
    }
    if (password.length < 8) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Password is too small.",
      });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Enter a valid email address.",
      });
      return;
    }

    try {
      await axios.post(`${BASE_URL}students`, {
        usn,
        name,
        email,
        phone,
        department,
        password,
        active: true
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Student added successfully.",
      });
      // Clear form fields
      setUsn("");
      setName("");
      setEmail("");
      setPhone("");
      setDepartment("");
      setPassword("");
      navigate("/admin/viewStudent");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error || "An error occurred while adding the student.",
      });
    }
  };

  return (
    <div className="h-full flex flex-col items-center p-8">
      <div className="w-full">
        <nav className="mb-6 text-gray-600">
          <span className="text-gray-400">Dashboard &gt; </span>
          <span className="text-gray-400">Student &gt; </span>
          <span>Add Student</span>
        </nav>
        <div className="flex justify-between items-center">
          <div className="box">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Add Student
            </h1>
            <p className="text-gray-600 mb-6">Add new student here</p>
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">USN</label>
            <input
              type="text"
              placeholder="Enter USN"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Phone No.</label>
            <input
              type="tel"
              placeholder="Enter Phone no."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-2/3"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.name} value={dept.name}>{dept.name}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              className="bg-black my-8 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
