import React, { useEffect, useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css'; // Import styles

const ViewFaculty = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [faculties, setFaculties] = useState([]);
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}faculties`)
            .then(response => {
                setFaculties(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleEdit = (faculty) => {
        setSelectedFaculty(faculty);
        setOpenEditModal(true);
    };

    const handleDelete = (faculty) => {
        setSelectedFaculty(faculty);
        setOpenDeleteModal(true);
    };

    const handleUpdateFaculty = () => {
        axios.patch(`${BASE_URL}faculties/${selectedFaculty._id}`, selectedFaculty)
            .then(response => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Faculty updated successfully",
                });
                setFaculties(faculties.map(faculty => faculty._id === selectedFaculty._id ? response.data : faculty));
                setOpenEditModal(false);
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.response?.data?.message || "An error occurred while updating the faculty.",
                });
            });
    };

    const handleConfirmDelete = () => {
        axios.delete(`${BASE_URL}faculties/${selectedFaculty._id}`)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Faculty deleted successfully",
                });
                setFaculties(faculties.filter(faculty => faculty._id !== selectedFaculty._id));
                setOpenDeleteModal(false);
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.response?.data?.message || "An error occurred while deleting the faculty.",
                });
            });
    };

    return (
        <div className="overflow-x-auto">
            <h2 className="text-gray-800 my-4 text-2xl">Faculties:</h2>
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
                    <tr>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Name</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Email</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Phone</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Department</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">Action</div>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
                    {faculties.map(faculty => (
                        <tr key={faculty._id}>
                            <td className="p-2 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="font-medium text-gray-800 dark:text-gray-100">{faculty.name}</div>
                                </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{faculty.email}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left">{faculty.phone}</div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                                <div className="text-left font-medium text-green-500">{faculty.department}</div>
                            </td>
                            <td className="p-2 flex items-center justify-center">
                                <div className="flex gap-2 text-xl">
                                    <LuFileEdit onClick={() => handleEdit(faculty)} className="cursor-pointer" />
                                    <MdOutlineDeleteOutline onClick={() => handleDelete(faculty)} className="cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
                <h2 className="text-xl font-semibold">Edit Faculty</h2>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="block text-gray-700 w-1/3">Name</label>
                        <input
                            type="text"
                            value={selectedFaculty?.name || ""}
                            onChange={(e) => setSelectedFaculty({ ...selectedFaculty, name: e.target.value })}
                            className="border border-gray-300 rounded-md p-2 w-2/3"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block text-gray-700 w-1/3">Email</label>
                        <input
                            type="email"
                            value={selectedFaculty?.email || ""}
                            onChange={(e) => setSelectedFaculty({ ...selectedFaculty, email: e.target.value })}
                            className="border border-gray-300 rounded-md p-2 w-2/3"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block text-gray-700 w-1/3">Phone</label>
                        <input
                            type="tel"
                            value={selectedFaculty?.phone || ""}
                            onChange={(e) => setSelectedFaculty({ ...selectedFaculty, phone: e.target.value })}
                            className="border border-gray-300 rounded-md p-2 w-2/3"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label className="block text-gray-700 w-1/3">Department</label>
                        <input
                            type="text"
                            value={selectedFaculty?.department || ""}
                            onChange={(e) => setSelectedFaculty({ ...selectedFaculty, department: e.target.value })}
                            className="border border-gray-300 rounded-md p-2 w-2/3"
                        />
                    </div>
                    <div className="flex justify-end space-x-4 mt-6">
                        <button
                            type="button"
                            onClick={handleUpdateFaculty}
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
                <h2 className="text-xl font-semibold">Confirm Delete</h2>
                <p>Are you sure you want to delete this faculty?</p>
                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        type="button"
                        onClick={handleConfirmDelete}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                    >
                        Delete
                    </button>
                    <button
                        type="button"
                        onClick={() => setOpenDeleteModal(false)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default ViewFaculty;
