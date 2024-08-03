import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const AddFaculty = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [file, setFile] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [mentees, setMentees] = useState("");
  const [password, setPassword] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);
    axios.post(`${BASE_URL}faculties/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data,
      });
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    });
  };

  const handleAdd = () => {
    console.log("Add");
    axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: `${BASE_URL}faculties`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
        "department": department,
        "mentees": mentees.split(","),
        "password": password,
        "active": true
      })
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: "warning",
        title: "warning",
        text: error.response.data.message,
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
          <div className="flex space-x-4 justify-end">
            <input type="file" onChange={handleFileChange} />
            <button
              type="button"
              onClick={handleFileUpload}
              className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Upload CSV
            </button>
            <button
              type="button"
              className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Export to Excel file
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              placeholder="Enter Email"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Phone No.</label>
            <input
              type="tel"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
              placeholder="Enter Phone no."
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Department</label>
            <input
              type="text"
              value={department}
              onChange={(e)=> setDepartment(e.target.value)}
              placeholder="Choose Department"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Mentees</label>
            <textarea
              type="text"
              placeholder='Type USN of students seperated by comma ( , )'
              value={mentees}
              onChange={(e)=> setMentees(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-2/3"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Enter Password"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-start space-x-4 mt-6">
            <button
              type="button"
              onClick={handleAdd}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Add
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFaculty;
