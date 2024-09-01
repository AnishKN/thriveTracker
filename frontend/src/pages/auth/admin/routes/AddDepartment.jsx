import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [ name,setName ] = useState("");
  const [ hodName,sethodName ] = useState("");

  const handleAdd = () => {
    axios
      .request({
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}department`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          name: name,
          hodName: hodName,
        }),
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
        navigate("/admin/viewDepartment");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: "warning",
          text: error.response.data.message,
        });
      });
  };

  return (
    <div className="h-full flex flex-col items-center p-8">
      <div className="w-full">
        <nav className="mb-6 text-gray-600">
          <span className="text-gray-400">Dashboard &gt; </span>
          <span className="text-gray-400">Department &gt; </span>
          <span>Add Department</span>
        </nav>
        <div className="flex justify-between items-center">
          <div className="box">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Add Department
            </h1>
            <p className="text-gray-600 mb-6">Add new Department here</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Department Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="block text-gray-700 w-1/3">Head of the Department</label>
            <input
              type="text"
              placeholder="Enter HOD Name"
              value={hodName}
              onChange={(e)=> sethodName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
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

export default AddDepartment;
