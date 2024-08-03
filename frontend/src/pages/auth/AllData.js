import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {
  const [data, setData] = useState({
    admins: [],
    faculty: [],
    students: [],
    tests: [],
    departments: [],
    counts: {
      adminCount: 0,
      facultyCount: 0,
      studentCount: 0,
      testCount: 0,
      departmentCount: 0
    }
  });

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [adminResponse, facultyResponse, studentResponse, testResponse, departmentResponse] = await Promise.all([
          axios.get(`${BASE_URL}admins`),
          axios.get(`${BASE_URL}faculties`),
          axios.get(`${BASE_URL}students`),
          axios.get(`${BASE_URL}tests`),
          axios.get(`${BASE_URL}department`)
        ]);

        setData({
          admins: adminResponse.data,
          faculty: facultyResponse.data,
          students: studentResponse.data,
          tests: testResponse.data,
          departments: departmentResponse.data.data,
          counts: {
            adminCount: adminResponse.data.length,
            facultyCount: facultyResponse.data.length,
            studentCount: studentResponse.data.length,
            testCount: testResponse.data.length,
            departmentCount: departmentResponse.data.data.length 
          }
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return data;
};

export default useData;
