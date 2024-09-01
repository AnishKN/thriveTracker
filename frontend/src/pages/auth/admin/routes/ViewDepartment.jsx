import React, { useEffect, useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";
import { Modal } from "react-responsive-modal";
import Swal from "sweetalert2";
import "react-responsive-modal/styles.css";
import "sweetalert2/src/sweetalert2.scss";

const ViewDepartment = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [departments, setDepartments] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [formData, setFormData] = useState({ name: "", hodName: "", active: true });

  // Fetch departments on mount
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}department`);
      setDepartments(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openEditModal = (department) => {
    setSelectedDepartment(department);
    setFormData({ name: department.name, hodName: department.hodName, active: department.active });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedDepartment(null);
  };

  const handleEditChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async () => {
    if (!selectedDepartment) return;
    
    try {
      await axios.patch(`${BASE_URL}department/${selectedDepartment._id}`, formData);
      Swal.fire("Updated!", "Department updated successfully.", "success");
      fetchDepartments();
      closeEditModal();
    } catch (error) {
      console.log(error);
      Swal.fire("Error!", "There was an error updating the department.", "error");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDepartment(id);
      }
    });
  };

  const deleteDepartment = async (id) => {
    try {
      await axios.delete(`${BASE_URL}department/${id}`);
      Swal.fire("Deleted!", "Department has been deleted.", "success");
      fetchDepartments();
    } catch (error) {
      console.log(error);
      Swal.fire("Error!", "There was an error deleting the department.", "error");
    }
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-gray-800 my-4 text-2xl">Departments:</h2>
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Sl No</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Department Name</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Head of the Department</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Action</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {departments.map((department, index) => (
            <tr key={department._id}>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">{index + 1}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{department.name}</div>
              </td>
              <td className="p-2 whitespace-nowrap">
                <div className="text-left">{department.hodName}</div>
              </td>
              <td className="p-2 flex items-center justify-center">
                <div className="flex gap-2 text-xl">
                  <LuFileEdit
                    className="cursor-pointer"
                    onClick={() => openEditModal(department)}
                  />
                  <MdOutlineDeleteOutline
                    className="cursor-pointer"
                    onClick={() => handleDelete(department._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      <Modal open={isEditModalOpen} onClose={closeEditModal} center>
        <h2>Edit Department</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Department Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleEditChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Head of Department</label>
            <input
              type="text"
              name="hodName"
              value={formData.hodName}
              onChange={handleEditChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <button
            type="button"
            onClick={handleEditSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Update
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ViewDepartment;
