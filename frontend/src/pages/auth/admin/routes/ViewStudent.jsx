import React, { useEffect, useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";

const ViewStudent = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const [ students,setStudents ] = useState([]);

    useEffect(() => {
        axios.request({
            method: 'get',
            maxBodyLength: Infinity,
            url: `${BASE_URL}students`,
            headers: { }
          })
        .then((response) => {
            setStudents(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
                    <tr>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">USN</div>
                        </th>
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
                            <div className="font-semibold text-left">Mentor</div>
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
                    {
                        students.map(student => {
                            return (
                                <tr key={student._id}>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="font-medium text-gray-800 dark:text-gray-100">{student.USN}</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{student.name}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{student.email}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{student.phone}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{student.mentor}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">{student.department}</div>
                                    </td>
                                    <td className="p-2 flex items-center justify-center">
                                        <div className="flex gap-2 text-xl"><LuFileEdit /><MdOutlineDeleteOutline /></div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewStudent;

