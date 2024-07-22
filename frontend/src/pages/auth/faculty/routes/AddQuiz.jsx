import React, { useState, useEffect } from "react";
import Loader from "../../../../components/Loader";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import useData from "../../AllData";
import axios from 'axios';
import Swal from "sweetalert2";

const creatorOptions = {
  showLogicTab: false,
  isAutoSave: true,
};

function AddQuiz() {
  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState(null);
  const data = useData();

  useEffect(() => {
    const surveyCreator = new SurveyCreator(creatorOptions);
    setCreator(surveyCreator);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleJSON = () => {
    let facultyName = "";
    let allowedStudents = "";
  
    if (creator) {
      const faculty_id = localStorage.getItem('id');
      const faculties = data.faculty;
  
      faculties.forEach((faculty) => {
        if (faculty._id == faculty_id) {
          facultyName = faculty.name;
          allowedStudents = faculty.mentees.toString();
        }
      });
  
      const testData = JSON.stringify(creator.JSON, null, 2);
      console.log("Payload:", {
        facultyName: facultyName,
        allowedStudents: allowedStudents,
        testData: testData,
        "active": true
      });
  
      axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/tests',
        headers: { 
          'Content-Type': 'application/json'
        },
        data: {
          facultyName: facultyName,
          allowedStudents: allowedStudents,
          testData: testData,
          "active": true
        }
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
      })
      .catch((error) => {
        console.log("Request Error:", error.response.data); // Log error response data
        Swal.fire({
          icon: "warning",
          title: "Warning",
          text: error.response.data.message, // Show detailed error message
        });
      });
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <SurveyCreatorComponent creator={creator} />
          <button onClick={handleJSON} className="absolute right-8 bottom-8 bg-blue-700 text-white p-4 px-8 rounded-2xl">
            Add Quizz
          </button>
        </div>
      )}
    </div>
  );
}

export default AddQuiz;
