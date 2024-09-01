import React, { useEffect, useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const ViewStudent = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    USN: "",
    name: "",
    email: "",
    phone: "",
    mentor: "",
    department: ""
  });

  useEffect(() => {
    axios.get(`${BASE_URL}students`)
      .then((response) => {
        setStudents(response.data);
        console.log(students);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${BASE_URL}students/${id}`)
          .then(() => {
            setStudents(students.filter(student => student._id !== id));
            Swal.fire(
              'Deleted!',
              'Student has been deleted.',
              'success'
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setFormData({
      USN: student.USN,
      name: student.name,
      email: student.email,
      phone: student.phone,
      mentor: student.mentor,
      department: student.department
    });
    setIsModalOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.patch(`${BASE_URL}students/${selectedStudent._id}`, formData)
      .then((response) => {
        setStudents(students.map(student => 
          student._id === selectedStudent._id ? response.data : student
        ));
        setIsModalOpen(false);
        Swal.fire(
          'Updated!',
          'Student details have been updated.',
          'success'
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-gray-800 my-4 text-2xl">Students:</h2>
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap">USN</th>
            <th className="p-2 whitespace-nowrap">Name</th>
            <th className="p-2 whitespace-nowrap">Email</th>
            <th className="p-2 whitespace-nowrap">Phone</th>
            <th className="p-2 whitespace-nowrap">Department</th>
            <th className="p-2 whitespace-nowrap text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {students.map(student => (
            <tr key={student._id}>
              <td className="p-2">{student.USN}</td>
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.email}</td>
              <td className="p-2">{student.phone}</td>
              <td className="p-2 font-medium text-green-500">{student.department}</td>
              <td className="p-2 flex items-center justify-center space-x-2">
                <button onClick={() => handleEdit(student)} className="text-xl">
                  <LuFileEdit />
                </button>
                <button onClick={() => handleDelete(student._id)} className="text-xl text-red-500">
                  <MdOutlineDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Student Modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} center>
        <h2 className="text-xl font-bold mb-4">Edit Student</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700">USN</label>
            <input
              type="text"
              name="USN"
              value={formData.USN}
              onChange={handleFormChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleFormChange}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ViewStudent;
