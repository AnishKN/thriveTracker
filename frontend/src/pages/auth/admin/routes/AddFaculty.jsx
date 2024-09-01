import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const AddFaculty = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [mentees, setMentees] = useState([]);
  const [password, setPassword] = useState("");
  const [departments, setDepartments] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch departments
    axios.get('http://localhost:5000/department')
      .then(response => {
        setDepartments(response.data.data.map(dept => ({
          value: dept.name,
          label: dept.name
        })));
      })
      .catch(error => {
        console.log("Error fetching departments:", error);
      });

    // Fetch students
    axios.get('http://localhost:5000/students')
      .then(response => {
        setStudents(response.data.map(student => ({
          value: student.USN,
          label: student.USN // assuming 'usn' is the property in student object
        })));
      })
      .catch(error => {
        console.log("Error fetching students:", error);
      });
  }, []);

  const handleAdd = () => {
    // Check if all required fields are filled
    if (!name || !email || !phone || !department || !password || mentees.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "All fields are required.",
      });
      return;
    }

    // Validate phone number (should be at least 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Enter a valid phone number with at least 10 digits.",
      });
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Enter a valid email address.",
      });
      return;
    }

    if (password.length<8) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Password is too small.",
      });
      return;
    }

    // Proceed with the API request if all validations pass
    axios.post(`${BASE_URL}faculties`, {
      name,
      email,
      phone,
      department,
      mentees: mentees.map(mentee => mentee.value),
      password,
      active: true
    })
      .then(response => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
        // Clear form fields
        setName("");
        setEmail("");
        setPhone("");
        setDepartment("");
        setMentees([]);
        setPassword("");
        navigate("/admin/viewFaculty");
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.message || "An error occurred while adding the faculty.",
        });
      });
  }


  return (
    <div className="h-full flex flex-col items-center p-8">
      <div className="w-full">
        <nav className="mb-6 text-gray-600">
          <span className="text-gray-400">Dashboard &gt; </span>
          <span className="text-gray-400">Faculty &gt; </span>
          <span>Add Faculty</span>
        </nav>
        <div className="flex justify-between items-center">
          <div className="box">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Add Faculty
            </h1>
            <p className="text-gray-600 mb-6">Add new faculty here</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Phone No.</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone no."
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
              {departments.map(dept => (
                <option key={dept.label} value={dept.value}>{dept.label}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Mentees</label>
            <Select
              isMulti
              options={students}
              value={mentees}
              onChange={(selectedOptions) => setMentees(selectedOptions)}
              className="w-2/3"
              placeholder="Select Mentees"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={handleAdd}
              className="bg-black my-8 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFaculty;
