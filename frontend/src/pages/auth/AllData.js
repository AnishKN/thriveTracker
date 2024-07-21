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

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [adminResponse, facultyResponse, studentResponse, testResponse, departmentResponse] = await Promise.all([
          axios.get('http://localhost:5000/admins'),
          axios.get('http://localhost:5000/faculties'),
          axios.get('http://localhost:5000/students'),
          axios.get('http://localhost:5000/tests'),
          axios.get('http://localhost:5000/department')
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
