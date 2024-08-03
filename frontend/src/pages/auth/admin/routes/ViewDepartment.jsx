import React, { useEffect, useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";

const ViewDepartment = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: `${BASE_URL}department`,
        headers: {},
      })
      .then((response) => {
        setDepartments(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Sl No</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Department Name</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">
                Head of the Department
              </div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Action</div>
            </th>
          </tr>
        </thead>

        <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
          {departments.map((department, index) => {
            return (
              <tr key={department._id}>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="font-medium text-gray-800 dark:text-gray-100">{index + 1}</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">{department.name}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">{department.hodName}</div>
                </td>
                <td className="p-2 flex items-center justify-center">
                  <div className="flex gap-2 text-xl">
                    <LuFileEdit />
                    <MdOutlineDeleteOutline />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDepartment;
